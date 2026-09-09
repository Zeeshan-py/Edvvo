import { useState } from "react";
import { ArrowUpRight, BookOpen, FileText, Search } from "lucide-react";
import { MotionCard } from "./MotionCard";

export interface StudyResource {
  id: string;
  title: string;
  subject: string;
  description: string;
  tags?: string[];
  language?: string;
  downloadUrl?: string;
  downloadLink?: string;
}

export function ResourceCollection({ resources, grade, kind }: { resources: StudyResource[]; grade: string; kind: "books" | "notes" }) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState("");
  const [limit, setLimit] = useState(12);
  const subjects = [...new Set(resources.map(item => item.subject))];
  const languages = [...new Set(resources.map(item => item.language?.toLowerCase()).filter(Boolean))];
  const filtered = resources.filter(item => (!subject || item.subject === subject)
    && (!language || item.language?.toLowerCase() === language)
    && [item.title, item.subject, item.description, ...(item.tags || [])].some(text => text.toLowerCase().includes(query.toLowerCase())));
  return <div className="collection">
    <div className="collection-search">
      <div className="search-area"><Search size={18} /><label htmlFor="collection-query" className="sr-only">Search this collection</label><input id="collection-query" value={query} onChange={e => { setQuery(e.target.value); setLimit(12); }} placeholder="Search this collection..." type="search" /></div>
      <label className="sr-only" htmlFor="collection-subject">Filter by subject</label><select id="collection-subject" value={subject} onChange={e => { setSubject(e.target.value); setLimit(12); }}><option value="">All subjects</option>{subjects.map(s => <option key={s}>{s}</option>)}</select>
      {languages.length > 0 && <><label className="sr-only" htmlFor="collection-language">Filter by language</label><select id="collection-language" value={language} onChange={e => { setLanguage(e.target.value); setLimit(12); }}><option value="">All languages</option>{languages.map(l => <option key={l} value={l}>{l}</option>)}</select></>}
    </div>
    <div className="collection-caption"><h2>Class {grade.split("-")[1]} / {kind === "books" ? "Textbooks" : "Notes & solutions"}</h2><span role="status">{filtered.length} resources</span></div>
    <div className="collection-grid">{filtered.slice(0, limit).map((item, i) => {
      const url = item.downloadUrl || item.downloadLink;
      const validUrl = url && /^https?:\/\//i.test(url);
      return <MotionCard className="collection-card" delay={Math.min(i * 40, 240)} key={item.id}>
        <div className={`collection-cover tone-${["books", "career", "notes", "test"][subjects.indexOf(item.subject) % 4]}`} aria-hidden="true">{kind === "books" ? <BookOpen size={35} strokeWidth={1.3} /> : <FileText size={35} strokeWidth={1.3} />}<strong>{item.subject}</strong><span>CLASS {grade.split("-")[1]}</span></div>
        <div className="collection-copy"><span>{kind === "books" ? item.language || "Textbook" : "Study notes"}</span><h3>{item.title}</h3><p>{item.description}</p>{validUrl ? <a href={url} target="_blank" rel="noopener noreferrer" className="ed-text-link">Open source <ArrowUpRight size={16} /><span className="sr-only">for {item.title} (new tab)</span></a> : <span>Source unavailable</span>}</div>
      </MotionCard>;
    })}</div>
    {!filtered.length && <div className="empty-library"><h2>No matching resources.</h2><p>Try a different subject or clear your filters.</p><button className="ed-button secondary" onClick={() => { setQuery(""); setSubject(""); setLanguage(""); }}>Clear filters</button></div>}
    {filtered.length > limit && <button className="ed-button secondary collection-more" onClick={() => setLimit(v => v + 12)}>Show more resources <ArrowUpRight size={16} /></button>}
  </div>;
}
