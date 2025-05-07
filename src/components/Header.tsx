
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-riad-terracotta">
            Riad<span className="text-riad-blue">Serenity</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-riad-terracotta transition-colors">
            {t('navigation.home')}
          </Link>
          <Link to="/about" className="text-foreground hover:text-riad-terracotta transition-colors">
            {t('navigation.about')}
          </Link>
          <Link to="/rooms" className="text-foreground hover:text-riad-terracotta transition-colors">
            {t('navigation.rooms')}
          </Link>
          <Link to="/gallery" className="text-foreground hover:text-riad-terracotta transition-colors">
            {t('navigation.gallery')}
          </Link>
          <Link to="/contact" className="text-foreground hover:text-riad-terracotta transition-colors">
            {t('navigation.contact')}
          </Link>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button size="sm" className="bg-riad-terracotta hover:bg-riad-terracotta/90">
              {t('navigation.bookNow')}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSwitcher />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-riad-terracotta transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-riad-terracotta transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.about')}
              </Link>
              <Link 
                to="/rooms" 
                className="text-foreground hover:text-riad-terracotta transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.rooms')}
              </Link>
              <Link 
                to="/gallery" 
                className="text-foreground hover:text-riad-terracotta transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.gallery')}
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-riad-terracotta transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.contact')}
              </Link>
              <Button 
                size="sm" 
                className="bg-riad-terracotta hover:bg-riad-terracotta/90 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.bookNow')}
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
