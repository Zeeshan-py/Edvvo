import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, Users, Landmark, BookMarked, Mic,
  ChevronRight, Star, Award, GraduationCap, BookOpen 
} from "lucide-react";
import { HeroSection } from "../../Home/sections/HeroSection";
import { FooterSection } from "../../Home/sections/FooterSection";

const socialSciencesFields = [
  { id: "soc", name: "Sociology" },
  { id: "psy", name: "Psychology" },
  { id: "pol", name: "Political Science" },
  { id: "his", name: "History" },
  { id: "eng", name: "English Literature" },
  { id: "ir", name: "International Relations" },
  { id: "mass", name: "Mass Communication" },
  { id: "edu", name: "Education" },
];

const socPublic = [
  { name: "University of the Punjab, Lahore", link: "https://pu.edu.pk/" },
  { name: "Quaid-i-Azam University, Islamabad", link: "https://qau.edu.pk/" },
  { name: "Bahauddin Zakariya University, Multan", link: "https://www.bzu.edu.pk/" },
  { name: "University of Peshawar", link: "https://www.uop.edu.pk/" }
];
const socPrivate = [
  { name: "Beaconhouse National University (BNU), Lahore", link: "https://bnu.edu.pk/" },
  { name: "Superior University, Lahore", link: "https://www.superior.edu.pk/" },
  { name: "UMT, Lahore/Sialkot", link: "https://www.umt.edu.pk/" },
  { name: "Riphah International University, Islamabad", link: "https://www.riphah.edu.pk/" }
];
const psyPublic = socPublic;
const psyPrivate = socPrivate;
const polPublic = socPublic;
const polPrivate = socPrivate;
const hisPublic = socPublic;
const hisPrivate = socPrivate;
const engPublic = socPublic;
const engPrivate = socPrivate;
const irPublic = socPublic;
const irPrivate = socPrivate;
const massPublic = socPublic;
const massPrivate = socPrivate;
const eduPublic = socPublic;
const eduPrivate = socPrivate;
const otherPublic = socPublic;
const otherPrivate = socPrivate;

export const SocialSciencesHumanitiesPage = (): JSX.Element => {
  const [step, setStep] = useState<"fields"|"field-type"|"field-public"|"field-private">("fields");
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const handleFieldClick = (fieldId: string) => {
    setSelectedField(fieldId);
    setStep("field-type");
  };

  const handleTypeClick = (type: "public"|"private") => {
    setStep(type === "public" ? "field-public" : "field-private");
  };

  const handleBack = () => {
    if (step === "field-type") setStep("fields");
    else if (step === "field-public" || step === "field-private") setStep("field-type");
  };

  const getUniversities = (field: string, type: "public"|"private") => {
    switch (field) {
      case "soc": return type === "public" ? socPublic : socPrivate;
      case "psy": return type === "public" ? psyPublic : psyPrivate;
      case "pol": return type === "public" ? polPublic : polPrivate;
      case "his": return type === "public" ? hisPublic : hisPrivate;
      case "eng": return type === "public" ? engPublic : engPrivate;
      case "ir": return type === "public" ? irPublic : irPrivate;
      case "mass": return type === "public" ? massPublic : massPrivate;
      case "edu": return type === "public" ? eduPublic : eduPrivate;
      case "other": return type === "public" ? otherPublic : otherPrivate;
      default: return type === "public" ? [] : [];
    }
  };

  const getFieldName = (fieldId: string | null) => {
    const field = socialSciencesFields.find(f => f.id === fieldId);
    return field ? field.name : "";
  };

  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <div className="flex flex-col w-full items-center bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-yellow-900/20 dark:via-gray-800 dark:to-orange-900/20 transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={handleBack}
              disabled={step === "fields"}
              className={`inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group ${step === "fields" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">{step === "fields" ? "Back to Academic Explorer" : "Back"}</span>
            </button>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-2xl mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
              Social Sciences & Humanities Fields
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore all major social sciences & humanities fields. Click a field to see universities that offer it.
            </p>
          </div>

          {/* Step-based Content */}
          {step === "fields" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {socialSciencesFields.map((field) => (
                <div
                  key={field.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center text-center"
                  onClick={() => handleFieldClick(field.id)}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {field.name}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {step === "field-type" && selectedField && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                {getFieldName(selectedField)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div
                  className="group relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-blue-200 dark:border-blue-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                  onClick={() => handleTypeClick("public")}
                >
                  <Landmark className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Public University</h3>
                  <p className="text-lg opacity-80">See all public sector universities offering {getFieldName(selectedField)}.</p>
                </div>
                <div
                  className="group relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-purple-200 dark:border-purple-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                  onClick={() => handleTypeClick("private")}
                >
                  <GraduationCap className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Private University</h3>
                  <p className="text-lg opacity-80">See all private sector universities offering {getFieldName(selectedField)}.</p>
                </div>
              </div>
            </>
          )}

          {(step === "field-public" || step === "field-private") && selectedField && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                {getFieldName(selectedField)}<br/>{step === "field-public" ? "🏛️ Public Universities" : "🏫 Private Universities"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {getUniversities(selectedField, step === "field-public" ? "public" : "private").map((uni) => (
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={uni.name}
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center shadow-lg mb-4">
                      {step === "field-public" ? <Users className="w-8 h-8 text-white" /> : <GraduationCap className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {uni.name}
                    </h3>
                  </a>
                ))}
              </div>
            </>
          )}

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 font-['Newsreader',Helvetica]">
                Understand the Human Experience
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Dive into the studies of society, culture, and human behavior. Find the program that fits your intellectual curiosity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/academic-explorer" 
                  className="bg-white text-yellow-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Back to Academic Explorer
                </Link>
                <Link 
                  to="/scholarly-vault?category=Science" 
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

const getLevelColor = (level: string) => {
  switch (level) {
    case "Undergraduate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Graduate":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
    case "Doctorate":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
    case "Professional":
      return "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
  }
}; 
