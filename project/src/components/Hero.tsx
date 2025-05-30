import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-0">
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
        
        {/* Background Image with Proper Scaling */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundAttachment: "fixed"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
              Web Development Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl text-white opacity-500 mb-10">
              We create responsive, mobile-friendly websites that help your business grow and reach customers on any device.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className=" border-2 bg-blue text-white-600 hover:bg-blue-400 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-white text-white-600 hover:bg-blue-400 hover:text-black font-bold py-3 px-6 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;