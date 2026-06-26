import { Navbar } from "@/components/navbar"
import { CustomerSidebar } from "@/components/customer-sidebar"

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="customer-layout">
        <CustomerSidebar />
        <div className="customer-main">{children}</div>
      </div>
    </>
  )
}
