import { PaymentMethodTable } from "@/components/payments/payment-method-table"
import { PaymentStats } from "@/components/payments/payment-stats"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { PaymentMethodDialog } from "@/components/payments/payment-method-dialog"

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">支付设置</h2>
        <PaymentMethodDialog>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            添加支付方式
          </Button>
        </PaymentMethodDialog>
      </div>

      <PaymentStats />

      <div>
        <h3 className="text-xl font-semibold mb-4">支付方式管理</h3>
        <PaymentMethodTable />
      </div>
    </div>
  )
}
