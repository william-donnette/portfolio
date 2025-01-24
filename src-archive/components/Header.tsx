import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import React from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#academic" className="text-gray-600 hover:text-gray-900">
              Formation Académique
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">
              Expériences Professionnelles
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">
              Compétences
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projets
            </a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={20} />
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#academic" className="text-gray-600 hover:text-gray-900">
                Formation Académique
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-gray-900"
              >
                Expériences Professionnelles
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">
                Compétences
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Projets
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
