import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { HeroSection } from '@/pages/Home/sections/HeroSection';
import { FooterSection } from '@/pages/Home/sections/FooterSection';

interface DirectoryCategory {
  id: string;
  title: string;
  description: string;
  resources: { id: string; title: string; description: string; tags: string[]; downloadLink: string; difficulty: string }[];
}

export function LearningDirectory({ categories, entrance = false }: { categories: DirectoryCategory[]; entrance?: boolean }) {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(12);
  const selected = categories.find(category => category.id === params.get('category'));
  const resources = (selected ? [selected] : categories).flatMap(category => category.resources.map(resource => ({ ...resource, category: category.title })));
  const visible = resources.filter(resource => `${resource.title} ${resource.description} ${resource.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()));
  return <main className="ed-page"><HeroSection /><div className="ed-container article-page">
    <header className="page-intro"><div><span className="eyebrow">{entrance ? 'BEFORE THE ADMISSION TEST' : 'BEYOND THE SYLLABUS'}</span><h1>{entrance ? 'Prepare with a purpose.' : 'The scholarly vault.'}</h1><p>{entrance ? 'Choose material that matches your test, then practise the skills it actually measures.' : 'Choose a topic, work through a useful source, and turn reading into something you can explain.'}</p></div></header>
    <section className="directory-note"><div><h2>{entrance ? 'Build a preparation sequence' : 'Use the library as a study route'}</h2>
      <p>{entrance ? 'Start with the current syllabus and test format on the institution or test provider website. Write down the subject split, question types, time limit and marking rules. A book labelled for a test can still cover an older format; compare its contents with your current requirements before spending a week on it.' : 'A long reading list is not a study plan. Pick one question you want to answer, check the source prerequisites, and attempt an example before reading the explanation. If the terminology is unfamiliar, return to an introductory source rather than opening several advanced textbooks at once.'}</p>
      <p>{entrance ? 'For a 60-minute practice block, spend 10 minutes recalling a topic, 35 minutes answering questions under your test rules, and 15 minutes reviewing errors. Separate gaps in knowledge from timing mistakes. Repeat a missed question later without looking at the solution, and record why your first approach failed.' : 'For a first session, skim the chapter headings, choose a small section and write a three-sentence explanation in your own words. Solve one exercise and compare the method with the source. Keep the page number and a specific unanswered question so the next session has a starting point.'}</p>
      <p>{entrance ? 'Preparation resources are not admission notices. Confirm eligibility, fees and dates directly with the institution. This directory does not guarantee a score or a place.' : 'These are external resources, not Edvvo-authored textbooks. A reference book is not automatically aligned with your board syllabus. Confirm the title, edition, publisher and permitted use at the destination.'}</p>
      <Link className="ed-text-link" to="/revision-workshop">Try a worked revision session <ArrowUpRight size={16} /></Link>
    </div></section>
    <section aria-label="Find learning resources">
      <div className="collection-search">
        <div className="search-area"><Search size={18} /><label className="sr-only" htmlFor="directory-search">Search resource titles and topics</label><input id="directory-search" type="search" value={query} onChange={event => { setQuery(event.target.value); setLimit(12); }} placeholder="Search a title or topic" /></div>
        <label className="sr-only" htmlFor="directory-category">Subject collection</label><select id="directory-category" value={selected?.id || ''} onChange={event => { const next = new URLSearchParams(params); if (event.target.value) next.set('category', event.target.value); else next.delete('category'); setParams(next); setLimit(12); }}><option value="">All collections</option>{categories.filter(category => category.resources.length).map(category => <option key={category.id} value={category.id}>{category.title} ({category.resources.length})</option>)}</select>
      </div>
      <div className="collection-caption"><h2>{selected?.title || 'Resource collection'}</h2><span role="status">{visible.length} matching resources</span></div>
      <div className="directory-grid">{visible.slice(0, limit).map(resource => {
        let destination: URL | undefined;
        try { const parsed = new URL(resource.downloadLink); if (parsed.protocol === 'https:' || parsed.protocol === 'http:') destination = parsed; } catch { /* Missing destinations are shown without a link. */ }
        const searchLink = destination && /(^|\.)google\./.test(destination.hostname) && destination.pathname === '/search';
        return <article className="directory-card p-6" key={`${resource.category}-${resource.id}`}><span className="eyebrow">{resource.category}</span><h3 className="text-xl mt-3 mb-3">{resource.title}</h3><p>{resource.description}</p><p className="mt-3 text-sm">Level: {resource.difficulty}. Check the edition and prerequisites before use.</p>{destination ? <a className="ed-text-link mt-4" href={destination.href} target="_blank" rel="noopener noreferrer">{searchLink ? 'Search external sources' : 'Open external resource'} <ArrowUpRight size={16} /><span className="sr-only">for {resource.title}</span></a> : <p>Source unavailable.</p>}<p className="text-xs mt-2">{searchLink ? 'Search results; this is not a direct download.' : destination?.hostname}</p></article>;
      })}</div>
      {!visible.length && <p className="py-8" role="status">No matching resources. Try another topic or collection.</p>}
      {visible.length > limit && <button className="ed-button secondary collection-more" onClick={() => setLimit(value => value + 12)}>Show more resources</button>}
    </section>
    <section className="directory-note"><div><h2>Check a resource before relying on it</h2><p>Open links only when you recognise the title and destination. External availability can change. If a file is missing, mislabeled, or raises a copyright concern, send the page URL, resource title and problem to <a className="ed-link underline" href="mailto:zeeshanahmad0159@gmail.com">zeeshanahmad0159@gmail.com</a>. Do not send passwords or identity documents.</p><Link className="ed-text-link" to="/editorial-policy">How Edvvo selects and maintains content <ArrowUpRight size={16} /></Link></div></section>
  </div><FooterSection /></main>;
}
