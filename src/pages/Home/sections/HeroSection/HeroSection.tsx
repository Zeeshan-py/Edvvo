import React, { useState } from "react";
import { Bell, ChevronRight, Menu, Sparkles, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BrandMark } from "@/components/ui/brand-mark";
import { cn } from "@/utils/cn";
import { notificationsData, markAllNotificationsAsRead } from "../../../../utils/notificationsData";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Workspace", href: "/entertainment" },
  { label: "About", href: "/about" },
];

export const HeroSection = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);

  const unreadCount = notifications.filter((notification) => !notification.read).length;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const openNotifications = () => {
    markAllNotificationsAsRead();
    setNotifications([...notificationsData]);
    setShowNotifications(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/72">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link to="/" className="shrink-0">
              <BrandMark />
            </Link>

            <nav className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-2 py-2 shadow-[0_12px_24px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-slate-900/60 md:flex">
              {navItems.map((item) => {
                const active = location.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition",
                      active
                        ? "bg-slate-950 text-white shadow-[0_10px_20px_rgba(15,23,42,0.18)] dark:bg-white dark:text-slate-950"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/explore"
              className="hidden items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800 transition hover:border-sky-300 hover:bg-sky-100 lg:inline-flex dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200 dark:hover:bg-sky-400/15"
            >
              <Sparkles className="h-4 w-4" />
              Quick Access
            </Link>

            <button
              onClick={openNotifications}
              className="relative rounded-full border border-slate-200/80 bg-white/70 p-2.5 text-slate-600 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-white"
              aria-label="Open notifications"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>

            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="rounded-full border border-slate-200/80 bg-white/70 p-2.5 text-slate-700 transition hover:text-slate-950 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 md:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 z-40 border-b border-white/60 bg-white/92 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/94 md:hidden">
          <div className="section-shell py-4">
            <div className="app-panel space-y-2 p-3">
              {navItems.map((item) => {
                const active = location.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition",
                      active
                        ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10",
                    )}
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {showNotifications && (
        <div className="fixed inset-0 z-[70] bg-slate-950/55 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-full max-w-xl border-l border-white/10 bg-white/92 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur-2xl dark:bg-slate-950/94">
            <div className="flex items-center justify-between rounded-[28px] border border-slate-200/80 bg-white/80 px-5 py-4 dark:border-white/10 dark:bg-slate-900/75">
              <div>
                <div className="section-kicker">Updates</div>
                <h2 className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-white">
                  Notifications
                </h2>
              </div>
              <button
                onClick={() => setShowNotifications(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-500 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
                aria-label="Close notifications"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex h-[calc(100%-104px)] flex-col gap-3 overflow-y-auto pr-1">
              {notifications.map((notification) => (
                <button
                  key={notification.id}
                  onClick={() => {
                    setShowNotifications(false);
                    navigate(notification.path || `/notifications/${notification.id}`);
                  }}
                  className="app-card-3d text-left"
                >
                  <div className="flex items-start gap-4 p-5">
                    <div
                      className={cn(
                        "mt-1 h-3 w-3 rounded-full",
                        notification.read ? "bg-slate-300 dark:bg-slate-600" : "bg-emerald-400",
                      )}
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-slate-950 dark:text-white">{notification.title}</p>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                            {notification.message}
                          </p>
                        </div>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:bg-white/10 dark:text-slate-300">
                          {notification.category}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {notification.detail}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        <span>{notification.time}</span>
                        <span>{notification.actionText || "Open"}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
