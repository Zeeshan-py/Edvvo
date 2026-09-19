import { BookOpen, FileText, Brain, ArrowUpRight, Library } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";
import MindSprint from "./MindSprint";
import { books as books9 } from "./books/Class9Books";
import { books as books10 } from "./books/Class10Books";
import { books as books11 } from "./books/Class11Books";
import { books as books12 } from "./books/Class12Books";
import { categories as notes9 } from "./notes/Class9notes";
import { categories as notes10 } from "./notes/Class10notes";
import { categories as notes11 } from "./notes/Class11notes";
import { categories as notes12 } from "./notes/Class12notes";
import { ResourceCollection } from "@/components/studio/ResourceCollection";

const gradeKeys = ["class-9", "class-10", "class-11", "class-12"];
const boardOptions = [
  { id: "punjab-board", label: "Punjab Board" },
  { id: "sindh-board", label: "Sindh Board" },
  { id: "past-papers", label: "Past papers" },
];
const modes = [{ id: "books", label: "Textbooks", icon: BookOpen }, { id: "notes", label: "Notes & solutions", icon: FileText }, { id: "mind-sprint", label: "Practice", icon: Brain }];

export const ExplorePage = () => {
  const [params, setParams] = useSearchParams();
  const grade = gradeKeys.includes(params.get("grade") || "") ? params.get("grade")! : "class-9";
  const board = boardOptions.find(b => b.id === params.get("board")) || boardOptions[0];
  const mode = modes.find(m => m.id === params.get("type")) || modes[0];
  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    next.set(key, value);
    setParams(next, { preventScrollReset: true });
  };
  const books = [books9, books10, books11, books12][gradeKeys.indexOf(grade)];
  const notes = [notes9, notes10, notes11, notes12][gradeKeys.indexOf(grade)].flatMap(category =>
    category.resources.map(resource => ({ ...resource, subject: category.title })));

  return <main className="ed-page"><HeroSection />
    <section className="ed-container page-intro"><div><span className="eyebrow">THE RESOURCE LIBRARY</span><h1>Your next chapter.</h1><p>Choose your board and class. Find what you need.</p></div><Link to="/scholarly-vault" className="ed-text-link">Beyond the syllabus <ArrowUpRight size={17} /></Link></section>
    <section className="ed-container" aria-label="Choose resources">
      <div className="library-controls">
        <div className="control-group"><label htmlFor="board-select">Board</label><select id="board-select" value={board.id} onChange={e => set("board", e.target.value)}>{boardOptions.map(b => <option key={b.id} value={b.id}>{b.label}</option>)}</select></div>
        <div className="control-group" role="group" aria-label="Select class"><span>Class</span>{gradeKeys.map((g, i) => <button key={g} className="grade-button" aria-pressed={g === grade} onClick={() => set("grade", g)}>{i + 9}</button>)}</div>
      </div>
      <div className="library-tabs" role="group" aria-label="Resource type">{modes.map(m => <button key={m.id} aria-pressed={mode.id === m.id} onClick={() => set("type", m.id)}><m.icon size={16} />{m.label}</button>)}</div>
      <div className="resource-detail" key={`${board.id}-${grade}-${mode.id}`}>
        {mode.id === "mind-sprint" ? <MindSprint classLevel={grade} boardName={board.label} onBack={() => set("type", "books")} hideHeader />
          : board.id === "punjab-board" ? <ResourceCollection resources={mode.id === "books" ? books : notes} grade={grade} kind={mode.id === "books" ? "books" : "notes"} />
          : <div className="empty-library"><Library size={32} className="mx-auto" /><h2>This collection isn't available yet.</h2><p>{board.label} resources for Class {grade.split("-")[1]} have not been added here. You can browse the Punjab collection or find other material in the scholarly vault.</p><button className="ed-button" onClick={() => set("board", "punjab-board")}>Browse Punjab resources <ArrowUpRight size={16} /></button></div>}
      </div>
      <nav className="portal-links" aria-label="More resources">{[{to: "/board/punjab-board", label: "Punjab Board overview"}, {to: "/entry-test", label: "Entry tests"}, {to: "/result", label: "Board results"}, {to: "/academic-explorer", label: "Explore careers"}, {to: "/scholarly-vault", label: "Scholarly vault"}].map(n => <Link to={n.to} key={n.to}>{n.label}<ArrowUpRight size={15} /></Link>)}</nav>
    </section><FooterSection />
  </main>;
};
