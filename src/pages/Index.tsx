import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Sparkles, TrendingUp, Shield, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Conheça os Melhores Produtos Selecionados para Você | Seu Universo Digital</title>
        <meta 
          name="description" 
          content="Descubra produtos incríveis de tecnologia, saúde, negócios, beleza e educação. Selecionados especialmente para transformar sua vida e seus resultados."
        />
        <meta name="keywords" content="produtos digitais, tecnologia, saúde, negócios online, beleza, educação, afiliados" />
        <link rel="canonical" href="https://seuuniversodigital.com/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Conheça os Melhores Produtos
                <span className="block text-primary-glow">Selecionados para Você!</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Descubra soluções que transformam vidas e negócios. 
                Cada produto foi cuidadosamente selecionado para oferecer 
                qualidade, resultados e benefícios reais.
              </p>
              <Button 
                size="lg" 
                className="cta-gradient text-white hover:scale-105 transition-transform glow-effect"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explorar Produtos
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center slide-up">
                <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Produtos Testados</h3>
                <p className="text-muted-foreground">
                  Cada produto foi rigorosamente testado e aprovado por especialistas
                </p>
              </div>
              
              <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-secondary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
                <p className="text-muted-foreground">
                  Compromisso com a excelência e satisfação dos nossos usuários
                </p>
              </div>
              
              <div className="text-center slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-accent/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Milhares de Satisfeitos</h3>
                <p className="text-muted-foreground">
                  Junte-se a milhares de pessoas que já transformaram suas vidas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produtos" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Produtos Selecionados Especialmente para Você
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore nossa curadoria de produtos premium que vão elevar seus resultados
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className="slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
