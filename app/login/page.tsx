"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LogIn } from "lucide-react"
import { useToast } from "@/components/toast"

export default function LoginPage() {
  const router = useRouter()
  const { show } = useToast()
  const [email, setEmail] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const isAdmin = email.trim().toLowerCase().includes("admin")
    show("تم تسجيل الدخول بنجاح")
    router.push(isAdmin ? "/admin/dashboard" : "/customer/dashboard")
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="تاج الملوك" />
          <h2>تاج الملوك</h2>
          <p>تسجيل الدخول إلى حسابك</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>كلمة المرور</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-gold" style={{ width: "100%", marginTop: 6 }}>
            <LogIn size={16} /> تسجيل الدخول
          </button>
        </form>
        <div
          style={{
            marginTop: 18,
            background: "rgba(212,175,55,.07)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: 12,
            fontSize: 12,
            color: "var(--gray)",
            lineHeight: 1.8,
          }}
        >
          حساب تجريبي: أي بريد وكلمة مرور. استخدم بريداً يحتوي على كلمة
          <strong style={{ color: "var(--gold)" }}> admin </strong>
          للدخول كمسؤول.
        </div>
        <div className="auth-footer">
          ليس لديك حساب؟ <Link href="/register">إنشاء حساب جديد</Link>
        </div>
        <div className="auth-footer" style={{ marginTop: 8 }}>
          <Link href="/">العودة للموقع</Link>
        </div>
      </div>
    </div>
  )
}
