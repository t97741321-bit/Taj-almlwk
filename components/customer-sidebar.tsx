"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Gauge,
  Car,
  ShoppingBag,
  ShieldHalf,
  CalendarCheck,
  User,
  Store,
  CalendarPlus,
  LogOut,
} from "lucide-react"

const customerName = "محمد العمري"

const mainLinks = [
  { href: "/customer/dashboard", label: "لوحة التحكم", icon: Gauge },
  { href: "/customer/cars", label: "سياراتي", icon: Car },
  { href: "/customer/orders", label: "طلباتي", icon: ShoppingBag },
  { href: "/customer/warranties", label: "ضماناتي", icon: ShieldHalf },
  { href: "/customer/bookings", label: "حجوزاتي", icon: CalendarCheck },
  { href: "/customer/profile", label: "ملفي الشخصي", icon: User },
]

export function CustomerSidebar() {
  const pathname = usePathname()
  return (
    <div className="customer-sidebar">
      <div className="sidebar-user">
        <div className="avatar">{customerName.charAt(0)}</div>
        <h4>{customerName}</h4>
        <p>عميل مميز ⭐</p>
      </div>
      <div className="sidebar-group-label">القائمة</div>
      <nav className="sidebar-nav">
        {mainLinks.map((l) => (
          <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
            <l.icon size={16} /> {l.label}
          </Link>
        ))}
        <div className="sidebar-group-label">أخرى</div>
        <Link href="/shop">
          <Store size={16} /> المتجر
        </Link>
        <Link href="/booking">
          <CalendarPlus size={16} /> حجز جديد
        </Link>
        <Link href="/login" style={{ color: "#f87171" }}>
          <LogOut size={16} /> تسجيل الخروج
        </Link>
      </nav>
    </div>
  )
}
