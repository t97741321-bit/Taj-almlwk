import type { Metadata } from "next"
import Link from "next/link"
import { customer, customerCars, customerOrders, customerWarranties, customerBookings, formatPrice } from "@/lib/data"

export const metadata: Metadata = { title: "لوحة التحكم | تاج الملوك" }

const stats = [
  { icon: "🚗", label: "سياراتي", value: customerCars.length, href: "/customer/cars" },
  { icon: "📦", label: "طلباتي", value: customerOrders.length, href: "/customer/orders" },
  { icon: "🛡️", label: "ضماناتي", value: customerWarranties.length, href: "/customer/warranties" },
  { icon: "⭐", label: "نقاط الولاء", value: customer.points, href: "/customer/profile" },
]

export default function CustomerDashboard() {
  return (
    <div className="dash-content">
      <div className="dash-welcome">
        <h1>مرحباً، {customer.name} 👋</h1>
        <p>هذه نظرة عامة على حسابك وخدماتك لدى تاج الملوك</p>
      </div>

      <div className="dash-stats">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="dash-stat-card">
            <span className="dash-stat-icon">{s.icon}</span>
            <div>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="dash-grid-2">
        <div className="dash-panel">
          <div className="dash-panel-head">
            <h2>أحدث الطلبات</h2>
            <Link href="/customer/orders">عرض الكل</Link>
          </div>
          <table className="dash-table">
            <thead>
              <tr><th>الخدمة</th><th>التاريخ</th><th>المبلغ</th><th>الحالة</th></tr>
            </thead>
            <tbody>
              {customerOrders.slice(0, 4).map((o) => (
                <tr key={o.id}>
                  <td>{o.service}</td>
                  <td>{o.date}</td>
                  <td>{formatPrice(o.amount)}</td>
                  <td><span className={`badge ${o.badge}`}>{o.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dash-panel">
          <div className="dash-panel-head">
            <h2>المواعيد القادمة</h2>
            <Link href="/customer/bookings">عرض الكل</Link>
          </div>
          <ul className="dash-list">
            {customerBookings.map((b) => (
              <li key={b.id}>
                <div>
                  <strong>{b.service}</strong>
                  <span>{b.date} — {b.time}</span>
                </div>
                <span className={`badge ${b.badge}`}>{b.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
