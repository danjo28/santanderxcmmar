import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Pelotón en montaña" },
  { src: gallery2, alt: "Celebración en meta" },
  { src: gallery3, alt: "Ruta aérea" },
  { src: gallery4, alt: "Barro y llantas" },
  { src: gallery5, alt: "Público colombiano" },
  { src: gallery6, alt: "Podio de premiación" },
];

const Gallery = () => (
  <div className="min-h-screen pt-16">
    <section className="py-20">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h1 className="section-title text-foreground">GALERÍA <span className="text-gradient">ÉPICA</span></h1>
          <p className="mt-4 text-muted-foreground">Momentos que capturan la esencia del ciclismo de montaña en Santander</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="overflow-hidden rounded-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-72 object-cover hover:brightness-110 transition-all duration-500"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </motion.div>
              <p className="text-sm text-muted-foreground mt-2">{img.alt}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
