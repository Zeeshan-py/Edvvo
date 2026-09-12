import { Link } from 'react-router-dom';
import { HeroSection } from './Home/sections/HeroSection';
import { FooterSection } from './Home/sections/FooterSection';
export function NotFoundPage() {
  return <main className="ed-page"><HeroSection /><section id="study-content" className="ed-container empty-page"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Let's find your next chapter.</h1><p>This page is unavailable. Explore the library or return home to continue studying.</p><Link className="ed-button" to="/explore">Browse the library</Link></section><FooterSection /></main>;
}
