import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mountain, Users, Trophy, MapPin, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CountdownTimer from "@/components/CountdownTimer";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import sponsorShimano from "@/assets/sponsor-shimano.png";
import sponsorGopro from "@/assets/sponsor-gopro.png";
import sponsorRedbull from "@/assets/sponsor-redbull.png";
import sponsorSantander from "@/assets/sponsor-santander.png";
import sponsorFox from "@/assets/sponsor-fox.png";

const stats = [
  { icon: Mountain, label: "5 Etapas", desc: "Recorridos épicos" },
  { icon: MapPin, label: "Santander", desc: "Colombia" },
  { icon: Users, label: "500+", desc: "Competidores" },
  { icon: Trophy, label: "XCO & XCM", desc: "Categorías" },
];

const ParallaxSection = ({ image, children }: { image: string; children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={image} alt="" className="w-full h-[140%] object-cover" loading="lazy" width={1920} height={1080} />
      </motion.div>
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 container">{children}</div>
    </section>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="min-h-screen">
      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src={heroBg} alt="Mountain biking race" className="w-full h-full object-cover" width={1920} height={1080} />
        </motion.div>
        <div className="absolute inset-0 hero-overlay" />
        <motion.div className="relative z-10 text-center px-4 max-w-4xl" style={{ opacity: heroOpacity }}>
          <motion.h1
            className="font-heading text-6xl md:text-9xl text-foreground leading-none tracking-wider"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            COLOMBIA<br />
            <span className="text-gradient">MARATHON RACE</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-foreground/80 font-body max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            15 — 20 de Agosto, 2026 · Santander, Colombia
          </motion.p>
          <motion.p
            className="mt-2 text-base md:text-lg text-foreground/60 font-body max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Carrera de ciclismo de montaña y XCO por etapas
          </motion.p>
          <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <CountdownTimer />
          </motion.div>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/contacto" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-heading text-xl tracking-wider hover:opacity-90 transition-opacity glow-shadow">
              INSCRÍBETE
            </Link>
            <Link to="/etapas" className="border border-foreground/30 text-foreground px-8 py-3 rounded-md font-heading text-xl tracking-wider hover:border-primary hover:text-primary transition-colors">
              VER ETAPAS
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1} className="text-center">
              <s.icon className="mx-auto text-primary mb-3" size={36} />
              <h3 className="font-heading text-2xl md:text-3xl text-foreground">{s.label}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About Preview with Parallax */}
      <ParallaxSection image={gallery11}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="section-title text-foreground">LA AVENTURA<br /><span className="text-gradient">TE ESPERA</span></h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Colombia Marathon Race es una competición de ciclismo de montaña por etapas, realizada durante 5 días 
              en las inmediaciones de los majestuosos cerros del departamento de Santander, Colombia. El evento fue 
              ideado y desarrollado basado en la filosofía del XCO (Cross Country Olympic) combinado con el Maratón de montaña.
            </p>
            <p className="mt-3 text-foreground/80 leading-relaxed">
              Vive la experiencia de recorrer senderos llenos de barro, subidas técnicas y descensos vertiginosos 
              en uno de los paisajes más espectaculares de Sudamérica.
            </p>
            <Link to="/nosotros" className="inline-block mt-6 text-primary font-semibold hover:underline">
              Conoce más →
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <motion.img
              src={gallery1}
              alt="Ciclistas en competencia"
              className="rounded-lg shadow-2xl w-full"
              loading="lazy"
              width={1024}
              height={768}
              whileInView={{ rotate: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Gallery Preview */}
      <section className="py-20 bg-card">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <h2 className="section-title text-foreground">MOMENTOS <span className="text-gradient">ÉPICOS</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[gallery7, gallery2, gallery3].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <motion.div
                  className="overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={img} alt={`Galería ${i + 1}`} className="w-full h-64 object-cover" loading="lazy" width={1024} height={768} />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/galeria" className="text-primary font-semibold hover:underline">Ver galería completa →</Link>
          </div>
        </div>
      </section>

      {/* Patrocinadores */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <h2 className="section-title text-foreground">PATROCINADORES <span className="text-gradient">OFICIALES</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              { src: sponsorShimano, alt: "Shimano" },
              { src: sponsorGopro, alt: "GoPro" },
              { src: sponsorRedbull, alt: "Red Bull" },
              { src: sponsorSantander, alt: "Gobernación de Santander" },
              { src: sponsorFox, alt: "Fox Racing" },
            ].map((s, i) => (
              <ScrollReveal key={s.alt} delay={i * 0.1}>
                <motion.img
                  src={s.src}
                  alt={s.alt}
                  className="h-16 md:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 invert"
                  loading="lazy"
                  width={512}
                  height={512}
                  whileHover={{ scale: 1.1 }}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      <ParallaxSection image={gallery7}>
        <div className="text-center">
          <ScrollReveal>
            <h2 className="section-title text-foreground">¿LISTO PARA<br /><span className="text-gradient">EL DESAFÍO?</span></h2>
            <p className="mt-4 text-foreground/80 max-w-xl mx-auto">
              Inscríbete ahora y sé parte de la carrera de ciclismo de montaña más emocionante de Colombia.
            </p>
            <Link
              to="/contacto"
              className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-md font-heading text-2xl tracking-wider hover:opacity-90 transition-opacity glow-shadow"
            >
              INSCRÍBETE AHORA
            </Link>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Index;
