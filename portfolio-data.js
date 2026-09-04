/*
  =====================================================================
  بيانات الأعمال والتقييمات — الملف ده هو اللي هتضيف فيه شغلك الجديد
  =====================================================================

  ══════════════ 1) إزاي تضيف فيديو (يوتيوب) ══════════════
  انسخ اللينك بتاع الفيديو من يوتيوب، مثال:
    https://www.youtube.com/watch?v=ABC123xyz
  خد الجزء اللي بعد "v=" بس (هنا: ABC123xyz) وحطه في src.

  {
    title: "اسم الشغلانة",
    category: "reels-ui",
    type: "youtube",
    src: "ABC123xyz",
    thumbnail: "assets/work/my-thumbnail.jpg",
  },

  ══════════════ 2) إزاي تضيف فيديو (فيميو) ══════════════
  نفس الفكرة، من اللينك:  https://vimeo.com/123456789
  خد الرقم بس (123456789).
  type: "vimeo", src: "123456789"

  ══════════════ 3) إزاي تضيف فيديو ملف مباشر (mp4) ══════════════
  ارفع الفيديو في مجلد assets/work/ وحط اسمه في src.
  type: "video", src: "assets/work/my-video.mp4"

  ══════════════ 4) إزاي تضيف صورة واحدة (تصميم / تصوير) ══════════════
  ارفع الصورة في assets/work/ وحطها في src.
  type: "image", src: "assets/work/my-photo.jpg"

  ══════════════ 5) إزاي تضيف "ألبوم" صور متعددة لنفس الشغلانة ══════════════
  مفيد لتصوير المنتجات/الإعلانات لما يكون عندك أكتر من صورة لنفس الشوت.
  type: "gallery",
  images: [
    "assets/work/product-1.jpg",
    "assets/work/product-2.jpg",
    "assets/work/product-3.jpg",
  ],

  ══════════════ ملاحظات عامة ══════════════
  - category لازم تكون واحدة من الأكواد دي بالظبط:
    "reels-ui" | "real-estate" | "podcast" | "gaming" |
    "image-design" | "product" | "ads" | "content"
  - thumbnail: صورة الغلاف في الجاليري. لو سبتها فاضية "" هيظهر شكل بديل بألوان الهوية.
  - featured: true يخلي الشغلانة دي تتحط أول حاجة وتاخد مساحة أكبر شوية (اختياري).
  - انسخ أي بلوك واحط بياناتك مكانه، وسيب باقي البلوكات زي ما هي كأمثلة لحد ما تستبدلها.
  =====================================================================
*/

const PORTFOLIO_ITEMS = [
  {
    title: "ريلز عقاري — شقة تسليم فوري",
    category: "reels-ui",
    type: "youtube",
    src: "",
    thumbnail: "",
    featured: true,
  },
  {
    title: "واجهة تطبيق حجز — موشن UI",
    category: "reels-ui",
    type: "youtube",
    src: "",
    thumbnail: "",
  },
  {
    title: "فيديو تسويقي لمشروع سكني",
    category: "real-estate",
    type: "vimeo",
    src: "",
    thumbnail: "",
  },
  {
    title: "جولة بالدرون — كمبوند ساحلي",
    category: "real-estate",
    type: "vimeo",
    src: "",
    thumbnail: "",
  },
  {
    title: "بودكاست — حلقة كاملة",
    category: "podcast",
    type: "youtube",
    src: "",
    thumbnail: "",
  },
  {
    title: "فيديو طويل — تجربة لعبة",
    category: "gaming",
    type: "youtube",
    src: "",
    thumbnail: "",
  },
  {
    title: "مونتاج محتوى — حلقة يوتيوب",
    category: "gaming",
    type: "youtube",
    src: "",
    thumbnail: "",
  },
  {
    title: "تصميم بوستر منتج",
    category: "image-design",
    type: "image",
    src: "",
    thumbnail: "",
  },
  {
    title: "هوية بصرية لصفحة سوشيال ميديا",
    category: "image-design",
    type: "image",
    src: "",
    thumbnail: "",
  },
  {
    title: "تصوير منتج — عطور",
    category: "product",
    type: "gallery",
    images: [],
    thumbnail: "",
  },
  {
    title: "إعلان تجاري — ٣٠ ثانية",
    category: "ads",
    type: "youtube",
    src: "",
    thumbnail: "",
  },
  {
    title: "محتوى يومي — بيهايند الصين",
    category: "content",
    type: "image",
    src: "",
    thumbnail: "",
  },
];

/*
  =====================================================================
  آراء العملاء — اختياري لكن بيدي انطباع احترافي جدًا.
  عدّل النصوص والأسماء براحتك، أو امسح أي بلوك مش محتاجه.
  =====================================================================
*/
const TESTIMONIALS = [
  {
    text: "اتعامل مع أحمد في أكتر من مشروع ريلز، والتسليم دايمًا في الميعاد والجودة فوق التوقعات.",
    name: "— محمد الشريف",
    role: "صاحب براند",
  },
  {
    text: "شغل المونتاج للبودكاست بتاعنا خلى الحلقات تتفرج بشكل تاني خالص، احترافية عالية في القص والإيقاع.",
    name: "— ياسمين فؤاد",
    role: "منتجة بودكاست",
  },
  {
    text: "الفيديو التسويقي للمشروع العقاري ساعدنا نقفل حجوزات فعليًا، شغل مدروس مش بس شكل حلو.",
    name: "— كريم عبد الوهاب",
    role: "مطور عقاري",
  },
];

const CATEGORIES = [
  { id: "reels-ui", ar: "استيلات الريل و UI", en: "Reels / UI", icon: "reels" },
  { id: "real-estate", ar: "استيلات العقارات", en: "Real Estate", icon: "estate" },
  { id: "podcast", ar: "البودكاست والفيديوهات الطويلة", en: "Podcast / Long-form", icon: "podcast" },
  { id: "gaming", ar: "الألعاب وفيديوهات المحتوى", en: "Gaming / Content", icon: "gaming" },
  { id: "image-design", ar: "تصميم الصور", en: "Image Design", icon: "design" },
  { id: "product", ar: "تصوير المنتجات", en: "Product Photography", icon: "product" },
  { id: "ads", ar: "تصوير الإعلانات", en: "Ads Production", icon: "ads" },
  { id: "content", ar: "تصوير المحتوى", en: "Content Creation", icon: "content" },
];
