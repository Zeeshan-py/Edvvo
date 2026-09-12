import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BrandMark } from "@/components/ui/brand-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { to: "/explore", label: "Library" },
  { to: "/entertainment", label: "Study space" },
  { to: "/roadmaps", label: "Roadmaps" },
  { to: "/about", label: "About" },
];

export const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <>
    <a className="skip-link" href="#study-content" onClick={event => {
      const content = document.getElementById('study-content') || document.querySelector<HTMLElement>('.site-shell h1');
      if (content) { event.preventDefault(); content.tabIndex = -1; content.focus(); content.scrollIntoView(); }
    }}>Skip to content</a>
    <header className="ed-header">
      <div className="ed-container header-inner">
        <Link to="/" aria-label="Edvvo home"><BrandMark /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n => <NavLink key={n.to} to={n.to}>{n.label}</NavLink>)}</nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link className="ed-button header-cta" to="/explore">Find resources <ArrowUpRight size={16} /></Link>
          <button className="mobile-toggle ed-icon-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav ed-container" aria-label="Mobile navigation">
        <NavLink to="/">Home</NavLink>{navigation.map(n => <NavLink key={n.to} to={n.to}>{n.label}<ArrowUpRight size={16} /></NavLink>)}
        <Link to="/contact">Contact</Link>
      </nav>}
    </header>
    <div id="study-content" tabIndex={-1} />
  </>;
};
