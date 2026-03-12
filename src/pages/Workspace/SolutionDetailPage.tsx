import { useParams, Link } from "react-router-dom";
import { solutions } from "./SolutionsPage";

export const SolutionDetailPage = () => {
  const { id } = useParams();
  const solution = solutions.find(s => String(s.id) === id);

  if (!solution) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-purple-900/20 dark:via-gray-800 dark:to-violet-900/20">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Blog Not Found</h1>
        <Link to="/solutions" className="text-purple-600 underline text-lg">Back to Solutions</Link>
      </main>
    );
  }

  // Render content with beautiful formatting
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line: string, idx: number) => {
      if (line.startsWith("# ")) {
        return <h2 key={idx} className="text-3xl font-bold text-purple-700 mt-8 mb-4">{line.replace("# ","")}</h2>;
      }
      if (line.startsWith("## ")) {
        return <h3 key={idx} className="text-xl font-semibold text-purple-600 mt-6 mb-2">{line.replace("## ","")}</h3>;
      }
      if (line.trim().startsWith("- ")) {
        return <li key={idx} className="ml-6 list-disc text-gray-700 dark:text-gray-300 mb-1">{line.replace("- ","")}</li>;
      }
      if (line.match(/^\d+\. /)) {
        return <li key={idx} className="ml-6 list-decimal text-gray-700 dark:text-gray-300 mb-1">{line.replace(/^\d+\. /,"")}</li>;
      }
      if (line.trim() === "") {
        return <br key={idx} />;
      }
      return <p key={idx} className="text-lg text-gray-800 dark:text-gray-200 mb-2 leading-relaxed">{line}</p>;
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-purple-900/20 dark:via-gray-800 dark:to-violet-900/20 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
        <Link to="/solutions" className="text-purple-600 underline mb-6 inline-block text-lg">← Back to Solutions</Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Newsreader',Helvetica] leading-tight">
          {solution.title}
        </h1>
        <div className="mb-2 text-gray-500 dark:text-gray-400 text-lg">By <span className="font-semibold">{solution.authors}</span> | {solution.year}</div>
        <div className="mb-6 text-gray-700 dark:text-gray-300 text-xl italic border-l-4 border-purple-400 pl-4">{solution.abstract}</div>
        <section className="prose dark:prose-invert max-w-none">
          {renderContent(solution.content)}
        </section>
        <div className="mt-8 flex flex-wrap gap-2">
          {solution.keywords.map((kw: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded-full text-sm font-medium">
              {kw}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <a href={solution.downloadUrl} target="_blank" rel="noopener noreferrer" className="text-purple-700 underline text-lg">Reference &rarr;</a>
        </div>
      </div>
    </main>
  );
};
