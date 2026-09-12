import { ResourceCollection } from '@/components/studio/ResourceCollection';
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
          color: " ",
          bgPattern: "ed-tint    ",
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
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 0,
            resources: [

          ]
        },
        {
          id: "urdu",
          title: "Urdu",
          description: "Notes and resources for Urdu.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
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
          color: " ",
          bgPattern: "ed-tint    ",
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
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 0,
          resources: [
          ]
        },
        {
          id: "physics",
          title: "Physics",
          description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 0,
          resources: [
          ]
        },
        {
          id: "chemistry",
          title: "Chemistry",
          description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 0,
          resources: [

          ]
        },
        {
          id: "computer",
          title: "Computer",
          description: "Notes and resources for Computer covering Fundamental of logic and programming.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 0,
          resources: [

          ]
        },
        {
          id: "math",
          title: "Mathematics",
          description: "Notes and resources for Math covering problem solving and learning techniques.",
          icon: BookOpen,
          color: " ",
          bgPattern: "ed-tint    ",
          resourceCount: 0,
          resources: [

          ]
        }
    ];

export const Class11notes = (): JSX.Element => <section className="ed-page"><div className="page-intro"><div><span className="eyebrow">PUNJAB BOARD / CLASS 11</span><h1>Class 11 notes & solutions.</h1><p>Search by subject and open the resource you need.</p></div></div><ResourceCollection resources={categories.flatMap(category => category.resources.map(resource => ({ ...resource, subject: category.title })))} grade="class-11" kind="notes" /></section>;
export default Class11notes;
