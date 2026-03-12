import React from "react";
import { ExploreByCategorySection } from "./sections/ExploreByCategorySection";
import { FeaturedBooksSection } from "./sections/FeaturedBooksSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { SearchSection } from "./sections/SearchSection";
import { BookOpen, FileText, Map, Target, Star, Users, Globe, Layers } from "lucide-react";
import globalResources from "@/utils/globalResources";
import { useState, useRef, useEffect } from "react";

export const LandingPage = (): JSX.Element => {
  // Feature highlights data
  const features = [
    {
      icon: BookOpen,
      title: "Books & Notes",
      description: "Curated resources for classes 9–12, always up-to-date.",
      link: "/explore"
    },
    {
  icon: FileText,
  title: "Scholarly Vault",
  description: "Access solutions and scholarly content.",
  link: "/scholarly-vault"
    },
    {
      icon: Map,
      title: "Learning Roadmaps",
      description: "Visualize your learning journey with interactive roadmaps.",
      link: "/roadmaps"
    },
    {
      icon: Target,
      title: "Focus Timer & Study Planner",
      description: "Boost productivity with a built-in Pomodoro timer and planner.",
      link: "/study-plan"
    },
    {
      icon: Star,
      title: "Entertainment & Motivation",
      description: "Enjoy educational entertainment and daily motivation.",
      link: "/entertainment"
    },
    {
      icon: Users,
      title: "Community & Support",
      description: "Join a growing community of learners and get help anytime.",
      link: "/about"
    }
  ];

  // Testimonials/stats data
  const stats = [
    { label: "Books & Notes", value: "5,000+" },
    { label: "Student Success Stories", value: "500+" },
    { label: "Roadmaps", value: "12+" },
    { label: "Website", value: "Free" },
    { label: "Avg. Rating", value: "4.8/5" },
  ];

  // Search bar state and logic
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [showAllResults, setShowAllResults] = useState(false);

  useEffect(() => {
    if (showResults && highlightedIndex >= 0 && resultsRef.current) {
      const el = resultsRef.current.querySelectorAll('.search-result-row')[highlightedIndex] as HTMLElement;
      if (el) el.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex, showResults]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAllResults(false);
    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      const results = globalResources.filter(item =>
        item.title.toLowerCase().includes(lower) ||
        (item.subject && item.subject.toLowerCase().includes(lower)) ||
        (item.description && item.description.toLowerCase().includes(lower)) ||
        (item.tags && item.tags.some((tag: string) => tag.toLowerCase().includes(lower)))
      );
      setSearchResults(results);
      setShowResults(true);
      setHighlightedIndex(results.length > 0 ? 0 : -1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowAllResults(false);
    if (!e.target.value.trim()) {
      setShowResults(false);
      setSearchResults([]);
      setHighlightedIndex(-1);
    } else {
      const lower = e.target.value.toLowerCase();
      const results = globalResources.filter(item =>
        item.title.toLowerCase().includes(lower) ||
        (item.subject && item.subject.toLowerCase().includes(lower)) ||
        (item.description && item.description.toLowerCase().includes(lower)) ||
        (item.tags && item.tags.some((tag: string) => tag.toLowerCase().includes(lower)))
      );
      setSearchResults(results);
      setShowResults(true);
      setHighlightedIndex(results.length > 0 ? 0 : -1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showResults || searchResults.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex(i => (i + 1) % searchResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex(i => (i - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0 && searchResults[highlightedIndex]) {
        window.open(searchResults[highlightedIndex].downloadUrl || searchResults[highlightedIndex].downloadLink, '_blank');
        setShowResults(false);
      }
    } else if (e.key === "Escape") {
      setShowResults(false);
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Delay to allow click on dropdown
    setTimeout(() => setShowResults(false), 100);
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      {/* Distinct Hero Section */}
      <div className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-0 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/30 to-indigo-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-400/30 to-purple-400/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6 py-24 md:py-36">
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight tracking-tight animate-fade-in-slow">
            <span className="block">Empowering Modern Learners</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">with Edvvo</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            Access books, notes, research, roadmaps, and productivity tools—all in one place. Fast, beautiful, and free.
          </p>
          <a href="#features" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-base animate-fade-in-delay2">
            Get Started
          </a>
        </div>
      </div>

      {/* Glassmorphic Global Search Bar with instant dropdown and keyboard nav */}
      <div className="flex justify-center w-full -mt-8 sm:-mt-12 z-20 relative animate-fade-in-card px-4 sm:px-6">
        <div className="w-full max-w-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-3 sm:p-4 flex items-center gap-2 sm:gap-4 relative">
          <span className="text-gray-400 text-xl sm:text-2xl flex-shrink-0"><Globe /></span>
          <form onSubmit={handleSearch} className="flex-1 flex items-center gap-1 sm:gap-2 relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search books, notes..."
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              onFocus={() => { if (searchResults.length > 0) setShowResults(true); }}
              aria-autocomplete="list"
              aria-controls="search-dropdown"
              aria-activedescendant={highlightedIndex >= 0 ? `search-result-${highlightedIndex}` : undefined}
              className="flex-1 bg-transparent outline-none border-none text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 font-medium px-1 sm:px-2 min-w-0"
              autoComplete="off"
            />
            <button type="submit" className="px-3 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow hover:scale-105 transition-all duration-200 text-sm sm:text-base flex-shrink-0">
              <span className="hidden sm:inline">Search</span>
              <span className="sm:hidden">Go</span>
            </button>
          </form>
          {/* Instant Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div
              id="search-dropdown"
              ref={resultsRef}
              className="absolute left-0 top-full mt-2 w-full max-w-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 max-h-80 sm:max-h-96 overflow-y-auto z-30 animate-fade-in-card"
              role="listbox"
            >
              <div className="p-2 sm:p-4">
                {(showAllResults ? searchResults : searchResults.slice(0, 10)).map((item, index) => (
                  <div
                    key={item.id + index}
                    id={`search-result-${index}`}
                    className={`search-result-row flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-102 mb-1 ${highlightedIndex === index ? 'ring-2 ring-blue-500 dark:ring-blue-400 bg-blue-100 dark:bg-blue-900/40' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onMouseDown={() => window.open(item.downloadUrl || item.downloadLink, '_blank')}
                    role="option"
                    aria-selected={highlightedIndex === index}
                  >
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-xs sm:text-base">{item.subject?.charAt(0) || item.type?.charAt(0) || '?'}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white truncate text-sm sm:text-base leading-tight">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{item.subject || item.type || ''} {item.class ? `• ${item.class}` : ''} {item.board ? `• ${item.board}` : ''}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.tags && item.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                          <span key={tagIndex} className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 self-start sm:self-center">
                      <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">{item.format || item.type}</span>
                      <div className="text-xs text-gray-400 dark:text-gray-500 hidden sm:block">Click to download</div>
                      <div className="text-xs text-gray-400 dark:text-gray-500 sm:hidden">Tap to open</div>
                    </div>
                  </div>
                ))}
                {!showAllResults && searchResults.length > 10 && (
                  <div className="text-center pt-2">
                    <button
                      className="text-sm text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-indigo-200 transition"
                      onMouseDown={e => { e.preventDefault(); setShowAllResults(true); }}
                    >
                      Show all results
                    </button>
                  </div>
                )}
                {showAllResults && searchResults.length > 10 && (
                  <div className="text-center pt-2">
                    <button
                      className="text-sm text-gray-500 dark:text-gray-300 font-semibold underline hover:text-gray-700 dark:hover:text-gray-100 transition"
                      onMouseDown={e => { e.preventDefault(); setShowAllResults(false); }}
                    >
                      Show less
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Feature Highlights Section - Icon Grid with Animated Hover */}
      <section id="features" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-10 animate-fade-in">
          Why Choose Edvvo?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.slice(0, 8).map((feature, idx) => (
            <div
              key={feature.title + idx}
              className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fade-in-card"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:animate-bounce-glow">
                <feature.icon className="w-10 h-10 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">{feature.description}</p>
              <a href={feature.link} className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow hover:scale-105 transition-all duration-200 text-sm">
                Explore
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section - impressive, mobile-friendly carousel/grid */}
      <section className="w-full max-w-3xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Success Stories</h2>
        {(() => {
          const stories = [
            { name: "Ayesha Khan", quote: "Edvvo helped me ace my board exams! The notes and roadmaps are so clear and easy to follow.", school: "Beaconhouse School System" },
            { name: "Ali Raza", quote: "I love the productivity tools and the huge library. I found everything I needed for my FSC studies.", school: "Punjab College" },
            { name: "Fatima Noor", quote: "The research vault and roadmaps are a game changer. Highly recommended for all students!", school: "Lahore Grammar School" },
            { name: "Usman Tariq", quote: "Edvvo's resources are always up-to-date. The interface is beautiful and works great on my phone.", school: "The City School" },
            { name: "Sana Malik", quote: "I improved my grades thanks to Edvvo. The community and support are amazing!", school: "Roots International" },
            { name: "Bilal Ahmed", quote: "The best platform for Pakistani students. Everything is free and super easy to use.", school: "APSACS" }
          ];
          const [current, setCurrent] = React.useState(0);
          const handlePrev = () => setCurrent((prev) => (prev - 1 + stories.length) % stories.length);
          const handleNext = () => setCurrent((prev) => (prev + 1) % stories.length);
          return (
            <div className="w-full flex flex-col items-center">
              <div className="flex items-center justify-center w-full gap-4 mb-8">
                <button onClick={handlePrev} aria-label="Previous" className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-all">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="flex-1 flex flex-col items-center">
                  <div className="relative w-full max-w-xl">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 px-8 py-10 md:px-12 md:py-14 relative speech-bubble">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-blue-300 opacity-40 select-none pointer-events-none">“</span>
                      <blockquote className="text-xl md:text-2xl italic text-center text-gray-800 dark:text-gray-100 leading-relaxed mb-2 font-serif z-10 relative">
                        {stories[current].quote}
                      </blockquote>
                      {/* Speech bubble tail */}
                      <svg className="absolute left-1/2 -bottom-6 -translate-x-1/2" width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0C8 24 32 24 40 0H0Z" fill="currentColor" className="text-white dark:text-gray-900"/>
                        <path d="M0 0C8 24 32 24 40 0" stroke="#e5e7eb" strokeWidth="1" className="dark:stroke-gray-700"/>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <div className="text-lg md:text-xl font-semibold text-blue-700 dark:text-blue-400 signature-font">{stories[current].name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 italic">{stories[current].school}</div>
                  </div>
                </div>
                <button onClick={handleNext} aria-label="Next" className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition-all">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {stories.map((_, idx) => (
                  <span key={idx} className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-blue-200 dark:bg-blue-900'} transition-all`} />
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Testimonials/Stats Section - Animated Stat Cards */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-8 py-16">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">Trusted by Thousands of Learners</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, ...stats[0] },
            { icon: Star, ...stats[1] },
            { icon: Map, ...stats[2] },
            { icon: Globe, ...stats[3] },
            { icon: Users, ...stats[4] },
          ].map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-card">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gray-100 dark:bg-gray-800">
                <stat.icon className="w-7 h-7 text-blue-500 dark:text-blue-400" />
              </div>
              <AnimatedNumber value={stat.value} className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-1" />
              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
};

// Add this to your global CSS (e.g., tailwind.css or index.css):
// @keyframes horizontal-scroll {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
// .animate-horizontal-scroll {
//   animation-name: horizontal-scroll;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
// }
// .hover\:\[animation-play-state\:paused\]:hover {
//   animation-play-state: paused;
// }
// .min-w-max { min-width: max-content; }
// .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
// .scrollbar-hide::-webkit-scrollbar { display: none; }

function AnimatedNumber({ value, className = "" }: { value: string | number; className?: string }) {
  const [display, setDisplay] = React.useState(0);
  const isNumeric = typeof value === 'number' || (typeof value === 'string' && /^\d+[+]?$/g.test(value));
  React.useEffect(() => {
    let start = 0;
    let end = parseInt((value + "").replace(/\D/g, "")) || 0;
    if (isNaN(end)) {
      return;
    }
    let frame = 0;
    const totalFrames = 40;
    function animate() {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      setDisplay(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(end);
    }
    animate();
    // eslint-disable-next-line
  }, [value]);
  if (!isNumeric) return <span className={className}>{value}</span>;
  return <span className={className}>{typeof value === "string" && value.match(/\D/)
    ? `${display}${value.replace(/\d+/g, "")}`
    : display}</span>;
}
