import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadOptionalServices, readConsent, saveConsent, withdrawOptionalServices, type Consent } from '@/utils/privacyConsent';

export function PrivacyConsent() {
  const [choice, setChoice] = useState(readConsent);
  const [open, setOpen] = useState(() => readConsent() === null);
  const [sessionOnly, setSessionOnly] = useState(false);
  useEffect(() => {
    if (choice === 'accepted') loadOptionalServices();
  }, [choice]);
  useEffect(() => {
    const show = () => setOpen(true);
    const sync = (event: StorageEvent) => {
      if (event.key && event.key !== 'edvvo-optional-consent-v1') return;
      const next = readConsent();
      setChoice(next); setOpen(next === null);
      if (next !== 'accepted' && withdrawOptionalServices()) window.location.reload();
    };
    window.addEventListener('edvvo:privacy-settings', show);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('edvvo:privacy-settings', show);
      window.removeEventListener('storage', sync);
    };
  }, []);
  const choose = (next: Consent) => {
    const saved = saveConsent(next);
    setChoice(next); setSessionOnly(!saved); setOpen(false);
    if (next === 'declined' && withdrawOptionalServices()) window.location.reload();
  };
  if (!open) return sessionOnly ? <p className="privacy-session" role="status">Privacy choice applies to this visit only because browser storage is unavailable.</p> : null;
  return <section className="privacy-banner" aria-label="Privacy preferences">
    <div><h2>Your privacy choices</h2><p>We use optional analytics to understand visits and advertising to support Edvvo. These services stay off unless you accept. Your study tools work either way. <Link to="/privacy-policy">Read our privacy policy</Link>.</p></div>
    <div className="privacy-actions"><button className="ed-button secondary" onClick={() => choose('declined')}>Essential only</button><button className="ed-button" onClick={() => choose('accepted')}>Accept analytics & ads</button>{choice && <button className="ed-text-link" onClick={() => setOpen(false)}>Keep current choice</button>}</div>
  </section>;
}
