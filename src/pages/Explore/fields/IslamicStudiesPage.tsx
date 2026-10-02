import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    color: " ",
    bgPattern: "ed-tint    ",
    subjects: ["Islamic Theology", "Islamic Jurisprudence", "Islamic History", "Arabic Language", "Quranic Studies"],
  },
  {
    id: "ma-islamic-studies",
    title: "Master (MA / MS Islamic Studies)",
    description: "Advanced graduate program focusing on specialized areas of Islamic studies and research methodologies.",
    duration: "2 years",
    level: "Graduate",
    icon: Award,
    color: " ",
    bgPattern: "ed-tint    ",
    subjects: ["Advanced Islamic Theology", "Research Methods", "Islamic Philosophy", "Contemporary Islamic Issues", "Thesis Work"],
  },
  {
    id: "mphil-phd-islamic-studies",
    title: "MPhil / PhD Islamic Studies",
    description: "Advanced research-level programs for scholars pursuing academic careers in Islamic studies.",
    duration: "3-5 years",
    level: "Research",
    icon: Star,
    color: " ",
    bgPattern: "ed-tint    ",
    subjects: ["Advanced Research", "Dissertation", "Academic Writing", "Specialized Studies", "Teaching Methods"],
  },
  {
    id: "dars-e-nizami",
    title: "Dars-e-Nizami (Aalim Course)",
    description: "Traditional Islamic education program offered in Madaris, equivalent to postgraduate level depending on board.",
    duration: "6-8 years",
    level: "Traditional",
    icon: BookMarked,
    color: " ",
    bgPattern: "ed-tint    ",
    subjects: ["Traditional Islamic Sciences", "Hadith Studies", "Fiqh", "Arabic Literature", "Islamic Ethics"],
  },
  {
    id: "diploma-short-courses",
    title: "Diploma / Short Courses",
    description: "Specialized courses in Arabic, Quranic recitation, Islamic finance, Hadith studies, and other Islamic disciplines.",
    duration: "6 months - 2 years",
    level: "Certificate",
    icon: Clock,
    color: " ",
    bgPattern: "ed-tint    ",
    subjects: ["Arabic Language", "Quranic Recitation", "Islamic Finance", "Hadith Studies", "Islamic Counseling"],
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
    <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <div className="flex flex-col w-full items-center ed-tint       transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={handleBack}
              disabled={step === "programs"}
              className={`inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group ${step === "programs" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">{step === "programs" ? "Back to Academic Explorer" : "Back"}</span>
            </button>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint   ed-elevation mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
              Islamic Studies
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed">
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
                    className="group relative ed-surface  rounded-xl p-6 lg:p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border ed-border  overflow-hidden"
                    onClick={() => handleProgramClick(program.id)}
                   role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 ${program.bgPattern} opacity-50`} />
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header with Icon and Duration Tag */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ed-tint ${program.color} flex items-center justify-center ed-elevation ed-hover-shadow transition-all duration-300 ed-lift`}>
                          <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="px-3 py-1.5 rounded-full text-xs font-semibold ed-tint   text-white shadow-sm">
                            {program.duration}
                          </span>
                        </div>
                      </div>
                      {/* Title and Description */}
                      <div className="flex-grow mb-6">
                        <h3 className="font-bold text-xl lg:text-2xl ed-ink  ed-type mb-3 leading-tight">
                          {program.title}
                        </h3>
                        <p className="text-sm lg:text-base ed-muted  leading-relaxed line-clamp-3 mb-4">
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
                          <p className="text-xs font-semibold ed-muted  uppercase tracking-wide">
                            Key Subjects:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {program.subjects.slice(0, 3).map((subject, index) => (
                              <span key={index} className="px-2 py-1 ed-canvas  ed-ink  text-xs rounded-full">
                                {subject}
                              </span>
                            ))}
                            {program.subjects.length > 3 && (
                              <span className="px-2 py-1 ed-canvas  ed-ink  text-xs rounded-full">
                                +{program.subjects.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Action Button */}
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 ed-muted  font-medium ed-group-ink  transition-colors duration-300">
                          <span>Explore Program</span>
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
          )}

          {/* BS Program: Public/Private selection */}
          {step === "bs-type" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div
                className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-green-200  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("public", "bs")}
               role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                <Users className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Public University</h3>
                <p className="text-lg opacity-80">See all public sector universities offering BS Islamic Studies.</p>
              </div>
              <div
                className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border ed-border  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("private", "bs")}
               role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
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
                className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-green-200  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("public", "master")}
               role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                <Users className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Public University</h3>
                <p className="text-lg opacity-80">See all public sector universities offering MA/MS Islamic Studies.</p>
              </div>
              <div
                className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border ed-border  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("private", "master")}
               role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
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
                className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-green-200  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("public", "mphil")}
               role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                <Users className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Public University</h3>
                <p className="text-lg opacity-80">See all public sector universities offering MPhil/PhD Islamic Studies.</p>
              </div>
              <div
                className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border ed-border  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                onClick={() => handleTypeClick("private", "mphil")}
               role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                <GraduationCap className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-2">Private / Semi-Government University</h3>
                <p className="text-lg opacity-80">See all private/semi-govt universities offering MPhil/PhD Islamic Studies.</p>
              </div>
            </div>
          )}
          {/* Dars-e-Nizami: Institution list */}
          {step === "dars-institutions" && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center ed-ink ">
                Institutions Offering Dars-e-Nizami in Pakistan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {darsInstitutions.map((inst) => (
                  <div
                    key={inst}
                    className="group relative ed-surface  rounded-xl p-6 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift border ed-border  overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl ed-tint   flex items-center justify-center ed-elevation mb-4">
                      <BookMarked className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg ed-ink  mb-2">
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
              <h2 className="text-2xl font-bold mb-8 text-center ed-ink ">
                Institutions Offering Diploma / Short Courses in Islamic Studies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {diplomaInstitutions.map((inst) => (
                  <div
                    key={inst}
                    className="group relative ed-surface  rounded-xl p-6 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift border ed-border  overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl ed-tint   flex items-center justify-center ed-elevation mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg ed-ink  mb-2">
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
              <h2 className="text-2xl font-bold mb-8 text-center ed-ink ">
                {step === "bs-public" ? "🏛️ Public Universities" : "🏫 Private Universities"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {(step === "bs-public" ? publicUniversities : privateUniversities).map((uni) => (
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={uni.name}
                    className="group relative ed-surface  rounded-xl p-6 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift border ed-border  overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl ed-tint   flex items-center justify-center ed-elevation mb-4">
                      {step === "bs-public" ? <Users className="w-8 h-8 text-white" /> : <GraduationCap className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-lg ed-ink  mb-2">
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
              <h2 className="text-2xl font-bold mb-8 text-center ed-ink ">
                {step === "master-public" ? "🏛️ Public Universities" : "🏫 Private / Semi-Government Universities"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {(step === "master-public" ? masterPublicUniversities : masterPrivateUniversities).map((uni) => (
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={uni.name}
                    className="group relative ed-surface  rounded-xl p-6 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift border ed-border  overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl ed-tint   flex items-center justify-center ed-elevation mb-4">
                      {step === "master-public" ? <Users className="w-8 h-8 text-white" /> : <GraduationCap className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-lg ed-ink  mb-2">
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
              <h2 className="text-2xl font-bold mb-8 text-center ed-ink ">
                {step === "mphil-public" ? "🏛️ Public Universities" : "🏫 Private / Semi-Government Universities"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {(step === "mphil-public" ? mphilPublicUniversities : mphilPrivateUniversities).map((uni) => (
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={uni.name}
                    className="group relative ed-surface  rounded-xl p-6 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift border ed-border  overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl ed-tint   flex items-center justify-center ed-elevation mb-4">
                      {step === "mphil-public" ? <Users className="w-8 h-8 text-white" /> : <GraduationCap className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-lg ed-ink  mb-2">
                      {uni.name}
                    </h3>
                  </a>
                ))}
              </div>
            </>
          )}

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="ed-tint   rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 ed-type">
                Ready to Begin Your Islamic Studies Journey?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Choose your preferred program level and access comprehensive Islamic studies resources, books, and materials tailored to your educational goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/academic-explorer"
                  className="ed-surface text-green-600 px-6 py-3 rounded-xl font-semibold ed-hover-surface transition-all duration-300 transform ed-lift ed-elevation"
                >
                  Back to Academic Explorer
                </Link>
                <Link
                  to="/scholarly-vault"
                  className="ed-surface text-white px-6 py-3 rounded-xl font-semibold ed-hover-surface transition-all duration-300 transform ed-lift border border-white/30"
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
      return "ed-tint text-green-800  ";
    case "Graduate":
      return "ed-tint ed-link  ";
    case "Research":
      return "ed-tint ed-link  ";
    case "Traditional":
      return "ed-tint text-orange-800  ";
    case "Certificate":
      return "ed-tint text-teal-800  ";
    default:
      return "ed-canvas ed-ink  ";
  }
};
