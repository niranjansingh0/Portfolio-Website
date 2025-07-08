import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Certifications', href: 'certifications' },
    { name: 'Contact', href: 'contact' },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/niranjansingh0', 
      label: 'GitHub',
      hoverColor: 'hover:text-gray-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/niranjan-singh-56541126b/', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/NiranjanSingh_0', 
      label: 'Twitter',
      hoverColor: 'hover:text-sky-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:ns916169@gmail.com', 
      label: 'Email',
      hoverColor: 'hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: 'Resume', href: 'https://drive.google.com/file/d/1Hv8rutkSET8Sybno9WU579kAF8H-MJEM/view?usp=drive_link', external: true },
    { name: 'Blog', href: '#', external: true },
    { name: 'Privacy Policy', href: '#', external: false },
    { name: 'Terms of Service', href: '#', external: false }
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'RPA Solutions',
    'Process Automation',
    'Technical Consulting',
    'Code Review'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">Niranjan Singh</h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer & RPA Specialist passionate about creating 
                innovative solutions and automating business processes.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors ${social.hoverColor}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Get In Touch
              </h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 ns916169@gmail.com</p>
                <p>📱 (+91) 8004090921</p>
                <p>📍 Noida, India</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Subscribe to get notified about new projects and blog posts.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="flex items-center mb-4 md:mb-0">
              <span>© {currentYear} Niranjan Singh. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>By Niranjan Singh</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => scrollToSection('home')}
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <svg 
              className="h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;