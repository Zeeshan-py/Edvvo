import { ArrowUpRight, CalendarCheck, Timer, Map, FileText, Calculator, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { MotionCard } from "@/components/studio/MotionCard";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";

const tools = [
  { title: "Focus timer", description: "Pick a task. Set a timer. Give it your attention.", icon: Timer, to: "/focus-timer", category: "FOCUS", tone: "career" },
  { title: "Study planner", description: "Make a little room for everything that matters.", icon: CalendarCheck, to: "/study-plan", category: "ORGANISE", tone: "books" },
  { title: "Learning roadmaps", description: "A clear path from your first step to your next skill.", icon: Map, to: "/roadmaps", category: "BUILD SKILLS", tone: "notes" },
  { title: "Practical guides", description: "Work through ideas with step-by-step explanations.", icon: FileText, to: "/solutions", category: "UNDERSTAND", tone: "test" },
  { title: "Scientific calculator", description: "Work through the numbers with Desmos.", icon: Calculator, to: "https://www.desmos.com/scientific", category: "EXTERNAL TOOL", tone: "books" },
  { title: "Resource library", description: "Keep your books and notes close at hand.", icon: BookOpen, to: "/explore", category: "READ & REVISE", tone: "career" },
];
export const EntertainmentPage = () => <main className="ed-page"><HeroSection />
  <section className="ed-container page-intro"><div><span className="eyebrow">YOUR STUDY SPACE</span><h1>A little focus goes a long way.</h1><p>Simple tools. Fewer distractions. A good place to start.</p></div></section>
  <section className="ed-container workspace-grid" aria-label="Study tools">{tools.map((tool, i) => {
    const content = <><div className="workspace-symbol"><tool.icon className={`tone-${tool.tone}`} strokeWidth={1.6} /><span>{tool.category}</span></div><h2>{tool.title}</h2><p>{tool.description}</p><span className="ed-text-link">{tool.to.startsWith("http") ? "Open Desmos" : "Open tool"}<ArrowUpRight size={17} /></span></>;
    return <MotionCard key={tool.title} delay={i * 60} className="workspace-card">{tool.to.startsWith("http") ? <a href={tool.to} target="_blank" rel="noopener noreferrer">{content}</a> : <Link to={tool.to}>{content}</Link>}</MotionCard>;
  })}</section>
  <section className="ed-container learning-notes"><div><span className="eyebrow">START SMALL</span><h2>One task is enough<br />to get going.</h2></div><div className="tips-list"><details><summary>How should I use these tools?<ArrowUpRight size={17} /></summary><p>Choose a topic from the library, add one specific task to your planner, and start a focus session. When you finish, write down what you understood and what needs another try.</p></details><details><summary>Will my study plan be saved?<ArrowUpRight size={17} /></summary><p>The planner uses this browser's local storage. Use the same browser to return to your plan. Clearing browser data can remove saved tasks; there is no account sync.</p></details></div></section>
  <FooterSection />
</main>;
