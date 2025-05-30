import React from 'react';
import { MonitorSmartphone, Palette, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: <MonitorSmartphone size={48} className="text-blue-600 mb-4" />,
    title: 'Responsive Design',
    description: 'Our websites look great on any device, from desktops to smartphones.'
  },
  {
    icon: <Palette size={48} className="text-blue-600 mb-4" />,
    title: 'Beautiful UI/UX',
    description: 'Clean, modern designs that enhance user experience and engagement.'
  },
  {
    icon: <Zap size={48} className="text-blue-600 mb-4" />,
    title: 'Fast Performance',
    description: 'Optimized for speed to ensure visitors stay engaged with your content.'
  },
  {
    icon: <Globe size={48} className="text-blue-600 mb-4" />,
    title: 'SEO Friendly',
    description: 'Built with best practices to help your site rank higher in search results.'
  }
];

const Features = () => {
  return (
    <section id="features\" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We build websites that are not only beautiful but also functional and effective across all devices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;