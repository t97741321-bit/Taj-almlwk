import {
  Shield,
  Sun,
  Music,
  MonitorSmartphone,
  Camera,
  Lightbulb,
  PanelTop,
  Sparkles,
  Lock,
  Laptop,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  icon: LucideIcon
  title: string
  desc: string
}

export const services: Service[] = [
  { icon: Shield, title: "أفلام الحماية PPF", desc: "حماية كاملة لطلاء سيارتك من الخدوش والحجارة بأفضل الأفلام العالمية مع ضمان 5 سنوات" },
  { icon: Sun, title: "العازل الحراري", desc: "أفضل أنواع العازل الحراري تقلل الحرارة 60% وتحجب الأشعة فوق البنفسجية بنسبة 99%" },
  { icon: Music, title: "أنظمة الصوت Pioneer", desc: "تركيب أحدث أنظمة الصوت Pioneer مع ضمان كامل وتركيب احترافي" },
  { icon: MonitorSmartphone, title: "الشاشات الذكية", desc: "شاشات أندرويد بأحدث التقنيات مع CarPlay وAndroid Auto وخرائط بدون إنترنت" },
  { icon: Camera, title: "الكاميرات", desc: "كاميرات أمامية وخلفية عالية الدقة تصل إلى 4K لأقصى قدر من الأمان والرؤية" },
  { icon: Lightbulb, title: "إضاءة LED", desc: "إضاءة داخلية وخارجية احترافية بألوان RGB تضفي لمسة جمالية مميزة على سيارتك" },
  { icon: PanelTop, title: "تظليل السيارات", desc: "تظليل احترافي بأعلى معايير الجودة مع خصوصية كاملة وحماية من الحرارة" },
  { icon: Sparkles, title: "التلميع الاحترافي", desc: "تلميع سيارتك بتقنيات متطورة لإعادتها لبريقها الأصلي وإزالة الخدوش الدقيقة" },
  { icon: Lock, title: "السنتر لوك", desc: "تركيب قفل مركزي احترافي مع ريموت تحكم عن بعد لمزيد من الأمان والراحة" },
  { icon: Laptop, title: "البرمجة الإلكترونية", desc: "برمجة السيارات وإعداد الأنظمة الإلكترونية وربط الأجهزة المتطورة" },
]

export type Product = {
  id: number
  cat: string
  icon: string
  brand: string
  name: string
  rating: number
  price: number
  oldPrice: number
  badge?: string
}

export const productCategories: { key: string; label: string }[] = [
  { key: "all", label: "الكل" },
  { key: "screens", label: "الشاشات" },
  { key: "speakers", label: "السماعات" },
  { key: "cameras", label: "الكاميرات" },
  { key: "insulation", label: "العازل الحراري" },
  { key: "ppf", label: "أفلام الحماية" },
  { key: "lighting", label: "الإضاءة" },
  { key: "accessories", label: "إكسسوارات" },
]

export const products: Product[] = [
  { id: 1, cat: "screens", icon: "📺", brand: "Pioneer", name: "شاشة Pioneer DMH-9600NEX 9 بوصة", rating: 5, price: 600000, oldPrice: 750000, badge: "الأكثر مبيعاً" },
  { id: 2, cat: "speakers", icon: "🔊", brand: "Pioneer", name: "سماعات Pioneer TS-A6960F 6x9", rating: 5, price: 140000, oldPrice: 190000 },
  { id: 3, cat: "cameras", icon: "📷", brand: "Sony", name: "كاميرا خلفية Sony 4K", rating: 5, price: 190000, oldPrice: 240000 },
  { id: 4, cat: "insulation", icon: "☀️", brand: "3M", name: "عازل حراري 3M Ceramic Series", rating: 5, price: 400000, oldPrice: 500000, badge: "3M" },
  { id: 5, cat: "ppf", icon: "🛡️", brand: "3M", name: "فيلم حماية PPF 3M كامل", rating: 5, price: 1000000, oldPrice: 1250000, badge: "الأفضل" },
  { id: 6, cat: "lighting", icon: "💡", brand: "Caronic", name: "إضاءة LED داخلية RGB", rating: 4, price: 75000, oldPrice: 110000 },
  { id: 7, cat: "speakers", icon: "🎵", brand: "Pioneer", name: "مكبر صوت Pioneer GM-D9705", rating: 5, price: 475000, oldPrice: 600000 },
  { id: 8, cat: "cameras", icon: "🎥", brand: "Caronic", name: "كاميرا أمامية 360 درجة", rating: 4, price: 325000, oldPrice: 425000 },
]

export type Warranty = {
  name: string
  car: string
  product: string
  service: string
  tech: string
  install: string
  expire: string
  status: "ساري" | "منتهي"
}

export const warrantyDB: Record<string, Warranty> = {
  TM001: { name: "أحمد محمد العمري", car: "تويوتا كامري 2023", product: "فيلم حماية 3M PPF", service: "تركيب PPF كامل", tech: "فيصل الغامدي", install: "2024-01-15", expire: "2026-01-15", status: "ساري" },
  TM002: { name: "خالد سعد الشمري", car: "لكزس ES350 2022", product: "شاشة Pioneer DMH-9600", service: "تركيب شاشة أندرويد", tech: "محمد الزهراني", install: "2024-03-10", expire: "2025-03-10", status: "ساري" },
  TM003: { name: "سارة عبدالله الحربي", car: "نيسان باترول 2024", product: "عازل حراري 3M Ceramic", service: "تظليل كامل سيراميك", tech: "عمر السبيعي", install: "2023-08-22", expire: "2024-08-22", status: "منتهي" },
}

export const partners = [
  { name: "3M", cls: "p-3m", style: { fontSize: 32, fontWeight: 900 } },
  { name: "Pioneer", cls: "p-pioneer", style: { fontSize: 24, fontWeight: 700 } },
  { name: "CARONIC", cls: "p-caronic", style: { fontSize: 18, letterSpacing: 3, fontWeight: 800 } },
  { name: "SONY", cls: "p-sony", style: { fontSize: 22 } },
  { name: "KENWOOD", cls: "p-kenwood", style: { fontSize: 18, fontWeight: 800 } },
  { name: "JBL", cls: "p-jbl", style: { fontSize: 26, fontWeight: 900, fontStyle: "italic" } },
]

export const heroTags = ["أفلام حماية", "عازل حراري", "أنظمة صوت", "إكسسوارات", "تركيب احترافي", "ضمان إلكتروني"]

export const aboutFeatures = [
  "وكلاء معتمدون لـ Pioneer",
  "شريك رسمي لـ 3M",
  "منتجات أصلية 100%",
  "ضمان إلكتروني شامل",
  "فريق تركيب محترف معتمد",
  "خدمة ما بعد البيع",
  "أسعار تنافسية",
  "+12,000 عميل راضٍ",
]

export const serviceOptions = [
  "تركيب العازل الحراري",
  "أفلام الحماية PPF",
  "أنظمة الصوت Pioneer",
  "الشاشات الذكية",
  "الكاميرات",
  "إضاءة LED",
  "التلميع الاحترافي",
  "تظليل السيارات",
  "السنتر لوك",
]

export const contact = {
  phone: "782222919",
  whatsapp: "967782222919",
  email: "al_zubair_20@instagram.com",
  instagram: "https://www.instagram.com/al_zubair_20",
  location: "اليمن - صنعاء",
  hours: "الأحد - الخميس: 9 صباحاً - 10 مساءً",
}

export function formatPrice(n: number) {
  return n.toLocaleString("en-US") + " ر.ي"
}

/* ---------------- CUSTOMER DASHBOARD MOCK DATA ---------------- */

export const customer = {
  name: "محمد العمري",
  email: "mohammed@example.com",
  phone: "0501234567",
  city: "صنعاء",
  joined: "2023-05-12",
  points: 1240,
}

export const customerCars = [
  { id: 1, model: "تويوتا كامري", year: 2023, color: "أبيض", plate: "أ ب ج 1234" },
  { id: 2, model: "لكزس ES350", year: 2022, color: "أسود", plate: "د هـ و 5678" },
  { id: 3, model: "نيسان باترول", year: 2024, color: "فضي", plate: "ز ح ط 9012" },
]

export const customerOrders = [
  { id: 1, service: "تركيب PPF كامل", date: "2024-03-15", amount: 2000, status: "مكتمل", badge: "badge-green" },
  { id: 2, service: "شاشة Pioneer", date: "2024-02-10", amount: 1200, status: "مكتمل", badge: "badge-green" },
  { id: 3, service: "عازل حراري 3M", date: "2024-04-01", amount: 800, status: "قيد التنفيذ", badge: "badge-gold" },
  { id: 4, service: "إضاءة LED RGB", date: "2024-01-20", amount: 350, status: "مكتمل", badge: "badge-green" },
]

export const customerInvoices = [
  { id: 1, no: "INV-2024-001", date: "2024-03-15", amount: 2000, status: "مدفوع", badge: "badge-green" },
  { id: 2, no: "INV-2024-002", date: "2024-02-10", amount: 1200, status: "مدفوع", badge: "badge-green" },
  { id: 3, no: "INV-2024-003", date: "2024-04-01", amount: 800, status: "غير مدفوع", badge: "badge-red" },
]

export const customerWarranties = [
  { id: 1, code: "TM001", product: "فيلم حماية 3M PPF", car: "تويوتا كامري 2023", expire: "2026-01-15", status: "ساري", badge: "badge-green" },
  { id: 2, code: "TM002", product: "شاشة Pioneer DMH-9600", car: "لكزس ES350 2022", expire: "2025-03-10", status: "ساري", badge: "badge-green" },
  { id: 3, code: "TM003", product: "عازل حراري 3M Ceramic", car: "نيسان باترول 2024", expire: "2024-08-22", status: "منتهي", badge: "badge-red" },
]

export const customerBookings = [
  { id: 1, service: "تركيب شاشة Pioneer", date: "2024-05-12", time: "10:00 صباحاً", status: "قادم", badge: "badge-gold" },
  { id: 2, service: "تلميع احترافي", date: "2024-04-28", time: "2:00 مساءً", status: "مكتمل", badge: "badge-green" },
]

/* ---------------- ADMIN DASHBOARD MOCK DATA ---------------- */

export const adminStats = [
  { icon: "👥", label: "العملاء", value: "1,248", note: "▲ 8 جدد اليوم" },
  { icon: "🚗", label: "السيارات", value: "2,356", note: "▲ 3 جديدة" },
  { icon: "📅", label: "الحجوزات اليوم", value: "14", note: "▲ 3 جديدة" },
  { icon: "📦", label: "الطلبات", value: "87", note: "▲ هذا الشهر" },
  { icon: "🛡️", label: "الضمانات", value: "3,854", note: "▲ 23 هذا الأسبوع" },
  { icon: "💰", label: "المبيعات اليوم", value: "4,200", note: "ريال يمني" },
]

export const adminRecentBookings = [
  { customer: "محمد العمري", service: "تركيب Pioneer", date: "اليوم 10:00", status: "جارٍ", badge: "badge-blue" },
  { customer: "خالد الشمري", service: "حماية 3M", date: "اليوم 1:00م", status: "قادم", badge: "badge-gold" },
  { customer: "سارة الحربي", service: "إضاءة LED", date: "أمس", status: "مكتمل", badge: "badge-green" },
  { customer: "فيصل القحطاني", service: "نظام صوتي", date: "أمس", status: "مكتمل", badge: "badge-green" },
]

export const adminRecentCustomers = [
  { name: "محمد العمري", phone: "0501234567", date: "اليوم" },
  { name: "خالد الشمري", phone: "0509876543", date: "أمس" },
  { name: "سارة الحربي", phone: "0551234567", date: "2024-04-01" },
  { name: "نورة السبيعي", phone: "0561234567", date: "2024-03-28" },
]

export const monthlySales = [
  { month: "يناير", value: 12000 },
  { month: "فبراير", value: 18000 },
  { month: "مارس", value: 15000 },
  { month: "أبريل", value: 22000 },
  { month: "مايو", value: 19000 },
  { month: "يونيو", value: 25000 },
]

export const adminCustomers = [
  { id: 1, name: "محمد العمري", phone: "0501234567", email: "mohammed@example.com", cars: 3, joined: "2023-05-12" },
  { id: 2, name: "خالد الشمري", phone: "0509876543", email: "khaled@example.com", cars: 1, joined: "2023-08-20" },
  { id: 3, name: "سارة الحربي", phone: "0551234567", email: "sara@example.com", cars: 2, joined: "2024-01-05" },
  { id: 4, name: "نورة السبيعي", phone: "0561234567", email: "noura@example.com", cars: 1, joined: "2024-03-28" },
  { id: 5, name: "فيصل القحطاني", phone: "0541112233", email: "faisal@example.com", cars: 4, joined: "2022-11-11" },
]

export const adminCars = [
  { id: 1, owner: "محمد العمري", model: "تويوتا كامري", year: 2023, color: "أبيض", plate: "أ ب ج 1234" },
  { id: 2, owner: "خالد الشمري", model: "لكزس ES350", year: 2022, color: "أسود", plate: "د هـ و 5678" },
  { id: 3, owner: "سارة الحربي", model: "نيسان باترول", year: 2024, color: "فضي", plate: "ز ح ط 9012" },
  { id: 4, owner: "فيصل القحطاني", model: "مرسيدس C300", year: 2021, color: "رمادي", plate: "ك ل م 3456" },
]

export const adminBookings = [
  { id: 1, customer: "محمد العمري", service: "تركيب Pioneer", date: "2024-05-12", time: "10:00ص", status: "جارٍ", badge: "badge-blue" },
  { id: 2, customer: "خالد الشمري", service: "حماية 3M", date: "2024-05-12", time: "1:00م", status: "قادم", badge: "badge-gold" },
  { id: 3, customer: "سارة الحربي", service: "إضاءة LED", date: "2024-05-11", time: "11:00ص", status: "مكتمل", badge: "badge-green" },
  { id: 4, customer: "فيصل القحطاني", service: "نظام صوتي", date: "2024-05-10", time: "3:00م", status: "مكتمل", badge: "badge-green" },
  { id: 5, customer: "نورة السبيعي", service: "تلميع", date: "2024-05-09", time: "9:00ص", status: "ملغي", badge: "badge-red" },
]

export const adminWarranties = [
  { id: 1, code: "TM001", customer: "أحمد العمري", product: "فيلم حماية 3M PPF", install: "2024-01-15", expire: "2026-01-15", status: "ساري", badge: "badge-green" },
  { id: 2, code: "TM002", customer: "خالد الشمري", product: "شاشة Pioneer", install: "2024-03-10", expire: "2025-03-10", status: "ساري", badge: "badge-green" },
  { id: 3, code: "TM003", customer: "سارة الحربي", product: "عازل حراري 3M", install: "2023-08-22", expire: "2024-08-22", status: "منتهي", badge: "badge-red" },
]

export const adminProducts = products.map((p) => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  price: p.price,
  category: productCategories.find((c) => c.key === p.cat)?.label ?? p.cat,
  stock: [12, 8, 5, 20, 3, 15, 7, 9][p.id - 1] ?? 10,
}))

export const adminUsers = [
  { id: 1, name: "صديق الزين", role: "مدير عام", email: "admin@taj.com", status: "نشط" },
  { id: 2, name: "فيصل الغامدي", role: "مشرف فني", email: "faisal@taj.com", status: "نشط" },
  { id: 3, name: "محمد الزهراني", role: "موظف مبيعات", email: "m.sales@taj.com", status: "غير نشط" },
]
