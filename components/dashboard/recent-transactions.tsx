"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function RecentTransactions() {
  const transactions = [
    {
      id: "T12345",
      user: "张三",
      amount: 1200,
      status: "成功",
      method: "支付宝",
      date: "2023-05-21 14:30",
    },
    {
      id: "T12346",
      user: "李四",
      amount: 850,
      status: "处理中",
      method: "微信支付",
      date: "2023-05-21 13:15",
    },
    {
      id: "T12347",
      user: "王五",
      amount: 3200,
      status: "成功",
      method: "银联",
      date: "2023-05-21 11:45",
    },
    {
      id: "T12348",
      user: "赵六",
      amount: 750,
      status: "失败",
      method: "微信支付",
      date: "2023-05-21 10:30",
    },
    {
      id: "T12349",
      user: "钱七",
      amount: 1500,
      status: "成功",
      method: "支付宝",
      date: "2023-05-21 09:20",
    },
  ]

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <Card key={transaction.id} className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{transaction.user.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium leading-none">{transaction.user}</p>
                <Badge
                  variant={
                    transaction.status === "成功"
                      ? "default"
                      : transaction.status === "处理中"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {transaction.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {transaction.date} · {transaction.method}
              </p>
            </div>
            <div className="font-medium">¥{transaction.amount.toLocaleString()}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
