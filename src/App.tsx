import React, { useState } from 'react';

// Componente principal do aplicativo
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dados dos serviços conforme solicitado pelo usuário
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.5V13M12 13L9 16M12 13L15 16M12 21.5C14.7614 21.5 17 19.2614 17 16.5C17 13.7386 14.7614 11.5 12 11.5C9.23858 11.5 7 13.7386 7 16.5C7 19.2614 9.23858 21.5 12 21.5Z"/><path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 12 14 12 14C12 14 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z"/></svg>
      ),
      title: "Assistência Médica Domiciliar",
      description: "Consultas, acompanhamento e coordenação de cuidados por nossa equipe de médicos especializados.",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 17h-5M17 22v-5M17 12V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12"/></svg>
      ),
      title: "Serviço de Enfermagem 24h",
      description: "Cuidados técnicos e humanizados, administração de medicamentos, curativos e monitoramento contínuo.",
      color: "bg-teal-500/10 text-teal-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6V12L16 14"/></svg>
      ),
      title: "Fisioterapia e Reabilitação",
      description: "Sessões personalizadas para recuperação motora, respiratória e funcional no conforto do lar.",
      color: "bg-indigo-500/10 text-indigo-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M14.5 11.5L11.5 14.5M11.5 11.5L14.5 14.5"/></svg>
      ),
      title: "Nutrição e Dietoterapia",
      description: "Elaboração de planos alimentares específicos para patologias, dietas enterais e suplementação.",
      color: "bg-lime-500/10 text-lime-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20l4-16"/><path d="M1 10h19"/><path d="M5 10v10"/><path d="M15 4v16"/></svg>
      ),
      title: "Fonoaudiologia Domiciliar",
      description: "Reabilitação de fala, deglutição e audição, essencial para pacientes pós-AVC ou com disfagia.",
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/></svg>
      ),
      title: "Suprimentos Farmacêuticos",
      description: "Logística completa de medicamentos e materiais de consumo, garantindo o tratamento sem interrupções.",
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3"/><path d="M18 10h3l1 5h-4z"/><path d="M18 10V6a2 2 0 0 0-2-2h-1"/><path d="M21 15v2a2 2 0 0 1-2 2h-1"/></svg>
      ),
      title: "Locação de Equipamentos",
      description: "Fornecimento e instalação de camas hospitalares, concentradores de oxigênio, cadeiras de rodas e mais.",
      color: "bg-gray-500/10 text-gray-600"
    },
  ];

  // Componente Card (Simulando shadcn/ui Card)
  const ServiceCard = ({ icon, title, description, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start h-full">
      <div className={`p-3 rounded-full ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-base flex-grow">{description}</p>
    </div>
  );

  // Componente Botão Primário (Simulando shadcn/ui Button)
  const PrimaryButton = ({ children, onClick = () => {}, className = '' }) => (
    <button
      onClick={onClick}
      className={`bg-indigo-600 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-500/50 ${className}`}
    >
      {children}
    </button>
  );

  // Componente Input (Simulando shadcn/ui Input)
  const Input = ({ type = 'text', placeholder, id }) => (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
    />
  );

  // Função para simular o envio do formulário (sem backend real)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sua solicitação foi enviada! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      
      {/* Script para carregar o Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>
      
      {/* Configuração do Tailwind (opcional, mas bom para fontes) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* 1. Cabeçalho/Navegação */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">
            <img src="/HEALTHMAIS - LOGO.png" alt="" srcset="" width={128} />
          </a>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Serviços</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Sobre Nós</a>
            {/* <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Contato</a> */}
            {/* <a href="#contact" className="text-white bg-indigo-600 py-1.5 px-4 rounded-full text-sm hover:bg-indigo-700 transition-colors">
              Solicitar Orçamento
            </a> */}
          </nav>
          
          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
            <nav className="flex flex-col space-y-2 p-4">
              <a href="#services" className="text-gray-600 hover:text-indigo-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Contato</a>
              {/* <a href="#contact" className="text-white bg-indigo-600 py-2 text-center rounded-lg font-medium mt-2" onClick={() => setIsMenuOpen(false)}>
                Solicitar Orçamento
              </a> */}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* 2. Seção Hero */}
        <section className="bg-white pt-16 pb-24 sm:pt-20 sm:pb-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              <p className="text-lg font-semibold text-teal-600 mb-2">Cuidado Profissional Onde Você Mais Precisa</p>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Saúde de Alto Nível no <span className="text-indigo-600">Conforto do Seu Lar</span>.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Oferecemos uma assistência homecare completa e multidisciplinar, pensada para a recuperação e qualidade de vida.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <PrimaryButton className="w-full sm:w-auto">
                  Agendar Avaliação Gratuita
                </PrimaryButton>
                <a 
                  href="#services" 
                  className="w-full sm:w-auto text-indigo-600 bg-indigo-50 border border-indigo-200 font-medium py-3 px-6 rounded-xl shadow-sm hover:bg-indigo-100 transition-colors duration-300 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 17H2a10 10 0 0 1 10-10Z"/><path d="M10 10V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7"/></svg>
                  Ver Nossos Serviços
                </a>
              </div>
            </div>
            
            {/* Imagem de Destaque (Placeholder visual para o homecare) */}
            <div className="lg:w-1/2 lg:flex justify-end hidden">
              <img
                src="https://placehold.co/550x450/6366f1/ffffff?text=Cuidado+Domiciliar+Humanizado"
                alt="Profissional de saúde cuidando de um paciente em casa"
                className="rounded-3xl shadow-2xl object-cover h-full max-h-[450px] w-full max-w-[550px]"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/550x450/6366f1/ffffff?text=Homecare+Premium"; }}
              />
            </div>
          </div>
        </section>

        {/* 3. Seção de Serviços Multidisciplinares */}
        <section id="services" className="py-20 sm:py-28 bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-teal-500 rounded-full mb-3">Nossa Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Assistência Multidisciplinar Completa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Todos os cuidados essenciais reunidos para uma recuperação eficaz e um bem-estar contínuo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Seção Sobre Nós / Diferenciais */}
        <section id="about" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="lg:pr-10">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-indigo-500 rounded-full mb-3">Diferenciais</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                  Por Que Escolher a Nossa Assistência?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Somos referência em homecare particular, oferecendo protocolos rigorosos e uma equipe fixa de profissionais dedicados. Nossa missão é promover a saúde com o máximo de conforto e segurança.
                </p>

                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    <span className="text-lg text-gray-700 font-medium">Equipe Multiprofissional Qualificada e Integrada.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    <span className="text-lg text-gray-700 font-medium">Logística Eficiente de Suprimentos e Equipamentos.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    <span className="text-lg text-gray-700 font-medium">Planos de Cuidado 100% Personalizados.</span>
                  </li>
                </ul>
                
                {/* <div className="mt-8">
                   <PrimaryButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    Fale Conosco Agora
                  </PrimaryButton>
                </div> */}
              </div>
              
              {/* Imagem de Destaque 2 */}
              <div className="hidden lg:block">
                <img
                  src="https://placehold.co/550x400/374151/ffffff?text=Apoio+e+Profissionalismo"
                  alt="Membros da equipe de homecare em reunião"
                  className="rounded-3xl shadow-2xl object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/550x400/374151/ffffff?text=Equipe+Homecare"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Seção de Contato/Orçamento (Simulando shadcn/ui Form) */}
        {/* <section id="contact" className="py-20 sm:py-28 bg-indigo-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Solicite um Orçamento Personalizado
              </h2>
              <p className="text-xl text-indigo-700 max-w-2xl mx-auto">
                Descreva suas necessidades e um de nossos consultores entrará em contato em até 2 horas.
              </p>
            </div>
            
            <div className="max-w-lg mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Seu Nome Completo</label>
                  <Input id="name" placeholder="Ex: Maria Silva" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="contato@email.com" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone (Whatsapp)</label>
                  <Input id="phone" type="tel" placeholder="(XX) 9XXXX-XXXX" />
                </div>
                
                <div>
                  <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-1">Descreva as Necessidades do Paciente</label>
                  <textarea 
                    id="needs" 
                    rows="4" 
                    placeholder="Ex: Necessidade de enfermagem 24h e sessões de fisioterapia 3x por semana."
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  ></textarea>
                </div>
                
                <PrimaryButton className="w-full">
                  Enviar Solicitação
                </PrimaryButton>
              </form>
            </div>
          </div>
        </section> */}
      </main>

      {/* 6. Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/HEALTHMAIS - LOGO.png" alt="" srcset="" width={128} style={{filter:"brightness(0) invert(1)", marginBottom:'10px'}}/>
              <p className="text-gray-400 text-sm">Cuidado com excelência, segurança e dedicação, no conforto do seu lar.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">Assistência Médica</a></li>
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">Enfermagem e Curativos</a></li>
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">Fisioterapia e Fono</a></li>
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">Logística de Suprimentos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Institucional</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-indigo-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              {/* <p className="text-gray-400 text-sm">Rua Exemplo, 123 - Cidade/UF</p> */}
              <p className="text-gray-400 text-sm mt-1">E-mail: contato@healthmaiscuidados.com</p>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Healthmais Cuidados LTDA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
