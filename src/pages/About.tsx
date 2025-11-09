import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Award, Users, Coffee } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const About = () => {
  useDocumentTitle('À propos');
  
  const skills = [
    { name: 'Développement Frontend', level: 95, icon: Code },
    { name: 'Design UI/UX', level: 90, icon: Palette },
    { name: 'React & TypeScript', level: 98, icon: Zap },
    { name: 'Résolution créative de problèmes', level: 92, icon: Award },
  ];

  const stats = [
    { number: '50+', label: 'Projets réalisés', icon: Award },
    { number: '3+', label: 'Années d’expérience', icon: Code },
    { number: '25+', label: 'Clients satisfaits', icon: Users },
    { number: '\u221e', label: 'Tasses de café', icon: Coffee },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
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
                À propos
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-rose-gold mx-auto mb-8" />
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Développeur web spécialisé dans la création d'applications modernes et performantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gold mb-8">Mon profil</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Je m'appelle Jerico MURRAY, développeur passionné par la création de solutions numériques utiles et intuitives. J'aime concevoir des outils qui répondent à de réels besoins, en alliant rigueur technique et curiosité.
                </p>
                <p>
                  Au fil de mes expériences, j'ai développé plusieurs sites web et applications mobiles, ce qui me permet aujourd'hui de me positionner comme développeur full stack et mobile junior.
                </p>
                <p>
                  Titulaire d'un BUT Métiers du Multimédia et de l'Internet (MMI), j'ai acquis une solide polyvalence, couvrant le développement mobile, front-end et back-end, tout en cultivant une approche moderne et pragmatique de la conception numérique.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-rose-gold/20 rounded-lg border border-gold/30 flex items-center justify-center">
                <div className="text-8xl font-bold text-gold/30">DEV</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-gold font-bold text-lg">Développement web</p>
                  <p className="text-gray-300">Applications modernes et fiables</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gold mb-6">Compétences & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-rose-gold mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-gold/50 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-gold mr-4" />
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="h-3 bg-gradient-to-r from-gold to-rose-gold rounded-full relative"
                    >
                      <div className="absolute right-0 top-0 h-full w-2 bg-white rounded-full shadow-lg" />
                    </motion.div>
                  </div>
                  <span className="absolute right-0 -top-8 text-gold font-bold">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold to-rose-gold rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
        