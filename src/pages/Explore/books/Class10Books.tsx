import { ResourceCollection } from '@/components/studio/ResourceCollection';
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

export const Class10Books = (): JSX.Element => <section className="ed-page"><div className="page-intro"><div><span className="eyebrow">PUNJAB BOARD / CLASS 10</span><h1>Class 10 textbooks.</h1><p>Search by subject and open the resource you need.</p></div></div><ResourceCollection resources={books} grade="class-10" kind="books" /></section>;
export default Class10Books;
