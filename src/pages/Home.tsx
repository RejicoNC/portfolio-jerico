import React from 'react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home = () => {
  useDocumentTitle('Accueil');
  
  const scrollToSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-rose-gold/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gold/20 rotate-45 transform" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-rose-gold/20 rotate-12 transform" />
        </div>
        {/* Hero Layout amélioré */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-12">
          {/* Photo verticale */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <div className="w-64 h-96 bg-gray-800 border-4 border-gold flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
              {/* Ajoutez ici la balise <img src=\"...\" alt=\"Votre photo\" className=\"w-full h-full object-cover\" /> */}
              <span className="text-gray-500 text-xl">Photo</span>
            </div>
          </div>
          {/* Texte et actions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gold via-rose-gold to-gold bg-clip-text text-transparent">
                Développeur
              </span>
              <br />
              <span className="text-white">Full stack</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              Bonjour, je m'appelle Jerico MURRAY. Je suis un développeur full stack junior. Découvrez mes créations sur mon portfolio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
            >
              <Link
                to="/projects"
                className="px-8 py-4 bg-gradient-to-r from-gold to-rose-gold text-black font-bold rounded-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Voir mes réalisations
                <ExternalLink size={20} />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                À propos
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center md:justify-start space-x-6"
            >
              <a
                href="https://github.com/RejicoNC"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jericomurray@hotmail.com"
                className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold hover:text-rose-gold transition-colors duration-300 animate-bounce"
        >
          <ArrowDown size={32} />
        </motion.button>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold to-rose-gold bg-clip-text text-transparent">
                Projets à la une
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-rose-gold mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un aperçu de mes derniers projets et créations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gold/50 transition-all duration-300"
              >
                <div className="aspect-video relative flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full absolute inset-0 opacity-60" />
                  <div className="absolute inset-0 bg-black/60" />
                  <span className="text-2xl font-bold text-gold z-10 relative drop-shadow-lg">{project.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gold mb-2 drop-shadow-lg">{project.title}</h3>
                  <p className="text-gray-100 mb-4 drop-shadow">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 bg-gradient-to-r from-gold to-rose-gold text-black font-bold text-sm rounded-full border border-gold/50 shadow-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gold text-black font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Voir le projet
                    </a>
                  ) : (
                    <span className="px-6 py-2 bg-gray-600 text-gray-400 font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 cursor-not-allowed">
                      Indisponible
                    </span>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-6 py-2 border-2 border-gold text-gold font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Voir tous les projets
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;