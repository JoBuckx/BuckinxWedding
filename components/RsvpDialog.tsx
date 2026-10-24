'use client';

import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,ArrowRight,X} from 'lucide-react';
import type {Lang} from '@/content/data';

const copy={
 en:{
  title:'RSVP — what we need to know',
  intro:'Please include the following details in your email so we can plan for everyone:',
  adults:'Number of adults attending',
  kids:'Number of children attending',
  names:'Full names of everyone attending',
  diet:'Any food allergies or dietary restrictions (or “none”)',
  action:'Open email to RSVP',
  close:'Close',
  subject:'Wedding RSVP — Isabelle & Joris',
  body:'Hello Isabelle & Joris,\n\nWe would like to RSVP for your wedding on 5 June 2027.\n\nNumber of adults attending: \nNumber of children attending: \nNames of everyone attending: \nFood allergies or dietary restrictions (per guest): \n\nThank you!\n'
 },
 nl:{
  title:'RSVP — wat we graag willen weten',
  intro:'Vermeld alsjeblieft deze gegevens in je e-mail, zodat we alles goed kunnen voorbereiden:',
  adults:'Aantal volwassenen dat aanwezig zal zijn',
  kids:'Aantal kinderen dat aanwezig zal zijn',
  names:'Voor- en achternamen van alle aanwezigen',
  diet:'Voedselallergieën of dieetwensen (of “geen”)',
  action:'Open e-mail voor RSVP',
  close:'Sluiten',
  subject:'Huwelijk RSVP — Isabelle & Joris',
  body:'Dag Isabelle & Joris,\n\nGraag bevestigen we onze aanwezigheid op jullie huwelijk op 5 juni 2027.\n\nAantal volwassenen: \nAantal kinderen: \nNamen van alle aanwezigen: \nVoedselallergieën of dieetwensen (per persoon): \n\nBedankt!\n'
 },
 de:{
  title:'RSVP — was wir gerne wissen möchten',
  intro:'Bitte gebt in eurer E-Mail die folgenden Angaben an, damit wir alles planen können:',
  adults:'Anzahl der Erwachsenen',
  kids:'Anzahl der Kinder',
  names:'Vor- und Nachnamen aller Gäste',
  diet:'Lebensmittelallergien oder besondere Ernährungswünsche (oder „keine“)',
  action:'E-Mail für RSVP öffnen',
  close:'Schließen',
  subject:'Hochzeit RSVP — Isabelle & Joris',
  body:'Liebe Isabelle, lieber Joris,\n\nWir möchten für eure Hochzeit am 5. Juni 2027 zusagen.\n\nAnzahl der Erwachsenen: \nAnzahl der Kinder: \nNamen aller Gäste: \nLebensmittelallergien oder Ernährungswünsche (pro Person): \n\nVielen Dank!\n'
 }
};

export function RsvpDialog({lang,label}:{lang:Lang;label:string}){
 const [open,setOpen]=useState(false);
 const closeButton=useRef<HTMLButtonElement>(null);
 const t=copy[lang];
 useEffect(()=>{
  if(!open)return;
  closeButton.current?.focus();
  const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)};
  document.addEventListener('keydown',onKey);
  const previous=document.body.style.overflow;
  document.body.style.overflow='hidden';
  return ()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=previous};
 },[open]);
 const emailHref='mailto:thebuckinx@gmail.com?subject='+encodeURIComponent(t.subject)+'&body='+encodeURIComponent(t.body);
 return <>
  <button type="button" className="button button-dark rsvp-dialog-trigger" onClick={()=>setOpen(true)} aria-haspopup="dialog">{label}<ArrowRight size={16}/></button>
  {open&&<div className="rsvp-modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false)}}>
   <section className="rsvp-modal" role="dialog" aria-modal="true" aria-labelledby="rsvp-modal-title">
    <button ref={closeButton} type="button" className="rsvp-modal-close" aria-label={t.close} onClick={()=>setOpen(false)}><X size={22}/></button>
    <p className="eyebrow">ISABELLE & JORIS · 05.06.2027</p>
    <h2 id="rsvp-modal-title">{t.title}</h2>
    <p>{t.intro}</p>
    <ul className="rsvp-modal-list">
     {[t.adults,t.kids,t.names,t.diet].map((item,i)=><li key={i}><span aria-hidden="true">{String(i+1).padStart(2,'0')}</span>{item}</li>)}
    </ul>
    <a className="button button-dark rsvp-modal-action" href={emailHref}>{t.action}<ArrowUpRight size={17}/></a>
   </section>
  </div>}
 </>;
}
