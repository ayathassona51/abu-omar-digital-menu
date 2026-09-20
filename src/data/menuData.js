export const restaurant = {
  name: 'مشاوي أبو عمر',
  tagline: ' نكهة على أصولها 🔥',
  welcomeText: 'أهلاً وسهلاً بكم',
  welcomeImage: '/images/opt/welcome.webp',
  logo: '/images/opt/logo.webp',
}

// أوقات التنقل السريعة والحيوية
export const screenDurations = {
  welcome: 4500,     // 4.5 ثوانٍ للشاشة الرئيسية
  categories: 3800,  // 3.8 ثوانٍ للأقسام
  category: 5000,    // 5 ثوانٍ لكل قائمة
}

export const categories = [
  {
    id: 'skewers',
    name: 'الأسياخ',
    badge: 'طازج على السيخ',
    image: '/images/opt/skewers-1200.webp',
    description: 'أشهى أسياخ اللحوم والكباب والخضار المشوية على الجمر',
    featured: {
      name: 'سيخ شقف خروف',
      price: 20,
      description: 'قطع لحم خروف بلدي متبلة بالبهارات الخاصة ومشوية بإتقان',
      image: '/images/opt/skewers-1200.webp',
      tag: 'الأعلى طلباً',
    },
    products: [
      { name: 'سيخ شقف خروف', price: 20, note: 'لحم بلدي فاخر' },
      { name: 'سيخ كباب خروف', price: 12, note: 'متبل على الأصول' },
      { name: 'سيخ ليه', price: 12, note: 'طعم غني ولذيذ' },
      { name: 'سيخ شقف عجل', price: 11, note: 'عجل طازج طري' },
      { name: 'سيخ عجل انتريكوت', price: 11, note: 'جودة فاخرة' },
      { name: 'سيخ كباب سوبر', price: 10, note: 'خلطة مميزة' },
      { name: 'سيخ كباب عمنديل', price: 9, note: 'خاص بأبو عمر' },
      { name: 'سيخ سجق', price: 9, note: 'بهارات خاصة' },
      { name: 'سيخ حبش', price: 8, note: 'لحم حبش متبل' },
      { name: 'سيخ جنحان', price: 8, note: 'طعم شهي' },
      { name: 'سيخ بروجيت', price: 7, note: 'دجاج متبل' },
      { name: 'سيخ صدر دجاج', price: 7, note: 'صحي ومشوي' },
      { name: 'سيخ كباب', price: 7, note: 'كباب ناعم' },
      { name: 'سيخ عناقيد', price: 7, note: 'تشكيلة مميزة' },
      { name: 'قلب جاج', price: 7, note: 'مشوي على النار' },
      { name: 'سيخ كبدة خروف', price: 6, note: 'طازجة ومتبلة' },
      { name: 'سيخ معاليق', price: 6, note: 'مشكلة ولذيذة' },
      { name: 'سيخ كبدة دجاج', price: 6, note: 'طرية وشهية' },
      { name: 'سيخ بندورة', price: 3, note: 'مشوية على الجمر' },
      { name: 'سيخ بصل', price: 3, note: 'مكرمل على النار' },
      { name: 'سيخ فلفل', price: 3, note: 'حار ومشوي' },
      { name: 'ثومة مشوية', price: 3, note: 'نكهة مدخنة رائعة' },
    ],
  },
  {
    id: 'grills',
    name: 'الكيلو',
    badge: 'طازج على الفحم',
    description: 'أشهى المشاوي المشكلة واللحوم المختارة بعناية فائقة',
    image: '/images/opt/grills-1200.webp',
    featured: {
      name: 'ريش خروف فاخرة',
      price: 150,
      description: 'ريش خروف متبلة بالخلطة الخاصة ومشوية على جمر السنديان',
      image: '/images/opt/grills-1200.webp',
      tag: 'اختيار الشيف',
    },
    products: [
      { name: 'كيلو شقف خروف', price: 180, note: 'لحم طازج' },
      { name: 'ريش خروف', price: 150, note: 'طري وغني' },
      { name: 'انتريكوت', price: 150, note: 'جودة فاخرة' },
      { name: 'كيلو شقف عجل', price: 120, note: 'مشوي على الجمر' },
      { name: 'كيلو كباب سوبر', price: 110, note: 'خلطة خاصة' },
      { name: 'كيلو مشكل دجاج + كباب + عجل', price: 100, note: 'تشكيلة أبو عمر' },
      { name: 'كيلو كباب', price: 80, note: 'على الأصول' },
      { name: 'كيلو مشكل دجاج + كباب', price: 65, note: 'وجبة غنية' },
      { name: 'كيلو برجيت', price: 60, note: 'دجاج متبل' },
      { name: 'كيلو صدر دجاج', price: 60, note: 'صحي ومشوي' },
      { name: 'كيلو مشكل مع جنحان', price: 55, note: 'طعم لا يقاوم' },
      { name: 'كيلو جنحان', price: 45, note: 'مقرمش على النار' },
      { name: 'اجرة شوي', price: 20, note: 'خدمة احترافية' },
    ],
  },
  {
    id: 'sandwiches',
    name: 'الساندويشات',
    badge: 'محضرة عند الطلب',
    description: 'خبز طازج مع تشكيلة واسعة من اللحوم والمقبلات اللذيذة',
    image: '/images/opt/sandwiches-1200.webp',
    featured: {
      name: 'ساندويش شقف خروف',
      price: 40,
      description: 'شقف خروف مشوية داخل خبز ساخن مع البصل المشوي والصوص',
      image: '/images/opt/sandwiches-1200.webp',
      tag: 'الأكثر طلباً',
    },
    products: [
      { name: 'ساندويش شقف خروف', price: 40, note: 'طعم مميز' },
      { name: 'ساندويش شقف عجل', price: 22, note: 'لحم بلدي' },
      { name: 'مخ', price: 20, note: 'طازج ومحضر بعناية' },
      { name: 'ساندويش مكس شقف عجل', price: 18, note: 'خلطة مكس' },
      { name: 'ساندويش لحمة منديل', price: 16, note: 'شهي ومقرمش' },
      { name: 'ساندويش صدر دجاج', price: 14, note: 'خفيف وصحي' },
      { name: 'ساندويش برجيت', price: 14, note: 'دجاج طري' },
      { name: 'ساندويش كباب', price: 14, note: 'على الفحم' },
      { name: 'ساندويش مكس دجاج', price: 14, note: 'تتبيلة رائعة' },
      { name: 'ساندويش مكس برغيت', price: 14, note: 'مذاق فريد' },
      { name: 'ساندويش عناقيد', price: 14, note: 'خاص بأبو عمر' },
    ],
  },
  {
    id: 'arayes',
    name: 'العرايس',
    badge: 'مقرمشة على الجمر',
    description: 'عرايس محشوة باللحمة المتبلة ومشوية على الجمر حتى القرمشة الذهبية',
    image: '/images/opt/arayes-1200.webp',
    featured: {
      name: 'عرايس  مع بصل وبندورة',
      price: 8,
      description: 'خبز مقرمش محشو باللحمة المفرومة والبصل والبندورة مع لمسة الفحم',
      image: '/images/opt/arayes-1200.webp',
      tag: 'مميز ومقرمش',
    },
    products: [
      { name: 'عرايس سادة', price: 6, note: 'طازجة ولذيذة' },
      { name: 'عرايس مع بصل و بندورة', price: 8, note: 'طعم مميز' },
      { name: 'عرايس مع جبنة', price: 8, note: 'محشوة بالجبنة' },
      { name: 'عرايس مع سلطة', price: 8, note: 'مع سلطة طازجة' },
      { name: 'عرايس كبير', price: 10, note: 'حجم عائلي' }
    ],
  },
  {
    id: 'drinks',
    name: 'المشروبات',
    badge: 'بارد وساخن',
    description: 'مشروبات غازية باردة وعصائر منعشة وقهوة ساخنة بعد الوجبة',
    image: '/images/opt/drinks-1200.webp',
    featured: {
      name: 'مشروب طاقة XL بارد',
      price: 5,
      description: 'انتعاش وطاقة مضاعفة مع وجبات المشاوي الشهية',
      image: '/images/opt/drinks-1200.webp',
      tag: 'انتعاش مضاعف',
    },
    products: [
      { name: 'كولا 1.125 لتر', price: 5, note: 'حجم عائلي' },
      { name: 'مشروب طاقة XL', price: 5, note: 'بارد ومنعش' },
      { name: 'بلو عادي', price: 4, note: 'مشروب طاقة' },
      { name: 'صودا شويبس', price: 4, note: 'منعش' },
      { name: 'لبن اب 330 مل', price: 4, note: 'لبن منعش' },
      { name: 'قهوة تاسكو', price: 4, note: 'ساخنة على الأصول' },
      { name: 'كولا 330 مل', price: 3, note: 'علبة باردة' },
      { name: 'عصير كابي 250 مل', price: 3, note: 'فواكه مشكلة' },
      { name: 'مياه معدنية كبير', price: 3, note: 'باردة ونقية' },
      { name: 'مياه معدنية صغير', price: 2, note: 'نقية' },
      { name: 'لبن اب كاسات', price: 2, note: 'كاسة باردة' },
      { name: 'كولا عربي', price: 2, note: 'طعم كلاسيكي' },
      { name: 'عصير كرتون 180 مل', price: 2, note: 'عصير طبيعي' },
    ],
  },
  {
    id: 'potatoes',
    name: 'البطاطا',
    badge: 'طازجة ومقرمشة',
    description: 'بطاطا مقلية ذهبية تُحضّر طازجة مع كل طلب',
    image: '/images/opt/sides-1200.webp',
    featured: {
      name: 'صحن بطاطا كبير',
      price: 15,
      description: 'بطاطا ذهبية مقرمشة، مناسبة للمشاركة',
      image: '/images/opt/sides-1200.webp',
      tag: 'الأكثر طلباً',
    },
    products: [
      { name: 'صحن بطاطا صغير', price: 8, note: 'مقرمشة وطازجة' }, //[cite: 1]
      { name: 'صحن بطاطا وسط', price: 10, note: 'حجم مناسب' }, //[cite: 1]
      { name: 'صحن بطاطا كبير', price: 15, note: 'للمشاركة' }, //[cite: 1]
      { name: 'صحن حمص وسط', price: 8, note: 'طازج ولذيذ' }, //[cite: 1]
      { name: 'صحن حمص كبير', price: 12, note: 'حجم عائلي' }, //[cite: 1]
      { name: 'صحن سلطة مشكل', price: 10, note: 'خضار طازجة' }, //[cite: 1]
      { name: 'تشكيلة سلطات (طاولة)', price: 15, note: 'تشكيلة متنوعة' } //[cite: 1]
    ]
  },
]
// نسخة صغيرة للموبايل: نفس الصورة بحجم 640px (تحميل أسرع)
export const imgProps = (src) => ({
  src,
  srcSet: src.includes('-1200.webp')
    ? `${src.replace('-1200.webp', '-640.webp')} 640w, ${src} 1200w`
    : undefined,
  sizes: '(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 40vw',
  decoding: 'async',
})

// كل الصور المستخدمة (للتحميل المسبق)
export const allImages = () => [
  restaurant.welcomeImage,
  restaurant.logo,
  ...categories.map((c) => c.image),
]
