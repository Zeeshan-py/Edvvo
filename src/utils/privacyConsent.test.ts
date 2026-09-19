import { beforeEach, describe, expect, it, vi } from 'vitest';

beforeEach(() => {
  localStorage.clear();
  document.querySelectorAll('script[id^="edvvo-"]').forEach(script => script.remove());
  vi.resetModules();
});
describe('Optional service consent', () => {
  it('defaults to no choice without loading third-party scripts', async () => {
    const consent = await import('./privacyConsent');
    expect(consent.readConsent()).toBeNull();
    expect(document.querySelector('script[id^="edvvo-"]')).toBeNull();
    consent.saveConsent('declined');
    expect(consent.readConsent()).toBe('declined');
    expect(document.querySelector('script[id^="edvvo-"]')).toBeNull();
  });
  it('loads the configured services once when accepted', async () => {
    const consent = await import('./privacyConsent');
    consent.saveConsent('accepted');
    consent.loadOptionalServices();
    consent.loadOptionalServices();
    expect(document.querySelectorAll('script[id^="edvvo-"]')).toHaveLength(3);
    expect(document.getElementById('edvvo-ga4')).toHaveAttribute('src', expect.stringContaining('G-PQYBGT9591'));
    expect(consent.withdrawOptionalServices()).toBe(true);
  });
  it('ignores expired, invalid and corrupt preferences', async () => {
    const consent = await import('./privacyConsent');
    for (const value of ['invalid json', JSON.stringify({ choice: 'accepted', expires: 1 }), JSON.stringify({ choice: 'anything', expires: Date.now() + 100000 })]) {
      localStorage.setItem(consent.CONSENT_KEY, value);
      expect(consent.readConsent()).toBeNull();
    }
  });
  it('handles unavailable storage without enabling anything', async () => {
    const consent = await import('./privacyConsent');
    const get = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('disabled'); });
    const set = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('disabled'); });
    expect(consent.readConsent()).toBeNull();
    expect(consent.saveConsent('declined')).toBe(false);
    get.mockRestore(); set.mockRestore();
  });
});
