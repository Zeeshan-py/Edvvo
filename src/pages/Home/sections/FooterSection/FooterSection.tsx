import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  // Footer navigation links data with proper routing
  const footerLinks = [
    { title: "About", href: "/about", isRoute: true },
    { title: "Contact", href: "#contact", isRoute: false },
    { title: "Terms of Service", href: "/terms-of-service", isRoute: true },
    { title: "Privacy Policy", href: "/privacy-policy", isRoute: true },
  ];

  const socialLinks = [
    { 
      icon: MessageCircle, 
      href: "https://whatsapp.com/channel/0029VbAGAGWCBtx5xamqF93V", 
      label: "WhatsApp Channel",
      color: "hover:bg-green-600"
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com/@edvvo?feature=shared", 
      label: "YouTube Channel",
      color: "hover:bg-red-600"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/share/1CE4C69Kpf/", 
      label: "Facebook",
      color: "hover:bg-blue-600",
    }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links or show coming soon message
      if (href === '#contact') {
        alert('Contact information:\n\nWhatsApp: https://whatsapp.com/channel/0029VbAGAGWCBtx5xamqF93V\nYouTube: https://youtube.com/@edvvo?feature=shared\n\nFaceBook Page: https://www.facebook.com/share/1CE4C69Kpf/');
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleSocialClick = (social: typeof socialLinks[0]) => {
    window.open(social.href, '_blank');
  };

  return (
    <footer id="about" className="bg-gray-900 dark:bg-gray-950 text-white py-16 w-full">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg 
                  viewBox="0 0 32 32" 
                  className="w-7 h-7 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer shield/protection ring */}
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                  
                  {/* Main shield background */}
                  <path 
                    d="M16 3L6 8V14C6 22 10 29 16 30C22 29 26 22 26 14V8L16 3Z" 
                    fill="currentColor" 
                    opacity="0.8"
                  />
                  
                  {/* Open book at the center */}
                  <path 
                    d="M10 12C10 11.5 10.5 11 11 11H15V19H11C10.5 19 10 18.5 10 18V12Z" 
                    fill="rgba(255,255,255,0.9)"
                  />
                  <path 
                    d="M17 11H21C21.5 11 22 11.5 22 12V18C22 18.5 21.5 19 21 19H17V11Z" 
                    fill="rgba(255,255,255,0.9)"
                  />
                  <line x1="16" y1="11" x2="16" y2="19" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5"/>
                  
                  {/* Graduation cap on top */}
                  <path 
                    d="M16 7L12 9L16 11L20 9L16 7Z" 
                    fill="rgba(255,255,255,1)"
                  />
                  <path 
                    d="M19.5 9.5V12C19.5 12.5 18 13.5 16 13.5C14 13.5 12.5 12.5 12.5 12V9.5" 
                    stroke="rgba(255,255,255,0.8)" 
                    strokeWidth="0.8" 
                    fill="none"
                  />
                  
                  {/* Knowledge dots/stars around */}
                  <circle cx="8" cy="14" r="1" fill="rgba(255,255,255,0.6)"/>
                  <circle cx="24" cy="14" r="1" fill="rgba(255,255,255,0.6)"/>
                  <circle cx="16" cy="23" r="1" fill="rgba(255,255,255,0.6)"/>
                  
                  {/* Inner glow effect */}
                  <circle cx="16" cy="16" r="11" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Newsreader',Helvetica]">Edvvo</h3>
            </div>
            <p className="text-gray-400 font-['Newsreader',Helvetica] leading-relaxed">
              Empowering students worldwide with quality educational resources and study materials.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social)}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-gray-800 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer`}
                    title={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
            
            {/* Social Media Info */}
            <div className="text-sm text-gray-500 space-y-1 flex flex-col gap-1">
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                Follow us on WhatsApp for updates
              </p>
              <p className="flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-500" />
                Subscribe to our YouTube channel
              </p>
              <p className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-600" />
                Visit Our Page on Facebook
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-['Newsreader',Helvetica]">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link, index) => {
                if (link.isRoute) {
                  return (
                    <Link
                      key={index}
                      to={link.href}
                      className="text-gray-400 hover:text-white font-['Newsreader',Helvetica] transition-colors duration-200 cursor-pointer hover:translate-x-1 transform transition-transform"
                    >
                      {link.title}
                    </Link>
                  );
                } else {
                  return (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-white font-['Newsreader',Helvetica] transition-colors duration-200 cursor-pointer text-left hover:translate-x-1 transform transition-transform"
                    >
                      {link.title}
                    </button>
                  );
                }
              })}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-['Newsreader',Helvetica]">Categories</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/explore" className="text-gray-400 hover:text-white font-['Newsreader',Helvetica] transition-colors duration-200 hover:translate-x-1 transform transition-transform">Science</Link>
              <Link to="/explore" className="text-gray-400 hover:text-white font-['Newsreader',Helvetica] transition-colors duration-200 hover:translate-x-1 transform transition-transform">Mathematics</Link>
              <Link to="/explore" className="text-gray-400 hover:text-white font-['Newsreader',Helvetica] transition-colors duration-200 hover:translate-x-1 transform transition-transform">Literature</Link>
              <Link to="/explore" className="text-gray-400 hover:text-white font-['Newsreader',Helvetica] transition-colors duration-200 hover:translate-x-1 transform transition-transform">History</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-['Newsreader',Helvetica] text-center md:text-left">
              © 2024 Edvvo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/terms-of-service"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms
              </Link>
              <Link 
                to="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy
              </Link>
              <button 
                onClick={() => alert('Cookie policy coming soon!')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
