"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { UserPlus } from "lucide-react"
import { useToast } from "@/components/toast"

export default function RegisterPage() {
  const router = useRouter()
  const { show } = useToast()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    show("تم إنشاء حسابك بنجاح")
    router.push("/customer/dashboard")
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="تاج الملوك" />
          <h2>تاج الملوك</h2>
          <p>إنشاء حساب جديد</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>الاسم الكامل</label>
            <input type="text" placeholder="محمد أحمد" required />
          </div>
          <div className="form-group">
            <label>رقم الجوال</label>
            <input type="tel" placeholder="7xxxxxxxx" required />
          </div>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input type="email" placeholder="example@email.com" required />
          </div>
          <div className="form-group">
            <label>كلمة المرور</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-gold" style={{ width: "100%", marginTop: 6 }}>
            <UserPlus size={16} /> إنشاء حساب
          </button>
        </form>
        <div className="auth-footer">
          لديك حساب بالفعل؟ <Link href="/login">تسجيل الدخول</Link>
        </div>
        <div className="auth-footer" style={{ marginTop: 8 }}>
          <Link href="/">العودة للموقع</Link>
        </div>
      </div>
    </div>
  )
}
