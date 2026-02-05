import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 pb-4">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="min-w-0">
            <img src="/HEALTHMAIS - LOGO.png" alt="Health+ Cuidados" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-gray-300 leading-relaxed">
              Cuidado em casa com segurança, presença e responsabilidade.
            </p>
          </div>

          <div className="min-w-0">
            <h4 className="text-base font-semibold mb-4 text-white">Navegação</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><Link to="/" className="text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer">Início</Link></li>
              <li className="mb-2"><Link to="/sobre" className="text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer">Sobre</Link></li>
              <li className="mb-2"><Link to="/estrutura" className="text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer">Nossa Equipe</Link></li>
              <li className="mb-2"><Link to="/servicos" className="text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer">Serviços</Link></li>
              <li className="mb-2">
                <a href="/APRESENTACAO-INSTITUCIONAL-HEALTHMAIS.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer">
                  Apresentação Institucional
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-base font-semibold mb-4 text-white">Contato</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><Link to="/contato" className="text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer">Fale Conosco</Link></li>
              <li className="mb-2"><Link to="/trabalhe-conosco" className="text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer">Trabalhe Conosco</Link></li>
              <li className="mb-2">
                <a href="mailto:contato@healthmaiscuidados.com" className="text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer">
                  contato@healthmaiscuidados.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+5521969891130" className="text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer">(21) 96989-1130</a>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-base font-semibold mb-4 text-white">Horário de Atendimento</h4>
            <p className="text-gray-300 leading-[1.8]">
              Atendimento 24 horas<br />
              7 dias por semana<br />
              Retaguarda clínica sempre disponível
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2026 Health+ Cuidados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
