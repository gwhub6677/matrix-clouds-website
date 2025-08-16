import React from 'react';
import { Server, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Services': [
      'Minecraft Hosting',
      'VPS Hosting',
      'Web Development',
      'Discord Bot Hosting'
    ],
    'Support': [
      '24/7 Live Chat',
      'Knowledge Base',
      'Ticket System',
      'Community Forum'
    ],
    'Company': [
      'About Us',
      'Privacy Policy',
      'Terms of Service',
      'Status Page'
    ]
  };

  return (
    <footer className="dotted-background border-t border-gray-800 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900/70"></div>

      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Server className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">MatrixClouds</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium hosting solutions with 24/7 support and guaranteed uptime. Trusted by thousands of customers worldwide.
              </p>

              {/* Social Links - Single Discord Logo */}
              <div className="flex items-center space-x-4">
                {/* Clickable Discord Logo - Opens MatrixClouds Discord Server */}
                <a
                  href="https://discord.gg/8yVvv6mqYD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white hover:bg-indigo-700 transition-colors duration-300"
                  aria-label="Join our Discord server"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
                <span>© 2024 MatrixClouds. All rights reserved. Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>for amazing customers.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;