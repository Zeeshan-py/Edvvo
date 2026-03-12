import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Zap,
  ArrowLeft,
  ChevronRight,
  Users,
  Star,
  Brain,
  Archive,
  Clock,
  MapPin
} from "lucide-react";
import ScholarlyVault from "./ScholarlyVault";
import MindSprint from "./MindSprint";
import Class9Books from "./books/Class9Books";
import Class10Books from "./books/Class10Books";
import Class11Books from "./books/Class11Books";
import Class12Books from "./books/Class12Books";
import Class9notes from "./notes/Class9notes";
import Class10notes from "./notes/Class10notes";
import { Class11notes } from "./notes/Class11notes";
import Class12notes from "./notes/Class12notes";

export const ExplorePage = () => {
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [resultStep, setResultStep] = React.useState<'main' | 'region' | 'board'>('main');
  const [selectedRegion, setSelectedRegion] = React.useState<string | null>(null);
  const educationalBoards = [
    {
      id: "punjab-board",
      slug: "punjab-board",
      title: "Punjab Board",
      description: "Resources for Punjab Board students.",
      icon: GraduationCap,
      color: "from-blue-500 to-sky-600",
      bgPattern: "bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20",
      badge: "2,000+",
      status: "active",
      stats: "10K+ Students",
      grades: [
        { id: "class-9", title: "Class 9", description: "Ninth grade study materials", resourceCount: 700 },
        { id: "class-10", title: "Class 10", description: "Tenth grade study materials", resourceCount: 800 },
        { id: "class-11", title: "Class 11", description: "Eleventh grade study materials", resourceCount: 800 },
        { id: "class-12", title: "Class 12", description: "Twelfth grade study materials", resourceCount: 890 }
      ]
    },
    {
      id: "sindh-board",
      slug: "sindh-board",
      title: "Sindh Board",
      description: "Materials for all classes under the Sindh Board, including major cities like Karachi and Hyderabad.",
      icon: BookOpen,
      color: "from-green-500 to-teal-600",
      bgPattern: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
      badge: "1,800+",
      status: "active",
      stats: "9K+ Students",
      grades: [
        { id: "class-9", title: "Class 9", description: "Ninth grade study materials", resourceCount: 450 },
        { id: "class-10", title: "Class 10", description: "Tenth grade study materials", resourceCount: 500 },
        { id: "class-11", title: "Class 11", description: "Eleventh grade study materials", resourceCount: 550 },
        { id: "class-12", title: "Class 12", description: "Twelfth grade study materials", resourceCount: 600 }
      ]
    },
    {
      id: "past-papers",
      slug: "past-papers",
      title: "Past Papers",
      description: "Extensive collection of previous years' papers from all major boards.",
      icon: Clock,
      color: "from-amber-500 to-yellow-600",
      bgPattern: "bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20",
      badge: "5,000+",
      status: "active",
      stats: "All Boards",
      grades: [
        { id: "class-9", title: "Class 9", description: "Past papers for ninth grade", resourceCount: 850 },
        { id: "class-10", title: "Class 10", description: "Past papers for tenth grade", resourceCount: 950 },
        { id: "class-11", title: "Class 11", description: "Past papers for eleventh grade", resourceCount: 1200 },
        { id: "class-12", title: "Class 12", description: "Past papers for twelfth grade", resourceCount: 1400 }
      ]
    }
  ];

  const resourceCategories = [
    {
      id: "books",
      title: "Books",
      description: "Complete textbooks and reference materials for all subjects and classes.",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      badge: "500+ Books",
      status: "active",
      stats: "All Subjects",
      downloads: "25K+"
    },
    {
      id: "notes",
      title: "Notes/Solution",
      description: "Detailed notes, solved examples, and step-by-step solutions for better understanding.",
      icon: FileText,
      color: "from-emerald-500 to-teal-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      badge: "800+ Notes",
      status: "active",
      stats: "Expert Made",
      downloads: "18K+"
    },
    {
      id: "mind-sprint",
      title: "Mind Sprint",
      description: "AI-powered MCQ generator with customizable difficulty levels and syllabus-based questions.",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      badge: "AI Powered",
      status: "active",
      stats: "Unlimited",
      downloads: "Free!"
    }
  ];

  const selectedBoardData = educationalBoards.find(board => board.id === selectedBoard);
  const selectedGradeData = selectedBoardData?.grades.find(grade => grade.id === selectedGrade);
  const selectedCategoryData = resourceCategories.find(cat => cat.id === selectedCategory);

  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'featured':
        return 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg';
      default:
        return 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm';
    }
  };

  const getActionButtonStyle = (status: string) => {
    switch (status) {
      case 'featured':
        return 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl';
      default:
        return 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500';
    }
  };

  const Breadcrumb = () => (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <button 
        onClick={() => {
          setSelectedBoard(null);
          setSelectedGrade(null);
          setSelectedCategory(null);
        }}
        className="hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        Explore
      </button>
      {selectedBoard && (
        <>
          <ChevronRight className="w-4 h-4" />
          <button 
            onClick={() => {
              setSelectedGrade(null);
              setSelectedCategory(null);
            }}
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {selectedBoardData?.title}
          </button>
        </>
      )}
      {selectedGrade && selectedBoard !== 'past-papers' && (
        <>
          <ChevronRight className="w-4 h-4" />
          <button 
            onClick={() => setSelectedCategory(null)}
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {selectedGradeData?.title}
          </button>
        </>
      )}
      {selectedCategory && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white font-medium">
            {selectedCategoryData?.title}
          </span>
        </>
      )}
      {selectedGrade && selectedBoard === 'past-papers' && (
        <>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white font-medium">
            {selectedGradeData?.title} Past Papers
          </span>
        </>
      )}
    </nav>
  );

  if (selectedCategory && selectedCategoryData) {
    return (
      <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <HeroSection />

        <div className={`flex flex-col w-full items-center ${selectedCategoryData.bgPattern} transition-colors duration-300 min-h-screen`}>
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            <Breadcrumb />

            <div className="mb-8">
              <button 
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Categories</span>
              </button>
            </div>

            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${selectedCategoryData.color} shadow-2xl mb-6`}>
                <selectedCategoryData.icon className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
                {selectedCategoryData.title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                {selectedCategoryData.description}
              </p>
            </div>

            {selectedCategory === 'mind-sprint' ? (
              <MindSprint 
                classLevel={selectedGrade || 'class-9'}
                boardName={selectedBoardData?.title || 'Punjab Board'}
                onBack={() => setSelectedCategory(null)}
                hideHeader={true}
              />
            ) : selectedBoard === 'punjab-board' && selectedGrade === 'class-9' && selectedCategory === 'books' ? (
              <Class9Books />
            ) : selectedBoard === 'punjab-board' && selectedGrade === 'class-9' && selectedCategory === 'notes' ? (
              <Class9notes />
            ) : selectedBoard === 'punjab-board' && selectedGrade === 'class-10' && selectedCategory === 'books' ? (
              <Class10Books />
            ) : selectedBoard === 'punjab-board' && selectedGrade === 'class-10' && selectedCategory === 'notes' ? (
              <Class10notes />
            ) : selectedBoard === 'punjab-board' && selectedGrade === 'class-11' && selectedCategory === 'books' ? (
              <Class11Books />
            ) : selectedBoard === 'punjab-board' && selectedGrade === 'class-11' && selectedCategory === 'notes' ? (
              <Class11notes />
            ) : selectedBoard === 'punjab-board' && selectedGrade === 'class-12' && selectedCategory === 'books' ? (
              <Class12Books />
            ) : selectedBoard === 'punjab-board' && selectedGrade === 'class-12' && selectedCategory === 'notes' ? (
              <Class12notes />
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  No resources available at this time.
                </p>
              </div>
            )}
          </section>
        </div>

        <FooterSection />
      </main>
    );
  }

  if (selectedGrade && selectedBoard === 'past-papers') {
    return (
      <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <HeroSection />

        <div className="flex flex-col w-full items-center bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 transition-colors duration-300 min-h-screen">
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            <Breadcrumb />

            <div className="mb-8">
              <button 
                onClick={() => setSelectedGrade(null)}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Classes</span>
              </button>
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-yellow-600 shadow-2xl mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
                {selectedGradeData?.title} Past Papers
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Previous years' examination papers for {selectedGradeData?.title} from all major boards
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">{selectedGradeData?.resourceCount}</span>
                  <span className="text-gray-600 dark:text-gray-400">Papers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">All Boards</span>
                </div>
              </div>
            </div>

            <div className="text-center py-12">
              <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Past Papers Coming Soon</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">We're working on adding {selectedGradeData?.title} past papers from all major boards.</p>
            </div>
          </section>
        </div>

        <FooterSection />
      </main>
    );
  }

  if (selectedGrade && selectedBoardData && selectedBoard !== 'past-papers') {
    return (
      <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <HeroSection />

        <div className={`flex flex-col w-full items-center ${selectedBoardData.bgPattern} transition-colors duration-300 min-h-screen`}>
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            <Breadcrumb />

            <div className="mb-8">
              <button 
                onClick={() => setSelectedGrade(null)}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Grades</span>
              </button>
            </div>

            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${selectedBoardData.color} shadow-2xl mb-6`}>
                <selectedBoardData.icon className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
                {selectedBoardData.title} - {selectedGradeData?.title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Choose from our comprehensive collection of study materials for {selectedGradeData?.title}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {resourceCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group relative ${category.bgPattern} rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-5 dark:opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                        
                        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getBadgeStyle(category.status)} transition-all duration-300`}>
                          {category.badge}
                        </span>
                      </div>

                      <div className="flex-grow mb-6">
                        <h3 className="font-bold text-lg lg:text-xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {category.description}
                        </p>
                      </div>

                      <div className="mb-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-500">{category.stats}</span>
                          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                            <Star className="w-4 h-4" />
                            <span>{category.downloads}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform group-hover:scale-105 ${getActionButtonStyle(category.status)}`}
                      >
                        {category.status === 'featured' ? 'Explore Premium' : 'Browse Collection'}
                      </button>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <FooterSection />
      </main>
    );
  }

  if (selectedBoard && selectedBoardData) {
    return (
      <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <HeroSection />

        <div className={`flex flex-col w-full items-center ${selectedBoardData.bgPattern} transition-colors duration-300 min-h-screen`}>
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            <Breadcrumb />

            <div className="mb-8">
              <button 
                onClick={() => setSelectedBoard(null)}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Boards</span>
              </button>
            </div>

            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${selectedBoardData.color} shadow-2xl mb-6`}>
                <selectedBoardData.icon className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
                {selectedBoardData.title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                {selectedBoard === 'past-papers' 
                  ? 'Select your grade/class to access past papers from all major boards'
                  : 'Select your grade/class to access relevant study materials'
                }
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">{selectedBoardData.stats}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">{selectedBoardData.badge}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {selectedBoardData.grades.map((grade) => (
                <div
                  key={grade.id}
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`group relative ${selectedBoardData.bgPattern} rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${selectedBoardData.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-grow mb-6">
                      <h3 className="font-bold text-xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                        {grade.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {grade.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-white/60 dark:bg-gray-700/60 rounded-full px-4 py-2">
                        <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {grade.resourceCount}{selectedBoard === 'past-papers' ? ' Papers' : ''}
                        </span>
                      </div>
                    </div>

                    <button className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 transform group-hover:scale-105">
                      {selectedBoard === 'past-papers' ? 'View Past Papers' : 'Explore Resources'}
                    </button>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <FooterSection />
      </main>
    );
  }

  const regions = [
    { name: 'Punjab Boards', key: 'punjab' },
    { name: 'Sindh Boards', key: 'sindh' },
    { name: 'Khyber Pakhtunkhwa (KPK) Boards', key: 'kpk' },
    { name: 'Balochistan Board', key: 'balochistan' },
    { name: 'Federal Board', key: 'federal' },
    { name: 'Azad Jammu & Kashmir', key: 'ajk' },
  ];

  const boardsByRegion: Record<string, string[]> = {
    punjab: [
      'BISE Lahore',
      'BISE Gujranwala',
      'BISE Rawalpindi',
      'BISE Faisalabad',
      'BISE Sargodha',
      'BISE Multan',
      'BISE Sahiwal',
      'BISE Bahawalpur',
      'BISE Dera Ghazi Khan (DG Khan)',
    ],
    sindh: [
      'BISE Karachi',
      'BISE Hyderabad',
      'BISE Sukkur',
      'BISE Larkana',
      'BISE Mirpurkhas',
      'BISE Nawabshah (Shaheed Benazirabad)',
    ],
    kpk: [
      'BISE Peshawar',
      'BISE Swat',
      'BISE Kohat',
      'BISE Abbottabad',
      'BISE Bannu',
      'BISE Mardan',
      'BISE Malakand',
      'BISE Dera Ismail Khan (DI Khan)',
    ],
    balochistan: [
      'BBISE Quetta (Board of Intermediate & Secondary Education, Quetta)',
    ],
    federal: [
      'FBISE Islamabad (Federal Board of Intermediate & Secondary Education)',
    ],
    ajk: [
      'BISE Mirpur (AJK Board of Intermediate & Secondary Education)',
    ],
  };

  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
          <Breadcrumb />

          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-6 leading-tight">
              Explore Educational
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Resources
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Select your educational board to access comprehensive study materials, past papers, and resources
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {educationalBoards.map((board) => {
              const IconComponent = board.icon;
              
              const CardContent = (
                <div
                  onClick={() => setSelectedBoard(board.id)}
                  className={`group relative ${board.bgPattern} rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${board.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getBadgeStyle(board.status)} transition-all duration-300`}>
                        {board.badge}
                      </span>
                    </div>

                    <div className="flex-grow mb-6">
                      <h3 className="font-bold text-lg lg:text-xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                        {board.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                        {board.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-500">
                        {board.stats}
                      </p>
                    </div>

                    <div className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform group-hover:scale-105 text-center ${getActionButtonStyle(board.status)}`}>
                      Explore Resources
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                </div>
              );

              return (
                <div key={board.id}>
                  {CardContent}
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link to="/entry-test">
              <div className="group relative bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-pink-900/20 dark:via-gray-800 dark:to-rose-900/20 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <h3 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                      Entry Test Preparation
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      Comprehensive preparation materials for NUST, MDCAT, ECAT, and other university entrance examinations.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg">
                        188
                      </span>
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm">
                        MDCAT, ECAT & More
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <ChevronRight className="w-8 h-8 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            </Link>

            <div onClick={() => setSelectedBoard("scholarly-vault")} className="group relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-900/20 dark:via-gray-800 dark:to-purple-900/20 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Archive className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                    Scholarly Vault
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Comprehensive collection of academic books and resources across various fields of study.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                      Latest Additions
                    </span>
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm">
                      All Subjects
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <ChevronRight className="w-8 h-8 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Link
                to="/result"
                className="group relative bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-slate-800 dark:via-gray-800 dark:to-black rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-gray-700/50 dark:border-gray-600/50 backdrop-blur-sm overflow-hidden text-white flex flex-col items-center gap-6 text-center"
              >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/20 to-transparent transform rotate-12 scale-150" />
                </div>
                
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110 relative z-10">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex-1 relative z-10">
                    <h3 className="font-bold text-2xl lg:text-3xl font-['Newsreader',Helvetica] mb-3 leading-tight text-white">
                      Result Portal
                    </h3>
                    <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                      Find your board and result with a single click. All Pakistani Boards supported.
                  </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                        25+ Boards
                      </span>
                      <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/20 shadow-sm">
                        Official Results
                      </span>
                </div>
                  </div>

                  <div className="flex-shrink-0 relative z-10">
                    <ChevronRight className="w-8 h-8 text-blue-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                </Link>

                <Link
                  to="/academic-explorer"
                  className="group relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 dark:from-purple-800 dark:via-indigo-800 dark:to-blue-800 rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-purple-700/50 dark:border-purple-600/50 backdrop-blur-sm overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                >
                  <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/20 to-transparent transform rotate-12 scale-150" />
                  </div>
                  
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110 relative z-10">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>

                    <div className="flex-1 relative z-10">
                      <h3 className="font-bold text-3xl lg:text-4xl font-['Newsreader',Helvetica] mb-3 leading-tight text-white">
                        Academic Explorer
                      </h3>
                      <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-4">
                        Explore diverse academic fields and discover comprehensive study resources across all disciplines.
                    </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                          11 Fields
                        </span>
                        <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white border border-white/20 shadow-sm">
                          All Disciplines
                        </span>
                  </div>
                    </div>

                    <div className="flex-shrink-0 relative z-10">
                      <ChevronRight className="w-8 h-8 text-purple-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  </Link>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />

      {selectedBoard === "scholarly-vault" && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 overflow-y-auto">
          <ScholarlyVault />
          <button
            className="fixed top-6 right-8 text-gray-500 hover:text-gray-900 dark:hover:text-white text-3xl font-bold z-50 bg-white/80 dark:bg-gray-900/80 rounded-full px-4 py-2 shadow-lg"
            onClick={() => setSelectedBoard(null)}
            aria-label="Close Scholarly Vault"
          >
            &times;
          </button>
        </div>
      )}
    </main>
  );
};
