import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, BookOpen, ArrowLeft, FileText, Users, Star, Search, Filter, HardDrive, Download, Clock, Eye, ExternalLink, ChevronRight, Zap
} from 'lucide-react';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';
import globalResources from "@/utils/globalResources";

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
    description: "Notes and resources for Tarjma Tul Quran Class 12 including Surah notes and Quranic recitation.",
    icon: BookOpen,
    color: "from-green-500 to-green-700",
    bgPattern: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/20",
    resourceCount: 16,
    resources: [
      {
        id: "tarjma-1",
        title: "Surah Nissa",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/D0BG3TZT#qikcbXPd3qG6B0sBpO0RtuZNSZrYlVup2mE4m1Fqfl4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-2",
        title: "Surah Maida",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/upoCDCra#K8JdWq5xfVUqReNDOHqQP21e7BbDt2SkusDEWqwP20Y",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-3",
        title: "Surah Noor",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/W4x3gQ4Y#7xYdhYCi2QnPk1ND6MqwBCJzgLH-qVL7-trwXVSa3f4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-4",
        title: "Surah Ahzab",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/r4BFiL4Q#aAxfnT4d_8gBkW9OPPufgKCq1LOAITQ43L_HiRzA-10",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-5",
        title: "Surah Muhammad",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/vl4QxBCJ#P6KkojJSnsTif3M_rNSEGHe2tiXb7eCzArCip3zcwOw",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      
      {
        id: "tarjma-6",
        title: "Surah Hujurat",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/D1ZkFaIQ#wSm1uD6DbltO9viRh69zDih2Sb787POfS8_DO1L_luA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-7",
        title: "Surah Hudid",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/P0oyxJLT#9lvJR_zvJuD3NnJ3DE3VyFFaIeHJnDxTYeQNjB20vH8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },{
        id: "tarjma-8",
        title: "Surah Mujadila",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/zlpnGSaT#TX5e2JP2dDKeg6zfI6jlLFcq3cdVaUvBVZmg8mxAT98",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },{
        id: "tarjma-9",
        title: "Surah Hashr",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/u0hDECKS#VhwhVhkXZnIQ3m73oHzPl5hhw3J3numHaJocC5dz0iA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },{
        id: "tarjma-10",
        title: "Surah Mumtahana",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/PhJXyYQR#rdnkpwKS-cjdW0l6dEkNwLV66Dq9fU7Fjm4H8B5OS0E",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-11",
        title: "Surah Saf",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/3kQnEKzK#nHQD4OfnrkLgprJPOIs4megPOPYHgGpGto8uXA3v1v8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-12",
        title: "Surah Jumu'ah",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/z4AWVIgK#vkEMe3KaFhJGtgOcnmqSOf_gEuUS3AKB9-qniSxuCEw",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-13",
        title: "Surah Taghabun",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/akwmgQyS#vDtsSQVS1PVh1wLmSWkG7QuX9-8TnISgbfrl3Nij2VM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-14",
        title: "Surah Talaq",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/btwDXZ5a#qdxNCDEzZU3o23DoEeZA7NSxhJaYkXBf_LNp8FJ8NPs",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-15",
        title: "Surah Tahrim",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/btwDXZ5a#qdxNCDEzZU3o23DoEeZA7NSxhJaYkXBf_LNp8FJ8NPs",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },
      {
        id: "tarjma-16",
        title: "Surah Fath",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/btwDXZ5a#qdxNCDEzZU3o23DoEeZA7NSxhJaYkXBf_LNp8FJ8NPs",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      }
    ]
  },
  {
    id: "urdu",
    title: "Urdu",
    description: "Notes and resources for Urdu.",
    icon: BookOpen,
    color: "from-purple-500 to-purple-700",
    bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/20",
    resourceCount: 1,
      resources: [
          {
        id: "urdu-1",
        title: "Urdu Key Book",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/C9AngAjZ#2WW-hqa-_Gz9a6ahjOH-r551S4810d1v3nzhfy3zLR4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
          },
    ]
  },
  {
    id: "english",
    title: "English",
    description: "Notes and resources for English book and grammar book of class 12.",
    icon: BookOpen,
    color: "from-yellow-500 to-yellow-700",
    bgPattern: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/20",
    resourceCount: 20,
    resources: [
      {
        id: "english-1",
        title: "Chapter 01",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/G9xChY4S#r27AA8gqP5bEoVVscgHnxKScJ0PoYOD9lklSdPu6eno",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-2",
        title: "Chapter 02",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/zxQEzICC#9FkbBV6owjVVWU8XSRQU697NGsqNYvq1R-9A0C8nvUg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-3",
        title: "Chapter 03",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/C0gnlQiI#KUdW1fyDjbk6y-rm-4HOdlLLnJjcjurSjOqhQmO8YmQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-4",
        title: "Chapter 04",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/345V1STR#QQIJbDzTRIaImgix03ZkRlH2HTKAnX6OCD4OqBaIAr4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-5",
        title: "Chapter 05",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/bl41kCIK#n5Fz-qpZt43X3dWlUwLHEQdh9wvRU9E5aGhcq3n6VUE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-6",
        title: "Chapter 06",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/G9ox2AoA#cikCjYyyFS6vjEgpzDIIFiWjWGS-Yb0T3daH9k2pm8Q",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-7",
        title: "Chapter 07",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/CgIyjApb#NovuxHC6tTKiwjOijV7BGLc5OtRLqps00L_wi9uzP5Q",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-8",
        title: "Chapter 08",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/vwIkRBRa#Xs5OvoQUQiVdBg1sTOVwOt0nSLMXGt5klv0tD_sI6AE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-9",
        title: "Chapter 09",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/np5lnBpL#-8XUjjoMNUPUgxXAtnA5ZzvIoAV-2Fp7oha898LFSgo",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-10",
        title: "Chapter 10",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/n4xCCTCR#CLMW9rr9SWPaikFcjX9l0E8YgTtnNRPBapheLhim5aU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-11",
        title: "Chapter 11",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/X9IxmSBB#cqcyg9HsHJMBRq1J79gpfZBnH7SKMHthvXGLMmoLWDk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-12",
        title: "Chapter 12 ",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/OlBVnBAK#GodTI2msByjEDmIZxd0T_qnZEmtmsQ_TpE_6VSHx90A",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-13",
        title: "Chapter 13",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/SkIB0RhC#orditkPrIwRzSs_C6NIkdHiOIlljxNf-NIgmSBd4ukc",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-14",
        title: "Chapter 14",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/X8BhFYTJ#OckoVEIIHEUIEht-XGXcRx-uX2mnWRzY1vFzdTXGr4s",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-15",
        title: "Chapter 15",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/npokBQ6B#RfOgQktQP-dvmh7705iMv76fmpeOeiOUVGe8otIvfwk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-16",
        title: "Correction of English Sentence",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/r1g22BKB#wFlXomYLfHX65xhaxWL-oSWFu7OxyyKl4c6bt2ptpzI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-17",
        title: "English Essays",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/K5wSBbpY#CXvJHpZRA4od2Aydqsjm_jjnQQrwXSh7gcyghA3jFt4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-18",
        title: "Idioms",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/jsAxjDKb#B0NUjV123-dkwFtoUPSLJasWMJB85RxJk05CFiWa-gM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-19",
        title: "English Translation Paragraph",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/D8J0ELQD#zlxLPKz_8uRr68X9E3K2cpcAO7IS8grEZkeKp5wBKcg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      },
      {
        id: "english-20",
        title: "English Preposition",
        description: "Comprehensive notes for English covering Stories of English Language Grammar.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/b9YnlJAI#lK4iZIOXw0TsbFRihwWf1Y7TkQrMwqqJrIrr1PRrDOQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammar"]
      }
    ]
  },
  {
      id: "Mr.-Chips",
      title: "Mr. Chips",
      description: "Notes and resources for Mr. Chips book of class 12.",
      icon: BookOpen,
      color: "from-pink-500 to-pink-700",
      bgPattern: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/20",
      resourceCount: 18,
        resources: [
          {
          id: "chips-1",
          title: "Chapter 01 ",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/nlI32KaT#fgUnPya5fjhHntf4e15bZzQ4DmciAp61QbUOP76IPFo",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
            },
            {
          id: "chips-2",
          title: "Chapter 02",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/KsYi0QrZ#vLVF4pTHsdhT4ugNEsSPxV1f7FicCuj1R6ba2jLSIKc",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
            },
            {
          id: "chips-3",
          title: "Chapter 03",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/G1I0AaKC#itsSkUqM4XTaQb3OeGrAnOWeoO1v9yGxLDaqELtKek4",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
            },
            {
          id: "chips-4",
          title: "Chapter 04",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/jtozhZYD#nq64amdmi1zM1MlQtCJGAF2VVcUXozElE5liaL-wUcA",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-5",
          title: "Chapter 05",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/20hxDSgB#cGlwhhbyWpNJ_dOV8ksha9BqpuHv4liEJcBtSyuMnYM",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-6",
          title: "Chapter 06",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/GogGVLrY#8zZ47FsO6LN0LkF0iBLQDoDkedPQ87HbOlminrzPCUg",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-7",
          title: "Chapter 07",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/ihxihCoJ#So33MBmRQ8NCKEsK3s19vkR1zeGubm_WqDHkZMVz0mM",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-8",
          title: "Chapter 08",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/qxxxkQIb#xlNqjtxXtYnLicHC0Ct9bG61JA6-B0JvObvudPFR4XI",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-9",
          title: "Chapter 9",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/y5JRRIaZ#Urvjv-djhDpqsoxreyHv1wy2DysoS8OQO0n1NyBgcU4",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-10",
          title: "Chapter 10",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/WhwlGDrK#HUy59OyLYrbJU2B_8m18RNKuhJWagIK9S8j0sIrLyys",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-11",
          title: "Chapter 11",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/XkIjEQCT#mV5hq33JTPHb8JT_5uNbucqDz2u_3vnkw7bEAqH3kV4",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-12",
          title: "Chapter 12",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/uxAg1ZqY#kwo5777Jfav2TGu7uGNK2_PJ_6gMDg3wvR2oBqgCGJo",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-13",
          title: "Chapter 13",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/nwZE3BQB#6geLUClCJoZlNx7lXirB4dwRBqkGQcLnWkBczie08vw",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-14",
          title: "Chapter 14",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/ekRlADqL#qX_mrlAn3rs3l8umFZdACntn9rmX_iqfbxbxnxCa3ts",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-15",
          title: "Chapter 15",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/KlhDxIJI#0L0dQmDnLq6zdZvfZW_NF4XbiVwwK17Dd-rLbZQwfYo",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-16",
          title: "Chapter 16",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/6pQjwYrY#3YfnjYVqNFqv0T80yJ5Z5B0DthG8KVWt_QLOdRw71zU",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-17",
          title: "Chapter 17",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/u9QWXTQR#A9Y0wgJpL-nYHz3aRb4hep5HFGKCrhfQsq0iqA7UNGw",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
          },
            {
          id: "chips-18",
          title: "Chapter 18",
          description: "Notes and resources for Mr. Chips book of class 12.",
          format: "PDF",
          downloadLink: "https://mega.nz/file/O5ZjDZSR#XBXfcmD9t2-keJvgu1Fcx9CFXV3a1SeNsu1NlRKnUsQ",
          previewAvailable: false,
          rating: 4.8,
          downloads: 100,
          difficulty: "Intermediate",
          tags: ["Notes", "History","Pakistan"]
            }
        ]
      },
      
      {
        id: "pak-study",
        title: "Pak Study",
        description: "Notes and resources for Pak Study book of class 12 covering Pakistan history and culture.",
        icon: BookOpen,
        color: "from-pink-500 to-pink-700",
        bgPattern: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/20",
        resourceCount: 18,
          resources: [
            {
            id: "pak-1",
            title: "Chapter 01 Long Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/r8p0jLbZ#n046slbBoZZj7LMtmcqCtJqhd2pUxtI7f3M8qM7H4R8",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
              },
              {
            id: "pak-2",
            title: "Chapter 01 Short Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/zsgCBBTD#IWVIQLcMZuF8qVBpwzK_DkKbEoI7nOyW1c5Ad7LDsnw",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
              },
              {
            id: "pak-3",
            title: "Chapter 01 MCQs",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/y0Bw2awC#FgPPrAHu6OqySLJ0P5pjzpZrSsR1S9OCm6ZrOphSRGI",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
              },
              {
            id: "pak-4",
            title: "Chapter 02 Long Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/KwJDBQwL#_rK0SSaD7w06xA718_BBlWCgNlR4wBP17F2dfurwEAo",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-5",
            title: "Chapter 02 Short Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/ThonRJbD#WrSpVW3Yg4CLEhUlhBOSrclMGXqlRppm7OiBdVd6MuA",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-6",
            title: "Chapter 02 MCQs",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/jxwhRDiK#Uv07O8Pqg9aYTHf46tWG8GSkVJtQh3Fz1kw8_BmfSB4",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-7",
            title: "Chapter 03 Long Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/TlhjwIiK#RyeyXi6oX87g6fq08X6jdkIHpfrpkRH1QJPn3oYDlgA",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-8",
            title: "Chapter 03 Short Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/P8oVEBTR#FsaGZZZ0WnSoqPq-Bnr1QDPvXxPgFg27oVHNKgSGFe8",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-9",
            title: "Chapter 03 MCQs",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/ispR1ZDB#ir0Dre2QyMlCjDRK0Ttlr4-oHa3LBU-OhOOQ3QPT_Js",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-10",
            title: "Chapter 04 Long Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/e8AT2T5Y#DpVtjSDR4j391itCLjg3g4RfDgJTL19MrtFXM3P3-qA",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-11",
            title: "Chapter 04 Short Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/vsBXQDob#1GFlgIR4Yw1P6N0H6lfJ7JDjMdIVmqub7DA_LXVKyA4",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-12",
            title: "Chapter 04 MCQs",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/K5ZhyawJ#Hkr28E_X4FVbJCka3I6l1r944kcPRiDX-iX5uQCa7Rw",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-13",
            title: "Chapter 05 Long Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/utpA2KIR#aXvmASARNtu5Ir-ggztqd-HpeyIfuIrcC0S_ZNtRGhU",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-14",
            title: "Chapter 05 Short Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/jk5nnJAR#I-do68GuE7VeHltlieRqpPZEle60sMAXMxNk2Z0lZz4",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-15",
            title: "Chapter 05 MCQs",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/6oZmnQAY#YK7dRNYv5MWhuRggXAQ3b3kizGUm3ZpvXkv0l5YKPF4",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-16",
            title: "Chapter 06 Long Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/WpoF2AiY#hGhS67jccUXCjy_zUJPrzKhNz1ZOZbngKVECIU-Mxw8",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-17",
            title: "Chapter 06 Short Question",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/PkBHHTBK#6mjk3q39rr3VZQxGO3qDTSw6m-tbNvfNba5SkPaQm6o",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
            },
              {
            id: "pak-18",
            title: "Chapter 06 MCQs",
            description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
            format: "PDF",
            downloadLink: "https://mega.nz/file/rlZAGSjZ#uBlbl6KwRfmCpIgsrlk7R5Fem31fR0Pf_MrWK92cTnI",
            previewAvailable: false,
            rating: 4.8,
            downloads: 100,
            difficulty: "Intermediate",
            tags: ["Notes", "History","Pakistan"]
              }
          ]
        },
        {
          id: "biology",
          title: "Biology",
          description: "Notes and resources for Biology.",
          icon: BookOpen,
          color: "from-teal-500 to-teal-700",
          bgPattern: "bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-900/20",
          resourceCount: 38,
          resources: [
            {
              id: "bio-1",
              title: "Chapter 15 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/W0JSxQDR#CT8o1yQyizzDJ1pJac5GHinGoZEhW5GDNEzZX6PdejM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-2",
              title: "Chapter 15 Short Question ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/HwZSwTxC#yEHVzGhgRnr0wx8wB7724EBxBLDYsp3q8ImRzBX2Ay0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-3",
              title: "Chapter 15 MCQs ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/q45wCK5J#2cJva6l2qqnK6gLJaGDD_U3ZrszFR08SuUaU_2udwe8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-4",
              title: "Chapter 16 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/z9ZGSL7b#mkeLmdCg9XQl9NTDR7ig-LWQIbdu1EPIrUF7jHW5Ymo",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-5",
              title: "Chapter 16 Short Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Sopl2ArI#SVHORFC2KAKGKmFRKd_UCtifAqDaM6fK19t2r9F4v2U",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-6",
              title: "Chapter 16 MCQs",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/e1xxzRhY#Bp_IlyhL9NlkNVuyZNouagdoTlGuAZgI_IHPW_XSgcE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-7",
              title: "Chapter 17 Long Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ChRyzDYK#cZg1-GqGRNDe8begecydHrbgAO8PFJ-3kUnau83r7fA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-8",
              title: "Chapter 17 Short Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/rwpnwKgb#KPMBH9i2NbDoeQ3mXXpuUyb9cOrcwQ6-uhKO_ElGnYA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-9",
              title: "Chapter 17 MCQs",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/e4BTDbob#Gisfk6LF_kGQJUe-eBV_Hnn8pUuQC6bI7iuHrMop2Fo",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-10",
              title: "Chapter 18 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/y1o2gaBC#iJRF_dzhCSGdk3o9fQXkad6zyD97jB7n4VLc0QfYtlg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-11",
              title: "Chapter 18 Short Question ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/npokRbpC#nHzFYK8vukxeTPmoMpBK2LIggSCDbMk3Xn_swwaOzRA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-12",
              title: "Chapter 18 MCQs ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/b1pSzILD#B-9KuCGkX9W3CCaN9jq66nRimEgo3AE-cvom_Y1DGZk",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-13",
              title: "Chapter 19 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/SoQgxBKI#v61xw88YXJlHGnlSHsInO_YWlWJFwuROZ3YfJ0srLLA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-14",
              title: "Chapter 19 Short Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/mg4QjKAB#5pk_j6etiD5-p9fhAGplcQFQN8-JAJTlqexQgUV6ls0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-15",
              title: "Chapter 19 MCQs",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/68BiGQoa#XEEvbUH3WjlGf6VZYUPTLhq-RJq4MM1NZ8_vv2iQruo",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-16",
              title: "Chapter 20 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/W14zWSjD#kMU46r8OeJsyRFv2PiUXNP6DdxRW2TxnuFoRUgJkBhw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-17",
              title: "Chapter 20 Short Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/6hZDgAbB#TJgGSw4P4TKzDZzrApa5T3SvwMq5-ZB2r2pEkTfkgHA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-18",
              title: "Chapter 20 MCQs",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/6lJCgYCY#totGd1p77l2JsDlFMpNvNwp4RXca2IlbcsTWQzX9NUg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-19",
              title: "Chapter 21 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/e1omhK6a#vSo9EZJX-5BrAa-dr3rr8Hdjg9IjiJnL-lk3c_rJqew",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-20",
              title: "Chapter 21 Short Question ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/T9hzyTjb#8LIJGFrUYvfqrcpSlOjR9INmEIwbSzuP_OOfjuaiIyw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-21",
              title: "Chapter 21 MCQs ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/28ghDY7A#O6uTHaWl8GVreyQQX7Stm1LWdYLAdAIWBsf3EI6WkkU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-22",
              title: "Chapter 22 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/31xwTDhC#MCjTsE0CSwq0oMhoqBKJ6_TmNoe2vKT9r2Iz__hPmA4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-23",
              title: "Chapter 22 Short Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/KsgxkbqR#1IVOKQvisv5OZIy-4GvsSQsK8fW6mT3CtzH4XUCysFI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-24",
              title: "Chapter 22 MCQs",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/jgRiFKjZ#Wdk3UFl3aUrCsnWl6fweynrSZVevqxP8tcZmqRvOkjg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-25",
              title: "Chapter 23 Long Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/uwBy0aID#nZ18KUeAiAad2QLfMEETkD2lsaCyLUxds4jGwfZtdeM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-26",
              title: "Chapter 23 Short Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/nlA0jIyY#nCg3GbVeLaHaaGmuAqulp3msr9Ml_H_zcJw7aU8XfmI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-27",
              title: "Chapter 23 MCQs",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/6lJ1nK5B#JZg3LLDJ8owdjt-xWnxcelrSG7getCrLSD6LoXV2Tzg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-28",
              title: "Chapter 24 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/bkw2zJhC#-dfEQyanNZhR0fP7RfWo1b8ojix5B-HyLSgg2i-Q2i8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-29",
              title: "Chapter 24 Short Question ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/uxImDbDT#U4wBFHc4DWMUwgY5ssmx_uYZuW3lFQVlwkNlxvyQKRU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-30",
              title: "Chapter 24 MCQs ",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/bs523AIZ#ssJqadIVFkf9AM86mwSKQPL-vHFOtlbNHRENY4V36z0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-31",
              title: "Chapter 25 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/jpJCWC7R#9c-zmL-gK7FTdtEnBSfp_oyaRWdeYJWvDGnJgHeffQE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-32",
              title: "Chapter 25 Short Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/OsRAERhY#aKBXojleas-OlOMFqLnOZc0r0mefmvOG85tCY9fKbnw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-33",
              title: "Chapter 25 MCQs",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/DkQ0lKyD#hicRQMYICFWlJ0pvj06JfCKHSCGdAx9039lr0tojGeU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-34",
              title: "Chapter 26 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/S5AnHD5b#ddi6rgQVe825goXrKPhTbNvr1n5ArT5-ZlR8_Ty1cR0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-35",
              title: "Chapter 26 Short Question",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/O9hVlTZC#SJdPaoessEw9k6CTXwWRmb7vzobbKvEuPiVsLONUeR0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-36",
              title: "Chapter 26 MCQs",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/3pgH3LDT#ZL05Si4UO1TWuYCeFv5reiMiTG3npvGSb18xSd7Sx3U",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-37",
              title: "Chapter 27 Notes",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/TxolnQ6A#TdRjHDNr6egcZFfOhqKb28sEfmAI-VSCoA4BfiY0tAo",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            },
            {
              id: "bio-38",
              title: "Chapter 27 MCQs",
              description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/yo5VTILT#uVBTa3pHPIP6Io2PxbyDfk3EV-hSELuAqSNd4aWkIlI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Biology","Human Life"]
            }
          ]
        },
        {
          id: "physics",
          title: "Physics",
          description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
          icon: BookOpen,
          color: "from-indigo-500 to-indigo-700",
          bgPattern: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/20",
          resourceCount: 30,
          resources: [
            {
              id: "phy-1",
              title: "Chapter 12 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/f0I0hYQI#eEhbtgZfklAFLQrcsULIqJ-5m3qXCIo9oxrbD6uOEDQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-2",
              title: "Chapter 12 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/mp43zZCJ#Txi7SamPnJ-UnHBU1S8jjJlLOdcoWeV_FNNKhf3q8-8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-3",
              title: "Chapter 12 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/utZBmYaL#giqQSRsHzawedpOxFXsQ9cEkZugkhIwgp6FchI1iJPI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-4",
              title: "Chapter 13 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/GkpmmZrT#9wIq_JKfHB5uzJZsLTNn50EpP3k-jzxFi0yu1B-a7LQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-5",
              title: "Chapter 13 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/HsZwwaqI#ar1ugfHZPAen5kt67w8QKeS4bN76OG5lZOgxKEW9YGc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-6",
              title: "Chapter 13 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/mw5HnAaS#ViWfdkQk254lOP56egvlTtsmLxM5yU4ryH1b50CmsBs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-7",
              title: "Chapter 14 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/WlgDHZAa#r4qUah33hh0mADwtT3E3PV7VEDX3qKnvqN18LFxWtVA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-8",
              title: "Chapter 14 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/2s5V3Jxb#BJFXSa53S9iOS76Ugs-xVdQvxcBE8NptR0s_FgONX9k",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-9",
              title: "Chapter 14 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/uhgRxKDD#lkrCL6LuZV4yRo9G_AsCO3tGJJrcIDEJLiLXXVru9Kk",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-10",
              title: "Chapter 15 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/WgIE0QaC#s7QstWx0E7tSQzEpo6ylwaMzAEHN2nEju7WI30X-3YI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-11",
              title: "Chapter 15 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/joRkCQYZ#Qc6H3gkxmzwmQ76P_XWyYByvw99VM2iFG79jTqu_sug",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-12",
              title: "Chapter 15 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/bt5nAAbB#Ha-KUfPbE5eSoUAo-mtatNWS_-m-GO2wCmBDj-30uoQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-13",
              title: "Chapter 16 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/qkhnhIqZ#-sq-i1fo81ucFsWs8mzrq7i8NJUbXCShyW3W-QO9H1s",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-14",
              title: "Chapter 16 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/u5BBXJ6C#Bc6gZzDatlq36NkgyN6Y9ybsqoZJI6OXKImL4NOpHQ8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-15",
              title: "Chapter 16 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/G1ZE0aLJ#K70B7yOw0wqxtd7Ad_Q6SeY_5Vtf45hF-AN_kF4oyIw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-16",
              title: "Chapter 17 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Hl50FYJD#EaFK2h6dTpYakCOf8Fiac5hs9JeyHNA36P6UQADt6bE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-17",
              title: "Chapter 17 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/HwQ21ZwL#JtJAZcXJF3jWYlUBovZMhod_fJGzUMTy_SQyj8iiqkw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-18",
              title: "Chapter 17 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ylAnGY5K#q0jxEVyvh7cd0WUPAoKE098gccexaOp6f82PbjTzPEI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-19",
              title: "Chapter 18 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ao4EmBpI#qcBV42cnBft_DpggNtjkMc9c3q_Js9Y8xfnnWeGXZHY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-20",
              title: "Chapter 18 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ftJjSQoB#fzNeLQqwicgG25a3z_ZjH5sokMzysECbuJ7Tc2w0hvc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-21",
              title: "Chapter 18 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/v1YDzQqQ#mgXjlwroCBtZpsLMCzirJF5pIVWr9oAtqswxOT_XEcw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-22",
              title: "Chapter 19 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/O0BlzLZS#4nJcUEt8fh1MQYadQ0YrhuItEL_IGEFhB2iD_dXsjFQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-23",
              title: "Chapter 19 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/moY2GJyJ#uCj77e3E5LA6JDYalIhlosGsTDATp4hR2RZchPOw1NA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-24",
              title: "Chapter 19 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/roBz3Z7J#9T63zbRYXUc-Jpq4docOMt81jWvdbDEEqFIzujSOwDc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-25",
              title: "Chapter 20 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/G5Qk0KoK#iPsbMe08CAscXqw97mQ_Ab_fMtLCS1o38v5ZYEJMLxU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-26",
              title: "Chapter 20 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/2kokzZAL#vD5IoscJj41lY_TQ_Q27LfyAFIFPTi0vRp96t0GhVK8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-27",
              title: "Chapter 20 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/TkxBCZIT#ususxzLynt1ACLVv6XnbZ9PTQlb-OI50hFJ9MPdjkfQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-28",
              title: "Chapter 21 Notes",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/agwC2KTC#uEvvDO8RKuR_6tJANN2YvHZCwiMclehtqXiyAwvcA-k",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-29",
              title: "Chapter 21 Short Question",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/T8ww1YyK#kX42dlKOF0IGiG1MnDGQx4E7RgfpjWsN-xfg8Qj0HsQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            },
            {
              id: "phy-30",
              title: "Chapter 21 MCQs",
              description: "Notes and resources for Physics covering Physics Fundamental and information about measurement.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/vsglWIpQ#iCXF3iliJQU4v_E0eE8oQO7LQPn2iO4zRbg0KdHnoEg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Physics","measurement"]
            }
          ]
        },
        {
          id: "chemistry",
          title: "Chemistry",
          description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
          icon: BookOpen,
          color: "from-red-500 to-red-700",
          bgPattern: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/20",
          resourceCount: 16,
          resources: [
            {
              id: "chem-1",
              title: "Chapter 01",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/nhImRCrS#wf1kHHkClt3dadQE0GXdd0DaozNnKgZKyrHTWaBGuPA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-2",
              title: "Chapter 02",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/78wzVahC#_fstM8PtkDa6hrSFB5J-BmRIoRlNVavhFoSh4i1on_I",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-3",
              title: "Chapter 03",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/71okDaZD#nhB2uK1lxwXkPxpHULfgBHvAFaDHrB4VoFDxRO7COVE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-4",
              title: "Chapter 04",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/O8oihB6a#mhhhYN1fVLymIY86SnjOfm5C7bNk_4hwvyUj0Xkr6Z8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-5",
              title: "Chapter 05",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/DtQn2TzL#2CDNgrA7pa8qKuR3Ni-aC-i367XRIrXNY3Lrk0Q2Cyc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-6",
              title: "Chapter 06",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/60QiSbDb#YX1tVW3slB2bf3qx04wRUFPuQvyw_FxGaSw2mdJNmPg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-7",
              title: "Chapter 07",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/TgYSQa7I#Eb1LSUZs73bFmdTDXWChjVhx80QhTEU0_YOHPvj2nEc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-8",
              title: "Chapter 08",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/61gSwZhZ#JIAqQuBW5QP1fc25Z_wym4Lx0Wv-GTIJX2yK6hYUl60",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-9",
              title: "Chapter 09",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Xph32YCI#9eZLF3YXaiAFBQ7hqwk2OhC1zIIc0j-Y_2HS5Op8ck4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-10",
              title: "Chapter 10",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/T9QCzbCT#6Jy-D7I2wUi7Ph_BC_VaP8rQHN7lzr1YVfHuhwC6T3I",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-11",
              title: "Chapter 11",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/etIySTbJ#qT8nS-kbR5UUKN_nk6bXbmzRHJlDee4Pb0rU4v3osCQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-12",
              title: "Chapter 12",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/OkJniYqT#tYa1ywnDK1YOkXzcxjA6SBMRaw5YQMHCZboqobaEjhY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-13",
              title: "Chapter 13",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/jwJCXRhQ#4iJdg4yHnKMhhCMA8Ycv2yZfVkS9xGRWjYN_C4XTDmY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-14",
              title: "Chapter 14",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/HxIGDRrJ#7FdOA1EfygSHgkcLNSqZAyrzOvE0UAVyIGjw5c0VZTE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-15",
              title: "Chapter 15",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/qpREQBJJ#zyhO3ZpMPF-nMuHjc6sY56ymW1_736cCOpUjhP3hc5I",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            },
            {
              id: "chem-16",
              title: "Chapter 16",
              description: "Notes and resources for Chemistry covering Fundamentals and information about elements.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/u8pEFBzQ#xTw8pawZP4BPxGeviu_YfxImbigd5IDTVIZMQDjNlw4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Chemistry","Fundamentals"]
            }
          ]
        },
        {
          id: "computer",
          title: "Computer",
          description: "Notes and resources for Computer covering Fundamental of logic and programming.",
          icon: BookOpen,
          color: "from-cyan-500 to-cyan-700",
          bgPattern: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/20",
          resourceCount: 42,
          resources: [
            {
              id: "comp-1",
              title: "Chapter 01 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/PkxAxbTC#bkcd4_DnOsEbiY_OaTfVixR2r_NQ9GABoiuH2irEsgw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-2",
              title: "Chapter 01 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/KgIhjJBK#NlEUHoZWHc2lMDRTEWLoeL3bG6R0oHVhcwHdkfbB65w",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-3",
              title: "Chapter 01 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Kgh0CKga#mjCWpB8J1U9FmpV0hy2cXgzlIj5EAlPhTB11dFqos5o",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-4",
              title: "Chapter 02 Notes ",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/C9p3VBBT#7J1l2Xa3RfLBtJFPneFXN1DteYslFxnWHIB8a4bMRZg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-5",
              title: "Chapter 02 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/L4QCwZaS#xDgVshJwZBktKBIKgVPxFlw-Z51TCxb81qVOuocPe9k",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-6",
              title: "Chapter 02 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/H9A1BCxS#EUVap_61YLsrFjvS1ARE8GqcuUyjeaWY3yHfvITsiLY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-7",
              title: "Chapter 03 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/74h3DKQC#5x4GPElduYGBpFi75smi7YjokjuUG7i_tNxJtT19xoE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-8",
              title: "Chapter 03 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/b1hijZpb#6_f3SdbKjDKVhhhPY0KdWVFC0L0jXwZdcVGlhT0V7-4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-9",
              title: "Chapter 03 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/XkAA3RgJ#Y0N2HWpb2n3nLAKua56Wg-TEd3ifzv1onHucAKnnFcs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-10",
              title: "Chapter 04 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/2kpAASoA#d--WKhdOtmT_p5KEekq8WqxhF4gDNBCc6Bnk6q8c4pQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-11",
              title: "Chapter 04 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ToAhVSBT#gBQCng4SklGuO1KPdn3sZUlTSPmTeRbRnhLjoUxho_E",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-12",
              title: "Chapter 04 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/6gYkQBgb#qL1dtXc2FYj0FMWA4hloC53yNoBvfVB4ix5ipb0EDf8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-13",
              title: "Chapter 05 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/X8YXja6S#MRsafyHGcyVYLjQMoIEB3-L-vjp3m0OSBiXrhV28_BQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-14",
              title: "Chapter 05 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/20xhjZJb#sbXG_OWQ7BuSoWG_j3aNggNtBw8fritjl5Zet3Axtf8",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-15",
              title: "Chapter 05 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/CtgTVLAZ#M8GnBsgBxKP6uyuCUrx1Twx7eZ_UR_cjMF9R6pYeQJo",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-16",
              title: "Chapter 06 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ToxUlYAR#2fQx-ZwLEsMAqzb12k4aw8knlr0C0Q6spzuV-cOdJxE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-17",
              title: "Chapter 06 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/b4hVBQjb#ePCI5lxB4yvnVx5slT3Wuc03K7Uz-BRdUU7isOomxA0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-18",
              title: "Chapter 06 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ThZF2LCZ#tZb6DiQn6OpEtcXqOl06BHAUQA3xvYHn2gqD2OmSxtE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-19",
              title: "Chapter 07 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/X8ZBiDgL#5UV54nFa95YDFeOHnQh3gswH3eLSf8v8qQqluZ1LD80",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-20",
              title: "Chapter 07 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/f4gAnZYQ#Yim-TqLAMWmz5mPfmNrcu7uG9En95Ij84FUqSE1KEpY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-21",
              title: "Chapter 07 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/2oYyGS7Y#Q23v5uPcd6WcryZ_4Lb01Qfzk3vmOI9lu9Cx402gcLg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-22",
              title: "Chapter 08 Notes ",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/uxghEQCB#44DgfHFRAMbIp_4SN8-ppIBvtzGsRY0ZMHrUh6ELnhc",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-23",
              title: "Chapter 08 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/HtYnDZoY#BhQUM4QEDXmD4iEu815wl5GzyXyWQMLF2vH2chNpljM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-24",
              title: "Chapter 08 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/3txCxTga#hAnT_ogjcREy61wqg2_SXAV9YzdhNhJIF_X4PWCuXIU",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-25",
              title: "Chapter 09 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/q0RhBL5Z#qk2JrNll11SjCBPsLSjViNCCts2hG4pKgFgZWLIVt8o",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-26",
              title: "Chapter 09 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Xwg1kboL#7q_NVONuQpe7HILGuY-2q4KHSHtmiXUpGLeaRXrvD_4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-27",
              title: "Chapter 09 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/GohUgBZY#2fx1q0yyEYlYMpXQvGGGpyLVjPOg3mSqzFG1MunnWBY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-28",
              title: "Chapter 10 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/7lQxCJTK#HMHT1E0ipizZUSE-FHR9lkJXwJJi1Llw_0GZ86uOV_0",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-29",
              title: "Chapter 10 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/yoghQLDS#dI7pHvMwh3B5BclxMPUXs3IVvPOFRJU3eRsExoa8DXk",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-30",
              title: "Chapter 10 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/fk50gJKL#B0OID8zdWVzwwF22-mTsRXFesbJaLLryqpodpQL0sjE",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-31",
              title: "Chapter 11 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/KtIHVAQL#ARklCd6uDtva8m0uSv0YVDix0cXqeEnkVu6EbuDlfmg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-32",
              title: "Chapter 11 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/3ogBkKbK#-YVtR6gZQTCdLRcI-TG0Gu-hIUJeb5LpRDAqmOUPS1E",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-33",
              title: "Chapter 11 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/ipZWGBpa#5jkgQmNkqgZRAUcMBk8cEYxS-RwRKLUWTmQba1427Rw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-34",
              title: "Chapter 12 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/O1wnQIZQ#X6A1JPKs0ccIPySBXmKqjjhKSPwUJlbWeQIszdjCvic",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-35",
              title: "Chapter 12 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/S0ZlxDYJ#63XVguQPerG38AI5yGJnMX6_N60ITSnA4EWfUodDNKg",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-36",
              title: "Chapter 12 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/T0RSxZpY#qz5r0XzBhveeMMNJH_jtkiDgm025KsF3C7-3Df-bNnQ",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-37",
              title: "Chapter 13 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/G0Qh3a7J#Sob-0I2LTlEVsK0k6EUx4dFcxpeQNwQBMH3Cr4a9GZY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-38",
              title: "Chapter 13 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/KkQD3BrS#Nu4UvnorBwlGLTtN-QxiPLeCgVlu-ltUbAZEUs8BplA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-39",
              title: "Chapter 13 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/T8RQhArZ#JlVHuRcczv9ZAhIAuq1IPMPowvb2zMSiCc0tWNX2qVY",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-40",
              title: "Chapter 14 Notes",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/O5AG2bzI#4toXkIN5bb9pishKNVUE40AVpedxpoOGYPJbqT88lA4",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-41",
              title: "Chapter 14 Short Question",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/2lwRGSob#NXgkZ4pPaL1OfOZWhm9u2JG7ku3XfXHM5wOIVMLqA3g",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
            {
              id: "comp-42",
              title: "Chapter 14 MCQs",
              description: "Notes and resources for Computer covering Fundamental of logic and programming.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/nkJwVSAT#mM7MsS25atlv5dc3EiGQSFijjK-VxxCJvXGENpOlICI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes", "Computer","Fundamental of Logic"]
            },
          ]
        },
        {
          id: "math",
          title: "Mathematics",
          description: "Notes and resources for Math covering problem solving and learning techniques.",
          icon: BookOpen,
          color: "from-orange-500 to-orange-700",
          bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/20",
          resourceCount: 7,
          resources: [
            {
              id: "math-1",
              title: "Chapter 01",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/q1pWSASQ#Tzqy64lgofJJgMDJHcemKwF9X9R5B4HNds2MsD6X1NA",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-2",
              title: "Chapter 02",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/itwVBRya#A42pLOyCoN8MCp33ihvuRFk7izZX2xQFMn7AFyCzaFM",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-3",
              title: "Chapter 03",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/e0RUSbza#L8s7IzrNt0HyEIHcauL4HUthNxQd2ikSVLxMp7OnzQs",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-4",
              title: "Chapter 04",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/G04TTSwZ#9U3vTiV-lXdpULGb1TDpYHZ-JQYE7f_lSJt0c2zSuYo",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-5",
              title: "Chapter 05",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/Kk4kFKKQ#jV_2sd-b8HsG6WJgd5cSFUSTEsNMSoM-LtfCNpD-9cw",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-6",
              title: "Chapter 06",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/65Iz1AhK#UWV0sf8avpZ03vdEV6mDtOE2ZBVWJK91ExHyS8iW-1Q",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            },
            {
              id: "math-7",
              title: "Chapter 07",
              description: "Notes and resources for Math covering problem solving and learning techniques.",
              format: "PDF",
              downloadLink: "https://mega.nz/file/H5gBgRTb#aMYHAPVmwWXSQG4NUByYWmZgB46elzUNijk5tFJTEyI",
              previewAvailable: false,
              rating: 4.8,
              downloads: 100,
              difficulty: "Intermediate",
              tags: ["Notes","Problem solving techniques"]
            }
          ]
        }
    ];

const Class12notes = (): JSX.Element => {
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
          Class 12 Notes Resources
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
          Comprehensive study notes and materials for Class 12 students covering all major subjects.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">12K+</span>
            <span className="text-gray-600 dark:text-gray-400">Students</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">207</span>
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
              Ready to Excel in Class 12?
            </h2>
            <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join thousands of successful students who used our comprehensive study notes to achieve academic excellence and secure admission in top universities.
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

export default Class12notes;
