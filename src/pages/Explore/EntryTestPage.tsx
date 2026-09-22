import { LearningDirectory } from '@/components/studio/LearningDirectory';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";
import {
  ArrowLeft,
  Search,
  Filter,
  Download,
  Eye,
  FileText,
  Clock,
  HardDrive,
  ExternalLink,
  Star,
  Users,
  BookOpen,
  Target,
  Zap,
  Award,
  ChevronRight
} from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  format: string;
  downloadLink: string;
  previewAvailable: boolean;
  rating: number;
  downloads: number;
  lastUpdated: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgPattern: string;
  resourceCount: number;
  resources: Resource[];
}

export const EntryTestPage = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("All");

  const categories: Category[] = [
    {
      id: "nust",
      title: "NUST Entry Test Materials",
      description: "Comprehensive preparation materials for NUST entrance examination including past papers and practice tests.",
      icon: Target,
      color: " ",
      bgPattern: "ed-tint    ",
      resourceCount: 45,
      resources: [
        {
          id: "nust-1",
          title: "NUST Past Papers Set 01",
          description: "Complete collection of NUST entrance test papers from 2020 to 2024 with detailed solutions.",
          fileSize: "1.2MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/ukRlxRBL#12P9UjkgxDkJz3IzcR36XWXLRGAgH8cLkVazGg04Bto",
          previewAvailable: true,
          rating: 4.8,
          downloads: 150,
          lastUpdated: "2024-01-15",
          difficulty: "Intermediate",
          tags: ["Past Papers", "Solutions", "Mathematics", "English", "Physics"]
        },
        {
          id: "nust-2",
          title: "NUST Past Papers Set 02",
          description: "Comprehensive mathematics practice book covering all topics for NUST entrance test preparation.",
          fileSize: "980KB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/msphUB7I#CtO2X-vzVre08Q1VYctsn8wdGkVcdtxI9dDo6NrOTrc",
          previewAvailable: true,
          rating: 4.9,
          downloads: 980,
          lastUpdated: "2024-01-10",
          difficulty: "Advanced",
          tags: ["Mathematics", "Practice", "Mathematics", "English", "Formulas"]
        },
        {
          id: "nust-3",
          title: "NUST Past Papers Set 03",
          description: "Essential physics concepts and formulas specifically designed for NUST entrance examination.",
          fileSize: "675KB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/7p5zQIBR#XlmXC72B_qNcFBwGpjU5siKquw08B2vBzvYknQVrjgo",
          previewAvailable: false,
          rating: 4.7,
          downloads: 756,
          lastUpdated: "2024-01-08",
          difficulty: "Intermediate",
          tags: ["Physics", "Concepts", "Mathematics", "English", "Formulas"]
        },
        {
          id: "nust-4",
          title: "NUST Past Papers Set 04",
          description: "Essential physics concepts and formulas specifically designed for NUST entrance examination.",
          fileSize: "720KB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/noZjzAJJ#Jgn51jtZ5d_bVz2Yja27LLwGYpNQn1cXaIDsbCV76KA",
          previewAvailable: false,
          rating: 4.5,
          downloads: 656,
          lastUpdated: "2024-01-08",
          difficulty: "Intermediate",
          tags: ["Physics", "Concepts", "Mathematics", "English", "Formulas"]
        },
        {
          id: "nust-5",
          title: "NUST Past Papers Set 05",
          description: "Essential physics concepts and formulas specifically designed for NUST entrance examination.",
          fileSize: "662KB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/ywwBlITT#7T2eDL0Z52h-Z7EE0vvoSnbfDO1JjTNpIP6J3Aq2iNw",
          previewAvailable: false,
          rating: 4.6,
          downloads: 586,
          lastUpdated: "2024-01-08",
          difficulty: "Advanced",
          tags: ["Physics", "Concepts", "Mathematics", "English", "Formulas"]
        },
        {
          id: "nust-6",
          title: "All Files",
          description: "Essential physics concepts and formulas specifically designed for NUST entrance examination.",
          fileSize: "5.2MB",
          format: "PDF",
          downloadLink: "https://mega.nz/folder/S45UFbAY#lwBna1ghKIH7EbDfXhg-PQ",
          previewAvailable: false,
          rating: 4.6,
          downloads: 586,
          lastUpdated: "2024-01-08",
          difficulty: "Advanced",
          tags: ["Physics", "Concepts", "Mathematics", "English", "Formulas"]
        }
      ]
    },
    {
      id: "mdcat",
      title: "MDCAT Past Papers",
      description: "Medical College Admission Test past papers with detailed explanations and answer keys.",
      icon: BookOpen,
      color: " ",
      bgPattern: "ed-tint    ",
      resourceCount: 38,
      resources: [
        {
          id: "mdcat-1",
          title: "MDCAT 2017 Reconduct",
          description: "Complete MDCAT past papers collection with detailed solutions for Biology, Chemistry, Physics, and English.",
          fileSize: "1.5MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/2wAmAbBA#g1HRR40jT7FiKqeol5_-cLNrF4uIbNiAa9Jp5jKs2WM",
          previewAvailable: true,
          rating: 4.9,
          downloads: 200,
          lastUpdated: "2024-01-20",
          difficulty: "Advanced",
          tags: ["Past Papers", "Biology", "Chemistry", "Physics"]
        },
        {
          id: "mdcat-2",
          title: "MDCAT 2017",
          description: "Extensive collection of Biology MCQs with explanations covering all MDCAT syllabus topics.",
          fileSize: "1.2MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/e1RE0Z4Q#U-yK1dar2ytK8V2idJqgFvkqR4CESV1FeUbTWw45PFc",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1680,
          lastUpdated: "2024-01-18",
          difficulty: "Intermediate",
          tags: ["Biology", "MCQs", "Practice"]
        },
        {
          id: "mdcat-3",
          title: "MDCAT 2018",
          description: "Extensive collection of Biology MCQs with explanations covering all MDCAT syllabus topics.",
          fileSize: "1.1MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/vwplGADA#q9OOLghDe2saqgTpdjcjvVZ7S_KMIRFDgYiRqC9QNyw",
          previewAvailable: true,
          rating: 4.5,
          downloads: 1080,
          lastUpdated: "2024-01-18",
          difficulty: "Intermediate",
          tags: ["Biology", "MCQs", "Practice"]
        },
        {
          id: "mdcat-4",
          title: "MDCAT Unit Wise (2011-16)",
          description: "Extensive collection of Biology MCQs with explanations covering all MDCAT syllabus topics.",
          fileSize: "2.1MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/i8xVkKBK#XCMC00ExnpPZPMvUy7GMmIagXIESA5ZSipF8I1LimJE",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1080,
          lastUpdated: "2024-05-18",
          difficulty: "Intermediate",
          tags: ["Biology", "MCQs", "Practice"]
        },
        {
          id: "mdcat-5",
          title: "Paper MDCAT 2019",
          description: "Extensive collection of Biology MCQs with explanations covering all MDCAT syllabus topics.",
          fileSize: "950KB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/u0Y2QTTR#r4l4bcfpEPw6rNcHv1I-_EhDM10hZbWMwxhpcuq06r0",
          previewAvailable: true,
          rating: 4.7,
          downloads: 1080,
          lastUpdated: "2024-09-18",
          difficulty: "Intermediate",
          tags: ["Biology", "MCQs", "Practice"]
        },
        {
          id: "mdcat-6",
          title: "All Files",
          description: "Extensive collection of Biology MCQs with explanations covering all MDCAT syllabus topics.",
          fileSize: "8.5MB",
          format: "PDF",
          downloadLink: "https://mega.nz/folder/D1wjTIbB#vLzTnfKrN4IXpA7KO_dbpg",
          previewAvailable: true,
          rating: 4.7,
          downloads: 1080,
          lastUpdated: "2024-09-18",
          difficulty: "Intermediate",
          tags: ["Biology", "MCQs", "Practice"]
        }
      ]
    },
    {
      id: "ecat",
      title: "ECAT Past Papers",
      description: "Engineering College Admission Test materials including solved papers and practice questions.",
      icon: Zap,
      color: " ",
      bgPattern: "ed-tint    ",
      resourceCount: 42,
      resources: [
        {
          id: "ecat-1",
          title: "ECAT Past Paper 2010",
          description: "Comprehensive collection of ECAT past papers with step-by-step solutions for Mathematics, Physics, and Chemistry.",
          fileSize: "1.8MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/mpgVjKBY#mGDRAA5D2nEkM28CTfWsA_0j5lS61KebX4xC4GYsZ9Q",
          previewAvailable: true,
          rating: 4.7,
          downloads: 1420,
          lastUpdated: "2024-01-22",
          difficulty: "Advanced",
          tags: ["Past Papers", "Mathematics", "Physics", "Chemistry"]
        },
        {
          id: "ecat-2",
          title: "ECAT Past Paper 2011",
          description: "Essential mathematics formulas and concepts for ECAT preparation with examples.",
          fileSize: "1.3MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/fg5k1B7L#sXW3pNSGt7Iz1rYiE2Hcc7z7vT_opg_j3vVbbErFvac",
          previewAvailable: false,
          rating: 4.6,
          downloads: 890,
          lastUpdated: "2024-01-15",
          difficulty: "Beginner",
          tags: ["Mathematics", "Formulas", "Quick Reference"]
        },
        {
          id: "ecat-3",
          title: "ECAT Past Paper 2012",
          description: "Essential mathematics formulas and concepts for ECAT preparation with examples.",
          fileSize: "1.4MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/34RERBAa#a6hVGOBehv8QCcQ3wINKzxdZKJMEWYbUFjUYh5vsBzU",
          previewAvailable: false,
          rating: 4.5,
          downloads: 890,
          lastUpdated: "2024-09-15",
          difficulty: "Beginner",
          tags: ["Mathematics", "Formulas", "Quick Reference"]
        },
        {
          id: "ecat-4",
          title: "ECAT Past Paper 2014",
          description: "Essential mathematics formulas and concepts for ECAT preparation with examples.",
          fileSize: "1.6MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/mlBGwBII#P2eKzy3VQPJoQFUda3aYoYAXof0WpkIMUwxobNSK5FE",
          previewAvailable: false,
          rating: 4.6,
          downloads: 890,
          lastUpdated: "2024-01-15",
          difficulty: "Advanced",
          tags: ["Mathematics", "Formulas", "Quick Reference"]
        },
        {
          id: "ecat-5",
          title: "ECAT Past Paper 2015",
          description: "Essential mathematics formulas and concepts for ECAT preparation with examples.",
          fileSize: "1.5MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/ak5QCS5D#1LwkA-qVafdtksUk_ULbkMrEt1r-f_tiF817DpGqMKk",
          previewAvailable: false,
          rating: 4.6,
          downloads: 890,
          lastUpdated: "2024-01-15",
          difficulty: "Beginner",
          tags: ["Mathematics", "Formulas", "Quick Reference"]
        },
        {
          id: "ecat-6",
          title: "ECAT Past Paper 2016",
          description: "Essential mathematics formulas and concepts for ECAT preparation with examples.",
          fileSize: "1.7MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/z85UABjD#2PMpiQvn3T353usi7cj5qRPhNzp1lCF6Llm7KAWcR5c",
          previewAvailable: false,
          rating: 4.6,
          downloads: 890,
          lastUpdated: "2024-01-15",
          difficulty: "Beginner",
          tags: ["Mathematics", "Formulas", "Quick Reference"]
        },
        {
          id: "ecat-7",
          title: "ECAT Past Paper 2017",
          description: "Essential mathematics formulas and concepts for ECAT preparation with examples.",
          fileSize: "1.9MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/j0BHUIJJ#92wsblhC3znSFhocLms1B71hOg6m9juXzapXrmT1hlE",
          previewAvailable: false,
          rating: 4.6,
          downloads: 890,
          lastUpdated: "2024-01-15",
          difficulty: "Beginner",
          tags: ["Mathematics", "Formulas", "Quick Reference"]
        },
        {
          id: "ecat-8",
          title: "All Files",
          description: "Essential mathematics formulas and concepts for ECAT preparation with examples.",
          fileSize: "12.2MB",
          format: "PDF",
          downloadLink: "https://mega.nz/folder/3twjhBJT#EOp2L3cq6sDQYbWp6vexwg",
          previewAvailable: false,
          rating: 4.6,
          downloads: 890,
          lastUpdated: "2024-01-15",
          difficulty: "Advanced",
          tags: ["Mathematics", "Formulas", "Quick Reference"]
        }
      ]
    },
    {
      id: "step",
      title: "STEP Books Collection",
      description: "Sindh Testing Service books and preparation materials for various entry tests.",
      icon: Award,
      color: " ",
      bgPattern: "ed-tint    ",
      resourceCount: 28,
      resources: [
        {
          id: "step-1",
          title: "All Book and Material",
          description: "Comprehensive general knowledge book covering Pakistan studies, current affairs, and general science.",
          fileSize: "15.5MB",
          format: "PDF",
          downloadLink: "https://mega.nz/folder/HohXhZBK#V3w34PW-UybDZcAs7Acrig",
          previewAvailable: true,
          rating: 4.8,
          downloads: 650,
          lastUpdated: "2024-01-12",
          difficulty: "Advanced",
          tags: ["General Knowledge", "Pakistan Studies", "Current Affairs"]
        }
      ]
    },
    {
      id: "kips",
      title: "KIPS Books Library",
      description: "KIPS Academy books and study materials for entry test preparation across all subjects.",
      icon: BookOpen,
      color: " ",
      bgPattern: "ed-tint    ",
      resourceCount: 35,
      resources: [
        {
          id: "kips-1",
          title: "All Books and Material",
          description: "Complete book by KIPS Academy covering all topics for entry test preparation.",
          fileSize: "15.0MB",
          format: "PDF",
          downloadLink: "https://mega.nz/folder/zlRA2aCL#i602LhCCk6h-74Q-IhMoKg",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1100,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Physics", "Complete Book", "KIPS"]
        }
      ]
    },
    {
      id: "PMC",
      title: "PMC Books Library",
      description: "PMC books and study materials for entry test preparation across all subjects.",
      icon: BookOpen,
      color: " ",
      bgPattern: "ed-tint    ",
      resourceCount: 35,
      resources: [
        {
          id: "PMC",
          title: "All Books and Material",
          description: "Complete physics book covering all topics for entry test preparation.",
          fileSize: "18.2MB",
          format: "PDF",
          downloadLink: "https://mega.nz/folder/jh4QXCKQ#PEJk600Qr2i341lHi5TOwg",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Physics", "Complete Book", "PMC"]
        }
      ]
    },
    {
      id: "Punjab College",
      title: "Punjab College Library",
      description: "Punjab books and study materials for entry test preparation across all subjects.",
      icon: BookOpen,
      color: " ",
      bgPattern: "ed-tint    ",
      resourceCount: 35,
      resources: [
        {
          id: "Punjab-01",
          title: "Punjab College Physics Entry Test Book",
          description: "Complete physics book covering all topics for entry test preparation.",
          fileSize: "3.2MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/DwAiQZ5J#jOFOnYVNX0lL-SHv56l_Cru_DKx9B-9lKE-nkhrLa90",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Physics", "Complete Book", "Punjab"]
        },
        {
          id: "Punjab-02",
          title: "Punjab College Math Entry Test Book",
          description: "Complete Math book covering all topics for entry test preparation.",
          fileSize: "2.8MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/vp4GXDLC#IkF1BhXv0Jw7LEemW8N42nUX6fYn-IQG0tBaER2w22w",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1200,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Complete Book", "Punjab", "Math"]
        },
        {
          id: "Punjab-03",
          title: "Punjab College Physics Entry Test Book 2021",
          description: "Complete physics book covering all topics for entry test preparation.",
          fileSize: "3.5MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/ipBWmBDS#HL_HjDB2QYHNB3JeUhOZDMgjbfLu9sYl3laEcAlpiS0",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Physics", "Complete Book", "Punjab"]
        },
        {
          id: "Punjab-04",
          title: "ECAT English By PGC",
          description: "Complete English book covering all topics for entry test preparation.",
          fileSize: "2.1MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/v9BF0DhQ#SFOrGCEgmrK-XQafhreOGGBZCKFaEwVRYx3VT8dKEYQ",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["English", "Complete Book", "Punjab"]
        }
      ]
    },
    {
      id: "Star",
      title: "Star Academy Library",
      description: "Star books and study materials for entry test preparation across all subjects.",
      icon: BookOpen,
      color: " ",
      bgPattern: "ed-tint    ",
      resourceCount: 35,
      resources: [
        {
          id: "Star-01",
          title: "UHS New Vocab",
          description: "Complete vocabulary book covering all topics for entry test preparation.",
          fileSize: "1.8MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/30AmwDQK#PbAKo_q847lx3DA4wVDvER945ICU9siGFPaj1hhi8EE",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Vocabulary", "Complete Book", "Star"]
        },
        {
          id: "Star-02",
          title: "Star English Vocab",
          description: "Complete vocabulary book covering all topics for entry test preparation.",
          fileSize: "1.5MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/S1hyyDiB#RJtE2ELhElV2smGeUFGcM6xfKND82kzlbsaptvervfU",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Vocabulary", "Complete Book", "Star"]
        },
        {
          id: "Star-03",
          title: "Star English Grammar",
          description: "Complete grammar book covering all topics for entry test preparation.",
          fileSize: "2.2MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/eggUzDKQ#6qalKxEODMdkS4rVPEas9DgHZh6U1ovsCH4Q7faket8",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["English", "Complete Book", "Star"]
        },
        {
          id: "Star-04",
          title: "Star Biology",
          description: "Complete biology book covering all topics for entry test preparation.",
          fileSize: "4.1MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/S9AiiKQL#RaPP7rhGGxcZO0rlu9AoY7JZV_My2lzZT_B0DLeF1fc",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Biology", "Complete Book", "Star"]
        }
      ]
    },
      {
      id: "LAT",
      title: "LAT Entry Test",
      description: "LAT Entry Test books and study materials for preparation across all subjects.",
      icon: BookOpen,
      color: " ",
      bgPattern: "ed-tint    ",
      resourceCount: 35,
      resources: [
        {
          id: "LAT-01",
          title: "LAT Doghar Prepration Book",
          description: "Complete vocabulary book covering all topics for entry test preparation.",
          fileSize: "1.8MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/L54yQLBS#2gmZ78h3zM1-y4-Z3IDR33UAeDOepMGYw-5pnHio4uc",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Vocabulary", "Complete Book", "Doghar"]
        },
        {
          id: "LAT-02",
          title: "LAT Law Admission Test Book",
          description: "Complete vocabulary book covering all topics for entry test preparation.",
          fileSize: "1.5MB",
          format: "PDF",
          downloadLink: "https://mega.nz/file/u9JVQbrC#7J8ZA4fNlOne0Od4vCUtgHH3KilTRpMK5iEGBCcabw4",
          previewAvailable: true,
          rating: 4.8,
          downloads: 1800,
          lastUpdated: "2024-01-25",
          difficulty: "Advanced",
          tags: ["Vocabulary", "Complete Book", "Test Book"]
        }
      ]
    }
  ];

  return <LearningDirectory categories={categories} entrance />;
};
