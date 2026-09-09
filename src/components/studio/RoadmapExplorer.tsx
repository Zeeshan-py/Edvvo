import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, ChevronDown, Clock, Code2, Compass, Cpu, Gamepad2, HeartPulse, Layers, Palette, Search, Shield, TrendingUp } from "lucide-react";
import { MotionCard } from "@/components/studio/MotionCard";
import { HeroSection } from "@/pages/Home/sections/HeroSection";
import { FooterSection } from "@/pages/Home/sections/FooterSection";

interface Step {
  name: string;
  description?: string;
  code?: string;
  subtopics?: { title: string; detail: string; code?: string }[];
  resources?: { label: string; url: string }[];
}
interface Roadmap {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  steps: Step[];
}
const icons = [Code2, Palette, HeartPulse, Cpu, Shield, Layers, TrendingUp, Gamepad2];
const tones = ["books", "notes", "career", "test"];
export function RoadmapExplorer({ roadmaps }: { roadmaps: Roadmap[] }) {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const lessonHeading = useRef<HTMLHeadingElement>(null);
  const lastSelection = useRef(params.toString());
  const selected = roadmaps.find(r => String(r.id) === params.get("path"));
  const stepNumber = Number(params.get("step") || "1");
  const stepIndex = selected && Number.isInteger(stepNumber) && stepNumber >= 1 && stepNumber <= selected.steps.length ? stepNumber - 1 : 0;
  const step = selected?.steps[stepIndex];
  useEffect(() => {
    if (lastSelection.current !== params.toString() && selected) {
      lessonHeading.current?.focus({ preventScroll: true });
      lessonHeading.current?.scrollIntoView({ block: "start", behavior: "instant" as ScrollBehavior });
    }
    lastSelection.current = params.toString();
  }, [params, selected]);
  const chooseStep = (index: number) => {
    if (selected) setParams({ path: String(selected.id), step: String(index + 1) }, { preventScrollReset: true });
  };
  const filtered = roadmaps.filter(r => (level === "all" || (level === "beginner" ? r.difficulty.startsWith("Beginner") : !r.difficulty.startsWith("Beginner")))
    && [r.title, r.description, ...r.steps.map(s => s.name)].some(text => text.toLowerCase().includes(query.trim().toLowerCase())));

  return <main className="ed-page"><HeroSection />
    {!selected ? <>
      <section className="ed-container page-intro">
        <div><span className="eyebrow">LEARNING ROADMAPS</span><h1>A direction for your ambition.</h1><p>Pick a path. Learn one thing. Keep going.</p></div>
        <Link to="/entertainment" className="ed-text-link">Study space <ArrowUpRight size={17} /></Link>
      </section>
      <section className="ed-container roadmap-discovery" aria-label="Browse roadmaps">
        <div className="roadmap-toolbar">
          <div className="search-area"><Search size={19} /><label className="sr-only" htmlFor="roadmap-search">Search roadmaps and topics</label><input id="roadmap-search" type="search" placeholder="Find a skill or a topic..." value={query} onChange={e => setQuery(e.target.value)} /></div>
          <div className="roadmap-filters" role="group" aria-label="Starting level">{[{id:"all",label:"All paths"},{id:"beginner",label:"Start from scratch"},{id:"next",label:"Build on your skills"}].map(f => <button key={f.id} aria-pressed={level === f.id} onClick={() => setLevel(f.id)}>{f.label}</button>)}</div>
        </div>
        <div className="roadmap-count"><span role="status">{filtered.length} {filtered.length === 1 ? "path" : "paths"} to explore</span><span>At your own pace</span></div>
        <div className="roadmap-grid">{filtered.map((roadmap) => {
          const index = roadmaps.indexOf(roadmap);
          const Icon = icons[index % icons.length];
          return <MotionCard key={roadmap.id} delay={index * 45} className="roadmap-card"><Link to={`/roadmaps?path=${roadmap.id}&step=1`}>
            <div className={`roadmap-art tone-${tones[index % tones.length]}`} aria-hidden="true"><span className="roadmap-path-line" /><span className="roadmap-node node-a" /><span className="roadmap-node node-b" /><span className="roadmap-node node-c" /><span className="roadmap-art-icon"><Icon size={32} strokeWidth={1.6} /></span><span className="roadmap-art-label">PATH {String(index + 1).padStart(2,"0")}</span><ArrowUpRight className="roadmap-art-arrow" size={20} /></div>
            <div className="roadmap-card-body"><span className="roadmap-level">{roadmap.difficulty.startsWith("Beginner") ? "Start from the basics" : roadmap.difficulty === "Advanced" ? "Advanced path" : "Some foundations needed"}</span><h2>{roadmap.title.replace(/ Roadmap$/, "")}</h2><p>{roadmap.description}</p>
              <div className="roadmap-card-meta"><span><BookOpen size={14} />{roadmap.steps.length} steps</span><span><Clock size={14} />{roadmap.duration} est.</span></div>
              <div className="roadmap-start"><span>Explore path</span><ArrowRight size={17} /></div>
            </div>
          </Link></MotionCard>;
        })}</div>
        {!filtered.length && <div className="empty-library"><Compass size={32} className="mx-auto" /><h2>No paths found.</h2><p>Try a topic such as design, HTML or robotics.</p><button className="ed-button secondary" onClick={() => { setQuery(""); setLevel("all"); }}>Clear filters</button></div>}
        <div className="roadmap-footnote"><Compass size={19} /><p>Use these paths as a guide, not a deadline. Timelines are estimates; follow source links for current requirements.</p></div>
      </section>
    </> : step && <>
      <section className="ed-container roadmap-heading">
        <Link className="ed-text-link" to="/roadmaps"><ArrowLeft size={16} />All roadmaps</Link>
        <div className="page-intro"><div><span className="eyebrow">YOUR LEARNING PATH</span><h1>{selected.title.replace(/ Roadmap$/, "")}</h1><p>{selected.description}</p></div><span className="roadmap-step-total">{selected.steps.length} steps / {selected.duration} estimated</span></div>
      </section>
      <div className="ed-container roadmap-reader">
        <aside className="roadmap-sidebar" aria-label="Learning steps"><div className="roadmap-sidebar-heading"><strong>The path ahead</strong><span>{selected.steps.length} steps</span></div>
          <ol>{selected.steps.map((s, index) => <li key={s.name}><button aria-current={index === stepIndex ? "step" : undefined} onClick={() => chooseStep(index)}><span>{String(index + 1).padStart(2,"0")}</span><span>{s.name}</span>{index === stepIndex && <ArrowRight size={14} />}</button></li>)}</ol>
        </aside>
        <div className="roadmap-mobile-select"><label htmlFor="roadmap-step">Choose a step</label><select id="roadmap-step" value={stepIndex} onChange={e => chooseStep(Number(e.target.value))}>{selected.steps.map((s,index) => <option value={index} key={s.name}>{index + 1}. {s.name}</option>)}</select></div>
        <article className="roadmap-lesson" key={`${selected.id}-${stepIndex}`}>
          <span className="eyebrow">STEP {String(stepIndex + 1).padStart(2,"0")} OF {selected.steps.length}</span>
          <h2 ref={lessonHeading} tabIndex={-1}>{step.name}</h2>
          {step.description && <p className="lesson-description">{step.description}</p>}
          {step.subtopics && <section className="lesson-topics"><h3>Break it down</h3>{step.subtopics.map((topic,index) => <details key={topic.title} open={index === 0}><summary><span>{String(index + 1).padStart(2,"0")}</span>{topic.title}<ChevronDown size={17} /></summary><div><p>{topic.detail}</p>{topic.code && <pre tabIndex={0} aria-label={`Code example: ${topic.title}`}><code>{topic.code}</code></pre>}</div></details>)}</section>}
          {step.code && <section className="lesson-topics"><h3>Code example</h3><pre tabIndex={0}><code>{step.code}</code></pre></section>}
          {!!step.resources?.length && <section className="lesson-resources"><h3>Take it further</h3><p>Continue learning on these source websites.</p>{step.resources.map(resource => <a key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer">{resource.label}<ArrowUpRight size={17} /><span className="sr-only">(opens in a new tab)</span></a>)}</section>}
          <nav className="lesson-navigation" aria-label="Navigate steps"><button className="ed-button secondary" disabled={stepIndex === 0} onClick={() => chooseStep(stepIndex - 1)}><ArrowLeft size={16} />Previous</button><span>{stepIndex + 1} / {selected.steps.length}</span>{stepIndex < selected.steps.length - 1 ? <button className="ed-button" onClick={() => chooseStep(stepIndex + 1)}>Next step <ArrowRight size={16} /></button> : <Link className="ed-button" to="/roadmaps">All paths <ArrowUpRight size={16} /></Link>}</nav>
        </article>
      </div>
    </>}
    <FooterSection />
  </main>;
}
