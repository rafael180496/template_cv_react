import React from "react";

const CoverContent = ({ post, name }) => {
  return (
    <div className="cv-header relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 opacity-95"></div>
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-white/30 flex items-center justify-center">
                <span className="text-4xl lg:text-5xl font-bold text-white">
                  {name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 
              className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              data-aos="fade-left" 
              data-aos-delay="0"
              style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
            >
              {name}
            </h1>
            <p 
              className="text-lg lg:text-xl text-blue-100 mb-6 max-w-3xl leading-relaxed"
              data-aos="fade-left" 
              data-aos-delay="100"
            >
              {post}
            </p>
            
            <div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 d-print-none"
              data-aos="fade-left" 
              data-aos-delay="200"
            >
              <div className="flex items-center space-x-2 text-blue-100">
                <i className="fas fa-map-marker-alt"></i>
                <span>Nicaragua</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <i className="fas fa-envelope"></i>
                <span>rafael180496@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <i className="fas fa-calendar"></i>
                <span>7+ años experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
    </div>
  );
};

export const CoverPDF = ({ post, name }) => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-2xl font-bold">
            {name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </span>
        </div>
        
        <div className="flex-1">
          <h1 
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
          >
            {name}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">{post}</p>
          
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>rafael180496@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-calendar"></i>
              <span>7+ años experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverContent;
