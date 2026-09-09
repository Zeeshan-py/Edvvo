import { BookOpen } from "lucide-react";
export const BrandMark = ({ compact = false, className = "" }: { compact?: boolean; className?: string }) => (
  <span className={`ed-brand ${className}`}>
    <span className="ed-brand-icon"><BookOpen size={23} strokeWidth={2.2} aria-hidden="true" /></span>
    {!compact && <span>edvvo<span className="ed-brand-dot">.</span></span>}
  </span>
);
