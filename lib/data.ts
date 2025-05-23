import type { User, PaymentMethod, Role, Permission, ChartData, TimeSeriesData, DashboardStats } from "@/lib/types"

// 模拟用户数据
export const mockUsers: User[] = [
  {
    id: "1",
    name: "张三",
    email: "zhangsan@example.com",
    role: "管理员",
    status: "active",
    lastLogin: "2023-05-20T08:30:00Z",
    createdAt: "2023-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "李四",
    email: "lisi@example.com",
    role: "操作员",
    status: "active",
    lastLogin: "2023-05-19T14:20:00Z",
    createdAt: "2023-02-10T09:15:00Z",
  },
  {
    id: "3",
    name: "王五",
    email: "wangwu@example.com",
    role: "查看者",
    status: "inactive",
    lastLogin: "2023-05-10T11:45:00Z",
    createdAt: "2023-03-05T16:30:00Z",
  },
  {
    id: "4",
    name: "赵六",
    email: "zhaoliu@example.com",
    role: "操作员",
    status: "active",
    lastLogin: "2023-05-21T09:10:00Z",
    createdAt: "2023-03-20T13:45:00Z",
  },
  {
    id: "5",
    name: "钱七",
    email: "qianqi@example.com",
    role: "查看者",
    status: "pending",
    lastLogin: "2023-05-15T16:20:00Z",
    createdAt: "2023-04-12T10:30:00Z",
  },
]

// 模拟支付方式数据
export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "1",
    name: "支付宝",
    type: "digital",
    status: "active",
    transactionCount: 12500,
    transactionVolume: 1250000,
    fee: 0.6,
  },
  {
    id: "2",
    name: "微信支付",
    type: "digital",
    status: "active",
    transactionCount: 15000,
    transactionVolume: 1800000,
    fee: 0.6,
  },
  {
    id: "3",
    name: "银联",
    type: "card",
    status: "active",
    transactionCount: 8000,
    transactionVolume: 960000,
    fee: 0.5,
  },
  {
    id: "4",
    name: "比特币",
    type: "crypto",
    status: "inactive",
    transactionCount: 200,
    transactionVolume: 150000,
    fee: 1.0,
  },
  {
    id: "5",
    name: "银行转账",
    type: "bank",
    status: "active",
    transactionCount: 3000,
    transactionVolume: 900000,
    fee: 0.3,
  },
]

// 模拟角色数据
export const mockRoles: Role[] = [
  {
    id: "1",
    name: "管理员",
    description: "拥有系统所有权限",
    permissions: ["all"],
    userCount: 2,
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "操作员",
    description: "可以执行日常操作，但无法修改系统设置",
    permissions: ["read:all", "write:users", "write:transactions"],
    userCount: 5,
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "查看者",
    description: "只能查看数据，无法进行任何修改操作",
    permissions: ["read:all"],
    userCount: 8,
    createdAt: "2023-01-01T00:00:00Z",
  },
]

// 模拟权限数据
export const mockPermissions: Permission[] = [
  {
    id: "1",
    name: "read:all",
    description: "查看所有数据",
    module: "global",
  },
  {
    id: "2",
    name: "write:users",
    description: "创建和修改用户",
    module: "users",
  },
  {
    id: "3",
    name: "write:transactions",
    description: "创建和修改交易",
    module: "transactions",
  },
  {
    id: "4",
    name: "write:payments",
    description: "创建和修改支付方式",
    module: "payments",
  },
  {
    id: "5",
    name: "write:settings",
    description: "修改系统设置",
    module: "settings",
  },
]

// 模拟仪表板统计数据
export const mockDashboardStats: DashboardStats = {
  totalTransactions: 38700,
  totalUsers: 5280,
  totalVolume: 5060000,
  activePaymentMethods: 4,
  transactionGrowth: 12.5,
  userGrowth: 8.3,
  volumeGrowth: 15.7,
}

// 模拟交易量时间序列数据
export const mockTransactionTrend: TimeSeriesData[] = [
  { date: "2023-04-01", value: 3200 },
  { date: "2023-04-08", value: 3300 },
  { date: "2023-04-15", value: 3700 },
  { date: "2023-04-22", value: 3500 },
  { date: "2023-04-29", value: 3800 },
  { date: "2023-05-06", value: 4100 },
  { date: "2023-05-13", value: 4300 },
  { date: "2023-05-20", value: 4500 },
]

// 模拟用户增长时间序列数据
export const mockUserTrend: TimeSeriesData[] = [
  { date: "2023-04-01", value: 4800 },
  { date: "2023-04-08", value: 4900 },
  { date: "2023-04-15", value: 5000 },
  { date: "2023-04-22", value: 5050 },
  { date: "2023-04-29", value: 5100 },
  { date: "2023-05-06", value: 5150 },
  { date: "2023-05-13", value: 5200 },
  { date: "2023-05-20", value: 5280 },
]

// 模拟支付方式分布数据
export const mockPaymentMethodDistribution: ChartData[] = [
  { name: "支付宝", value: 35 },
  { name: "微信支付", value: 40 },
  { name: "银联", value: 15 },
  { name: "银行转账", value: 10 },
]

// 模拟交易状态分布数据
export const mockTransactionStatusDistribution: ChartData[] = [
  { name: "成功", value: 92 },
  { name: "处理中", value: 5 },
  { name: "失败", value: 3 },
]
