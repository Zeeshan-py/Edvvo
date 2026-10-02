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
      color: ' ',
      bgPattern: 'ed-tint    ',
      classes: [
        { id: 'class-9', title: 'Class 9', description: 'Ninth grade study materials' },
        { id: 'class-10', title: 'Class 10', description: 'Tenth grade study materials' },
        { id: 'class-11', title: 'Class 11', description: 'Eleventh grade study materials' },
        { id: 'class-12', title: 'Class 12', description: 'Twelfth grade study materials' }
      ]
    },
    'scholarly-vault': {
      title: 'Scholarly Vault',
      description: 'Comprehensive collection of academic books and resources across various fields of study.',
      color: ' ',
      bgPattern: 'ed-tint    ',
      classes: []
    }
  };

  // Resource categories (replaced Guess Papers with Mind Sprint)
  const resourceCategories = [
    {
      id: 'books',
      title: 'Books',
      description: 'Browse the textbook links currently listed for this class.',
      icon: BookOpen,
      color: ' ',
      bgPattern: 'ed-tint    ',
    },
    {
      id: 'notes',
      title: 'Notes/Solution',
      description: 'Browse the notes and solution links currently listed for this class.',
      icon: FileText,
      color: ' ',
      bgPattern: 'ed-tint    ',
    },
    {
      id: 'mind-sprint',
      title: 'Mind Sprint',
      description: 'Generate practice questions and verify them against your current syllabus.',
      icon: Brain,
      color: ' ',
      bgPattern: 'ed-tint    ',
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
        <p className="text-lg ed-muted ">
          No resources available at this time.
        </p>
      </div>
    );
  };

  // If board doesn't exist
  if (!selectedBoard) {
    return (
      <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
        <HeroSection />
        <div className="flex flex-col w-full items-center ed-tint       min-h-screen">
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-4xl font-bold ed-ink  ed-type mb-4">
              Board Not Found
            </h1>
            <p className="text-lg ed-muted  mb-8">
              The educational board you're looking for doesn't exist or hasn't been added yet.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 ed-accent ed-hover-surface text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
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
      <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
        <HeroSection />
        <div className={`flex flex-col w-full items-center ${selectedBoard.bgPattern} transition-colors duration-300 min-h-screen`}>
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm ed-muted  mb-6">
              <Link to="/explore" className="ed-hover-ink  transition-colors">
                Explore
              </Link>
              <span>{">"}</span>
              <button
                onClick={() => {
                  setSelectedClass(null);
                  setSelectedCategory(null);
                }}
                className="ed-hover-ink  transition-colors"
              >
                {selectedBoard.title}
              </button>
              <span>{">"}</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className="ed-hover-ink  transition-colors"
              >
                {selectedBoard.classes.find(c => c.id === selectedClass)?.title}
              </button>
              <span>{">"}</span>
              <span className="ed-ink  font-medium">
                {categoryData?.title}
              </span>
            </div>

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
      <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
        <HeroSection />
        <div className={`flex flex-col w-full items-center ${selectedBoard.bgPattern} transition-colors duration-300 min-h-screen`}>
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm ed-muted  mb-6">
              <Link to="/explore" className="ed-hover-ink  transition-colors">
                Explore
              </Link>
              <span>{">"}</span>
              <button
                onClick={() => setSelectedClass(null)}
                className="ed-hover-ink  transition-colors"
              >
                {selectedBoard.title}
              </button>
              <span>{">"}</span>
              <span className="ed-ink  font-medium">
                {classData?.title}
              </span>
            </div>

            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedClass(null)}
                className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Classes</span>
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
                {selectedBoard.title} - {classData?.title}
              </h1>
              <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed mb-8">
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
                    className={`group relative ${category.bgPattern} rounded-xl p-6 lg:p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-white/50  backdrop-blur-sm overflow-hidden`}
                   role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 dark:opacity-10">
                      <div className="absolute inset-0 ed-tint    transform rotate-12 scale-150" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ed-tint ${category.color} flex items-center justify-center ed-elevation ed-hover-shadow transition-all duration-300 ed-lift`}>
                          <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                      </div>

                      {/* Title and Description */}
                      <div className="flex-grow mb-6">
                        <h3 className="font-bold text-xl lg:text-2xl ed-ink  ed-type mb-3 leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-sm lg:text-base ed-muted  leading-relaxed line-clamp-2">
                          {category.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <button
                        className="w-full py-3 px-4 rounded-xl font-semibold text-sm ed-surface  ed-hover-surface  ed-ink  border ed-border  hover:border-gray-300  transition-all duration-300 transform ed-lift"
                      >
                        Browse Collection
                      </button>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 ed-tint   opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
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
    <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <div className={`flex flex-col w-full items-center ${selectedBoard.bgPattern} transition-colors duration-300 min-h-screen`}>
        <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm ed-muted  mb-6">
            <Link to="/explore" className="ed-hover-ink  transition-colors">
              Explore
            </Link>
            <span>{">"}</span>
            <span className="ed-ink  font-medium">
              {selectedBoard.title}
            </span>
          </div>

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

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
              {selectedBoard.title}
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed mb-8">
              Select your grade/class to access relevant study materials
            </p>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {selectedBoard.classes.map((classItem) => (
              <div
                key={classItem.id}
                onClick={() => setSelectedClass(classItem.id)}
                className={`group relative ${selectedBoard.bgPattern} rounded-xl p-6 lg:p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-white/50  backdrop-blur-sm overflow-hidden`}
               role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute inset-0 ed-tint    transform rotate-12 scale-150" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full text-center">
                  {/* Title and Description */}
                  <div className="flex-grow mb-6">
                    <h3 className="font-bold text-2xl ed-ink  ed-type mb-3 leading-tight">
                      {classItem.title}
                    </h3>
                    <p className="text-base ed-muted  leading-relaxed mb-4">
                      {classItem.description}
                    </p>
                    <div className="inline-flex items-center gap-2 ed-surface  rounded-full px-4 py-2">
                      <FileText className="w-4 h-4 ed-muted " />
                      <span className="text-sm font-medium ed-ink ">
                        Books &amp; notes
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3 px-4 rounded-xl font-semibold text-sm ed-surface  ed-hover-surface  ed-ink  border ed-border  hover:border-gray-300  transition-all duration-300 transform ed-lift">
                    Explore Resources
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 ed-tint   opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            ))}

            {/* Scholarly Vault Card */}
            <div
              onClick={() => window.location.assign('/board/scholarly-vault')}
              className="group relative ed-tint     rounded-xl p-6 lg:p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-white/50  backdrop-blur-sm overflow-hidden"
             role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute inset-0 ed-tint    transform rotate-12 scale-150" />
              </div>
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl ed-tint   flex items-center justify-center ed-elevation ed-hover-shadow transition-all duration-300 ed-lift mb-6">
                  <Archive className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow mb-6">
                  <h3 className="font-bold text-2xl ed-ink  ed-type mb-3 leading-tight">
                    Scholarly Vault
                  </h3>
                  <p className="text-base ed-muted  leading-relaxed mb-4">
                    Comprehensive collection of academic books and resources across various fields of study.
                  </p>
                  <div className="inline-flex items-center gap-2 ed-surface  rounded-full px-4 py-2">
                    <FileText className="w-4 h-4 ed-muted " />
                    <span className="text-sm font-medium ed-ink ">
                      Latest Additions
                    </span>
                  </div>
                </div>
                <button className="w-full py-3 px-4 rounded-xl font-semibold text-sm ed-surface  ed-hover-surface  ed-ink  border ed-border  hover:border-gray-300  transition-all duration-300 transform ed-lift">
                  View Scholarly Vault
                </button>
              </div>
              <div className="absolute inset-0 ed-tint   opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
};
