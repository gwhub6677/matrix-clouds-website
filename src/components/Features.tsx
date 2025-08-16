import React from 'react';
import { Clock, Shield, Zap, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support from our expert team',
      color: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Advanced security measures to protect your services',
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized infrastructure for maximum performance',
      color: 'bg-orange-500'
    },
    {
      icon: Star,
      title: '99.9% Uptime',
      description: 'Reliable hosting with guaranteed uptime SLA',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section id="features" className="py-20 dotted-background relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Features You Deserve
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            We provide enterprise-grade features that ensure your success with cutting-edge technology and unmatched reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;