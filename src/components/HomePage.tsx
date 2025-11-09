import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Smartphone, Server, Database, Globe, Github, Linkedin, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfilePhoto from './ProfilePhoto';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useDocumentTitle('Accueil');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const featuredProjects = [
    {
      title: "Scène 3D avec React",
      description: "Avec React et Three.js j'ai créé une scène en 3D interactive avec des animations fluides et des contrôles utilisateur.",
      tech: ["React", "Three.js", "JavaScript"],
      image: "/images/scene3d.png",
      link: "https://jericoscencereact.netlify.app/",
      github: "https://github.com/RejicoNC/reactsceneoriject",
      category: "frontend"
    },
    {
      title: "Prospeak AI",
      description: "J'ai contribué à concevoir une application qui permet de créer sa campagne de pub avec l'IA",
      tech: ["React", "Python", "AWS"],
      image: "/images/prospeak.png",
      link: "https://app.prospeak.ai/",
      category: "fullstack"
    },
    {
      title: "Jeu mobile",
      description: "J'ai créé un jeu mobile avec Flutter dont le but est de sensibiliser les étudiants à leur comportement éco-responsable",
      tech: ["Flutter"],
      image: "/images/univert.png",
      link: "https://sae501univert.netlify.app/",
      github: "https://github.com/RejicoNC/sae501",
      category: "mobile"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Code className="w-6 h-6" />, techs: ["React", "Angular", "Vue.js", "TypeScript"] },
    { name: "Backend", icon: <Server className="w-6 h-6" />, techs: ["Spring Boot", "Symfony", "Python", "PHP"] },
    { name: "Database", icon: <Database className="w-6 h-6" />, techs: ["SQL", "PostgreSQL", "MySQL", "MongoDB"] },
    { name: "Mobile", icon: <Smartphone className="w-6 h-6" />, techs: ["React Native", "Flutter", "Progressive Web Apps", "Responsive Design"] }
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md border-b border-white/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-gold-400 via-yellow-500 to-gold-600 bg-clip-text text-transparent">
              Jerico MURRAY
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-yellow-400 ${activeSection === section ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-white/80'}`}
                >
                  {section === 'home' ? 'Accueil' : section === 'about' ? 'À propos' : 'Contact'}
                </button>
              ))}
              <Link
                to="/projects"
                className="capitalize transition-all duration-300 hover:text-yellow-400 text-white/80 flex items-center"
              >
                Projets
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
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
              {['home', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize text-white/80 hover:text-yellow-400 transition-colors"
                >
                  {section === 'home' ? 'Accueil' : section === 'about' ? 'À propos' : 'Contact'}
                </button>
              ))}
              <Link
                to="/projects"
                className="block w-full text-left px-4 py-2 capitalize text-white/80 hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-indigo-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Photo Section */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <ProfilePhoto />
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="mb-8 animate-fade-in">
                <p className="text-lg md:text-xl text-yellow-400 font-medium mb-2 tracking-wide">
                  Hello, I'm
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    Jerico
                  </span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-600 bg-clip-text text-transparent">
                    MURRAY
                  </span>
                </h1>
                <div className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
                  Développeur Full stack et mobile
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-gold-500 mx-auto lg:mx-0 mb-6"></div>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Passionné par la création d'applications web et mobile avec des technologies modernes.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-semibold rounded-full hover:from-yellow-300 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25 flex items-center justify-center"
                >
                  Voir Mes Projets
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Me Contacter
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                {[
                  { icon: <Code className="w-8 h-8" />, label: "Web Development" },
                  { icon: <Smartphone className="w-8 h-8" />, label: "Mobile Apps" },
                  { icon: <Globe className="w-8 h-8" />, label: "Full-Stack" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm mt-2 text-gray-400 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </button>
      </section>

      {/* Professional Stats Section */}
      

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              À <span className="bg-gradient-to-r from-yellow-400 to-gold-500 bg-clip-text text-transparent">Propos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Diplômé du BUT MMI en parcours dev j'ai pu faire des stages et des alternances qui m'ont permis de développer mes compétences en développement web et mobile en plus de mes cours pratiques.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/10 to-white/15 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Mon Parcours</h3>
                <p className="text-gray-300 leading-relaxed">
                   Je suis originaire de Houaïlou et métis Néo-Zélandais. J'ai continué mes études à l'IUT de Nouvelle-Calédonie en sachant que le développement web et mobile allait être ma vocation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/15 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Ce Que Je Fais</h3>
                <p className="text-gray-300 leading-relaxed">
                  Grâce à mes compétences et à mon expérience, je crée des applications web et mobile en choisissant la technologie la plus adaptée au besoin du client.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-white/10 to-white/15 rounded-2xl backdrop-blur-sm border border-white/20 hover:from-white/15 hover:to-white/25 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/30 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-3">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mr-2 mb-2 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gradient-to-r from-yellow-400/5 via-gold-500/5 to-yellow-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projets <span className="bg-gradient-to-r from-yellow-400 to-gold-500 bg-clip-text text-transparent">Phares</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Découvrez quelques-unes de mes réalisations récentes qui démontrent mes compétences et ma passion pour la création d'expériences numériques exceptionnelles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/15 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 hover:from-white/15 hover:to-white/25 transition-all duration-500 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-gold-400 transition-all duration-300 text-center text-sm"
                      >
                        Voir le projet
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center text-sm"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-semibold rounded-full hover:from-yellow-300 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              Voir Tous Mes Projets
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Restons <span className="bg-gradient-to-r from-yellow-400 to-gold-500 bg-clip-text text-transparent">Connectés</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Prêt à donner vie à votre prochain projet ? Je suis toujours enthousiaste à l'idée de travailler sur de nouveaux défis et de créer quelque chose d'extraordinaire ensemble.
          </p>

          <div className="bg-gradient-to-br from-white/10 to-white/15 p-8 rounded-2xl backdrop-blur-sm border border-white/20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:jericomurray@hotmail.com"
                className="flex items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group hover:scale-105"
              >
                <Mail className="w-6 h-6 mr-3 group-hover:text-yellow-400 transition-colors" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-semibold">jericomurray@hotmail.com</div>
                </div>
              </a>
              
              <a
                href="https://github.com/RejicoNC/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group hover:scale-105"
              >
                <Github className="w-6 h-6 mr-3 group-hover:text-yellow-400 transition-colors" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">GitHub</div>
                  <div className="font-semibold">@RejicoNC</div>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/jerico-murray-9b787226b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group hover:scale-105"
              >
                <Linkedin className="w-6 h-6 mr-3 group-hover:text-yellow-400 transition-colors" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">LinkedIn</div>
                  <div className="font-semibold">Jerico MURRAY</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Jerico MURRAY. Créé avec passion et attention aux détails.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
