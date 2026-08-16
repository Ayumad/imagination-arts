import Link from "next/link";

export function Wordmark() {
  return <Link href="/" className="wordmark" aria-label="Imagination Arts home"><span className="wordmark__mark" aria-hidden="true">✦</span><span>Imagination Arts</span></Link>;
}

export function SiteHeader() {
  return <header className="site-header"><div className="site-shell site-header__inner"><Wordmark /><nav className="site-nav" aria-label="Primary navigation"><Link href="/programs">Programs</Link><Link href="/camps-and-parties">Camps &amp; Parties</Link><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link className="button button--coral" href="/contact">Ask about a trial</Link></nav></div></header>;
}
