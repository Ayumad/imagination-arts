import Link from "next/link";
import { contact } from "@/lib/site-data";
import { Wordmark } from "./site-header";

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-shell"><div className="footer-grid"><div><Wordmark /><p className="footer-description">A colorful place for artists ages four and up, from young makers to teens and adults, to create, grow, and make room for imagination.</p></div><div><p className="footer-heading">Explore</p><ul className="footer-links"><li><Link href="/programs">Programs</Link></li><li><Link href="/camps-and-parties">Camps &amp; Parties</Link></li><li><Link href="/about">About the studio</Link></li><li><Link href="/contact">Trial inquiry</Link></li></ul></div><div><p className="footer-heading">Say hello</p><ul className="footer-links"><li><a href={`mailto:${contact.email}`}>{contact.email}</a></li><li><a href={`tel:${contact.phoneInternational}`}>{contact.phoneDisplay}</a></li><li>{contact.neighborhood}</li></ul></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Imagination Arts</span><span>Made with color in Fremont, California</span></div></div></footer>;
}
