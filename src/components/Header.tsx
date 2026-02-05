import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/estrutura', label: 'Nossa Equipe' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/contato', label: 'Contato' },
    { path: '/trabalhe-conosco', label: 'Trabalhe Conosco' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-1000 transition-shadow duration-300 ${isScrolled ? 'shadow-custom-md' : ''}`}>
      <nav className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between min-h-[70px]">
        <Link to="/" className="no-underline cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/HEALTHMAIS - LOGO.png" alt="Health+ Cuidados" className="h-10" />
        </Link>

        <div className={`md:static md:flex md:bg-transparent md:shadow-none md:p-0 md:h-auto md:w-auto md:max-w-none fixed top-0 ${isMenuOpen ? 'right-0' : '-right-full'} w-[70%] max-w-[300px] h-screen bg-white shadow-custom-xl p-16 pt-16 transition-all duration-300`}>
          <ul className="flex md:flex-row flex-col md:gap-8 gap-6 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative font-medium text-text transition-colors duration-200 py-2 block cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${location.pathname === item.path ? 'text-primary after:w-full' : 'after:w-0 hover:text-primary hover:after:w-full'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden block absolute top-6 right-6 text-2xl cursor-pointer bg-transparent border-none text-text"
            onClick={toggleMenu}
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <button
          className="md:hidden block text-2xl cursor-pointer bg-transparent border-none text-text"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
