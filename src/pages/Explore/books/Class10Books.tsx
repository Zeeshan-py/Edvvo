import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  Eye, 
  Star, 
  Clock, 
  HardDrive, 
  FileText,
  Search,
  Filter,
  ExternalLink
} from 'lucide-react';

interface Book {
  id: string;
  title: string;
  subject: string;
  description: string;
  author?: string;
  publisher?: string;
  edition?: string;
  isbn?: string;
  language: string;
  format: string;
  fileSize?: string;
  downloadUrl: string;
  previewAvailable?: boolean;
  rating?: number;
  downloads?: number;
  lastUpdated?: string;
  difficulty?: string;
  tags: string[];
  boardApproved?: boolean;
  curriculumAligned?: boolean;
}

export const books: Book[] = [
  {
    id: 'PB_TB_Tar_C10_2024_001',
    title: 'Tarjama Tul Quran Ul Majeed Class 10 - Complete Textbook',
    subject: 'Tarjama Tul Quran Ul Majeed',
    description: 'Comprehensive textbook covering Islam, Surah, and information for Class 10 students.',
    author: 'Punjab Textbook Board',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1q7lAkhwLq49ZXwU3vKDC3XvI3mxMEjzl/view',
    previewAvailable: true,
    rating: 4.8,
    downloads: 2150,
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    tags: ['Islam', 'Quran', 'Information', 'official textbook'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Isl_C10_2024_001',
    title: 'Islamiyat Class 10',
    subject: 'Islamiyat',
    description: 'Essential Islamic concepts including Quran, Islam, and Hadees for Class 10 curriculum.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    isbn: '978-969-40-0124-1',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/17pwBhL5Zcr19mcEZwa0hXuG62SYC-YfV/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1980,
    lastUpdated: '2024-01-12',
    difficulty: 'intermediate',
    tags: ['Islam', 'Quran', 'Hadees'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Urdu_C10_2024_001',
    title: 'Urdu Class 10',
    subject: 'Urdu Compulsory',
    description: 'Introduction to Urdu covering Urdu Grammar, Poetry, and Story Telling',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://mega.nz/file/nlA3QQIC#YHgpRVnZSNRcMEY1kJoPtBkCTaM4vmovwX7NQjWnfug',
    previewAvailable: true,
    rating: 4.6,
    downloads: 1750,
    lastUpdated: '2024-01-10',
    difficulty: 'beginner',
    tags: ['Grammar', 'Poetry', 'Story Telling'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Eng_C10_2024_001',
    title: 'English Class 10',
    subject: 'English',
    description: 'Comprehensive English textbook covering Stories, Poems and Grammar.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'english',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/11dohkOXSikmxJgGomYBo1TdAMfaMoPnV/view',
    previewAvailable: true,
    rating: 4.9,
    downloads: 2350,
    lastUpdated: '2024-01-08',
    difficulty: 'intermediate',
    tags: ['Grammar', 'Poems', 'Story Telling'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Gen-Math_C10_2024_001',
    title: 'General Math Class 10',
    subject: 'General Math',
    description: 'General Math textbook with Statistics, Quadratic Equation, Geometry.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/182-BwJNJbj479S8hhJYhwZBAX91Wtww_/view',
    previewAvailable: true,
    rating: 4.5,
    downloads: 1650,
    lastUpdated: '2024-01-05',
    difficulty: 'intermediate',
    tags: ['Math', 'Geometry', 'Logarithm', 'Percentage'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Science-Math_C10_2024_001',
    title: 'Math Science Class 10',
    subject: 'Math Science',
    description: 'Math textbook with Statistics, Quadratic Equation, Geometry',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1qdbKbuuHT80byq6gO1i6l6konU0lAoDW/view',
    previewAvailable: true,
    rating: 4.5,
    downloads: 1650,
    lastUpdated: '2024-01-05',
    difficulty: 'intermediate',
    tags: ['Math', 'Quadratic', 'Statistics', 'Trigonometry'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Phy_C10_2024_001',
    title: 'Physics Class 10 Book',
    subject: 'Physics',
    description: 'Complete Physics textbook covering Telecommunication, SHM, Electricity for Class 10.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1ZUhUAkGyAxbVAWIWNF6G3m1q4HTWk604/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Telecommunication','SHM','Electricity'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Chem_C10_2024_001',
    title: 'Chemistry Class 10 Book',
    subject: 'Chemistry',
    description: 'Complete Chemistry textbook covering Atomic structure, Chemical Reaction, and Organic Chemistry Fundamentals for Class 10.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1Dc3uLt6sUFRPqOeIiHpGKkubOMPOxsz5/view?usp=sharing',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Chemical Reaction','Organic Chemistry Fundamental','Atomic Structure'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Comp_C10_2024_001',
    title: 'Computer Science Class 10 Book',
    subject: 'Computer',
    description: 'Complete Computer textbook covering Logic structure, Fundamental, and Function Basics for Class 10.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1yKlB9hKd9tkz00xkmnNhzPD75mTYDzuF/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Security & Basics of Language','Fundamental','Logic Structure'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Bio_C10_2024_001',
    title: 'Biology Class 10 Book',
    subject: 'Biology',
    description: 'Complete Biology textbook covering life cycle, Fundamental, and internal system of human for Class 10.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1_ZseEY6DSDJZ70bY-xwzNcvDt27jJ3fY/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['internal system of human ','Fundamental','Life Cycle'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Iklaqiat_C10_2024_001',
    title: 'Iklaqiatat Class 10 Book',
    subject: 'Iklaqiatat',
    description: 'Complete Iklaqiatat textbook covering study of Iklaqiatat, manner for Class 10.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1WySlT2PhoDU-Ulym-UBArfsC3SM7BUb-/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Respect of Religion ','Fundamental','manners'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Pak-Study_C10_2024_001',
    title: 'Pakistan Study Class 10 Book',
    subject: 'Pak-Study',
    description: 'Complete Pakistan Study textbook covering study of history, Information and caring of Earth for Class 10.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/16fzxuMNoh-kTUp-HaqE0UVZaHs238zqv/view?usp=share_link',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Pakistan foreign relations','History','pakistan Movement'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Textile_C10_2024_001',
    title: 'Textile Study Class 10 Book',
    subject: 'Parch Bafi',
    description: 'Complete Parcha Bafi textbook covering study of Textile, Design for Class 10.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1LxyHrI2fqsr6-m3iWNlexjWc9nkfwnux/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Design Theory','Art','Textile'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Economy_C10_2024_001',
    title: 'Home Economics Class 10 Book',
    subject: 'Home Economics',
    description: 'Complete Home Economics textbook covering study of Economy, GDP for Class 10.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1TamTuKze5G_2tswXBKInc7MKryRW9M8B/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Economy Fundamental','GDP','Calculation'],
    boardApproved: true,
    curriculumAligned: true
  },
];

export const Class10Books: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const subjects = [
    'all', 
    'Tarjama Tul Quran Ul Majeed', 
    'Islamiyat', 
    'Urdu Compulsory', 
    'English', 
    'General Math', 
    'Math Science', 
    'Physics', 
    'Chemistry', 
    'Computer', 
    'Biology', 
    'Iklaqiatat', 
    'Pak-Study', 
    'Parch Bafi', 
    'Home Economics'
  ];
  
  const languages = ['all', 'english', 'urdu', 'bilingual'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSubject = selectedSubject === 'all' || book.subject.toLowerCase() === selectedSubject.toLowerCase();
    const matchesLanguage = selectedLanguage === 'all' || book.language.toLowerCase() === selectedLanguage.toLowerCase();
    
    return matchesSearch && matchesSubject && matchesLanguage;
  });

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const handleDownload = (downloadUrl: string) => {
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4">
          Class 10 Books - Punjab Board
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Official textbooks for Class 10 students
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Subject Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>
                  {subject === 'all' ? 'All Subjects' : subject}
                </option>
              ))}
            </select>
          </div>

          {/* Language Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              {languages.map(language => (
                <option key={language} value={language}>
                  {language === 'all' ? 'All Languages' : language.charAt(0).toUpperCase() + language.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => window.open(book.downloadUrl, '_blank')}
          >
            {/* Cover Image */}
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg" 
                alt={book.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-xs font-medium">
                  {book.subject}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded-full text-xs font-medium capitalize">
                  {book.language}
                </span>
              </div>
              
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
                {book.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                {book.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {book.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(book.downloadUrl);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(book.downloadUrl, '_blank');
                  }}
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-medium transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No books found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
};

export default Class10Books;
