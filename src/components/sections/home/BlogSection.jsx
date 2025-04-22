import blog1 from "../../../assets/images/blog-1.png";
import blog2 from "../../../assets/images/blog-2.png";
import blog3 from "../../../assets/images/blog-3.png";
import Section from "../../ui/Section";
import BlogCard from "../../ui/BlogCard";
import Button from "../../ui/Button";

/**
 * Ana sayfa blog bölümü
 * @returns {JSX.Element} - Blog bölümü
 */
const BlogSection = () => {
  // Blog post verileri
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      title: "Nasıl Para Gönderebilirim?",
      category: "KATEGORİ",
      date: "25 Ocak 2021",
      slug: "nasil-para-gonderebilirim",
    },
    {
      id: 2,
      image: blog2,
      title: "Paraca ile Harcama Takibi",
      category: "KATEGORİ",
      date: "25 Ocak 2021",
      slug: "paraca-ile-harcama-takibi",
    },
    {
      id: 3,
      image: blog3,
      title: "Faturalarımı Otomatik Ödeyebilir Miyim?",
      category: "KATEGORİ",
      date: "25 Ocak 2021",
      slug: "faturalarimi-otomatik-odeyebilir-miyim",
    },
  ];

  return (
    <Section accentTitle="BLOG" title="Takipte kal">
      {/* Masaüstü için Grid yapısı */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            category={post.category}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>

      {/* Mobil ve Tablet için Carousel */}
      <div className="lg:hidden carousel carousel-center w-full pb-8 space-x-4 rounded-box">
        {blogPosts.map((post) => (
          <div key={post.id} className="carousel-item">
            <BlogCard
              image={post.image}
              title={post.title}
              category={post.category}
              date={post.date}
              slug={post.slug}
              className="w-64 sm:w-72 md:w-96"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          to="/blog"
          variant="secondary"
          icon
          className="w-[300px] lg:w-[420px] justify-center">
          Daha fazlasına göz at
        </Button>
      </div>
    </Section>
  );
};

export default BlogSection;
