import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, BookOpen, GraduationCap, Clock, Users, 
  Award, ChevronRight, Calendar, Star, BookMarked 
} from "lucide-react";
import { HeroSection } from "../../Home/sections/HeroSection";
import { FooterSection } from "../../Home/sections/FooterSection";

const islamicStudiesPrograms = [
  {
    id: "bs-islamiat",
    title: "Bachelor (BS/BA Islamiat or BS Islamic Studies)",
    description: "Comprehensive undergraduate program covering Islamic theology, jurisprudence, history, and contemporary Islamic thought.",
    duration: "4 years",
    level: "Undergraduate",
    icon: GraduationCap,
    color: "from-green-500 to-green-700",
    bgPattern: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/20",
    subjects: ["Islamic Theology", "Islamic Jurisprudence", "Islamic History", "Arabic Language", "Quranic Studies"],
    resourceCount: 25
  },
  {
    id: "ma-islamic-studies",
    title: "Master (MA / MS Islamic Studies)",
    description: "Advanced graduate program focusing on specialized areas of Islamic studies and research methodologies.",
    duration: "2 years",
    level: "Graduate",
    icon: Award,
    color: "from-blue-500 to-blue-700",
    bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/20",
    subjects: ["Advanced Islamic Theology", "Research Methods", "Islamic Philosophy", "Contemporary Islamic Issues", "Thesis Work"],
    resourceCount: 18
  },
  {
    id: "mphil-phd-islamic-studies",
    title: "MPhil / PhD Islamic Studies",
    description: "Advanced research-level programs for scholars pursuing academic careers in Islamic studies.",
    duration: "3-5 years",
    level: "Research",
    icon: Star,
    color: "from-purple-500 to-purple-700",
    bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/20",
    subjects: ["Advanced Research", "Dissertation", "Academic Writing", "Specialized Studies", "Teaching Methods"],
    resourceCount: 12
  },
  {
    id: "dars-e-nizami",
    title: "Dars-e-Nizami (Aalim Course)",
    description: "Traditional Islamic education program offered in Madaris, equivalent to postgraduate level depending on board.",
    duration: "6-8 years",
    level: "Traditional",
    icon: BookMarked,
    color: "from-orange-500 to-orange-700",
    bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/20",
    subjects: ["Traditional Islamic Sciences", "Hadith Studies", "Fiqh", "Arabic Literature", "Islamic Ethics"],
    resourceCount: 30
  },
  {
    id: "diploma-short-courses",
    title: "Diploma / Short Courses",
    description: "Specialized courses in Arabic, Quranic recitation, Islamic finance, Hadith studies, and other Islamic disciplines.",
    duration: "6 months - 2 years",
    level: "Certificate",
    icon: Clock,
    color: "from-teal-500 to-teal-700",
    bgPattern: "bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-900/20",
    subjects: ["Arabic Language", "Quranic Recitation", "Islamic Finance", "Hadith Studies", "Islamic Counseling"],
    resourceCount: 15
  }
];

const publicUniversities = [
  { name: "International Islamic University Islamabad (IIUI)", link: "https://www.iiu.edu.pk/" },
  { name: "Bahauddin Zakariya University, Multan", link: "https://www.bzu.edu.pk/" },
  { name: "University of Gujrat", link: "https://uog.edu.pk/" },
  { name: "University of the Punjab, Lahore", link: "https://pu.edu.pk/" },
  { name: "Government College University, Faisalabad", link: "https://gcuf.edu.pk/" },
  { name: "University of Sargodha", link: "https://uos.edu.pk/" },
  { name: "Ghazi University, Dera Ghazi Khan", link: "https://www.gudgk.edu.pk/" },
  { name: "University of Malakand", link: "https://www.uom.edu.pk/" },
  { name: "Abdul Wali Khan University, Mardan", link: "https://www.awkum.edu.pk/" },
  { name: "Allama Iqbal Open University (AIOU), Islamabad", link: "https://www.aiou.edu.pk/" },
  { name: "HITEC University, Taxila", link: "https://hitecuni.edu.pk/" },
  { name: "University of Poonch, Rawalakot", link: "https://upr.edu.pk/" },
  { name: "University of Karachi (Sheikh Zayed Islamic Centre)", link: "https://www.uok.edu.pk/szic" },
  { name: "National University of Modern Languages (NUML)", link: "https://numl.edu.pk/" },
  { name: "University of Loralai", link: "https://www.uoli.edu.pk/" },
  { name: "Hazara University, Mansehra", link: "https://www.hu.edu.pk/" },
  { name: "Gomal University, Dera Ismail Khan", link: "https://www.gu.edu.pk/" },
  { name: "Women University, Swabi", link: "https://wus.edu.pk/" },
  { name: "Women University, Mardan", link: "https://wumardan.edu.pk/" },
  { name: "University of Jhang", link: "https://www.uoj.edu.pk/" }
];
const privateUniversities = [
  { name: "Mohi‑ud‑Din Islamic University, Nerian Sharif (AJK)", link: "https://www.miu.edu.pk/" },
  { name: "Al Ghazali University, Lahore", link: "https://www.alghazali.edu.pk/" },
  { name: "Imperial College of Business Studies (ICBS), Lahore", link: "https://www.imperial.edu.pk/" },
  { name: "GIFT University, Gujranwala", link: "https://www.gift.edu.pk/" },
  { name: "Riphah International University (select campuses)", link: "https://www.riphah.edu.pk/" },
  { name: "Minhaj University, Lahore", link: "https://www.mul.edu.pk/" },
  { name: "The Islamia University of Bahawalpur (semi-govt)", link: "https://www.iub.edu.pk/" }
];

const masterPublicUniversities = [
  { name: "International Islamic University Islamabad (IIUI)", link: "https://www.iiu.edu.pk/" },
  { name: "University of the Punjab, Lahore", link: "https://pu.edu.pk/" },
  { name: "Bahauddin Zakariya University, Multan", link: "https://www.bzu.edu.pk/" },
  { name: "University of Karachi", link: "https://uok.edu.pk/" },
  { name: "University of Sindh, Jamshoro", link: "https://usindh.edu.pk/" },
  { name: "University of Sargodha", link: "https://uos.edu.pk/" },
  { name: "Gomal University, Dera Ismail Khan", link: "https://www.gu.edu.pk/" },
  { name: "University of Peshawar", link: "https://www.uop.edu.pk/" },
  { name: "Allama Iqbal Open University (AIOU), Islamabad", link: "https://www.aiou.edu.pk/" },
  { name: "Fatima Jinnah Women University, Rawalpindi", link: "https://fjwu.edu.pk/" },
  { name: "Government Sadiq College Women University, Bahawalpur", link: "https://www.gscwu.edu.pk/" },
  { name: "Lahore College for Women University (LCWU)", link: "https://www.lcwu.edu.pk/" },
  { name: "Quaid-e-Azam University, Islamabad", link: "https://qau.edu.pk/" },
  { name: "University of Swat", link: "https://uswat.edu.pk/" },
  { name: "Hazara University, Mansehra", link: "https://www.hu.edu.pk/" }
];
const masterPrivateUniversities = [
  { name: "Riphah International University", link: "https://www.riphah.edu.pk/" },
  { name: "Imperial College of Business Studies (ICBS), Lahore", link: "https://www.imperial.edu.pk/" },
  { name: "The Islamia University of Bahawalpur (IUB) (semi-govt)", link: "https://www.iub.edu.pk/" },
  { name: "Sindh Madressatul Islam University (SMIU), Karachi", link: "https://www.smiu.edu.pk/" },
  { name: "Mirpur University of Science and Technology (MUST), AJK", link: "https://must.edu.pk/" }
];

const mphilPublicUniversities = [
  { name: "Allama Iqbal Open University (AIOU), Islamabad", link: "https://www.aiou.edu.pk/" },
  { name: "Bahauddin Zakariya University (BZU), Multan", link: "https://www.bzu.edu.pk/" },
  { name: "University of Karachi", link: "https://uok.edu.pk/" },
  { name: "University of Sindh, Jamshoro", link: "https://usindh.edu.pk/" },
  { name: "Quaid-e-Azam University, Islamabad", link: "https://qau.edu.pk/" },
  { name: "University of Peshawar", link: "https://www.uop.edu.pk/" },
  { name: "Gomal University, Dera Ismail Khan", link: "https://www.gu.edu.pk/" },
  { name: "Hazara University, Mansehra", link: "https://www.hu.edu.pk/" }
];
const mphilPrivateUniversities = [
  { name: "Riphah International University", link: "https://www.riphah.edu.pk/" },
  { name: "MY University, Islamabad", link: "https://myu.edu.pk/" },
  { name: "The Islamia University of Bahawalpur (IUB) (semi-govt)", link: "https://www.iub.edu.pk/" },
  { name: "Sindh Madressatul Islam University (SMIU), Karachi", link: "https://www.smiu.edu.pk/" },
  { name: "University of Management and Technology (UMT), Lahore/Sialkot", link: "https://www.umt.edu.pk/" },
  { name: "Mohi-ud-Din Islamic University (MIU), AJK", link: "https://www.miu.edu.pk/" }
];

const darsInstitutions = [
  "Jamia Darul Uloom Karachi",
  "Jamia Binoria Aalamia",
  "Jamia Uloom-ul-Islamia (Banuri Town)",
  "Jamia Tur Rasheed",
  "Jamia Siddiqia",
  "Jamia Ashrafia, Lahore",
  "Jamia Uloom-i-Sharia, Sahiwal",
  "Safia Muhammadia Education System (SMES), Abbottabad",
  "HILM Institute, Lahore",
  "Jamia Tul Madinah (Dawat-e-Islami)",
  "Jamia Rizvia Faisalabad",
  "Jamia Naeemia Lahore",
  "Jamia Farooqia Karachi",
  "Jamia Taleem-ul-Quran Rawalpindi",
  "Jamia Islamia Minhaj-ul-Quran"
];

const diplomaInstitutions = [
  "International Islamic University Islamabad (Shariah Academy)",
  "Sheikh Zayed Islamic Centre, University of Karachi",
  "Naseeha Institute (Lahore)",
  "Al Balagh Academy",
  "Darul Uloom Online",
  "Aleemiyah Institute of Islamic Studies (Karachi)",
  "Ashraf ul Madaris (Okara)"
];

export const IslamicStudiesPage = (): JSX.Element => {
  const [step, setStep] = useState<
    "programs"|"bs-type"|"bs-public"|"bs-private"|"master-type"|"master-public"|"master-private"|"mphil-type"|"mphil-public"|"mphil-private"|"dars-institutions"|"diploma-institutions"
  >("programs");

  // Handler for program card click
  const handleProgramClick = (id: string) => {
    if (id === "bs-islamiat") setStep("bs-type");
    else if (id === "ma-islamic-studies") setStep("master-type");
    else if (id === "mphil-phd-islamic-studies") setStep("mphil-type");
    else if (id === "dars-e-nizami") setStep("dars-institutions");
    else if (id === "diploma-short-courses") setStep("diploma-institutions");
  };

  // Handler for university type click
  const handleTypeClick = (type: "public"|"private", program: "bs"|"master"|"mphil") => {
    if (program === "bs") setStep(type === "public" ? "bs-public" : "bs-private");
    else if (program === "master") setStep(type === "public" ? "master-public" : "master-private");
    else setStep(type === "public" ? "mphil-public" : "mphil-private");
  };

  // Handler for back navigation
  const handleBack = () => {
    if (step === "bs-type" || step === "master-type" || step === "mphil-type" || step === "dars-institutions" || step === "diploma-institutions") setStep("programs");
    else if (step === "bs-public" || step === "bs-private") setStep("bs-type");
    else if (step === "master-public" || step === "master-private") setStep("master-type");
    else if (step === "mphil-public" || step === "mphil-private") setStep("mphil-type");
  };

  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <div className="flex flex-col w-full items-center bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-900/20 dark:via-gray-800 dark:to-blue-900/20 transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={handleBack}
              disabled={step === "programs"}
              className={`inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group ${step === "programs" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">{step === "programs" ? "Back to Academic Explorer" : "Back"}</span>
            </button>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-green-700 shadow-2xl mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
              Islamic Studies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore comprehensive Islamic education programs from undergraduate to advanced research levels. Discover traditional and modern approaches to Islamic studies.
            </p>
          </div>

          {/* Step-based Content */}
          {step === "programs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {islamicStudiesPrograms.map((program) => {
                const IconComponent = program.icon;
                return (
                  <div
                    key={program.id}
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700 overflow-hidden"
                    onClick={() => handleProgramClick(program.id)}
                  >
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 ${program.bgPattern} opacity-50`} />
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header with Icon and Duration Tag */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm transition-all duration-300">
                            {program.resourceCount} Resources
                          </span>
                          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-sm">
                            {program.duration}
                          </span>
                        </div>
                      </div>
                      {/* Title and Description */}
                      <div className="flex-grow mb-6">
                        <h3 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-3 leading-tight">
                          {program.title}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">
                          {program.description}
                        </p>
                        {/* Level Badge */}
                        <div className="mb-4">
                          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getLevelColor(program.level)}`}>
                            {program.level}
                          </span>
                        </div>
                        {/* Subjects */}
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            Key Subjects:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {program.subjects.slice(0, 3).map((subject, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                                {subject}
                              </span>
                            ))}
                            {program.subjects.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                                +{program.subjects.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Action Button */}
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          <span>Explore Program</span>
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
          )}

          {/* BS Program: Public/Private selection */}
          {step === "bs-type" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div
                className="group relative bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-green-200 dark:border-green-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("public", "bs")}
              >
                <Users className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Public University</h3>
                <p className="text-lg opacity-80">See all public sector universities offering BS Islamic Studies.</p>
              </div>
              <div
                className="group relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-blue-200 dark:border-blue-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("private", "bs")}
              >
                <GraduationCap className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Private University</h3>
                <p className="text-lg opacity-80">See all private sector universities offering BS Islamic Studies.</p>
              </div>
            </div>
          )}
          {/* Master Program: Public/Private selection */}
          {step === "master-type" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div
                className="group relative bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-green-200 dark:border-green-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("public", "master")}
              >
                <Users className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Public University</h3>
                <p className="text-lg opacity-80">See all public sector universities offering MA/MS Islamic Studies.</p>
              </div>
              <div
                className="group relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-blue-200 dark:border-blue-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("private", "master")}
              >
                <GraduationCap className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Private / Semi-Government University</h3>
                <p className="text-lg opacity-80">See all private/semi-govt universities offering MA/MS Islamic Studies.</p>
              </div>
            </div>
          )}
          {/* MPhil/PhD Program: Public/Private selection */}
          {step === "mphil-type" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div
                className="group relative bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-green-200 dark:border-green-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("public", "mphil")}
              >
                <Users className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Public University</h3>
                <p className="text-lg opacity-80">See all public sector universities offering MPhil/PhD Islamic Studies.</p>
              </div>
              <div
                className="group relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-blue-200 dark:border-blue-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("private", "mphil")}
              >
                <GraduationCap className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Private / Semi-Government University</h3>
                <p className="text-lg opacity-80">See all private/semi-govt universities offering MPhil/PhD Islamic Studies.</p>
              </div>
            </div>
          )}
          {/* Dars-e-Nizami: Institution list */}
          {step === "dars-institutions" && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Institutions Offering Dars-e-Nizami in Pakistan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {darsInstitutions.map((inst) => (
                  <div
                    key={inst}
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-lg mb-4">
                      <BookMarked className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {inst}
                    </h3>
                  </div>
                ))}
              </div>
            </>
          )}
          {/* Diploma/Short Courses: Institution list */}
          {step === "diploma-institutions" && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Institutions Offering Diploma / Short Courses in Islamic Studies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {diplomaInstitutions.map((inst) => (
                  <div
                    key={inst}
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-lg mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {inst}
                    </h3>
                  </div>
                ))}
              </div>
            </>
          )}
          {/* BS Program: University list */}
          {(step === "bs-public" || step === "bs-private") && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                {step === "bs-public" ? "🏛️ Public Universities" : "🏫 Private Universities"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {(step === "bs-public" ? publicUniversities : privateUniversities).map((uni) => (
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={uni.name}
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-lg mb-4">
                      {step === "bs-public" ? <Users className="w-8 h-8 text-white" /> : <GraduationCap className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {uni.name}
                    </h3>
                  </a>
                ))}
              </div>
            </>
          )}
          {/* Master Program: University list */}
          {(step === "master-public" || step === "master-private") && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                {step === "master-public" ? "🏛️ Public Universities" : "🏫 Private / Semi-Government Universities"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {(step === "master-public" ? masterPublicUniversities : masterPrivateUniversities).map((uni) => (
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={uni.name}
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-lg mb-4">
                      {step === "master-public" ? <Users className="w-8 h-8 text-white" /> : <GraduationCap className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {uni.name}
                    </h3>
                  </a>
                ))}
              </div>
            </>
          )}
          {/* MPhil/PhD Program: University list */}
          {(step === "mphil-public" || step === "mphil-private") && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                {step === "mphil-public" ? "🏛️ Public Universities" : "🏫 Private / Semi-Government Universities"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {(step === "mphil-public" ? mphilPublicUniversities : mphilPrivateUniversities).map((uni) => (
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={uni.name}
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-lg mb-4">
                      {step === "mphil-public" ? <Users className="w-8 h-8 text-white" /> : <GraduationCap className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {uni.name}
                    </h3>
                  </a>
                ))}
              </div>
            </>
          )}

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 font-['Newsreader',Helvetica]">
                Ready to Begin Your Islamic Studies Journey?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Choose your preferred program level and access comprehensive Islamic studies resources, books, and materials tailored to your educational goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/academic-explorer" 
                  className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Back to Academic Explorer
                </Link>
                <Link 
                  to="/scholarly-vault" 
                  className="bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
                >
                  Visit Scholarly Vault
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
};

// Helper function to get level colors
const getLevelColor = (level: string) => {
  switch (level) {
    case "Undergraduate":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "Graduate":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    case "Research":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    case "Traditional":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
    case "Certificate":
      return "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
  }
}; 
