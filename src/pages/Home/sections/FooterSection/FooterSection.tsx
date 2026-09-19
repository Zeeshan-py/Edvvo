import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";
export const FooterSection = () => <footer className="ed-footer">
  <div className="ed-container footer-main">
    <div><Link to="/" aria-label="Edvvo home"><BrandMark /></Link><p>A little help for your next chapter.</p><span>Books, notes and tools for students in Pakistan.</span></div>
    <nav aria-label="Learning links"><strong>Keep learning</strong><Link to="/explore">Resource library</Link><Link to="/entertainment">Study space</Link><Link to="/roadmaps">Learning roadmaps</Link><Link to="/solutions">Practical guides</Link><Link to="/academic-explorer">Explore careers</Link></nav>
    <nav aria-label="About and support"><strong>Good to know</strong><Link to="/about">About Edvvo</Link><Link to="/contact">Contact & feedback</Link><Link to="/privacy-policy">Privacy policy</Link><Link to="/terms-of-service">Terms of use</Link></nav>
    <nav aria-label="Social links"><strong>Stay in the loop</strong><a href="https://whatsapp.com/channel/0029VbAGAGWCBtx5xamqF93V" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} /></a><a href="https://youtube.com/@edvvo?feature=shared" target="_blank" rel="noopener noreferrer">YouTube <ArrowUpRight size={14} /></a><a href="https://www.facebook.com/share/1CE4C69Kpf/" target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={14} /></a></nav>
  </div>
  <div className="ed-container footer-bottom"><span>&copy; {new Date().getFullYear()} Edvvo</span><span>Small steps. Real learning.</span><button onClick={() => window.dispatchEvent(new Event('edvvo:privacy-settings'))}>Privacy choices</button><Link to="/contact">Report a resource <ArrowUpRight size={14} /></Link></div>
</footer>;
