"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useAdminStore } from "@/lib/store"
import type { PaymentMethod } from "@/lib/types"
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { v4 as uuidv4 } from "uuid"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "支付方式名称至少需要2个字符",
  }),
  type: z.enum(["bank", "card", "digital", "crypto"], {
    required_error: "请选择支付方式类型",
  }),
  status: z.enum(["active", "inactive"], {
    required_error: "请选择支付方式状态",
  }),
  fee: z.coerce.number().min(0).max(100, {
    message: "费率必须在0-100之间",
  }),
})

interface PaymentMethodDialogProps {
  children: React.ReactNode
  existingMethod?: PaymentMethod
}

export function PaymentMethodDialog({ children, existingMethod }: PaymentMethodDialogProps) {
  const { addPaymentMethod, updatePaymentMethod, selectedPaymentMethod, setSelectedPaymentMethod } = useAdminStore()
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "digital" as const,
      status: "active" as const,
      fee: 0.5,
    },
  })

  useEffect(() => {
    if (existingMethod) {
      form.reset({
        name: existingMethod.name,
        type: existingMethod.type,
        status: existingMethod.status,
        fee: existingMethod.fee,
      })
    } else if (selectedPaymentMethod) {
      form.reset({
        name: selectedPaymentMethod.name,
        type: selectedPaymentMethod.type,
        status: selectedPaymentMethod.status,
        fee: selectedPaymentMethod.fee,
      })
    }
  }, [existingMethod, selectedPaymentMethod, form])

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (existingMethod || selectedPaymentMethod) {
      const methodId = existingMethod ? existingMethod.id : selectedPaymentMethod!.id
      updatePaymentMethod(methodId, values)
    } else {
      const newMethod: PaymentMethod = {
        id: uuidv4(),
        ...values,
        transactionCount: 0,
        transactionVolume: 0,
      }
      addPaymentMethod(newMethod)
    }
    setOpen(false)
    form.reset()
    setSelectedPaymentMethod(null)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{existingMethod || selectedPaymentMethod ? "编辑支付方式" : "添加支付方式"}</DialogTitle>
          <DialogDescription>
            {existingMethod || selectedPaymentMethod
              ? "修改支付方式信息，完成后点击保存"
              : "填写支付方式信息，完成后点击添加"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>名称</FormLabel>
                  <FormControl>
                    <Input placeholder="输入支付方式名称" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>类型</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="选择支付方式类型" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="bank">银行</SelectItem>
                      <SelectItem value="card">卡</SelectItem>
                      <SelectItem value="digital">数字</SelectItem>
                      <SelectItem value="crypto">加密货币</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>状态</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="选择支付方式状态" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="active">活跃</SelectItem>
                      <SelectItem value="inactive">未激活</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>费率 (%)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">{existingMethod || selectedPaymentMethod ? "保存修改" : "添加支付方式"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
