import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, FileText, Brain, Archive } from 'lucide-react';
import ScholarlyVault from './ScholarlyVault';
import MindSprint from './MindSprint';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';
import Class9Books from './books/Class9Books';
import Class10Books from './books/Class10Books';
import Class11Books from './books/Class11Books';
import Class12Books from './books/Class12Books';
import Class9notes from './notes/Class9notes';
import Class10notes from './notes/Class10notes';
import { Class11notes } from './notes/Class11notes';
import Class12notes from './notes/Class12notes';

interface BoardPageParams {
  boardId: string;
}

export const BoardPage: React.FC = () => {
  const { boardId } = useParams<keyof BoardPageParams>() as BoardPageParams;
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Board information
  const boardInfo = {
    'punjab-board': {
      title: 'Punjab Board',
      description: 'Complete study materials and resources for Punjab Board examinations and curriculum.',
      color: 'from-emerald-500 to-teal-600',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
      classes: [
        { id: 'class-9', title: 'Class 9', description: 'Ninth grade study materials', resourceCount: 450 },
        { id: 'class-10', title: 'Class 10', description: 'Tenth grade study materials', resourceCount: 520 },
        { id: 'class-11', title: 'Class 11', description: 'Eleventh grade study materials', resourceCount: 680 },
        { id: 'class-12', title: 'Class 12', description: 'Twelfth grade study materials', resourceCount: 750 }
      ]
    },
    'scholarly-vault': {
      title: 'Scholarly Vault',
      description: 'Comprehensive collection of academic books and resources across various fields of study.',
      color: 'from-indigo-500 to-purple-600',
      bgPattern: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      classes: []
    }
  };

  // Resource categories (replaced Guess Papers with Mind Sprint)
  const resourceCategories = [
    {
      id: 'books',
      title: 'Books',
      description: 'Complete textbooks and reference materials for all subjects and classes.',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
    },
    {
      id: 'notes',
      title: 'Notes/Solution',
      description: 'Detailed notes, solved examples, and step-by-step solutions for better understanding.',
      icon: FileText,
      color: 'from-emerald-500 to-teal-600',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
    },
    {
      id: 'mind-sprint',
      title: 'Mind Sprint',
      description: 'AI-powered MCQ generator with customizable difficulty levels and syllabus-based questions. (Updated)',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    }
  ];

  const selectedBoard = boardInfo[boardId as keyof typeof boardInfo];

  // Render the appropriate component based on class and category
  const renderComponent = () => {
    if (!selectedClass || !selectedCategory) return null;

    if (selectedClass === 'class-9' && selectedCategory === 'books') {
      return <Class9Books />;
    }

    if (selectedClass === 'class-9' && selectedCategory === 'notes') {
      return <Class9notes />;
    }

    if (selectedClass === 'class-10' && selectedCategory === 'books') {
      return <Class10Books />;
    }

    if (selectedClass === 'class-10' && selectedCategory === 'notes') {
      return <Class10notes />;
    }

    if (selectedClass === 'class-11' && selectedCategory === 'books') {
      return <Class11Books />;
    }

    if (selectedClass === 'class-11' && selectedCategory === 'notes') {
      return <Class11notes />;
    }

    if (selectedClass === 'class-12' && selectedCategory === 'books') {
      return <Class12Books />;
    }

    if (selectedClass === 'class-12' && selectedCategory === 'notes') {
      return <Class12notes />;
    }

    if (selectedCategory === 'mind-sprint') {
      return (
        <MindSprint 
          classLevel={selectedClass || 'class-9'}
          boardName={selectedBoard.title}
          onBack={() => setSelectedCategory(null)}
        />
      );
    }

    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          No resources available at this time.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          <p>Debug Info:</p>
          <p>Selected Class: {selectedClass || 'null'}</p>
          <p>Selected Category: {selectedCategory || 'null'}</p>
        </div>
      </div>
    );
  };

  // If board doesn't exist
  if (!selectedBoard) {
    return (
      <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <HeroSection />
        <div className="flex flex-col w-full items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4">
              Board Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              The educational board you're looking for doesn't exist or hasn't been added yet.
            </p>
            <Link 
              to="/explore"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Explore</span>
            </Link>
          </section>
        </div>
        <FooterSection />
      </main>
    );
  }

  // Scholarly Vault page
  if (boardId === 'scholarly-vault') {
    return <ScholarlyVault />;
  }

  // If category is selected, render the component
  if (selectedClass && selectedCategory) {
    const categoryData = resourceCategories.find(cat => cat.id === selectedCategory);
    
    return (
      <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <HeroSection />
        <div className={`flex flex-col w-full items-center ${selectedBoard.bgPattern} transition-colors duration-300 min-h-screen`}>
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link to="/explore" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Explore
              </Link>
              <span>{">"}</span>
              <button 
                onClick={() => {
                  setSelectedClass(null);
                  setSelectedCategory(null);
                }}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {selectedBoard.title}
              </button>
              <span>{">"}</span>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {selectedBoard.classes.find(c => c.id === selectedClass)?.title}
              </button>
              <span>{">"}</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {categoryData?.title}
              </span>
            </div>

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

            {/* Component */}
            {renderComponent()}
          </section>
        </div>
        <FooterSection />
      </main>
    );
  }

  // If class is selected, show categories
  if (selectedClass) {
    const classData = selectedBoard.classes.find(c => c.id === selectedClass);
    
    return (
      <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <HeroSection />
        <div className={`flex flex-col w-full items-center ${selectedBoard.bgPattern} transition-colors duration-300 min-h-screen`}>
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link to="/explore" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Explore
              </Link>
              <span>{">"}</span>
              <button 
                onClick={() => setSelectedClass(null)}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {selectedBoard.title}
              </button>
              <span>{">"}</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {classData?.title}
              </span>
            </div>

            {/* Back Button */}
            <div className="mb-8">
              <button 
                onClick={() => setSelectedClass(null)}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Classes</span>
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
                {selectedBoard.title} - {classData?.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Choose from our comprehensive collection of study materials for {classData?.title}
              </p>
            </div>

            {/* Categories Grid - Now shows 3 cards instead of 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {resourceCategories.map((category) => {
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
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                      </div>

                      {/* Title and Description */}
                      <div className="flex-grow mb-6">
                        <h3 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {category.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <button
                        className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 transform group-hover:scale-105"
                      >
                        Browse Collection
                      </button>
                    </div>

                    {/* Hover Effect Overlay */}
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

  // Show classes for the selected board
  // Add Scholarly Vault card
  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <div className={`flex flex-col w-full items-center ${selectedBoard.bgPattern} transition-colors duration-300 min-h-screen`}>
        <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <Link to="/explore" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Explore
            </Link>
            <span>{">"}</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {selectedBoard.title}
            </span>
          </div>

          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/explore"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Explore</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
              {selectedBoard.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Select your grade/class to access relevant study materials
            </p>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {selectedBoard.classes.map((classItem) => (
              <div
                key={classItem.id}
                onClick={() => setSelectedClass(classItem.id)}
                className={`group relative ${selectedBoard.bgPattern} rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full text-center">
                  {/* Title and Description */}
                  <div className="flex-grow mb-6">
                    <h3 className="font-bold text-2xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                      {classItem.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {classItem.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white/60 dark:bg-gray-700/60 rounded-full px-4 py-2">
                      <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {classItem.resourceCount} Resources
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 transform group-hover:scale-105">
                    Explore Resources
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            ))}

            {/* Scholarly Vault Card */}
            <div
              onClick={() => window.location.assign('/board/scholarly-vault')}
              className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150" />
              </div>
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6">
                  <Archive className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow mb-6">
                  <h3 className="font-bold text-2xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                    Scholarly Vault
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Comprehensive collection of academic books and resources across various fields of study.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/60 dark:bg-gray-700/60 rounded-full px-4 py-2">
                    <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Latest Additions
                    </span>
                  </div>
                </div>
                <button className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 transform group-hover:scale-105">
                  View Scholarly Vault
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
};
