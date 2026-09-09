import React, { useEffect, useState } from "react";
import { BookOpen, Calculator, ChevronRight, FileText, Heart, Map, Target, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";

const motivationalQuotes = [
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The expert in anything was once a beginner. - Helen Hayes",
  "Acquire knowledge. It enables its possessor to distinguish right from wrong. - Imam Ali (RA)",
  "Push yourself, because no one else is going to do it for you. - Anonymous",
  "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
];

const apps = [
  {
    id: "roadmaps",
    name: "Learning Roadmaps",
    description: "Structured paths for students who want a clear next step.",
    icon: Map,
    link: "/roadmaps",
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "focus-timer",
    name: "Focus Timer",
    description: "A cleaner Pomodoro flow to keep momentum without clutter.",
    icon: Timer,
    link: "/focus-timer",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "solutions",
    name: "Solutions",
    description: "Guides and explainers collected into one study-ready area.",
    icon: FileText,
    link: "/solutions",
    accent: "from-violet-500 to-indigo-600",
  },
  {
    id: "study-planner",
    name: "Study Planner",
    description: "Plan tasks, track sessions, and keep your study day balanced.",
    icon: Target,
    link: "/study-plan",
    accent: "from-orange-500 to-rose-600",
  },
  {
    id: "calculator",
    name: "Calculator",
    description: "Fast access to a scientific calculator for problem solving.",
    icon: Calculator,
    action: () => window.open("https://www.desmos.com/scientific", "_blank"),
    accent: "from-slate-700 to-slate-900",
  },
  {
    id: "motivation",
    name: "Daily Motivation",
    description: "A calm corner that keeps the workspace from feeling robotic.",
    icon: Heart,
    action: () => document.getElementById("motivation-section")?.scrollIntoView({ behavior: "smooth" }),
    accent: "from-pink-500 to-fuchsia-600",
  },
];

export const EntertainmentPage = (): JSX.Element => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentQuote((current) => (current + 1) % motivationalQuotes.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="page-shell min-h-screen">
      <HeroSection />

      <section className="section-shell relative z-10 py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="section-kicker">Workspace Hub</div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-5xl">
              A better workspace for focus,
              <span className="text-gradient"> planning, and progress</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              This area now feels more like a premium student dashboard and less like a random tools page.
              Everything important is grouped into one accessible workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/study-plan" className="app-button-primary">
                Open study planner
              </Link>
              <Link to="/roadmaps" className="app-button-secondary">
                Browse roadmaps
              </Link>
            </div>
          </div>

          <div className="app-card-3d mesh-surface rounded-[32px] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Core tools", value: "4" },
                { label: "Support tools", value: "2" },
                { label: "Daily feel", value: "Calm + focused" },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] bg-white/82 p-5 dark:bg-slate-950/55">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                  <div className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {apps.map((app) => {
            const Icon = app.icon;

            const content = (
              <div className="app-card-3d rounded-[30px] p-6">
                <div className={`inline-flex rounded-2xl bg-gradient-to-br ${app.accent} p-3 text-white shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-slate-950 dark:text-white">{app.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{app.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-700 dark:text-sky-200">
                  Open tool
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            );

            if (app.link) {
              return (
                <Link key={app.id} to={app.link}>
                  {content}
                </Link>
              );
            }

            return (
              <button key={app.id} type="button" onClick={app.action} className="text-left">
                {content}
              </button>
            );
          })}
        </div>

        <div id="motivation-section" className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="app-card-3d rounded-[32px] bg-slate-950 p-8 text-white">
            <div className="section-kicker border-white/10 bg-white/10 text-white">Daily Motivation</div>
            <h2 className="mt-5 font-display text-3xl font-bold">Keep the workspace human.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">“{motivationalQuotes[currentQuote]}”</p>
          </div>

          <div className="app-card-3d rounded-[32px] p-8">
            <div className="section-kicker">Student Flow</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-950 dark:text-white">
              Learn, plan, then practice.
            </h2>
            <div className="mt-6 space-y-4">
              {[
                "Use roadmaps to understand the path.",
                "Move into the planner to organize your day.",
                "Use timer and solutions when it is time to execute.",
              ].map((step) => (
                <div key={step} className="flex items-center gap-3 rounded-[22px] bg-slate-50 px-4 py-4 dark:bg-white/5">
                  <div className="rounded-full bg-sky-500 p-1.5 text-white">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};
