import React from 'react';

interface ProfilePhotoProps {
  className?: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ className = "" }) => {
  return (
    <div className={`relative group z-20 ${className}`}>
      {/* Photo Frame with Golden Border */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-600 rounded-3xl animate-glow opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Inner Frame */}
        <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-white/20">
          {/* Professional Photo */}
          <img 
            src="/images/photo-jerico.jpg" 
            alt="Jerico MURRAY - Full-Stack Developer" 
            className="w-full h-full object-cover block"
            style={{ display: 'block !important' }}
          />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-bounce delay-300"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce delay-700"></div>
        <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-pulse delay-500"></div>
      </div>
      
      
    </div>
  );
};

export default ProfilePhoto;
