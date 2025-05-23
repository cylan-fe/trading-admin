export interface User {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive" | "pending"
  lastLogin: string
  createdAt: string
  avatar?: string
}

export interface PaymentMethod {
  id: string
  name: string
  type: "bank" | "card" | "digital" | "crypto"
  status: "active" | "inactive"
  transactionCount: number
  transactionVolume: number
  fee: number
  icon?: string
}

export interface Role {
  id: string
  name: string
  description: string
  permissions: string[]
  userCount: number
  createdAt: string
}

export interface Permission {
  id: string
  name: string
  description: string
  module: string
}

export interface ChartData {
  name: string
  value: number
}

export interface TimeSeriesData {
  date: string
  value: number
}

export interface DashboardStats {
  totalTransactions: number
  totalUsers: number
  totalVolume: number
  activePaymentMethods: number
  transactionGrowth: number
  userGrowth: number
  volumeGrowth: number
}
