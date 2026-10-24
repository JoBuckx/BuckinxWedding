import {notFound} from 'next/navigation';
import Link from 'next/link';
import {CalendarDays,MapPin,Clock,Mail,ArrowUpRight,TrainFront,CarFront,Gift,Shirt,Heart,ArrowRight,Camera} from 'lucide-react';
import {Botanical} from '@/components/Botanical';
import {LanguageChoice} from '@/components/LanguageChoice';
import {embeddedAssets} from '@/content/embeddedAssets';
import {wedding,langs,rsvpForms,type Lang} from '@/content/data';
import {translations} from '@/content/translations';

export function generateStaticParams(){return langs.map(lang=>({lang}));}

export default async function WeddingPage({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params;
 if(!langs.includes(raw as Lang)) notFound();
 const lang=raw as Lang;
 const t=translations[lang];
 const form=rsvpForms[lang];
 const anchors=['story','day','stay','travel','explore','details','rsvp'];
 const mailto=(subject:string)=>`mailto:${wedding.email}?subject=${encodeURIComponent(subject)}`;
 const hotelBudget=(tier:string)=>{const i=['budget','budget-mid','mid','upper','small','restaurant','bb'].indexOf(tier);return t.budget[i];};

 return <>
  <header className="site-header">
   <Link href="/" className="brand">I <span>&</span> J</Link>
   <nav className="desktop-nav" aria-label="Wedding website navigation">
    {t.nav.map((label,i)=><a href={'#'+anchors[i]} key={label}>{label}</a>)}
   </nav>
   <div className="header-langs"><LanguageChoice current={lang}/></div>
  </header>

  <main className="theme-a-main">
   <section className="hero hero-a">
    <div className="hero-a-copy">
     <p className="eyebrow">{t.invitation}</p>
     <Botanical />
     <h1 className="names">Isabelle <span>&</span> Joris</h1>
     <p className="hero-tagline">{t.married}</p>
     <p className="hero-date">05 · 06 · 2027</p>
     <p className="eyebrow">{t.city}</p>
     <div className="hero-actions">
      <a className="button button-dark" href="#rsvp">{t.rsvpAction}<ArrowRight size={16}/></a>
      <Link className="button button-light" href={`/${lang}#story`}>{t.nav[0]}</Link>
     </div>
    </div>
    <div className="hero-a-visual">
     <div className="watercolor-frame">
      <img src={embeddedAssets.maastrichtWatercolor} alt="Watercolor illustration of Maastricht" className="hero-watercolor"/>
     </div>
     <div className="photo-float">
      <img src={embeddedAssets.couplePhoto} alt="Isabelle and Joris by the water" className="hero-photo"/>
     </div>
    </div>
   </section>

   <section id="story" className="section intro-section story-a">
    <div className="story-a-grid">
     <div className="story-copy">
      <p className="eyebrow">{t.introEyebrow}</p>
      <h2>{t.introTitle}</h2>
      <p className="large-copy">{t.intro}</p>
      <div className="gold-rule"/>
      <div className="monogram">I <span>&</span> J</div>
     </div>
     <figure className="portrait-card">
      <img src={embeddedAssets.couplePhoto} alt="Portrait of Isabelle and Joris"/>
      <figcaption><Camera size={16}/> A little glimpse of us</figcaption>
     </figure>
    </div>
   </section>

   <section id="day" className="section section-tinted">
    <p className="eyebrow">{t.dayEyebrow}</p>
    <h2>{t.dayTitle}</h2>
    <div className="timeline">
     <article className="event"><div className="event-time">{wedding.ceremony.time}</div><div><span className="icon-line"><CalendarDays size={20}/></span><h3>{t.church}</h3><p>{t.churchText}</p><address>{wedding.ceremony.address}</address><a className="text-link" href={wedding.ceremony.maps} target="_blank" rel="noopener noreferrer">{t.directions}<ArrowUpRight size={16}/></a></div></article>
     <article className="event"><div className="event-time">{wedding.reception.time}</div><div><span className="icon-line"><Heart size={20}/></span><h3>{t.reception}</h3><p>{t.receptionText}</p><strong>{wedding.reception.name}</strong><address>{wedding.reception.address}</address><a className="text-link" href={wedding.reception.maps} target="_blank" rel="noopener noreferrer">{t.directions}<ArrowUpRight size={16}/></a></div></article>
    </div>
    <div className="note-card"><Clock size={22}/><div><h3>{t.between}</h3><p>{t.betweenText}</p></div></div>
   </section>

   <section id="stay" className="section">
    <p className="eyebrow">{t.stayEyebrow}</p>
    <h2>{t.stayTitle}</h2>
    <p className="section-lead">{t.stayIntro}</p>
    <div className="featured-hotel">
     <div className="featured-decoration scenic-decoration">
      <img src={embeddedAssets.maastrichtWatercolor} alt="Decorative Maastricht watercolor"/>
     </div>
     <div className="featured-content">
      <p className="eyebrow">THE WEDDING VENUE</p>
      <h3>{t.venueStay}</h3>
      <p>{t.venueDescription}</p>
      <div className="price">€345 <span>{t.priceSuffix}</span></div>
      <p className="fineprint">{t.tax}</p>
      <p>{t.checkin}</p>
      <p>{t.spa}</p>
      <div className="room-booking-actions"><strong className="room-deadline">{t.requestBy}</strong>
      <a href={mailto('Van Oys accommodation request / Kamer aanvragen')} className="button button-dark">{t.requestButton}<ArrowUpRight size={16}/></a></div>
     </div>
    </div>
    <h3 className="subheading">{t.alternatives}</h3>
    <p className="section-lead small-lead">{t.hotelNote}</p>
    <div className="hotel-grid">{wedding.hotels.map(h=><article className="hotel-card" key={h.name}><div className="hotel-top"><MapPin size={16}/><span>{h.area}</span></div><h4>{h.name}</h4><p>{h.address}</p><span className="hotel-pill">{hotelBudget(h.tier)}</span><a className="card-arrow" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name+' '+h.area)}`} target="_blank" rel="noopener noreferrer" aria-label={`${t.directions}: ${h.name}`}><ArrowUpRight size={20}/></a></article>)}</div>
   </section>

   <section id="travel" className="section section-tinted">
    <p className="eyebrow">{t.travelEyebrow}</p>
    <h2>{t.travelTitle}</h2>
    <div className="info-grid"><article className="info-card"><CarFront/><h3>{t.churchParking}</h3><p>{t.churchParkingText}</p><a className="text-link" href={wedding.ceremony.maps} target="_blank" rel="noopener noreferrer">{t.directions}<ArrowUpRight size={16}/></a></article><article className="info-card"><TrainFront/><h3>{t.publicTransport}</h3><p>{t.publicTransportText}</p></article><article className="info-card"><Heart/><h3>{t.carpool}</h3><p>{t.carpoolText}</p><a className="text-link" href={mailto('Wedding carpool / Fahrgemeinschaft')}>{wedding.email}<ArrowUpRight size={16}/></a></article></div>
   </section>

   <section id="explore" className="section scenic-section">
    <div className="section-head-stack">
     <p className="eyebrow">{t.exploreEyebrow}</p>
     <h2>{t.exploreTitle}</h2>
     <p className="section-lead">{t.exploreIntro}</p>
    </div>
    <div className="explore-art-row">
     <img src={embeddedAssets.maastrichtWatercolor} alt="Maastricht city watercolor" className="explore-panorama"/>
    </div>
    <div className="sights-grid">{wedding.sights.map((s,i)=><a className="sight" key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"><span className="sight-number">0{i+1}</span><strong>{s.name}</strong><span>{t.exploreAction} <ArrowUpRight size={15}/></span></a>)}</div>
   </section>

   <section id="details" className="section section-tinted">
    <p className="eyebrow">{t.practicalEyebrow}</p>
    <h2>{t.practicalTitle}</h2>
    <div className="details-grid"><article><Shirt size={28}/><h3>{t.dress}</h3><p>{t.dressDetail}</p></article><article><Gift size={28}/><h3>{t.gifts}</h3><p>{t.giftsDetail}</p></article><article><Mail size={28}/><h3>{t.questions}</h3><p>{t.questionsText}</p><a className="text-link" href={`mailto:${wedding.email}`}>{wedding.email}<ArrowUpRight size={16}/></a></article></div>
   </section>

   <section id="rsvp" className="section rsvp-section">
    <Botanical small/>
    <p className="eyebrow">{t.rsvpEyebrow}</p>
    <h2>{t.rsvpTitle}</h2>
    <p className="section-lead">{t.rsvpIntro}</p>
    {form?<a className="button button-dark" href={form} target="_blank" rel="noopener noreferrer">{t.rsvpAction}<ArrowUpRight size={17}/></a>:<><p className="rsvp-pending">{t.rsvpMissing}</p><a className="button button-dark" href={mailto('Wedding RSVP / Huwelijk RSVP')}>{t.rsvpEmail}<ArrowUpRight size={17}/></a></>}
    <p className="fineprint privacy-copy">{t.privacy}</p>
   </section>
  </main>

  <footer className="footer"><p className="names footer-names">Isabelle <span>&</span> Joris</p><p>{t.footer}</p><div className="footer-langs"><LanguageChoice current={lang}/></div><p className="footer-date">5 June 2027 · Maastricht</p></footer>
 </>;
}
