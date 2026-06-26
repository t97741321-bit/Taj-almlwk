import type { Metadata } from "next"
import { customerCars } from "@/lib/data"

export const metadata: Metadata = { title: "سياراتي | تاج الملوك" }

export default function CustomerCars() {
  return (
    <div className="dash-content">
      <div className="dash-page-head">
        <h1>سياراتي</h1>
        <button className="btn btn-gold">+ إضافة سيارة</button>
      </div>
      <div className="card-grid">
        {customerCars.map((c) => (
          <div key={c.id} className="info-card">
            <div className="info-card-icon">🚗</div>
            <h3>{c.model}</h3>
            <ul className="info-rows">
              <li><span>سنة الصنع</span><strong>{c.year}</strong></li>
              <li><span>اللون</span><strong>{c.color}</strong></li>
              <li><span>رقم اللوحة</span><strong>{c.plate}</strong></li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
