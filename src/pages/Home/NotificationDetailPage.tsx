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
      <div className="min-h-screen flex flex-col ed-tint      ">
        <HeroSection />
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center">
            <Bell className="w-16 h-16 ed-muted mx-auto mb-4" />
            <h1 className="text-2xl font-bold ed-ink  mb-2">
              Notification Not Found
            </h1>
            <p className="ed-muted  mb-6">
              The notification you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/notifications"
              className="inline-flex items-center gap-2 px-6 py-3 ed-accent text-white rounded-xl font-semibold ed-hover-surface transition-colors duration-200"
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
      case 'academic': return 'ed-tint text-green-800  ';
      case 'feature': return 'ed-tint ed-link  ';
      case 'update': return 'ed-tint ed-link  ';
      case 'announcement': return 'ed-tint text-orange-800  ';
      case 'system': return 'ed-canvas ed-ink  ';
      default: return 'ed-canvas ed-ink  ';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800  ';
      case 'medium': return 'ed-tint text-yellow-800  ';
      case 'low': return 'ed-canvas ed-ink  ';
      default: return 'ed-canvas ed-ink  ';
    }
  };

  return (
    <div className="min-h-screen flex flex-col ed-tint      ">
      <HeroSection />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
          </div>

          {/* Notification Detail Card */}
          <div className="ed-surface  rounded-2xl ed-elevation border ed-border  overflow-hidden">
            {/* Header */}
            <div className="ed-tint   p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 ed-surface rounded-full">
                    <Bell className="w-8 h-8" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-1">
                      {notification.title}
                    </h1>
                    <p className="ed-link text-lg">
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

              <div className="flex items-center gap-4 ed-link">
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
                <h2 className="text-xl font-bold ed-ink  mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 ed-tint   rounded-full"></div>
                  Detailed Information
                </h2>
                <p className="ed-ink  leading-relaxed text-lg">
                  {notification.detail}
                </p>
              </div>

              {/* Advantage Section */}
              {notification.advantage && (
                <div className="mb-8 p-6 ed-tint     rounded-xl border border-green-200 ">
                  <h3 className="text-lg font-bold ed-ink  mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-green-600 " />
                    Key Benefits
                  </h3>
                  <p className="ed-ink  leading-relaxed">
                    {notification.advantage}
                  </p>
                </div>
              )}

              {/* External Link */}
              {notification.imageUrl && (
                <div className="mb-8 p-4 ed-canvas  rounded-xl">
                  <h3 className="text-lg font-bold ed-ink  mb-3 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 ed-link " />
                    External Resource
                  </h3>
                  <a
                    href={notification.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ed-link  ed-hover-ink  underline break-all"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 ed-tint     text-white rounded-xl font-semibold text-lg transition-all duration-200 ed-elevation ed-hover-shadow transform ed-lift"
                  >
                    {notification.actionText || 'Take Action'}
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
                <Link
                  to="/notifications"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 ed-canvas  ed-hover-surface  ed-ink  rounded-xl font-semibold text-lg transition-all duration-200"
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
