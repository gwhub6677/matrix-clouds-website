import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Award, Heart, Shield, Clock, Zap, Star } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '2000+', color: 'text-blue-400' },
    { icon: Shield, label: 'Uptime Guarantee', value: '99.9%', color: 'text-green-400' },
    { icon: Clock, label: 'Expert Support', value: '24/7', color: 'text-purple-400' },
    { icon: Award, label: 'Average Rating', value: '4.8★', color: 'text-yellow-400' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide reliable, high-performance hosting solutions that empower businesses and individuals to succeed online.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Customer-first approach, transparency, innovation, and unwavering commitment to excellence in everything we do.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Star,
      title: 'Our Vision',
      description: 'To be the leading hosting provider globally, known for exceptional service, cutting-edge technology, and customer satisfaction.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const team = [
    {
      name: 'Bibhusan Gc',
      role: 'CEO & Founder',
      description: '',
      image: 'https://media.discordapp.net/attachments/1337471958236921908/1405421125135241306/Bibhusan.jpg?ex=689ec3eb&is=689d726b&hm=a7a30ea62aaeb5ebf6b9f7d1fe23679c6bdda4473a06b7ccbe3b02a357d4ace1&=&format=webp&width=714&height=714'
    },
    {
      name: 'Pratik Mishra',
      role: 'Owner',
      description: '',
      image: 'https://media.discordapp.net/attachments/1394699370225467413/1404857583998730352/IMG_20250806_140235_821.webp?ex=689eb155&is=689d5fd5&hm=01330c958f132445da9ba1277c79d22cacceba6b206d34ca1029f10c7dc7644e&=&format=webp&width=818&height=818'
    },
    {
      name: 'Mukesh Bista',
      role: 'Owner & Executive',
      description: '',
      image: 'https://media.discordapp.net/attachments/1337471958236921908/1405421124740972566/mukesh.jpg?ex=689ec3eb&is=689d726b&hm=550d41f59110735d337185aee85e96e8514ca143568289aee94916b6f52939bb&=&format=webp&width=714&height=714'
    },
    {
      name: 'Kuldip KD',
      role: 'Owner & Executive',
      description: '',
      image: 'https://media.discordapp.net/attachments/1337471958236921908/1405421125445615666/kuldip.jpg?ex=689ec3eb&is=689d726b&hm=be2f5a0a495be25e4de7943e479aa8b4a12c2260f098ef306db00a89e160acad&=&format=webp&width=714&height=714'
    },
    {
      name: 'Divya Pro',
      role: 'Owner',
      description: '',
      image: 'https://media.discordapp.net/attachments/1337471958236921908/1405421124413820938/divya.jpg?ex=689ec3eb&is=689d726b&hm=29834e16a149a3a53371bdea9efc55f5567905d5d26ebb90dca9233891005b17&=&format=webp'
    },
    {
      name: 'Arpit Ekka',
      role: 'Manager',
      description: '',
      image: 'https://media.discordapp.net/attachments/1337471958236921908/1405421124006711380/Arpit.jpg?ex=689ec3eb&is=689d726b&hm=82755a060d652fd8a9afeaa853f8f41f5f8b073951401fb28dc6118e3161e7e3&=&format=webp&width=476&height=714'
    },
    {
      name: 'Subham',
      role: 'Junior Manager',
      description: '',
      image: 'https://media.discordapp.net/attachments/1405181316902686832/1405181795204333659/IMG_20250310_213920_167.jpg?ex=689e8dc6&is=689d3c46&hm=ac6678a1d66defebabd2796cde3572449a178287277378077f0e2086b95ceb39&=&format=webp&width=476&height=714'
    }
  ];

  return (
    <div className="min-h-screen dotted-background">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900/80"></div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>

          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
              <span className="text-blue-300 text-sm font-medium">About MatrixClouds</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              We're passionate about providing world-class hosting solutions that help businesses and individuals achieve their digital goals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Company Story */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2024, MatrixClouds began as a small team of passionate developers and system administrators who believed that reliable hosting shouldn't be complicated or expensive.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                What started as a mission to provide better Minecraft server hosting has evolved into a comprehensive platform offering VPS hosting, web development, and custom solutions for thousands of customers worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we're proud to serve over 2,000 customers across the globe, maintaining our commitment to exceptional service, cutting-edge technology, and transparent pricing.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team working"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission, Values, Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our dedicated team of experts works around the clock to ensure your hosting experience is nothing short of exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-700 group-hover:border-blue-500 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                {member.description && (
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose MatrixClouds?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <Shield className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Reliable & Secure</h3>
              <p className="text-gray-400 text-sm">Enterprise-grade security with 99.9% uptime guarantee</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <Clock className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">Round-the-clock expert support whenever you need it</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">Optimized infrastructure for maximum performance</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <Heart className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Customer First</h3>
              <p className="text-gray-400 text-sm">Your success is our priority, always</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;