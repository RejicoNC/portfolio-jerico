import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isProjectsPage?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isProjectsPage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, rediriger d'abord
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md border-b border-white/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-gold-400 via-yellow-500 to-gold-600 bg-clip-text text-transparent">
            Jerico MURRAY
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {!isProjectsPage ? (
              <>
                <button
                  onClick={() => scrollToSection('home')}
                  className="capitalize transition-all duration-300 hover:text-yellow-400 text-white/80"
                >
                  Accueil
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="capitalize transition-all duration-300 hover:text-yellow-400 text-white/80"
                >
                  À propos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="capitalize transition-all duration-300 hover:text-yellow-400 text-white/80"
                >
                  Contact
                </button>
                <Link
                  to="/projects"
                  className="capitalize transition-all duration-300 hover:text-yellow-400 text-white/80 flex items-center"
                >
                  Projets
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="capitalize transition-all duration-300 hover:text-yellow-400 text-white/80"
                >
                  Accueil
                </Link>
                <button
                  onClick={() => scrollToSection('about')}
                  className="capitalize transition-all duration-300 hover:text-yellow-400 text-white/80"
                >
                  À propos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="capitalize transition-all duration-300 hover:text-yellow-400 text-white/80"
                >
                  Contact
                </button>
                <span className="capitalize text-yellow-400 border-b-2 border-yellow-400">
                  Projets
                </span>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/20">
          <div className="px-4 py-2 space-y-1">
            {!isProjectsPage ? (
              <>
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-4 py-2 capitalize text-white/80 hover:text-yellow-400 transition-colors"
                >
                  Accueil
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 capitalize text-white/80 hover:text-yellow-400 transition-colors"
                >
                  À propos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 capitalize text-white/80 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </button>
                <Link
                  to="/projects"
                  className="block w-full text-left px-4 py-2 capitalize text-white/80 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projets
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block w-full text-left px-4 py-2 capitalize text-white/80 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 capitalize text-white/80 hover:text-yellow-400 transition-colors"
                >
                  À propos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 capitalize text-white/80 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </button>
                <span className="block w-full text-left px-4 py-2 capitalize text-yellow-400">
                  Projets
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
