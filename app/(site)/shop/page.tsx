"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { products, productCategories, formatPrice } from "@/lib/data"
import { useCart } from "@/components/cart-context"
import { useToast } from "@/components/toast"

export default function ShopPage() {
  const [cat, setCat] = useState("all")
  const [query, setQuery] = useState("")
  const { addToCart } = useCart()
  const { show } = useToast()
  const router = useRouter()

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = cat === "all" || p.cat === cat
      const matchQuery = (p.name + p.brand).toLowerCase().includes(query.toLowerCase())
      return matchCat && matchQuery
    })
  }, [cat, query])

  function handleAdd(p: (typeof products)[number]) {
    addToCart({ id: p.id, name: p.name, price: p.price })
    show("أُضيف للسلة: " + p.name)
  }

  function handleBuy(p: (typeof products)[number]) {
    addToCart({ id: p.id, name: p.name, price: p.price })
    router.push("/cart")
  }

  return (
    <div className="shop-page">
      <div className="section-header">
        <div className="tag">تسوق الآن</div>
        <h2>
          المتجر <span>الإلكتروني</span>
        </h2>
        <p>منتجات أصلية بضمان كامل</p>
      </div>
      <div className="shop-header">
        <div className="shop-search">
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <span style={{ color: "var(--gray)", fontSize: 13 }}>
          إجمالي المنتجات: <strong style={{ color: "var(--gold)" }}>{filtered.length}</strong>
        </span>
      </div>
      <div className="categories-tabs">
        {productCategories.map((c) => (
          <button
            key={c.key}
            className={`cat-tab ${cat === c.key ? "active" : ""}`}
            onClick={() => setCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filtered.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-img">
              <span className="product-icon">{p.icon}</span>
              {p.badge && <span className="product-badge">{p.badge}</span>}
            </div>
            <div className="product-body">
              <div className="product-brand">{p.brand}</div>
              <h4>{p.name}</h4>
              <div className="product-rating">{"★".repeat(p.rating) + "☆".repeat(5 - p.rating)}</div>
              <div className="product-price">
                <span className="price-now">{formatPrice(p.price)}</span>
                <span className="price-old">{formatPrice(p.oldPrice)}</span>
              </div>
              <div className="product-actions">
                <button className="btn-cart" onClick={() => handleAdd(p)}>
                  <ShoppingCart size={14} /> السلة
                </button>
                <button className="btn-buy" onClick={() => handleBuy(p)}>
                  شراء الآن
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "var(--gray)", marginTop: 40 }}>
          لا توجد منتجات مطابقة
        </p>
      )}
    </div>
  )
}
