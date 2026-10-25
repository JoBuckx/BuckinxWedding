import {notFound} from 'next/navigation';
import Link from 'next/link';
import {CalendarDays,MapPin,Clock,Mail,ArrowUpRight,TrainFront,CarFront,Gift,Shirt,Heart,ArrowRight} from 'lucide-react';
import {LanguageChoice} from '@/components/LanguageChoice';
import {SightsDialog} from '@/components/SightsDialog';
import {RsvpDialog} from '@/components/RsvpDialog';
import {embeddedAssets} from '@/content/embeddedAssets';
import {rsvpCouplePhoto} from '@/content/rsvpPhoto';
import {churchAquarelle} from '@/content/churchAquarelle';
import {vanOysWatercolor} from '@/content/vanOysWatercolor';
import {wedding,langs,type Lang} from '@/content/data';
import {translations} from '@/content/translations';

export function generateStaticParams(){return langs.map(lang=>({lang}));}

export default async function WeddingPage({params}:{params:Promise<{lang:string}>}){
 const {lang:raw}=await params;
 if(!langs.includes(raw as Lang)) notFound();
 const lang=raw as Lang;
 const t=translations[lang];
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
     
     
     <h1 className="names">Isabelle <span>&</span> Joris</h1>
     <p className="hero-tagline">{t.married}</p>
     <p className="hero-date">05 · 06 · 2027</p>
     <p className="eyebrow">{t.city}</p>
     <div className="hero-actions">
      <RsvpDialog lang={lang} label={t.rsvpAction}/>
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

   <section id="story" className="section intro-section story-a story-text-only">
    <div className="story-a-grid">
     <div className="story-copy">
      <p className="eyebrow">{t.introEyebrow}</p>
      <h2>{t.introTitle}</h2>
      <p className="large-copy">{t.intro}</p>
      <div className="gold-rule"/>
      <div className="monogram">I <span>&</span> J</div>
     </div>
    </div>
   </section>

   <section id="day" className="section section-tinted">
    <p className="eyebrow">{t.dayEyebrow}</p>
    <h2>{t.dayTitle}</h2>
    <div className="timeline">
     <article className="event wedding-event-card">
      <div className="event-side"><div className="event-time">{wedding.ceremony.time}</div><figure className="event-illustration"><img src={churchAquarelle} alt="Watercolor illustration of the wedding ceremony church" loading="lazy"/></figure></div>
      <div className="event-body">
       <span className="icon-line"><CalendarDays size={20}/></span>
       <h3>{t.church}</h3>
       <p>{t.churchText}</p>
       
       <address>{wedding.ceremony.address}</address>
       <a className="text-link" href={wedding.ceremony.maps} target="_blank" rel="noopener noreferrer">{t.directions}<ArrowUpRight size={16}/></a>
      </div>
     </article>
     <article className="event wedding-event-card">
      <div className="event-side"><div className="event-time">{wedding.reception.time}</div><figure className="event-illustration"><img src={vanOysWatercolor} alt="Watercolor illustration of Château Van Oys Maastricht Retreat" loading="lazy"/></figure></div>
      <div className="event-body">
       <span className="icon-line"><Heart size={20}/></span>
       <h3>{t.reception}</h3>
       <p>{t.receptionText}</p>
       <strong>{wedding.reception.name}</strong>
       <address>{wedding.reception.address}</address>
       <a className="text-link" href={wedding.reception.maps} target="_blank" rel="noopener noreferrer">{t.directions}<ArrowUpRight size={16}/></a>
      </div>
     </article>
    </div>
    <div className="note-card"><Clock size={22}/><div><h3>{t.between}</h3><p>{t.betweenText}</p><a className="text-link" href="https://www.google.com/maps/place/Buitengoed+Slavante/@50.8258116,5.6923542,17z/data=!3m2!4b1!5s0x47c0e90c96cfcb5d:0xf4dc76f389a6b186!4m6!3m5!1s0x47c0e90c90fe6643:0x7bb6a548dcca85be!8m2!3d50.8258082!4d5.6949291!16s%2Fg%2F121f49qk" target="_blank" rel="noopener noreferrer">Buitengoed Slavante · {t.directions}<ArrowUpRight size={16}/></a><a className="text-link between-suggestions" href="#explore">{lang === "de" ? "Ausflugstipps" : lang === "nl" ? "Ontdek onze tips" : "Explore suggestions"}<ArrowRight size={16}/></a></div></div>
   </section>

   <section id="stay" className="section">
    <p className="eyebrow">{t.stayEyebrow}</p>
    <h2>{t.stayTitle}</h2>
    <p className="section-lead">{t.stayIntro}</p>
    <div className="featured-hotel">
     <div className="featured-decoration scenic-decoration">
      <img src="https://www.locaties.nl/media/kx2m44jk/van-oys-maastricht-retreat-chateau-exterior-c-michael-huber-photography-oys25_1606_p.jpg" alt="Château Van Oys Maastricht Retreat exterior" loading="lazy"/>
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
     {lang !== "de" && <p className="eyebrow">{t.exploreEyebrow}</p>}
     <h2>{t.exploreTitle}</h2>
     <p className="section-lead">{t.exploreIntro}</p>
    </div>
    <div className="explore-art-row">
     <img src="https://www.countryandtownhouse.com/wp-content/uploads/2024/03/GettyImages-867301882-1536x1024.jpg" alt="Photograph of Maastricht, Netherlands" className="explore-panorama" loading="lazy"/>
    </div>
    <div className="first-date-feature">
     <div>
      <p className="eyebrow">{lang==='nl'?'ONZE EERSTE DATE':lang==='de'?'UNSER ERSTES DATE':'OUR FIRST DATE'}</p>
      <h3>{lang==='nl'?'Beleef onze eerste date opnieuw':lang==='de'?'Wo alles begann':'Re-experience our first date'}</h3>
      <p>{lang==='nl'?'Breng een bezoek aan Bistro & Café Servaas, waar onze eerste date plaatsvond. Of ontdek een van de andere leuke plekken hieronder.':lang==='de'?'Besucht Bistro & Café Servaas, wo unser erstes Date stattfand. Oder entdeckt einen der anderen schönen Orte weiter unten.':'Visit Bistro & Café Servaas, where we had our first date. Or discover one of the other lovely places below.'}</p>
     </div>
     <a className="first-date-map-link" href="https://www.google.com/maps/place/Bistro+%26+Caf%C3%A9+Servaas/@50.8490693,5.6975247,21z/data=!4m6!3m5!1s0x47c0e9beee71890f:0x18ea8b7742587cbe!8m2!3d50.8490448!4d5.6976884!16s%2Fg%2F1td4nvlv" target="_blank" rel="noopener noreferrer">{lang==='nl'?'Bekijk op kaart':lang==='de'?'Auf Karte ansehen':'View on map'}<ArrowUpRight size={16}/></a>
    </div>
    <SightsDialog lang={lang}/>
   </section>

   <section id="details" className="section section-tinted">
    <p className="eyebrow">{t.practicalEyebrow}</p>
    <h2>{t.practicalTitle}</h2>
    <div className="details-grid"><article><Shirt size={28}/><h3>{t.dress}</h3><p>{t.dressDetail}</p></article><article><Gift size={28}/><h3>{t.gifts}</h3><p>{t.giftsDetail}</p></article><article><Mail size={28}/><h3>{t.questions}</h3><p>{t.questionsText}</p><a className="text-link" href={`mailto:${wedding.email}`}>{wedding.email}<ArrowUpRight size={16}/></a></article></div>
   </section>

   <section id="rsvp" className="section rsvp-section">
    
    <p className="eyebrow">{t.rsvpEyebrow}</p>
    <h2>{t.rsvpTitle}</h2>
    <p className="section-lead">{t.rsvpIntro}</p>
    <RsvpDialog lang={lang} label={t.rsvpAction}/>
    <figure className="rsvp-couple-photo"><img src={rsvpCouplePhoto} alt="Isabelle and Joris together by the water" loading="lazy"/></figure>
    <p className="fineprint privacy-copy">{t.privacy}</p>
   </section>
  </main>

  <footer className="footer"><p className="names footer-names">Isabelle <span>&</span> Joris</p><p>{t.footer}</p><div className="footer-langs"><LanguageChoice current={lang}/></div><p className="footer-date">5 June 2027 · Maastricht</p></footer>
 </>;
}
