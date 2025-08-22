import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { 
  ExternalLink, 
  CheckCircle, 
  Star, 
  HelpCircle, 
  TrendingUp,
  Award,
  Users,
  Clock
} from "lucide-react";

const categoryColors = {
  tech: "bg-blue-100 text-blue-800",
  health: "bg-green-100 text-green-800", 
  business: "bg-purple-100 text-purple-800",
  beauty: "bg-pink-100 text-pink-800",
  education: "bg-yellow-100 text-yellow-800"
};

const categoryLabels = {
  tech: "Tecnologia",
  health: "Saúde",
  business: "Negócios", 
  beauty: "Beleza",
  education: "Educação"
};

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={product.keywords.join(', ')} />
        <link rel="canonical" href={`https://seuuniversodigital.com/produto/${product.id}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={product.metaTitle} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://seuuniversodigital.com/produto/${product.id}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.metaTitle} />
        <meta name="twitter:description" content={product.metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="hero-gradient text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in">
              <Badge className={`${categoryColors[product.category]} mb-4`}>
                {categoryLabels[product.category]}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {product.shortDescription}
              </p>
              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="cta-gradient text-white hover:scale-105 transition-transform glow-effect"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {product.ctaText}
                </Button>
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Product Description */}
          <section className="mb-12">
            <Card className="product-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Award className="mr-2 h-6 w-6" />
                  Sobre o Produto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {product.fullDescription}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Benefits */}
          <section className="mb-12">
            <Card className="product-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <TrendingUp className="mr-2 h-6 w-6" />
                  Principais Benefícios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Use */}
          <section className="mb-12">
            <Card className="product-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Clock className="mr-2 h-6 w-6" />
                  Como Usar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {product.howToUse}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Testimonials */}
          <section className="mb-12">
            <Card className="product-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Users className="mr-2 h-6 w-6" />
                  Depoimentos de Usuários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {product.testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Differentials */}
          <section className="mb-12">
            <Card className="product-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Diferenciais Únicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.differentials.map((differential, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{differential}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <Card className="product-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <HelpCircle className="mr-2 h-6 w-6" />
                  Perguntas Frequentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {product.faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">
                        {faq.question}
                      </h4>
                      <p className="text-muted-foreground pl-4 border-l-2 border-muted">
                        {faq.answer}
                      </p>
                      {index < product.faqs.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Final CTA */}
          <section className="text-center mb-12">
            <Card className="product-card bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4">
                  Pronto para Transformar Sua Vida?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Junte-se a milhares de pessoas que já escolheram a excelência
                </p>
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="cta-gradient text-white hover:scale-105 transition-transform glow-effect"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    {product.ctaText}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </section>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;