import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { PrivacyConsent } from './PrivacyConsent';
import * as consent from '@/utils/privacyConsent';

vi.mock('@/utils/privacyConsent', () => ({
  readConsent: vi.fn(() => null), saveConsent: vi.fn(() => true),
  loadOptionalServices: vi.fn(), withdrawOptionalServices: vi.fn(() => false),
}));
beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(consent.readConsent).mockReturnValue(null);
});
const visit = () => render(<MemoryRouter><PrivacyConsent /></MemoryRouter>);
describe('Privacy controls', () => {
  it('does not start services before a choice or after declining', async () => {
    visit();
    expect(consent.loadOptionalServices).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button', { name: 'Essential only' }));
    expect(consent.saveConsent).toHaveBeenCalledWith('declined');
    expect(consent.loadOptionalServices).not.toHaveBeenCalled();
    expect(screen.queryByRole('region', { name: 'Privacy preferences' })).not.toBeInTheDocument();
  });
  it('starts services only after explicit acceptance', async () => {
    visit();
    await userEvent.click(screen.getByRole('button', { name: 'Accept analytics & ads' }));
    expect(consent.saveConsent).toHaveBeenCalledWith('accepted');
    expect(consent.loadOptionalServices).toHaveBeenCalledTimes(1);
  });
  it('remembers a decline and allows reopening without changing it', async () => {
    vi.mocked(consent.readConsent).mockReturnValue('declined');
    visit();
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
    act(() => { window.dispatchEvent(new Event('edvvo:privacy-settings')); });
    expect(screen.getByRole('region', { name: 'Privacy preferences' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Keep current choice' }));
    expect(consent.saveConsent).not.toHaveBeenCalled();
    expect(consent.loadOptionalServices).not.toHaveBeenCalled();
  });
  it('resumes accepted services and honors withdrawal in another tab', () => {
    vi.mocked(consent.readConsent).mockReturnValue('accepted');
    visit();
    expect(consent.loadOptionalServices).toHaveBeenCalledTimes(1);
    vi.mocked(consent.readConsent).mockReturnValue('declined');
    act(() => { window.dispatchEvent(new StorageEvent('storage', { key: 'edvvo-optional-consent-v1' })); });
    expect(consent.withdrawOptionalServices).toHaveBeenCalledTimes(1);
  });
});
