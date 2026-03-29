import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <h1 className="section-title text-foreground">CONTÁCTANOS</h1>
            <p className="mt-4 text-muted-foreground">¿Preguntas sobre la carrera? ¿Quieres inscribirte? Escríbenos</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md font-heading text-xl tracking-wider hover:opacity-90 transition-opacity glow-shadow"
                >
                  ENVIAR MENSAJE
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl text-foreground mb-4">INFORMACIÓN</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary mt-1 shrink-0" size={20} />
                      <div>
                        <p className="text-foreground font-medium">Ubicación</p>
                        <p className="text-muted-foreground text-sm">Departamento de Santander, Colombia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="text-primary mt-1 shrink-0" size={20} />
                      <div>
                        <p className="text-foreground font-medium">Email</p>
                        <p className="text-muted-foreground text-sm">info@colombiamarathonrace.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-primary mt-1 shrink-0" size={20} />
                      <div>
                        <p className="text-foreground font-medium">Teléfono</p>
                        <p className="text-muted-foreground text-sm">+57 312 456 7890</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-heading text-xl text-primary mb-2">INSCRIPCIONES ABIERTAS</h4>
                  <p className="text-muted-foreground text-sm">
                    Las inscripciones para la Colombia Marathon Race 2026 están abiertas. 
                    Cupos limitados a 500 participantes. ¡No te quedes por fuera!
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
