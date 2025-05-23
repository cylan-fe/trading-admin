"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { mockUsers } from "@/lib/data"

export function RecentUsers() {
  // 获取最近5个用户
  const recentUsers = [...mockUsers]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-4">
      {recentUsers.map((user) => (
        <Card key={user.id} className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <Badge
                  variant={user.status === "active" ? "default" : user.status === "pending" ? "outline" : "secondary"}
                >
                  {user.status === "active" ? "活跃" : user.status === "pending" ? "待审核" : "未激活"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {user.email} · {user.role}
              </p>
            </div>
            <div className="text-sm text-muted-foreground">{new Date(user.createdAt).toLocaleDateString()}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
