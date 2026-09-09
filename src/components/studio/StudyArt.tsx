import { ArrowUpRight, Check, Star } from "lucide-react";

export function StudyScene() {
  return <div className="study-scene" aria-hidden="true">
    <div className="scene-orbit orbit-one" /><div className="scene-orbit orbit-two" />
    <span className="scene-star"><Star size={34} fill="currentColor" /></span>
    <span className="scene-dot" />
    <div className="scene-book book-back"><span>BIG IDEAS<br />START HERE.</span></div>
    <div className="scene-book book-front">
      <div className="book-topline">THE STUDENT EDITION <ArrowUpRight size={18} /></div>
      <strong>A little<br />progress.<br />Every day.</strong>
      <div className="book-drawing"><span /><span /><span /></div>
      <div className="book-bottomline">EDVVO / STUDY NOTES</div>
    </div>
    <div className="scene-note"><span className="note-check"><Check size={16} /></span><span>One topic at a time.<small>You've got this.</small></span></div>
    <div className="scene-timer"><span>FOCUS TIME</span><strong>25<span>:00</span></strong><div className="timer-ticks" /><small>Make room for your next idea.</small></div>
    <div className="scene-pencil" />
    <span className="scene-caption">A little structure. A lot of possibility.</span>
  </div>;
}

export function CardArt({ kind }: { kind: "books" | "notes" | "test" | "career" }) {
  return <div className={`card-art art-${kind}`} aria-hidden="true">
    {kind === "books" && <><i className="mini-book mb-one">Aa</i><i className="mini-book mb-two">x+y</i><i className="mini-book mb-three">SCIENCE</i></>}
    {kind === "notes" && <><i className="note-sheet sheet-back" /><i className="note-sheet sheet-front"><b>Study notes</b><span /><span /><span /><em><Check size={17} /> Got it!</em></i><i className="mini-pencil" /></>}
    {kind === "test" && <><i className="test-disc"><i><i /></i></i><i className="target-arrow"><ArrowUpRight size={65} strokeWidth={3} /></i><span className="test-tag">READY. SET. GO.</span></>}
    {kind === "career" && <><i className="path-line" /><i className="path-sign sign-one">Discover <ArrowUpRight size={16} /></i><i className="path-sign sign-two">Your next step <ArrowUpRight size={16} /></i><i className="path-base" /></>}
  </div>;
}
