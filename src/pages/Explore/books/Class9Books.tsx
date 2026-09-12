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
    id: 'PB_TB_Tar_C9_2024_001',
    title: 'Tarjama Tul Quran Ul Majeed Class 9 - Complete Textbook',
    subject: 'Tarjama Tul Quran Ul Majeed',
    description: 'Comprehensive m textbook covering Islam, Surah, and information for Class 9 students.',
    author: 'Punjab Textbook Board',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/157EhLaNBr6h1XNrF6k2mflsdui9RfYaU/view',
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
    id: 'PB_TB_Isl_C9_2024_001',
    title: 'Islamiyat Class 9 ',
    subject: 'Islamiyat',
    description: 'Essential Islamic concepts including Quran, Islam, and Hadees for Class 9 curriculum.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    isbn: '978-969-40-0124-1',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/18XgCH9EanxBp5i2WHI562OPjyIVGdLce/view',
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
    id: 'PB_TB_Urdu_C9_2024_001',
    title: 'Urdu Class 9 - ',
    subject: 'Urdu',
    description: 'Introduction to Urdu covering Urdu Grammer, Poetry, and Story Telling',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1JPgnI_hL6D0EMPG36IdjcqB2OFBHLp52/view',
    previewAvailable: true,
    rating: 4.6,
    downloads: 1750,
    lastUpdated: '2024-01-10',
    difficulty: 'beginner',
    tags: ['Grammer', 'Poetry', 'Story Telling'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Eng_C9_2024_001',
    title: 'English Class 9 - ',
    subject: 'English',
    description: 'Comprehensive English textbook covering Stories, Poem and Grammer.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'english',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1mWBO-wzXqv0Oq9oazcjM-Y16EqmPqBtj/view',
    previewAvailable: true,
    rating: 4.9,
    downloads: 2350,
    lastUpdated: '2024-01-08',
    difficulty: 'intermediate',
    tags: ['Grammer', 'Poems', 'Story Telling'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Gen-Math_C9_2024_001',
    title: 'General Math Class 9 ',
    subject: 'General Math',
    description: 'General Math textbook with percentage, Logrithm.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1NYkK6KoP96kJWpDX9YwhGLr8eaYof9T_/view',
    previewAvailable: true,
    rating: 4.5,
    downloads: 1650,
    lastUpdated: '2024-01-05',
    difficulty: 'intermediate',
    tags: ['Math', 'Geometry', 'Logrithm', 'Percentage '],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Science-Math_C9_2024_001',
    title: 'Math Science Class 9 ',
    subject: 'Math Science',
    description: ' Math textbook with percentage, Logrithm, Geometry',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://mega.nz/file/z1xUVaaI#5zaP7DDa4r06Vb1-hFJASVZuDMP75LcNbMKYoL9S-fw',
    previewAvailable: true,
    rating: 4.5,
    downloads: 1650,
    lastUpdated: '2024-01-05',
    difficulty: 'intermediate',
    tags: ['Math', 'Geometry', 'Logrithm', 'Ttrignometry'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Phy_C9_2024_001',
    title: 'Physics Class 9 Book',
    subject: 'Physics',
    description: 'Complete Physics textbook covering Atomic structure, Speed, and composition for Class 9.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/14TEL4poDp5vvAP7JZ3dYXJ4U_9fPexm3/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Speed','Measurment','Atomic Structure'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Chem_C9_2024_001',
    title: 'Chemistry Class 9 Book',
    subject: 'Chemistry',
    description: 'Complete Chemistry textbook covering Atomic structure, Mixture Fundamental, and Theories for Class 9.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1OY1Unpm8VkLCGQfbLFrE8wLn3fzXmZpc/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Atomic Thoeries','Mixture Fundamental','Atomic Structure'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Comp_C9_2024_001',
    title: 'Computer Science Class 9 Book',
    subject: 'Computer',
    description: 'Complete Computer textbook covering Logic structure, Fundamental, and HTML Basics for Class 9.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1K9AWmNIjYFUNWE_F8JkELmlEkZO9Ms85/view',
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
    id: 'PB_TB_Bio_C9_2024_001',
    title: 'Biology Class 9 Book',
    subject: 'Biology',
    description: 'Complete Biology textbook covering life cycle, Fundamental, and internal system of human for Class 9.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'English',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1rH5qC3FM12nPcH1zIVbm25tMKWxMv-3P/view',
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
    id: 'PB_TB_Iklaqiat_C9_2024_001',
    title: 'Iklaqiatat Class 9 Book',
    subject: 'Iklaqiatat',
    description: 'Complete Iklaqiatat textbook covering study of Iklaqiatat, manner for Class 9.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1vS1TQhpOttZRfPhkcUPMz-YxVAn8kD55/view',
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
    id: 'PB_TB_Pak-Study_C9_2024_001',
    title: 'pak-Study Class 9 Book',
    subject: 'Pak-Study',
    description: 'Complete pak Study textbook covering study of history, Information and caring of Earth for Class 9.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1piyndlFhA-eUp6sXxap58yxF7Ocsi52x/view',
    previewAvailable: true,
    rating: 4.7,
    downloads: 1850,
    lastUpdated: '2024-01-03',
    difficulty: 'intermediate',
    tags: ['Earth Information','History','pakistan Movement'],
    boardApproved: true,
    curriculumAligned: true
  },
  {
    id: 'PB_TB_Textile_C9_2024_001',
    title: 'Textile Study Class 9 Book',
    subject: 'Parch Bafi',
    description: 'Complete Parcha Bafi textbook covering study of Textile, Design for Class 9.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/1DOfWIk1Tt_WonJrNssSby3lYsJ6HjXe0/view',
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
    id: 'PB_TB_Economy_C9_2024_001',
    title: 'Home Economics Class 9 Book',
    subject: 'Home Economics',
    description: 'Complete Home Economics textbook covering study of Economy, GDP for Class 9.',
    publisher: 'Punjab Textbook Board',
    edition: '2024 Edition',
    language: 'Urdu',
    format: 'pdf',
    downloadUrl: 'https://drive.google.com/file/d/11ek9V9O_OAExO6fWvWeexhOhkUwDgq3d/view',
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

export const Class9Books = (): JSX.Element => <section className="ed-page"><div className="page-intro"><div><span className="eyebrow">PUNJAB BOARD / CLASS 9</span><h1>Class 9 textbooks.</h1><p>Search by subject and open the resource you need.</p></div></div><ResourceCollection resources={books} grade="class-9" kind="books" /></section>;
export default Class9Books;
