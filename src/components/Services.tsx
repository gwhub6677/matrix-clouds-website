import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Globe, Bot, Code, Gamepad2, Check } from 'lucide-react';

const Services = () => {
  const minecraftPlans = [
    {
      icon: Gamepad2,
      title: 'MC-Plan',
      description: 'High-performance Minecraft servers with 24/7 uptime and zero lag',
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support'],
      price: '₹60',
      color: 'from-cyan-500 to-blue-500',
      buttonColor: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
    },
    {
      icon: Gamepad2,
      title: 'Annual-MC-Plan',
      description: 'High-performance Minecraft servers with 24/7 uptime and zero lag for annual billing',
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support'],
      price: '₹700',
      color: 'from-purple-500 to-pink-500',
      buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    {
      icon: Gamepad2,
      title: 'Performance-MC-Plan',
      description: 'Maxed-out speed with Ryzen 9—built for pros, high TPS, and zero lag always.',
      features: ['24/7 Support', 'DDoS Protection', 'Instant Setup', 'Mod Support'],
      price: '₹150',
      color: 'from-red-500 to-pink-500',
      buttonColor: 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
    }
  ];

  const otherServices = [
    {
      icon: Server,
      title: 'VPS Plan',
      description: 'Scalable virtual private servers with full root access and SSD storage',
      features: ['Full Root Access', 'SSD Storage', 'Multiple OS', '99.9% Uptime'],
      price: '₹800',
      color: 'from-purple-500 to-pink-500',
      buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    {
      icon: Globe,
      title: 'Web Hosting Plan',
      description: 'Reliable web hosting with modern technologies and responsive design',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First'],
      price: '₹120',
      color: 'from-orange-500 to-red-500',
      buttonColor: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
    },
    {
      icon: Bot,
      title: 'Discord Bot Plan',
      description: 'Reliable Discord bot hosting with 24/7 uptime and easy deployment',
      features: ['24/7 Online', 'Auto Restart', 'Easy Deploy', 'Multiple Bots'],
      price: '₹120',
      color: 'from-blue-500 to-cyan-500',
      buttonColor: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
    }
  ];

  return (
    <section id="services" className="py-20 dotted-background relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6">
            <span className="text-purple-300 text-sm font-medium">Premium Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Choose from our comprehensive range of hosting and development services, each designed to deliver exceptional performance and reliability.
          </p>
        </div>

        {/* Minecraft Plans - Top Row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {minecraftPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
              >
                {/* Gradient Top Border */}
                <div className={`w-full h-1 bg-gradient-to-r ${plan.color} rounded-full mb-6`}></div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-700/50 rounded-xl p-4 mb-4">
                  <div className="text-gray-400 text-sm mb-1">Starting from</div>
                  <div className="text-2xl font-bold text-white">
                    {plan.price}<span className="text-sm text-gray-400">/mo</span>
                  </div>
                </div>

                <button className={`w-full ${plan.buttonColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}>
                  <Link 
                    to={
                      plan.title === 'Annual-MC-Plan' ? "/services?category=Minecraft%20Hosting&location=ANNUAL-MC-PLAN" :
                      plan.title === 'Performance-MC-Plan' ? "/services?category=Minecraft%20Hosting&location=PERFORMANCE-MC-PLAN" :
                      "/services"
                    } 
                    className="block w-full"
                  >
                    View Plans →
                  </Link>
                </button>
              </div>
            );
          })}
        </div>

        {/* Other Services - Single Row (2 cards centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
              >
                {/* Gradient Top Border */}
                <div className={`w-full h-1 bg-gradient-to-r ${service.color} rounded-full mb-6`}></div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-700/50 rounded-xl p-4 mb-4">
                  <div className="text-gray-400 text-sm mb-1">Starting from</div>
                  <div className="text-2xl font-bold text-white">
                    {service.price}<span className="text-sm text-gray-400">/mo</span>
                  </div>
                </div>

                <button className={`w-full ${service.buttonColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}>
                  <Link 
                    to={
                      service.title === 'VPS Plan' ? "/services?category=VPS%20Hosting&location=India-Intel" :
                      service.title === 'Web Hosting Plan' ? "/services?category=Web%20Development&location=Web-Plan" :
                      service.title === 'Discord Bot Plan' ? "/services?category=Discord%20Bot&location=Bot%20Hosting" :
                      "/services"
                    } 
                    className="block w-full"
                  >
                    View Plans →
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;