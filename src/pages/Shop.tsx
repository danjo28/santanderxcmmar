import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const products = [
  {
    name: "Jersey Oficial CMR 2026",
    price: "$180.000 COP",
    desc: "Jersey técnico de manga corta con diseño exclusivo Colombia Marathon Race. Material transpirable y secado rápido.",
    category: "Indumentaria",
  },
  {
    name: "Kit de Inscripción Premium",
    price: "$450.000 COP",
    desc: "Incluye inscripción a las 5 etapas, jersey oficial, número de competencia, chip de cronometraje y kit de bienvenida.",
    category: "Inscripción",
  },
  {
    name: "Kit de Inscripción Básico",
    price: "$280.000 COP",
    desc: "Inscripción a las 5 etapas, número de competencia y chip de cronometraje. Ideal para competidores experimentados.",
    category: "Inscripción",
  },
  {
    name: "Buff Oficial CMR",
    price: "$35.000 COP",
    desc: "Buff multifuncional con diseño colombiano. Protección UV y material antibacterial.",
    category: "Accesorios",
  },
  {
    name: "Bidón CMR 750ml",
    price: "$25.000 COP",
    desc: "Bidón ergonómico con válvula de alto flujo. Libre de BPA. Diseño exclusivo CMR.",
    category: "Accesorios",
  },
  {
    name: "Pack Alojamiento + Carrera",
    price: "$850.000 COP",
    desc: "5 noches de alojamiento en Santander + inscripción premium. Transporte entre etapas incluido.",
    category: "Paquetes",
  },
];

const Shop = () => (
  <div className="min-h-screen pt-16">
    <section className="py-20">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h1 className="section-title text-foreground">TIENDA & <span className="text-gradient">SERVICIOS</span></h1>
          <p className="mt-4 text-muted-foreground">Productos oficiales e inscripciones para la Colombia Marathon Race</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.1}>
              <motion.div
                className="bg-card border border-border rounded-lg p-6 flex flex-col h-full hover:border-primary transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{product.category}</span>
                <h3 className="font-heading text-xl text-foreground mt-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 flex-1">{product.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-heading text-2xl text-primary">{product.price}</span>
                  <button
                    onClick={() => toast.success(`"${product.name}" agregado al carrito`)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Agregar
                  </button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Shop;
