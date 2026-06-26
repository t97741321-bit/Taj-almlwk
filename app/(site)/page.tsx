import Link from "next/link"
import { Crown, CalendarCheck, ShoppingBag, Check, CalendarPlus } from "lucide-react"
import { StatsSection } from "@/components/stats-section"
import { services, partners, heroTags, aboutFeatures } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <div className="hero-logo-area">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="تاج الملوك" />
          </div>
          <div className="hero-badge">
            <Crown size={14} /> الوجهة الأولى لزينة السيارات
          </div>
          <h1>تاج الملوك لزينة السيارات</h1>
          <p className="sub">كل ما تحتاجه لسيارتك في مكان واحد</p>
          <div className="hero-tags">
            {heroTags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="hero-buttons">
            <Link href="/booking" className="btn-gold">
              <CalendarCheck size={16} /> احجز موعد
            </Link>
            <Link href="/shop" className="btn-red">
              <ShoppingBag size={16} /> تسوق الآن
            </Link>
            <Link href="/services" className="btn-outline">
              خدماتنا
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="services-section">
        <div className="section-header">
          <div className="tag">ما نقدمه</div>
          <h2>
            خدماتنا <span>المتميزة</span>
          </h2>
          <p>نوفر أفضل خدمات تزيين وحماية السيارات بأيدي فنيين معتمدين</p>
        </div>
        <div className="services-grid">
          {services.slice(0, 9).map((s) => (
            <div className="service-card" key={s.title}>
              <span className="icon">
                <s.icon size={42} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <StatsSection />

      {/* ABOUT PREVIEW */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/shop.jpg" alt="محل تاج الملوك" />
            <div className="about-img-badge">
              <h3>+10</h3>
              <p>سنوات خبرة</p>
            </div>
          </div>
          <div className="about-text">
            <div className="tag">من نحن</div>
            <h2>
              تاج الملوك
              <br />
              <span>أكثر من مجرد محل</span>
            </h2>
            <p>
              نحن متخصصون في تزيين وحماية السيارات منذ أكثر من 10 سنوات. نقدم خدمات احترافية بأيدي فنيين
              معتمدين، مع ضمان إلكتروني على جميع منتجاتنا وخدماتنا.
            </p>
            <div className="about-features">
              {aboutFeatures.slice(0, 6).map((f) => (
                <div className="about-feat" key={f}>
                  <Check size={16} /> {f}
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-gold">
              اعرف أكثر
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div className="partners-section">
        <div className="section-header">
          <div className="tag">شركاؤنا</div>
          <h2>
            العلامات التجارية <span>المعتمدة</span>
          </h2>
        </div>
        <div className="partners-grid">
          {partners.map((p) => (
            <div className="partner-item" key={p.name}>
              <span className={p.cls} style={p.style as React.CSSProperties}>
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="cta-section">
        <h2>
          هل تريد <span>حجز موعد؟</span>
        </h2>
        <p>احجز الآن وسيتم التواصل معك في أقرب وقت لتأكيد موعدك</p>
        <Link href="/booking" className="btn-gold">
          <CalendarPlus size={16} /> احجز الآن
        </Link>
      </section>
    </>
  )
}
