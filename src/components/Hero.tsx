import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Shield, Clock, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dotted-background">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-blue-900/20 to-gray-900/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex-1 flex flex-col justify-center">
        {/* Trust Badge */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30">
            <Star className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Trusted by 2000+ customers worldwide</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Premium
          </span>
          <span className="block text-white">
            Hosting Solutions
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Experience lightning-fast hosting with{' '}
          <span className="text-blue-400 font-semibold">24/7 support</span>,{' '}
          <span className="text-purple-400 font-semibold">zero lag</span>, and{' '}
          <span className="text-pink-400 font-semibold">99.9% uptime</span>{' '}
          guarantee. From Minecraft servers to VPS hosting, we've got you covered.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <Link
            to="/services"
            className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
          </Link>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2"
          >
            <span>View Pricing</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mb-1">2K+</div>
            <div className="text-gray-400 text-sm">Happy Customers</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-purple-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime Guarantee</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300">
            <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-green-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400 text-sm">Expert Support</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-yellow-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mb-1">4.8★</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;