import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, GraduationCap, Cpu, ChevronRight,
  Wrench, TestTube, BookOpen, Users
} from "lucide-react";
import { HeroSection } from "../../Home/sections/HeroSection";
import { FooterSection } from "../../Home/sections/FooterSection";

const programCategories = [
  {
    id: "engineering-programs",
    title: "Engineering Programs",
    subtitle: "PEC-approved + others",
    description: "Comprehensive engineering programs including PEC-approved degrees and specialized engineering disciplines.",
    icon: Wrench,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/engineering-programs"
  },
  {
    id: "applied-science-programs",
    title: "Applied Science Programs",
    subtitle: "Non-PEC but technical",
    description: "Technical and applied science programs focusing on practical applications and research.",
    icon: TestTube,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/applied-science-programs"
  }
];

export const EngineeringAppliedSciencePage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center ed-tint       transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/academic-explorer"
              className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Academic Explorer</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint   ed-elevation mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
              Engineering & Applied Science
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed">
              Choose your path in engineering or applied sciences. Explore PEC-approved engineering programs and specialized technical disciplines.
            </p>
          </div>

          {/* Program Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  to={category.path}
                  className="group relative ed-surface  rounded-xl p-8 lg:p-10 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border ed-border  overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${category.bgPattern} opacity-50`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-20 h-20 rounded-xl ed-tint ${category.color} flex items-center justify-center ed-elevation ed-hover-shadow transition-all duration-300 ed-lift`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="flex-grow mb-8">
                      <h3 className="font-bold text-2xl lg:text-3xl ed-ink  ed-type mb-2 leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-sm font-semibold ed-muted  mb-4">
                        {category.subtitle}
                      </p>
                      <p className="text-base lg:text-lg ed-muted  leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 ed-muted  font-medium ed-group-ink  transition-colors duration-300">
                        <span>Explore Programs</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 ed-tint   opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="ed-tint   rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 ed-type">
                Ready to Choose Your Path?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Select between engineering programs or applied science programs to explore degree levels and specializations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/academic-explorer"
                  className="ed-surface ed-link px-6 py-3 rounded-xl font-semibold ed-hover-surface transition-all duration-300 transform ed-lift ed-elevation"
                >
                  Back to Academic Explorer
                </Link>
                <Link
                  to="/scholarly-vault"
                  className="ed-surface text-white px-6 py-3 rounded-xl font-semibold ed-hover-surface transition-all duration-300 transform ed-lift border border-white/30"
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
