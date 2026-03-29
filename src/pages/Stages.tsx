import { motion } from "framer-motion";
import { MapPin, Clock, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stages = [
  {
    num: 1,
    name: "Cañón del Chicamocha",
    distance: "45 km",
    elevation: "1,800 m+",
    time: "~3-5 hrs",
    desc: "Inicio épico descendiendo al cañón más profundo de Colombia. Senderos técnicos entre barrancos y vegetación tropical.",
  },
  {
    num: 2,
    name: "Mesa de los Santos",
    distance: "55 km",
    elevation: "2,200 m+",
    time: "~4-6 hrs",
    desc: "Etapa reina con ascensos prolongados por caminos de barro. Las vistas de la mesa son una recompensa para el alma.",
  },
  {
    num: 3,
    name: "Páramo de Berlín",
    distance: "40 km",
    elevation: "1,500 m+",
    time: "~3-4 hrs",
    desc: "Etapa de alta montaña cruzando el páramo. Frío, neblina y barro definen esta jornada desafiante.",
  },
  {
    num: 4,
    name: "Serranía de los Yariguíes",
    distance: "50 km",
    elevation: "2,000 m+",
    time: "~4-5 hrs",
    desc: "Senderos singletrack a través del bosque nublado. Técnicamente exigente con raíces, rocas y barro profundo.",
  },
  {
    num: 5,
    name: "San Gil - La Final",
    distance: "35 km",
    elevation: "1,200 m+",
    time: "~2-4 hrs",
    desc: "Gran final en la capital extrema de Colombia. Circuito XCO con público vibrante y llegada triunfal.",
  },
];

const Stages = () => (
  <div className="min-h-screen pt-16">
    <section className="py-20">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h1 className="section-title text-foreground">LAS 5 <span className="text-gradient">ETAPAS</span></h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            225 kilómetros de pura adrenalina a través de los paisajes más impresionantes de Santander
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.num} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                className="bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
                whileHover={{ borderColor: "hsl(25 95% 53%)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-heading text-6xl md:text-8xl text-primary/30 leading-none">
                  {String(stage.num).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground">{stage.name}</h3>
                  <p className="text-muted-foreground mt-2">{stage.desc}</p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <span className="flex items-center gap-1 text-sm text-primary">
                      <MapPin size={16} /> {stage.distance}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-secondary">
                      <TrendingUp size={16} /> {stage.elevation}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-accent">
                      <Clock size={16} /> {stage.time}
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Stages;
