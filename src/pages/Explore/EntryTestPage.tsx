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
      case 'Beginner': return 'ed-tint text-green-800  ';
      case 'Intermediate': return 'ed-tint text-yellow-800  ';
      case 'Advanced': return 'bg-red-100 text-red-800  ';
      default: return 'ed-canvas ed-ink  ';
    }
  };

  if (selectedCategory && selectedCategoryData) {
    return (
      <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
        <HeroSection />

        <div className={`flex flex-col w-full items-center ${selectedCategoryData.bgPattern} transition-colors duration-300 min-h-screen`}>
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Categories</span>
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint ${selectedCategoryData.color} ed-elevation mb-6`}>
                <selectedCategoryData.icon className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
                {selectedCategoryData.title}
              </h1>
              <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed mb-8">
                {selectedCategoryData.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                  <FileText className="w-5 h-5 ed-muted " />
                  <span className="font-semibold ed-ink ">{selectedCategoryData.resourceCount}</span>
                  <span className="ed-muted ">Resources</span>
                </div>
                <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                  <Users className="w-5 h-5 ed-muted " />
                  <span className="font-semibold ed-ink ">5K+</span>
                  <span className="ed-muted ">Downloads</span>
                </div>
                <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold ed-ink ">4.8</span>
                  <span className="ed-muted ">Rating</span>
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="ed-surface  backdrop-blur-sm rounded-2xl p-6 ed-elevation border border-white/50  mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ed-muted" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 ed-surface  border ed-border  rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 ed-muted" />
                  <select
                    value={filterDifficulty}
                    onChange={(e) => setFilterDifficulty(e.target.value)}
                    className="px-4 py-3 ed-surface  border ed-border  rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                  className="ed-surface  backdrop-blur-sm rounded-2xl p-6 ed-elevation border border-white/50  ed-hover-shadow transition-all duration-300 transform ed-lift"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 ed-tint  rounded-xl flex items-center justify-center">
                        <FileText className="w-5 h-5 ed-link " />
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium ed-ink ">{resource.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg ed-ink  ed-type mb-2 leading-tight">
                    {resource.title}
                  </h3>
                  <p className="text-sm ed-muted  leading-relaxed mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 ed-canvas  text-xs font-medium ed-muted  rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* File Info */}
                  <div className="flex items-center justify-between text-sm ed-muted  mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <HardDrive className="w-4 h-4" />
                        <span>{resource.fileSize}</span>
                      </div>
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

                  {/* Last Updated */}
                  <div className="flex items-center gap-1 text-xs ed-muted  mb-4">
                    <Clock className="w-3 h-3" />
                    <span>Updated {new Date(resource.lastUpdated).toLocaleDateString()}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDownload(resource.downloadLink, resource.title)}
                      className="flex-1 flex items-center justify-center gap-2 ed-accent ed-hover-surface text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 transform ed-lift"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    {resource.previewAvailable && (
                      <button
                        onClick={() => handlePreview(resource)}
                        className="flex items-center justify-center gap-2 ed-canvas  ed-hover-surface  ed-ink  px-4 py-2 rounded-xl font-medium transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => window.open(resource.downloadLink, '_blank')}
                      className="flex items-center justify-center gap-2 ed-canvas  ed-hover-surface  ed-ink  px-4 py-2 rounded-xl font-medium transition-all duration-200"
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
                <div className="w-20 h-20 ed-canvas  rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 ed-muted" />
                </div>
                <h3 className="text-xl font-semibold ed-ink  mb-2">No resources found</h3>
                <p className="ed-muted ">Try adjusting your search terms or filters</p>
              </div>
            )}
          </section>
        </div>

        <FooterSection />
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center ed-tint       transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Explore</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint   ed-elevation mb-6">
              <div className="w-10 h-10 ed-surface rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ed-ink  ed-type mb-4 leading-tight">
              Entry Test Resources
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive preparation materials for university entrance examinations including NUST, MDCAT, ECAT, and more.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                <Users className="w-5 h-5 ed-muted " />
                <span className="font-semibold ed-ink ">10K+</span>
                <span className="ed-muted ">Students</span>
              </div>
              <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                <FileText className="w-5 h-5 ed-muted " />
                <span className="font-semibold ed-ink ">188</span>
                <span className="ed-muted ">Resources</span>
              </div>
              <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold ed-ink ">4.8</span>
                <span className="ed-muted ">Rating</span>
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
                  className={`group relative ${category.bgPattern} rounded-xl p-6 lg:p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-white/50  backdrop-blur-sm overflow-hidden`}
                 role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="absolute inset-0 ed-tint    transform rotate-12 scale-150" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Icon and Count */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ed-tint ${category.color} flex items-center justify-center ed-elevation ed-hover-shadow transition-all duration-300 ed-lift`}>
                        <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                      </div>

                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold ed-surface  ed-ink  border ed-border  shadow-sm transition-all duration-300">
                        {category.resourceCount} Resources
                      </span>
                    </div>

                    {/* Title and Description */}
                    <div className="flex-grow mb-6">
                      <h3 className="font-bold text-xl lg:text-2xl ed-ink  ed-type mb-3 leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-sm lg:text-base ed-muted  leading-relaxed line-clamp-3">
                        {category.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 ed-ink  font-medium ed-group-ink  transition-colors duration-300">
                        <span>Explore Resources</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 ed-tint   opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="ed-tint    rounded-xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 ed-tint    transform -rotate-12 scale-150" />
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ed-type">
                  Ready to Ace Your Entry Test?
                </h2>
                <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Join thousands of successful students who used our comprehensive study materials to secure admission in top universities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="ed-surface ed-ink px-8 py-4 rounded-xl font-bold text-lg ed-hover-surface transition-all duration-300 transform ed-lift ed-elevation">
                    Start Preparation
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg ed-hover-surface ed-hover-ink transition-all duration-300 transform ed-lift">
                    View Success Stories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
};
