import { useState } from 'react';
import { ClipboardCheck, Activity, Users, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Servicos = () => {
  const [activeCategory, setActiveCategory] = useState('avaliacao');

  const servicosData = {
    avaliacao: {
      title: 'Visitas de Avaliação',
      subtitle: 'Primeiro passo para um plano terapêutico eficaz',
      description:
        'A visita de avaliação é fundamental para estabelecer a viabilidade do atendimento domiciliar e construir um plano de cuidados personalizado. Nossa equipe realiza uma análise técnica detalhada do quadro clínico, condições ambientais e rede de apoio.',
      items: [
        {
          name: 'Avaliação Clínica Inicial',
          details:
            'Análise do histórico médico, medicações em uso, dispositivos instalados e necessidades de cuidados especializados.'
        },
        {
          name: 'Avaliação Ambiental',
          details:
            'Verificação das condições do domicílio, acessibilidade, ventilação, iluminação e adequações necessárias.'
        },
        {
          name: 'Avaliação da Rede de Apoio',
          details:
            'Identificação de cuidadores, familiares presentes e capacidade de suporte para execução do plano terapêutico.'
        },
        {
          name: 'Elaboração do Plano Terapêutico',
          details:
            'Definição de frequência de visitas, especialidades necessárias, materiais e equipamentos, e metas de cuidado.'
        },
        {
          name: 'Orientação à Família',
          details:
            'Explicação clara sobre o processo de cuidado, expectativas, papel dos cuidadores e canais de comunicação.'
        }
      ]
    },
    terapeuticas: {
      title: 'Reabilitação e Fornecimento Integrado',
      subtitle: 'Sessões terapêuticas multidisciplinares, fornecimento farmacêutico e de equipamentos',
      description:
        'Reunimos sessões de reabilitação com profissionais especializados, gestão farmacêutica completa e fornecimento de equipamentos, garantindo recuperação funcional, manutenção da qualidade de vida e continuidade do cuidado no domicílio.',
      items: [
        {
          name: 'Sessões Terapêuticas Multidisciplinares',
          details:
            'Fisioterapia motora e respiratória, fonoaudiologia (deglutição, linguagem e disfagia), psicologia (suporte emocional ao paciente e à família), nutrição (avaliação e adequação de dietas orais e enterais) e terapia ocupacional (independência funcional, adaptações ambientais e tecnologias assistivas).'
        },
        {
          name: 'Fornecimento Farmacêutico',
          details:
            'Gestão completa da terapia medicamentosa no domicílio. Inclui dispensação de medicamentos, revisão de prescrições, orientação sobre administração, farmacovigilância e controle de estoque domiciliar.'
        },
        {
          name: 'Fornecimento de Equipamentos',
          details:
            'Disponibilização de equipamentos médico-hospitalares necessários para o cuidado domiciliar, incluindo camas hospitalares, concentradores de oxigênio, aspiradores, ventiladores mecânicos, bombas de infusão e demais dispositivos essenciais ao tratamento.'
        }
      ]
    },
    enfermagem: {
      title: 'Procedimentos de Enfermagem Especializada',
      subtitle: 'Intervenções técnicas de alta complexidade no domicílio',
      description:
        'Nossa equipe de enfermagem é capacitada para realizar procedimentos complexos com segurança, seguindo rigorosos protocolos de qualidade e controle de infecção.',
      items: [
        {
          name: 'Administração de Medicamentos',
          details:
            'Endovenoso (EV), intramuscular (IM), subcutâneo (SC), incluindo quimioterápicos, antibióticos e analgésicos.'
        },
        {
          name: 'Curativos de Alta Complexidade',
          details:
            'Lesões por pressão, feridas cirúrgicas, queimaduras, úlceras vasculares, com técnicas avançadas de cicatrização.'
        },
        {
          name: 'Gestão de Dispositivos',
          details:
            'Cateter venoso central, sonda nasoentérica/gastrostomia, sonda vesical, traqueostomia, ostomias.'
        },
        {
          name: 'Monitoramento de Sinais Vitais',
          details:
            'Verificação de pressão arterial, frequência cardíaca, temperatura, saturação de oxigênio e glicemia capilar.'
        },
        {
          name: 'Cuidados com Feridas',
          details:
            'Avaliação, limpeza, desbridamento quando indicado, aplicação de coberturas especiais e terapias adjuvantes.'
        },
        {
          name: 'Oxigenoterapia e Ventilação',
          details:
            'Instalação e manejo de oxigenoterapia, ventilação não invasiva, aspiração de vias aéreas.'
        }
      ]
    }
  };

  const currentService = servicosData[activeCategory as keyof typeof servicosData];

  return (
    <div className="pt-[70px]">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16 sm:py-24 pb-12 sm:pb-16 text-center">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-white">Nossos Serviços</h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-[700px] mx-auto">
            Atenção domiciliar de alta complexidade com foco em resultados clínicos
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">Nosso Modelo de Atenção</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-text mb-4 sm:mb-6">Três pilares de cuidado integrado</h2>
            <p className="text-base sm:text-lg leading-relaxed text-text-light">
              A Health+ estrutura seus serviços em três categorias principais, cada uma
              com objetivos específicos e complementares. Juntas, formam um modelo de
              atenção que garante segurança, eficiência e humanização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-20 h-20 mb-4 text-primary flex items-center justify-center bg-accent rounded-full">
                <ClipboardCheck size={48} strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">Avaliação</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Análise técnica e planejamento individualizado do cuidado
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-20 h-20 mb-4 text-primary flex items-center justify-center bg-accent rounded-full">
                <Activity size={48} strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">Reabilitação</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Sessões terapêuticas multidisciplinares e fornecimento de fármacos/equipamentos
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-20 h-20 mb-4 text-primary flex items-center justify-center bg-accent rounded-full">
                <Users size={48} strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">Cuidados Intensivos</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Procedimentos de enfermagem de alta complexidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Serviços */}
      <section className="py-24 bg-gray-100">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div>
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <button
                className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === 'avaliacao'
                    ? 'bg-primary text-white shadow-custom-md'
                    : 'bg-white text-text hover:bg-gray-50'
                }`}
                onClick={() => setActiveCategory('avaliacao')}
              >
                <span className="block text-sm opacity-70 mb-1">01</span>
                <span className="block">Visitas de Avaliação</span>
              </button>
              <button
                className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === 'terapeuticas'
                    ? 'bg-primary text-white shadow-custom-md'
                    : 'bg-white text-text hover:bg-gray-50'
                }`}
                onClick={() => setActiveCategory('terapeuticas')}
              >
                <span className="block text-sm opacity-70 mb-1">02</span>
                <span className="block">Reabilitação</span>
              </button>
              <button
                className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === 'enfermagem'
                    ? 'bg-primary text-white shadow-custom-md'
                    : 'bg-white text-text hover:bg-gray-50'
                }`}
                onClick={() => setActiveCategory('enfermagem')}
              >
                <span className="block text-sm opacity-70 mb-1">03</span>
                <span className="block">Procedimentos de Enfermagem</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-custom-lg p-6 sm:p-8 md:p-12">
              <div>
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-primary">{currentService.title}</h2>
                  <p className="text-lg sm:text-xl text-text mb-3 sm:mb-4">{currentService.subtitle}</p>
                  <p className="text-sm sm:text-base text-text-light leading-relaxed">{currentService.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {currentService.items.map((item, index) => (
                    <div key={index} className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-success mt-0.5">
                        <CheckCircle2 size={20} strokeWidth={2} className="sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-text">{item.name}</h3>
                        <p className="text-sm sm:text-base text-text-light leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">Nossos Diferenciais</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-text mb-4">Por que escolher a Health+</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Atendimento 24 horas</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Retaguarda clínica disponível integralmente para orientação, ajustes de
                plano terapêutico e mobilização de equipe em emergências.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Protocolos Baseados em Evidências</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Condutas alinhadas às melhores práticas nacionais e internacionais, com
                atualização constante e treinamento da equipe.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Logística Integrada</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Entrega rápida de medicações, materiais e equipamentos, garantindo
                continuidade do cuidado sem interrupções.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Redução de Reinternações</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Monitoramento contínuo e intervenções precoces reduzem significativamente
                a necessidade de retorno hospitalar.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Humanização e Segurança</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Cuidado técnico aliado ao respeito, empatia e atenção às necessidades
                individuais de cada paciente e família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é indicado */}
      <section className="py-24 bg-gray-100">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">Indicações</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-text mb-4">Para quem são nossos serviços</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-xl mb-4 text-text">Pós-operatório Complexo</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Pacientes que necessitam de curativos especializados, administração de
                antibióticos EV e monitoramento contínuo após cirurgias de grande porte.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-xl mb-4 text-text">Doenças Neurológicas</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                AVC, Parkinson, Alzheimer, esclerose múltipla e outras condições que
                exigem reabilitação motora e cognitiva.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-xl mb-4 text-text">Cuidados Paliativos</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Controle de sintomas, manejo da dor, suporte psicológico e espiritual para
                pacientes e familiares.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-xl mb-4 text-text">Terapias Contínuas Domiciliares</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Acompanhamento clínico contínuo, administração de terapias especializadas,
                suporte multidisciplinar e controle de sintomas complexos.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-xl mb-4 text-text">Dependência Ventilatória</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Pacientes com traqueostomia, ventilação mecânica ou oxigenoterapia contínua.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-xl mb-4 text-text">Feridas Complexas</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Lesões por pressão, úlceras vasculares, pé diabético e feridas cirúrgicas
                de difícil cicatrização.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95">
              <h3 className="text-xl mb-4 text-text">Fornecimento de Insumos e Medicamentos</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Disponibilização de materiais de consumo, medicações especializadas e
                equipamentos necessários para continuidade do tratamento domiciliar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">Precisa de atendimento domiciliar especializado?</h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-12">
              Entre em contato e nossa equipe irá avaliar o caso e apresentar a melhor
              proposta de cuidado.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a href="/contato" className="inline-block px-6 sm:px-7 py-3 sm:py-3.5 font-medium text-center no-underline border-2 rounded-lg cursor-pointer transition-all duration-300 bg-white text-primary border-white hover:bg-gray-100 hover:border-gray-100 hover:shadow-lg">
                Solicite uma avaliação
              </a>
              <a
                href="https://wa.me/5521979828951"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 font-medium text-center no-underline border-2 rounded-lg cursor-pointer transition-all duration-300 bg-whatsapp text-white border-whatsapp hover:bg-whatsapp-dark hover:border-whatsapp-dark hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
