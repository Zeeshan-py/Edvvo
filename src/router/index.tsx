/**
 * Application Router Configuration
 * Centralizes all route definitions for better maintainability
 * Organized by main pages: Home, Explore, Workspace, About
 */
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { RouteMetadata } from '@/seo/RouteMetadata';
import { PrivacyConsent } from '@/components/studio/PrivacyConsent';
import { NotFoundPage } from "@/pages/NotFoundPage";
const NotificationPage = lazy(() => import("@/pages/Home/sections/NotificationPage").then(module => ({ default: module.NotificationPage })));

function ResearchRedirect() {
  const { id } = useParams();
  return <Navigate replace to={id ? `/solutions/${id}` : '/solutions'} />;
}

// Home page
import { LandingPage } from "@/pages/Home/LandingPage";
const NotificationDetailPage = lazy(() => import("@/pages/Home/NotificationDetailPage").then(module => ({ default: module.NotificationDetailPage })));

// Explore pages
const ExplorePage = lazy(() => import("@/pages/Explore/ExplorePage").then(module => ({ default: module.ExplorePage })));
const EntertainmentPage = lazy(() => import("@/pages/Explore/EntertainmentPage").then(module => ({ default: module.EntertainmentPage })));
const BoardPage = lazy(() => import("@/pages/Explore/BoardPage").then(module => ({ default: module.BoardPage })));
const EntryTestPage = lazy(() => import("@/pages/Explore/EntryTestPage").then(module => ({ default: module.EntryTestPage })));
const ScholarlyVault = lazy(() => import("@/pages/Explore/ScholarlyVault"));
const AcademicExplorer = lazy(() => import("@/pages/Explore/AcademicExplorer").then(module => ({ default: module.AcademicExplorer })));
const ResultPage = lazy(() => import("@/pages/Explore/ResultPage").then(module => ({ default: module.ResultPage })));

// Academic fields
const IslamicStudiesPage = lazy(() => import("@/pages/Explore/fields/IslamicStudiesPage").then(module => ({ default: module.IslamicStudiesPage })));
const EngineeringAppliedSciencePage = lazy(() => import("@/pages/Explore/fields/EngineeringAppliedSciencePage").then(module => ({ default: module.EngineeringAppliedSciencePage })));
const ComputerSciencePage = lazy(() => import("@/pages/Explore/fields/ComputerSciencePage").then(module => ({ default: module.ComputerSciencePage })));
const BusinessFinancePage = lazy(() => import("@/pages/Explore/fields/BusinessFinancePage").then(module => ({ default: module.BusinessFinancePage })));
const NaturalBiologicalSciencesPage = lazy(() => import("@/pages/Explore/fields/NaturalBiologicalSciencesPage").then(module => ({ default: module.NaturalBiologicalSciencesPage })));
const HealthParaMedicalPage = lazy(() => import("@/pages/Explore/fields/HealthParaMedicalPage").then(module => ({ default: module.HealthParaMedicalPage })));
const SocialSciencesHumanitiesPage = lazy(() => import("@/pages/Explore/fields/SocialSciencesHumanitiesPage").then(module => ({ default: module.SocialSciencesHumanitiesPage })));
const ArchitectureDesignPage = lazy(() => import("@/pages/Explore/fields/ArchitectureDesignPage").then(module => ({ default: module.ArchitectureDesignPage })));
const LawPage = lazy(() => import("@/pages/Explore/fields/LawPage").then(module => ({ default: module.LawPage })));
const EducationPage = lazy(() => import("@/pages/Explore/fields/EducationPage").then(module => ({ default: module.EducationPage })));
const AgricultureVetPage = lazy(() => import("@/pages/Explore/fields/AgricultureVetPage").then(module => ({ default: module.AgricultureVetPage })));

// Academic programs
const EngineeringProgramsPage = lazy(() => import("@/pages/Explore/programs/EngineeringProgramsPage").then(module => ({ default: module.EngineeringProgramsPage })));
const AppliedScienceProgramsPage = lazy(() => import("@/pages/Explore/programs/AppliedScienceProgramsPage").then(module => ({ default: module.AppliedScienceProgramsPage })));

// Workspace pages
const RoadmapsPage = lazy(() => import("@/pages/Workspace/RoadmapsPage").then(module => ({ default: module.RoadmapsPage })));
const FocusTimerPage = lazy(() => import("@/pages/Workspace/FocusTimerPage").then(module => ({ default: module.FocusTimerPage })));
const SolutionsPage = lazy(() => import("@/pages/Workspace/SolutionsPage").then(module => ({ default: module.SolutionsPage })));
const StudyPlanPage = lazy(() => import("@/pages/Workspace/StudyPlanPage").then(module => ({ default: module.StudyPlanPage })));
const SolutionDetailPage = lazy(() => import("@/pages/Workspace/SolutionDetailPage").then(module => ({ default: module.SolutionDetailPage })));

// About pages
const AboutPage = lazy(() => import("@/pages/About/AboutPage").then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import("@/pages/About/ContactPage").then(module => ({ default: module.ContactPage })));
const PrivacyPolicyPage = lazy(() => import("@/pages/About/PrivacyPolicyPage").then(module => ({ default: module.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import("@/pages/About/TermsOfServicePage").then(module => ({ default: module.TermsOfServicePage })));

/**
 * Main application router component
 * Routes organized by main pages: Home, Explore, Workspace, About
 */
export const AppRouter = () => {
  return (
    <div className="site-shell"><RouteMetadata /><Suspense fallback={<main className="ed-container" style={{ minHeight: "70vh", paddingTop: 80 }} aria-busy="true"><p role="status">Loading your learning space...</p></main>}><Routes>
      {/* Home Page */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/notifications/:id" element={<NotificationDetailPage />} />
      <Route path="/notifications" element={<NotificationPage />} />
      <Route path="/board/scholarly-vault" element={<Navigate replace to="/scholarly-vault" />} />

      {/* Explore Pages */}
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/entertainment" element={<EntertainmentPage />} />
      <Route path="/board/:boardId" element={<BoardPage />} />
      <Route path="/entry-test" element={<EntryTestPage />} />
      <Route path="/scholarly-vault" element={<ScholarlyVault />} />
      <Route path="/academic-explorer" element={<AcademicExplorer />} />
      <Route path="/result" element={<ResultPage />} />

      {/* Academic Disciplines */}
      <Route path="/islamic-studies" element={<IslamicStudiesPage />} />
      <Route path="/engineering-applied-science" element={<EngineeringAppliedSciencePage />} />
      <Route path="/engineering-programs" element={<EngineeringProgramsPage />} />
      <Route path="/applied-science-programs" element={<AppliedScienceProgramsPage />} />
      <Route path="/computer-science" element={<ComputerSciencePage />} />
      <Route path="/business-finance" element={<BusinessFinancePage />} />
      <Route path="/natural-biological-sciences" element={<NaturalBiologicalSciencesPage />} />
      <Route path="/health-paramedical" element={<HealthParaMedicalPage />} />
      <Route path="/social-sciences-humanities" element={<SocialSciencesHumanitiesPage />} />
      <Route path="/architecture-design" element={<ArchitectureDesignPage />} />
      <Route path="/law" element={<LawPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/agriculture-vet" element={<AgricultureVetPage />} />

      {/* Workspace Pages */}
      <Route path="/roadmaps" element={<RoadmapsPage />} />
      <Route path="/roadmaps/:slug" element={<RoadmapsPage />} />
      <Route path="/focus-timer" element={<FocusTimerPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/solutions/:id" element={<SolutionDetailPage />} />
      <Route path="/research-papers" element={<ResearchRedirect />} />
      <Route path="/research-papers/:id" element={<ResearchRedirect />} />
      <Route path="/study-plan" element={<StudyPlanPage />} />

      {/* About Pages */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes></Suspense><PrivacyConsent /></div>
  );
};
