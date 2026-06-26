import Link from "next/link"
import { CalendarCheck } from "lucide-react"
import { services } from "@/lib/data"

export const metadata = { title: "الخدمات | تاج الملوك" }

export default function ServicesPage() {
  return (
    <div className="services-section" style={{ paddingTop: 120 }}>
      <div className="section-header">
        <div className="tag">ما نقدمه</div>
        <h2>
          خدماتنا <span>الاحترافية</span>
        </h2>
        <p>نوفر أفضل خدمات تزيين وحماية السيارات في المملكة</p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <span className="icon">
              <s.icon size={42} />
            </span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <Link href="/booking" className="btn-gold" style={{ padding: "16px 40px", fontSize: 16 }}>
          <CalendarCheck size={18} /> احجز خدمتك الآن
        </Link>
      </div>
    </div>
  )
}
