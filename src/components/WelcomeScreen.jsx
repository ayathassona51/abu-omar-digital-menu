import { restaurant } from '../data/menuData'

export default function WelcomeScreen() {
  return (
    <section className="welcome-screen">
      {/* صورة المشاوي النقية الفاخرة بدون أي نصوص مسبقة عليها وبدون تعتيم */}
      <div 
        className="welcome-bg-image" 
        style={{ backgroundImage: `url(${restaurant.welcomeImage})` }} 
      />

      {/* المحتوى النصي الفاخر على الجانب الفارغ تماماً مثل تصميم الصورة المرجعية مباشرة على الخلفية */}
      <div className="welcome-hero-content">
        {/* اللوجو المذهب الدائري لأبو عمر */}
        <div className="welcome-logo-box">
          <img src={restaurant.logo} alt={restaurant.name} className="welcome-logo-img" />
          <span className="welcome-logo-ring" />
        </div>

        {/* خط فاصل ذهبي مع نجمة */}
        <div className="welcome-golden-rule">
          <span className="rule-line" />
          <span className="rule-icon">✦</span>
          <span className="rule-line" />
        </div>

        {/* اسم المطعم بالخط العربي الفاخر */}
        <h1 className="welcome-main-title">{restaurant.name}</h1>

        {/* شعار المطعم المطلوب */}
        <div className="welcome-tagline-wrap">
          <span className="welcome-tagline-text">{restaurant.tagline}</span>
        </div>

        {/* خط فاصل سفلي */}
        <div className="welcome-golden-rule">
          <span className="rule-line" />
          <span className="rule-icon">❖</span>
          <span className="rule-line" />
        </div>

        {/* جملة الترحيب */}
        <p className="welcome-sub-greeting">{restaurant.welcomeText}</p>
      </div>
    </section>
  )
}
