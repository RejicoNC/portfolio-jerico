import React from 'react';
import { Users, Coffee, Award, Star } from 'lucide-react';

const ProfessionalStats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "50+",
      label: "Happy Clients",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      number: "100+",
      label: "Projects Completed", 
      color: "from-yellow-400 to-gold-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "5+",
      label: "Years Experience",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      number: "99%",
      label: "Client Satisfaction",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:shadow-lg transition-shadow`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalStats;
