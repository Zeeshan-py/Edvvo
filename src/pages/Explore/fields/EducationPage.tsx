import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, School, GraduationCap, BookOpen, Users,
  ChevronRight, Star, Award, Lightbulb
} from "lucide-react";
import { HeroSection } from "../../Home/sections/HeroSection";
import { FooterSection } from "../../Home/sections/FooterSection";

const educationFields = [
  { id: "bed", name: "B.Ed" },
  { id: "med", name: "M.Ed" },
  { id: "elm", name: "Educational Leadership & Management" },
  { id: "sped", name: "Special Education" },
  { id: "curr", name: "Curriculum Studies" },
];

const bedPublic = [
  { name: "University of Education, Lahore", link: "https://ue.edu.pk/" },
  { name: "Allama Iqbal Open University, Islamabad", link: "https://aiou.edu.pk/" },
  { name: "University of the Punjab, Lahore", link: "https://pu.edu.pk/" },
  { name: "University of Karachi", link: "https://uok.edu.pk/" },
  { name: "Bahauddin Zakariya University, Multan", link: "https://www.bzu.edu.pk/" },
  { name: "University of Peshawar", link: "https://www.uop.edu.pk/" }
];
const bedPrivate = [
  { name: "Beaconhouse National University (BNU), Lahore", link: "https://bnu.edu.pk/" },
  { name: "Superior University, Lahore", link: "https://www.superior.edu.pk/" },
  { name: "UMT, Lahore/Sialkot", link: "https://www.umt.edu.pk/" },
  { name: "Riphah International University, Islamabad", link: "https://www.riphah.edu.pk/" }
];
const medPublic = bedPublic;
const medPrivate = bedPrivate;
const elmPublic = bedPublic;
const elmPrivate = bedPrivate;
const spedPublic = bedPublic;
const spedPrivate = bedPrivate;
const currPublic = bedPublic;
const currPrivate = bedPrivate;
const otherPublic = bedPublic;
const otherPrivate = bedPrivate;

export const EducationPage = (): JSX.Element => {
  const [step, setStep] = useState<"fields"|"field-type"|"field-public"|"field-private">("fields");
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const handleFieldClick = (fieldId: string) => {
    setSelectedField(fieldId);
    setStep("field-type");
  };

  const handleTypeClick = (type: "public"|"private") => {
    setStep(type === "public" ? "field-public" : "field-private");
  };

  const navigate = useNavigate();
  const handleBack = () => {
    if (step === "fields") { navigate("/academic-explorer"); return; }
    if (step === "field-type") setStep("fields");
    else if (step === "field-public" || step === "field-private") setStep("field-type");
  };

  const getUniversities = (field: string, type: "public"|"private") => {
    switch (field) {
      case "bed": return type === "public" ? bedPublic : bedPrivate;
      case "med": return type === "public" ? medPublic : medPrivate;
      case "elm": return type === "public" ? elmPublic : elmPrivate;
      case "sped": return type === "public" ? spedPublic : spedPrivate;
      case "curr": return type === "public" ? currPublic : currPrivate;
      case "other": return type === "public" ? otherPublic : otherPrivate;
      default: return type === "public" ? [] : [];
    }
  };

  const getFieldName = (fieldId: string | null) => {
    const field = educationFields.find(f => f.id === fieldId);
    return field ? field.name : "";
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

              className={`inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group `}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">{step === "fields" ? "Back to Academic Explorer" : "Back"}</span>
            </button>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint   ed-elevation mb-6">
              <School className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
              Education Fields
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed">
              Explore all major education fields. Click a field to see universities that offer it.
            </p>
          </div>

          {/* Step-based Content */}
          {step === "fields" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {educationFields.map((field) => (
                <div
                  key={field.id}
                  className="group relative ed-surface  rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border ed-border  overflow-hidden flex flex-col items-center text-center"
                  onClick={() => handleFieldClick(field.id)}
                 role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                  <div className="w-14 h-14 rounded-2xl ed-tint   flex items-center justify-center ed-elevation mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl ed-ink  mb-2">
                    {field.name}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {step === "field-type" && selectedField && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center ed-ink ">
                {getFieldName(selectedField)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div
                  className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border ed-border  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                  onClick={() => handleTypeClick("public")}
                 role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                  <School className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Public University</h3>
                  <p className="text-lg opacity-80">See all public sector universities offering {getFieldName(selectedField)}.</p>
                </div>
                <div
                  className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border ed-border  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                  onClick={() => handleTypeClick("private")}
                 role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                  <GraduationCap className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Private University</h3>
                  <p className="text-lg opacity-80">See all private sector universities offering {getFieldName(selectedField)}.</p>
                </div>
              </div>
            </>
          )}

          {(step === "field-public" || step === "field-private") && selectedField && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center ed-ink ">
                {getFieldName(selectedField)}<br/>{step === "field-public" ? "🏛️ Public Universities" : "🏫 Private Universities"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {getUniversities(selectedField, step === "field-public" ? "public" : "private").map((uni) => (
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={uni.name}
                    className="group relative ed-surface  rounded-xl p-6 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift border ed-border  overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl ed-tint   flex items-center justify-center ed-elevation mb-4">
                      {step === "field-public" ? <Users className="w-8 h-8 text-white" /> : <GraduationCap className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="font-bold text-lg ed-ink  mb-2">
                      {uni.name}
                    </h3>
                  </a>
                ))}
              </div>
            </>
          )}

          <div className="mt-16 text-center">
            <div className="ed-tint   rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 ed-type">
                Shape the Future of Learning
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Choose your path in education and access comprehensive resources to support your teaching and learning journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/academic-explorer"
                  className="ed-surface text-emerald-600 px-6 py-3 rounded-xl font-semibold ed-hover-surface transition-all duration-300 transform ed-lift ed-elevation"
                >
                  Back to Academic Explorer
                </Link>
                <Link
                  to="/scholarly-vault?category=Science"
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

const getLevelColor = (level: string) => {
  switch (level) {
    case "Undergraduate":
      return "ed-tint text-emerald-800  ";
    case "Graduate":
      return "ed-tint ed-link  ";
    case "Doctorate":
      return "ed-tint ed-link  ";
    case "Professional":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
    default:
      return "ed-canvas ed-ink  ";
  }
};
