import { ArrowRight, BookOpenCheck, CalendarClock, RotateCcw, SearchCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';

const methodCards = [
  { icon: SearchCheck, title: 'Retrieve before rereading', text: 'Close the source and write what you remember. Then compare, correct and retry. The comparison matters: it turns a guess into feedback.' },
  { icon: CalendarClock, title: 'Space the next attempt', text: 'Return after some forgetting instead of repeating the same page immediately. A later attempt shows whether the idea can still be produced without the prompt.' },
  { icon: RotateCcw, title: 'Change one feature', text: 'After a worked example, solve a similar problem with different values or wording. This checks whether you learned the method rather than the appearance of one answer.' },
  { icon: BookOpenCheck, title: 'Record the first wrong step', text: 'Keep the original attempt. Name the first incorrect decision and write a specific retry task. “Check units before substituting” is more useful than “be careful.”' },
];

export const StudyMethodsPage = () => <main className="ed-page"><HeroSection />
  <div className="ed-container article-page study-methods-page"><article>
    <span className="eyebrow">EDVVO STUDY METHODS</span>
    <h1>Choose a method for the learning problem in front of you.</h1>
    <p className="article-summary">A practical guide to retrieval, spacing, worked examples and error review. It translates learning research into small actions you can use with your own textbook, syllabus and past papers.</p>
    <p>Prepared for Edvvo and reviewed 30 October 2026. This page explains study techniques; it does not promise a particular grade or replace instructions from your teacher or examination board.</p>
    <nav className="article-jump" aria-label="On this page"><a href="#diagnose">Choose a method</a><a href="#cycle">Use the four-step cycle</a><a href="#examples">See examples</a><a href="#evidence">Review the evidence</a></nav>

    <section id="diagnose"><span className="section-kicker">01 / DIAGNOSE</span><h2>Start with the reason the task is difficult</h2>
      <p>Not every study problem needs the same technique. If you cannot explain a definition without looking, test retrieval. If you understand a worked solution but cannot begin a new question, practise choosing the method. If yesterday's work has disappeared today, schedule another attempt after a delay. If marks are lost through signs, units or skipped steps, use an error log.</p>
      <div className="method-grid">{methodCards.map(({ icon: Icon, title, text }) => <div className="method-card" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></div>)}</div>
    </section>

    <section id="cycle"><span className="section-kicker">02 / PRACTISE</span><h2>Use one repeatable revision cycle</h2>
      <ol className="method-steps"><li><strong>Define the output.</strong><span>Write a result you can observe: explain photosynthesis in five sentences, balance four equations, or solve two simultaneous equations without notes.</span></li><li><strong>Attempt from memory.</strong><span>Work before reopening the source. Put a question mark beside uncertain steps instead of hiding them.</span></li><li><strong>Compare and classify.</strong><span>Check against a reliable answer. Label the gap as missing knowledge, method choice, calculation, units, wording or time management.</span></li><li><strong>Schedule a changed retry.</strong><span>Create a new question or choose another past-paper item on the same skill. Put the retry in your planner for a later session.</span></li></ol>
      <div className="method-actions"><Link className="ed-button" to="/revision-workshop">Build a revision session <ArrowRight size={17} /></Link><Link className="ed-text-link" to="/study-plan">Schedule the retry <ArrowRight size={16} /></Link></div>
    </section>

    <section id="examples"><span className="section-kicker">03 / APPLY</span><h2>Three examples of choosing the right method</h2>
      <h3>You keep recognising a biology answer but cannot write it</h3><p>Recognition while reading is not the same as producing an answer. Turn the heading into a question, close the book and draw the process from memory. Reopen the source, add missing labels in another colour, then start again on blank paper after a delay.</p>
      <h3>You can follow an algebra example but freeze on a new question</h3><p>Cover the solution and first identify the unknown, given information and operation that preserves equality. Solve a problem with different numbers. After checking, explain why each operation was allowed. The goal is to practise selecting steps, not copying them.</p>
      <h3>Your past-paper score stays the same</h3><p>A total score hides the cause. Record each topic, available marks, marks earned and the first error. Group repeated mistakes and revise the largest recoverable group first. The <Link to="/past-paper-tracker">past paper tracker</Link> performs the totals locally in your browser.</p>
    </section>

    <section id="evidence"><span className="section-kicker">04 / SOURCES</span><h2>What the research supports, and what it does not</h2>
      <p>Laboratory and classroom research has repeatedly found benefits from practice testing and distributed practice, but the size of a benefit depends on the material, feedback, timing and learner. A technique is not a substitute for accurate subject knowledge, enough practice or a current syllabus.</p>
      <ul><li><a href="https://doi.org/10.1177/1529100612453266" target="_blank" rel="noopener noreferrer">Dunlosky and colleagues (2013)</a> reviewed ten learning techniques and rated practice testing and distributed practice highly across conditions.</li><li><a href="https://doi.org/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener noreferrer">Roediger and Karpicke (2006)</a> compared repeated study with test-enhanced learning and reported stronger delayed retention after testing.</li><li><a href="https://doi.org/10.1111/j.1467-9280.2008.02209.x" target="_blank" rel="noopener noreferrer">Cepeda and colleagues (2008)</a> examined how the spacing gap interacts with the time until the final test.</li></ul>
      <p>Edvvo uses these sources to explain general study choices, not to claim one perfect timetable. If a source, example or interpretation needs correction, email <a href="mailto:zeeshanahmad0159@gmail.com">zeeshanahmad0159@gmail.com</a> and include the section heading.</p>
    </section>
  </article></div><FooterSection />
</main>;
