import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Seu Universo Digital</title>
        <meta 
          name="description" 
          content="Conheça nossa política de privacidade e como protegemos seus dados pessoais no Seu Universo Digital."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="product-card">
            <CardHeader>
              <CardTitle className="text-3xl text-primary mb-4">
                Política de Privacidade
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">1. Informações Gerais</h2>
                  <p>
                    Esta Política de Privacidade descreve como coletamos, usamos e protegemos 
                    suas informações pessoais quando você visita nosso site Seu Universo Digital.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">2. Informações que Coletamos</h2>
                  <p>Podemos coletar as seguintes informações:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Informações de navegação (cookies, IP, navegador)</li>
                    <li>Dados de interação com links de afiliado</li>
                    <li>Informações fornecidas voluntariamente em formulários</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">3. Como Usamos suas Informações</h2>
                  <p>Utilizamos suas informações para:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Melhorar a experiência do usuário em nosso site</li>
                    <li>Analisar o tráfego e comportamento dos visitantes</li>
                    <li>Personalizar conteúdo e recomendações</li>
                    <li>Cumprir obrigações legais</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">4. Links de Afiliado</h2>
                  <p>
                    Este site contém links de afiliado. Isso significa que podemos receber 
                    uma comissão quando você clica em certos links e faz uma compra. 
                    Isso não afeta o preço que você paga pelo produto.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">5. Cookies</h2>
                  <p>
                    Utilizamos cookies para melhorar sua experiência de navegação. 
                    Você pode configurar seu navegador para recusar cookies, mas isso 
                    pode afetar a funcionalidade do site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">6. Proteção de Dados</h2>
                  <p>
                    Implementamos medidas de segurança apropriadas para proteger suas 
                    informações pessoais contra acesso não autorizado, alteração, 
                    divulgação ou destruição.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">7. Seus Direitos</h2>
                  <p>Você tem o direito de:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Solicitar acesso aos seus dados pessoais</li>
                    <li>Solicitar correção de dados incorretos</li>
                    <li>Solicitar exclusão de seus dados</li>
                    <li>Retirar consentimento a qualquer momento</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">8. Contato</h2>
                  <p>
                    Para questões sobre esta Política de Privacidade, entre em contato 
                    conosco através do email: contato@seuuniversodigital.com
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">9. Alterações na Política</h2>
                  <p>
                    Reservamos o direito de atualizar esta Política de Privacidade a 
                    qualquer momento. As alterações serão publicadas nesta página.
                  </p>
                </section>

                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm">
                    <strong>Última atualização:</strong> 22 de agosto de 2024
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;