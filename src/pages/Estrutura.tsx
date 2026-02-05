import { Activity, Dumbbell, Mic, Brain, Utensils, Stethoscope, Pill, Users, HeartPulse, CheckCircle2 } from 'lucide-react';

const Estrutura = () => {
  const especialidades = [
    {
      nome: 'Enfermagem',
      icon: <Activity size={56} strokeWidth={2} />,
      descricao: 'Equipe especializada em alta complexidade, capacitada para administração de medicamentos endovenosos, curativos avançados, gestão de dispositivos (sondas, cateteres, ostomias) e monitoramento contínuo de sinais vitais.',
      atuacao: [
        'Administração de medicamentos EV, IM e SC',
        'Curativos de alta complexidade',
        'Gestão de dispositivos invasivos',
        'Monitoramento de parâmetros clínicos'
      ]
    },
    {
      nome: 'Fisioterapia',
      icon: <Dumbbell size={56} strokeWidth={2} />,
      descricao: 'Reabilitação motora e respiratória com protocolos específicos para pacientes acamados, neurológicos e pós-cirúrgicos. Foco em funcionalidade, prevenção de complicações e qualidade de vida.',
      atuacao: [
        'Fisioterapia respiratória e motora',
        'Prevenção de úlceras por pressão',
        'Treino de marcha e equilíbrio',
        'Reabilitação neurológica'
      ]
    },
    {
      nome: 'Fonoaudiologia',
      icon: <Mic size={56} strokeWidth={2} />,
      descricao: 'Avaliação e terapia de deglutição, comunicação e voz. Essencial para pacientes com disfagia, traqueostomia e alterações neurológicas que impactam a alimentação segura.',
      atuacao: [
        'Avaliação e reabilitação de disfagia',
        'Terapia de linguagem e fala',
        'Manejo de traqueostomia',
        'Estimulação cognitiva'
      ]
    },
    {
      nome: 'Psicologia',
      icon: <Brain size={56} strokeWidth={2} />,
      descricao: 'Suporte psicológico para pacientes e familiares em momentos de adoecimento, luto e adaptação. Trabalho focado em acolhimento emocional e fortalecimento de vínculos.',
      atuacao: [
        'Suporte emocional ao paciente e família',
        'Manejo de ansiedade e depressão',
        'Orientação para cuidados paliativos',
        'Psicoeducação e prevenção de burnout do cuidador'
      ]
    },
    {
      nome: 'Nutrição',
      icon: <Utensils size={56} strokeWidth={2} />,
      descricao: 'Plano nutricional individualizado para suporte enteral, parenteral ou via oral. Gestão de desnutrição, diabetes, disfagia e outras condições que exigem dieta especializada.',
      atuacao: [
        'Avaliação e planejamento nutricional',
        'Gestão de terapia nutricional enteral',
        'Orientação de dietas especiais',
        'Monitoramento de evolução ponderal'
      ]
    },
    {
      nome: 'Medicina',
      icon: <Stethoscope size={56} strokeWidth={2} />,
      descricao: 'Avaliação clínica domiciliar, acompanhamento médico contínuo, prescrição e ajuste de medicações, e coordenação do plano terapêutico multidisciplinar.',
      atuacao: [
        'Consultas médicas domiciliares',
        'Ajuste de medicações e prescrições',
        'Acompanhamento de pacientes crônicos',
        'Coordenação do cuidado multidisciplinar'
      ]
    },
    {
      nome: 'Farmácia',
      icon: <Pill size={56} strokeWidth={2} />,
      descricao: 'Farmacovigilância, orientação sobre uso correto de medicamentos, interações medicamentosas e gerenciamento de polifarmácia.',
      atuacao: [
        'Revisão de prescrições e interações medicamentosas',
        'Orientação sobre administração de medicamentos',
        'Farmacovigilância e notificação de eventos adversos',
        'Gestão de estoque domiciliar'
      ]
    },
    {
      nome: 'Terapia Ocupacional',
      icon: <Users size={56} strokeWidth={2} />,
      descricao: 'Promoção da independência funcional, adaptação do ambiente domiciliar e reabilitação para atividades de vida diária.',
      atuacao: [
        'Treino de atividades de vida diária',
        'Adaptação do ambiente domiciliar',
        'Estimulação cognitiva e sensorial',
        'Orientação de tecnologias assistivas'
      ]
    },
    {
      nome: 'Técnicos de Enfermagem',
      icon: <HeartPulse size={56} strokeWidth={2} />,
      descricao: 'Suporte direto ao paciente em atividades de vida diária, higiene, conforto e auxílio em procedimentos sob supervisão de enfermeiros.',
      atuacao: [
        'Cuidados de higiene e conforto',
        'Auxílio em alimentação e mobilização',
        'Verificação de sinais vitais',
        'Apoio em procedimentos de enfermagem'
      ]
    }
  ];

  return (
    <div className="pt-[70px]">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16 sm:py-24 pb-12 sm:pb-16 text-center">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-white">Nossa Equipe Multidisciplinar</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-[700px] mx-auto">
            Profissionais especializados trabalhando de forma integrada para oferecer
            cuidados de excelência
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">Integração Técnica e Humana</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-text mb-4 sm:mb-6">Cuidado coordenado por especialistas</h2>
            <p className="text-base sm:text-lg leading-relaxed text-text-light mb-4 sm:mb-6">
              A Health+ reúne profissionais de diversas áreas da saúde para garantir uma
              abordagem holística e integrada. Cada especialidade contribui com seu
              conhecimento técnico, mas todos compartilham o mesmo propósito: cuidar com
              qualidade e humanização.
            </p>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-24 bg-gray-100">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">Especialidades</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-text mb-4">Conheça nossos profissionais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {especialidades.map((esp, index) => (
              <div key={index} className="p-6 sm:p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-primary flex items-center justify-center bg-accent rounded-full transition-transform duration-300 hover:scale-110">{esp.icon}</div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">{esp.nome}</h3>
                <p className="text-sm sm:text-base text-text-light leading-relaxed mb-4 sm:mb-6">{esp.descricao}</p>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-text mb-2 sm:mb-3">Áreas de atuação:</h4>
                  <ul className="list-none p-0 space-y-1.5 sm:space-y-2">
                    {esp.atuacao.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-text-light">
                        <CheckCircle2 className="shrink-0 text-success mt-0.5" size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">Diferenciais</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-text mb-4">Por que nossa equipe se destaca</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="inline-block text-4xl sm:text-5xl font-bold text-primary opacity-20 mb-3 sm:mb-4">01</div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-text">Capacitação Contínua</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Treinamentos regulares em protocolos de alta complexidade, segurança do
                paciente e atualização científica.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="inline-block text-4xl sm:text-5xl font-bold text-primary opacity-20 mb-3 sm:mb-4">02</div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-text">Trabalho Integrado</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Reuniões multidisciplinares semanais para discussão de casos e alinhamento
                de condutas terapêuticas.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="inline-block text-4xl sm:text-5xl font-bold text-primary opacity-20 mb-3 sm:mb-4">03</div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-text">Comunicação Transparente</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Relatórios periódicos para famílias e instituições, com linguagem
                acessível e dados objetivos.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="inline-block text-4xl sm:text-5xl font-bold text-primary opacity-20 mb-3 sm:mb-4">04</div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-text">Retaguarda 24h</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Equipe de plantão disponível para suporte clínico, ajustes terapêuticos e
                orientação em intercorrências.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">Quer conhecer mais sobre nossa equipe?</h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-12">
              Entre em contato e descubra como nossos profissionais podem fazer a diferença
              no cuidado do seu paciente ou familiar.
            </p>
            <a href="/contato" className="inline-block px-6 sm:px-7 py-3 sm:py-3.5 font-medium text-center no-underline border-2 rounded-lg cursor-pointer transition-all duration-300 bg-white text-primary border-white hover:bg-gray-100 hover:border-gray-100 hover:shadow-lg">
              Fale conosco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estrutura;
