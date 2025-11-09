import React, { useState } from 'react';
import { ExternalLink, Github, Search, Filter, Calendar} from 'lucide-react';
import Navigation from './Navigation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  githubLink: string;
  liveLink: string;
  category: string;
  date: string;
  featured: boolean;
}

const ProjectCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useDocumentTitle('Projets');

  // Gestion de la fermeture du modal avec Échap
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      // Empêcher le scroll de la page quand le modal est ouvert
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce complète avec gestion d'inventaire en temps réel, processus de paiement sécurisé et tableau de bord administrateur",
      longDescription: "Une solution e-commerce full-stack robuste construite avec React et Spring Boot. Cette plateforme inclut un système de gestion d'inventaire en temps réel, un processus de paiement sécurisé, un tableau de bord administrateur complet, et une interface utilisateur moderne et responsive. Le projet utilise une base de données SQL pour la gestion des données et Spring Boot pour l'API REST.",
      tech: ["React", "Spring Boot", "SQL", "PostgreSQL", "TypeScript", "Java"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/jerico-murray/ecommerce-platform",
      liveLink: "https://ecommerce-demo.jericomurray.dev",
      category: "Web Development",
      date: "2024-08-15",
      featured: true
    },
    {
      id: 2,
      title: "Système de Gestion d'Entreprise",
      description: "Application web de gestion complète avec Symfony et PHP incluant gestion des employés, projets, facturation et rapports analytiques",
      longDescription: "Système complet de gestion d'entreprise développé avec Symfony et PHP. L'application inclut la gestion des employés, des projets, de la facturation, et des rapports analytiques. Utilise MySQL pour le stockage des données et Twig pour les templates. Intègre l'authentification sécurisée et un système de permissions granulaire.",
      tech: ["Symfony", "PHP", "MySQL", "SQL", "Twig", "Bootstrap"],
      image: "https://images.pexels.com/photos/4968636/pexels-photo-4968636.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/jerico-murray/gestion-entreprise",
      liveLink: "https://gestion-demo.jericomurray.dev",
      category: "Web Development",
      date: "2024-06-20",
      featured: true
    },
    {
      id: 3,
      title: "Dashboard Analytics avec Vue.js",
      description: "Tableau de bord d'analyse de données interactif",
      longDescription: "Dashboard moderne développé avec Vue.js pour l'analyse de données en temps réel. Intègre Python pour le traitement backend des données, avec des visualisations interactives et des rapports personnalisables. Utilise PostgreSQL pour le stockage des données et des API REST pour la communication entre le frontend et backend.",
      tech: ["Vue.js", "Python", "PostgreSQL", "SQL", "Chart.js", "FastAPI"],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/jerico-murray/vue-dashboard",
      liveLink: "https://dashboard-demo.jericomurray.dev",
      category: "Web Development",
      date: "2024-05-10",
      featured: false
    },
    {
      id: 4,
      title: "Application Mobile React Native",
      description: "App mobile multiplateforme avec authentification",
      longDescription: "Application mobile développée avec React Native, offrant une expérience native sur iOS et Android. Inclut l'authentification utilisateur, la synchronisation de données, les notifications push, et une interface utilisateur moderne. Utilise Firebase pour le backend et SQLite pour le stockage local.",
      tech: ["React Native", "TypeScript", "Firebase", "SQLite", "Redux", "Expo"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/jerico-murray/react-native-app",
      liveLink: "#",
      category: "Mobile Development",
      date: "2024-04-05",
      featured: false
    },
    {
      id: 5,
      title: "API REST avec Spring Boot",
      description: "API robuste pour applications d'entreprise",
      longDescription: "API REST complète développée avec Spring Boot et Java. Implémente les meilleures pratiques de sécurité, la documentation automatique avec Swagger, la gestion des erreurs, et l'optimisation des performances. Utilise Spring Security pour l'authentification JWT et PostgreSQL comme base de données principale.",
      tech: ["Spring Boot", "Java", "PostgreSQL", "SQL", "JWT", "Swagger"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/jerico-murray/springboot-api",
      liveLink: "https://api-demo.jericomurray.dev",
      category: "Backend Development",
      date: "2024-03-12",
      featured: true
    },
    {
      id: 6,
      title: "Application Angular Enterprise",
      description: "SPA complexe avec Angular et TypeScript",
      longDescription: "Application web complexe développée avec Angular et TypeScript. Utilise les dernières fonctionnalités d'Angular comme les Standalone Components, Signals, et le nouveau système de routing. Intègre des tests unitaires avec Jasmine/Karma et des tests e2e avec Cypress.",
      tech: ["Angular", "TypeScript", "RxJS", "Angular Material", "Cypress", "Jasmine"],
      image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/jerico-murray/angular-enterprise",
      liveLink: "https://angular-demo.jericomurray.dev",
      category: "Web Development",
      date: "2024-02-28",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Backend Development"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = projects.filter(project => project.featured);

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
    // Gestion du clic sur le backdrop pour fermer le modal
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        {/* Bouton de fermeture à l'extérieur du modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-60 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
          aria-label="Fermer le modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div 
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            {/* Gradient overlay pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-t-2xl"></div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm">
                {project.category}
              </span>
            </div>
            
            <div className="flex items-center text-gray-400 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(project.date).toLocaleDateString('fr-FR')}</span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.longDescription}
            </p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-white mb-3">Technologies utilisées</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/20 hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                Code Source
              </a>
              {project.liveLink !== "#" && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-gold-500 text-black rounded-full hover:from-yellow-300 hover:to-gold-400 transition-all duration-300 font-semibold hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Voir le Projet
                </a>
              )}
            </div>

            {/* Instructions de fermeture */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm text-center">
                Appuyez sur <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Échap</kbd> ou cliquez à l'extérieur pour fermer
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <Navigation isProjectsPage={true} />

      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Catalogue de
              <span className="block bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-600 bg-clip-text text-transparent">
                Projets
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez mes réalisations récentes et explorez les technologies que j'utilise pour créer des solutions innovantes.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16 bg-gradient-to-r from-yellow-400/10 via-gold-500/10 to-yellow-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Projets <span className="text-yellow-400">Phares</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      PHARE
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par nom ou technologie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors backdrop-blur-sm"
              />
            </div>
            <div className="flex gap-2">
              <Filter className="w-5 h-5 text-gray-400 mt-3 mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-semibold'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
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
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-white/20 text-white/60 rounded-full text-sm">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        {new Date(project.date).toLocaleDateString('fr-FR')}
                      </span>
                      <div className="flex gap-2">
                        <ExternalLink className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-600 mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">Aucun projet trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche.</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectCatalog;
