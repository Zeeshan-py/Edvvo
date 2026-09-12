import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, BookOpen, GraduationCap, Cpu, DollarSign, Leaf,
  Heart, Users, Palette, Scale, School, Wheat, ChevronRight
} from "lucide-react";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { MotionCard } from '@/components/studio/MotionCard';
import { Search, ArrowUpRight } from 'lucide-react';

const academicFields = [
  {
    id: "islamic-studies",
    title: "Islamic Studies",
    description: "Explore Islamic theology, jurisprudence, and religious studies.",
    icon: BookOpen,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/islamic-studies"
  },
  {
    id: "engineering-applied-sci",
    title: "Engineering & Applied Sci.",
    description: "Comprehensive resources for all engineering disciplines and applied sciences.",
    icon: GraduationCap,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/engineering-applied-science"
  },
  {
    id: "computer-science-it",
    title: "Computer Science & IT",
    description: "Programming, software development, and information technology resources.",
    icon: Cpu,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/computer-science"
  },
  {
    id: "business-finance",
    title: "Business & Finance",
    description: "Business management, finance, and economics resources.",
    icon: DollarSign,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/business-finance"
  },
  {
    id: "natural-biological-sci",
    title: "Natural & Biological Sci.",
    description: "Biology, chemistry, physics, and environmental sciences.",
    icon: Leaf,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/natural-biological-sciences"
  },
  {
    id: "health-paramedical",
    title: "Health & Para‑Medical",
    description: "Medical, dental, and paramedical sciences resources.",
    icon: Heart,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/health-paramedical"
  },
  {
    id: "social-sciences-humanities",
    title: "Social Sciences & Humanities",
    description: "Sociology, psychology, history, and other humanities.",
    icon: Users,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/social-sciences-humanities"
  },
  {
    id: "architecture-design",
    title: "Architecture & Design",
    description: "Architecture, interior design, and graphic design studies.",
    icon: Palette,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/architecture-design"
  },
  {
    id: "law",
    title: "Law",
    description: "Legal education, jurisprudence, and specialized law programs.",
    icon: Scale,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/law"
  },
  {
    id: "education",
    title: "Education",
    description: "Teaching, educational psychology, and curriculum development.",
    icon: School,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/education"
  },
  {
    id: "agriculture-vet",
    title: "Agriculture & Vets",
    description: "Agricultural sciences, veterinary medicine, and animal care.",
    icon: Wheat,
    color: " ",
    bgPattern: "ed-tint    ",
    path: "/agriculture-vet"
  }
];

export const AcademicExplorer = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const visible = academicFields.filter(field => (field.title + " " + field.description).toLowerCase().includes(query.toLowerCase()));
  return <main className="ed-page"><HeroSection />
    <section id="study-content" className="ed-container page-intro"><div><span className="eyebrow">YOUR NEXT DIRECTION</span><h1>Find a field that fits.</h1><p>Explore subjects, then check programs with the university.</p></div><Link to="/explore" className="ed-text-link">Back to library <ArrowUpRight size={17} /></Link></section>
    <section className="ed-container" aria-label="Academic fields">
      <div className="collection-search"><div className="search-area"><Search size={18} /><label className="sr-only" htmlFor="field-search">Search academic fields</label><input id="field-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Find a subject or career..." /></div></div>
      <div className="directory-grid">{visible.map((field, index) => <MotionCard key={field.id} className="directory-card" delay={index * 35}><Link to={field.path}><span className="directory-icon"><field.icon size={26} /></span><h2>{field.title}</h2><p>{field.description}</p><span className="ed-text-link">Explore field <ArrowUpRight size={16} /></span></Link></MotionCard>)}</div>
      {visible.length === 0 && <div className="empty-library"><h2>No matching fields.</h2><p>Try a broader subject or clear your search.</p><button className="ed-button secondary" onClick={() => setQuery("")}>Show all fields</button></div>}
      <aside className="directory-note"><GraduationCap size={24} /><p>Programs and admissions change. These directories are starting points for research; verify availability, accreditation and entry requirements on the institution's official website.</p></aside>
    </section><FooterSection /></main>;
};
