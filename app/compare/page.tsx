import Link from 'next/link';

const langs = ['nl','de','en'] as const;

export default function ComparePage(){
 return <main className="compare-page">
  <div className="compare-shell">
   <p className="eyebrow">LOCALHOST COMPARISON</p>
   <h1>Choose a theme to compare</h1>
   <p className="compare-copy">Theme A is the default editorial botanical version. Theme B is a more romantic gallery-style concept with a warmer, card-based layout.</p>
   <div className="compare-grid">
    <section className="compare-card">
     <h2>Theme A</h2>
     <p>Editorial Botanical</p>
     <div className="compare-links">{langs.map(lang=><Link key={lang} href={`/${lang}`}>{lang.toUpperCase()}</Link>)}</div>
    </section>
    <section className="compare-card">
     <h2>Theme B</h2>
     <p>Romantic Gallery</p>
     <div className="compare-links">{langs.map(lang=><Link key={lang} href={`/preview-b/${lang}`}>{lang.toUpperCase()}</Link>)}</div>
    </section>
   </div>
  </div>
 </main>;
}
