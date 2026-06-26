"use client"

import { useState } from "react"
import { Shield, Search } from "lucide-react"
import { warrantyDB, type Warranty } from "@/lib/data"
import { useToast } from "@/components/toast"

type Result = { type: "valid" | "invalid" | "notfound"; data?: Warranty } | null

export default function WarrantyPage() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState<Result>(null)
  const { show } = useToast()

  function check() {
    const c = code.trim().toUpperCase()
    if (!c) {
      show("أدخل رقم الضمان", "error")
      return
    }
    const w = warrantyDB[c]
    if (w) {
      setResult({ type: w.status === "ساري" ? "valid" : "invalid", data: w })
    } else {
      setResult({ type: "notfound" })
    }
  }

  return (
    <div className="warranty-page">
      <div className="section-header">
        <div className="tag">ضمان رقمي</div>
        <h2>
          تحقق من <span>ضمانك</span>
        </h2>
        <p>أدخل رقم الضمان للتحقق الفوري من صلاحيته</p>
      </div>
      <div className="warranty-box">
        <span className="warranty-icon">
          <Shield size={76} />
        </span>
        <h2>نظام الضمان الرقمي</h2>
        <p>أدخل رقم الضمان الخاص بك للتحقق من صلاحيته وعرض كامل التفاصيل</p>
        <div className="warranty-form">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && check()}
            placeholder="مثال: TM001"
          />
          <button className="btn-gold" onClick={check}>
            <Search size={16} /> تحقق الآن
          </button>
        </div>
        <div style={{ marginTop: 12, fontSize: 13, color: "var(--gray)" }}>جرّب هذه الأكواد:</div>
        <div className="sample-codes">
          {["TM001", "TM002", "TM003"].map((c) => (
            <span key={c} className="code-sample" onClick={() => setCode(c)}>
              {c}
            </span>
          ))}
        </div>

        {result && (
          <div
            className={`warranty-result ${
              result.type === "valid" ? "warranty-valid" : "warranty-invalid"
            }`}
          >
            {result.type === "notfound" ? (
              <>
                <h3>❌ رقم الضمان غير موجود</h3>
                <p style={{ color: "#888", fontSize: 14, marginTop: 8 }}>
                  تأكد من الرقم أو تواصل مع المحل
                </p>
              </>
            ) : (
              <>
                <h3>{result.type === "valid" ? "✅ الضمان ساري" : "❌ الضمان منتهي"}</h3>
                <div className="warranty-details">
                  <Detail label="اسم العميل" value={result.data!.name} />
                  <Detail label="السيارة" value={result.data!.car} />
                  <Detail label="المنتج" value={result.data!.product} />
                  <Detail label="الخدمة" value={result.data!.service} />
                  <Detail label="الفني" value={result.data!.tech} />
                  <Detail label="تاريخ التركيب" value={result.data!.install} />
                  <Detail label="تاريخ الانتهاء" value={result.data!.expire} />
                  <div className="warranty-detail-item">
                    <label>الحالة</label>
                    <span className={`badge ${result.type === "valid" ? "badge-green" : "badge-red"}`}>
                      {result.data!.status}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="warranty-detail-item">
      <label>{label}</label>
      <span>{value}</span>
    </div>
  )
}
