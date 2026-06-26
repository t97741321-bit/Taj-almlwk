"use client"

import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { useToast } from "@/components/toast"
import { formatPrice } from "@/lib/data"

export default function CartPage() {
  const { cart, total, updateQty, removeFromCart, clearCart } = useCart()
  const { show } = useToast()

  function checkout() {
    show("تم إرسال طلبك! سيتم التواصل معك لتأكيد الدفع")
    clearCart()
  }

  return (
    <div className="shop-page">
      <div className="section-header">
        <div className="tag">سلة المشتريات</div>
        <h2>
          عربة <span>التسوق</span>
        </h2>
        <p>راجع منتجاتك قبل إتمام الطلب</p>
      </div>

      {cart.length === 0 ? (
        <div className="warranty-box" style={{ maxWidth: 520, margin: "0 auto" }}>
          <span className="warranty-icon">
            <ShoppingCart size={70} />
          </span>
          <h2>السلة فارغة</h2>
          <p>لم تقم بإضافة أي منتجات بعد</p>
          <Link href="/shop" className="btn-gold">
            <ShoppingBag size={16} /> تصفح المتجر
          </Link>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 30, alignItems: "start" }} className="booking-grid">
          <div className="table-card">
            <table className="data-table">
              <thead>
                <tr>
                  <th>المنتج</th>
                  <th>السعر</th>
                  <th>الكمية</th>
                  <th>الإجمالي</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{formatPrice(item.price)}</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button className="action-btn" onClick={() => updateQty(item.id, item.qty - 1)} aria-label="إنقاص">
                          <Minus size={12} />
                        </button>
                        <span style={{ minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                        <button className="action-btn" onClick={() => updateQty(item.id, item.qty + 1)} aria-label="زيادة">
                          <Plus size={12} />
                        </button>
                      </div>
                    </td>
                    <td style={{ color: "var(--gold)", fontWeight: 700 }}>{formatPrice(item.price * item.qty)}</td>
                    <td>
                      <button className="action-btn danger" onClick={() => removeFromCart(item.id)} aria-label="حذف">
                        <Trash2 size={12} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="booking-info-card" style={{ position: "static" }}>
            <h3>ملخص الطلب</h3>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, fontSize: 14 }}>
              <span style={{ color: "var(--gray)" }}>عدد المنتجات</span>
              <strong>{cart.reduce((s, i) => s + i.qty, 0)}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, fontSize: 14 }}>
              <span style={{ color: "var(--gray)" }}>الإجمالي</span>
              <strong style={{ color: "var(--gold)", fontSize: 18 }}>{formatPrice(total)}</strong>
            </div>
            <button className="btn-gold" style={{ width: "100%", marginBottom: 10 }} onClick={checkout}>
              إتمام الطلب
            </button>
            <button className="btn-outline" style={{ width: "100%" }} onClick={clearCart}>
              تفريغ السلة
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
