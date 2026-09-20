import { useEffect, useMemo, useState } from 'react'
import { categories, screenDurations, allImages, imgProps } from '../data/menuData'
import WelcomeScreen from './WelcomeScreen'
import CategoriesScreen from './CategoriesScreen'
import CategoryScreen from './CategoryScreen'

export default function Slideshow() {
  const screens = useMemo(() => [
    { type: 'welcome', duration: screenDurations.welcome },
    { type: 'categories', duration: screenDurations.categories },
    ...categories.map((category, index) => ({
      type: 'category',
      category,
      index,
      totalCategories: categories.length,
      duration: screenDurations.category,
    })),
  ], [])

  const [active, setActive] = useState(0)

  // تحميل كل الصور مسبقاً (وفك ترميزها) بينما تظهر الشاشة الرئيسية، فالانتقال بين الشاشات يكون فوري
  useEffect(() => {
    allImages().forEach((src) => {
      const img = new Image()
      const p = imgProps(src)
      img.sizes = p.sizes
      if (p.srcSet) img.srcset = p.srcSet
      img.src = src
      img.decode?.().catch(() => {})
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % screens.length)
    }, screens[active].duration)
    return () => clearTimeout(timer)
  }, [active, screens])

  // دعم الأسهم ومفتاح المسافة للتنقل الفوري
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === ' ') {
        setActive((current) => (current + 1) % screens.length)
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        setActive((current) => (current - 1 + screens.length) % screens.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [screens.length])

  const screen = screens[active]

  return (
    <main className="menu-board" dir="rtl">
      <div className="screen-transition" key={active}>
        {screen.type === 'welcome' && <WelcomeScreen />}
        {screen.type === 'categories' && <CategoriesScreen />}
        {screen.type === 'category' && (
          <CategoryScreen 
            category={screen.category} 
            index={screen.index} 
            totalCategories={screen.totalCategories} 
          />
        )}
      </div>

      <div className="progress">
        <span style={{ animationDuration: `${screen.duration}ms` }} key={active} />
      </div>
    </main>
  )
}
