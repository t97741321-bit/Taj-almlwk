import Link from "next/link"
import { Check, Phone } from "lucide-react"
import { StatsSection } from "@/components/stats-section"
import { aboutFeatures } from "@/lib/data"

export const metadata = { title: "من نحن | تاج الملوك" }

export default function AboutPage() {
  return (
    <>
      <div className="about-section" style={{ paddingTop: 120 }}>
        <div className="about-grid">
          <div className="about-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/shop.jpg" alt="محل تاج الملوك" />
            <div className="about-img-badge">
              <h3>+10</h3>
              <p>سنوات خبرة في السوق</p>
            </div>
          </div>
          <div className="about-text">
            <div className="tag">من نحن</div>
            <h2>
              تاج الملوك
              <br />
              <span>قصة نجاح مستمرة</span>
            </h2>
            <p>
              تأسس محل تاج الملوك منذ أكثر من عشر سنوات بهدف تقديم أفضل خدمات تزيين وحماية السيارات في اليمن
              - صنعاء. نحن نؤمن بأن سيارتك تستحق الأفضل، لذلك نستخدم فقط المنتجات الأصلية من أفضل العلامات
              التجارية العالمية.
            </p>
            <p style={{ marginTop: 14, color: "var(--gray)", fontSize: 14, lineHeight: 1.9 }}>
              فريقنا من الفنيين المحترفين المعتمدين جاهز لتقديم خدمة لا مثيل لها مع ضمان إلكتروني شامل على
              جميع أعمالنا.
            </p>
            <div className="about-features">
              {aboutFeatures.map((f) => (
                <div className="about-feat" key={f}>
                  <Check size={16} /> {f}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-gold">
              <Phone size={16} /> تواصل معنا
            </Link>
          </div>
        </div>
      </div>
      <StatsSection />
    </>
  )
}
