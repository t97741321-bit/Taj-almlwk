"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu } from "lucide-react"
import { useCart } from "@/components/cart-context"

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/shop", label: "المتجر" },
  { href: "/booking", label: "الحجوزات" },
  { href: "/warranty", label: "الضمان" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
]

export function Navbar() {
  const pathname = usePathname()
  const { count } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="تاج الملوك" />
          <div className="logo-text">
            <h2>تاج الملوك</h2>
            <span>لزينة السيارات</span>
          </div>
        </Link>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? "active" : ""}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <Link href="/cart" className="nav-cart" aria-label="عربة التسوق">
            <ShoppingCart size={20} />
            <span className="cart-count">{count}</span>
          </Link>
          <Link className="btn-login" href="/login">
            تسجيل الدخول
          </Link>
        </div>
        <button className="hamburger" onClick={() => setOpen((o) => !o)} aria-label="القائمة">
          <Menu size={24} />
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/login" style={{ color: "var(--gold)" }} onClick={() => setOpen(false)}>
              تسجيل الدخول
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
