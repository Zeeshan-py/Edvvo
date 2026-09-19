export const CONSENT_KEY = 'edvvo-optional-consent-v1';
export type Consent = 'accepted' | 'declined';
const lifetime = 180 * 24 * 60 * 60 * 1000;
let loaded = false;

export function readConsent(): Consent | null {
  try {
    const saved = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null');
    return saved && saved.expires > Date.now() && (saved.choice === 'accepted' || saved.choice === 'declined') ? saved.choice : null;
  } catch { return null; }
}
export function saveConsent(choice: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, expires: Date.now() + lifetime }));
    return true;
  } catch { return false; }
}
export function loadOptionalServices() {
  if (loaded) return;
  loaded = true;
  const google = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  google.dataLayer = google.dataLayer || [];
  google.gtag = function () { google.dataLayer!.push(arguments); };
  // Acceptance enables basic measurement and ads, not personalized advertising.
  google.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'denied', ad_personalization: 'denied' });
  google.gtag('js', new Date());
  google.gtag('config', 'G-PQYBGT9591');
  google.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  for (const [id, src] of [
    ['edvvo-ga4', 'https://www.googletagmanager.com/gtag/js?id=G-PQYBGT9591'],
    ['edvvo-gtm', 'https://www.googletagmanager.com/gtm.js?id=GTM-KNSF24NR'],
    ['edvvo-ads', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1073239228894562'],
  ]) {
    if (document.getElementById(id)) continue;
    const script = document.createElement('script');
    script.id = id; script.src = src; script.async = true;
    if (id === 'edvvo-ads') script.crossOrigin = 'anonymous';
    document.head.append(script);
  }
}
export function withdrawOptionalServices() {
  const google = window as typeof window & { gtag?: (...args: unknown[]) => void };
  google.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  // Only remove recognizable first-party tracking cookies, never study plans.
  for (const entry of document.cookie.split(';')) {
    const name = entry.split('=')[0].trim();
    if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_gcl_)/.test(name)) continue;
    const expired = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = expired;
    document.cookie = `${expired}; domain=${location.hostname}`;
  }
  // Removing script tags cannot stop already running third-party code.
  return loaded;
}
