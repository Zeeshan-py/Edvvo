import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, GraduationCap, Award, Star, Clock,
  ChevronRight, BookOpen, Users
} from "lucide-react";
import { HeroSection } from "../../Home/sections/HeroSection";
import { FooterSection } from "../../Home/sections/FooterSection";

const engineeringFields = [
  { id: "civil", name: "Civil Engineering" },
  { id: "mechanical", name: "Mechanical Engineering" },
  { id: "electrical", name: "Electrical Engineering" },
  { id: "computer", name: "Computer Engineering" },
  { id: "chemical", name: "Chemical Engineering" },
  { id: "software", name: "Software Engineering" },
  { id: "mechatronics", name: "Mechatronics Engineering" },
  { id: "industrial", name: "Industrial Engineering" },
  { id: "petroleum", name: "Petroleum Engineering" },
  { id: "environmental", name: "Environmental Engineering" },
  { id: "metallurgical", name: "Metallurgical Engineering" },
  { id: "biomedical", name: "Biomedical Engineering" },
  { id: "telecom", name: "Telecommunication Engineering" },
  { id: "aerospace", name: "Aerospace Engineering" },
  { id: "agricultural", name: "Agricultural Engineering" },
  { id: "mining", name: "Mining Engineering" },
  { id: "textile", name: "Textile Engineering" },
  { id: "architecture", name: "Architecture" }
];

const civilPublicUniversities = [
  { name: "University of Engineering and Technology (UET), Lahore", link: "https://uet.edu.pk/" },
  { name: "NED University of Engineering and Technology, Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "National University of Sciences and Technology (NUST), Islamabad", link: "https://nust.edu.pk/" },
  { name: "Mehran University of Engineering and Technology, Jamshoro", link: "https://www.muet.edu.pk/" },
  { name: "Bahauddin Zakariya University (BZU), Multan", link: "https://www.bzu.edu.pk/" },
  { name: "University of Wah", link: "https://uow.edu.pk/" },
  { name: "NUST (SCEE, Islamabad)", link: "https://scee.nust.edu.pk/" },
  { name: "University of Gujrat", link: "https://uog.edu.pk/" },
  { name: "University of Sargodha", link: "https://uos.edu.pk/" }
];
const civilPrivateUniversities = [
  { name: "COMSATS University Islamabad", link: "https://www.comsats.edu.pk/" },
  { name: "National University of Computer and Emerging Sciences (FAST-NUCES)", link: "https://www.nu.edu.pk/" },
  { name: "Sir Syed University of Engineering and Technology, Karachi", link: "https://www.ssuet.edu.pk/" },
  { name: "CECOS University, Peshawar", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah International University, Islamabad", link: "https://www.riphah.edu.pk/" },
  { name: "Superior University, Lahore", link: "https://www.superior.edu.pk/" }
];

// Update all university arrays to use { name, link } objects
const placeholderPublic = [
  { name: "Public University 1", link: "#" },
  { name: "Public University 2", link: "#" },
  { name: "Public University 3", link: "#" }
];
const placeholderPrivate = [
  { name: "Private University 1", link: "#" },
  { name: "Private University 2", link: "#" },
  { name: "Private University 3", link: "#" }
];

const mechanicalPublic = [
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "GIKI", link: "https://www.giki.edu.pk/" },
  { name: "Mehran UET", link: "https://www.muet.edu.pk/" },
  { name: "BZU Multan", link: "https://www.bzu.edu.pk/" },
  { name: "PIEAS", link: "https://www.pieas.edu.pk/" },
  { name: "UET Mardan", link: "https://www.uetmardan.edu.pk/" }
];
const mechanicalPrivate = [
  { name: "COMSATS", link: "https://www.comsats.edu.pk/" },
  { name: "FAST-NUCES", link: "https://www.nu.edu.pk/" },
  { name: "Sir Syed University", link: "https://www.ssuet.edu.pk/" },
  { name: "CECOS", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" },
  { name: "Superior", link: "https://www.superior.edu.pk/" }
];
const electricalPublic = [
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "GIKI", link: "https://www.giki.edu.pk/" },
  { name: "PIEAS", link: "https://www.pieas.edu.pk/" },
  { name: "Mehran UET", link: "https://www.muet.edu.pk/" },
  { name: "BZU Multan", link: "https://www.bzu.edu.pk/" },
  { name: "University of Gujrat", link: "https://uog.edu.pk/" }
];
const electricalPrivate = [
  { name: "COMSATS", link: "https://www.comsats.edu.pk/" },
  { name: "FAST-NUCES", link: "https://www.nu.edu.pk/" },
  { name: "Sir Syed University", link: "https://www.ssuet.edu.pk/" },
  { name: "CECOS", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" },
  { name: "Superior", link: "https://www.superior.edu.pk/" }
];
const computerPublic = [
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "GIKI", link: "https://www.giki.edu.pk/" },
  { name: "PIEAS", link: "https://www.pieas.edu.pk/" },
  { name: "Mehran UET", link: "https://www.muet.edu.pk/" },
  { name: "BZU Multan", link: "https://www.bzu.edu.pk/" }
];
const computerPrivate = [
  { name: "COMSATS", link: "https://www.comsats.edu.pk/" },
  { name: "FAST-NUCES", link: "https://www.nu.edu.pk/" },
  { name: "Sir Syed University", link: "https://www.ssuet.edu.pk/" },
  { name: "CECOS", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" },
  { name: "Superior", link: "https://www.superior.edu.pk/" }
];
const chemicalPublic = [
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "Mehran UET", link: "https://www.muet.edu.pk/" },
  { name: "BZU Multan", link: "https://www.bzu.edu.pk/" },
  { name: "Punjab University", link: "https://www.pu.edu.pk/" }
];
const chemicalPrivate = [
  { name: "COMSATS", link: "https://www.comsats.edu.pk/" },
  { name: "Dawood University", link: "https://www.dawood.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" },
  { name: "Superior", link: "https://www.superior.edu.pk/" }
];
const softwarePublic = [
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "Mehran UET", link: "https://www.muet.edu.pk/" },
  { name: "BZU Multan", link: "https://www.bzu.edu.pk/" },
  { name: "Punjab University", link: "https://www.pu.edu.pk/" }
];
const softwarePrivate = [
  { name: "COMSATS", link: "https://www.comsats.edu.pk/" },
  { name: "FAST-NUCES", link: "https://www.nu.edu.pk/" },
  { name: "Sir Syed University", link: "https://www.ssuet.edu.pk/" },
  { name: "CECOS", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" },
  { name: "Superior", link: "https://www.superior.edu.pk/" }
];
const mechatronicsPublic = [
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "GIKI", link: "https://www.giki.edu.pk/" },
  { name: "PIEAS", link: "https://www.pieas.edu.pk/" }
];
const mechatronicsPrivate = [
  { name: "CECOS", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" },
  { name: "Superior", link: "https://www.superior.edu.pk/" }
];
const industrialPublic = [
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "GIKI", link: "https://www.giki.edu.pk/" },
  { name: "PIEAS", link: "https://www.pieas.edu.pk/" }
];
const industrialPrivate = [
  { name: "CECOS", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" },
  { name: "Superior", link: "https://www.superior.edu.pk/" }
];
const petroleumPublic = [
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "Mehran UET", link: "https://www.muet.edu.pk/" }
];
const petroleumPrivate = [
  { name: "CECOS", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" }
];
const environmentalPublic = [
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "Mehran UET", link: "https://www.muet.edu.pk/" }
];
const environmentalPrivate = [
  { name: "CECOS", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" }
];
const metallurgicalPublic = [
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "Punjab University", link: "https://www.pu.edu.pk/" }
];
const metallurgicalPrivate = [
  { name: "CECOS", link: "https://www.cecos.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" }
];
const biomedicalPublic = [
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "UET Lahore", link: "https://uet.edu.pk/" }
];
const biomedicalPrivate = [
  { name: "Sir Syed University", link: "https://www.ssuet.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" }
];
const telecomPublic = [
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "UET Taxila", link: "https://www.uettaxila.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "Mehran UET", link: "https://www.muet.edu.pk/" }
];
const telecomPrivate = [
  { name: "Sir Syed University", link: "https://www.ssuet.edu.pk/" },
  { name: "Riphah", link: "https://www.riphah.edu.pk/" }
];
const aerospacePublic = [
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "PIEAS", link: "https://www.pieas.edu.pk/" }
];
const aerospacePrivate: { name: string; link: string }[] = [];
const agriculturalPublic = [
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "University of Agriculture Faisalabad", link: "https://www.uaf.edu.pk/" },
  { name: "Sindh Agriculture University", link: "https://www.sau.edu.pk/" }
];
const agriculturalPrivate: { name: string; link: string }[] = [];
const miningPublic = [
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "Mehran UET", link: "https://www.muet.edu.pk/" }
];
const miningPrivate: { name: string; link: string }[] = [];
const textilePublic = [
  { name: "National Textile University, Faisalabad", link: "https://www.ntu.edu.pk/" },
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" }
];
const textilePrivate = [
  { name: "Riphah", link: "https://www.riphah.edu.pk/" },
  { name: "Superior", link: "https://www.superior.edu.pk/" }
];
const architecturePublic = [
  { name: "NED Karachi", link: "https://www.neduet.edu.pk/" },
  { name: "UET Lahore", link: "https://uet.edu.pk/" },
  { name: "UET Peshawar", link: "https://www.uetpeshawar.edu.pk/" },
  { name: "NUST", link: "https://nust.edu.pk/" },
  { name: "Punjab University", link: "https://www.pu.edu.pk/" }
];
const architecturePrivate = [
  { name: "Indus Valley School of Art and Architecture", link: "https://www.indusvalley.edu.pk/" },
  { name: "COMSATS", link: "https://www.comsats.edu.pk/" },
  { name: "Superior", link: "https://www.superior.edu.pk/" }
];

export const EngineeringProgramsPage = (): JSX.Element => {
  const [step, setStep] = useState<
    "fields"|"field-type"|"field-public"|"field-private"
  >("fields");
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
  const navigate = useNavigate();
  const handleBack = () => {
    if (step === "fields") { navigate("/academic-explorer"); return; }
    if (step === "field-type") setStep("fields");
    else if (step === "field-public" || step === "field-private") setStep("field-type");
  };

  // Update getUniversities to always return an array of objects
  const getUniversities = (field: string, type: "public"|"private") => {
    switch (field) {
      case "civil": return type === "public" ? civilPublicUniversities : civilPrivateUniversities;
      case "mechanical": return type === "public" ? mechanicalPublic : mechanicalPrivate;
      case "electrical": return type === "public" ? electricalPublic : electricalPrivate;
      case "computer": return type === "public" ? computerPublic : computerPrivate;
      case "chemical": return type === "public" ? chemicalPublic : chemicalPrivate;
      case "software": return type === "public" ? softwarePublic : softwarePrivate;
      case "mechatronics": return type === "public" ? mechatronicsPublic : mechatronicsPrivate;
      case "industrial": return type === "public" ? industrialPublic : industrialPrivate;
      case "petroleum": return type === "public" ? petroleumPublic : petroleumPrivate;
      case "environmental": return type === "public" ? environmentalPublic : environmentalPrivate;
      case "metallurgical": return type === "public" ? metallurgicalPublic : metallurgicalPrivate;
      case "biomedical": return type === "public" ? biomedicalPublic : biomedicalPrivate;
      case "telecom": return type === "public" ? telecomPublic : telecomPrivate;
      case "aerospace": return type === "public" ? aerospacePublic : aerospacePrivate;
      case "agricultural": return type === "public" ? agriculturalPublic : agriculturalPrivate;
      case "mining": return type === "public" ? miningPublic : miningPrivate;
      case "textile": return type === "public" ? textilePublic : textilePrivate;
      case "architecture": return type === "public" ? architecturePublic : architecturePrivate;
      default: return type === "public" ? placeholderPublic : placeholderPrivate;
    }
  };

  // Get field name
  const getFieldName = (fieldId: string | null) => {
    const field = engineeringFields.find(f => f.id === fieldId);
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
              <span className="font-medium">{step === "fields" ? "Back to Engineering & Applied Science" : "Back"}</span>
            </button>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint   ed-elevation mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
              Engineering Fields
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed">
              Explore all major engineering fields. Click a field to see universities that offer it.
            </p>
          </div>

          {/* Step-based Content */}
          {step === "fields" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {engineeringFields.map((field) => (
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
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-2xl mb-2">Public University</h3>
                  <p className="text-lg opacity-80">See all public sector universities offering {getFieldName(selectedField)}.</p>
                </div>
                <div
                  className="group relative ed-tint   rounded-xl p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-green-200  overflow-hidden text-white flex flex-col items-center gap-6 text-center"
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

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="ed-tint   rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 ed-type">
                Ready to Start Your Engineering Journey?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Choose your preferred engineering field and access comprehensive resources, books, and materials.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/engineering-applied-science"
                  className="ed-surface ed-link px-6 py-3 rounded-xl font-semibold ed-hover-surface transition-all duration-300 transform ed-lift ed-elevation"
                >
                  Back to Engineering & Applied Science
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
      return "ed-tint ed-link  ";
    case "Graduate":
      return "ed-tint text-green-800  ";
    case "Research":
      return "ed-tint ed-link  ";
    case "Technical":
      return "ed-tint text-orange-800  ";
    default:
      return "ed-canvas ed-ink  ";
  }
};
