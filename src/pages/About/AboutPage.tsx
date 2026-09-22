import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";

export const AboutPage = () => <main className="ed-page"><HeroSection />
  <div className="ed-container content-layout"><div><span className="eyebrow">ABOUT EDVVO</span><h1>A little help.<br />A new possibility.</h1><p>Study resources and everyday tools for students in Pakistan.</p><Link className="ed-button" to="/explore">Explore the library <ArrowUpRight size={17} /></Link></div>
    <div className="content-prose"><section><h2>Why we're here</h2><p>Finding the right study material should not take up your whole study session. Edvvo brings links to textbooks, notes and learning resources together with tools for planning and focus.</p></section>
    <section><h2>What you can find</h2><p>Browse material for classes 9 to 12, explore entry-test resources, or look through academic fields. Use the study planner, focus timer and learning roadmaps to organise your next steps.</p></section>
    <section><h2>Know your sources</h2><p>Edvvo is an independent educational resource site, not an examination board or university. Some materials open on other websites. Check the publisher, edition and syllabus before relying on a resource, and use official board or university websites for current announcements.</p></section>
    <section><h2>Learn by doing</h2><p>The <Link to="/revision-workshop">revision workshop</Link> combines a timed session builder with original worked exercises. Try an equation, check a physics calculation or practise a mole calculation, then record the first incorrect step and a specific question to retry. The <Link to="/study-plan">study planner</Link> helps turn that next step into a task.</p></section>
    <section><h2>Help us improve</h2><p>Found a broken link, an error or a resource that should not be listed? <Link to="/contact">Send us feedback</Link> with the page and resource title so it can be reviewed. Our <Link to="/editorial-policy">editorial and resource policy</Link> explains the distinction between Edvvo material and external publications.</p></section></div>
  </div><FooterSection />
</main>;
