"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { BarChart3, CreditCard, LayoutDashboard, LogOut, Settings, ShieldCheck, Users } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "仪表板",
      icon: LayoutDashboard,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "用户管理",
      icon: Users,
      href: "/users",
      active: pathname === "/users",
    },
    {
      label: "支付设置",
      icon: CreditCard,
      href: "/payments",
      active: pathname === "/payments",
    },
    {
      label: "权限控制",
      icon: ShieldCheck,
      href: "/permissions",
      active: pathname === "/permissions",
    },
    {
      label: "系统设置",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings",
    },
  ]

  return (
    <div className={cn("w-64 border-r bg-background", className)}>
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6" />
          <span>交易平台管理系统</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="flex flex-col gap-1 p-4">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={route.active ? "secondary" : "ghost"}
              className={cn("justify-start", route.active && "bg-muted")}
              asChild
            >
              <Link href={route.href}>
                <route.icon className="mr-2 h-5 w-5" />
                {route.label}
              </Link>
            </Button>
          ))}
        </div>
        <div className="mt-auto p-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/auth/logout">
              <LogOut className="mr-2 h-5 w-5" />
              退出登录
            </Link>
          </Button>
        </div>
      </ScrollArea>
    </div>
  )
}
