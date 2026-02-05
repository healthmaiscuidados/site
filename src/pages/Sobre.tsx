import { Hospital, Home, Building2, BookOpen } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="pt-[70px]">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-24 pb-16 text-center">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl md:text-5xl mb-4 text-white">Sobre a Health+</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Nossa jornada, propósito e compromisso com a excelência em atenção domiciliar
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Quem Somos</span>
              <h2 className="text-4xl leading-tight text-text mb-4">Cuidado domiciliar com presença humana</h2>
              <p className="text-lg leading-[1.7] text-text-light mb-6">
                Somos uma empresa de Home Care dedicada à assistência domiciliar de
                pacientes que necessitam de cuidado contínuo, seguro e coordenado no
                ambiente domiciliar. Atuamos com foco em pacientes acamados, com
                limitações funcionais ou necessidades especiais de cuidado.
              </p>
            </div>
            <div>
              <div className="w-full h-full min-h-[300px] bg-accent rounded-xl flex items-center justify-center overflow-hidden shadow-custom-lg group">
                <img 
                  src="/Equipe.png" 
                  alt="Nossa equipe" 
                  className="w-full h-full object-cover transition-transform duration-700 scale-115 group-hover:scale-120"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 bg-gray-100">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Missão e Visão</span>
            <h2 className="text-4xl leading-tight text-text mb-12">Por que existimos e onde queremos chegar</h2>

            <div className="space-y-8">
              <div className="p-12 bg-white rounded-xl shadow-custom-md">
                <h3 className="text-xl mb-4 text-primary font-semibold">Nossa Missão</h3>
                <p className="text-lg leading-relaxed text-text">
                  Cuidar de pessoas em casa com segurança, responsabilidade e presença
                  humana, oferecendo assistência domiciliar organizada, acessível e
                  centrada no paciente e na família.
                </p>
              </div>

              <div className="p-12 bg-white rounded-xl shadow-custom-md">
                <h3 className="text-xl mb-4 text-primary font-semibold">Nossa Visão</h3>
                <p className="text-lg leading-relaxed text-text">
                  Ser uma empresa de Home Care reconhecida pela qualidade assistencial
                  e pela experiência humana no cuidado, crescendo de forma estruturada,
                  ética e sustentável, sem perder a proximidade com quem confia em
                  nosso trabalho.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl text-text mb-4">Nossos Valores</h3>
                <p className="text-text-light leading-[1.7]">
                  Nossos valores fundamentais:
                </p>
                <ul className="list-none p-0 space-y-4">
                  <li className="p-6 bg-white rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-2">Cuidado centrado na pessoa</h4>
                    <p className="text-text-light leading-relaxed">
                      Decisões guiadas pela condição clínica, pelo contexto familiar e
                      pelas necessidades reais de quem está sob nossos cuidados.
                    </p>
                  </li>
                  <li className="p-6 bg-white rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-2">Humanização na prática</h4>
                    <p className="text-text-light leading-relaxed">
                      Presença, escuta ativa e comunicação acessível com pacientes e famílias.
                    </p>
                  </li>
                  <li className="p-6 bg-white rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-2">Segurança e responsabilidade</h4>
                    <p className="text-text-light leading-relaxed">
                      Organização, acompanhamento técnico e previsibilidade no cuidado domiciliar.
                    </p>
                  </li>
                  <li className="p-6 bg-white rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-2">Ética e transparência</h4>
                    <p className="text-text-light leading-relaxed">
                      Relações baseadas na confiança, clareza e responsabilidade.
                    </p>
                  </li>
                  <li className="p-6 bg-white rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-2">Evolução contínua</h4>
                    <p className="text-text-light leading-relaxed">
                      Aprimoramento constante de processos, pessoas e práticas.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desospitalização Segura */}
      {/* <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-full min-h-[300px] bg-accent rounded-xl flex items-center justify-center overflow-hidden shadow-custom-lg group">
                <img 
                  src="/Uniao.png" 
                  alt="Cuidado seguro" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Modelo de Cuidado</span>
              <h2 className="text-4xl leading-tight text-text mb-4">Cuidado exige mais do que técnica</h2>
              <p className="text-lg leading-[1.7] text-text-light mb-6">
                Acreditamos que o atendimento domiciliar exige mais do que técnica.
                Exige diálogo, acompanhamento e confiança. Nosso modelo de cuidado é
                estruturado com base em presença humana, coordenação contínua e
                segurança nos processos.
              </p>
              <h4 className="text-xl mb-4 text-text">Pilares do nosso modelo:</h4>
              <ul className="list-none p-0 my-8">
                <li className="mb-6 p-6 bg-white rounded-lg">
                  <h5 className="text-lg font-semibold text-primary mb-3">Presença humana</h5>
                  <p className="text-text-light leading-relaxed">
                    No atendimento e na comunicação. Escuta ativa, diálogo direto com as
                    famílias e comunicação clara, acessível e contínua.
                  </p>
                </li>
                <li className="mb-6 p-6 bg-white rounded-lg">
                  <h5 className="text-lg font-semibold text-primary mb-3">Coordenação assistencial</h5>
                  <p className="text-text-light leading-relaxed">
                    Contínua e integrada. Acompanhamento planejado e ajustado às
                    necessidades reais de cada paciente.
                  </p>
                </li>
                <li className="mb-6 p-6 bg-white rounded-lg">
                  <h5 className="text-lg font-semibold text-primary mb-3">Segurança e previsibilidade</h5>
                  <p className="text-text-light leading-relaxed">
                    Processos estruturados, organização técnica e acompanhamento
                    responsável que garante segurança no cuidado.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pilares */}
      <section className="py-24 bg-gray-100">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Forma de Atuação</span>
            <h2 className="text-4xl leading-tight text-text mb-4">Frentes de atendimento</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="w-16 h-16 mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
                <Hospital className="w-10 h-10" />
              </div>
              <h3 className="text-xl mb-4 text-primary">Rede Pública</h3>
              <p className="text-text-light leading-relaxed">
                Atendimento a pacientes do sistema público de saúde com flexibilidade,
                responsabilidade técnica e compromisso social.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="w-16 h-16 mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
                <Home className="w-10 h-10" />
              </div>
              <h3 className="text-xl mb-4 text-primary">Atendimentos Particulares</h3>
              <p className="text-text-light leading-relaxed">
                Serviços personalizados para famílias que buscam cuidado domiciliar
                com presença humana e organização.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="w-16 h-16 mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
                <Building2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl mb-4 text-primary">Parcerias com Convênios</h3>
              <p className="text-text-light leading-relaxed">
                Integração com planos de saúde, garantindo acesso facilitado e
                qualidade assistencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso */}
      {/* <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Diferencial Competitivo</span>
              <h2 className="text-4xl leading-tight text-text mb-6">Proximidade real</h2>
              <p className="text-lg leading-[1.7] text-text-light mb-6">
                Em um mercado cada vez mais automatizado, escolhemos o caminho oposto.
                Enquanto grandes empresas utilizam respostas automáticas e atendimentos
                robotizados, nosso diferencial está na proximidade real.
              </p>
              <p className="text-text-light leading-[1.7] mb-6">
                O atendimento é feito por pessoas, com escuta ativa, diálogo direto
                com as famílias e comunicação clara, acessível e contínua. Esse cuidado
                é percebido e valorizado por quem está do outro lado.
              </p>
              <p className="text-xl text-text font-medium italic">
                Cuidar em casa exige confiança, método e presença.<br />
                Aqui, o cuidado começa no primeiro contato.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Apresentação Institucional */}
      <section className="py-24 bg-primary">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white/20 rounded-full">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl text-white mb-4">Apresentação Institucional</h2>
            <p className="text-lg text-white/90 mb-8">
              Conheça em detalhes nossa estrutura, serviços e diferenciais.
              Baixe nossa apresentação institucional completa.
            </p>
            <a
              href="/APRESENTACAO-INSTITUCIONAL-HEALTHMAIS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-medium text-center no-underline border-2 rounded-lg cursor-pointer transition-all duration-300 bg-white text-primary border-white hover:bg-gray-100 hover:border-gray-100 hover:shadow-lg hover:-translate-y-0.5"
            >
              <BookOpen size={20} />
              Ver Apresentação Institucional
            </a>
          </div>
        </div>
      </section>

      {/* Parcerias */}
      <section className="py-24 bg-gray-100">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Parcerias</span>
            <h2 className="text-4xl leading-tight text-text mb-4">Quem caminha conosco</h2>
            <p className="text-lg text-text-light max-w-[700px] mx-auto">
              Trabalhamos ao lado de instituições que compartilham nosso compromisso com a qualidade e a humanização no cuidado.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            <div className="bg-white rounded-xl shadow-custom-md p-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg">
              <img
                src="/Unimed Logo.png"
                alt="Unimed"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-white rounded-xl shadow-custom-md p-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg">
              <img
                src="/logo-camperj.png"
                alt="CAMPERJ - Caixa de Assistência do Ministério Público do Estado do Rio de Janeiro"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
