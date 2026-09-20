import BrandMark from './BrandMark'
import { imgProps } from '../data/menuData'

export default function CategoryScreen({ category, index = 0, totalCategories = 5 }) {
  // نقسم الأصناف لعمودين إذا كان العدد أكبر من 6 لتنسيق مريح ومساحة متوازنة
  const isMultiCol = category.products.length > 6
  const midPoint = isMultiCol ? Math.ceil(category.products.length / 2) : category.products.length
  const col1 = category.products.slice(0, midPoint)
  const col2 = isMultiCol ? category.products.slice(midPoint) : []

  return (
    <section className="screen category-signage-screen">
      {/* شريط رأس الصفحة الفاخر المطابق للنموذج المرجعي */}
      <header className="signage-header-ref">
        <div className="header-ref-right">
          <BrandMark compact />
          <div className="header-ref-titles">
            <span className="header-ref-eyebrow">
              قائمة الطعام الرئيسية • {category.badge}
            </span>
            <h2 className="header-ref-title">{category.name}</h2>
          </div>
        </div>

        <div className="header-ref-meta">
          <span className="section-pill-tag">القسم {index + 1} من {totalCategories}</span>
          {/* <span className="tax-notice-tag">الأسعار تشمل الضريبة وبالشيكل (₪)</span> */}
        </div>
      </header>

      {/* المحتوى الرئيسي: قائمة الأسعار على جهة، واللوحة المرئية المميزة على الجهة المقابلة */}
      <div className="signage-body-ref">
        {/* قائمة الأصناف والأسعار مع الإضافات والشارات المنعشة */}
        <div className="signage-menu-panel">
          <div className="menu-panel-heading">
            <h3>قائمة أصناف {category.name}</h3>
            <span className="panel-rule" />
          </div>

          <div className={`menu-columns-wrap ${isMultiCol ? 'menu-columns-wrap--dual' : ''}`}>
            <div className="menu-column-block">
              {col1.map((item, idx) => (
                <div className="menu-item-row" key={idx}>
                  <div className="item-name-group">
                    <span className="item-dot-bullet" />
                    <span className="item-name-text">{item.name}</span>
                    {item.note && <span className="item-badge-note">{item.note}</span>}
                  </div>
                  <span className="item-leader-dots" />
                  <div className="item-price-badge">
                    <span className="price-number">{item.price}</span>
                    <span className="price-shekel">₪</span>
                  </div>
                </div>
              ))}
            </div>

            {isMultiCol && (
              <div className="menu-column-block">
                {col2.map((item, idx) => (
                  <div className="menu-item-row" key={idx}>
                    <div className="item-name-group">
                      <span className="item-dot-bullet" />
                      <span className="item-name-text">{item.name}</span>
                      {item.note && <span className="item-badge-note">{item.note}</span>}
                    </div>
                    <span className="item-leader-dots" />
                    <div className="item-price-badge">
                      <span className="price-number">{item.price}</span>
                      <span className="price-shekel">₪</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* لوحة العرض المرئية: صورة القسم + بطاقة الإضاءة الخاصة (الطبق المميز) */}
        <div className="signage-visual-panel">
          {/* الصورة العلوية للقسم */}
          <div className="visual-hero-card">
            <img 
              {...imgProps(category.image)} 
              alt={category.name} 
              className="visual-hero-img" 
            />
            <div className="visual-hero-overlay" />
            <div className="visual-hero-badge">
              <span>{category.badge}</span>
            </div>
            <p className="visual-hero-caption">{category.description}</p>
          </div>

          {/* بطاقة الإضاءة الخاصة / الطبق المميز المستوحاة من الصورة المرجعية */}
          {category.featured && (
            <div className="special-focus-card">
              <div className="focus-header">
                <span className="focus-star">★</span>
                <h4>إضاءة خاصة • {category.featured.tag || 'اختيار الشيف'}</h4>
              </div>
              <div className="focus-content">
                <div className="focus-image-wrapper">
                  <img {...imgProps(category.featured.image)} alt={category.featured.name} className="focus-img" />
                  <span className="focus-ring" />
                </div>
                <div className="focus-details">
                  <h5>{category.featured.name}</h5>
                  <p>{category.featured.description}</p>
                  <div className="focus-price-tag">
                    <span>السعر:</span>
                    <strong>{category.featured.price} ₪</strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* شريط التذييل الفاخر */}
      {/* <footer className="signage-footer-ref">
        <span>مشاوي أبو عمر</span>
        <span className="footer-dot">:</span>
        <span>شواء على جمر السنديان الطبيعي</span>
        <span className="footer-dot">:</span>
        <span>طازج يومياً من المسلخ لمائدتكم</span>
      </footer> */}
    </section>
  )
}
