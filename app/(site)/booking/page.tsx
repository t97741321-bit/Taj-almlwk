"use client"

import { useState } from "react"
import { Clock, Phone, MessageCircle, MapPin, CircleCheck, Check } from "lucide-react"
import { serviceOptions, contact } from "@/lib/data"
import { useToast } from "@/components/toast"

const times = [
  "9:00 صباحاً", "10:00 صباحاً", "11:00 صباحاً", "12:00 ظهراً", "1:00 مساءً",
  "2:00 مساءً", "3:00 مساءً", "4:00 مساءً", "5:00 مساءً",
]

export default function BookingPage() {
  const { show } = useToast()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    show("تم تأكيد الحجز! سيتم التواصل معك قريباً")
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="booking-page">
      <div className="section-header">
        <div className="tag">الحجوزات</div>
        <h2>
          احجز <span>موعدك</span>
        </h2>
        <p>اختر الخدمة والوقت المناسب وسنتواصل معك لتأكيد الحجز</p>
      </div>
      <div className="booking-grid">
        <div className="booking-info-card">
          <h3>معلومات الحجز</h3>
          <InfoRow icon={<Clock size={17} />} title="ساعات العمل" sub={contact.hours} />
          <InfoRow icon={<Phone size={17} />} title="للاستفسار" sub={contact.phone} />
          <InfoRow icon={<MessageCircle size={17} />} title="واتساب" sub="متاح على مدار الساعة" />
          <InfoRow icon={<MapPin size={17} />} title="الموقع" sub={contact.location} />
          <InfoRow icon={<CircleCheck size={17} />} title="تأكيد الحجز" sub="سيصلك إشعار فوري بعد الحجز" />
          <div
            style={{
              marginTop: 22,
              background: "rgba(212,175,55,.07)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: 14,
              fontSize: 13,
              color: "var(--gray)",
            }}
          >
            يُرجى الحضور قبل موعدك بـ 10 دقائق
          </div>
        </div>
        <div className="booking-form-card">
          <h3>تفاصيل الحجز</h3>
          {submitted && (
            <div
              className="warranty-result warranty-valid"
              style={{ marginTop: 0, marginBottom: 18, display: "flex", gap: 8, alignItems: "center" }}
            >
              <Check size={18} /> تم استلام طلب الحجز بنجاح
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>الاسم الكامل</label>
                <input type="text" placeholder="محمد أحمد" required />
              </div>
              <div className="form-group">
                <label>رقم الجوال</label>
                <input type="tel" placeholder="7xxxxxxxx" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>نوع السيارة</label>
                <input type="text" placeholder="تويوتا كامري 2023" required />
              </div>
              <div className="form-group">
                <label>لون السيارة</label>
                <input type="text" placeholder="أبيض" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>الخدمة المطلوبة</label>
                <select required defaultValue="">
                  <option value="" disabled>
                    اختر الخدمة
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>تاريخ الموعد</label>
                <input type="date" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>الوقت المفضل</label>
                <select>
                  {times.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>عدد السيارات</label>
                <select>
                  <option>1 سيارة</option>
                  <option>2 سيارات</option>
                  <option>3+ سيارات</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full">
                <label>ملاحظات إضافية</label>
                <textarea placeholder="أي تفاصيل إضافية..." style={{ height: 80, resize: "none" }} />
              </div>
            </div>
            <button type="submit" className="btn-gold" style={{ width: "100%", padding: 14, fontSize: 16, marginTop: 6 }}>
              <Check size={18} /> تأكيد الحجز
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="info-row">
      {icon}
      <div>
        <strong>{title}</strong>
        <span>{sub}</span>
      </div>
    </div>
  )
}
