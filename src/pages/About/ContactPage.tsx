import { ArrowUpRight, Mail, MessageCircle, Youtube, Facebook } from "lucide-react";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";
export const ContactPage = () => <main className="ed-page"><HeroSection />
  <div className="ed-container content-layout"><div><span className="eyebrow">CONTACT & FEEDBACK</span><h1>Let's make learning<br />a little easier.</h1><p>Have a suggestion or found something that needs fixing? Reach Edvvo through our public channels.</p></div>
    <div className="content-prose"><div className="contact-links">
      <a href="mailto:zeeshanahmad0159@gmail.com"><Mail size={23} /><span><strong>Email Edvvo</strong><small>zeeshanahmad0159@gmail.com</small><small>Corrections, feedback and copyright requests.</small></span><ArrowUpRight size={17} /></a>
      <a href="https://www.facebook.com/share/1CE4C69Kpf/" target="_blank" rel="noopener noreferrer"><Facebook size={23} /><span><strong>Facebook</strong><small>Visit our page for feedback and contact options.</small></span><ArrowUpRight size={17} /></a>
      <a href="https://whatsapp.com/channel/0029VbAGAGWCBtx5xamqF93V" target="_blank" rel="noopener noreferrer"><MessageCircle size={23} /><span><strong>WhatsApp channel</strong><small>Follow public updates and announcements.</small></span><ArrowUpRight size={17} /></a>
      <a href="https://youtube.com/@edvvo?feature=shared" target="_blank" rel="noopener noreferrer"><Youtube size={23} /><span><strong>YouTube</strong><small>Visit the Edvvo channel.</small></span><ArrowUpRight size={17} /></a>
    </div><section className="mt-8"><h2>Reporting a resource</h2><p>Include the page URL, resource title, and a short explanation of the issue. For copyright concerns, identify the work and your relationship to its owner. Please do not post passwords, identity documents or private student information on public channels.</p></section>
    <section><h2>Results and admissions</h2><p>Edvvo cannot change exam results or make admission decisions. Contact the relevant board or university using its official website.</p></section></div>
  </div><FooterSection />
</main>;
