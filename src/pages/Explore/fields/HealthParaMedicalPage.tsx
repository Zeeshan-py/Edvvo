import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, HeartPulse, Stethoscope, Microscope, Syringe,
  ChevronRight, Star, Award, GraduationCap, BookOpen, Users
} from "lucide-react";
import { HeroSection } from "../../Home/sections/HeroSection";
import { FooterSection } from "../../Home/sections/FooterSection";

const healthParaMedicalFields = [
  { id: "mbbs", name: "Medicine (MBBS)" },
  { id: "bds", name: "Dentistry (BDS)" },
  { id: "pharm", name: "Pharmacy (Pharm-D)" },
  { id: "dpt", name: "Physical Therapy (DPT)" },
  { id: "nursing", name: "Nursing" },
  { id: "mlt", name: "Medical Lab Technology" },
  { id: "radiology", name: "Radiology/Imaging" },
];

const healthPublic = [
  { name: "University of Health Sciences (UHS), Lahore", link: "https://uhs.edu.pk/" },
  { name: "King Edward Medical University, Lahore", link: "https://kemu.edu.pk/" },
  { name: "Allama Iqbal Medical College, Lahore", link: "https://aimc.edu.pk/" },
  { name: "Fatima Jinnah Medical University, Lahore", link: "https://fjmu.edu.pk/" },
  { name: "Dow University of Health Sciences, Karachi", link: "https://www.duhs.edu.pk/" },
  { name: "Liaquat University of Medical & Health Sciences, Jamshoro", link: "https://www.lumhs.edu.pk/" },
  { name: "Khyber Medical University, Peshawar", link: "https://www.kmu.edu.pk/" },
  { name: "Punjab Medical College, Faisalabad", link: "https://www.pmc.edu.pk/" },
  { name: "Quaid-e-Azam Medical College, Bahawalpur", link: "https://www.qamc.edu.pk/" },
  { name: "Bolan Medical College, Quetta", link: "https://www.bmc.edu.pk/" }
];
const healthPrivate = [
  { name: "Shifa Tameer-e-Millat University, Islamabad", link: "https://stmu.edu.pk/" },
  { name: "FMH College of Medicine & Dentistry, Lahore", link: "https://www.fmhcmd.edu.pk/" },
  { name: "Lahore Medical & Dental College, Lahore", link: "https://lmdc.edu.pk/" },
  { name: "Isra University, Hyderabad/Islamabad", link: "https://isra.edu.pk/" },
  { name: "Riphah International University, Islamabad", link: "https://www.riphah.edu.pk/" },
  { name: "University of Lahore", link: "https://uol.edu.pk/" }
];
const bdsPublic = healthPublic;
const bdsPrivate = healthPrivate;
const pharmPublic = healthPublic;
const pharmPrivate = healthPrivate;
const dptPublic = healthPublic;
const dptPrivate = healthPrivate;
const nursingPublic = healthPublic;
const nursingPrivate = healthPrivate;
const mltPublic = healthPublic;
const mltPrivate = healthPrivate;
const radiologyPublic = healthPublic;
const radiologyPrivate = healthPrivate;
const otherPublic = healthPublic;
const otherPrivate = healthPrivate;

const uhsColleges = [
  "Allama Iqbal Medical College, Lahore",
  "Fatima Jinnah Medical University, Lahore",
  "Services Institute of Medical Sciences, Lahore",
  "Ameer-ud-Din Medical College, Lahore",
  "Gujranwala Medical College, Gujranwala",
  "Nishtar Medical University, Multan",
  "Quaid-e-Azam Medical College, Bahawalpur",
  "Rawalpindi Medical University, Rawalpindi",
  "Sahiwal Medical College, Sahiwal",
  "Sargodha Medical College, Sargodha",
  "Sheikh Zayed Medical College, Rahim Yar Khan",
  "Punjab Medical College, Faisalabad",
  "DG Khan Medical College, Dera Ghazi Khan",
  "Khawaja Muhammad Safdar Medical College, Sialkot",
  "Sahiwal Medical College, Sahiwal",
  "Shaikh Khalifa Bin Zayed Al-Nahyan Medical & Dental College, Lahore"
];

export const HealthParaMedicalPage = (): JSX.Element => {
  const [step, setStep] = useState<"fields"|"field-type"|"field-public"|"field-private"|"uhs-colleges">("fields");
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

  const handleUHSClick = () => setStep("uhs-colleges");

  const getUniversities = (field: string, type: "public"|"private") => {
    switch (field) {
      case "mbbs": return type === "public" ? healthPublic : healthPrivate;
      case "bds": return type === "public" ? bdsPublic : bdsPrivate;
      case "pharm": return type === "public" ? pharmPublic : pharmPrivate;
      case "dpt": return type === "public" ? dptPublic : dptPrivate;
      case "nursing": return type === "public" ? nursingPublic : nursingPrivate;
      case "mlt": return type === "public" ? mltPublic : mltPrivate;
      case "radiology": return type === "public" ? radiologyPublic : radiologyPrivate;
      case "other": return type === "public" ? otherPublic : otherPrivate;
      default: return type === "public" ? [] : [];
    }
  };

  const getFieldName = (fieldId: string | null) => {
    const field = healthParaMedicalFields.find(f => f.id === fieldId);
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
              <HeartPulse className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
              Health & Para-Medical Fields
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed">
              Explore all major health & para-medical fields. Click a field to see universities that offer it.
            </p>
          </div>

          {/* Step-based Content */}
          {step === "fields" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {healthParaMedicalFields.map((field) => (
                <div
                  key={field.id}
                  className="group relative ed-surface  rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border ed-border  overflow-hidden flex flex-col items-center text-center"
                  onClick={() => handleFieldClick(field.id)}
                 role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                  <div className="w-14 h-14 rounded-2xl ed-tint   flex items-center justify-center ed-elevation mb-4">
                    <Stethoscope className="w-8 h-8 text-white" />
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
                  <Users className="w-12 h-12 mb-4" />
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
              {/* UHS Colleges Card for MBBS/BDS/Public only */}
              {(selectedField === "mbbs" || selectedField === "bds") && (
                <div className="mt-8 flex justify-center">
                  <div
                    className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-green-200  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
                    onClick={handleUHSClick}
                   role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                    <BookOpen className="w-12 h-12 mb-4" />
                    <h3 className="font-bold text-2xl mb-2">UHS Affiliated Colleges</h3>
                    <p className="text-lg opacity-80">View all UHS affiliated medical colleges in Punjab.</p>
                  </div>
                </div>
              )}
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

          {/* UHS Colleges Step */}
          {step === "uhs-colleges" && (
            <>
              <h2 className="text-2xl font-bold mb-8 text-center ed-ink ">
                UHS Affiliated Medical Colleges (Punjab)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {uhsColleges.map((college) => (
                  <div
                    key={college}
                    className="group relative ed-surface  rounded-xl p-6 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift border border-green-200  overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl ed-tint   flex items-center justify-center ed-elevation mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg ed-ink  mb-2">
                      {college}
                    </h3>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-16 text-center">
            <div className="ed-tint   rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 ed-type">
                Start Your Career in Healthcare
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Find the right program to begin or advance your journey in the health and para-medical fields.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/academic-explorer"
                  className="ed-surface text-red-600 px-6 py-3 rounded-xl font-semibold ed-hover-surface transition-all duration-300 transform ed-lift ed-elevation"
                >
                  Back to Academic Explorer
                </Link>
                <Link
                  to="/scholarly-vault?category=Medical"
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
