import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Bell, Clock, Tag, ExternalLink, Star } from 'lucide-react';
import { getNotificationById, markNotificationAsRead } from '../../utils/notificationsData';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';

export const NotificationDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const notification = getNotificationById(Number(id));

  // Mark notification as read when viewed
  React.useEffect(() => {
    if (notification && !notification.read) {
      markNotificationAsRead(notification.id);
    }
  }, [notification]);

  if (!notification) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
        <HeroSection />
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center">
            <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Notification Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The notification you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/notifications"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Notifications
            </Link>
          </div>
        </main>
        <FooterSection />
      </div>
    );
  }

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
      <HeroSection />
      
      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
          </div>

          {/* Notification Detail Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Bell className="w-8 h-8" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-1">
                      {notification.title}
                    </h1>
                    <p className="text-blue-100 text-lg">
                      {notification.message}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(notification.category)}`}>
                    {notification.category.toUpperCase()}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(notification.priority)}`}>
                    {notification.priority.toUpperCase()} PRIORITY
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{notification.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="text-sm">ID: {notification.id}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Detailed Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                  Detailed Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {notification.detail}
                </p>
              </div>

              {/* Advantage Section */}
              {notification.advantage && (
                <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-green-600 dark:text-green-400" />
                    Key Benefits
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {notification.advantage}
                  </p>
                </div>
              )}

              {/* External Link */}
              {notification.imageUrl && (
                <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    External Resource
                  </h3>
                  <a 
                    href={notification.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline break-all"
                  >
                    {notification.imageUrl}
                  </a>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {notification.path && (
                  <Link
                    to={notification.path}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    {notification.actionText || 'Take Action'}
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
                <Link
                  to="/notifications"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold text-lg transition-all duration-200"
                >
                  All Notifications
                  <Bell className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};
