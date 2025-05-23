import { RoleTable } from "@/components/permissions/role-table"
import { PermissionTable } from "@/components/permissions/permission-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { RoleDialog } from "@/components/permissions/role-dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PermissionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">权限控制</h2>
      </div>

      <Tabs defaultValue="roles" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="roles">角色管理</TabsTrigger>
            <TabsTrigger value="permissions">权限列表</TabsTrigger>
          </TabsList>

          <RoleDialog>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              添加角色
            </Button>
          </RoleDialog>
        </div>

        <TabsContent value="roles" className="space-y-4">
          <RoleTable />
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <PermissionTable />
        </TabsContent>
      </Tabs>
    </div>
  )
}
