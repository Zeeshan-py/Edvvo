import { SearchIcon, Menu, X, Bell, ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import globalResources from "@/utils/globalResources";
import { notificationsData, markAllNotificationsAsRead } from "../../../../utils/notificationsData";

export const HeroSection = (): JSX.Element => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Notification state using centralized data
  const [notifications, setNotifications] = useState(notificationsData);
  const hasUnread = notifications.some(n => !n.read);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    setShowNotificationModal(true);
    // Mark all notifications as read when opening the modal
    markAllNotificationsAsRead();
    setNotifications([...notificationsData]); // Update local state
  };
  const handleCloseNotificationModal = () => {
    setShowNotificationModal(false);
  };
  
  // Navigation menu items with routing
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Explore", href: "/explore" },
    { label: "Workspace", href: "/entertainment" },
    { label: "About Us", href: "/about" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-10 py-4 border-b border-gray-200 dark:border-gray-700 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg 
                viewBox="0 0 32 32" 
                className="w-6 h-6 text-white"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer shield/protection ring */}
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                
                {/* Main shield background */}
                <path 
                  d="M16 3L6 8V14C6 22 10 29 16 30C22 29 26 22 26 14V8L16 3Z" 
                  fill="currentColor" 
                  opacity="0.8"
                />
                
                {/* Open book at the center */}
                <path 
                  d="M10 12C10 11.5 10.5 11 11 11H15V19H11C10.5 19 10 18.5 10 18V12Z" 
                  fill="rgba(255,255,255,0.9)"
                />
                <path 
                  d="M17 11H21C21.5 11 22 11.5 22 12V18C22 18.5 21.5 19 21 19H17V11Z" 
                  fill="rgba(255,255,255,0.9)"
                />
                <line x1="16" y1="11" x2="16" y2="19" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5"/>
                
                {/* Graduation cap on top */}
                <path 
                  d="M16 7L12 9L16 11L20 9L16 7Z" 
                  fill="rgba(255,255,255,1)"
                />
                <path 
                  d="M19.5 9.5V12C19.5 12.5 18 13.5 16 13.5C14 13.5 12.5 12.5 12.5 12V9.5" 
                  stroke="rgba(255,255,255,0.8)" 
                  strokeWidth="0.8" 
                  fill="none"
                />
                
                {/* Knowledge dots/stars around */}
                <circle cx="8" cy="14" r="1" fill="rgba(255,255,255,0.6)"/>
                <circle cx="24" cy="14" r="1" fill="rgba(255,255,255,0.6)"/>
                <circle cx="16" cy="23" r="1" fill="rgba(255,255,255,0.6)"/>
                
                {/* Inner glow effect */}
                <circle cx="16" cy="16" r="11" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none"/>
              </svg>
            </div>
            <h1 className="font-bold text-xl text-gray-900 dark:text-white font-['Newsreader',Helvetica] leading-6">
              Edvvo
            </h1>
          </Link>

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-3 lg:gap-5">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium font-['Newsreader',Helvetica] transition-all duration-200 rounded-lg hover:scale-[1.02] ${
                        location.pathname === item.href
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side - Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-3 md:gap-6 relative">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Notification Icon */}
          <button
            className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Notifications"
            onClick={handleNotificationClick}
          >
            <Bell className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            {hasUnread && (
              <span className="absolute top-1 right-1 block w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-900 animate-pulse" />
            )}
          </button>

          {/* Notification Modal Popup */}
          {showNotificationModal && (
            <div className="fixed inset-0 z-[9999] flex flex-col bg-white dark:bg-gray-900 transition-all duration-300 w-screen h-screen min-h-0 min-w-0">
              {/* Full-screen Back to Home Button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 w-full">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow"
                  onClick={() => {
                    setShowNotificationModal(false);
                    navigate("/");
                  }}
                  aria-label="Back to Home"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Home
                </button>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                    <Bell className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica]">Notifications</h2>
                </div>
                <button
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  onClick={handleCloseNotificationModal}
                  aria-label="Close notifications"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {/* Notification List or Detail */}
              <div className="flex-1 flex flex-col overflow-y-auto px-0 py-0 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-8 w-full">
                  {notifications.length === 0 ? (
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 text-center text-gray-500 dark:text-gray-400 col-span-full">
                      No notifications yet.
                    </div>
                  ) : (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`flex flex-col sm:flex-row items-start gap-2 sm:gap-4 p-4 sm:p-5 rounded-xl shadow-xl border-2 transition-all duration-200 cursor-pointer w-full 
                          ${n.read 
                            ? 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 border-gray-200 dark:border-gray-800' 
                            : 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 border-blue-200 dark:border-blue-800'} 
                          hover:scale-[1.03] hover:shadow-2xl`}
                        onClick={() => { setShowNotificationModal(false); navigate(`/notifications/${n.id}`); }}
                      >
                        <div className="pt-1">
                          <span className={`block w-3 h-3 rounded-full ${n.read ? 'bg-gray-300 dark:bg-gray-700' : 'bg-red-500 animate-pulse'}`}></span>
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 dark:text-white font-medium mb-1 text-base sm:text-lg">{n.message}</div>
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">{n.time}</div>
                          <div className="hidden sm:block text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 line-clamp-2">{n.detail}</div>
                          <div className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium">Click to view details →</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <div className="flex items-center space-x-1">
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300 animate-bounce" />
                <span className="text-gray-700 dark:text-gray-300">Menu</span>
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={closeMobileMenu}
                className={`block py-3 px-5 rounded-lg font-medium text-lg font-['Newsreader',Helvetica] transition-all duration-200 hover:scale-[1.01] ${
                  location.pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-sm"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
