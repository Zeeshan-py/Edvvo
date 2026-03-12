import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, BookOpen, GraduationCap, Cpu, DollarSign, Leaf, 
  Heart, Users, Palette, Scale, School, Wheat, ChevronRight 
} from "lucide-react";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";

const academicFields = [
  {
    id: "islamic-studies",
    title: "Islamic Studies",
    description: "Explore Islamic theology, jurisprudence, and religious studies.",
    icon: BookOpen,
    color: "from-green-500 to-green-700",
    bgPattern: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/20",
    path: "/islamic-studies"
  },
  {
    id: "engineering-applied-sci",
    title: "Engineering & Applied Sci.",
    description: "Comprehensive resources for all engineering disciplines and applied sciences.",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-700",
    bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/20",
    path: "/engineering-applied-science"
  },
  {
    id: "computer-science-it",
    title: "Computer Science & IT",
    description: "Programming, software development, and information technology resources.",
    icon: Cpu,
    color: "from-purple-500 to-purple-700",
    bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/20",
    path: "/computer-science"
  },
  {
    id: "business-finance",
    title: "Business & Finance",
    description: "Business management, finance, and economics resources.",
    icon: DollarSign,
    color: "from-green-500 to-green-700",
    bgPattern: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/20",
    path: "/business-finance"
  },
  {
    id: "natural-biological-sci",
    title: "Natural & Biological Sci.",
    description: "Biology, chemistry, physics, and environmental sciences.",
    icon: Leaf,
    color: "from-teal-500 to-cyan-600",
    bgPattern: "bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20",
    path: "/natural-biological-sciences"
  },
  {
    id: "health-paramedical",
    title: "Health & Para‑Medical",
    description: "Medical, dental, and paramedical sciences resources.",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    bgPattern: "bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20",
    path: "/health-paramedical"
  },
  {
    id: "social-sciences-humanities",
    title: "Social Sciences & Humanities",
    description: "Sociology, psychology, history, and other humanities.",
    icon: Users,
    color: "from-yellow-500 to-amber-600",
    bgPattern: "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20",
    path: "/social-sciences-humanities"
  },
  {
    id: "architecture-design",
    title: "Architecture & Design",
    description: "Architecture, interior design, and graphic design studies.",
    icon: Palette,
    color: "from-gray-500 to-slate-600",
    bgPattern: "bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/20 dark:to-slate-900/20",
    path: "/architecture-design"
  },
  {
    id: "law",
    title: "Law",
    description: "Legal education, jurisprudence, and specialized law programs.",
    icon: Scale,
    color: "from-blue-500 to-indigo-600",
    bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
    path: "/law"
  },
  {
    id: "education",
    title: "Education",
    description: "Teaching, educational psychology, and curriculum development.",
    icon: School,
    color: "from-emerald-500 to-green-600",
    bgPattern: "bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20",
    path: "/education"
  },
  {
    id: "agriculture-vet",
    title: "Agriculture & Vets",
    description: "Agricultural sciences, veterinary medicine, and animal care.",
    icon: Wheat,
    color: "from-green-500 to-lime-600",
    bgPattern: "bg-gradient-to-br from-green-50 to-lime-100 dark:from-green-900/20 dark:to-lime-900/20",
    path: "/agriculture-vet"
  }
];

export const AcademicExplorer = (): JSX.Element => {
  const navigate = useNavigate();

  const handleFieldClick = (field: typeof academicFields[0]) => {
    navigate(field.path);
  };

  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-gray-800 dark:to-purple-900/20 transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/explore"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Explore</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
              Academic Explorer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive academic resources across diverse fields of study. From engineering to humanities, find the perfect materials for your educational journey.
            </p>
          </div>

          {/* Academic Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {academicFields.map((field) => {
              const IconComponent = field.icon;
              return (
                <div
                  key={field.id}
                  onClick={() => handleFieldClick(field)}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${field.bgPattern} opacity-50`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Icon and Count */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${field.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="flex-grow mb-6">
                      <h3 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                        {field.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                        {field.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        <span>Explore Field</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 font-['Newsreader',Helvetica]">
                Ready to Start Learning?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Choose your academic field and access comprehensive study materials, books, and resources tailored to your educational needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/explore" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Back to Explore
                </Link>
                <Link 
                  to="/scholarly-vault" 
                  className="bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
                >
                  Visit Scholarly Vault
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}; 
