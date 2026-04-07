import { Link } from 'react-router-dom';
import { UserRound, ClipboardList, Shield, Heart, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="pt-[70px]">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-24 overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 text-white">
              Cuidado em casa com segurança, presença e responsabilidade
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 text-white/90">
              Assistência domiciliar organizada para pacientes que necessitam de cuidado
              contínuo.
            </p>
            <div className="flex gap-4 sm:gap-6 flex-wrap">
              <Link to="/contato" className="inline-block px-6 sm:px-7 py-3 sm:py-3.5 font-medium text-center no-underline border-2 border-white rounded-lg cursor-pointer transition-all duration-300 bg-white text-primary hover:bg-gray-100 hover:border-gray-100 hover:shadow-lg">
                Fale com nossa equipe
              </Link>
              <Link to="/sobre" className="inline-block px-6 sm:px-7 py-3 sm:py-3.5 font-medium text-center no-underline border-2 border-white rounded-lg cursor-pointer transition-all duration-300 bg-transparent text-white hover:bg-white hover:text-primary hover:shadow-lg">
                Conheça a Health+
              </Link>
            </div>
          </div>
          <div>
            <div className="w-full h-[400px] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="/Cuidados.png" 
                alt="Cuidado humanizado" 
                className="w-[90%] h-[90%] object-cover rounded-2xl shadow-custom-xl border-4 border-white/30 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-12 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">Nosso Modelo de Cuidado</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-text mb-4">
              O cuidado exige mais do que técnica.<br />
              Exige diálogo, acompanhamento e confiança.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="p-8 sm:p-12 bg-white rounded-xl shadow-custom-md transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full transition-transform duration-300 hover:scale-110">
                <UserRound className="w-8 h-8 sm:w-12 sm:h-12" strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Presença Humana</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Atendimento feito por pessoas, com escuta ativa, diálogo direto
                e comunicação clara, acessível e contínua com as famílias.
              </p>
            </div>

            <div className="p-8 sm:p-12 bg-white rounded-xl shadow-custom-md transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full transition-transform duration-300 hover:scale-110">
                <ClipboardList className="w-8 h-8 sm:w-12 sm:h-12" strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Coordenação Assistencial</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Acompanhamento contínuo e integrado, garantindo que o cuidado
                seja coordenado, planejado e ajustado às necessidades reais.
              </p>
            </div>

            <div className="p-8 sm:p-12 bg-white rounded-xl shadow-custom-md transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full transition-transform duration-300 hover:scale-110">
                <Shield className="w-8 h-8 sm:w-12 sm:h-12" strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Segurança e Previsibilidade</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Processos estruturados, organização técnica e acompanhamento
                responsável que garante segurança no cuidado domiciliar.
              </p>
            </div>

            <div className="p-8 sm:p-12 bg-white rounded-xl shadow-custom-md transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full transition-transform duration-300 hover:scale-110">
                <Heart className="w-8 h-8 sm:w-12 sm:h-12" strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Cuidado Personalizado</h3>
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                Cada plano de cuidado é construído respeitando as necessidades
                clínicas e a realidade de cada família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desospitalization Section */}
      <section className="py-24 bg-gray-100">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">Perfil dos Pacientes</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-text mb-4">Para quem prestamos assistência domiciliar</h2>
              <p className="text-base sm:text-lg leading-relaxed text-text-light mb-6">
                Atendemos pacientes de diferentes perfis que necessitam de cuidado
                contínuo, seguro e coordenado no ambiente domiciliar. Cada plano é
                construído de forma responsável, respeitando as necessidades clínicas
                e a realidade de cada família.
              </p>
              <ul className="list-none p-0 my-8">
                <li className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 p-3 sm:p-4 bg-white rounded-lg transition-transform duration-200 hover:translate-x-1">
                  <CheckCircle2 className="shrink-0 text-success mt-0.5" size={18} />
                  <span className="text-sm sm:text-base">Idosos com necessidades de cuidado contínuo</span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 p-3 sm:p-4 bg-white rounded-lg transition-transform duration-200 hover:translate-x-1">
                  <CheckCircle2 className="shrink-0 text-success mt-0.5" size={18} />
                  <span className="text-sm sm:text-base">Crianças com necessidades especiais de cuidado</span>
                </li>
                <li className="flex items-start gap-4 mb-4 p-4 bg-white rounded-lg transition-transform duration-200 hover:translate-x-1">
                  <CheckCircle2 className="shrink-0 text-success" size={20} />
                  <span>Adultos com limitações funcionais</span>
                </li>
                <li className="flex items-start gap-4 mb-4 p-4 bg-white rounded-lg transition-transform duration-200 hover:translate-x-1">
                  <CheckCircle2 className="shrink-0 text-success" size={20} />
                  <span>Pacientes neuropatas e pacientes tetraplégicos</span>
                </li>
              </ul>
              <Link to="/servicos" className="inline-block px-6 sm:px-7 py-3 sm:py-3.5 font-medium text-center no-underline border-2 rounded-lg cursor-pointer transition-all duration-300 bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark hover:-translate-y-0.5 hover:shadow-custom-lg">
                Conheça nossos serviços
              </Link>
            </div>
            <div>
              <div className="w-full h-full min-h-[300px] bg-accent rounded-xl flex items-center justify-center overflow-hidden shadow-custom-lg group">
                <img 
                  src="/Atendimentos.png" 
                  alt="Conforto do lar" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-2">O que oferecemos</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-text mb-4">Assistência domiciliar organizada e acessível</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-12 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="inline-block text-4xl sm:text-5xl font-bold text-primary opacity-20 mb-3 sm:mb-4">01</div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-text">Visitas de Avaliação</h3>
              <p className="text-sm sm:text-base text-text-light mb-4 sm:mb-6">
                Avaliação técnica para definição de viabilidade e plano terapêutico
                personalizado.
              </p>
              <Link to="/servicos" className="inline-flex items-center text-primary font-medium cursor-pointer transition-all duration-200 hover:gap-2 hover:underline">
                Saiba mais →
              </Link>
            </div>

            <div className="p-12 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="inline-block text-4xl sm:text-5xl font-bold text-primary opacity-20 mb-3 sm:mb-4">02</div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-text">Sessões Terapêuticas</h3>
              <p className="text-sm sm:text-base text-text-light mb-4 sm:mb-6">
                Fisioterapia, fonoaudiologia, nutrição, psicologia e outras especialidades
                no domicílio.
              </p>
              <Link to="/servicos" className="inline-flex items-center text-primary font-medium cursor-pointer transition-all duration-200 hover:gap-2 hover:underline">
                Saiba mais →
              </Link>
            </div>

            <div className="p-12 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-custom-lg">
              <div className="inline-block text-4xl sm:text-5xl font-bold text-primary opacity-20 mb-3 sm:mb-4">03</div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-text">Procedimentos de Enfermagem</h3>
              <p className="text-sm sm:text-base text-text-light mb-4 sm:mb-6">
                Administração de medicamentos EV/IM/SC, curativos complexos, gestão de
                dispositivos e mais.
              </p>
              <Link to="/servicos" className="inline-flex items-center text-primary font-medium cursor-pointer transition-all duration-200 hover:gap-2 hover:underline">
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">Pronto para conhecer a Health+?</h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-12">
              Entre em contato com nossa equipe e descubra como podemos oferecer atenção
              domiciliar de excelência para seus pacientes ou familiares.
            </p>
            <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
              <Link to="/contato" className="inline-block px-6 sm:px-7 py-3 sm:py-3.5 font-medium text-center no-underline border-2 rounded-lg cursor-pointer transition-all duration-300 bg-white text-primary border-white hover:bg-gray-100 hover:border-gray-100 hover:shadow-lg">
                Fale conosco
              </Link>
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

export default Home;
