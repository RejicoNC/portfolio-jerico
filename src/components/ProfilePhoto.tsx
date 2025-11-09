import React from 'react';

interface ProfilePhotoProps {
  className?: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Photo Frame with Golden Border */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-600 rounded-3xl animate-glow opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Inner Frame */}
        <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-white/20">
          {/* Professional Photo Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-yellow-400/30 rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-purple-400/30 rotate-12"></div>
              <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-yellow-400/20 rounded-full"></div>
            </div>
            
            {/* Profile Content */}
            <div className="text-center z-10">
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-gold-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-black">JM</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Jerico MURRAY</h3>
                <p className="text-yellow-400 text-sm font-medium">Full-Stack Developer</p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-gold-500 mx-auto"></div>
              </div>
            </div>
            
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-bounce delay-300"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce delay-700"></div>
        <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-pulse delay-500"></div>
      </div>
      
      {/* Professional Badge */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-yellow-400 to-gold-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          Available for Hire
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
