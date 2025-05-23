import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User, PaymentMethod, Role, Permission } from "@/lib/types"
import { mockUsers, mockPaymentMethods, mockRoles, mockPermissions } from "@/lib/data"

interface AdminState {
  users: User[]
  paymentMethods: PaymentMethod[]
  roles: Role[]
  permissions: Permission[]
  selectedUser: User | null
  selectedPaymentMethod: PaymentMethod | null
  selectedRole: Role | null

  // 用户管理
  setUsers: (users: User[]) => void
  addUser: (user: User) => void
  updateUser: (id: string, userData: Partial<User>) => void
  deleteUser: (id: string) => void
  setSelectedUser: (user: User | null) => void

  // 支付方式管理
  setPaymentMethods: (methods: PaymentMethod[]) => void
  addPaymentMethod: (method: PaymentMethod) => void
  updatePaymentMethod: (id: string, methodData: Partial<PaymentMethod>) => void
  deletePaymentMethod: (id: string) => void
  setSelectedPaymentMethod: (method: PaymentMethod | null) => void

  // 角色和权限管理
  setRoles: (roles: Role[]) => void
  addRole: (role: Role) => void
  updateRole: (id: string, roleData: Partial<Role>) => void
  deleteRole: (id: string) => void
  setSelectedRole: (role: Role | null) => void

  setPermissions: (permissions: Permission[]) => void
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      users: mockUsers,
      paymentMethods: mockPaymentMethods,
      roles: mockRoles,
      permissions: mockPermissions,
      selectedUser: null,
      selectedPaymentMethod: null,
      selectedRole: null,

      // 用户管理
      setUsers: (users) => set({ users }),
      addUser: (user) => set((state) => ({ users: [...state.users, user] })),
      updateUser: (id, userData) =>
        set((state) => ({
          users: state.users.map((user) => (user.id === id ? { ...user, ...userData } : user)),
        })),
      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        })),
      setSelectedUser: (user) => set({ selectedUser: user }),

      // 支付方式管理
      setPaymentMethods: (methods) => set({ paymentMethods: methods }),
      addPaymentMethod: (method) =>
        set((state) => ({
          paymentMethods: [...state.paymentMethods, method],
        })),
      updatePaymentMethod: (id, methodData) =>
        set((state) => ({
          paymentMethods: state.paymentMethods.map((method) =>
            method.id === id ? { ...method, ...methodData } : method,
          ),
        })),
      deletePaymentMethod: (id) =>
        set((state) => ({
          paymentMethods: state.paymentMethods.filter((method) => method.id !== id),
        })),
      setSelectedPaymentMethod: (method) => set({ selectedPaymentMethod: method }),

      // 角色和权限管理
      setRoles: (roles) => set({ roles }),
      addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),
      updateRole: (id, roleData) =>
        set((state) => ({
          roles: state.roles.map((role) => (role.id === id ? { ...role, ...roleData } : role)),
        })),
      deleteRole: (id) =>
        set((state) => ({
          roles: state.roles.filter((role) => role.id !== id),
        })),
      setSelectedRole: (role) => set({ selectedRole: role }),

      setPermissions: (permissions) => set({ permissions }),
    }),
    {
      name: "admin-storage",
    },
  ),
)
