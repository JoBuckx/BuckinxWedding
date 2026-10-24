import {Botanical} from '@/components/Botanical';
import {LanguageChoice} from '@/components/LanguageChoice';
import HomeRedirect from '@/components/HomeRedirect';
export default function Welcome(){return <main className="welcome-page"><HomeRedirect/><div className="welcome-frame"><p className="eyebrow">THE WEDDING OF</p><h1 className="names">Isabelle <span>&</span> Joris</h1><Botanical/><p className="date-wordmark">05 · 06 · 2027 <span>—</span> MAASTRICHT</p><div className="welcome-divider"/><h2>Welcome · Welkom · Willkommen</h2><p className="subdued">Please choose your language / Kies je taal / Bitte wählt eure Sprache</p><LanguageChoice/><p className="smallprint">A celebration of love, in the city where it all began.</p></div></main>}
