import React from "react";
import { ArrowUpRight, Facebook, MessageCircle, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandMark } from "@/components/ui/brand-mark";

const footerLinks = [
  { title: "Explore Resources", href: "/explore" },
  { title: "Student Workspace", href: "/entertainment" },
  { title: "Study Planner", href: "/study-plan" },
  { title: "Roadmaps", href: "/roadmaps" },
];

const companyLinks = [
  { title: "About", href: "/about" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms of Service", href: "/terms-of-service" },
];

const socials = [
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VbAGAGWCBtx5xamqF93V",
    icon: MessageCircle,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@edvvo?feature=shared",
    icon: Youtube,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CE4C69Kpf/",
    icon: Facebook,
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="page-shell mt-24 border-t border-white/50 bg-slate-950 text-white dark:border-white/10">
      <div className="section-shell py-14">
        <div className="app-panel mesh-surface mb-8 overflow-hidden p-8 text-slate-950 dark:text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="section-kicker">Built For Students</div>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
                A cleaner study space, better focus, and faster access to the things that matter.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
                Edvvo brings notes, books, planning, and academic discovery into one polished experience
                so students spend less time hunting and more time learning.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/explore" className="app-button-primary">
                Explore resources
              </Link>
              <Link to="/entertainment" className="app-button-secondary">
                Open workspace
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <BrandMark className="text-white" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Designed to feel modern, reliable, and simple to use on both desktop and mobile for
              students across Pakistan.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <button
                    key={social.label}
                    type="button"
                    onClick={() => window.open(social.href, "_blank")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <div className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Company</h3>
            <div className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>WhatsApp updates and student announcements</p>
              <p>YouTube explainers and walkthroughs</p>
              <p>Facebook community touchpoint</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Edvvo. Designed for a sharper student experience.</p>
          <p>Responsive, accessible, and streamlined for study-first navigation.</p>
        </div>
      </div>
    </footer>
  );
};
