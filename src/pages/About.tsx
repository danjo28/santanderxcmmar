import ScrollReveal from "@/components/ScrollReveal";
import aboutBg from "@/assets/about-bg.jpg";
import joseDaniel from "@/assets/jose-daniel.jpg";

const About = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={aboutBg} alt="Atardecer en Santander" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={800} />
      <div className="absolute inset-0 hero-overlay" />
      <h1 className="relative z-10 section-title text-foreground text-center">SOBRE <span className="text-gradient">NOSOTROS</span></h1>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">NUESTRA HISTORIA</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Colombia Marathon Race nació de la pasión por el ciclismo de montaña y el deseo de mostrar al mundo los 
            paisajes extraordinarios del departamento de Santander. Con 5 etapas que recorren cañones profundos, 
            montañas verdes y senderos llenos de barro, esta carrera es una celebración del espíritu aventurero colombiano.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuestra misión es posicionar a Santander como destino mundial del ciclismo de montaña, promoviendo el 
            turismo deportivo, el desarrollo local y la conservación del medio ambiente.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-12 mb-6">EL ORGANIZADOR</h2>
          <div className="bg-card rounded-lg p-8 border border-border flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img src={joseDaniel} alt="Jose Daniel Pulecio Martinez" className="w-32 h-32 rounded-full object-cover border-4 border-primary shrink-0" loading="lazy" width={512} height={512} />
            <div>
              <h3 className="font-heading text-2xl text-primary">Jose Daniel Pulecio Martinez</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Apasionado por el ciclismo de montaña y el deporte al aire libre, Jose Daniel es el fundador y 
                director de Colombia Marathon Race. Con años de experiencia en la organización de eventos deportivos 
                en Colombia, su visión es crear una carrera que desafíe los límites de los competidores mientras 
                celebra la riqueza natural de Santander.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-12 mb-6">¿QUÉ ES XCO?</h2>
          <p className="text-muted-foreground leading-relaxed">
            XCO (Cross Country Olympic) es la modalidad olímpica del ciclismo de montaña. Los circuitos son 
            técnicos, con subidas exigentes y descensos rápidos. Combinado con etapas de maratón de montaña, 
            la Colombia Marathon Race ofrece una experiencia completa para ciclistas de todos los niveles.
          </p>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default About;
