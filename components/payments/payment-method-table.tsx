"use client"

import { useState } from "react"
import { useAdminStore } from "@/lib/store"
import type { PaymentMethod } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search } from "lucide-react"
import { PaymentMethodDialog } from "@/components/payments/payment-method-dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PaymentMethodTable() {
  const { paymentMethods, deletePaymentMethod, setSelectedPaymentMethod } = useAdminStore()
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredPaymentMethods = paymentMethods.filter((method) => {
    const matchesSearch = method.name.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = typeFilter === "all" || method.type === typeFilter
    const matchesStatus = statusFilter === "all" || method.status === statusFilter

    return matchesSearch && matchesType && matchesStatus
  })

  const handleDeletePaymentMethod = (id: string) => {
    if (window.confirm("确定要删除此支付方式吗？")) {
      deletePaymentMethod(id)
    }
  }

  const handleEditPaymentMethod = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索支付方式..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9"
          />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="类型筛选" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有类型</SelectItem>
              <SelectItem value="bank">银行</SelectItem>
              <SelectItem value="card">卡</SelectItem>
              <SelectItem value="digital">数字</SelectItem>
              <SelectItem value="crypto">加密货币</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="状态筛选" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有状态</SelectItem>
              <SelectItem value="active">活跃</SelectItem>
              <SelectItem value="inactive">未激活</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>支付方式</TableHead>
              <TableHead>类型</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>交易数量</TableHead>
              <TableHead>交易金额</TableHead>
              <TableHead>费率</TableHead>
              <TableHead className="text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPaymentMethods.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  没有找到符合条件的支付方式
                </TableCell>
              </TableRow>
            ) : (
              filteredPaymentMethods.map((method) => (
                <TableRow key={method.id}>
                  <TableCell className="font-medium">{method.name}</TableCell>
                  <TableCell>
                    {method.type === "bank"
                      ? "银行"
                      : method.type === "card"
                        ? "卡"
                        : method.type === "digital"
                          ? "数字"
                          : "加密货币"}
                  </TableCell>
                  <TableCell>
                    <Badge variant={method.status === "active" ? "default" : "secondary"}>
                      {method.status === "active" ? "活跃" : "未激活"}
                    </Badge>
                  </TableCell>
                  <TableCell>{method.transactionCount.toLocaleString()}</TableCell>
                  <TableCell>¥{method.transactionVolume.toLocaleString()}</TableCell>
                  <TableCell>{method.fee}%</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">打开菜单</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>操作</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <PaymentMethodDialog existingMethod={method}>
                          <DropdownMenuItem
                            onSelect={(e) => {
                              e.preventDefault()
                              handleEditPaymentMethod(method)
                            }}
                          >
                            编辑
                          </DropdownMenuItem>
                        </PaymentMethodDialog>
                        <DropdownMenuItem
                          className="text-red-600"
                          onSelect={() => handleDeletePaymentMethod(method.id)}
                        >
                          删除
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
