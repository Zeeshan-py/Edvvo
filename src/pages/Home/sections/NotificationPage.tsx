import { Link } from "react-router-dom";
import { Bell, ArrowLeft, Clock, Tag } from "lucide-react";
import { notificationsData } from "../../../utils/notificationsData";
import { HeroSection } from "./HeroSection";
import { FooterSection } from "./FooterSection";

export const NotificationPage = (): JSX.Element => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'ed-tint text-green-800  ';
      case 'feature': return 'ed-tint ed-link  ';
      case 'update': return 'ed-tint ed-link  ';
      case 'announcement': return 'ed-tint text-orange-800  ';
      case 'system': return 'ed-canvas ed-ink  ';
      default: return 'ed-canvas ed-ink  ';
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
    <div className="min-h-screen flex flex-col ed-tint      ">
      <HeroSection />

      <main className="flex-1 px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 rounded-2xl ed-tint   ed-elevation">
              <Bell className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-2">
                Notifications
              </h1>
              <p className="text-xl ed-muted ">
                Stay updated with the latest news and features
              </p>
            </div>
          </div>

          {/* Notifications Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notificationsData.length === 0 ? (
              <div className="col-span-full ed-surface  rounded-2xl ed-elevation p-12 text-center border ed-border ">
                <Bell className="w-16 h-16 ed-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold ed-ink  mb-2">
                  No notifications yet
                </h3>
                <p className="ed-muted ">
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
                  <div className={`p-6 rounded-2xl ed-elevation border-2 transition-all duration-300 hover:scale-[1.02] ed-hover-shadow ${
                    notification.read
                      ? 'ed-surface  ed-border  opacity-80'
                      : 'ed-tint     ed-border '
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`block w-4 h-4 rounded-full ${
                          notification.read
                            ? 'bg-gray-300 '
                            : 'bg-red-500 '
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
                    <h3 className="text-lg font-bold ed-ink  mb-2 ed-group-ink  transition-colors">
                      {notification.title}
                    </h3>
                    <p className="ed-ink  mb-3 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-sm ed-muted  line-clamp-3 mb-4">
                      {notification.detail}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-sm ed-muted ">
                        <Clock className="w-4 h-4" />
                        <span>{notification.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm ed-muted ">
                        <Tag className="w-4 h-4" />
                        <span>#{notification.id}</span>
                      </div>
                    </div>

                    {/* Read More Indicator */}
                    <div className="mt-4 text-sm font-medium ed-link  ed-group-ink  transition-colors">
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
