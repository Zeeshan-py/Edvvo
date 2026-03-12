import React from "react";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { Target, Heart, Lightbulb, Globe } from "lucide-react";

export const AboutPage = (): JSX.Element => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize education by providing free access to high-quality study materials and learning resources for students worldwide."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to create better learning experiences through technology and user-centered design."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a supportive community where learners can share knowledge, collaborate, and grow together."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making quality education accessible to students regardless of their geographical location or economic background."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Students" },
    { number: "10,000+", label: "Study Materials" },
    { number: "100+", label: "Subject Areas" },
    { number: "95%", label: "Student Satisfaction" }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center bg-[#f7f9fc] dark:bg-gray-800 transition-colors duration-300">
        <section className="w-full max-w-[1200px] px-4 md:px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-6">
              About Edvvo
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're passionate about transforming education through technology. Our platform connects students 
              with high-quality learning resources, making education more accessible and engaging for everyone.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 font-['Newsreader',Helvetica]">
                          {value.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-['Newsreader',Helvetica]">
              Our Story
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              Founded in 2020, Edvvo began as a simple idea: every student deserves access to quality educational resources. 
              What started as a small collection of study materials has grown into a comprehensive platform serving thousands 
              of students worldwide. We believe that education is the key to unlocking human potential, and we're committed 
              to making it accessible to all.
            </p>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
};
