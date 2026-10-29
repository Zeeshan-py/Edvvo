import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, BarChart3, RotateCcw, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';

type Attempt = { id: number; topic: string; paper: string; available: number; earned: number; note: string };
const STORAGE_KEY = 'edvvo-past-paper-attempts-v1';

export const PastPaperTrackerPage = () => {
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (Array.isArray(saved)) setAttempts(saved.filter(item => item && typeof item.topic === 'string' && Number.isFinite(item.available) && Number.isFinite(item.earned)).slice(0, 100));
    } catch { /* Start with an empty tracker if stored data is invalid. */ }
    setLoaded(true);
  }, []);
  useEffect(() => { if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts)); }, [attempts, loaded]);
  const totalAvailable = attempts.reduce((sum, item) => sum + item.available, 0);
  const totalEarned = attempts.reduce((sum, item) => sum + item.earned, 0);
  const percentage = totalAvailable ? Math.round(totalEarned / totalAvailable * 100) : 0;
  const addAttempt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const topic = String(form.get('topic') || '').trim();
    const paper = String(form.get('paper') || '').trim();
    const note = String(form.get('note') || '').trim();
    const available = Number(form.get('available'));
    const earned = Number(form.get('earned'));
    if (!topic || !paper || !Number.isFinite(available) || available < 1 || !Number.isFinite(earned) || earned < 0 || earned > available) {
      setError('Add a topic and paper label, then enter marks earned between zero and the available marks.');
      return;
    }
    setAttempts(current => [{ id: Date.now(), topic, paper, available, earned, note }, ...current]);
    setError('');
    event.currentTarget.reset();
  };
  return <main className="ed-page"><HeroSection /><div className="ed-container tracker-page">
    <header className="tracker-hero"><div><span className="eyebrow">PRIVATE PAST PAPER TRACKER</span><h1>Turn every lost mark into a specific revision task.</h1><p>Record a question group, calculate your score and keep the first mistake visible. Your entries stay in this browser; Edvvo does not receive or sync them.</p></div><div className="score-orbit" aria-label={totalAvailable ? `${percentage} percent across recorded attempts` : 'No attempts recorded'}><BarChart3 /><strong>{totalAvailable ? `${percentage}%` : '--'}</strong><span>{attempts.length} {attempts.length === 1 ? 'attempt' : 'attempts'}</span></div></header>

    <section className="tracker-workspace" aria-labelledby="add-attempt-heading"><form onSubmit={addAttempt} className="tracker-form"><span className="section-kicker">01 / RECORD</span><h2 id="add-attempt-heading">Add one honest attempt</h2><p>Use a topic rather than an entire subject. “Quadratic factorisation” is easier to act on than “Mathematics.”</p>
      <label>Topic<input name="topic" maxLength={80} placeholder="e.g. Momentum calculations" /></label><label>Paper or source<input name="paper" maxLength={80} placeholder="e.g. 2025 model paper, Q4" /></label><div className="marks-row"><label>Marks available<input name="available" type="number" min="1" max="500" step="1" /></label><label>Marks earned<input name="earned" type="number" min="0" max="500" step="1" /></label></div><label>First error or next action<textarea name="note" maxLength={180} rows={3} placeholder="e.g. Converted minutes after substituting; write units first next time" /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="ed-button" type="submit">Add attempt <ArrowRight size={16} /></button>
    </form>
    <div className="tracker-results"><div className="tracker-results-head"><div><span className="section-kicker">02 / REVIEW</span><h2>Your revision evidence</h2></div>{attempts.length > 0 && <button className="tracker-reset" onClick={() => setAttempts([])}><RotateCcw size={15} /> Clear all</button>}</div>
      {attempts.length === 0 ? <div className="tracker-empty"><BarChart3 /><h3>No attempts recorded yet</h3><p>Complete one question group without notes, check it against a reliable answer, then record the first point where your work changed course.</p></div> : <><div className="score-summary"><div><span>Marks earned</span><strong>{totalEarned}/{totalAvailable}</strong></div><div><span>Current score</span><strong>{percentage}%</strong></div><div><span>Marks to review</span><strong>{totalAvailable - totalEarned}</strong></div></div><div className="attempt-list">{attempts.map(item => { const score = Math.round(item.earned / item.available * 100); return <article key={item.id}><div className="attempt-score"><strong>{score}%</strong><span>{item.earned}/{item.available}</span></div><div><span>{item.paper}</span><h3>{item.topic}</h3><p>{item.note || 'No error note added. Compare the first incorrect step before the retry.'}</p><Link to="/study-plan">Plan a retry <ArrowRight size={14} /></Link></div><button aria-label={`Delete ${item.topic} attempt`} onClick={() => setAttempts(current => current.filter(record => record.id !== item.id))}><Trash2 size={17} /></button></article>; })}</div></>}
    </div></section>

    <article className="tracker-guide"><span className="section-kicker">03 / USE THE RESULT</span><h2>A score is useful only when it changes the next session.</h2><div className="tracker-guide-grid"><section><h3>Find the first error</h3><p>Do not list every later consequence. If the wrong formula caused three incorrect lines, start with formula selection. If the method was correct but the sign changed, record the sign error and the check that would expose it.</p></section><section><h3>Choose a recoverable group</h3><p>Sort mentally by marks lost and by how specific the correction is. A repeated unit conversion error may be recoverable sooner than a chapter you have not studied. Put one group into the next session.</p></section><section><h3>Retry without the old answer</h3><p>Use another question on the same skill after a delay. Seeing the previous solution can create familiarity without independent recall. Keep both scores so progress is based on attempts, not confidence.</p></section></div><p>This tool does not provide official marking schemes. Use the scheme supplied by your examination board, teacher or paper publisher. For a structured practice session, open the <Link to="/revision-workshop">revision workshop</Link>; for research-informed technique choices, read <Link to="/study-methods">study methods</Link>.</p></article>
  </div><FooterSection /></main>;
};
