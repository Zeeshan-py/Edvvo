import { roadmapCatalog } from '../data/roadmapCatalog';
export const SITE_URL = 'https://edvvo.netlify.app';
export interface PageMeta { title: string; description: string; noindex?: boolean; updated?: string; }
const page = (title: string, description: string, updated = '2026-10-30'): PageMeta => ({ title, description, updated });
const supportingPage = (title: string, description: string): PageMeta => ({ title, description, noindex: true });
export const pages: Record<string, PageMeta> = {
  '/': page('Free study planner and revision tools for students', 'Plan revision, track past-paper mistakes, build focused study sessions and learn evidence-informed study methods with free Edvvo tools.'),
  '/explore': supportingPage('Student resource library', 'Browse Punjab Board textbooks and subject notes for classes 9, 10, 11 and 12. Filter resources by class, subject and material type.'),
  '/entertainment': supportingPage('Study space and learning tools', 'Organize your next study session with a focus timer, study planner, practical guides and learning tools.'),
  '/entry-test': supportingPage('Entry test resources', 'Find entry test preparation resources and official source links. Check current eligibility, dates and requirements with the relevant institution.'),
  '/scholarly-vault': supportingPage('Scholarly vault', 'Explore the Edvvo subject library and external learning resources for further study. Search by topic and find the material relevant to your interests.'),
  '/academic-explorer': supportingPage('Explore academic fields', 'Compare academic fields, discover subject areas and follow official university links to research your next step in education.'),
  '/result': supportingPage('Board examination results', 'Find official examination board result portals. Confirm announcements and view your results on the relevant board website.'),
  '/roadmaps': supportingPage('Learning roadmaps archive', 'Browse archived learning roadmaps and use official documentation to confirm current technology requirements.'),
  '/focus-timer': page('Study focus timer', 'Use a focused study timer to plan work sessions and breaks. Build a manageable routine for reading, revision and practice.'),
  '/study-plan': page('Student study planner', 'Plan study tasks, set priorities and organize revision with a simple planner that saves your plans in your browser.'),
  '/revision-workshop': page('Revision workshop: worked examples and session builder', 'Build a timed revision session, practise mathematics, physics and chemistry with worked examples, and use an error log to plan your next study task.'),
  '/past-paper-tracker': page('Past paper mistake tracker', 'Record past-paper attempts, calculate your score and identify the topics that need another revision session with a private browser-based tracker.'),
  '/study-methods': page('Study methods: retrieval, spacing and practice', 'Choose a study method for the task in front of you with an evidence-informed guide to retrieval practice, spacing, examples and error review.'),
  '/editorial-policy': page('Editorial approach and resource policy', 'Read how Edvvo distinguishes original learning material from external resources, handles corrections and copyright requests, and presents advertising.'),
  '/solutions': supportingPage('Practical learning guides archive', 'Browse archived Edvvo technology guides and verify current technical requirements with official documentation.'),
  '/about': page('About Edvvo', 'Learn about Edvvo, a student resource platform helping learners find study materials, explore academic paths and organize their learning.'),
  '/contact': supportingPage('Contact and resource feedback', 'Contact Edvvo through its public channels to suggest improvements, report a broken resource or raise a copyright or privacy concern.'),
  '/privacy-policy': supportingPage('Privacy policy', 'Read how Edvvo uses browser storage, analytics, Google advertising and external services, and learn about your privacy choices.'),
  '/terms-of-service': supportingPage('Terms of service', 'Read the terms for using Edvvo, including educational resources, external links, copyright concerns and limitations of the information provided.'),
  '/board/punjab-board': supportingPage('Punjab Board class resources', 'Choose class 9, 10, 11 or 12 and browse Punjab Board books, subject notes and practice tools.'),
  '/notifications': { ...page('Edvvo updates', 'Browse Edvvo platform updates and archived announcements.'), noindex: true },
};
for (const roadmap of roadmapCatalog) pages[`/roadmaps/${roadmap.slug}`] = supportingPage(roadmap.title, roadmap.description);
const fields: Record<string, string> = {
  'islamic-studies': 'Islamic Studies', 'engineering-applied-science': 'Engineering and Applied Science',
  'engineering-programs': 'Engineering Programs', 'applied-science-programs': 'Applied Science Programs',
  'computer-science': 'Computer Science and IT', 'business-finance': 'Business and Finance',
  'natural-biological-sciences': 'Natural and Biological Sciences', 'health-paramedical': 'Health and Paramedical Studies',
  'social-sciences-humanities': 'Social Sciences and Humanities', 'architecture-design': 'Architecture and Design',
  law: 'Law', education: 'Education', 'agriculture-vet': 'Agriculture and Veterinary Studies',
};
for (const [path, title] of Object.entries(fields)) pages[`/${path}`] = supportingPage(title, `Explore ${title.toLowerCase()} study areas and university links in Pakistan. Use official institution websites to verify programs and admission requirements.`);
export const missingPage: PageMeta = { title: 'Page not found', description: 'This Edvvo page could not be found. Return to the library to find learning resources and study tools.', noindex: true };
export function normalizePath(path: string) { return path.replace(/\/+$/, '') || '/'; }
export function roadmapSchema(path: string) {
  const roadmap = roadmapCatalog.find(item => path === `/roadmaps/${item.slug}`);
  if (!roadmap && path !== '/roadmaps') return null;
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Edvvo', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Learning roadmaps', item: `${SITE_URL}/roadmaps` },
      ...(roadmap ? [{ '@type': 'ListItem', position: 3, name: roadmap.title, item: SITE_URL + path }] : []),
    ],
  };
}
export function studyToolSchema(path: string) {
  const tools: Record<string, { name: string; featureList: string[] }> = {
    '/focus-timer': { name: 'Edvvo Study Focus Timer', featureList: ['Custom study and break intervals', 'Browser-based timer', 'No account required'] },
    '/study-plan': { name: 'Edvvo Student Study Planner', featureList: ['Priority-based study tasks', 'Browser storage', 'No account required'] },
    '/revision-workshop': { name: 'Edvvo Revision Workshop', featureList: ['Timed session builder', 'Worked examples', 'Reusable error log'] },
    '/past-paper-tracker': { name: 'Edvvo Past Paper Mistake Tracker', featureList: ['Marks calculator', 'Mistake notes', 'Private browser storage'] },
  };
  const tool = tools[path];
  if (!tool) return null;
  return {
    '@context': 'https://schema.org', '@type': 'WebApplication', name: tool.name,
    url: SITE_URL + path, applicationCategory: 'EducationalApplication', operatingSystem: 'Any',
    isAccessibleForFree: true, featureList: tool.featureList,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: 'Edvvo', url: SITE_URL },
  };
}
export function canonicalPath(path: string) {
  const normalized = normalizePath(path);
  if (normalized === '/board/scholarly-vault') return '/scholarly-vault';
  return normalized.replace(/^\/research-papers(?=\/|$)/, '/solutions');
}
