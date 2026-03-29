import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const posts = [
  {
    slug: "preparacion-carrera",
    title: "Cómo Prepararte Para la Colombia Marathon Race",
    excerpt: "Consejos de entrenamiento, nutrición y equipamiento para afrontar los 225 km de la carrera más exigente de Santander.",
    date: "15 Mar 2026",
    image: gallery1,
  },
  {
    slug: "rutas-santander",
    title: "Las Mejores Rutas de MTB en Santander",
    excerpt: "Descubre los senderos más espectaculares del departamento, desde el Cañón del Chicamocha hasta la Serranía de los Yariguíes.",
    date: "28 Feb 2026",
    image: gallery3,
  },
  {
    slug: "ciclismo-colombia",
    title: "El Auge del Ciclismo de Montaña en Colombia",
    excerpt: "Colombia se posiciona como destino mundial del MTB. Conoce cómo la pasión por las dos ruedas transforma comunidades enteras.",
    date: "10 Feb 2026",
    image: gallery5,
  },
];

const Blog = () => (
  <div className="min-h-screen pt-16">
    <section className="py-20">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h1 className="section-title text-foreground">NUESTRO <span className="text-gradient">BLOG</span></h1>
          <p className="mt-4 text-muted-foreground">Noticias, consejos y todo sobre el ciclismo de montaña en Colombia</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.15}>
              <article className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary transition-colors">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-semibold uppercase">{post.date}</span>
                  <h3 className="font-heading text-xl text-foreground mt-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-block mt-4 text-primary text-sm font-semibold hover:underline">
                    Leer más →
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
