import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { solutions } from '@/pages/Workspace/SolutionsPage';
import { SITE_URL, pages, missingPage, canonicalPath } from './site';
import { notificationsData } from '@/utils/notificationsData';

export function RouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = canonicalPath(pathname);
    const article = solutions.find(item => path === `/solutions/${item.id}`);
    const notification = notificationsData.find(item => path === `/notifications/${item.id}`);
    const meta = pages[path] || (article ? { title: article.title, description: article.abstract } : notification ? { title: notification.title, description: 'Read this archived Edvvo platform announcement.', noindex: true } : missingPage);
    const title = `${meta.title} | Edvvo`;
    document.title = title;
    const set = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.append(element); }
      element.content = content;
    };
    set('name', 'description', meta.description);
    set('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    set('property', 'og:title', title);
    set('property', 'og:description', meta.description);
    set('property', 'og:url', SITE_URL + path);
    set('property', 'og:type', article ? 'article' : 'website');
    set('name', 'twitter:title', title);
    set('name', 'twitter:description', meta.description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
    canonical.href = SITE_URL + path;
  }, [pathname]);
  return null;
}
