import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { 
  Map, 
  Timer, 
  FileText, 
  Heart, 
  Calculator,
  BookOpen,
  Target,
  ChevronRight
} from "lucide-react";

// Motivational quotes
const motivationalQuotes = [
  // Modern & Classic
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The expert in anything was once a beginner. - Helen Hayes",
  "Don’t let what you cannot do interfere with what you can do. - John Wooden",
  "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun",
  "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
  "Push yourself, because no one else is going to do it for you. - Anonymous",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "The harder you work for something, the greater you’ll feel when you achieve it. - Anonymous",

  // Islamic Scholars
  "Acquire knowledge. It enables its possessor to distinguish right from wrong. - Imam Ali (RA)",
  "Do not be a slave to others when Allah has created you free. - Imam Ali (RA)",
  "Knowledge without action is insanity, and action without knowledge is vanity. - Imam Ghazali (RA)",
  "He who does not respect knowledge will not be respected by knowledge. - Imam Shafi'i (RA)",
  "Do not grieve over what has passed unless it makes you work for what is about to come. - Umar ibn al-Khattab (RA)",

  // Muslim Scientists
  "The more I study nature, the more I stand amazed at the work of the Creator. - Ibn Sina (Avicenna)",
  "The ink of the scholar is more sacred than the blood of the martyr. - Al-Biruni",
  "Seek knowledge from the cradle to the grave. - Prophet Muhammad (SAW), often cited by Muslim scientists",
  "A physician without knowledge of astrology has no right to call himself a physician. - Al-Razi (Rhazes)",
  "The world is divided into men who have wit and no religion and men who have religion and no wit. - Ibn Rushd (Averroes)"
];



export const EntertainmentPage = (): JSX.Element => {
  const [currentQuote, setCurrentQuote] = useState(0);

  // Quote rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const apps = [
    {
      id: "roadmaps",
      name: "Learning Roadmaps",
      description: "Structured learning paths for various fields and skills",
      icon: Map,
      color: "from-blue-500 to-indigo-600",
      category: "Education",
      link: "/roadmaps"
    },
    {
      id: "focus-timer",
      name: "Focus Timer",
      description: "Pomodoro technique timer to boost productivity",
      icon: Timer,
      color: "from-green-500 to-emerald-600",
      category: "Productivity",
      link: "/focus-timer"
    },
    {
  id: "solutions",
  name: "Solutions",
  description: "Access to step-by-step solutions and guides",
  icon: FileText,
  color: "from-purple-500 to-violet-600",
  category: "Guides",
  link: "/solutions"
    },
    {
      id: "motivation",
      name: "Daily Motivation",
      description: "Inspirational quotes to keep you motivated",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      category: "Wellness",
      onClick: () => {
        // Scroll to motivation section
        const motivationSection = document.getElementById('motivation-section');
        if (motivationSection) {
          motivationSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: "calculator",
      name: "Scientific Calculator",
      description: "Advanced calculator for mathematical computations",
      icon: Calculator,
      color: "from-gray-600 to-gray-800",
      category: "Tools",
      onClick: () => window.open("https://www.desmos.com/scientific", "_blank")
    },
    {
      id: "study-planner",
      name: "Study Planner",
      description: "Plan and organize your study schedule effectively",
      icon: Target,
      color: "from-orange-500 to-red-600",
      category: "Planning",
      link: "/study-plan"
    }
  ];

  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-all duration-500 min-h-screen">
        <section className="w-full max-w-[1400px] px-6 md:px-8 py-16">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent font-['Newsreader',Helvetica] mb-6 leading-tight">
              Professional Workspace
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">
                Experience productivity redefined with our premium suite of professional tools
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {apps.map((app) => {
              const IconComponent = app.icon;
              
              // Define color mappings for glassy backgrounds
              const getCardColors = (colorClass: string) => {
                const colorMap = {
                  'from-blue-500 to-indigo-600': {
                    base: 'rgba(59, 130, 246, 0.15), rgba(79, 70, 229, 0.25)',
                    hover: 'rgba(59, 130, 246, 0.25), rgba(79, 70, 229, 0.35)',
                    shadow: 'rgba(59, 130, 246, 0.3)',
                    border: 'rgba(59, 130, 246, 0.3)'
                  },
                  'from-green-500 to-emerald-600': {
                    base: 'rgba(34, 197, 94, 0.15), rgba(5, 150, 105, 0.25)',
                    hover: 'rgba(34, 197, 94, 0.25), rgba(5, 150, 105, 0.35)',
                    shadow: 'rgba(34, 197, 94, 0.3)',
                    border: 'rgba(34, 197, 94, 0.3)'
                  },
                  'from-purple-500 to-violet-600': {
                    base: 'rgba(168, 85, 247, 0.15), rgba(124, 58, 237, 0.25)',
                    hover: 'rgba(168, 85, 247, 0.25), rgba(124, 58, 237, 0.35)',
                    shadow: 'rgba(168, 85, 247, 0.3)',
                    border: 'rgba(168, 85, 247, 0.3)'
                  },
                  'from-pink-500 to-rose-600': {
                    base: 'rgba(236, 72, 153, 0.15), rgba(225, 29, 72, 0.25)',
                    hover: 'rgba(236, 72, 153, 0.25), rgba(225, 29, 72, 0.35)',
                    shadow: 'rgba(236, 72, 153, 0.3)',
                    border: 'rgba(236, 72, 153, 0.3)'
                  },
                  'from-gray-600 to-gray-800': {
                    base: 'rgba(75, 85, 99, 0.15), rgba(31, 41, 55, 0.25)',
                    hover: 'rgba(75, 85, 99, 0.25), rgba(31, 41, 55, 0.35)',
                    shadow: 'rgba(75, 85, 99, 0.3)',
                    border: 'rgba(75, 85, 99, 0.3)'
                  },
                  'from-orange-500 to-red-600': {
                    base: 'rgba(249, 115, 22, 0.15), rgba(220, 38, 38, 0.25)',
                    hover: 'rgba(249, 115, 22, 0.25), rgba(220, 38, 38, 0.35)',
                    shadow: 'rgba(249, 115, 22, 0.3)',
                    border: 'rgba(249, 115, 22, 0.3)'
                  }
                };
                return colorMap[colorClass as keyof typeof colorMap] || colorMap['from-blue-500 to-indigo-600'];
              };

              const cardColors = getCardColors(app.color);
              
              const CardContent = (
                <div className="group relative overflow-hidden">
                  {/* Card Background with Premium Glass Effect */}
                  <div 
                    className="relative p-8 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
                    style={{
                      background: `linear-gradient(145deg, ${cardColors.base})`,
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: `1px solid ${cardColors.border}`,
                      borderRadius: '24px',
                      boxShadow: `
                        0 20px 40px ${cardColors.shadow},
                        0 8px 16px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02) translateY(-8px)';
                      e.currentTarget.style.boxShadow = `
                        0 32px 64px ${cardColors.shadow},
                        0 16px 32px rgba(0, 0, 0, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.15)
                      `;
                      e.currentTarget.style.background = `linear-gradient(145deg, ${cardColors.hover})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) translateY(0)';
                      e.currentTarget.style.boxShadow = `
                        0 20px 40px ${cardColors.shadow},
                        0 8px 16px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `;
                      e.currentTarget.style.background = `linear-gradient(145deg, ${cardColors.base})`;
                    }}
                  >
                    {/* Top accent line */}
                    <div 
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${app.color} rounded-t-3xl`}
                      style={{
                        background: `linear-gradient(90deg, ${app.color.includes('blue') ? '#3B82F6, #1D4ED8' : 
                                     app.color.includes('green') ? '#10B981, #059669' :
                                     app.color.includes('purple') ? '#8B5CF6, #7C3AED' :
                                     app.color.includes('pink') ? '#EC4899, #DB2777' :
                                     app.color.includes('orange') ? '#F59E0B, #D97706' :
                                     '#6B7280, #4B5563'})`
                      }}
                    ></div>

                    <div className="flex flex-col items-center text-center space-y-6">
                      {/* Icon Container */}
                      <div className="relative">
                        <div 
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:shadow-3xl group-hover:scale-110`}
                          style={{ 
                            border: '3px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                          }}
                        >
                          <IconComponent 
                            className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" 
                            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} 
                          />
                        </div>
                        {/* Glow effect */}
                        <div 
                          className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${app.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                        ></div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-4 w-full">
                        <h3 
                          className="font-bold text-xl font-['Newsreader',Helvetica] leading-tight"
                          style={{ 
                            color: '#ffffff',
                            textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.5)',
                          }}
                        >
                          {app.name}
                        </h3>
                        
                        <p className="leading-relaxed font-medium text-sm px-2" style={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          textShadow: '0 1px 4px rgba(0,0,0,0.6)'
                        }}>
                          {app.description}
                        </p>
                        
                        {/* Enhanced Category Badge */}
                        <div className="flex justify-center">
                          <span 
                            className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 group-hover:scale-105"
                            style={{
                              color: '#ffffff',
                              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
                              border: '1px solid rgba(255, 255, 255, 0.25)',
                              backdropFilter: 'blur(8px)',
                              WebkitBackdropFilter: 'blur(8px)',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                              textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                            }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${app.color} mr-2 shadow-sm`}></div>
                            {app.category}
                          </span>
                        </div>

                        {/* Professional Action Indicator */}
                        <div className="flex justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center space-x-2 text-sm" style={{ 
                            color: 'rgba(255, 255, 255, 0.8)',
                            textShadow: '0 1px 3px rgba(0,0,0,0.6)'
                          }}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <span className="font-medium">Launch Application</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );

              // If app has a link, wrap in Link component
              if (app.link) {
                return (
                  <Link key={app.id} to={app.link}>
                    {CardContent}
                  </Link>
                );
              }

              // If app has onClick, use div with onClick
              return (
                <div key={app.id} onClick={app.onClick}>
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* Premium Motivation Section */}
          <div id="motivation-section" className="mb-16">
            <div 
              className="relative overflow-hidden rounded-3xl p-12 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.95) 0%, rgba(168, 85, 247, 0.95) 50%, rgba(236, 72, 153, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0 25px 50px rgba(0, 0, 0, 0.15),
                  0 12px 24px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `,
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-white rounded-lg rotate-45"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-6 font-['Newsreader',Helvetica] text-white">
                  Daily Inspiration
                </h3>
                
                <blockquote 
                  className="text-base md:text-lg italic leading-relaxed text-white/95 max-w-4xl mx-auto font-light"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                >
                  "{motivationalQuotes[currentQuote]}"
                </blockquote>

                {/* Quote Attribution */}
                <div className="mt-8 flex justify-center">
                  <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-sm font-medium tracking-wide">WISDOM FOR SUCCESS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Coming Soon Section */}
          <div className="mt-16 text-center">
            <div 
              className="inline-block p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8))',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(226, 232, 240, 0.5)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 font-['Newsreader',Helvetica]">
                  More Premium Tools
                </h3>
              </div>
              <p className="text-gray-600 text-lg font-medium mb-6 max-w-lg">
                We're crafting additional professional-grade applications to enhance your productivity suite
              </p>
              <div className="inline-flex items-center space-x-2 text-blue-600 font-semibold">
                <span>Coming Soon</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
};
