import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Compass,
  GraduationCap,
  Layers,
  Rocket,
  Search,
  Sparkles,
  TimerReset,
} from "lucide-react";
import { Link } from "react-router-dom";
import globalResources from "@/utils/globalResources";
import { HeroSection } from "./sections/HeroSection";
import { FooterSection } from "./sections/FooterSection";

const quickAccess = [
  {
    title: "Explore Boards",
    description: "Books, notes, and class resources in one place.",
    icon: GraduationCap,
    link: "/explore",
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "Student Workspace",
    description: "Roadmaps, timers, guides, and planning tools.",
    icon: Layers,
    link: "/entertainment",
    accent: "from-violet-500 to-indigo-600",
  },
  {
    title: "Study Planner",
    description: "Organize tasks and stay consistent every day.",
    icon: TimerReset,
    link: "/study-plan",
    accent: "from-orange-500 to-rose-600",
  },
  {
    title: "Scholarly Vault",
    description: "Jump into curated academic material faster.",
    icon: BookOpen,
    link: "/scholarly-vault",
    accent: "from-emerald-500 to-teal-600",
  },
];

const pathways = [
  {
    title: "Find What To Study",
    description: "Navigate by board, class, subject, or academic field without getting lost.",
    points: ["Boards and grades", "Field discovery", "Result and entry pathways"],
  },
  {
    title: "Stay In Flow",
    description: "Switch from collecting material to actually studying with planners and timers.",
    points: ["Focus timer", "Study planner", "Learning roadmaps"],
  },
  {
    title: "Keep Momentum",
    description: "Use one workspace for notes, resources, updates, and next steps.",
    points: ["Unified navigation", "Quick-return cards", "Mobile-friendly access"],
  },
];

const stories = [
  {
    name: "Ayesha",
    role: "Class 12 student",
    quote: "This version feels cleaner and easier to trust. I can actually find what I need in seconds.",
  },
  {
    name: "Bilal",
    role: "Entry test prep",
    quote: "The workspace and study tools finally feel like they belong to the same platform.",
  },
  {
    name: "Sana",
    role: "Board prep",
    quote: "The depth, cards, and shortcuts make it feel modern without becoming confusing.",
  },
];

export const LandingPage = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [showAllResults, setShowAllResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setShowResults(false);
      setHighlightedIndex(-1);
      return;
    }

    const lower = searchTerm.toLowerCase();
    const filtered = globalResources.filter((item) => {
      return (
        item.title.toLowerCase().includes(lower) ||
        item.subject?.toLowerCase().includes(lower) ||
        item.description?.toLowerCase().includes(lower) ||
        item.tags?.some((tag: string) => tag.toLowerCase().includes(lower))
      );
    });

    setSearchResults(filtered);
    setShowResults(true);
    setHighlightedIndex(filtered.length > 0 ? 0 : -1);
  }, [searchTerm]);

  useEffect(() => {
    if (showResults && highlightedIndex >= 0 && resultsRef.current) {
      const activeRow = resultsRef.current.querySelectorAll(".search-result-row")[highlightedIndex] as HTMLElement;
      if (activeRow) {
        activeRow.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex, showResults]);

  const openResource = (item: any) => {
    window.open(item.downloadUrl || item.downloadLink, "_blank");
    setShowResults(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showResults || searchResults.length === 0) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((current) => (current + 1) % searchResults.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((current) => (current - 1 + searchResults.length) % searchResults.length);
      return;
    }

    if (event.key === "Enter" && highlightedIndex >= 0) {
      event.preventDefault();
      openResource(searchResults[highlightedIndex]);
    }

    if (event.key === "Escape") {
      setShowResults(false);
    }
  };

  return (
    <main className="page-shell min-h-screen">
      <HeroSection />

      <section className="section-shell relative z-10 pt-10 md:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="section-kicker">New Student Interface</div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.02] text-slate-950 dark:text-white md:text-6xl">
              A professional 3D study platform that feels
              <span className="text-gradient"> built for students</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              The new Edvvo interface is cleaner, faster to scan, easier to use on mobile, and designed
              around how students actually move between boards, resources, and study tools.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/explore" className="app-button-primary">
                Start exploring
              </Link>
              <Link to="/entertainment" className="app-button-secondary">
                Open workspace
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {["Boards + classes", "Study tools", "Easy mobile access", "Cleaner hierarchy"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/60 bg-white/70 px-4 py-2 font-semibold text-slate-600 shadow-[0_8px_20px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="orb-stack">
            <div className="app-card-3d mesh-surface relative overflow-hidden rounded-[32px] p-6 md:p-8">
              <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),transparent)]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between rounded-[24px] bg-slate-950 px-5 py-4 text-white shadow-[0_20px_40px_rgba(15,23,42,0.24)]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-sky-200">Study cockpit</p>
                    <h2 className="mt-1 font-display text-xl font-bold">Everything in one flow</h2>
                  </div>
                  <Rocket className="h-10 w-10 text-sky-300" />
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="app-panel rounded-[24px] p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-sky-100 p-3 text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
                        <Compass className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-950 dark:text-white">Explore</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Boards, vault, results</p>
                      </div>
                    </div>
                  </div>

                  <div className="app-panel rounded-[24px] p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-violet-100 p-3 text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
                        <Layers className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-950 dark:text-white">Workspace</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Planner, timer, guides</p>
                      </div>
                    </div>
                  </div>

                  <div className="app-panel rounded-[24px] p-5 md:col-span-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950 dark:text-white">Student-ready design</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                          Brighter surfaces, better spacing, stronger contrast, and layered 3D cards that feel
                          polished without becoming distracting.
                        </p>
                      </div>
                      <Sparkles className="mt-1 h-5 w-5 text-sky-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell relative z-10 mt-10">
        <div className="app-panel relative overflow-visible p-4 md:p-5">
          <div className="flex items-center gap-3 rounded-[26px] border border-slate-200/80 bg-white/82 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:border-white/10 dark:bg-slate-950/50">
            <div className="rounded-2xl bg-sky-100 p-3 text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setShowAllResults(false);
              }}
              onFocus={() => {
                if (searchResults.length > 0) {
                  setShowResults(true);
                }
              }}
              onBlur={() => {
                setTimeout(() => setShowResults(false), 120);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search books, notes, subjects, or vault resources..."
              className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500 md:text-base"
            />
            <Link to="/explore" className="app-button-primary whitespace-nowrap px-4 py-2.5">
              Open library
            </Link>
          </div>

          {showResults && searchResults.length > 0 && (
            <div
              ref={resultsRef}
              className="absolute inset-x-4 top-[calc(100%+0.5rem)] z-20 max-h-[28rem] overflow-y-auto rounded-[28px] border border-white/60 bg-white/96 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/96"
            >
              {(showAllResults ? searchResults : searchResults.slice(0, 8)).map((item, index) => (
                <button
                  key={`${item.id}-${index}`}
                  type="button"
                  onMouseDown={() => openResource(item)}
                  className={`search-result-row mb-2 flex w-full items-start gap-4 rounded-[22px] p-4 text-left transition ${
                    highlightedIndex === index
                      ? "bg-sky-50 ring-2 ring-sky-300 dark:bg-sky-400/10 dark:ring-sky-400/30"
                      : "hover:bg-slate-50 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="rounded-2xl bg-slate-950 px-3 py-2 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                    {(item.subject?.charAt(0) || item.type?.charAt(0) || "?").toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-950 dark:text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {[item.subject, item.type].filter(Boolean).join(" • ")}
                    </div>
                    {item.tags?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag: string) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 text-slate-400" />
                </button>
              ))}

              {searchResults.length > 8 && (
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onMouseDown={(event) => {
                      event.preventDefault();
                      setShowAllResults((current) => !current);
                    }}
                    className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-200"
                  >
                    {showAllResults ? "Show fewer results" : `Show all ${searchResults.length} results`}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section-shell relative z-10 mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {quickAccess.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.title} to={item.link} className="app-card-3d overflow-hidden rounded-[28px] p-6">
              <div className={`inline-flex rounded-2xl bg-gradient-to-br ${item.accent} p-3 text-white shadow-lg`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-sky-700 dark:text-sky-200">
                Open section
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          );
        })}
      </section>

      <section className="section-shell relative z-10 mt-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="app-card-3d mesh-surface rounded-[32px] p-7 md:p-9">
            <div className="section-kicker">Why It Works</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-950 dark:text-white">
              A clearer path from discovery to study.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
              The redesign removes the “template” feeling and replaces it with a structured product experience
              that guides students through finding resources, planning sessions, and staying focused.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pathways.map((pathway) => (
              <div key={pathway.title} className="app-card-3d rounded-[28px] p-6">
                <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{pathway.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{pathway.description}</p>
                <div className="mt-5 space-y-2">
                  {pathway.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-sky-500" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell relative z-10 mt-20 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="app-card-3d rounded-[32px] bg-slate-950 p-8 text-white">
          <div className="section-kicker border-white/10 bg-white/10 text-white">Platform Snapshot</div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: "Resources", value: "5000+" },
              { label: "Student tools", value: "6+" },
              { label: "Board pathways", value: "4" },
              { label: "Faster access", value: "1 hub" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="font-display text-3xl font-bold">{item.value}</div>
                <div className="mt-2 text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <div key={story.name} className="app-card-3d rounded-[28px] p-6">
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">“{story.quote}”</p>
              <div className="mt-5 border-t border-slate-200/70 pt-4 dark:border-white/10">
                <div className="font-display text-lg font-bold text-slate-950 dark:text-white">{story.name}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{story.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
};
