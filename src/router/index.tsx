/**
 * Application Router Configuration
 * Centralizes all route definitions for better maintainability
 * Organized by main pages: Home, Explore, Workspace, About
 */
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { RouteMetadata } from '@/seo/RouteMetadata';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { NotificationPage } from '@/pages/Home/sections/NotificationPage';

function ResearchRedirect() {
  const { id } = useParams();
  return <Navigate replace to={id ? `/solutions/${id}` : '/solutions'} />;
}

// Home page
import { LandingPage } from "@/pages/Home/LandingPage";
import { NotificationDetailPage } from "@/pages/Home/NotificationDetailPage";

// Explore pages
import { ExplorePage } from "@/pages/Explore/ExplorePage";
import { EntertainmentPage } from "@/pages/Explore/EntertainmentPage";
import { BoardPage } from "@/pages/Explore/BoardPage";
import { EntryTestPage } from "@/pages/Explore/EntryTestPage";
import ScholarlyVault from "@/pages/Explore/ScholarlyVault";
import { AcademicExplorer } from "@/pages/Explore/AcademicExplorer";
import { ResultPage } from "@/pages/Explore/ResultPage";

// Academic fields
import { IslamicStudiesPage } from "@/pages/Explore/fields/IslamicStudiesPage";
import { EngineeringAppliedSciencePage } from "@/pages/Explore/fields/EngineeringAppliedSciencePage";
import { ComputerSciencePage } from "@/pages/Explore/fields/ComputerSciencePage";
import { BusinessFinancePage } from "@/pages/Explore/fields/BusinessFinancePage";
import { NaturalBiologicalSciencesPage } from "@/pages/Explore/fields/NaturalBiologicalSciencesPage";
import { HealthParaMedicalPage } from "@/pages/Explore/fields/HealthParaMedicalPage";
import { SocialSciencesHumanitiesPage } from "@/pages/Explore/fields/SocialSciencesHumanitiesPage";
import { ArchitectureDesignPage } from "@/pages/Explore/fields/ArchitectureDesignPage";
import { LawPage } from "@/pages/Explore/fields/LawPage";
import { EducationPage } from "@/pages/Explore/fields/EducationPage";
import { AgricultureVetPage } from "@/pages/Explore/fields/AgricultureVetPage";

// Academic programs
import { EngineeringProgramsPage } from "@/pages/Explore/programs/EngineeringProgramsPage";
import { AppliedScienceProgramsPage } from "@/pages/Explore/programs/AppliedScienceProgramsPage";

// Workspace pages
import { RoadmapsPage } from "@/pages/Workspace/RoadmapsPage";
import { FocusTimerPage } from "@/pages/Workspace/FocusTimerPage";
import { SolutionsPage } from "@/pages/Workspace/SolutionsPage";
import { StudyPlanPage } from "@/pages/Workspace/StudyPlanPage";
import { SolutionDetailPage } from "@/pages/Workspace/SolutionDetailPage";

// About pages
import { AboutPage } from "@/pages/About/AboutPage";
import { ContactPage } from "@/pages/About/ContactPage";
import { PrivacyPolicyPage } from "@/pages/About/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/About/TermsOfServicePage";

/**
 * Main application router component
 * Routes organized by main pages: Home, Explore, Workspace, About
 */
export const AppRouter = () => {
  return (
    <div className="site-shell"><RouteMetadata /><Routes>
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
    </Routes></div>
  );
};
