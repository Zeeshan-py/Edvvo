import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, BookOpen, ArrowLeft, FileText, Users, Star, Search, Filter, HardDrive, Download, Clock, Eye, ExternalLink, ChevronRight, Zap
} from 'lucide-react';

// Type definitions based on usage
interface Resource {
  id: string;
  title: string;
  description: string;
  format: string;
  downloadLink: string;
  previewAvailable: boolean;
  rating: number;
  downloads: number;
  difficulty: string;
  tags: string[];
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgPattern: string;
  resourceCount: number;
  resources: Resource[];
}

export const categories: Category[] = [
        {
          id: "Tarjma-Tul-Quran",
          title: "Tarjma Tul Quran",
          description: "Notes and resources for Tarjma Tul Quran Class 11 including Surah notes and Quranic recitation.",
          icon: BookOpen,
          color: "from-green-500 to-green-700",
          bgPattern: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/20",
          resourceCount: 8,
          resources: [
            {
              id: "tarjma-1",
              title: "Surah Al-e-Imran Translation",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/P9JXHZ5C#LLCYxL_Fcb5FscjA_4_rD7T4TzuYlhlRhITqNq2hd1M",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-2",
              title: "Surah Al-e-Imran MCQs",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/HtJGiTxD#P3DRWqVDz1o_vxk8xAiAox9sJ2VUW4V0NkWpFylZhZw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-3",
              title: "Surah Anfal Translation",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/q8p3zY7a#652CBj_Q5HY-1cwy1mkArQSXWo7egfsrN2B3SPW1BQg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-4",
              title: "Surah Anfal MCQs",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ekRWAAII#PItW9lh5krmObpNpdW4EHnRPPn9DXjKrh-PvXRQkBs4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-5",
              title: "Surah Barah Translation",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/LxBjiRwJ#iyNY3njq3d1vYNAi75goLXQaxgs00t2dfbQGkBdAfAM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              
              {
              id: "tarjma-6",
              title: "Surah Baqrah MCQs",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/mhwCyCgI#2A-sNphTsACiwu0_EUifwnWJWr-D9TXF_hIbWP8H3k8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
              },
              {
              id: "tarjma-7",
              title: "Surah Taubah Translation",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/O9YkmKYR#Vmld_M7BV0C4ynRZLSCMPUSVOhUg3tmP3awQ3r0sLl4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
            },{
              id: "tarjma-8",
              title: "Surah Taubah MCQs",
              description: "Comprehensive notes for Tarjma Tul Quran.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/jwITgJgB#hxN_4X2CImz1oz7G_gR7Oq8nleUQJsDWkqYLWa-xaCk",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Quran"]
            }
          ]
        },
        {
          id: "islamiyat",
          title: "Islamiyat",
          description: "Notes and resources for Islamiyat.",
          icon: BookOpen,
          color: "from-blue-500 to-blue-700",
          bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/20",
          resourceCount: 0,
            resources: [
            
          ]
        },
        {
          id: "urdu",
          title: "Urdu",
          description: "Notes and resources for Urdu.",
          icon: BookOpen,
          color: "from-purple-500 to-purple-700",
          bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/20",
          resourceCount: 7,
            resources: [
                {
              id: "urdu-1",
              title: "Urdu Applications",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/i4pVmTJQ#fpH-nFzyJ4TQbwQLoNaiU4cNUwehtlbrUhw88WjDrWs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
                },
                {
              id: "urdu-2",
              title: "Urdu Mukalama",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/j84DxaLI#3IFs34ii_ZhGYVvoK7IhDGfKX_XyufycPAUvZGU1TNg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
                },
                {
              id: "urdu-3",
              title: "Urdu Raseed",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ztxQABxA#mbkSsmq4vfPM646UHlavcwwgRElN7e0oqJQtcWs9Bp4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
                },
                {
              id: "urdu-4",
              title: "Urdu Roznamcha",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/m9gRnLYZ#N3PSjIiorYTwem00vgshO3yb5JZyZH7p0YnCZ7yXWA8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
                },
                {
              id: "urdu-5",
              title: "Urdu Rudaad",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/a0wGTSJD#U2yE8N06ZDnfA5R-KiLx0AfSso_WJMSHD4SjVZzawLE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
                },
                {
              id: "urdu-6",
              title: "Urdu Talkhees",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/CoYFyDJS#u4eMd6IhFH7YZKgSzad6AX0dNO28SLL7eZhNr9d21FA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
              },
                {
              id: "urdu-7",
              title: "Urdu Grammer",
              description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/jlwwWJ4A#k345xBIV9ARpsI0i4uMywmzHYTopMxnFQ9SPx0X8YMc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
                }
          ]
        },
        {
          id: "english",
          title: "English",
          description: "Notes and resources for English book and grammer book of class 11.",
          icon: BookOpen,
          color: "from-yellow-500 to-yellow-700",
          bgPattern: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/20",
          resourceCount: 20,
          resources: [
            {
              id: "english-1",
              title: "Chapter 01",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/yh4hQRoS#4IklZGJs_0d8zCEupW-Ysi5fSQQCKdRuiSR5jEx-rGU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-2",
              title: "Chapter 02",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/zl40lQgK#yvJ6Ydr_Ouuy33T_TzrH5h5wlToDbvtAwWuX9_V_yoc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-3",
              title: "Chapter 03",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/jlREFbYC#ZujDz39fQFdX-cSMVVlCuhkYDNF3PrjGX2ierBsiZGI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-4",
              title: "Chapter 04",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Tlo2ER6S#jic7u0mBeVAQU9_wlaAHxmVfaCMqo8Ymi55EnvK153U",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-5",
              title: "Chapter 05",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/GlIljDjS#aNOz1GtjHz5CXUg7JurEQNCbld5Vd3M7oQRaRIGFo4I",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-6",
              title: "Chapter 06",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/KogzCTya#qRDjZz1j1yVLR1qgqw2JQd687U0fYK2DbXiUUlw6vjY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-7",
              title: "Chapter 07",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/7sADUJ7J#NAXT0HpvSeM3NvTcsQ0YAZvEZxKShGRhPRt3ItvXvV4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-8",
              title: "Chapter 08",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/aoRHjRqA#8tsroMPImDoZ320oYeajUVW9W_Rp7cW50SFBPrJcNsA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-9",
              title: "Chapter 10",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/P5piiZSb#YyCAaBsNhjCMl8SRqizixKkc9PFddCRG1lI1THCgCEE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-10",
              title: "Chapter 11",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/v9BBCBIY#k1KbRuZyS6uADOyMB3IwuG61EoahMwdwf_EmXJDv0iY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-11",
              title: "Chapter 12 ",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/K54GCRSR#OhMyeMhk8oO1sSgJBMYqTCooclxD5bBdcEDh4sVQEDE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-12",
              title: "Chapter 13",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/HohgFRJS#lEirPGTHZtMGsNkN9Ugxll2D9fTkGfS3Q9tE0rCNMxc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-13",
              title: "Chapter 14",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/P1ZkEagB#isSL_yn7zv8eCQH5nJ45MXMM7IEGXFS4gjWZHKMSzl0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-14",
              title: "Letters",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/SkIQmS5I#JpCCA0YTy1Hqo_Ep1qAO61H7zDDD0W29_Mr2-IZ5BH8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-15",
              title: "Pair Of Words",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/a4IFwYjI#Mu1_pxz4O7Q2haiFe85BOk2paEQTOEFUz_5Z4JkEyNU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-17",
              title: "Punctuation rules & Practice",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Cho2iQSD#uGv9zH8YM76lnu3GhIfQLqgkIH_D1LHWmmQA9URD6RE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
              {
              id: "english-18",
              title: "English Stories",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/WkIwgKDQ#Ms6x17W6CowqUsWz38Soculrvw-LkWur5mIAjzGlTVM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-19",
              title: "English Applications",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/vkR3iQwZ#tub7YnACH1diWJCuF9n3C7AqOsVZ9_vDCcKDRHSJOss",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
            },
            {
              id: "english-20",
              title: "Correct Use Of Verbs",
              description: "Comprehensive notes for English covering Stories of English Language Grammer.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/agpTnYZI#A-6Y9UOoZZ4alnLofTgPhWd4OiP2B5-EsnB3fH97cQ4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Story Telling","Grammer"]
                },
          ]
        },
        {
          id: "biology",
          title: "Biology",
          description: "Notes and resources for Biology.",
          icon: BookOpen,
          color: "from-teal-500 to-teal-700",
          bgPattern: "bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-900/20",
          resourceCount: 0,
          resources: [
          ]
        },
        {
          id: "physics",
          title: "Physics",
          description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
          icon: BookOpen,
          color: "from-indigo-500 to-indigo-700",
          bgPattern: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/20",
          resourceCount: 0,
          resources: [
          ]
        },
        {
          id: "chemistry",
          title: "Chemistry",
          description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
          icon: BookOpen,
          color: "from-red-500 to-red-700",
          bgPattern: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/20",
          resourceCount: 0,
          resources: [

          ]
        },
        {
          id: "computer",
          title: "Computer",
          description: "Notes and resources for Computer covering Fundamental of logic and programming.",
          icon: BookOpen,
          color: "from-cyan-500 to-cyan-700",
          bgPattern: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/20",
          resourceCount: 0,
          resources: [
            
          ]
        },
        {
          id: "math",
          title: "Mathematics",
          description: "Notes and resources for Math covering problem solving and learning techniques.",
          icon: BookOpen,
          color: "from-orange-500 to-orange-700",
          bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/20",
          resourceCount: 0,
          resources: [
           
          ]
        }
    ];

export const Class11notes = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("All");

    const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const filteredResources = selectedCategoryData?.resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = filterDifficulty === "All" || resource.difficulty === filterDifficulty;
    
    return matchesSearch && matchesDifficulty;
  }) || [];

  const handleDownload = (downloadLink: string, title: string) => {
    // In a real application, you would handle the download here
    // For now, we'll just open the link
    window.open(downloadLink, '_blank');
  };

  const handlePreview = (resource: Resource) => {
    // In a real application, you would show a preview modal or navigate to a preview page
    alert(`Preview for ${resource.title} would open here`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  if (selectedCategory && selectedCategoryData) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => setSelectedCategory(null)}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Categories</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${selectedCategoryData.color} shadow-2xl mb-6`}>
            <selectedCategoryData.icon className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
            {selectedCategoryData.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {selectedCategoryData.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold text-gray-900 dark:text-white">{selectedCategoryData.resourceCount}</span>
              <span className="text-gray-600 dark:text-gray-400">Resources</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold text-gray-900 dark:text-white">5K+</span>
              <span className="text-gray-600 dark:text-gray-400">Downloads</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-900 dark:text-white">4.8</span>
              <span className="text-gray-600 dark:text-gray-400">Rating</span>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{resource.rating}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-2 leading-tight">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                {resource.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* File Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{resource.format}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span>{resource.downloads}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload(resource.downloadLink, resource.title)}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                {resource.previewAvailable && (
                  <button
                    onClick={() => handlePreview(resource)}
                    className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-medium transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => window.open(resource.downloadLink, '_blank')}
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-medium transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No resources found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-2xl mb-6">
          <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
          Class 11 Notes Resources
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
          Comprehensive study notes and materials for Class 11 students covering all major subjects.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">8K+</span>
            <span className="text-gray-600 dark:text-gray-400">Students</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">35</span>
            <span className="text-gray-600 dark:text-gray-400">Resources</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold text-gray-900 dark:text-white">4.8</span>
            <span className="text-gray-600 dark:text-gray-400">Rating</span>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative ${category.bgPattern} rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header with Icon and Count */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300">
                    {category.resourceCount} Resources
                  </span>
                </div>

                {/* Title and Description */}
                <div className="flex-grow mb-6">
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    <span>Explore Resources</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/20 transform -rotate-12 scale-150" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-['Newsreader',Helvetica]">
              Ready to Excel in Class 11?
            </h2>
            <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join thousands of successful students who used our comprehensive study notes to achieve academic excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Studying
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                View All Subjects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
