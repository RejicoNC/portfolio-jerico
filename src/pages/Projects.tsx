import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  useDocumentTitle('Projets');

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold to-rose-gold bg-clip-text text-transparent">
                Mes Projets
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-rose-gold mx-auto mb-8" />
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Une collection de mes créations numériques, chacune réalisée avec passion et précision
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 mb-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Filter className="w-6 h-6 text-gold mr-2 mt-1" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-gold to-rose-gold text-black'
                    : 'border border-gold/30 text-gold hover:bg-gold hover:text-black'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gold/50 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0 opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <span className="text-xl font-bold text-gold z-10 relative drop-shadow-lg px-4 text-center">{project.title}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gold mb-3 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-100 mb-4 leading-relaxed drop-shadow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-gold to-rose-gold text-black font-bold text-sm rounded-full border border-gold/50 shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold to-rose-gold text-black font-bold rounded-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        Démo en ligne
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-gray-400 font-bold rounded-lg cursor-not-allowed">
                        <ExternalLink size={16} />
                        Indisponible
                      </span>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
      