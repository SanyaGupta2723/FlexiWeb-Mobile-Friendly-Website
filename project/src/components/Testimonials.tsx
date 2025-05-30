import React from 'react';

const testimonials = [
  {
    quote: "Working with this team was a game-changer for our business. Our new responsive website has increased mobile conversions by 40%!",
    author: "Sanya Gupta",
    position: "CEO, TechStart",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The attention to detail in making our site work flawlessly across all devices was impressive. Highly recommended!",
    author: "Michael Chen",
    position: "Marketing Director, GrowthHub",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Our mobile traffic has increased by 65% since launching our new responsive website. The ROI has been incredible.",
    author: "Jessica Martinez",
    position: "Founder, StyleBoutique",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from some of our satisfied clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full"
            >
              <div className="mb-6">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mb-4">
                  <path d="M14.2 7L9 15.2V29H22.8V15.2H14.2L19.4 7H14.2ZM25.4 7L20.2 15.2V29H34V15.2H25.4L30.6 7H25.4Z" fill="currentColor"/>
                </svg>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
              <div className="mt-auto flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;