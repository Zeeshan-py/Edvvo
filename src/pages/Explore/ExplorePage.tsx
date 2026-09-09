import React, { useMemo, useState } from "react";
import { Brain, BookOpen, FileText, GraduationCap, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";
import MindSprint from "./MindSprint";
import Class9Books from "./books/Class9Books";
import Class10Books from "./books/Class10Books";
import Class11Books from "./books/Class11Books";
import Class12Books from "./books/Class12Books";
import Class9notes from "./notes/Class9notes";
import Class10notes from "./notes/Class10notes";
import { Class11notes } from "./notes/Class11notes";
import Class12notes from "./notes/Class12notes";

type BoardId = "punjab-board" | "sindh-board" | "past-papers";
type GradeId = "class-9" | "class-10" | "class-11" | "class-12";
type CategoryId = "books" | "notes" | "mind-sprint";

const boards = [
  {
    id: "punjab-board" as BoardId,
    title: "Punjab Board",
    description: "High-demand resources for classes 9 to 12 with the smoothest access path.",
    accent: "from-sky-500 to-blue-600",
    badge: "Most used",
  },
  {
    id: "sindh-board" as BoardId,
    title: "Sindh Board",
    description: "A growing collection for Sindh students with a cleaner browsing experience.",
    accent: "from-emerald-500 to-teal-600",
    badge: "Expanding",
  },
  {
    id: "past-papers" as BoardId,
    title: "Past Papers",
    description: "Quick route to exam-focused preparation across boards and classes.",
    accent: "from-amber-500 to-orange-600",
    badge: "Exam mode",
  },
];

const grades = [
  { id: "class-9" as GradeId, title: "Class 9", count: 700 },
  { id: "class-10" as GradeId, title: "Class 10", count: 800 },
  { id: "class-11" as GradeId, title: "Class 11", count: 800 },
  { id: "class-12" as GradeId, title: "Class 12", count: 890 },
];

const categories = [
  {
    id: "books" as CategoryId,
    title: "Books",
    description: "Open textbooks and subject material fast.",
    icon: BookOpen,
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "notes" as CategoryId,
    title: "Notes & Solutions",
    description: "Go straight to summaries, solved work, and revision support.",
    icon: FileText,
    accent: "from-violet-500 to-indigo-600",
  },
  {
    id: "mind-sprint" as CategoryId,
    title: "Mind Sprint",
    description: "Practice with AI-style MCQ sessions for active recall.",
    icon: Brain,
    accent: "from-fuchsia-500 to-rose-600",
  },
];

const portalCards = [
  {
    title: "Scholarly Vault",
    description: "Dive into deeper academic resources and field-based material.",
    link: "/scholarly-vault",
  },
  {
    title: "Academic Explorer",
    description: "Browse fields and discover what to study next.",
    link: "/academic-explorer",
  },
  {
    title: "Entry Test Prep",
    description: "Reach test preparation without hunting through the site.",
    link: "/entry-test",
  },
  {
    title: "Result Portal",
    description: "Jump straight to board result routes and result access.",
    link: "/result",
  },
];

export const ExplorePage = () => {
  const [selectedBoard, setSelectedBoard] = useState<BoardId | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<GradeId | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);

  const selectedBoardData = useMemo(
    () => boards.find((board) => board.id === selectedBoard),
    [selectedBoard],
  );
  const selectedGradeData = useMemo(
    () => grades.find((grade) => grade.id === selectedGrade),
    [selectedGrade],
  );
  const selectedCategoryData = useMemo(
    () => categories.find((category) => category.id === selectedCategory),
    [selectedCategory],
  );

  const resetFlow = () => {
    setSelectedBoard(null);
    setSelectedGrade(null);
    setSelectedCategory(null);
  };

  const renderSelectedContent = () => {
    if (!selectedBoard || !selectedGrade || !selectedCategory) {
      return null;
    }

    if (selectedCategory === "mind-sprint") {
      return (
        <MindSprint
          classLevel={selectedGrade}
          boardName={selectedBoardData?.title || "Punjab Board"}
          onBack={() => setSelectedCategory(null)}
          hideHeader={true}
        />
      );
    }

    if (selectedBoard === "punjab-board" && selectedCategory === "books") {
      if (selectedGrade === "class-9") return <Class9Books />;
      if (selectedGrade === "class-10") return <Class10Books />;
      if (selectedGrade === "class-11") return <Class11Books />;
      if (selectedGrade === "class-12") return <Class12Books />;
    }

    if (selectedBoard === "punjab-board" && selectedCategory === "notes") {
      if (selectedGrade === "class-9") return <Class9notes />;
      if (selectedGrade === "class-10") return <Class10notes />;
      if (selectedGrade === "class-11") return <Class11notes />;
      if (selectedGrade === "class-12") return <Class12notes />;
    }

    return (
      <div className="app-card-3d rounded-[28px] p-8 text-center">
        <div className="mx-auto inline-flex rounded-2xl bg-slate-950 p-4 text-white dark:bg-white dark:text-slate-950">
          <Layers3 className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-slate-950 dark:text-white">
          More resources are on the way
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          This part of the library is being refreshed. For now, try Scholarly Vault or Academic Explorer
          from the quick portals below.
        </p>
      </div>
    );
  };

  return (
    <main className="page-shell min-h-screen">
      <HeroSection />

      <section className="section-shell relative z-10 py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="section-kicker">Explore Hub</div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-5xl">
              Reach your board, class, and study material
              <span className="text-gradient"> without the clutter</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              The new explore experience reduces noise and helps students move in a simple order:
              board, class, then the exact type of material they need.
            </p>
          </div>

          <div className="app-card-3d mesh-surface rounded-[32px] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Boards", value: "3" },
                { label: "Classes", value: "4" },
                { label: "Modes", value: "Books • Notes • Practice" },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] bg-white/82 p-5 dark:bg-slate-950/55">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                  <div className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {!selectedBoard && (
          <>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {boards.map((board) => (
                <button
                  key={board.id}
                  type="button"
                  onClick={() => {
                    setSelectedBoard(board.id);
                    setSelectedGrade(null);
                    setSelectedCategory(null);
                  }}
                  className="app-card-3d rounded-[30px] p-6 text-left"
                >
                  <div className={`inline-flex rounded-2xl bg-gradient-to-br ${board.accent} p-3 text-white shadow-lg`}>
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h2 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                      {board.title}
                    </h2>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:bg-white/10 dark:text-slate-300">
                      {board.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{board.description}</p>
                  <div className="mt-5 text-sm font-semibold text-sky-700 dark:text-sky-200">Choose board</div>
                </button>
              ))}
            </div>

            <div className="mt-16">
              <div className="section-kicker">Quick Portals</div>
              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {portalCards.map((card) => (
                  <Link key={card.title} to={card.link} className="app-card-3d rounded-[28px] p-6">
                    <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{card.description}</p>
                    <div className="mt-5 text-sm font-semibold text-sky-700 dark:text-sky-200">Open portal</div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {selectedBoard && !selectedGrade && (
          <div className="mt-12">
            <button
              type="button"
              onClick={resetFlow}
              className="app-button-secondary px-4 py-2.5"
            >
              Back to boards
            </button>
            <div className="mt-6 app-card-3d rounded-[32px] p-7">
              <div className="section-kicker">Step 2</div>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-950 dark:text-white">
                Choose your class for {selectedBoardData?.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Students should be able to scan this in seconds, so only the four grade choices stay in focus.
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {grades.map((grade) => (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => setSelectedGrade(grade.id)}
                  className="app-card-3d rounded-[28px] p-6 text-left"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{grade.count}+ items</div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-white">
                    {grade.title}
                  </h3>
                  <p className="mt-4 text-sm font-semibold text-sky-700 dark:text-sky-200">
                    Continue to resources
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedBoard && selectedGrade && !selectedCategory && (
          <div className="mt-12">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setSelectedGrade(null)}
                className="app-button-secondary px-4 py-2.5"
              >
                Back to classes
              </button>
              <button type="button" onClick={resetFlow} className="app-button-secondary px-4 py-2.5">
                Start over
              </button>
            </div>

            <div className="mt-6 app-card-3d rounded-[32px] p-7">
              <div className="section-kicker">Step 3</div>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-950 dark:text-white">
                Pick the study mode for {selectedGradeData?.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Books for full material, notes for revision, and Mind Sprint for active practice.
              </p>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className="app-card-3d rounded-[28px] p-6 text-left"
                  >
                    <div className={`inline-flex rounded-2xl bg-gradient-to-br ${category.accent} p-3 text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-slate-950 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {category.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {selectedBoard && selectedGrade && selectedCategory && (
          <div className="mt-12">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="app-button-secondary px-4 py-2.5"
              >
                Back to study modes
              </button>
              <button type="button" onClick={resetFlow} className="app-button-secondary px-4 py-2.5">
                Start over
              </button>
            </div>

            <div className="mt-6 app-card-3d rounded-[32px] p-7">
              <div className="section-kicker">Now Open</div>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-950 dark:text-white">
                {selectedCategoryData?.title} for {selectedBoardData?.title} {selectedGradeData?.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                This content now opens inside the redesigned explore flow so students stay oriented.
              </p>
            </div>

            <div className="mt-8">{renderSelectedContent()}</div>
          </div>
        )}
      </section>

      <FooterSection />
    </main>
  );
};
