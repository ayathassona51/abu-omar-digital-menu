import { categories, imgProps } from '../data/menuData'
import BrandMark from './BrandMark'

export default function CategoriesScreen() {
  return (
    <section className="screen categories-screen">
      <header className="signage-header-clean">
        <BrandMark compact />
        <div className="header-category-info">
          <span className="header-category-badge">قائمة الطعام</span>
          <h2 className="header-category-title">أقسام المنيو</h2>
        </div>
      </header>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <article className="category-tile" key={category.id}>
            <img {...imgProps(category.image)} alt={category.name} />
            <div className="tile-shade" />
            <span className="tile-number">0{index + 1}</span>
            <div className="tile-content">
              <span className="tile-badge">{category.badge}</span>
              <h3>{category.name}</h3>
              <i className="tile-accent" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
