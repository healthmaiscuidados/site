import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contato = () => {
  return (
    <div className="pt-[70px]">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-24 pb-16 text-center">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl md:text-5xl mb-4 text-white">Entre em Contato</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Estamos prontos para atender você e sua família com excelência
          </p>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-24">
        <div className="w-full max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-6 text-primary">Fale Conosco</h2>
            <p className="text-text-light leading-[1.7]">
              Nossa equipe está disponível para esclarecer dúvidas, realizar orçamentos e
              agendar avaliações. Escolha o canal mais conveniente para você.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <a
              href="tel:+5521979828951"
              className="flex gap-4 sm:gap-6 p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-lg transition-all duration-300 hover:border-primary hover:shadow-custom-md cursor-pointer no-underline"
            >
              <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-accent rounded-full text-primary">
                <Phone size={32} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold mb-2 text-text">Telefone</h3>
                <p className="text-lg font-semibold text-primary mb-2">
                  (21) 97982-8951
                </p>
              </div>
            </a>

            <a
              href="mailto:contato@healthmaiscuidados.com"
              className="flex gap-4 sm:gap-6 p-6 sm:p-8 bg-white border-2 border-gray-200 rounded-lg transition-all duration-300 hover:border-primary hover:shadow-custom-md cursor-pointer no-underline"
            >
              <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-accent rounded-full text-primary">
                <Mail size={32} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold mb-2 text-text">Email</h3>
                <p className="text-lg font-semibold text-primary mb-2 break-all">
                  contato@healthmaiscuidados.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/5521979828951"
              className="flex gap-4 sm:gap-6 p-6 sm:p-8 bg-linear-to-br from-whatsapp to-whatsapp-dark border-2 border-whatsapp rounded-lg text-white transition-all duration-300 hover:shadow-custom-md cursor-pointer no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-white/20 rounded-full text-white">
                <FaWhatsapp size={32} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold mb-2 text-white">WhatsApp</h3>
                <p className="text-lg font-semibold text-white mb-2">
                  Iniciar conversa
                </p>
                <p className="text-sm text-white">Atendimento rápido e direto</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;

