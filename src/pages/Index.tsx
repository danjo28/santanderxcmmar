import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mountain, Users, Trophy, MapPin, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CountdownTimer from "@/components/CountdownTimer";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const stats = [
  { icon: Mountain, label: "5 Etapas", desc: "Recorridos épicos" },
  { icon: MapPin, label: "Santander", desc: "Colombia" },
  { icon: Users, label: "500+", desc: "Competidores" },
  { icon: Trophy, label: "XCO & XCM", desc: "Categorías" },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Mountain biking race" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
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
          Carrera de ciclismo de montaña y XCO por etapas en el departamento de Santander
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
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
      </div>
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

    {/* About Preview */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <h2 className="section-title text-foreground">LA AVENTURA<br /><span className="text-gradient">TE ESPERA</span></h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Colombia Marathon Race es una competición de ciclismo de montaña por etapas, realizada durante 5 días 
            en las inmediaciones de los majestuosos cerros del departamento de Santander, Colombia. El evento fue 
            ideado y desarrollado basado en la filosofía del XCO (Cross Country Olympic) combinado con el Maratón de montaña.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Vive la experiencia de recorrer senderos llenos de barro, subidas técnicas y descensos vertiginosos 
            en uno de los paisajes más espectaculares de Sudamérica.
          </p>
          <Link to="/nosotros" className="inline-block mt-6 text-primary font-semibold hover:underline">
            Conoce más →
          </Link>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <img src={gallery1} alt="Ciclistas en competencia" className="rounded-lg shadow-2xl w-full" loading="lazy" width={1024} height={768} />
        </ScrollReveal>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="py-20 bg-card">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <h2 className="section-title text-foreground">MOMENTOS <span className="text-gradient">ÉPICOS</span></h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[gallery1, gallery2, gallery3].map((img, i) => (
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

    {/* CTA */}
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <ScrollReveal className="container relative text-center">
        <h2 className="section-title text-foreground">¿LISTO PARA<br /><span className="text-gradient">EL DESAFÍO?</span></h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Inscríbete ahora y sé parte de la carrera de ciclismo de montaña más emocionante de Colombia.
        </p>
        <Link
          to="/contacto"
          className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-md font-heading text-2xl tracking-wider hover:opacity-90 transition-opacity glow-shadow"
        >
          INSCRÍBETE AHORA
        </Link>
      </ScrollReveal>
    </section>
  </div>
);

export default Index;
