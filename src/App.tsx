import React, { useState } from 'react';

// Componente principal do aplicativo
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Componente Item do Time (para a nova seção de serviços)
  const TeamMemberItem = ({ icon, children }) => (
    <li className="flex items-center bg-gray-100 p-4 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex-shrink-0 p-2 bg-indigo-100 text-indigo-600 rounded-full mr-4">
        {icon}
      </div>
      <span className="text-gray-700 font-medium">{children}</span>
    </li>
  );

  // Componente Item de Serviço (para a nova seção de serviços)
  const ServiceItem = ({ number, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h4 className="text-xl font-semibold text-gray-900 mb-2">
        <span className="text-teal-500">{number}.</span> {title}
      </h4>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );


  // Componente Botão Primário (Simulando shadcn/ui Button)
  const PrimaryButton = ({ children, onClick = () => { }, className = '' }) => (
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

  // Componente de Item de Lista (para a seção Estrutura)
  const CheckListItem = ({ children }) => (
    <li className="flex items-start text-left">
      <svg className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
      <span className="text-gray-700">{children}</span>
    </li>
  );

  // Componente Item de Eficiência (para a nova seção)
  const EfficiencyItem = ({ children }) => (
    <li className="flex items-center bg-white p-4 rounded-full border border-gray-300 shadow-sm transition-all duration-300 hover:border-indigo-500 hover:shadow-md">
      <span className="text-gray-700 font-medium ml-2">{children}</span>
    </li>
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
      <header className=" sticky top-0 z-20 bg-[#1a1a1a] text-white backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="space-between font-thin max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#inicio">Ínicio</a>
            <a href="#sobre">Sobre </a>
            <a href="#estrutura">Estrutura</a>
          </nav>

          <a href="#" className="text-2xl font-bold invert brightness-0 items-center">
            <img src="/HEALTHMAIS - LOGO.png" alt="" srcset="" width={128} />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
            <a href="#contato" className="rounded-full bg-white py-1 px-3 text-black font-medium">Fale com a Mariana</a>
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
              <a href="#servicos" className="text-gray-600 hover:text-indigo-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#sobre" className="text-gray-600 hover:text-indigo-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a>
              <a href="#contato" className="text-gray-600 hover:text-indigo-600 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Contato</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* 2. Seção Hero */}
        <section id="inicio" className="bg-white pt-16 pb-24 sm:pt-20 sm:pb-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              <p className="font-semibold mb-2">Conheça a <span className='font-bold'>health+</span></p>
              <span className='w-[48px] h-[6px] bg-[#7BE0D2] block my-6'></span>
              <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-6">
                Onde <span className="text-[#450098]">a alta complexidade </span>
                encontra o <span className="text-[#450098]">cuidado
                  humanizado.</span>
              </h1>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Um modelo integrado de atenção domiciliar que alia <span className='font-medium'>eficiência clínica</span>, <span className='font-medium'>redução de custos</span> e <span className='font-medium'>impacto positivo</span> para <span className='underline'>pacientes e instituições</span>.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 items-center bg-[#F6F6F6] w-fit rounded-full">
                <span className='text-sm ml-4'>
                  Cuidamos com <span className='font-medium'>precisão e propósito</span>.
                </span>

                <div className="bg-black rounded-full text-white px-3 py-1">
                  Saiba mais
                </div>
              </div>
            </div>

            {/* Imagem de Destaque (Placeholder visual para o homecare) */}
            <div className="lg:w-1/2 lg:flex justify-end hidden">
              <img
                src="/idosa.png"
                alt="Profissional de saúde cuidando de um paciente em casa"
                className="rounded-3xl shadow-2xl object-cover h-full max-h-[450px] w-full max-w-[550px]"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/550x450/6366f1/ffffff?text=Homecare+Premium"; }}
              />
            </div>
          </div>
        </section>

        {/* 3. Seção de Serviços (MODIFICADA) */}
        <section id="servicos" className="py-20 sm:py-28 bg-white border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Coluna da Esquerda: Time */}
              <div className="flex flex-col">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                  Um time completo, integrado e preparado.
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nossa rede é composta por profissionais especializados, capacitados para oferecer atendimento oncológico domiciliar de alta complexidade, com segurança e acolhimento.
                </p>
                
                <ul className="space-y-4">
                  <TeamMemberItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7Z"/><path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><circle cx="12" cy="12" r="2"/><path d="M12 14v4"/><path d="M12 4V2"/></svg>}>
                    Enfermeiros com expertise em oncologia.
                  </TeamMemberItem>
                  <TeamMemberItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.7-1.5L13.5 14l.7-1.5H20.8"/></svg>}>
                    Fisioterapeutas e fonoaudiólogos especializados em reabilitação.
                  </TeamMemberItem>
                  <TeamMemberItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2"/><path d="M15 14v.5A2.5 2.5 0 0 0 17.5 17h0A2.5 2.5 0 0 0 20 14.5V14"/><path d="M9 14v.5A2.5 2.5 0 0 1 6.5 17h0A2.5 2.5 0 0 1 4 14.5V14"/><path d="M17.5 11.5a2.5 2.5 0 0 0 0-5h-11a2.5 2.5 0 0 0 0 5"/><path d="M15 14l-3-3-3 3"/><path d="M12 22a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 12 17a2.5 2.5 0 0 0-2.5 2.5v0A2.5 2.5 0 0 0 12 22Z"/></svg>}>
                    Psicólogos e nutricionistas para suporte fisico e emocional.
                  </TeamMemberItem>
                  <TeamMemberItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3.1a2 2 0 0 0-2.8 0l-1.4 1.4a2 2 0 0 1-2.8 0L6.6 3.1a2 2 0 0 0-2.8 0L2.4 4.5a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 1 0 2.8L2.4 13a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0l1.4-1.4a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 0 2.8 0l1.4-1.4a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 1 0-2.8l1.4-1.4a2 2 0 0 0 0-2.8Z"/><path d="m15.5 7.5 1 1"/><path d="m8.5 7.5-1 1"/><path d="M12 12v6"/></svg>}>
                    Odontologistas habilitados em laserterapia e cuidados preventivos.
                  </TeamMemberItem>
                  <TeamMemberItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M8 14h8"/><path d="M12 10v8"/></svg>}>
                    Farmacêuticos responsáveis por orientação e adesão medicamentosa.
                  </TeamMemberItem>
                  <TeamMemberItem icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}>
                    Assistentes sociais e técnicos de enfermagem com capacitação continua.
                  </TeamMemberItem>
                </ul>
                
                <p className="text-lg font-semibold text-indigo-700 mt-8 pt-6 border-t border-gray-200">
                  Integração técnica e humana: o pilar do nosso modelo de cuidado.
                </p>
              </div>

              {/* Coluna da Direita: Serviços */}
              <div className="flex flex-col bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 relative pb-3">
                  Nossos serviços incluem:
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-teal-500 rounded-full"></span>
                </h3>
                
                <div className="space-y-6">
                  <ServiceItem 
                    number="1"
                    title="Visitas de Avaliação"
                    description="Avaliação inicial por profissionais de diferentes áreas para compreender o quadro clinico e planejar o cuidado personalizado."
                  />
                  <ServiceItem 
                    number="2"
                    title="Sessões Terapêuticas"
                    description="Atendimentos de fisioterapia, fonoaudiologia, psicologia e odontologia (laser), conduzidos de forma individualizada, conforme indicação técnica."
                  />
                  <ServiceItem 
                    number="3"
                    title="Procedimentos de Enfermagem"
                    description="Administração de medicamentos, hidratação, curativos simples e complexos, sondagens, cateterismos, colostomia, e manutenção de acessos venosos."
                  />
                </div>
                
                <p className="text-gray-700 font-medium mt-8 pt-6 border-t border-gray-300">
                  Cada etapa do atendimento é registrada e acompanhada com protocolos de qualidade e relatórios técnicos diários.
                </p>
              </div>
              
            </div>
          </div>
        </section>

        {/* 4. Seção Sobre Nós */}
        <section id="sobre" className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Imagem (Esquerda) */}
              <div className="hidden lg:block">
                <img
                  src="/criança.png"
                  alt="Equipe Health+ oferecendo cuidado oncológico domiciliar"
                  className="rounded-3xl shadow-2xl object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/550x400/374151/ffffff?text=Health+Oncologia"; }}
                />
              </div>

              {/* Texto (Direita) */}
              <div className="lg:pl-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                  A Health+
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  A Health+ apresenta sua proposta de assistência domiciliar em oncologia, estruturada para oferecer cuidado de alta complexidade com segurança, qualidade técnica e humanização.
                </p>
                <p className="text-lg text-gray-600">
                  Nosso objetivo é garantir a continuidade do tratamento hospitalar no ambiente domiciliar, proporcionando conforto ao paciente, eficiência assistencial e otimização de recursos para as instituições parceiras.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Seção Estrutura */}
        <section id="estrutura" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introdução da Seção */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Menos leitos ocupados.
                <br />
                <span className="text-indigo-600">Mais pacientes bem cuidados.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                Um programa domiciliar estruturado para otimizar recursos hospitalares e garantir continuidade assistencial com excelência técnica e humanização.
              </p>
            </div>

            {/* Grid de 3 Colunas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* Coluna 1: Nosso Propósito */}
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src="/pessoa1.png" 
                  alt="Nosso Propósito" 
                  className="rounded-xl shadow-md mb-6 w-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/6366f1/ffffff"; }}
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nosso Propósito</h3>
                <p className="text-gray-600 mb-4">
                  Estabelecer um modelo claro e estruturado para a assistência domiciliar em oncologia, garantindo precisão, segurança e humanização em cada etapa do cuidado.
                </p>
                <p className="font-semibold text-gray-800 mt-4 mb-3">O que entregamos?</p>
                <ul className="space-y-3">
                  <CheckListItem>Definição transparente de serviços e responsabilidades.</CheckListItem>
                  <CheckListItem>Transição hospitalar segura: alta planejada e acompanhamento contínuo.</CheckListItem>
                  <CheckListItem>Continuidade assistencial com foco em desfecho clínico positivo.</CheckListItem>
                  <CheckListItem>Monitoramento constante: avaliação clínica e emocional permanente.</CheckListItem>
                  <CheckListItem>Redução de custos hospitalares e melhora de performance operacional.</CheckListItem>
                  <CheckListItem>Eficiência comprovada: redução de internações e otimização de recursos.</CheckListItem>
                  <CheckListItem>Protocolos técnicos validados e equipe especializada.</CheckListItem>
                  <CheckListItem>Experiência humanizada para o paciente e sua família.</CheckListItem>
                  <CheckListItem>Alinhamento entre instituição, profissionais e pacientes.</CheckListItem>
                </ul>
              </div>

              {/* Coluna 2: Modelo de Atendimento */}
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src="/pessoa2.png" 
                  alt="Modelo de Atendimento" 
                  className="rounded-xl shadow-md mb-6 w-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/10b981/ffffff"; }}
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Modelo de Atendimento</h3>
                <p className="text-gray-600 mb-3">Como funciona o nosso cuidado domiciliar?</p>
                <p className="text-gray-600 mb-4">
                  Um modelo multiprofissional e integrado, desenvolvido para atender com excelência técnica e sensibilidade humana.
                </p>
                <p className="font-semibold text-gray-800 mt-4 mb-3">Nossos diferenciais operacionais:</p>
                <ul className="space-y-3">
                  <CheckListItem>Transição hospitalar segura: alta planejada e acompanhamento contínuo.</CheckListItem>
                  <CheckListItem>Continuidade assistencial com foco em desfecho clínico positivo.</CheckListItem>
                  <CheckListItem>Monitoramento constante: avaliação clínica e emocional permanente.</CheckListItem>
                  <CheckListItem>Redução de custos hospitalares e melhora de performance operacional.</CheckListItem>
                  <CheckListItem>Eficiência comprovada: redução de internações e otimização de recursos.</CheckListItem>
                </ul>
              </div>

              {/* Coluna 3: Resultado Esperado */}
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src="/pessoa3.png" 
                  alt="Resultado Esperado" 
                  className="rounded-xl shadow-md mb-6 w-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/374151/ffffff"; }}
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Resultado Esperado</h3>
                <p className="text-gray-600 mb-4">
                  Impacto direto para instituições e pacientes
                </p>
                <ul className="space-y-3">
                  <CheckListItem>Continuidade assistencial com foco em desfecho clínico positivo.</CheckListItem>
                  <CheckListItem>Monitoramento constante: avaliação clínica e emocional permanente.</CheckListItem>
                  <CheckListItem>Redução de custos hospitalares e melhora de performance operacional.</CheckListItem>
                  <CheckListItem>Eficiência comprovada: redução de internações e otimização de recursos.</CheckListItem>
                  <CheckListItem>Protocolos técnicos validados e equipe especializada.</CheckListItem>
                  <CheckListItem>Experiência humanizada para o paciente e sua família.</CheckListItem>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Seção Eficiência e Segurança (NOVA) */}
        <section id="eficiencia-seguranca" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
              
              {/* Coluna da Esquerda (Eficiência) */}
              <div className="flex flex-col p-8 sm:p-10">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-6">
                  {/* Ícone: Caminhão/Ambulância */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 18h4"/><path d="M12 14v4"/><path d="M18 18h2a1 1 0 0 0 1-1v-3.34a4 4 0 0 0-1.17-2.83l-1.17-1.17a4 4 0 0 0-5.66 0L8.34 10.83A4 4 0 0 0 7.17 13.66V17a1 1 0 0 0 1 1h2"/><path d="M8 18v-4.69c0-.42.17-.83.46-1.12L9.6 11.07c.8-.8 2.07-.8 2.8 0L13.54 12.2c.29.29.46.7.46 1.12V18"/><path d="M4.14 15.54 3 16.68V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.68l-1.14-1.14"/><path d="M22 17h-1"/><path d="M3 17H2"/></svg> */}
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                  Como garantimos eficiência no atendimento?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Gestão inteligente e integrada: cuidado contínuo, resultados mensuráveis.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <EfficiencyItem>Atendimento 24h, com equipe de retaguarda e suporte técnico.</EfficiencyItem>
                  <EfficiencyItem>Relatórios diários e acompanhamento em tempo real.</EfficiencyItem>
                  <EfficiencyItem>Sistema digital de registro e comunicação clínica.</EfficiencyItem>
                  <EfficiencyItem>Telemonitoramento e call center ativo.</EfficiencyItem>
                  <EfficiencyItem>Logística ágil com profissionais de plantão e stand by.</EfficiencyItem>
                </ul>
                
                <div className="border-l-4 border-teal-500 pl-4 mt-auto">
                  <p className="text-lg font-semibold text-gray-800">
                    Atendimento sempre disponível, garantindo resposta rápida e suporte contínuo em qualquer cenário.
                  </p>
                </div>
              </div>

              {/* Coluna da Direita (Segurança) - Fundo Escuro */}
              <div className="flex flex-col bg-gray-900 text-white p-8 sm:p-12 rounded-3xl shadow-2xl">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-6">
                  {/* Ícone: Balança */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0Z"/><path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"/><path d="m4 12.8 6-6.86a2 2 0 0 1 2.8 0l6 6.86"/><path d="M12 2v4.07"/><path d="m10 16.5-6-6.86"/><path d="m14 16.5 6-6.86"/></svg> */}
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                  Segurança em cada etapa do cuidado!
                </h2>
                
                <p className="text-lg text-gray-300 mb-8">
                  Nossa equipe, com expertise consolidada em liminares judiciais, atua de maneira proativa e cirúrgica, assegurando blindagem jurídica integral e mitigação de riscos em todos os serviços, seja em Home Care ou em ambiente hospitalar.
                </p>
                
                <div className="border-l-4 border-teal-500 pl-4 mt-auto">
                  <p className="text-lg font-semibold text-gray-200">
                    Garantimos não apenas o cumprimento rigoroso da legislação, mas também proteção antecipada, resguardando os interesses de nossos clientes com máxima segurança e precisão jurídica.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* 7. Seção Contato */}
        <section id="contato" className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Coluna da Esquerda (Propósito) */}
              <div className="flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-6">
                  {/* Checkmark Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="m-4">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Cuidar com eficiência é importante.
                  <br />
                  Cuidar com propósito é essencial.
                </h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  Na Health+, acreditamos que excelência técnica e sensibilidade humana são inseparáveis.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Cada atendimento é um elo entre conhecimento, empatia e resultado.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Nosso compromisso é entregar atenção domiciliar integral, segura e humanizada, gerando valor real para pacientes, profissionais e instituições parceiras.
                </p>
                
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-xl font-semibold text-gray-800">
                    Health+, transformando o cuidado em um modelo sustentável e humano.
                  </p>
                </div>
              </div>

              {/* Coluna da Direita (Card de Contato) */}
              <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 relative pb-3">
                  Prontos para cuidar com você.
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-teal-500 rounded-full"></span>
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Nossa equipe está à disposição para esclarecer dúvidas, ajustar propostas e construir juntos soluções em cuidado domiciliar que transformam resultados em bem-estar.
                </p>

                <a 
                  href="https://wa.me/5500000000000" // Substitua pelo seu número de WhatsApp
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full max-w-xs bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full p-2 pr-4 transition-all duration-300 shadow-md group"
                >
                  <span className="font-medium text-gray-800 pl-3">Fale com nossa equipe agora.</span>
                  {/* WhatsApp Icon */}
                  <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full transform group-hover:scale-110 transition-transform">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.088 1.39s-1.088.37-3.614-.889c-2.525-1.259-4.383-3.116-4.383-3.116s-.37-1.088 1.39-1.088c.74 0 1.111-.37 1.111-.37s-1.111-1.481-1.851-2.592c-.74-1.111-.37-1.851-.37-1.851s-1.111-.37-2.222.37c-1.111.74-2.592 2.222-2.592 5.183s2.963 6.049 6.811 8.328c3.848 2.279 8.144.37 8.144.37s.37-1.111.37-2.222c0-1.111-1.088-1.088-1.088-1.088s-1.088-.37-1.851-.37m-5.448-9.529c.185.185.278.463.278.74s-.093.556-.278.74c-.185.185-.463.278-.74.278s-.556-.093-.74-.278c-.185-.185-.278-.463-.278-.74s.093-.556.278-.74c.185-.185.463.278.74-.278s.556.093.74.278m-2.963 0c.185.185.278.463.278.74s-.093.556-.278.74c-.185.185-.463.278-.74.278s-.556-.093-.74-.278c-.185-.185-.278-.463-.278-.74s.093-.556.278-.74c.185-.185.463.278.74-.278s.556.093.74.278m-2.963 0c.185.185.278.463.278.74s-.093.556-.278.74c-.185.185-.463.278-.74.278s-.556-.093-.74-.278c-.185-.185-.278-.463-.278-.74s.093-.556.278-.74c.185-.185.463.278.74-.278s.556.093.74.278m-2.963 0c.185.185.278.463.278.74s-.093.556-.278.74c-.185.185-.463.278-.74.278s-.556-.093-.74-.278c-.185-.185-.278-.463-.278-.74s.093-.556.278-.74c.185-.185.463.278.74-.278s.556.093.74.278m8.889 0c.185.185.278.463.278.74s-.093.556-.278.74c-.185.185-.463.278-.74.278s-.556-.093-.74-.278c-.185-.185-.278-.463-.278-.74s.093-.556.278-.74c.185-.185.463.278.74-.278s.556.093.74.278"/></svg> */}
                  </div>
                </a>
                <p className="text-center text-sm text-gray-500 mt-3">Clique para ser redirecionado</p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 8. Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/HEALTHMAIS - LOGO.png" alt="" srcset="" width={128} style={{ filter: "brightness(0) invert(1)", marginBottom: '10px' }} />
              <p className="text-gray-400 text-sm">Cuidado com excelência, segurança e dedicação, no conforto do seu lar.</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#servicos" className="hover:text-indigo-400 transition-colors">Assistência Médica</a></li>
                <li><a href="#servicos" className="hover:text-indigo-400 transition-colors">Enfermagem e Curativos</a></li>
                <li><a href="#servicos" className="hover:text-indigo-400 transition-colors">Fisioterapia e Fono</a></li>
                <li><a href="#servicos" className="hover:text-indigo-400 transition-colors">Logística de Suprimentos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Institucional</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#sobre" className="hover:text-indigo-400 transition-colors">Sobre Nós</a></li>
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