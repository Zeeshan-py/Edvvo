export interface Notification {
  id: number;
  title: string;
  message: string;
  detail: string;
  advantage?: string;
  path?: string;
  read: boolean;
  time: string;
  category: 'update' | 'feature' | 'announcement' | 'system' | 'academic';
  priority: 'high' | 'medium' | 'low';
  imageUrl?: string;
  actionText?: string;
}

export const notificationsData: Notification[] = [
  {
    id: 14,
    title: "New Study Materials Added",
    message: "Fresh content for Class 12 Mathematics! 📚",
    detail: "We've added comprehensive study materials for Class 12 Mathematics including solved examples, practice papers, and important formula sheets. These materials are designed to help students excel in their board examinations and competitive tests.",
    advantage: "Master mathematics concepts with step-by-step solutions and expert explanations.",
    path: "/explore",
    read: false,
    time: "09/08/2025",
    category: "academic",
    priority: "medium",
    actionText: "View Materials"
  },
  {
    id: 13,
    title: "UET Second Merit List Available",
    message: "UET Second Merit List Here Click The Link!",
    detail: "The University of Engineering and Technology (UET) has released its second merit list for admissions. Students can check their admission status by visiting the official admission portal. This is a crucial update for all applicants who were waiting for the second merit list announcement.",
    advantage: "Stay updated with admission announcements and secure your spot at UET.",
    path: "/academic-explorer",
    read: false,
    time: "01/08/2025",
    category: "academic",
    priority: "high",
    imageUrl: "https://admission.uet.edu.pk/Modules/EntryTest/Default.aspx",
    actionText: "Check Merit List"
  },
  {
    id: 12,
    title: "Academic Explorer Launch",
    message: "Academic Explorer is Here! 🚀",
    detail: "We're excited to introduce Academic Explorer - your gateway to 11+ diverse academic fields! From Engineering and Computer Science to Islamic Studies and Social Sciences, explore comprehensive resources, university information, and career guidance. This powerful tool helps you discover your passion and plan your academic journey with confidence.",
    advantage: "Explore diverse subjects and find your passion with expert guidance and comprehensive resources.",
    path: "/academic-explorer",
    read: false,
    time: "22/07/2025",
    category: "feature",
    priority: "high",
    actionText: "Explore Now"
  },
  {
    id: 11,
    title: "University Pages Enhanced",
    message: "University Pages Updated! 🎓",
    detail: "We've enhanced our university information system! University cards now link directly to official websites, providing you with instant access to admission requirements, course details, and application procedures. Plan your future education with confidence and ease.",
    advantage: "Access official university information instantly and make informed decisions about your academic future.",
    path: "/academic-explorer",
    read: false,
    time: "21/07/2025",
    category: "update",
    priority: "medium",
    actionText: "View Universities"
  },
  {
    id: 10,
    title: "New LAT Resources Added",
    message: "Fresh LAT Resources Added! ⚖️",
    detail: "Boost your Law Admission Test (LAT) preparation with our newly added comprehensive resources! We've included practice tests, study guides, and expert tips specifically designed to help you excel in your law school entrance examination.",
    advantage: "Boost your law admission test preparation with expert-designed materials and practice tests.",
    path: "/entry-test",
    read: false,
    time: "20/07/2025",
    category: "academic",
    priority: "medium",
    actionText: "Access LAT Resources"
  },
  {
    id: 9,
    title: "Interface Improvements",
    message: "Smoother Interface, Better Experience! ✨",
    detail: "We've redesigned our card layouts and interface elements for a cleaner, more consistent, and intuitive user experience. The new design focuses on better readability, improved navigation, and enhanced visual appeal across all devices.",
    advantage: "Enjoy a more intuitive and visually appealing experience with improved usability.",
    path: "/explore",
    read: false,
    time: "19/07/2025",
    category: "update",
    priority: "low",
    actionText: "Explore New Design"
  },
  {
    id: 8,
    title: "FBISE Results Announced",
    message: "FBISE Announce Result!",
    detail: "The Federal Board of Intermediate and Secondary Education (FBISE) has officially announced the results for the latest examination session. Students can now check their results on the official FBISE website. We congratulate all successful candidates and encourage those who need to improve to utilize our study resources.",
    advantage: "Stay informed about important academic announcements and result declarations.",
    path: "/result",
    read: false,
    time: "16/07/2025",
    category: "academic",
    priority: "high",
    actionText: "Check Results"
  },
  {
    id: 7,
    title: "Study Planner Tool Launch",
    message: "Try our new study planner tool!",
    detail: "Introducing our comprehensive Study Planner tool! Organize your study schedule, set academic goals, track your progress, and boost your productivity. The planner includes features for time management, goal setting, progress tracking, and study session optimization.",
    advantage: "Plan your studies effectively, set achievable goals, and boost your productivity with our intelligent Study Planner.",
    path: "/study-plan",
    read: false,
    time: "09/07/2025",
    category: "feature",
    priority: "medium",
    actionText: "Try Study Planner"
  },
  {
    id: 6,
    title: "Weekly Progress Report",
    message: "Weekly progress report is available.",
    detail: "Your personalized weekly learning progress report is now available! View detailed analytics of your study patterns, achievements, completed modules, and areas for improvement. Track your learning journey and celebrate your accomplishments.",
    advantage: "Track your progress systematically and celebrate your achievements with detailed analytics.",
    path: "/entertainment",
    read: true,
    time: "08/09/2025",
    category: "system",
    priority: "low",
    actionText: "View Report"
  },
  {
    id: 5,
    title: "Instructor Message",
    message: "You have a new message from your instructor.",
    detail: "Your instructor has sent you personalized feedback and guidance regarding your recent assignments and study progress. Open your messages to read the detailed feedback and get expert advice on improving your academic performance.",
    advantage: "Get personalized feedback and expert guidance from qualified instructors to enhance your learning.",
    path: "/entertainment",
    read: false,
    time: "08/07/2025",
    category: "system",
    priority: "medium",
    actionText: "Read Message"
  },
  {
    id: 4,
    title: "Focus Timer Feature",
    message: "Check out the new Focus Timer feature!",
    detail: "Boost your productivity with our new Focus Timer feature! Based on the Pomodoro Technique, this tool helps you maintain concentration, manage study sessions effectively, and take appropriate breaks. Perfect for students who want to optimize their study time.",
    advantage: "Improve focus and manage your study sessions efficiently with proven time management techniques.",
    path: "/focus-timer",
    read: true,
    time: "07/07/2025",
    category: "feature",
    priority: "medium",
    actionText: "Try Focus Timer"
  },
  {
    id: 3,
    title: "Profile Completion",
    message: "Your profile is now complete.",
    detail: "Congratulations! Your profile is now 100% complete with all necessary information filled in. You can now access all premium features, personalized recommendations, and enhanced learning tools available on the platform.",
    advantage: "Unlock all features and enjoy a personalized learning experience tailored to your needs.",
    path: "/entertainment",
    read: true,
    time: "07/07/2025",
    category: "system",
    priority: "low",
    actionText: "View Profile"
  },
  {
    id: 2,
    title: "New Class 10 Materials",
    message: "New study materials added for Class 10.",
    detail: "We've expanded our Class 10 resource library with new books, comprehensive notes, practice tests, and study guides. These materials cover all major subjects and are designed to help students excel in their secondary school examinations.",
    advantage: "Stay ahead in your studies with the latest educational resources and comprehensive study materials.",
    path: "/explore",
    read: false,
    time: "07/07/2025",
    category: "academic",
    priority: "medium",
    actionText: "View Materials"
  },
  {
    id: 1,
    title: "Welcome to Edvvo",
    message: "Welcome to Edvvo! 🎉",
    detail: "Welcome to Edvvo - your comprehensive educational platform! We're thrilled to have you join our community of learners. Explore our vast collection of study materials, interactive tools, and educational resources designed to support your academic journey and help you achieve your goals.",
    advantage: "Access a world of free, high-quality study materials and innovative educational tools.",
    path: "/explore",
    read: true,
    time: "07/07/2025",
    category: "system",
    priority: "low",
    actionText: "Start Exploring"
  }
];

export const getNotificationById = (id: number): Notification | undefined => {
  return notificationsData.find(notification => notification.id === id);
};

export const getUnreadNotifications = (): Notification[] => {
  return notificationsData.filter(notification => !notification.read);
};

export const markNotificationAsRead = (id: number): void => {
  const notification = notificationsData.find(n => n.id === id);
  if (notification) {
    notification.read = true;
  }
};

export const markAllNotificationsAsRead = (): void => {
  notificationsData.forEach(notification => {
    notification.read = true;
  });
};
