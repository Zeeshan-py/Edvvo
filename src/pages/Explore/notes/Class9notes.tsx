import React, { useState } from 'react';
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
    description: "Notes and resources for Tarjma Tul Quran Class 9 including Surah notes and Quranic recitation.",
    icon: BookOpen,
    color: "from-green-500 to-green-700",
    bgPattern: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/20",
    resourceCount: 10,
    resources: [
      {
        id: "tarjma-1",
        title: "Surah Maryam",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/nwJigIrK#EwUVXnj3ypWRTrHgvqqLSELau1Fbdhy-J6hbAL2W5UY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-2",
        title: "Surah Taha",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/i8ZGRJ4a#zq56iZxxZ1XxqCYbmxyc9yTxCTrbd4KRM0wzwd4IsaI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-3",
        title: "Surah Anbiya",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/f8w0ASza#aqtogjnZdrtZSA2v_qTPKedO2WDzlk1HCbApMHyBeZA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-4",
        title: "Surah Hajj",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/u0h3EbZA#V8PhjPh_TA4OuBlM4bO_f8XGSgjIP6mYdp2Sc97FrAk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-5",
        title: "Surah Furqan",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/egJmmRzB#hWhCK4ongxKUkvmZsnGAros2ao_Wmj6UJHSQ2qN48sU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        
        {
        id: "tarjma-6",
        title: "Surah Shuara",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Dk5zyYIR#4RU6fjcDJPmPy5NYvHw7gcn0lQqLFBB1mbbety-vT40",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-7",
        title: "Surah Namal",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/i1QW3SDS#x5Cj8fy0LAqUvA4rwGJWL1DUqz_MNqn9iHWgu__gcHI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },{
        id: "tarjma-8",
        title: "Surah Qasas",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/vtxlVYYa#w-NA5SBURiyYzHbNaqAJB-PlvG25b0cQjcpJn6CE3FM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },{
        id: "tarjma-9",
        title: "Surah Ankabut",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/DhYEjb5L#xI5a90OfLMuXOllrzRsIifN31Ai1LRP-hr6z0hTmZvw",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
      },{
        id: "tarjma-9",
        title: "Surah Room",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/i0ZCmA6D#EtGXqqjI1CP8pGumgV5MPJ5-h0qoTm7xUADwH_NGgx0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-10",
        title: "Surah Luqman",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/3hRGCQgL#abZUunUgL7R47mIFy8o12TQY8C5udJTe727UEM0ZV9I",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-11",
        title: "Surah Sajdha",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/XpAgVBRC#Yehajl-dYRRtF6mRwOy7x5l_uar-EbDLWXcrWcpAJqQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-12",
        title: "Surah Saba",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Csg3DKaT#yQInoIH3Pl5A70bD6H62J6GUIeoPRsjMQFX8Wsrn4oE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-13",
        title: "Surah Fatir",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Lkp3kTCQ#V5wab4yFntMmwLnIJtykWA913bn2AqBszfw7sWDRRbM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-14",
        title: "Surah Yaseen",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/yx4gTJxa#EsZ0GVjA7DHxNh2g4saJSNQVYvWm7Xa9pPai-BtCKvo",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-15",
        title: "Surah Saffat",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/7xoWjRqb#828AO1pqGuWvxqtwIj0GJ3YLAWcZ247qz8AtAU4iM50",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-16",
        title: "Surah Saad",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/i9owxLAa#Qxb4cNwtelmKu4JfszxcKdIpo-NYcFImQUA_8R2D2JE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran"]
        },
        {
        id: "tarjma-17",
        title: "Surah Ahqaf",
        description: "Comprehensive notes for Tarjma Tul Quran.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/68RiTA5Y#e4yvx-Sy1CblhS4wCD9Atsan87MnfxLcye3vgmMa0tI",
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
    resourceCount: 5,
      resources: [
          {
        id: "islamiyat-1",
        title: "Chapter 01",
        description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/G0JH3IoT#RQ7f5YDB-I0BsW1M9_A8EKCIMhgbbXDt55RdJzcJ_Kk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran","Islamiyat"]
          },
          {
        id: "islamiyat-2",
        title: "Chapter 02",
        description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Hpg1UYyC#wza74q7VjZsiLnGwAAErcMth88DMxwrmztz1A06YKuQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran","Islamiyat"]
          },
          {
        id: "islamiyat-3",
        title: "Chapter 03",
        description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/3lAwXAQB#zS09nlMcslE_YjGGqJvcQnv6z1RZfdmTw9iUH4MmVEE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran","Islamiyat"]
          },
          {
        id: "islamiyat-4",
        title: "Chapter 04",
        description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/2tZQXCQI#B0s3uJQpryraIJUH5V2z_O6Vwy99-NZZgUo5Kkpd2dg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran","Islamiyat"]
          },
          {
        id: "islamiyat-5",
        title: "Chapter 05",
        description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/z9QCzDLD#9eU91d-jtm1GfwBZKA223N_kSmgHbFZvArBaZNaseK8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran","Islamiyat"]
          },
          {
        id: "islamiyat-6",
        title: "Chapter 06",
        description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/O5Z0CI7a#ZUv3-pWBjpZkZuXLwX0Mej3uQDV-lLWZ1FxgD3Z8Lwg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran","Islamiyat"]
          },
          {
        id: "islamiyat-7",
        title: "Chapter 07",
        description: "Comprehensive notes for Islamiyat covering concept of Islam and its basic principles.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/fsR0ACJS#p-GoZOXbha_hNi5E55VCHgJ_Sx_vL3njuIDEFxvFIKs",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Quran","Islamiyat"]
          },
      
    ]
  },
  {
    id: "urdu",
    title: "Urdu",
    description: "Notes and resources for Urdu.",
    icon: BookOpen,
    color: "from-purple-500 to-purple-700",
    bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/20",
    resourceCount: 3,
      resources: [
          {
        id: "urdu-1",
        title: "Chapter 01",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/ShBVFYST#FeDWrihLojWH8vVkyG53vzOtF3_USxnYnMiIUukPJIU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-2",
        title: "Chapter 02",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/G9oxQBaa#3OyVIuWcq8lIcYFRVjjPF4qwW3Y5OrWcx6BPrTZ848A",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-3",
        title: "Chapter 03",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/nsAHSLwC#Lbw5b79atxhQ0bbpyd1fhEM3zLmmczQD971pfWfiYdM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-4",
        title: "Chapter 04",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/SgonQIAK#QyzK1kh9Rkrpdg0JNX8PlfU5xmDaSwEH8d91TCRRE2Q",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-5",
        title: "Chapter 05",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/jwoyHDQY#U9GLWLCXftyouKj1MPpNP46x2pCVyjR8mVbfWd5HANU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-6",
        title: "Chapter 06",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/3g4UUYrY#RzBrGGmLzHw-kv1qcJI4llIhclSMcSsdvvVdGnWGTxA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-7",
        title: "Chapter 07",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/30RlFQrL#C4AQO3-x1A26zhncrSqEvfjdwQ_4pSvp3UqArGVBCjs",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-8",
        title: "Chapter 08",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/exYhWR6S#FudH8wdu3HF6IHCu-wfF_bgpiFXEjS8JL0xa36AYURg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-9",
        title: "Chapter 09",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/D0ZySAba#wQHd_p6xgbTWahA9ovejyllh5mmgGcDnPvs_F_BcIo0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-10",
        title: "Chapter 10",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/mwphxCyJ#YtDuNT0_GvxyBzKFrV6WSrH47tCxuv_UO6DUxJjD-z0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-11",
        title: "Chapter 11",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Gl5zQT7a#Vjntzji4xaOk6GY8-C9IXFrwEg90YcyB85hijZ3t5VI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          },
          {
        id: "urdu-12",
        title: "Urdu Grammer",
        description: "Comprehensive notes for Urdu covering Stories of Urdu Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/7tRBjKzQ#TqtsPAHkMde-eNa3AxXlRqykRis6mFUcSY0_J25wQdA",
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
    description: "Notes and resources for English book and grammer book of class 9.",
    icon: BookOpen,
    color: "from-yellow-500 to-yellow-700",
    bgPattern: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/20",
    resourceCount: 2,
    resources: [
      {
        id: "english-1",
        title: "Chapter 01",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/28YgSbIB#3-Klu-_EpzvulfjzZH2UNUw8JpFGGuFGQk3vf1oDYAM",
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
        downloadLink: "https://mega.nz/file/TkABETKY#ll0O7BVPoknhjmhWRJmhT3a2nLB5MtyiPyLMUNv-UvQ",
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
        downloadLink: "https://mega.nz/file/SoZQRSiL#igLragABson7LBhJ5Ik0KweXbMvxaCD4OyunYlSYyXs",
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
        downloadLink: "https://mega.nz/file/PlBQCYJI#Hw49sB_HaSwNNsNA0RKy9R1QNF4LW5Kzuuf7mv1oBd0",
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
        downloadLink: "https://mega.nz/file/ewJlkZIJ#LjmJDnJ3xcMMSbgnOF32aFdGMdEKBtL2x-8dwYQTRG0",
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
        downloadLink: "https://mega.nz/file/zpxDmKYT#_namZvjjZ4Rs6ujA-wHiUb6RNi_s7jxfQZ-VuhgIgLo",
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
        downloadLink: "https://mega.nz/file/OpJnQBZS#LOE8gImlV_qSSwGRDyQLlD5FNP_Ris3-NsEXH_WXITk",
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
        downloadLink: "https://mega.nz/file/eh4CUDrZ#mvcl4U0IP2mmW4l9Q3E0BIPRVfzwZeKUHbte-2Bvhjs",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
      },
      {
        id: "english-9",
        title: "Chapter 09",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/L0hWRbYA#mqKQHeOGFVUR4K2-7gk8Qn6HLepqQ2bI8Lwgxw6OL1Y",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
      },
      {
        id: "english-10",
        title: "Chapter 10",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/ztJhyKwJ#4UcdjZ9p6eXvZBhGuakH0XMM31JGvwOnAna3k8qDFx8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
      },
      {
        id: "english-11",
        title: "Chapter 11",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/OsABgIib#1mKg8X-7ZEqCRgUMAQey6gomujrI4RFu151qFsZtEG8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
      },
      {
        id: "english-12",
        title: "Applications",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/fw5nwJrK#3-dxoSpfU1bjzZx41CnNvhCKGHy0qCfSzDTlbIC2D0Y",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
      },
      {
        id: "english-13",
        title: "Active & Passive Voice",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/eowT1CgJ#H760GSpC0kvo3hoEJQc5ElR3aKboXZFp7x8rOlQaaVo",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
      },
      {
        id: "english-14",
        title: "Idioms",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/nhwCwLzD#kdXnItP9Aps054FezU1A_EBXkUYv6s9fDkhpkMVmYUc",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
      },
      {
        id: "english-15",
        title: "Letters",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/C8xAkDpT#0aCLlRxsxGT-9d6-0lyJJwcQTp-bzrJrRU0wW2HUWm8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
      },
      {
        id: "english-16",
        title: "Stories",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/S442SAbD#5CIJtHSMqEfuk6AciUmcPVC4JQ4SwZaTbEpuJxeY-OU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
      },
      {
        id: "english-17",
        title: "Most Repeated Words",
        description: "Comprehensive notes for English covering Stories of English Language Grammer.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/GtA3WCDa#4iaiJK6NjTU_rUJ7YARLRNKuek105jk05inHEshcgho",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Story Telling","Grammer"]
          }
    ]
  },
  {
    id: "pak-study",
    title: "Pak Study",
    description: "Notes and resources for Pak Study book of class 9 covering Pakistan history and culture.",
    icon: BookOpen,
    color: "from-pink-500 to-pink-700",
    bgPattern: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-900/20",
    resourceCount: 1,
      resources: [
        {
        id: "pak-1",
        title: "Chapter 01",
        description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/6hx2FRbA#SolvY-dd9T-Fy3mHYrSxQDB7kgSGSP-nyRYzrBPMX1o",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "History","Pakistan"]
          },
          {
        id: "pak-2",
        title: "Chapter 02",
        description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/X8gimBCQ#s6UD7B0unh7RjYpC3q-u7o_SH9NYiuC3BXQ-PGpgb9Y",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "History","Pakistan"]
          },
          {
        id: "pak-5",
        title: "Chapter 05",
        description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/S94y1TIC#yk_Ve_g-o5rEPuye4Yr6087h6ix7Ytc9FgyQDs3VkQQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "History","Pakistan"]
          },
          {
        id: "pak-8",
        title: "Chapter 08",
        description: "Comprehensive notes for Pak Study covering History Of Pakistan.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/3wRjnShK#FWe46vHGH05wGm0wNW11O4GXm2MPNXwySAoAe048uLE",
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
    resourceCount: 4,
    resources: [
      {
        id: "bio-1",
        title: "Chapter 01 MCQs",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/apIWTBQL#dyeseHc4V3egtwwz7eEBN9zzSsuudqSntT0UgGCBFeE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-2",
        title: "Chapter 01 Long Questions",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/rogVzKID#y5bhtmhSv_rSvHV70B8enMVpNoxZwXzEKd-WwB9Km64",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-3",
        title: "Chapter 02 MCQs",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/OwI1iIZb#BLU6P11z9fa0W4qVC_UR-BXS09Cftd28uHtju8viNR8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-4",
        title: "Chapter 02 Long Questions",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/bwhySB5C#ddAQ0kmAsGBLxiCSBRBXdWYfoWh6-L7fDow6WKaNhQY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-5",
        title: "Chapter 03 Exercise",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/qoQRWJaZ#eHLZ4xPloUAxo-qSy_uWNR6sD1w0yJSdW6bSzs4aqNI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-6",
        title: "Chapter 03 MCQs & S.Q",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/ioQhQSQS#wsnn-FWlGHFEbXX5awE9rWGzDBZgIiEtQogx_UXqjkQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-7",
        title: "Chapter 04 MCQs",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/H14QxAbS#rgqcywEF-5eXuo1uaxTM_nfQkm63DOWMS4mznxoIGhE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-8",
        title: "Chapter 04 Exercise",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/6oRhTa7a#HY_heHKM4ORy93RPL3sPyYZigDUIJv17OoNF6ej60ro",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-9",
        title: "Chapter 05 MCQs & S.Q",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/35AixJgI#vLvKaTkgGZRk84Gvvm6scECoYJ9hgLLZOe4MYBIw4bM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-10",
        title: "Chapter 05 Exercise",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/ilgFkaSZ#QsdyjG6_-kG8_0V8HQr7bpW8HRGiYBTamg5faUSiZbU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-11",
        title: "Chapter 06 MCQs & S.Q ",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/asIlRKyZ#DhlCk6imTaoi_2htSIAKx111N-MqMWKgxD-O9uKaHR4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-12",
        title: "Chapter 06 Exercise",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/b8IhnSpJ#DHI49SjwmdtwbXS-1k7xuULSOU8cR4xC6-u3SmGQpWA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-13",
        title: "Chapter 07 MCQs & S.Q",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/bpwDxT6a#8jFYuwGj95MAzaZdY132VibPSXZW-udmLMaDDkdeMas",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-14",
        title: "Chapter 07 Exercise",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/GopSjboA#R7klxCGl0xIZUGNAFR0-aRBxzwfktUCS7obbPjxeLbw",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-15",
        title: "Chapter 08 MCQs & S.Q",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/PsBSVATQ#qjdoOMBbYEsJPEh7B_jKEuTsqHHMa-TwlVIcoUSIdzY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-16",
        title: "Chapter 08 Exercise",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/7twEXCYK#KOOpwVPq_cNksgj5Q2-5O4waptsZD7UT52OARI_l5oo",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-17",
        title: "Chapter 09 MCQs & S.Q",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/3hY02AKC#FIixBo_PIf6h_DZXjcDD0nIUPT737WmJK0-KCWu7S6Y",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-18",
        title: "Chapter 09 Exercise",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Hh4wCRyK#38hyJXsjzI9ABdIO-Wl4ptTO4I1H0p9x_3UuPqcFhvs",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-19",
        title: "Chapter 10 MCQs & S.Q",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/qkIkwaTb#sZcr-l3njf5RnJDv7_Q0CeRjV62HKJlHSdP9VtCV0xQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-20",
        title: "Chapter 10 Exercise",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/exxnWQLY#KZtMdIXNNKWQhUj9osCjY-3VoysrfXRbzx0UL-8S168",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-21",
        title: "Chapter 11 MCQs & S.Q",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/rlZw1KJb#f7MHVaWIpFGFKCWVUnTen5wOm3S6_7VDD_Wdj9B7i1s",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },
      {
        id: "bio-22",
        title: "Chapter 11 Exercise",
        description: "Comprehensive notes for Biology covering Fundamental of life and living Organism.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/H0h2WZgS#uOspxKH7Wrwf5gpYDu9PXylVkHfKPunxHLDXK3xyVDc",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Biology","Human Life"]
      },

      
    ]
  },
  {
    id: "physics",
    title: "Physics",
    description: "Notes and resources for Physics.",
    icon: BookOpen,
    color: "from-indigo-500 to-indigo-700",
    bgPattern: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/20",
    resourceCount: 3,
    resources: [
      {
        id: "phy-1",
        title: "Chapter 1 Long Question",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/D1ZlFY5T#k4knZokdKPPTGCevrhWRuPGbyaPsR38l4v3Ct1cw_gQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-2",
        title: "Chapter 1 Numericals",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/T8pwgSYR#p445bzQPO3Sw4It1gtpPDePEW3YrDmKDXhrJ_yPPD_Q",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-3",
        title: "Chapter 1 Excersie",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/CwJBwRKa#kp7oqYav1Oc3bq84PD1VJHrifKpxxnVGTa3EdCFa9gQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-4",
        title: "Chapter 2 Long Question",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/DtpwCapB#48vEVCZs1uoMW-slAqR1z3RQtnHfrbRHRBOCdL8RKNE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-5",
        title: "Chapter 2 Numericals",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/6koRkT7K#QgzAaM5Wy9fljYiKxijCCZi10tbI0VXTUm0dvQJn4PQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-6",
        title: "Chapter 2 Excersie",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/HlYRCCYD#Wag6VtPeigEf7HlkwpBolIUFhyxY0jlPLwshZD00a-o",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-7",
        title: "Chapter 3 Long Question",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/W0RlBQgD#1NK8WC5DwejUwWCJSWayuDF7LzqjtHZnh1iDEjG0b9g",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-8",
        title: "Chapter 3 Numericals",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/a95xDbYI#7wTI7XMHY4K9w1lesRMGVZLcDKb5X3JJOB4yGcfLN34",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-9",
        title: "Chapter 3 Excersie",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Pg5ziYBA#EmOyZ4FVsS59fPvgTGz5oLCSRnUj0DrHbji2A-iU8QE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-10",
        title: "Chapter 4 Long Question",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/XxREWJ5J#PcFqY9tri2Fh7YuUFDIcqwiEf7u2ZDCP4NqLIOlByX8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-11",
        title: "Chapter 4 Numericals",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/P0BEXB5J#-tNpK1mH5hNBtLbGoMIxYNLc2EQGnh_bkZPe5qxGWIQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-12",
        title: "Chapter 4 Excersie",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/bwIijQDL#lPjgzvB1ueHsD6VAR3yywJzY65iJr8R0wFx3_ziFFnM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-13",
        title: "Chapter 5 Short Question",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/G9411QCL#A1yIpCUPu4FV_GXeWU7DVccLdqPytI4gZog0vVBWSPs",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-14",
        title: "Chapter 5 Numericals",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/6kxUyQpJ#QDVNF8wwl6C4IJ3gZ1PZY73Vu_-Y2p939zJ9SqHkQUU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-15",
        title: "Chapter 5 Excersie",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/n0AVgY7I#nxcbmJiJixQ97jOgR5zdNXIRaDk-1G0GeBucFVQEIRY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-16",
        title: "Chapter 6 Short Question",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/P9pGXDCJ#zE8wG4eAE4TVRD0P7hM8QyZCitiju0ziWT4yBko661Y",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-17",
        title: "Chapter 6 Numericals",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/LxYj3LAI#_HGro7dR2C71QxxYO9DOQoxrWX_iumUwMmEAVTBY3NY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-18",
        title: "Chapter 6 Excersie",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Dk43RLYB#hxf2tPo5gpzARWhcGed2yE0FSEDDMUAx5n-DFKDDOqc",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-19",
        title: "Chapter 7 Short Question",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Gt41lbgb#RV45oIWGoecKDZGxzUknBV2MO2E5ffyC0riAo6GCxTA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-20",
        title: "Chapter 7 Numericals",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/ThYRCT5B#JMidJ1meu5Y0tpLLHI_Ii7NGK2TYyLeD0CjAsb9c-j4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-21",
        title: "Chapter 7 Excersie",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/bxYjDRzC#PW56VzusKrkq2TM2zgZqxIpHShH5OVYhyGH5X8erQqc",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-22",
        title: "Chapter 8 Short Question",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/r8JUxJhC#sP3QL27WoSugCo7IfhZhV3af8uGy2zqqWIcvfzygzMY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-23",
        title: "Chapter 8 Excersice",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/OtwSWCaY#XVsuunyPpRFIP2S18XjDL-mlJUmK5smN1mtpV7Zoxkk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-24",
        title: "Chapter 9 Short Question",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/GxB3EZLS#y64Y4TFB7zFe7kd8jQ2YFepOsLYVuK_qmH31J9a5MBM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      },
      {
        id: "phy-24",
        title: "Chapter 9 Excersie",
        description: "Notes and resources for Physics covering Physics Fundamental and inforamtion about measurment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/b0hjxIIa#4uC0zqLlvM3hYJmFVEcwJsYN5nS9EWlqi_4aGrazG2w",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Physics","measurment"]
      }
    ]
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description: "Notes and resources for Chemistry.",
    icon: BookOpen,
    color: "from-red-500 to-red-700",
    bgPattern: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/20",
    resourceCount: 2,
    resources: [
      {
        id: "chem-1",
        title: "Chapter 01 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/XxBTRTbZ#EdSCmxbN9_cBEmJt9n2fuSPE24rTGMKDzrOz-KPPs4I",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-2",
        title: "Chapter 01 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/uxhHAAxY#WzXeaqToSVZWqeSuutknsJaTB2WklSld-GpOq-OPdz4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-3",
        title: "Chapter 02 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/7sx3gKiS#MLzTHWZYyptcnumU23YUXtj5xtya3iZPTCw-qnVxlY8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-4",
        title: "Chapter 02 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/O0AUDDoK#P3XKp39r7RvhYzn8LCwF-6fkhYprPKTdTCvJTFY-4sI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-5",
        title: "Chapter 03 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/mox0nCTT#uQOgTsjIHPx7C2afdBCOjk6xjAXD0iduIun63-Ih0ho",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-6",
        title: "Chapter 03 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/u1RlXSzT#dsIyTt-GLFabTqH5paeBfwxtO7dNVgtvWg2Es1vmLWY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-7",
        title: "Chapter 04 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/2wQQhYoD#OwFafpY-dgnm-ed19ozHXPoOILy48xgMez8H-0X_ReI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-8",
        title: "Chapter 04 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/ylhgBbbS#mWqll_7Lne23MOKipwlhRLFXX9p-a8kc80U73IR1bsk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-9",
        title: "Chapter 05 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/e9QhUQZZ#vWpe-13cnaojrAiYsXR6PAqM8VhQhOZeQYsO2HZiBvU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-10",
        title: "Chapter 05 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/b553xCrQ#6Uu8nurb2DWjQJZRlvUdfebatefY5jJmtxt-AsGsjYg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-11",
        title: "Chapter 06 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/6hh0lTaJ#KIjAHoKlRucMFhhzxAuvNympBtgl12sjjVPPti0d5AY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-12",
        title: "Chapter 06 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/O1ZUmZJJ#zbxNuJlYSY_JydKw_zTAedd5s9ryXqKRHJLxinT5VUE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-13",
        title: "Chapter 07 Exercise Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/mxJUEIgR#pE-L-WdqsRNrRvHaHZlet0mqxeKcYPnRzxdYpho94Wo",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-14",
        title: "Chapter 07 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/TtIxjQzJ#Rc2LfI7dANiNEPzSJXb3hOlKTSJh3ZDj6jfrOEtbjy0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-15",
        title: "Chapter 08 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/f0wUTayY#HALk52naoD2jW1EYxOwFM4edaSHaICRh8rfl9joFo8E",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-16",
        title: "Chapter 08 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/jkAkxZrA#Q4UT4GI4dZN9QinPl9RWujbOLNWyIagp8WH1mx6jyQ4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-17",
        title: "Chapter 09 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/mpA3kSoZ#Aj2upOAijznENSqc5lvSJPvrbmbqk6puYNPLkG8TFlU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-18",
        title: "Chapter 09 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/PxJ30Z7Y#f8uNGi6mt8qwbYY7Kdoe7BU_XioSgvOOUwoTIumCR0U",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-19",
        title: "Chapter 10 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/7pw0XbZb#TMRQ2IXw2gdKs-zIwL9cp-01PkKqZfejXKZhYEIxkTk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-20",
        title: "Chapter 10 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/2khjgKaI#hVKpo_HsxAT6YUHLnUecYzvUEaSuBMEBsyuBFa5aNWI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-21",
        title: "Chapter 11 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Ok5SVDBb#HOs_1d6eWAh_7piHCyHPDI5qVjwl1XLwKlgIF-AGwgI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-22",
        title: "Chapter 11 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/34pFXY6L#H4t6xe-FkYSxi1nySkDW5uLGV6I98MvwZsSjibHAkaI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-23",
        title: "Chapter 12 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/P551SQLT#EMaMjLsTIkqKhgVcmsP-jkJWlhI3ehw7kQ8UTQlTZQ0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-24",
        title: "Chapter 12 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/j5xQyKZI#xa7cNyXPWc7Ea3LUywR3cnBVpQ6f_Mg_FI0Ss-wXCrY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-25",
        title: "Chapter 13 Long Question",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/DsB1GAaY#vWJpQIodYFeG8zN3pylY9jd4tkXlOd55hIFqyWCzf_o",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
      {
        id: "chem-26",
        title: "Chapter 13 MCQs",
        description: "Notes and resources for Chemistry covering Fundamentals and inforamtion about elements.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/74ZERDoI#7mfnWc-bhYo6StOkG430qdqHBKNjzVc2T-uA1PTMm34",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Chemistry","Fundamentals"]
      },
    ]
  },
  {
    id: "computer",
    title: "Computer",
    description: "Notes and resources for Computer.",
    icon: BookOpen,
    color: "from-cyan-500 to-cyan-700",
    bgPattern: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/20",
    resourceCount: 1,
    resources: [
      {
        id: "comp-1",
        title: "Chapter 01",
        description: "Notes and resources for Computer covering Fundamental of logic and programming.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/P041GR6a#q6OTwEXoGLPSSwsz1KsjY1NQLZV66rGY0gXkSnN123w",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Computer","Fundamental of Logic"]
      },
      {
        id: "comp-2",
        title: "Chapter 02",
        description: "Notes and resources for Computer covering Fundamental of logic and programming.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/rsxiGKQA#1Ya7GZPd599GipxD-OiPGXV8cx_9f3IBoA2XZ-thrzA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Computer","Fundamental of Logic"]
      },
      {
        id: "comp-3",
        title: "Chapter 03",
        description: "Notes and resources for Computer covering Fundamental of logic and programming.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/n4IWXa6C#_mIoKWo-YM6b-PWQRvJc-iEN3YmAggKdbw6uPpkyuyI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Computer","Fundamental of Logic"]
      },
      {
        id: "comp-4",
        title: "Chapter 04",
        description: "Notes and resources for Computer covering Fundamental of logic and programming.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/nhBEjKRJ#Kt9wuS391T3AjSr8buJMP1PYxzYx8njghWsZxaolD6g",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Computer","Fundamental of Logic"]
      },
      {
        id: "comp-5",
        title: "Chapter 05",
        description: "Notes and resources for Computer covering Fundamental of logic and programming.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/i8BVRa4D#EhAEQX_vmkTZqAVwEUXrsEyx-sFC-XMsqrlf0GgpEiE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes", "Computer","Fundamental of Logic"]
      },
      {
        id: "comp-6",
        title: "Chapter 06",
        description: "Notes and resources for Computer covering Fundamental of logic and programming.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/exp3XTKK#rfdT5bzIcmms8mx6HFQMFp0b8bo1Os5zk28SmDYPm-o",
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
    title: "Math",
    description: "Notes and resources for Math.",
    icon: BookOpen,
    color: "from-orange-500 to-orange-700",
    bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/20",
    resourceCount: 5,
    resources: [
      {
        id: "math-1",
        title: "Exercise 1.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/KxI3EZRK#5TQcButon03H1B5-VmyCeDGxaY-QrSiqsjzX36rSx9Y",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-2",
        title: "Exercise 1.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/L0B0SaTS#xyiUYVSjumZi6EEOWWUgiryWzqFFnaLUdpbdtavpByM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-3",
        title: "Exercise 1.3",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/T1xyWIyT#U7oLJejJYzXg4VqB-3qdI0SrKXwWSinAHdRBlFO8nd0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-4",
        title: "Exercise 2.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/e9I0GS5T#PGL0JqpEFB2aWvOq1dTkpo1e4bMEdeFj6jJuE-4Z2wA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-5",
        title: "Exercise 2.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/f4Zm0ZIT#1iwSO-kiTF2ehtIaHNM6uvm_lbTQK_fdP_fxnNy6Oo0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-6",
        title: "Exercise 2.3",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/OtoA3ZJL#-NGnEd3k_ie7oT7OcNUjJPCwZigmsUnK2CjRkf733UQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-7",
        title: "Exercise 2.4",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/7gpymAba#HJhnV3DYC4xiLP0wdZhL5xGAGUkeIgQS5xhPYjeFdKY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-8",
        title: "Exercise 3.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/uhh2jT4S#s1-9Bl0TNpZRzrtJrPiGbX1lHO8IJhOg8l1caL_mjzQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-9",
        title: "Exercise 3.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/u5ZS1bAA#0gHw4ktuPWLB0iZgAb9ii7Hl_Izi-DEbConuTH6kye8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-10",
        title: "Exercise 3.3",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/WggwzRCT#WpUC3i1bmk5LqdXb6AbaYkqsXYroKI0E3kflKAXvmCk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-11",
        title: "Exercise 4.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/elYnUYpI#61P6uWZnxvZ9zZbquRQSZh8dIlNk3rYqX4t6RcTHqok",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-12",
        title: "Exercise 4.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/PxIUQQaC#WCQfTjpLRtydMWpgDzZu9iX1qC6f6k3nVAPOOHKcnGY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-13",
        title: "Exercise 4.3",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/LsxiwaRK#d2xE6V4SGB2e8dX2SKmLavl1gJnKI5OuHzBS-3n0ljk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-14",
        title: "Exercise 4.4",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/ngZViTjS#T3ky77ak8WsQvQZMiEfdFGOnoHoCJacyQGMwSiD99_s",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-15",
        title: "Exercise 5.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/W1hkSCRJ#EcO-VBPHDcc7UyRpIVkFeQNvH1YrtwvMi8M2Gg02geA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-16",
        title: "Exercise 5.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/q5Ih2bzb#eZs9Bfaiq9JE5HeNBK1xjyZIw5ogl7WpthZJWNoAFOM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-17",
        title: "Exercise 6.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/WwJ3DbzL#98EyNF_QBfSK-RWmGtxeT00jR3bGWRUXUOqNd69KJcg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-18",
        title: "Exercise 6.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/e9xQUZYS#_PWoXtNcpZ5iNp8ndRuMQZLVOojp2SgVuKCVF0MAfgg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-19",
        title: "Exercise 6.3",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/34pCkB7I#iTDKl2nikm0EPRcrrG3gNJm-Yl1EbP_T8a5qJbbT7Bw",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-20",
        title: "Exercise 6.4",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/TwhEkCJR#Mh_J_tf00aEaAZymkbu9FCA37w9_Dgjt9Nrum2KmuV0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-21",
        title: "Exercise 6.5",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/ilojlS4K#DhQZJaWUIyl2h-m3PeKHhTMjNiaeiDuX39DvTQy1Kqk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-22",
        title: "Exercise 6.6",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/y4QDwITJ#apf-nUYjAfAkCiYwyhVNbnCOATB4naxPY2LqiVKYvxY",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-23",
        title: "Exercise 7.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/H1RAVK7S#XBwOTkfNQZNYtUh6Rp34OIvzDkXmH5zrKVe6C7DhNP8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-24",
        title: "Exercise 7.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/vgBhGJhL#Q_ee4FW6jyVmzFyipZ7i0IyCWm9ponm1LH0CF-QU7IU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-25",
        title: "Exercise 7.3",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/6hRT2CxJ#AanCobuuoWF7KxaNiFcwFCZ8kYoFiuPmmdWWD5vM514",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-26",
        title: "Exercise 8.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/m94wADbD#8CoRcwV1Ki2mPvE_mWmPzX0M_-n5tOiqorRHVmaf08c",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-27",
        title: "Exercise 9.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/i4wAyaCb#G7CnCjJaMQtxXW6c_UInnk-vbL6qqXroujuHRnaulNQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-28",
        title: "Exercise 9.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/654g3aoD#9hpZdaSnDprcTye9VnPkmowt1LGfouBw61snpPeID4o",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-29",
        title: "Exercise 9.3",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/X1IkyCqZ#7CR01vfTEZzZvP05wHy07cqz6KUAmS8Z3hcjYEjCstU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-30",
        title: "Exercise 9.4",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/3oRxlbhJ#YQ7sfgxi6om77Wy3fDkAe-LWxbEhnTVBZwDimbBDq24",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-31",
        title: "Exercise 10.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/DxxmwTaQ#Kk8TOTW_-AX0tXqSO4i7Y8bMFYxm7OYB0wwZYumS8jU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-32",
        title: "Exercise 10.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/O9BH2RLB#5mjeXPugz-Eea1M_fwTQs_W1agExsDA5fcaL2a3mv9s",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-33",
        title: "Exercise 11.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/HwY0RAxT#Pw13eYY9JBpQsQq8jCePUG6zwfzu4OK8xpMQjr7WBG0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-34",
        title: "Exercise 11.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/6sAA3QTD#-cnYJVhl1hQTQZnKdNyWID-kKFFwCteO3ZIrRU1JJUg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-35",
        title: "Exercise 12.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/f5gW0BiQ#YzRl7G0jSmflfDpWzv9i2dbVcxwBSdpYKjcRfhilEtg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-36",
        title: "Exercise 12.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/XkJU3JpA#4AkKHQTLJO-dGZGkJolzr_bjjrNBKuHiK3LvRpqg76k",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-37",
        title: "Exercise 13.1",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/rkgQFIxC#J0killr4Y3Gi2xqLGLCBzDiOIBENUFSYqAS3zk7XdQk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      },
      {
        id: "math-38",
        title: "Exercise 13.2",
        description: "Notes and resources for Math covering problem solving and learning techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/695ESbjI#QRygrZMnI72-LLEWbmAxPAKW6k9cChEpmmzs_VAqmPE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Notes","Problem solving techniques"]
      }
    ]
  }
];

const Class9notes = (): JSX.Element => {
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
            {selectedCategoryData.title} Notes
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {selectedCategoryData.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold text-gray-900 dark:text-white">{selectedCategoryData.resources.length}</span>
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
          Class 9 Notes & Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
          Comprehensive notes and solutions for Class 9 subjects including detailed explanations and practice materials.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">10K+</span>
            <span className="text-gray-600 dark:text-gray-400">Students</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold text-gray-900 dark:text-white">79</span>
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
                    {category.resources.length} Resources
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
                    <span>Explore Notes</span>
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
    </div>
  );
};

export default Class9notes;
