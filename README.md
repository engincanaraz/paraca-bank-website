# Paraca - Dijital Bankacılık Web Sitesi

Paraca, modern bir dijital bankacılık web sitesi örneğidir. Clean Code prensipleri kullanılarak React, Tailwind CSS ve Vite ile geliştirilmiştir.

## Tasarım Referansı

Bu proje, aşağıdaki Figma tasarımını referans alarak birebir uygulama amacıyla geliştirilmektedir:

[Responsive Digital Banking Website - Figma Community](https://www.figma.com/design/j8lyfZddAk3pKYapLSv9Rv/Responsive-Digital-Banking-Website--Community-?t=H3EKO5ymONW6fduv-0)

Tasarımın arayüz detayları, renk paletleri, yazı tipleri ve duyarlı (responsive) yapısı projeye uygulanmaktadır.

## Özellikler

- Responsive tasarım ile tüm cihazlarda uyumlu
- React Router ile sayfa yönlendirme
- Tailwind CSS ile modern ve temiz arayüz
- Yeniden kullanılabilir bileşenler
- Clean Code prensipleri uygulanmış kod yapısı
- Figma tasarımıyla birebir uyumlu arayüz

## Sayfalar

- Ana Sayfa: Dijital bankacılık hizmetlerinin tanıtımı
- Blog: Finansal ipuçları ve bilgiler içeren blog yazıları
- Blog Yazısı: Detaylı blog içeriği sayfası
- Kayıt: Kullanıcı kayıt formu

## Kurulum

Projeyi yerel makinenize kurmak için aşağıdaki adımları izleyin:

```bash
# Repoyu klonlayın
git clone https://github.com/kullanici/paraca.git

# Proje dizinine gidin
cd paraca

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## Yapı

Proje, sürdürülebilir ve ölçeklenebilir bir mimariye sahiptir:

```
paraca/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── BlogPost.jsx
│   │   │   └── Register.jsx
│   │   └── ui/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Teknolojiler

- [React](https://react.dev/) - UI kütüphanesi
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Frontend build tool
- [React Router](https://reactrouter.com/) - Sayfa yönlendirmesi

## Geliştirme

### Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Projeyi build eder
- `npm run preview` - Build edilmiş projeyi önizleme olarak çalıştırır

# paraca-bank-website git init git add . git commit -m first commit git branch -M main git remote add origin https://github.com/engincanaraz/paraca-bank-website.git git push -u origin main
