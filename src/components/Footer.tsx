import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Seu Universo Digital
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Descubra os melhores produtos selecionados especialmente para você. 
              Qualidade, confiabilidade e benefícios que transformam vidas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-muted-foreground hover:text-primary transition-colors">
                  Sitemap
                </a>
              </li>
              <li>
                <Link to="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="text-muted-foreground space-y-2">
              <p>contato@seuuniversodigital.com</p>
              <p>Atendimento: 24/7</p>
            </div>
          </div>
          
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Seu Universo Digital. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Links de afiliado: Este site contém links de afiliado
          </p>
        </div>
      </div>
    </footer>
  );
};