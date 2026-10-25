import {notFound} from 'next/navigation';
import Link from 'next/link';
import {CalendarDays,Clock,Mail,ArrowUpRight,TrainFront,CarFront,Gift,Shirt,Heart,ArrowRight,ExternalLink} from 'lucide-react';
import {LanguageChoice} from '@/components/LanguageChoice';
import {SightsDialog} from '@/components/SightsDialog';
import {embeddedAssets} from '@/content/embeddedAssets';
import {wedding,langs,rsvpForms,type Lang} from '@/content/data';
import {translations} from '@/content/translations';

export function generateStaticParams(){return langs.map(lang=>({lang}));}

export default async function PreviewBPage({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params;
 if(!langs.includes(raw as Lang)) notFound();
 const lang=raw as Lang;
 const t=translations[lang];
 const form=rsvpForms[lang];
 const anchors=['story','day','stay','travel','explore','details','rsvp'];
 const mailto=(subject:string)=>`mailto:${wedding.email}?subject=${encodeURIComponent(subject)}`;
 const hotelBudget=(tier:string)=>{const i=['budget','budget-mid','mid','upper','small','restaurant','bb'].indexOf(tier);return t.budget[i];};

 return <main className="theme-b-page">
  <section className="theme-b-shell">
   <header className="site-header alt-header">
    <Link href="/" className="brand">I <span>&</span> J</Link>
    <nav className="desktop-nav" aria-label="Wedding website navigation">{t.nav.map((label,i)=><a href={'#'+anchors[i]} key={label}>{label}</a>)}</nav>
    <div className="header-langs"><LanguageChoice current={lang}/></div>
   </header>

   <section className="preview-banner">
    <div>
     <p className="eyebrow">Preview theme B</p>
     <strong>Romantic Gallery</strong>
    </div>
    <Link href={`/${lang}`} className="compare-link">View theme A <ExternalLink size={15}/></Link>
   </section>

   <section className="hero-b">
    <div className="hero-b-image-wrap">
     <img src={embeddedAssets.couplePhoto} alt="Isabelle and Joris" className="hero-b-photo"/>
    </div>
    <div className="hero-b-copy">
     
     <h1 className="names">Isabelle <span>&</span> Joris</h1>
     <p className="hero-tagline">{t.married}</p>
     <p className="hero-date">05 · 06 · 2027</p>
     <p className="hero-b-location">{t.city}</p>
     
     <div className="hero-actions">
      <a className="button button-dark" href="#rsvp">{t.rsvpAction}<ArrowRight size={16}/></a>
      <a className="button button-ghost" href="#day">{t.dayTitle}</a>
     </div>
    </div>
   </section>

   <section id="story" className="section theme-b-intro">
    <div className="section-head-stack left-align">
     <p className="eyebrow">{t.introEyebrow}</p>
     <h2>{t.introTitle}</h2>
    </div>
    <div className="two-up-cards">
     <article className="paper-card emphasis-card"><p className="large-copy">{t.intro}</p></article>
     <article className="paper-card watercolor-card"><img src={embeddedAssets.maastrichtWatercolor} alt="Maastricht watercolor illustration"/></article>
    </div>
   </section>

   <section id="day" className="section section-tinted">
    <div className="section-head-stack left-align">
     <p className="eyebrow">{t.dayEyebrow}</p>
     <h2>{t.dayTitle}</h2>
    </div>
    <div className="stacked-events">
     <article className="stacked-event"><div className="stacked-time">{wedding.ceremony.time}</div><div><CalendarDays size={18}/><h3>{t.church}</h3><p>{t.churchText}</p><address>{wedding.ceremony.address}</address><a className="text-link" href={wedding.ceremony.maps} target="_blank" rel="noopener noreferrer">{t.directions}<ArrowUpRight size={16}/></a></div></article>
     <article className="stacked-event"><div className="stacked-time">{wedding.reception.time}</div><div><Heart size={18}/><h3>{t.reception}</h3><p>{t.receptionText}</p><strong>{wedding.reception.name}</strong><address>{wedding.reception.address}</address><a className="text-link" href={wedding.reception.maps} target="_blank" rel="noopener noreferrer">{t.directions}<ArrowUpRight size={16}/></a></div></article>
    </div>
    <div className="note-card"><Clock size={22}/><div><h3>{t.between}</h3><p>{t.betweenText}</p><a className="text-link" href="https://www.google.com/maps/place/Buitengoed+Slavante/@50.8258116,5.6923542,17z/data=!3m2!4b1!5s0x47c0e90c96cfcb5d:0xf4dc76f389a6b186!4m6!3m5!1s0x47c0e90c90fe6643:0x7bb6a548dcca85be!8m2!3d50.8258082!4d5.6949291!16s%2Fg%2F121f49qk" target="_blank" rel="noopener noreferrer">Buitengoed Slavante · {t.directions}<ArrowUpRight size={16}/></a><a className="text-link between-suggestions" href="#explore">{lang === "de" ? "Ausflugstipps" : lang === "nl" ? "Ontdek onze tips" : "Explore suggestions"}<ArrowRight size={16}/></a></div></div>
   </section>

   <section id="stay" className="section">
    <div className="section-head-stack left-align">
     <p className="eyebrow">{t.stayEyebrow}</p>
     <h2>{t.stayTitle}</h2>
     <p className="section-lead wide-left">{t.stayIntro}</p>
    </div>
    <article className="venue-panel">
     <div>
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
     <div className="venue-side-art"><img src={embeddedAssets.maastrichtWatercolor} alt="Decorative watercolor"/></div>
    </article>
    <div className="compact-hotel-grid">{wedding.hotels.map(h=><article className="compact-hotel-card" key={h.name}><h4>{h.name}</h4><p>{h.area} · {h.address}</p><span>{hotelBudget(h.tier)}</span></article>)}</div>
   </section>

   <section id="travel" className="section section-tinted">
    <div className="travel-columns"><article className="paper-card"><CarFront/><h3>{t.churchParking}</h3><p>{t.churchParkingText}</p></article><article className="paper-card"><TrainFront/><h3>{t.publicTransport}</h3><p>{t.publicTransportText}</p></article><article className="paper-card"><Heart/><h3>{t.carpool}</h3><p>{t.carpoolText}</p><a className="text-link" href={mailto('Wedding carpool / Fahrgemeinschaft')}>{wedding.email}<ArrowUpRight size={16}/></a></article></div>
   </section>

   <section id="explore" className="section scenic-section alt-scenic">
    <div className="section-head-stack left-align"><p className="eyebrow">{t.exploreEyebrow}</p><h2>{t.exploreTitle}</h2><p className="section-lead wide-left">{t.exploreIntro}</p></div>
    <div className="postcard-grid">
     <img src={embeddedAssets.maastrichtWatercolor} alt="Maastricht view" className="postcard-art"/>
     <SightsDialog lang={lang} variant="postcard"/>
        </div>
   </section>

   <section id="details" className="section">
    <div className="travel-columns"><article className="paper-card"><Shirt size={24}/><h3>{t.dress}</h3><p>{t.dressDetail}</p></article><article className="paper-card"><Gift size={24}/><h3>{t.gifts}</h3><p>{t.giftsDetail}</p></article><article className="paper-card"><Mail size={24}/><h3>{t.questions}</h3><p>{t.questionsText}</p><a className="text-link" href={`mailto:${wedding.email}`}>{wedding.email}<ArrowUpRight size={16}/></a></article></div>
   </section>

   <section id="rsvp" className="section rsvp-section alt-rsvp">
    <p className="eyebrow">{t.rsvpEyebrow}</p>
    <h2>{t.rsvpTitle}</h2>
    <p className="section-lead">{t.rsvpIntro}</p>
    {form?<a className="button button-dark" href={form} target="_blank" rel="noopener noreferrer">{t.rsvpAction}<ArrowUpRight size={17}/></a>:<><p className="rsvp-pending">{t.rsvpMissing}</p><a className="button button-dark" href={mailto('Wedding RSVP / Huwelijk RSVP')}>{t.rsvpEmail}<ArrowUpRight size={17}/></a></>}
    <p className="fineprint privacy-copy">{t.privacy}</p>
   </section>

   <footer className="footer footer-light"><p className="names footer-names">Isabelle <span>&</span> Joris</p><p>{t.footer}</p><div className="footer-langs"><LanguageChoice current={lang}/></div><p className="footer-date">5 June 2027 · Maastricht</p></footer>
  </section>
 </main>;
}
