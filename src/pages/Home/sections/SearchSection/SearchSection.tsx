import React from "react";
import { BookCard } from "@/components/ui/book-card";
import { getRecentlyAddedBooksWithLimit } from "@/utils/recentlyAddedBooks";

export const SearchSection = (): JSX.Element => {
  // Get recently added books for the Featured Books section
  const recentlyAddedBooks = getRecentlyAddedBooksWithLimit(6);

  // Convert recently added books to the format expected by BookCard
  const featuredBooks = recentlyAddedBooks.map(book => ({
    title: book.title,
    description: book.description,
    image: "../depth-7--frame-0.png", // Using placeholder image
    category: book.subject,
    dateAdded: book.dateAdded,
    class: book.class,
    board: book.board,
    downloadUrl: book.downloadUrl
  }));

  return (
    <section id="explore" className="w-full py-12">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold ed-ink  ed-type text-center mb-4">
          Recently Added Books
        </h2>
        <p className="text-lg ed-muted  text-center max-w-2xl mx-auto">
          Discover the latest additions to our educational library - fresh content added to help enhance your learning experience
        </p>
      </div>

      <div className="flex gap-6 p-4 overflow-x-auto scrollbar-hide">
        {featuredBooks.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            description={book.description}
            image={book.image}
            category={book.category}
            downloadUrl={book.downloadUrl}
            className="hover:transform hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>

      {/* Recently Added Badge */}
      <div className="text-center mt-6">
        <div className="inline-flex items-center gap-2 ed-tint   text-white px-4 py-2 rounded-full text-sm font-medium ed-elevation">
          <div className="w-2 h-2 ed-surface rounded-full "></div>
          <span>Recently Added Content</span>
        </div>
      </div>
    </section>
  );
};
