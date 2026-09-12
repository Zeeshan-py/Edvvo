import { SearchIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import globalResources from "@/utils/globalResources";

export const FeaturedBooksSection = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Use globalResources for searching all books, notes, and resources
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      const results = globalResources.filter(item =>
        item.title.toLowerCase().includes(lower) ||
        (item.subject && item.subject.toLowerCase().includes(lower)) ||
        (item.description && item.description.toLowerCase().includes(lower)) ||
        (item.tags && item.tags.some((tag: string) => tag.toLowerCase().includes(lower)))
      );
      setSearchResults(results);
      setShowResults(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!e.target.value.trim()) {
      setShowResults(false);
    }
  };
  return (
    <section id="home" className="w-full">
      <Card className="border-0 rounded-2xl overflow-hidden ed-elevation">
        <CardContent className="p-0">
          <div
            className="ed-tint w-full rounded-2xl overflow-hidden relative flex flex-col items-center justify-center py-12 px-6"
          >
            <div className="flex flex-col items-center max-w-4xl mx-auto text-center space-y-8">
              <h1 className="ed-type font-extrabold text-white text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                Unlock Your Potential with
                <span className="block ed-ink ed-tint  ">
                  Quality Study Materials
                </span>
              </h1>

              <p className="ed-type font-normal text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
                Access a vast library of educational books and study resources
                to enhance your learning journey and achieve academic excellence.
              </p>

              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row w-full max-w-2xl mt-8 gap-2 sm:gap-0">
                <div className="relative flex items-center w-full">
                  <div className="absolute left-4 text-muted-foreground z-10">
                    <SearchIcon size={20} className="ed-muted" />
                  </div>

                  <Input
                    type="text"
                    placeholder="Search for books, subjects, or materials..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="pl-12 h-12 sm:h-14 rounded-b-none sm:rounded-b-none sm:rounded-r-none border-b-0 sm:border-b-0 sm:border-r-0 ed-surface backdrop-blur-sm ed-ink ed-type text-base sm:text-lg ed-elevation focus:bg-white transition-all duration-300"
                  />

                  <Button
                    type="submit"
                    className="h-12 sm:h-14 px-6 sm:px-8 rounded-t-none sm:rounded-t-none sm:rounded-l-none ed-tint     ed-type font-bold text-base sm:text-lg ed-elevation transition-all duration-300 transform ed-lift"
                  >
                    Search
                  </Button>
                </div>
              </form>

              {/* Search Results */}
              {showResults && (
                <div className="w-full max-w-4xl mt-6 ed-surface backdrop-blur-sm rounded-2xl ed-elevation border ed-border max-h-96 overflow-y-auto">
                  <div className="p-2 sm:p-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <h3 className="text-base sm:text-lg font-bold ed-ink">Search Results ({searchResults.length})</h3>
                      <button
                        onClick={() => setShowResults(false)}
                        className="ed-muted ed-hover-ink font-bold text-xl"
                      >
                        ×
                      </button>
                    </div>
                    {searchResults.length > 0 ? (
                      <div className="space-y-2 sm:space-y-3">
                        {searchResults.map((item, index) => (
                          <div
                            key={item.id + index}
                            onClick={() => window.open(item.downloadUrl || item.downloadLink, '_blank')}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-2 sm:p-3 ed-canvas ed-hover-surface rounded-xl cursor-pointer transition-all duration-200 transform ed-lift"
                           role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 ed-tint rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="ed-link font-bold text-sm sm:text-base">{item.subject?.charAt(0) || item.type?.charAt(0) || '?'}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold ed-ink truncate text-sm sm:text-base">{item.title}</h4>
                              <p className="text-xs sm:text-sm ed-muted">{item.subject || item.type || ''} {item.class ? `• ${item.class}` : ''} {item.board ? `• ${item.board}` : ''}</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {item.tags && item.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                                  <span key={tagIndex} className="px-2 py-1 ed-tint ed-link text-xs rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <span className="text-xs sm:text-sm font-medium ed-muted">{item.format || item.type}</span>
                              <div className="text-xs ed-muted">Click to download</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6 sm:py-8">
                        <div className="ed-muted text-lg mb-2">📚</div>
                        <p className="ed-muted font-medium text-sm sm:text-base">No resources found for "{searchTerm}"</p>
                        <p className="ed-muted text-xs sm:text-sm mt-1">Try searching with different keywords</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-4 mt-8 text-white/80">
                <span className="px-4 py-2 ed-surface backdrop-blur-sm rounded-full text-sm font-medium">
                  📚 10,000+ Books
                </span>
                <span className="px-4 py-2 ed-surface backdrop-blur-sm rounded-full text-sm font-medium">
                  🎓 All Subjects
                </span>
                <span className="px-4 py-2 ed-surface backdrop-blur-sm rounded-full text-sm font-medium">
                  ⭐ Expert Curated
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
