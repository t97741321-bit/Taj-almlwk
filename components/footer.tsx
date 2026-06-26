import Link from "next/link"
import { Phone, MessageCircle, Mail, MapPin, Instagram } from "lucide-react"
import { contact } from "@/lib/data"

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="تاج الملوك" />
            <div className="logo-text">
              <h2>تاج الملوك</h2>
            </div>
          </Link>
          <p>الوجهة الأولى في المملكة لكل ما يتعلق بتزيين وحماية السيارات بأعلى جودة وأفضل خدمة.</p>
          <div className="social-links">
            <a href={`https://wa.me/${contact.whatsapp}`} aria-label="واتساب">
              <MessageCircle size={16} />
            </a>
            <a href={contact.instagram} aria-label="إنستغرام">
              <Instagram size={16} />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link href="/">الرئيسية</Link></li>
            <li><Link href="/shop">المتجر</Link></li>
            <li><Link href="/services">الخدمات</Link></li>
            <li><Link href="/warranty">الضمان</Link></li>
            <li><Link href="/about">من نحن</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>خدماتنا</h4>
          <ul>
            <li><Link href="/services">عازل حراري</Link></li>
            <li><Link href="/services">تظليل نوافذ</Link></li>
            <li><Link href="/services">حماية PPF</Link></li>
            <li><Link href="/services">أنظمة صوت</Link></li>
            <li><Link href="/services">إضاءة LED</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>تواصل معنا</h4>
          <ul className="footer-contact">
            <li><Phone size={14} /> {contact.phone}</li>
            <li><MessageCircle size={14} /> واتساب: {contact.phone}</li>
            <li><Mail size={14} /> {contact.email}</li>
            <li><MapPin size={14} /> {contact.location}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 تاج الملوك لزينة السيارات. جميع الحقوق محفوظة</span>
        <span>
          تطوير: <a href="tel:+967780687704">صديق الزين — 780687704</a>
        </span>
      </div>
    </footer>
  )
}
