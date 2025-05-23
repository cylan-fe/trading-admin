import { UserTable } from "@/components/users/user-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { UserDialog } from "@/components/users/user-dialog"

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">用户管理</h2>
        <UserDialog>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            添加用户
          </Button>
        </UserDialog>
      </div>
      <UserTable />
    </div>
  )
}
