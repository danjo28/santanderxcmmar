import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";

const images = [
  { src: gallery1, alt: "Pelotón en montaña", span: "col-span-1 row-span-1" },
  { src: gallery2, alt: "Celebración en meta", span: "col-span-1 row-span-1" },
  { src: gallery7, alt: "Salto épico", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: gallery9, alt: "Determinación pura", span: "col-span-1 row-span-1" },
  { src: gallery3, alt: "Ruta aérea Santander", span: "col-span-1 row-span-1" },
  { src: gallery8, alt: "Cruce de río", span: "col-span-1 row-span-1" },
  { src: gallery4, alt: "Barro y llantas", span: "col-span-1 row-span-1" },
  { src: gallery11, alt: "Bosque de niebla", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: gallery5, alt: "Público colombiano", span: "col-span-1 row-span-1" },
  { src: gallery10, alt: "Zona de mecánicos", span: "col-span-1 row-span-1" },
  { src: gallery6, alt: "Podio de premiación", span: "col-span-1 row-span-1" },
  { src: gallery12, alt: "Campamento nocturno", span: "col-span-1 sm:col-span-2 row-span-1" },
];

const ParallaxImage = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden rounded-lg cursor-pointer relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
    >
      <div className="overflow-hidden h-64 md:h-72 relative">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-[120%] object-cover absolute top-0 left-0"
          style={{ y }}
          loading="lazy"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-sm font-medium text-foreground">{alt}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ParallaxHeroBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <img
          src={gallery7}
          alt="Galería hero"
          className="w-full h-[130%] object-cover"
          width={1024}
          height={768}
        />
      </motion.div>
      <div className="absolute inset-0 hero-overlay" />
      <motion.div className="relative z-10 text-center" style={{ y: textY, opacity }}>
        <h1 className="section-title text-foreground">GALERÍA <span className="text-gradient">ÉPICA</span></h1>
        <p className="mt-4 text-foreground/80 text-lg">12 momentos que capturan la esencia del ciclismo de montaña en Santander</p>
      </motion.div>
    </section>
  );
};

const Gallery = () => (
  <div className="min-h-screen pt-16">
    <ParallaxHeroBanner />

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className={img.span}>
              <ParallaxImage src={img.src} alt={img.alt} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
