import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';
import { MotionCard } from '@/components/studio/MotionCard';
import { MapPin, GraduationCap, ChevronRight, Star, Zap, ExternalLink } from "lucide-react";

const regions = [
  { name: 'Punjab Boards', key: 'punjab' },
  { name: 'Sindh Boards', key: 'sindh' },
  { name: 'Khyber Pakhtunkhwa (KPK) Boards', key: 'kpk' },
  { name: 'Balochistan Board', key: 'balochistan' },
  { name: 'Federal Board', key: 'federal' },
  { name: 'Azad Jammu & Kashmir', key: 'ajk' },
];

const boardsByRegion: Record<string, Array<{name: string, url: string}>> = {
  punjab: [
    { name: 'BISE Lahore', url: 'https://biselahore.com' },
    { name: 'BISE Gujranwala', url: 'https://bisegrw.edu.pk' },
    { name: 'BISE Rawalpindi', url: 'https://biserawalpindi.edu.pk' },
    { name: 'BISE Faisalabad', url: 'https://bisefsd.edu.pk' },
    { name: 'BISE Sargodha', url: 'https://bisesargodha.edu.pk' },
    { name: 'BISE Multan', url: 'https://bisemultan.edu.pk' },
    { name: 'BISE Sahiwal', url: 'https://bisesahiwal.edu.pk' },
    { name: 'BISE Bahawalpur', url: 'https://bisebwp.edu.pk' },
    { name: 'BISE Dera Ghazi Khan (DG Khan)', url: 'https://bisedgkhan.edu.pk' },
  ],
  sindh: [
    { name: 'Board of Intermediate Education Karachi', url: 'https://biek.edu.pk' },
    { name: 'Board of Secondary Education Karachi', url: 'https://bsek.edu.pk' },
    { name: 'BISE Hyderabad', url: 'https://biseh.edu.pk' },
    { name: 'BISE Sukkur', url: 'https://www.bisesuksindh.edu.pk' },
    { name: 'BISE Larkana', url: 'https://www.biselrk.edu.pk' },
    { name: 'BISE Mirpurkhas', url: 'https://www.bisempk.edu.pk' },
    { name: 'BISE Nawabshah (Shaheed Benazirabad)', url: 'https://bisenawabshah.edu.pk' },
  ],
  kpk: [
    { name: 'BISE Peshawar', url: 'https://www.bisep.edu.pk/' },
    { name: 'BISE Swat', url: 'https://www.bisess.edu.pk' },
    { name: 'BISE Kohat', url: 'https://www.bisekt.edu.pk' },
    { name: 'BISE Abbottabad', url: 'https://biseatd.edu.pk/' },
    { name: 'BISE Bannu', url: 'https://www.biseb.edu.pk' },
    { name: 'BISE Mardan', url: 'https://web.bisemdn.edu.pk' },
    { name: 'BISE Malakand', url: 'https://bisemalakand.edu.pk' },
    { name: 'BISE Dera Ismail Khan (DI Khan)', url: 'https://www.bisedik.edu.pk' },
  ],
  balochistan: [
    { name: 'BBISE Quetta (Board of Intermediate & Secondary Education, Quetta)', url: 'https://bbise.edu.pk/' },
  ],
  federal: [
    { name: 'FBISE Islamabad (Federal Board of Intermediate & Secondary Education)', url: 'https://fbise.edu.pk' },
  ],
  ajk: [
    { name: 'BISE Mirpur (AJK Board of Intermediate & Secondary Education)', url: 'https://www.ajkbise.net' },
  ],
};

export const ResultPage = (): JSX.Element => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0].key);
  const boards = boardsByRegion[selectedRegion];
  return <main className="ed-page"><HeroSection />
    <section id="study-content" className="ed-container page-intro"><div><span className="eyebrow">OFFICIAL RESULT PORTALS</span><h1>Find your board.</h1><p>Choose a region and open the board's official website.</p></div><Link to="/explore" className="ed-text-link">Back to library <ArrowUpRight size={17} /></Link></section>
    <section className="ed-container" aria-label="Examination boards">
      <div className="collection-search"><label htmlFor="result-region">Region</label><select id="result-region" value={selectedRegion} onChange={event => setSelectedRegion(event.target.value)}>{regions.map(region => <option value={region.key} key={region.key}>{region.name}</option>)}</select></div>
      <div className="directory-grid">{boards.map((board, index) => <MotionCard className="directory-card" key={board.url} delay={index * 30}><a href={board.url} target="_blank" rel="noopener noreferrer"><span className="directory-icon"><GraduationCap size={26} /></span><h2>{board.name}</h2><p>{new URL(board.url).hostname}</p><span className="ed-text-link">Official website <ArrowUpRight size={16} /></span></a></MotionCard>)}</div>
      <aside className="directory-note"><MapPin size={24} /><p>Edvvo does not publish or change examination results. Check the board's announcement for result dates, and enter personal details only on its official portal.</p></aside>
    </section><FooterSection /></main>;
};
