"use client"

import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Send, MapPinned } from "lucide-react"
import { contact } from "@/lib/data"
import { useToast } from "@/components/toast"

export default function ContactPage() {
  const { show } = useToast()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    show("تم إرسال رسالتك بنجاح!")
    e.currentTarget.reset()
  }

  return (
    <div className="contact-page">
      <div className="section-header">
        <div className="tag">تواصل معنا</div>
        <h2>
          نحن هنا <span>لمساعدتك</span>
        </h2>
        <p>تواصل معنا عبر أي وسيلة تناسبك</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info-box">
          <h3>معلومات التواصل</h3>
          <ContactItem icon={<Phone size={17} />} title="الهاتف" value={contact.phone} />
          <ContactItem icon={<MessageCircle size={17} />} title="واتساب" value={contact.phone} />
          <ContactItem icon={<Mail size={17} />} title="البريد الإلكتروني" value={contact.email} />
          <ContactItem icon={<MapPin size={17} />} title="الموقع" value={contact.location} />
          <ContactItem icon={<Clock size={17} />} title="ساعات العمل" value="الأحد - الخميس: 9ص - 10م" />
          <div className="social-btns">
            <a className="social-btn" href={contact.instagram}>
              <Instagram size={15} /> إنستغرام
            </a>
            <a className="social-btn" href={`https://wa.me/${contact.whatsapp}`}>
              <MessageCircle size={15} /> واتساب
            </a>
          </div>
        </div>
        <div className="contact-form-box">
          <h3>أرسل لنا رسالة</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>الاسم</label>
                <input type="text" placeholder="اسمك الكامل" required />
              </div>
              <div className="form-group">
                <label>الجوال</label>
                <input type="tel" placeholder="7xxxxxxxx" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full">
                <label>البريد الإلكتروني</label>
                <input type="email" placeholder="example@email.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full">
                <label>الموضوع</label>
                <select>
                  <option>استفسار عام</option>
                  <option>طلب عرض سعر</option>
                  <option>شكوى</option>
                  <option>اقتراح</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full">
                <label>الرسالة</label>
                <textarea placeholder="اكتب رسالتك هنا..." style={{ height: 130, resize: "none" }} required />
              </div>
            </div>
            <button type="submit" className="btn-gold" style={{ width: "100%", padding: 14, fontSize: 15 }}>
              <Send size={16} /> إرسال الرسالة
            </button>
          </form>
          <div
            style={{
              marginTop: 24,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--border)",
              height: 220,
              background: "#111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--gray)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <MapPinned size={36} style={{ color: "var(--gold)", marginBottom: 10 }} />
              <p>خريطة Google Maps</p>
              <small>اليمن - صنعاء</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactItem({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="contact-item">
      <div className="icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  )
}
