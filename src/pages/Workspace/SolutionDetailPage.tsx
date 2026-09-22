import { useParams, Link } from "react-router-dom";
import { solutions } from "./SolutionsPage";
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';
import { GuideContent } from '@/components/studio/GuideContent';
import { NotFoundPage } from '../NotFoundPage';

export const SolutionDetailPage = () => {
  const { id } = useParams();
  const solution = solutions.find(s => String(s.id) === id);

  if (!solution) {
    return <NotFoundPage />;
  }

  return (
    <main className="ed-page"><HeroSection /><div id="study-content" className="ed-container article-page">
      <article>
        <Link to="/solutions" className="ed-link underline mb-6 inline-block text-lg">← Back to Solutions</Link>
        <h1 className="text-4xl md:text-5xl font-bold ed-ink  mb-4 ed-type leading-tight">
          {solution.title}
        </h1>
        <div className="mb-2 ed-muted  text-lg">By <span className="font-semibold">{solution.authors}</span> | {solution.year}</div>
        <div className="mb-6 ed-ink  text-xl italic border-l-4 ed-border pl-4">{solution.abstract}</div>
        <section className="prose dark:prose-invert max-w-none">
          <GuideContent content={solution.content} />
        </section>
        <div className="mt-8 flex flex-wrap gap-2">
          {solution.keywords.map((kw: string, i: number) => (
            <span key={i} className="px-3 py-1 ed-tint  ed-link  rounded-full text-sm font-medium">
              {kw}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <p className="mb-4">Found an error? <Link to="/contact" className="ed-link underline">Send a correction</Link>. Read our <Link to="/editorial-policy" className="ed-link underline">editorial policy</Link>.</p>
          <a href={solution.downloadUrl} target="_blank" rel="noopener noreferrer" className="ed-link underline text-lg">Reference &rarr;</a>
        </div>
      </article>
    </div><FooterSection /></main>
  );
};
