import { Link } from "react-router-dom";
import { Bell, ArrowLeft, Clock, Tag } from "lucide-react";
import { notificationsData } from "../../../utils/notificationsData";
import { HeroSection } from "./HeroSection";
import { FooterSection } from "./FooterSection";

export const NotificationPage = (): JSX.Element => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'feature': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'update': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'announcement': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      case 'system': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
      <HeroSection />
      
      <main className="flex-1 px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl">
              <Bell className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-2">
                Notifications
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Stay updated with the latest news and features
              </p>
            </div>
          </div>

          {/* Notifications Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notificationsData.length === 0 ? (
              <div className="col-span-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-12 text-center border border-gray-200 dark:border-gray-700">
                <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No notifications yet
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Check back later for updates and announcements.
                </p>
              </div>
            ) : (
              notificationsData.map((notification) => (
                <Link
                  key={notification.id}
                  to={`/notifications/${notification.id}`}
                  className="group block"
                >
                  <div className={`p-6 rounded-2xl shadow-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                    notification.read 
                      ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 opacity-80' 
                      : 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700'
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`block w-4 h-4 rounded-full ${
                          notification.read 
                            ? 'bg-gray-300 dark:bg-gray-600' 
                            : 'bg-red-500 animate-pulse'
                        }`}></span>
                        <span className="text-sm font-medium">
                          {getPriorityIcon(notification.priority)}
                        </span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(notification.category)}`}>
                        {notification.category.toUpperCase()}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {notification.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                      {notification.detail}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{notification.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Tag className="w-4 h-4" />
                        <span>#{notification.id}</span>
                      </div>
                    </div>

                    {/* Read More Indicator */}
                    <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      Click to read more →
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}; 
