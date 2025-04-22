import { Link } from "react-router-dom";
import arrowBlue from "../../assets/images/icons/arrow-right-blue.png";
import Button from "../ui/Button";
import Input from "../ui/Input";
import BlogCard from "../ui/BlogCard";
import { theme } from "../../utils/theme";

/**
 * Blog ana sayfası bileşeni
 * @returns {JSX.Element} - Blog sayfa bileşeni
 */
const Blog = () => {
  // Örnek blog verileri
  const blogPosts = [
    {
      id: 1,
      title: "Nasıl Para Gönderebilirim?",
      date: "25 Ocak 2021",
      slug: "nasil-para-gonderebilirim",
      colSpan: "lg:col-span-4",
    },
    {
      id: 2,
      title: "Nasıl Para Gönderebilirim?",
      date: "25 Ocak 2021",
      slug: "nasil-para-gonderebilirim",
      colSpan: "lg:col-span-8",
    },
    {
      id: 3,
      title: "Nasıl Para Gönderebilirim?",
      date: "25 Ocak 2021",
      slug: "nasil-para-gonderebilirim",
      colSpan: "lg:col-span-8",
    },
    {
      id: 4,
      title: "Nasıl Para Gönderebilirim?",
      date: "25 Ocak 2021",
      slug: "nasil-para-gonderebilirim",
      colSpan: "lg:col-span-4",
    },
  ];

  // Kategori butonları
  const categories = [
    { name: "KILAVUZ", active: true },
    { name: "KAMPANYALAR", active: false },
    { name: "EDITOR'UN SEÇTİKLERİ", active: false },
  ];

  return (
    <div className={`${theme.container} ${theme.spacing.section}`}>
      {/* 1. Section - Abone Ol */}
      <div className={`${theme.container} ${theme.spacing.section}`}>
        <h1 className="text-[28px] md:text-[42px] lg:text-[64px] text-black font-bold pb-5 lg:pb-20 font-sf-pro-rounded">
          Blog
        </h1>
        <p className="text-[18px] md:text-[24px] lg:text-[24px] text-black font-medium lg:max-w-[600px] font-sf-pro-rounded">
          Bültene abone ol, kampanya ve gelecek fırsatlardan anında haberdar ol.
          Bilgilendirme için iletişim adresini paylaş.
        </p>
        <div className="flex flex-row gap-4 mt-10">
          <Input
            type="email"
            id="email"
            placeholder="E-mail adresi"
            variant="secondary"
            className="w-[250px] lg:w-[450px]"
          />
          <Button variant="primary" type="submit" icon>
            Abone ol
          </Button>
        </div>
      </div>

      <hr className="border-[#9C9C9C] border-[3px]" />

      {/* 2. Section - Kategoriler */}
      <div className={`${theme.container} ${theme.spacing.section}`}>
        <div className="flex flex-row gap-4 mt-10 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "danger" : "outline"}
              className="shadow-none p-8">
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* 3. Section - Blog Postları */}
      <div className={`${theme.container} ${theme.spacing.section}`}>
        <div className="grid grid-cols-12 gap-4 mt-10">
          {blogPosts.map((post) => (
            <div key={post.id} className={`col-span-12 ${post.colSpan}`}>
              <BlogCard
                title={post.title}
                date={post.date}
                slug={post.slug}
                fullWidth
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full mt-10">
          <Button
            to="/blog"
            variant="secondary"
            icon
            className="w-[300px] lg:w-[420px] justify-center">
            Daha fazlasına göz at
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
