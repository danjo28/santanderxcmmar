import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-2xl text-primary mb-3">COLOMBIA MARATHON RACE</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Carrera de ciclismo de montaña y XCO por etapas en el corazón de Santander, Colombia.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg text-foreground mb-3">ENLACES</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link>
            <Link to="/etapas" className="hover:text-primary transition-colors">Etapas</Link>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link to="/galeria" className="hover:text-primary transition-colors">Galería</Link>
            <Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg text-foreground mb-3">SÍGUENOS</h4>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-muted-foreground text-sm mt-4">info@colombiamarathonrace.com</p>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © 2026 Colombia Marathon Race. Creado por Jose Daniel Pulecio Martinez. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
