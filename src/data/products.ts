export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  howToUse: string;
  testimonials: string[];
  faqs: { question: string; answer: string; }[];
  differentials: string[];
  keywords: string[];
  ctaText: string;
  affiliateLink: string;
  metaTitle: string;
  metaDescription: string;
  category: 'tech' | 'health' | 'business' | 'beauty' | 'education';
}

export const products: Product[] = [
  {
    id: 'lovable-ia',
    name: 'Lovable IA',
    shortDescription: 'Crie seus códigos de SaaS em segundos com inteligência artificial',
    fullDescription: 'A Lovable é uma plataforma revolucionária de inteligência artificial que permite criar aplicações web completas em questão de segundos. Fundada em 2023 por Anton Osika e Fabian Hedin, esta ferramenta está transformando a forma como desenvolvemos software, tornando a programação acessível para todos.',
    benefits: [
      'Criação de aplicações web em segundos',
      'Interface intuitiva e fácil de usar',
      'Código limpo e profissional gerado automaticamente',
      'Suporte para múltiplas tecnologias modernas',
      'Economia de tempo significativa no desenvolvimento',
      'Ideal para startups e empreendedores',
      'Não requer conhecimento avançado em programação'
    ],
    howToUse: 'Basta acessar a plataforma Lovable, descrever o que você deseja criar e a IA irá gerar o código completo da sua aplicação. É possível customizar, editar e fazer ajustes em tempo real através da interface visual.',
    testimonials: [
      'A Lovable mudou completamente minha forma de desenvolver. Em minutos tenho um MVP funcionando!',
      'Como empreendedor sem conhecimento técnico, consegui criar minha startup usando apenas a Lovable.',
      'A qualidade do código gerado é impressionante. Economizei meses de desenvolvimento.'
    ],
    faqs: [
      {
        question: 'Preciso saber programar para usar a Lovable?',
        answer: 'Não! A Lovable foi criada para ser acessível a todos, independente do nível de conhecimento técnico.'
      },
      {
        question: 'Que tipos de aplicações posso criar?',
        answer: 'Você pode criar desde landing pages simples até sistemas complexos de SaaS, e-commerce e aplicações empresariais.'
      },
      {
        question: 'O código gerado é de qualidade profissional?',
        answer: 'Sim! A Lovable gera código limpo, otimizado e seguindo as melhores práticas de desenvolvimento.'
      }
    ],
    differentials: [
      'IA avançada treinada especificamente para desenvolvimento web',
      'Interface visual intuitiva',
      'Geração de código instantânea',
      'Suporte técnico especializado',
      'Atualizações constantes e melhorias'
    ],
    keywords: ['lovable', 'ia', 'inteligencia artificial', 'desenvolvimento', 'saas', 'codigo', 'programacao'],
    ctaText: 'Quero Criar Meus SaaS Agora',
    affiliateLink: 'https://lovable.dev/?via=marcelo-barbosa',
    metaTitle: 'Lovable IA - Crie SaaS em Segundos com Inteligência Artificial',
    metaDescription: 'Descubra a Lovable IA, a plataforma que cria códigos de SaaS em segundos. Ideal para empreendedores e startups. Comece agora sem conhecimento técnico!',
    category: 'tech'
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    shortDescription: 'Hospedagem de sites profissional com domínios e performance superior',
    fullDescription: 'A Hostinger é uma das maiores empresas de hospedagem web do mundo, oferecendo soluções completas para sites, e-commerce e aplicações. Com servidores de alta performance, suporte 24/7 e preços acessíveis, é a escolha ideal para quem busca qualidade e confiabilidade.',
    benefits: [
      'Hospedagem ultra-rápida com SSD',
      'Domínios gratuitos inclusos',
      'SSL grátis para segurança máxima',
      'Suporte técnico 24/7 em português',
      'Painel de controle intuitivo',
      'Backup automático diário',
      'Uptime de 99.9% garantido',
      'Construtor de sites gratuito'
    ],
    howToUse: 'Escolha o plano ideal para suas necessidades, registre seu domínio e configure sua hospedagem através do painel intuitivo. Em poucos cliques seu site estará online com toda a infraestrutura necessária.',
    testimonials: [
      'Migrei para a Hostinger e meu site ficou 3x mais rápido! O suporte é excepcional.',
      'Preço justo e qualidade premium. Meu e-commerce nunca apresentou problemas.',
      'A facilidade de uso da Hostinger me surpreendeu. Recomendo para todos!'
    ],
    faqs: [
      {
        question: 'A Hostinger oferece domínio gratuito?',
        answer: 'Sim! Todos os planos anuais incluem um domínio gratuito por 1 ano.'
      },
      {
        question: 'Posso migrar meu site atual?',
        answer: 'Claro! A Hostinger oferece migração gratuita e nossa equipe técnica te ajuda em todo o processo.'
      },
      {
        question: 'Qual a garantia de uptime?',
        answer: 'Oferecemos garantia de uptime de 99.9%, assegurando que seu site esteja sempre online.'
      }
    ],
    differentials: [
      'Servidores em nuvem de última geração',
      'Tecnologia LiteSpeed para máxima velocidade',
      'Suporte especializado em português',
      'Preços competitivos sem taxa de setup',
      'Interface moderna e intuitiva'
    ],
    keywords: ['hostinger', 'hospedagem', 'dominio', 'site', 'servidor', 'web hosting'],
    ctaText: 'Quero Minha Hospedagem Agora',
    affiliateLink: 'https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB',
    metaTitle: 'Hostinger - Hospedagem Web Premium com Domínio Grátis',
    metaDescription: 'Hospedagem Hostinger com performance superior, domínio grátis e suporte 24/7. Ideal para sites e e-commerce. Comece hoje mesmo!',
    category: 'tech'
  },
  {
    id: 'formula-negocio-online',
    name: 'Fórmula Negócio Online FNO',
    shortDescription: 'Curso completo de Alex Vargas para criar seu negócio digital do zero',
    fullDescription: 'O Fórmula Negócio Online (FNO) é o curso mais completo do mercado para quem deseja criar um negócio digital de sucesso. Criado por Alex Vargas, especialista em marketing digital, este treinamento já transformou a vida de milhares de pessoas que começaram do zero e hoje faturam milhões.',
    benefits: [
      'Método comprovado com mais de 50.000 alunos aprovados',
      'Aprenda a vender online mesmo sem experiência',
      'Estratégias de tráfego pago e orgânico',
      'Como criar produtos digitais que vendem',
      'Funis de vendas de alta conversão',
      'Copywriting persuasivo para vendas',
      'Automação de marketing completa',
      'Suporte da comunidade exclusiva'
    ],
    howToUse: 'O curso é 100% online e você pode assistir no seu ritmo. São mais de 200 aulas práticas, com exercícios e templates prontos para usar. Basta aplicar passo a passo o que é ensinado.',
    testimonials: [
      'Saí do zero e hoje faturo R$ 100k/mês seguindo exatamente o FNO!',
      'Alex Vargas é um gênio! Suas estratégias mudaram completamente meu negócio.',
      'Em 6 meses aplicando o FNO consegui largar meu emprego e viver do digital.'
    ],
    faqs: [
      {
        question: 'Funciona para iniciantes?',
        answer: 'Sim! O FNO foi criado especialmente para quem está começando do zero no marketing digital.'
      },
      {
        question: 'Quanto tempo para ver resultados?',
        answer: 'Seguindo o método corretamente, é possível ver os primeiros resultados em 30-60 dias.'
      },
      {
        question: 'Preciso investir em anúncios?',
        answer: 'O curso ensina tanto tráfego orgânico quanto pago. Você pode começar sem investir em ads.'
      }
    ],
    differentials: [
      'Método testado por mais de 50.000 alunos',
      'Alex Vargas com mais de 10 anos de experiência',
      'Comunidade exclusiva de empreendedores',
      'Atualizações constantes do conteúdo',
      'Garantia de 7 dias'
    ],
    keywords: ['formula negocio online', 'alex vargas', 'marketing digital', 'negocio online', 'fno'],
    ctaText: 'Quero Transformar Minha Vida',
    affiliateLink: 'https://go.hotmart.com/E11195793E',
    metaTitle: 'Fórmula Negócio Online FNO - Curso Alex Vargas para Negócios Digitais',
    metaDescription: 'Aprenda com Alex Vargas como criar um negócio online de sucesso. Mais de 50.000 alunos aprovados. Comece do zero e mude sua vida!',
    category: 'business'
  },
  {
    id: 'carteira-estudante-digital',
    name: 'Carteira Nacional do Estudante Digital',
    shortDescription: 'Carteira de estudante oficial com desconto em ingressos e transporte',
    fullDescription: 'A Carteira Nacional do Estudante Digital é o documento oficial que garante ao estudante brasileiro o direito à meia-entrada em eventos culturais, esportivos e de lazer, além de descontos no transporte público. Válida em todo território nacional e reconhecida por lei.',
    benefits: [
      'Meia-entrada garantida por lei em todo o Brasil',
      'Desconto de até 50% em ingressos de cinema, teatro e shows',
      'Válida para transporte público com desconto',
      'Documento oficial reconhecido nacionalmente',
      'Processo 100% digital e rápido',
      'Válida por 1 ano acadêmico',
      'Aceita em todos os estabelecimentos por lei'
    ],
    howToUse: 'Após a compra, você receberá instruções para enviar seus documentos. Em até 48h úteis sua carteira digital estará pronta e você poderá imprimir ou usar no celular.',
    testimonials: [
      'Já economizei mais de R$ 500 só nos primeiros 3 meses usando a carteirinha!',
      'Super fácil de conseguir e realmente funciona em todos os lugares.',
      'Processo rápido e carteira chegou certinho. Vale muito a pena!'
    ],
    faqs: [
      {
        question: 'A carteira é realmente oficial?',
        answer: 'Sim! É emitida por entidade credenciada e tem validade legal em todo o território nacional.'
      },
      {
        question: 'Funciona em qualquer lugar do Brasil?',
        answer: 'Sim! A Carteira Nacional do Estudante é válida em todos os estados brasileiros.'
      },
      {
        question: 'Quanto tempo demora para ficar pronta?',
        answer: 'Em até 48 horas úteis após o envio da documentação completa.'
      }
    ],
    differentials: [
      'Processo 100% online',
      'Validade legal garantida',
      'Suporte especializado',
      'Economia comprovada',
      'Reconhecimento nacional'
    ],
    keywords: ['carteira estudante', 'meia entrada', 'desconto estudante', 'carteirinha'],
    ctaText: 'Quero Minha Carteira Agora',
    affiliateLink: 'https://app.monetizze.com.br/r/AWH25502896',
    metaTitle: 'Carteira Nacional do Estudante Digital - Meia Entrada Garantida',
    metaDescription: 'Carteira de estudante oficial com meia-entrada em todo Brasil. Processo digital rápido e economia garantida. Solicite já!',
    category: 'education'
  },
  {
    id: 'mounja-slim',
    name: 'Mounja Slim',
    shortDescription: 'O segredo por trás da perda de peso rápida e saudável',
    fullDescription: 'MounjaSlim é a solução revolucionária para quem busca emagrecer de forma rápida, saudável e duradoura. Com fórmula avançada e ingredientes naturais, este produto tem ajudado milhares de pessoas a conquistarem o corpo dos sonhos sem sofrimento ou restrições extremas.',
    benefits: [
      'Perda de peso acelerada e saudável',
      'Redução da fome e ansiedade por comida',
      'Aumento do metabolismo natural',
      'Queima de gordura localizada',
      'Mais energia e disposição',
      'Fórmula 100% natural',
      'Resultados visíveis em poucos dias',
      'Sem efeitos colaterais'
    ],
    howToUse: 'Tome 2 cápsulas ao dia, preferencialmente 30 minutos antes das principais refeições, acompanhadas de água. Para melhores resultados, combine com uma alimentação balanceada e atividade física regular.',
    testimonials: [
      'Perdi 15kg em 3 meses com MounjaSlim! Nunca me senti tão bem comigo mesma.',
      'Finalmente encontrei algo que funciona de verdade. Recomendo para todas as amigas!',
      'Sem dietas malucas, sem sofrimento. MounjaSlim mudou minha relação com o peso.'
    ],
    faqs: [
      {
        question: 'MounjaSlim tem efeitos colaterais?',
        answer: 'Não! MounjaSlim é formulado com ingredientes naturais e não causa efeitos colaterais quando usado conforme orientações.'
      },
      {
        question: 'Em quanto tempo vou ver resultados?',
        answer: 'Os primeiros resultados podem ser percebidos já na primeira semana, com resultados mais significativos a partir do primeiro mês.'
      },
      {
        question: 'Posso usar durante a gravidez?',
        answer: 'Não recomendamos o uso durante gravidez ou amamentação. Consulte sempre seu médico antes de iniciar qualquer suplementação.'
      }
    ],
    differentials: [
      'Fórmula exclusiva e patenteada',
      'Ingredientes naturais premium',
      'Aprovado pela ANVISA',
      'Resultados cientificamente comprovados',
      'Garantia de satisfação'
    ],
    keywords: ['mounja slim', 'emagrecimento', 'perda peso', 'suplemento natural', 'queima gordura'],
    ctaText: 'Quero Emagrecer Agora',
    affiliateLink: 'https://app.monetizze.com.br/r/AJZ25504136',
    metaTitle: 'MounjaSlim - Perda de Peso Rápida e Saudável | Fórmula Natural',
    metaDescription: 'Descubra MounjaSlim, o segredo para emagrecer rápido e saudável. Fórmula natural, sem efeitos colaterais. Resultados comprovados!',
    category: 'health'
  },
  {
    id: 'hidraliso',
    name: 'Hidraliso',
    shortDescription: 'Alisante de chuveiro - Liso em minutos, simples e prático!',
    fullDescription: 'Hidraliso é o revolucionário alisante de chuveiro que transforma seus cabelos em minutos. Sem formol, sem ardência e sem cheiro desagradável, proporciona cabelos lisos e hidratados desde a primeira aplicação. Compatible com qualquer tipo de cabelo e química.',
    benefits: [
      'Liso perfeito em minutos',
      'Sem formol, sem ardência e sem cheiro',
      'Cabelos hidratados e brilhantes',
      'Não desbota nem amarela os fios',
      'Compatível com qualquer química',
      'Para todos os tipos de cabelo',
      'Efeito prolongado',
      'Economia e praticidade'
    ],
    howToUse: 'Aplique o Hidraliso nos cabelos úmidos, massageie suavemente, deixe agir por 3-5 minutos e enxágue. Use durante o banho para máxima praticidade. Pode ser usado 2-3 vezes por semana.',
    testimonials: [
      'Incrível! Meu cabelo ficou liso e brilhoso como nunca. Super prático de usar!',
      'Acabou minha guerra com o cabelo crespo. Hidraliso é minha salvação!',
      'Praticidade total! Uso no chuveiro e pronto, cabelo lindo o dia todo.'
    ],
    faqs: [
      {
        question: 'Hidraliso funciona em cabelo crespo?',
        answer: 'Sim! Hidraliso é eficaz em todos os tipos de cabelo, desde ondulados até crespos mais volumosos.'
      },
      {
        question: 'Posso usar com outras químicas?',
        answer: 'Sim! Hidraliso é compatível com relaxamento, coloração, luzes e outras químicas sem causar danos.'
      },
      {
        question: 'Por quanto tempo dura o efeito?',
        answer: 'O efeito pode durar de 3 a 7 dias, dependendo do tipo de cabelo e cuidados pós-aplicação.'
      }
    ],
    differentials: [
      'Único alisante de chuveiro do mercado',
      'Fórmula livre de formol',
      'Ação hidratante profunda',
      'Aplicação super simples',
      'Resultados imediatos'
    ],
    keywords: ['hidraliso', 'alisante chuveiro', 'cabelo liso', 'sem formol', 'pratico'],
    ctaText: 'Quero Cabelos Lisos Já',
    affiliateLink: 'https://app.monetizze.com.br/r/AWW11504208',
    metaTitle: 'Hidraliso - Alisante de Chuveiro Sem Formol | Liso em Minutos',
    metaDescription: 'Hidraliso: alisante de chuveiro revolucionário! Cabelos lisos em minutos, sem formol, ardência ou cheiro. Para todos os tipos de cabelo!',
    category: 'beauty'
  },
  {
    id: 'nutra-vida',
    name: 'Nutra Vida',
    shortDescription: 'Testado & aprovado - 2 cápsulas ao dia para engravidar!',
    fullDescription: 'Nutra Vida é o suplemento natural desenvolvido especificamente para mulheres que desejam engravidar. Com fórmula rica em nutrientes essenciais, vitaminas e minerais, ajuda a preparar o organismo feminino para uma gravidez saudável, mesmo em casos complexos como laqueaduras, ovários policísticos e endometriose.',
    benefits: [
      'Aumenta as chances de gravidez natural',
      'Regula o ciclo menstrual',
      'Melhora a qualidade dos óvulos',
      'Fortalece o sistema reprodutivo',
      'Rico em ácido fólico e vitaminas',
      'Reduz riscos de aborto espontâneo',
      'Prepara o corpo para gestação',
      'Fórmula natural e segura'
    ],
    howToUse: 'Tome 2 cápsulas ao dia, preferencialmente pela manhã e à noite, com água e de estômago cheio. Use continuamente por pelo menos 3 meses para melhores resultados.',
    testimonials: [
      'Depois de 5 anos tentando, consegui engravidar usando Nutra Vida. Gratidão eterna!',
      'Tinha ovários policísticos e médicos diziam ser difícil. Nutra Vida mudou tudo!',
      'Minha menstruação se regulou e em 4 meses estava grávida. Produto milagroso!'
    ],
    faqs: [
      {
        question: 'Nutra Vida funciona para quem tem endometriose?',
        answer: 'Sim! Nutra Vida é especialmente formulado para ajudar mulheres com endometriose, ovários policísticos e outras condições.'
      },
      {
        question: 'Posso usar se fiz laqueadura?',
        answer: 'Embora Nutra Vida otimize a fertilidade, laqueadura é um procedimento cirúrgico que impede fisicamente a gravidez.'
      },
      {
        question: 'Em quanto tempo posso engravidar?',
        answer: 'Os resultados variam, mas muitas mulheres relatam gravidez entre 3 a 6 meses de uso contínuo.'
      }
    ],
    differentials: [
      'Fórmula específica para fertilidade',
      'Ingredientes naturais premium',
      'Aprovado por especialistas',
      'Milhares de casos de sucesso',
      'Acompanhamento nutricional incluso'
    ],
    keywords: ['nutra vida', 'engravidar', 'fertilidade', 'ovarios policisticos', 'endometriose'],
    ctaText: 'Quero Engravidar Agora',
    affiliateLink: 'https://app.monetizze.com.br/r/AXC25503421',
    metaTitle: 'Nutra Vida - Suplemento Natural para Engravidar | Fertilidade Feminina',
    metaDescription: 'Nutra Vida: suplemento natural que aumenta as chances de gravidez. Ideal para ovários policísticos, endometriose. Resultados comprovados!',
    category: 'health'
  },
  {
    id: 'agenciagram',
    name: 'Agênciagram',
    shortDescription: 'Seguidores no Instagram - Cresça sua audiência de forma orgânica',
    fullDescription: 'Agênciagram é a solução completa para quem deseja fazer o Instagram crescer de forma orgânica e autêntica. Com estratégias comprovadas e técnicas avançadas de marketing digital, você aprenderá a atrair seguidores reais, engajados e que realmente se interessam pelo seu conteúdo.',
    benefits: [
      'Crescimento orgânico e autêntico',
      'Seguidores reais e engajados',
      'Estratégias de conteúdo viral',
      'Técnicas de hashtags eficazes',
      'Automação inteligente',
      'Análise de métricas detalhada',
      'Suporte especializado',
      'Resultados em 30 dias'
    ],
    howToUse: 'Após a compra, você receberá acesso ao curso completo com vídeo-aulas práticas, templates prontos e ferramentas exclusivas. Aplique as estratégias passo a passo e acompanhe seu crescimento.',
    testimonials: [
      'Saí de 500 para 10k seguidores em 2 meses com Agênciagram! Conteúdo incrível.',
      'As estratégias funcionam mesmo! Meu engagement aumentou 300% rapidinho.',
      'Melhor investimento que fiz para meu Instagram. Agora tenho uma audiência real!'
    ],
    faqs: [
      {
        question: 'Os seguidores são reais?',
        answer: 'Sim! Agênciagram ensina apenas estratégias para atrair seguidores reais e orgânicos, sem bots ou perfis falsos.'
      },
      {
        question: 'Funciona para qualquer nicho?',
        answer: 'Sim! As estratégias são adaptáveis para qualquer nicho: beleza, fitness, negócios, lifestyle, etc.'
      },
      {
        question: 'Preciso de conhecimento prévio?',
        answer: 'Não! O curso é para iniciantes e avançados, com explicações passo a passo.'
      }
    ],
    differentials: [
      'Método 100% orgânico',
      'Estratégias atualizadas constantemente',
      'Comunidade exclusiva de alunos',
      'Suporte técnico personalizado',
      'Garantia de resultados'
    ],
    keywords: ['agenciagram', 'instagram', 'seguidores', 'crescimento organico', 'marketing digital'],
    ctaText: 'Quero Crescer no Instagram',
    affiliateLink: 'https://app.monetizze.com.br/r/ALZ12471991',
    metaTitle: 'Agênciagram - Como Ganhar Seguidores Reais no Instagram',
    metaDescription: 'Aprenda com Agênciagram como ganhar seguidores reais no Instagram. Crescimento orgânico, estratégias comprovadas. Comece hoje!',
    category: 'business'
  }
];