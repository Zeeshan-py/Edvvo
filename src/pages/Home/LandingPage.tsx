import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, Search, Timer, X } from "lucide-react";
import { Link } from "react-router-dom";
import type globalResources from "@/utils/globalResources";
import { MotionCard } from "@/components/studio/MotionCard";
import { StudyScene, CardArt } from "@/components/studio/StudyArt";
import { HeroSection } from "./sections/HeroSection";
import { FooterSection } from "./sections/FooterSection";

const categories = [
  { title: "Build a study plan", description: "Turn subjects into small tasks you can finish.", kind: "books" as const, to: "/study-plan", label: "PLAN & PRIORITISE" },
  { title: "Practise one topic", description: "Use worked examples, a session builder and an error log.", kind: "notes" as const, to: "/revision-workshop", label: "ATTEMPT & CHECK" },
  { title: "Track past papers", description: "See which mistakes deserve your next revision session.", kind: "test" as const, to: "/past-paper-tracker", label: "RECORD & IMPROVE" },
  { title: "Choose a study method", description: "Match retrieval, spacing and practice to the problem.", kind: "career" as const, to: "/study-methods", label: "LEARN WITH PURPOSE" },
];
const tips = [
  { title: "Turn a chapter into a study session", text: "Choose one small topic. Read it once, close the book, and explain the idea in your own words. Check what you missed, then try a question without looking at the answer." },
  { title: "Make notes you will actually revisit", text: "Write questions in the margin instead of copying full paragraphs. Keep one example per concept and highlight only the step you find difficult. Use those questions to test yourself next time." },
  { title: "Plan your next revision", text: "End each session by noting one thing to review and one task to try next. Add them to your study planner. A specific task such as solving three equations is easier to begin than simply writing mathematics." },
];

export const LandingPage = () => {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(6);
  const [resources, setResources] = useState<typeof globalResources | null>(null);
  const [searchError, setSearchError] = useState(false);
  useEffect(() => {
    if (!query.trim() || resources) return;
    let active = true;
    const timer = setTimeout(() => {
      setSearchError(false);
      import('@/utils/globalResources').then(module => { if (active) setResources(module.default); }).catch(() => { if (active) setSearchError(true); });
    }, 150);
    return () => { active = false; clearTimeout(timer); };
  }, [query, resources]);
  const filtered = query.trim() ? (resources || []).filter(item =>
    [item.title, item.subject, item.description, ...(item.tags || [])].some(value => value?.toLowerCase().includes(query.trim().toLowerCase()))
  ).filter(item => {
    const url = item.downloadUrl || item.downloadLink;
    return typeof url === "string" && /^https?:\/\//i.test(url);
  }) : [];
  return <main className="ed-page">
    <HeroSection />
    <section className="ed-container home-hero">
      <div className="hero-copy">
        <span className="eyebrow"><span className="status-dot" /> FREE STUDY TOOLS. NO ACCOUNT.</span>
        <h1>Plan it.<br />Practise it.<br /><span>Know what changed.</span></h1>
        <p>A private study planner, revision workshop and past-paper tracker built for students who need a clear next step.</p>
        <div className="hero-actions"><Link to="/study-plan" className="ed-button">Build today's plan <ArrowUpRight size={18} /></Link><Link to="/study-methods" className="ed-text-link">Choose a method <ArrowRight size={17} /></Link></div>
        <div className="hero-footnote"><Check size={15} /> Your study data stays in this browser <span /> No sign-up</div>
      </div>
      <StudyScene />
    </section>

    <section className="ed-container discovery-bar" aria-label="Find study material">
      <div className="search-area">
        <Search size={20} aria-hidden="true" />
        <label className="sr-only" htmlFor="resource-search">Search books, notes and subjects</label>
        <input id="resource-search" type="search" placeholder="What are you learning today?" value={query}
          onChange={e => { setQuery(e.target.value); setLimit(6); }} onKeyDown={e => { if (e.key === "Escape") setQuery(""); }} />
        {query && <button className="ed-icon-button" onClick={() => setQuery("")} aria-label="Clear search"><X size={17} /></button>}
      </div>
      <div className="class-shortcuts"><span>Jump to class</span>{[9, 10, 11, 12].map(grade => <Link key={grade} to={`/explore?grade=class-${grade}`} aria-label={`Class ${grade} resources`}>{grade}</Link>)}</div>
    </section>
    {query.trim() && <section className="ed-container search-results" aria-label="Search results">
      <div className="search-result-heading"><h2>Results for &ldquo;{query}&rdquo;</h2><span role="status">{resources ? `${filtered.length} resources` : searchError ? 'Search unavailable' : 'Loading resources...'}</span></div>
      {filtered.length ? <><div className="result-list">{filtered.slice(0, limit).map((item, i) => <a key={`${item.id}-${i}`} href={item.downloadUrl || item.downloadLink} target="_blank" rel="noopener noreferrer">
        <BookOpen size={21} /><span><strong>{item.title}</strong><small>{item.subject} / {item.type} / Opens source website</small></span><ArrowUpRight size={18} /></a>)}</div>
        {filtered.length > limit && <button className="ed-button secondary" onClick={() => setLimit(limit + 12)}>Show more results <ChevronDown size={16} /></button>}</>
        : resources ? <p>No matches yet. Try a subject like Physics or browse the <Link to="/explore">resource library</Link>.</p> : searchError ? <p>Search could not load. Please try again or browse the <Link to="/explore">resource library</Link>.</p> : null}
    </section>}

    <section className="ed-container home-library">
      <div className="section-heading"><div><span className="eyebrow">YOUR STUDY SYSTEM</span><h2>Choose one useful next action.</h2></div><Link to="/explore" className="ed-text-link">Need a textbook? Browse resources <ArrowRight size={17} /></Link></div>
      <div className="resource-grid">{categories.map((card, i) => <MotionCard key={card.kind} delay={i * 75} className={`resource-card tone-${card.kind}`}>
        <Link to={card.to}><div className="card-top"><span>{card.label}</span><span className="card-arrow"><ArrowUpRight size={19} /></span></div><CardArt kind={card.kind} /><div className="card-copy"><h3>{card.title}</h3><p>{card.description}</p></div></Link>
      </MotionCard>)}</div>
    </section>

    <section className="ed-container study-strip">
      <div className="focus-feature"><div className="focus-dial" aria-hidden="true"><Timer size={22} /><strong>25:00</strong><span>ONE FOCUSED SESSION</span></div><div><span className="eyebrow">LESS SCROLLING. MORE DOING.</span><h2>Make time<br />for your next win.</h2><Link className="ed-button" to="/focus-timer">Let's focus <ArrowRight size={17} /></Link></div></div>
      <div className="study-links"><Link to="/study-plan"><span className="tool-number">01</span><span><strong>Plan your study day</strong><small>One task at a time.</small></span><ArrowUpRight size={21} /></Link><Link to="/past-paper-tracker"><span className="tool-number">02</span><span><strong>Track a paper attempt</strong><small>Turn marks into a retry.</small></span><ArrowUpRight size={21} /></Link><Link to="/revision-workshop"><span className="tool-number">03</span><span><strong>Practise with feedback</strong><small>Worked examples and an error log.</small></span><ArrowUpRight size={21} /></Link></div>
    </section>

    <section className="ed-container learning-notes">
      <div><span className="eyebrow">A NOTE FOR YOUR NEXT SESSION</span><h2>Better habits.<br />One day at a time.</h2><p>You don't need to do everything today.<br />Start with one thing you can finish.</p></div>
      <div className="tips-list">{tips.map((tip, i) => <details key={tip.title}><summary><span>0{i + 1}</span>{tip.title}<ChevronDown size={17} /></summary><p>{tip.text}</p></details>)}</div>
    </section>
    <FooterSection />
  </main>;
};
