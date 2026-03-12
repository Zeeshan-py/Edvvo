import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, GraduationCap, Award, Star, Clock, 
  ChevronRight, BookOpen, Users 
} from "lucide-react";
import { HeroSection } from "../../Home/sections/HeroSection";
import { FooterSection } from "../../Home/sections/FooterSection";

const appliedScienceFields = [
  { id: "physics", name: "Physics" },
  { id: "chemistry", name: "Chemistry" },
  { id: "biology", name: "Biology" },
  { id: "mathematics", name: "Mathematics" },
  { id: "environmental", name: "Environmental Science" },
  { id: "biotechnology", name: "Biotechnology" },
  { id: "microbiology", name: "Microbiology" },
  { id: "botany", name: "Botany" },
  { id: "zoology", name: "Zoology" },
  { id: "geology", name: "Geology" },
  { id: "statistics", name: "Statistics" },
  { id: "biochemistry", name: "Biochemistry" },
  { id: "genetics", name: "Genetics" },
  { id: "foodscience", name: "Food Science" },
  { id: "other", name: "Other Applied Sciences" }
];

const physicsPublic = [
  "Quaid-i-Azam University (QAU), Islamabad",
  "University of the Punjab, Lahore",
  "University of Karachi",
  "Government College University (GCU), Lahore",
  "University of Peshawar",
  "University of Sindh, Jamshoro",
  "Bahauddin Zakariya University (BZU), Multan",
  "University of Sargodha",
  "University of Balochistan, Quetta",
  "Islamia University of Bahawalpur (IUB)",
  "University of Gujrat",
  "University of Malakand",
  "Hazara University, Mansehra"
];
const physicsPrivate = [
  "COMSATS University Islamabad",
  "FAST-NUCES",
  "Forman Christian College (A Chartered University), Lahore",
  "Qarshi University, Lahore",
  "Riphah International University, Islamabad",
  "Superior University, Lahore",
  "UMT, Lahore/Sialkot"
];
const chemistryPublic = [
  "Quaid-i-Azam University (QAU), Islamabad",
  "University of the Punjab, Lahore",
  "University of Karachi",
  "Government College University (GCU), Lahore",
  "University of Peshawar",
  "University of Sindh, Jamshoro",
  "Bahauddin Zakariya University (BZU), Multan",
  "University of Sargodha",
  "University of Balochistan, Quetta",
  "Islamia University of Bahawalpur (IUB)",
  "University of Gujrat",
  "University of Malakand",
  "Hazara University, Mansehra"
];
const chemistryPrivate = [
  "COMSATS University Islamabad",
  "FAST-NUCES",
  "Forman Christian College (A Chartered University), Lahore",
  "Qarshi University, Lahore",
  "Riphah International University, Islamabad",
  "Superior University, Lahore",
  "UMT, Lahore/Sialkot"
];
const biologyPublic = [
  "Quaid-i-Azam University (QAU), Islamabad",
  "University of the Punjab, Lahore",
  "University of Karachi",
  "Government College University (GCU), Lahore",
  "University of Peshawar",
  "University of Sindh, Jamshoro",
  "Bahauddin Zakariya University (BZU), Multan",
  "University of Sargodha",
  "University of Balochistan, Quetta",
  "Islamia University of Bahawalpur (IUB)",
  "University of Gujrat",
  "University of Malakand",
  "Hazara University, Mansehra"
];
const biologyPrivate = [
  "COMSATS University Islamabad",
  "FAST-NUCES",
  "Forman Christian College (A Chartered University), Lahore",
  "Qarshi University, Lahore",
  "Riphah International University, Islamabad",
  "Superior University, Lahore",
  "UMT, Lahore/Sialkot"
];
const environmentalPublic = [
  "Quaid-i-Azam University (QAU), Islamabad",
  "University of the Punjab, Lahore",
  "University of Karachi",
  "Government College University (GCU), Lahore",
  "University of Peshawar",
  "University of Sindh, Jamshoro",
  "Bahauddin Zakariya University (BZU), Multan",
  "University of Sargodha",
  "University of Balochistan, Quetta",
  "Islamia University of Bahawalpur (IUB)",
  "University of Gujrat",
  "University of Malakand",
  "Hazara University, Mansehra"
];
const environmentalPrivate = [
  "COMSATS University Islamabad",
  "FAST-NUCES",
  "Forman Christian College (A Chartered University), Lahore",
  "Qarshi University, Lahore",
  "Riphah International University, Islamabad",
  "Superior University, Lahore",
  "UMT, Lahore/Sialkot"
];
const microbiologyPublic = [
  "Quaid-i-Azam University (QAU), Islamabad",
  "University of Karachi",
  "University of the Punjab, Lahore",
  "Government College University (GCU), Lahore",
  "University of Peshawar",
  "Bahauddin Zakariya University (BZU), Multan",
  "University of Sindh, Jamshoro",
  "University of Sargodha",
  "Islamia University of Bahawalpur (IUB)"
];
const microbiologyPrivate = [
  "COMSATS University Islamabad",
  "Forman Christian College (A Chartered University), Lahore",
  "Superior University, Lahore",
  "Riphah International University, Islamabad",
  "UMT, Lahore/Sialkot"
];
const botanyPublic = microbiologyPublic;
const botanyPrivate = microbiologyPrivate;
const zoologyPublic = microbiologyPublic;
const zoologyPrivate = microbiologyPrivate;
const biotechnologyPublic = microbiologyPublic;
const biotechnologyPrivate = microbiologyPrivate;
const biochemistryPublic = microbiologyPublic;
const biochemistryPrivate = microbiologyPrivate;
const geneticsPublic = microbiologyPublic;
const geneticsPrivate = microbiologyPrivate;

const mathematicsPublic = [
  "Quaid-i-Azam University (QAU), Islamabad",
  "University of the Punjab, Lahore",
  "University of Karachi",
  "Government College University (GCU), Lahore",
  "University of Peshawar",
  "Bahauddin Zakariya University (BZU), Multan",
  "University of Sindh, Jamshoro",
  "University of Sargodha",
  "Islamia University of Bahawalpur (IUB)"
];
const mathematicsPrivate = [
  "COMSATS University Islamabad",
  "FAST-NUCES",
  "Forman Christian College (A Chartered University), Lahore",
  "Superior University, Lahore",
  "Riphah International University, Islamabad",
  "UMT, Lahore/Sialkot"
];
const geologyPublic = mathematicsPublic;
const geologyPrivate = mathematicsPrivate;
const statisticsPublic = mathematicsPublic;
const statisticsPrivate = mathematicsPrivate;
const foodsciencePublic = mathematicsPublic;
const foodsciencePrivate = mathematicsPrivate;
const otherPublic = mathematicsPublic;
const otherPrivate = mathematicsPrivate;

const placeholderPublic = ["Public University 1", "Public University 2", "Public University 3"];
const placeholderPrivate = ["Private University 1", "Private University 2", "Private University 3"];

export const AppliedScienceProgramsPage = (): JSX.Element => {
  const [step, setStep] = useState<"fields"|"field-type"|"field-public"|"field-private">("fields");
  const [selectedField, setSelectedField] = useState<string | null>(null);

  // Handler for field card click
  const handleFieldClick = (fieldId: string) => {
    setSelectedField(fieldId);
    setStep("field-type");
  };

  // Handler for university type click
  const handleTypeClick = (type: "public"|"private") => {
    setStep(type === "public" ? "field-public" : "field-private");
  };

  // Handler for back navigation
  const handleBack = () => {
    if (step === "field-type") setStep("fields");
    else if (step === "field-public" || step === "field-private") setStep("field-type");
  };

  // Get university lists for the selected field
  const getUniversities = (field: string, type: "public"|"private") => {
    switch (field) {
      case "physics": return type === "public" ? physicsPublic : physicsPrivate;
      case "chemistry": return type === "public" ? chemistryPublic : chemistryPrivate;
      case "biology": return type === "public" ? biologyPublic : biologyPrivate;
      case "environmental": return type === "public" ? environmentalPublic : environmentalPrivate;
      case "microbiology": return type === "public" ? microbiologyPublic : microbiologyPrivate;
      case "botany": return type === "public" ? botanyPublic : botanyPrivate;
      case "zoology": return type === "public" ? zoologyPublic : zoologyPrivate;
      case "biotechnology": return type === "public" ? biotechnologyPublic : biotechnologyPrivate;
      case "biochemistry": return type === "public" ? biochemistryPublic : biochemistryPrivate;
      case "genetics": return type === "public" ? geneticsPublic : geneticsPrivate;
      case "mathematics": return type === "public" ? mathematicsPublic : mathematicsPrivate;
      case "geology": return type === "public" ? geologyPublic : geologyPrivate;
      case "statistics": return type === "public" ? statisticsPublic : statisticsPrivate;
      case "foodscience": return type === "public" ? foodsciencePublic : foodsciencePrivate;
      case "other": return type === "public" ? otherPublic : otherPrivate;
      default: return type === "public" ? placeholderPublic : placeholderPrivate;
    }
  };

  // Get field name
  const getFieldName = (fieldId: string | null) => {
    const field = appliedScienceFields.find(f => f.id === fieldId);
    return field ? field.name : "";
  };

  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <div className="flex flex-col w-full items-center bg-gradient-to-br from-purple-50 via-white to-teal-50 dark:from-purple-900/20 dark:via-gray-800 dark:to-teal-900/20 transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={handleBack}
              disabled={step === "fields"}
              className={`inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group ${step === "fields" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">{step === "fields" ? "Back to Engineering & Applied Science" : "Back"}</span>
            </button>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-teal-600 shadow-2xl mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
              Applied Science Fields
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore all major applied science fields. Click a field to see universities that offer it.
            </p>
          </div>

          {/* Step-based Content */}
          {step === "fields" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {appliedScienceFields.map((field) => (
                <div
                  key={field.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center text-center"
                  onClick={() => handleFieldClick(field.id)}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center shadow-lg mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
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
                  className="group relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-purple-200 dark:border-purple-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                  onClick={() => handleTypeClick("public")}
                >
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Public University</h3>
                  <p className="text-lg opacity-80">See all public sector universities offering {getFieldName(selectedField)}.</p>
                </div>
                <div
                  className="group relative bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-teal-200 dark:border-teal-700 overflow-hidden text-white flex flex-col items-center gap-6 text-center"
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
                  <div
                    key={uni}
                    className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center shadow-lg mb-4">
                      {step === "field-public" ? <Users className="w-8 h-8 text-white" /> : <GraduationCap className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {uni}
                    </h3>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 font-['Newsreader',Helvetica]">
                Ready to Start Your Applied Science Journey?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Choose your preferred applied science field and access comprehensive resources, books, and materials.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/engineering-applied-science" 
                  className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Back to Engineering & Applied Science
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
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    case "Graduate":
      return "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400";
    case "Research":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
    case "Technical":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
  }
}; 
