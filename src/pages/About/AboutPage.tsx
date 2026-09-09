import React from "react";
import { Globe, Heart, Lightbulb, Target } from "lucide-react";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";

const values = [
  {
    icon: Target,
    title: "Clear Mission",
    description: "Make study resources easier to reach and easier to trust for students who need speed and clarity.",
  },
  {
    icon: Lightbulb,
    title: "Thoughtful Design",
    description: "Use modern visuals and stronger hierarchy without making learning tools feel overwhelming.",
  },
  {
    icon: Heart,
    title: "Student Empathy",
    description: "Build with the reality of limited time, exam pressure, and mobile-first usage in mind.",
  },
  {
    icon: Globe,
    title: "Accessible Learning",
    description: "Keep educational support open and approachable for a broader student community.",
  },
];

const stats = [
  { number: "50,000+", label: "Students reached" },
  { number: "10,000+", label: "Study materials" },
  { number: "100+", label: "Learning topics" },
  { number: "95%", label: "Positive feedback" },
];

export const AboutPage = (): JSX.Element => {
  return (
    <main className="page-shell min-h-screen">
      <HeroSection />

      <section className="section-shell relative z-10 py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="section-kicker">About Edvvo</div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-5xl">
              Education support that feels modern,
              <span className="text-gradient"> useful, and student-first</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Edvvo exists to make learning resources more approachable. The platform is being shaped into a
              cleaner, stronger product experience so students can focus on progress instead of figuring out the interface.
            </p>
          </div>

          <div className="app-card-3d mesh-surface rounded-[32px] p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] bg-white/82 p-5 dark:bg-slate-950/55">
                  <div className="font-display text-3xl font-bold text-slate-950 dark:text-white">{stat.number}</div>
                  <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div key={value.title} className="app-card-3d rounded-[30px] p-7">
                <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-white dark:bg-white dark:text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-slate-950 dark:text-white">
                  {value.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 app-card-3d rounded-[34px] bg-slate-950 p-8 text-white md:p-10">
          <div className="section-kicker border-white/10 bg-white/10 text-white">Our Story</div>
          <h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">From resource library to student platform.</h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
            Edvvo started with a simple goal: help students find useful academic material without unnecessary
            friction. As the platform grew, it became clear the interface needed to feel more intentional,
            more trustworthy, and more enjoyable to use. This new direction is about turning that library into
            a polished learning environment students actually want to come back to.
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};
