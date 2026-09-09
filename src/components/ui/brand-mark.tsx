import React from "react";
import { cn } from "@/utils/cn";

interface BrandMarkProps {
  compact?: boolean;
  className?: string;
}

export const BrandMark = ({ compact = false, className }: BrandMarkProps): JSX.Element => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex h-11 w-11 items-center justify-center rounded-[22px] border border-white/40 bg-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.28)]">
        <div className="absolute inset-[2px] rounded-[20px] bg-[linear-gradient(135deg,#67e8f9_0%,#2563eb_45%,#7c3aed_100%)] opacity-95" />
        <div className="absolute inset-[6px] rounded-[16px] bg-[radial-gradient(circle_at_top,#0f172a_0%,#111827_55%,#020617_100%)]" />
        <svg
          viewBox="0 0 32 32"
          className="relative z-10 h-6 w-6 text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 10.5C8.5 9.95 8.95 9.5 9.5 9.5H15.25V21.5H9.5C8.95 21.5 8.5 21.05 8.5 20.5V10.5Z"
            fill="currentColor"
            opacity="0.92"
          />
          <path
            d="M16.75 9.5H22.5C23.05 9.5 23.5 9.95 23.5 10.5V20.5C23.5 21.05 23.05 21.5 22.5 21.5H16.75V9.5Z"
            fill="currentColor"
            opacity="0.82"
          />
          <path d="M10 7.4L16 4.8L22 7.4L16 10L10 7.4Z" fill="#A5F3FC" />
          <path
            d="M11.2 9.45V11C11.2 12.05 13.35 13 16 13C18.65 13 20.8 12.05 20.8 11V9.45"
            stroke="#CFFAFE"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <circle cx="24.1" cy="8.6" r="1.1" fill="#67E8F9" />
          <circle cx="7.9" cy="17.8" r="0.9" fill="#C4B5FD" />
          <circle cx="24.6" cy="20.9" r="0.9" fill="#F9A8D4" />
        </svg>
      </div>

      {!compact && (
        <div className="leading-none">
          <div className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">
            Edvvo
          </div>
          <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Student OS
          </div>
        </div>
      )}
    </div>
  );
};
