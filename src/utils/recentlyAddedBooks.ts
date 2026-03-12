// Utility to collect recently added books from all sources
export interface RecentBook {
  id: string;
  title: string;
  subject: string;
  description: string;
  language: string;
  format: string;
  downloadUrl: string;
  rating?: number;
  downloads?: number;
  dateAdded: string;
  tags: string[];
  class: string;
  board: string;
  category: 'books' | 'notes' | 'mind-sprint';
}

// Sample recently added books - this would be populated from your actual book data
export const getRecentlyAddedBooks = (): RecentBook[] => {
  // This would typically fetch from a database or aggregate from all book sources
  // For now, I'll create sample data representing recently added books
  const recentBooks: RecentBook[] = [
    {
      id: 'recent-1',
      title: 'Physics Class 12 Book',
      subject: 'Physics',
      description: 'Complete Physics textbook covering Energy, Nuclear Physics, Electricity for Class 12.',
      language: 'English',
      format: 'PDF',
      downloadUrl: 'https://pctb.punjab.gov.pk/system/files/G12-PHYSICS%20r.pdf',
      rating: 4.7,
      downloads: 1850,
      dateAdded: '2024-01-20',
      tags: ['Energy', 'Nuclear Physics', 'Electricity'],
      class: 'Class 12',
      board: 'Punjab Board',
      category: 'books'
    },
    {
      id: 'recent-2',
      title: 'Chemistry Class 12 Book',
      subject: 'Chemistry',
      description: 'Complete Chemistry textbook covering Inorganic chemistry, Chemical Reaction Fundamentals, Organic chemistry for Class 12.',
      language: 'English',
      format: 'PDF',
      downloadUrl: 'https://drive.google.com/file/d/1_3_fJt9AWxRP7AQEmvhVb8n6rOOlqv3q/view',
      rating: 4.7,
      downloads: 1850,
      dateAdded: '2024-01-19',
      tags: ['Chemical Reaction', 'Inorganic Chemistry', 'Organic Chemistry'],
      class: 'Class 12',
      board: 'Punjab Board',
      category: 'books'
    },
    {
      id: 'recent-3',
      title: 'Mathematics Class 12',
      subject: 'Mathematics',
      description: 'Math textbook with Vector, Integration, Differentiation',
      language: 'English',
      format: 'PDF',
      downloadUrl: 'https://drive.google.com/file/d/1WDl6Vy0FQ4A10-qyYg6cipaaniWI9CIB/view',
      rating: 4.5,
      downloads: 1650,
      dateAdded: '2024-01-18',
      tags: ['Math', 'Differentiation', 'Integration', 'Vector'],
      class: 'Class 12',
      board: 'Punjab Board',
      category: 'books'
    },
    {
      id: 'recent-4',
      title: 'Biology Class 11 Book',
      subject: 'Biology',
      description: 'Complete Biology textbook covering life cycle, Fundamental, and internal system of human for Class 11.',
      language: 'English',
      format: 'PDF',
      downloadUrl: 'https://drive.google.com/file/d/1qEKiX0Gdpr_w2WgA7Ma4URd91UDTBVRk/view',
      rating: 4.7,
      downloads: 1850,
      dateAdded: '2024-01-17',
      tags: ['internal system of human', 'Fundamental', 'Life Cycle'],
      class: 'Class 11',
      board: 'Punjab Board',
      category: 'books'
    },
    {
      id: 'recent-5',
      title: 'English Chapter 01',
      subject: 'English',
      description: 'Comprehensive notes for English covering Stories of English Language Grammar.',
      language: 'English',
      format: 'PDF',
      downloadUrl: 'https://mega.nz/file/yh4hQRoS#4IklZGJs_0d8zCEupW-Ysi5fSQQCKdRuiSR5jEx-rGU',
      rating: 4.8,
      downloads: 100,
      dateAdded: '2024-01-16',
      tags: ['Notes', 'Story Telling', 'Grammar'],
      class: 'Class 11',
      board: 'Punjab Board',
      category: 'notes'
    },
    {
      id: 'recent-6',
      title: 'Urdu Applications',
      subject: 'Urdu',
      description: 'Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.',
      language: 'Urdu',
      format: 'PDF',
      downloadUrl: 'https://mega.nz/file/i4pVmTJQ#fpH-nFzyJ4TQbwQLoNaiU4cNUwehtlbrUhw88WjDrWs',
      rating: 4.8,
      downloads: 100,
      dateAdded: '2024-01-15',
      tags: ['Notes', 'Story Telling', 'Grammar'],
      class: 'Class 11',
      board: 'Punjab Board',
      category: 'notes'
    }
  ];

  // Sort by date added (most recent first)
  return recentBooks.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
};

// Search books by term
export const searchBooks = (searchTerm: string): RecentBook[] => {
  const books = getRecentlyAddedBooks();
  if (!searchTerm.trim()) return [];
  
  return books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.board.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
};

// Get recently added books with limit
export const getRecentlyAddedBooksWithLimit = (limit: number = 6): RecentBook[] => {
  return getRecentlyAddedBooks().slice(0, limit);
};

// Get recently added books by category
export const getRecentlyAddedBooksByCategory = (category: 'books' | 'notes' | 'mind-sprint', limit: number = 6): RecentBook[] => {
  return getRecentlyAddedBooks()
    .filter(book => book.category === category)
    .slice(0, limit);
};
