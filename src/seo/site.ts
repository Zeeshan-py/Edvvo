import { roadmapCatalog } from '../data/roadmapCatalog';
export const SITE_URL = 'https://edvvo.netlify.app';
export interface PageMeta { title: string; description: string; noindex?: boolean; }
const page = (title: string, description: string): PageMeta => ({ title, description });
export const pages: Record<string, PageMeta> = {
  '/': page('Study resources, notes and learning tools', 'Find class 9 to 12 books and notes, explore university fields, and build a study routine with Edvvo learning roadmaps, planners and focus tools.'),
  '/explore': page('Student resource library', 'Browse Punjab Board textbooks and subject notes for classes 9, 10, 11 and 12. Filter resources by class, subject and material type.'),
  '/entertainment': page('Study space and learning tools', 'Organize your next study session with a focus timer, study planner, practical guides and learning tools.'),
  '/entry-test': page('Entry test resources', 'Find entry test preparation resources and official source links. Check current eligibility, dates and requirements with the relevant institution.'),
  '/scholarly-vault': page('Scholarly vault', 'Explore the Edvvo subject library and external learning resources for further study. Search by topic and find the material relevant to your interests.'),
  '/academic-explorer': page('Explore academic fields', 'Compare academic fields, discover subject areas and follow official university links to research your next step in education.'),
  '/result': page('Board examination results', 'Find official examination board result portals. Confirm announcements and view your results on the relevant board website.'),
  '/roadmaps': page('Learning roadmaps', 'Follow step-by-step learning roadmaps with lessons, code examples and resources for developing practical skills at your own pace.'),
  '/focus-timer': page('Study focus timer', 'Use a focused study timer to plan work sessions and breaks. Build a manageable routine for reading, revision and practice.'),
  '/study-plan': page('Student study planner', 'Plan study tasks, set priorities and organize revision with a simple planner that saves your plans in your browser.'),
  '/revision-workshop': page('Revision workshop: worked examples and session builder', 'Build a timed revision session, practise mathematics, physics and chemistry with worked examples, and use an error log to plan your next study task.'),
  '/editorial-policy': page('Editorial approach and resource policy', 'Read how Edvvo distinguishes original learning material from external resources, handles corrections and copyright requests, and presents advertising.'),
  '/solutions': page('Practical learning guides', 'Read practical Edvvo guides on programming, databases, tools and professional skills, with explanations and links for further learning.'),
  '/about': page('About Edvvo', 'Learn about Edvvo, a student resource platform helping learners find study materials, explore academic paths and organize their learning.'),
  '/contact': page('Contact and resource feedback', 'Contact Edvvo through its public channels to suggest improvements, report a broken resource or raise a copyright or privacy concern.'),
  '/privacy-policy': page('Privacy policy', 'Read how Edvvo uses browser storage, analytics, Google advertising and external services, and learn about your privacy choices.'),
  '/terms-of-service': page('Terms of service', 'Read the terms for using Edvvo, including educational resources, external links, copyright concerns and limitations of the information provided.'),
  '/board/punjab-board': page('Punjab Board class resources', 'Choose class 9, 10, 11 or 12 and browse Punjab Board books, subject notes and practice tools.'),
  '/notifications': { ...page('Edvvo updates', 'Browse Edvvo platform updates and archived announcements.'), noindex: true },
};
for (const roadmap of roadmapCatalog) pages[`/roadmaps/${roadmap.slug}`] = page(roadmap.title, roadmap.description);
const fields: Record<string, string> = {
  'islamic-studies': 'Islamic Studies', 'engineering-applied-science': 'Engineering and Applied Science',
  'engineering-programs': 'Engineering Programs', 'applied-science-programs': 'Applied Science Programs',
  'computer-science': 'Computer Science and IT', 'business-finance': 'Business and Finance',
  'natural-biological-sciences': 'Natural and Biological Sciences', 'health-paramedical': 'Health and Paramedical Studies',
  'social-sciences-humanities': 'Social Sciences and Humanities', 'architecture-design': 'Architecture and Design',
  law: 'Law', education: 'Education', 'agriculture-vet': 'Agriculture and Veterinary Studies',
};
for (const [path, title] of Object.entries(fields)) pages[`/${path}`] = page(title, `Explore ${title.toLowerCase()} study areas and university links in Pakistan. Use official institution websites to verify programs and admission requirements.`);
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
export function canonicalPath(path: string) {
  const normalized = normalizePath(path);
  if (normalized === '/board/scholarly-vault') return '/scholarly-vault';
  return normalized.replace(/^\/research-papers(?=\/|$)/, '/solutions');
}
