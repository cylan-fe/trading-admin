"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useAdminStore } from "@/lib/store"
import type { Role } from "@/lib/types"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { v4 as uuidv4 } from "uuid"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "角色名称至少需要2个字符",
  }),
  description: z.string().min(5, {
    message: "描述至少需要5个字符",
  }),
  permissions: z.array(z.string()).min(1, {
    message: "至少需要选择一个权限",
  }),
})

interface RoleDialogProps {
  children: React.ReactNode
  existingRole?: Role
}

export function RoleDialog({ children, existingRole }: RoleDialogProps) {
  const { addRole, updateRole, selectedRole, setSelectedRole, permissions } = useAdminStore()
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      permissions: [],
    },
  })

  useEffect(() => {
    if (existingRole) {
      form.reset({
        name: existingRole.name,
        description: existingRole.description,
        permissions: existingRole.permissions,
      })
    } else if (selectedRole) {
      form.reset({
        name: selectedRole.name,
        description: selectedRole.description,
        permissions: selectedRole.permissions,
      })
    }
  }, [existingRole, selectedRole, form])

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (existingRole || selectedRole) {
      const roleId = existingRole ? existingRole.id : selectedRole!.id
      updateRole(roleId, values)
    } else {
      const newRole: Role = {
        id: uuidv4(),
        ...values,
        userCount: 0,
        createdAt: new Date().toISOString(),
      }
      addRole(newRole)
    }
    setOpen(false)
    form.reset()
    setSelectedRole(null)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>{existingRole || selectedRole ? "编辑角色" : "添加角色"}</DialogTitle>
          <DialogDescription>
            {existingRole || selectedRole
              ? "修改角色信息和权限，完成后点击保存"
              : "填写角色信息并分配权限，完成后点击添加"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>角色名称</FormLabel>
                  <FormControl>
                    <Input placeholder="输入角色名称" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>描述</FormLabel>
                  <FormControl>
                    <Textarea placeholder="输入角色描述" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="permissions"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">权限</FormLabel>
                    <FormDescription>选择此角色拥有的权限</FormDescription>
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="permissions"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes("all")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange(["all"])
                                } else {
                                  field.onChange([])
                                }
                              }}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-bold">所有权限</FormLabel>
                            <FormDescription>授予所有系统权限</FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    {!form.watch("permissions").includes("all") && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border rounded-md p-4">
                        {permissions.map((permission) => (
                          <FormField
                            key={permission.id}
                            control={form.control}
                            name="permissions"
                            render={({ field }) => (
                              <FormItem key={permission.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(permission.name)}
                                    onCheckedChange={(checked) => {
                                      const updatedPermissions = checked
                                        ? [...field.value, permission.name]
                                        : field.value?.filter((value) => value !== permission.name)
                                      field.onChange(updatedPermissions)
                                    }}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>{permission.name}</FormLabel>
                                  <FormDescription>{permission.description}</FormDescription>
                                </div>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">{existingRole || selectedRole ? "保存修改" : "添加角色"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
