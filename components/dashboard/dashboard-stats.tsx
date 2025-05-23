"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon, CreditCard, DollarSign, Users } from "lucide-react"
import { mockDashboardStats } from "@/lib/data"

export function DashboardStats() {
  const stats = mockDashboardStats

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">总交易量</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">¥{stats.totalVolume.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {stats.volumeGrowth > 0 ? (
              <span className="text-green-500 flex items-center">
                <ArrowUpIcon className="mr-1 h-4 w-4" />
                比上月增长 {stats.volumeGrowth}%
              </span>
            ) : (
              <span className="text-red-500 flex items-center">
                <ArrowDownIcon className="mr-1 h-4 w-4" />
                比上月下降 {Math.abs(stats.volumeGrowth)}%
              </span>
            )}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">交易笔数</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalTransactions.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {stats.transactionGrowth > 0 ? (
              <span className="text-green-500 flex items-center">
                <ArrowUpIcon className="mr-1 h-4 w-4" />
                比上月增长 {stats.transactionGrowth}%
              </span>
            ) : (
              <span className="text-red-500 flex items-center">
                <ArrowDownIcon className="mr-1 h-4 w-4" />
                比上月下降 {Math.abs(stats.transactionGrowth)}%
              </span>
            )}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">用户数量</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {stats.userGrowth > 0 ? (
              <span className="text-green-500 flex items-center">
                <ArrowUpIcon className="mr-1 h-4 w-4" />
                比上月增长 {stats.userGrowth}%
              </span>
            ) : (
              <span className="text-red-500 flex items-center">
                <ArrowDownIcon className="mr-1 h-4 w-4" />
                比上月下降 {Math.abs(stats.userGrowth)}%
              </span>
            )}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">活跃支付方式</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activePaymentMethods}</div>
          <p className="text-xs text-muted-foreground">共支持 {stats.activePaymentMethods} 种支付方式</p>
        </CardContent>
      </Card>
    </div>
  )
}
