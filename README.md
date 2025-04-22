# Paraca - Dijital Bankacılık Web Sitesi

Paraca, modern bir dijital bankacılık web sitesi örneğidir. Clean Code prensipleri kullanılarak React, Tailwind CSS, Daisy.UI ve Vite ile geliştirilmiştir. Proje, sürdürülebilir ve yeniden kullanılabilir bileşenler kullanılarak modüler bir yapıda tasarlanmıştır.

## Tasarım Referansı

Bu proje, aşağıdaki Figma tasarımını referans alarak birebir uygulama amacıyla geliştirilmektedir:

[Responsive Digital Banking Website - Figma Community](https://www.figma.com/design/j8lyfZddAk3pKYapLSv9Rv/Responsive-Digital-Banking-Website--Community-?t=H3EKO5ymONW6fduv-0)

Tasarımın arayüz detayları, renk paletleri, yazı tipleri ve duyarlı (responsive) yapısı projeye uygulanmaktadır.

## Özellikler

- Responsive tasarım ile tüm cihazlarda uyumlu görünüm
- React Router ile dinamik sayfa yönlendirme
- Tailwind CSS ile modern ve temiz arayüz
- daisy.UI ile daha hızlı, daha temiz, daha kolay geliştirme
- Yeniden kullanılabilir bileşen mimarisi
- Clean Code prensipleri ile yapılandırılmış kod
- Merkezi tema sistemi
- Modüler yapı ile yüksek bakım kolaylığı
- Figma tasarımıyla birebir uyumlu arayüz

## Sayfalar

- **Ana Sayfa**: Dijital bankacılık hizmetlerinin tanıtımı
- **Blog**: Finansal ipuçları ve bilgiler içeren blog yazıları
- **Blog Yazısı**: Detaylı blog içeriği sayfası
- **Giriş**: Kullanıcı giriş formu

## Kurulum

Projeyi yerel makinenize kurmak için aşağıdaki adımları izleyin:

```bash
# Repoyu klonlayın
git clone https://github.com/engincanaraz/paraca-bank-website.git

# Proje dizinine gidin
cd paraca-bank-website

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## Proje Yapısı

Proje, sürdürülebilir ve ölçeklenebilir bir mimariye sahiptir:

```
paraca/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── icons/
│   │   │   ├── logos/
│   │   │   └── shapes/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MainLayout.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── BlogPost.jsx
│   │   │   └── Login.jsx
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── FeatureSection.jsx
│   │   │   │   └── BlogSection.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── BlogCard.jsx
│   │       ├── Section.jsx
│   │       └── SocialButton.jsx
│   ├── utils/
│   │   └── theme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Bileşen Mimarisi

Proje, aşağıdaki bileşen kategorilerine ayrılmıştır:

### UI Bileşenleri

Temel, tekrar kullanılabilir arayüz öğeleri:

- **Button**: Farklı varyantlarda (birincil, ikincil, tehlike, taslak) buton bileşeni
- **Input**: Form girdi alanları için kullanılabilir bileşen
- **BlogCard**: Blog kartları için standartlaştırılmış bileşen
- **Section**: Sayfa bölümleri için şablon bileşen
- **SocialButton**: Sosyal medya butonları için özelleştirilmiş bileşen

### Sayfa Bileşenleri

Ana sayfaları temsil eden bileşenler:

- **Home**: Ana sayfa
- **Blog**: Blog listesi sayfası
- **BlogPost**: Tek blog yazısı sayfası
- **Login**: Kullanıcı giriş sayfası

### Bölüm Bileşenleri

Sayfaların alt bölümlerini temsil eden bileşenler:

- **HeroSection**: Ana sayfa hero bölümü
- **FeatureSection**: Özellikler bölümü
- **BlogSection**: Blog önizleme bölümü

### Düzen Bileşenleri

Sayfa düzenini oluşturan bileşenler:

- **Header**: Üst menü
- **Footer**: Alt bilgi
- **MainLayout**: Sayfa iskeleti

## Tema Sistemi

`src/utils/theme.js` içinde tanımlanan merkezi tema sistemi, projedeki renkleri, yazı tiplerini ve diğer tasarım sabitlerini yönetmek için kullanılır:

- Renkler
- Yazı boyutları
- Boşluk değerleri
- Kenar yuvarlaklıkları
- Konteyner stili

## Geliştirme

### Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Projeyi build eder
- `npm run preview` - Build edilmiş projeyi önizleme olarak çalıştırır

## Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun
