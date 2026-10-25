'use client';

import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,X} from 'lucide-react';
import {wedding,type Lang} from '@/content/data';

const text={
 en:{
  heading:'Explore Maastricht',description:'A little more about this stop',map:'View on map',close:'Close',
  descriptions:[
   'Stroll along the Maas riverside in Wyck, enjoy the views across the water and cross the Sint Servaasbrug into the historic centre. A lovely first impression of Maastricht.',
   'Wander through the picturesque streets of the Stokstraat Quarter and Jeker Quarter. Stop at Onze Lieve Vrouweplein along the way.',
   'One of Maastricht’s best-known squares, with the Basilica of Saint Servatius and the distinctive red tower of Sint Janskerk.',
   'This special bookshop occupies a former Dominican church. Step inside to explore the shelves—and enjoy a coffee or tea.',
   'Discover the medieval Helpoort and continue through the old city walls into Stadspark for a pleasant stroll.',
   'A coffee stop near the church, ideal for the time between the ceremony and the welcome reception. You could also walk around Sint-Pietersberg or return to your hotel.'
  ]
 },
 nl:{
  heading:'Ontdek Maastricht',description:'Meer over deze plek',map:'Bekijk op de kaart',close:'Sluiten',
  descriptions:[
   'Wandel langs de Maas in Wyck, geniet van het uitzicht over het water en steek de Sint Servaasbrug over naar het historische centrum. Een mooie eerste kennismaking met Maastricht.',
   'Dwaal door de pittoreske straatjes van het Stokstraatkwartier en het Jekerkwartier. Maak onderweg een tussenstop op het Onze Lieve Vrouweplein.',
   'Een van de bekendste pleinen van Maastricht, met de indrukwekkende Sint-Servaasbasiliek en de opvallende rode toren van de Sint-Janskerk.',
   'Deze bijzondere boekhandel bevindt zich in een voormalige Dominicanenkerk. Neem zeker een kijkje en geniet er eventueel van een koffie of thee.',
   'Ontdek de middeleeuwse Helpoort en wandel langs de oude stadsmuren verder het Stadspark in.',
   'Een gezellige plek voor koffie in de buurt van de kerk, tijdens de vrije tijd tussen de ceremonie en de receptie. Je kunt ook wandelen op de Sint-Pietersberg of even teruggaan naar je hotel.'
  ]
 },
 de:{
  heading:'Maastricht entdecken',description:'Mehr über diesen Ort',map:'Auf Karte ansehen',close:'Schließen',
  descriptions:[
   'Spaziert entlang des Maasufers in Wyck, genießt den Blick aufs Wasser und überquert die Sint Servaasbrug in Richtung der historischen Altstadt. Ein schöner erster Eindruck von Maastricht.',
   'Schlendert durch die malerischen Gassen des Stokstraatviertels und des Jekerviertels. Legt unterwegs eine Pause auf dem Onze Lieve Vrouweplein ein.',
   'Einer der bekanntesten Plätze Maastrichts, mit der imposanten Servatiusbasilika und dem markanten roten Turm der Sint Janskerk.',
   'Diese besondere Buchhandlung liegt in einer ehemaligen Dominikanerkirche. Schaut unbedingt hinein; auch einen Kaffee oder Tee könnt ihr hier genießen.',
   'Entdeckt das mittelalterliche Stadttor Helpoort und spaziert an der alten Stadtmauer entlang in den Stadspark.',
   'Eine schöne Kaffeepause in der Nähe der Kirche für die Zeit zwischen Trauung und Empfang. Alternativ bietet sich ein Spaziergang am Sint-Pietersberg oder eine kurze Pause im Hotel an.'
  ]
 }
} as const;

export function SightsDialog({lang,variant='default'}:{lang:Lang;variant?:'default'|'postcard'}){
 const [selected,setSelected]=useState<number|null>(null);
 const close=useRef<HTMLButtonElement>(null);
 const t=text[lang];
 useEffect(()=>{
  if(selected===null)return;
  const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setSelected(null)};
  document.addEventListener('keydown',onKey);
  close.current?.focus();
  const before=document.body.style.overflow;document.body.style.overflow='hidden';
  return ()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=before};
 },[selected]);
 const choice=selected===null?null:wedding.sights[selected];
 return <>
  <div className={variant==='postcard'?'postcard-links':'sights-grid'}>
   {wedding.sights.map((s,i)=><button type="button" className={variant==='postcard'?'postcard-link sight-dialog-trigger':'sight sight-dialog-trigger'} key={s.name} onClick={()=>setSelected(i)} aria-haspopup="dialog">
    <span className={variant==='postcard'?undefined:'sight-number'}>{String(i+1).padStart(2,'0')}</span>
    <strong>{s.name}</strong>
    {variant==='postcard'?<ArrowUpRight size={16}/>:<span>{t.description} <ArrowUpRight size={15}/></span>}
   </button>)}
  </div>
  {choice!==null&&selected!==null&&<div className="rsvp-modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}>
   <section role="dialog" aria-modal="true" aria-labelledby="sight-modal-title" className="rsvp-modal sight-modal">
    <button ref={close} type="button" aria-label={t.close} className="rsvp-modal-close" onClick={()=>setSelected(null)}><X size={22}/></button>
    <p className="eyebrow">{t.heading}</p>
    <h2 id="sight-modal-title">{choice.name}</h2>
    <p className="sight-modal-description">{t.descriptions[selected]}</p>
    <a className="button button-dark rsvp-modal-action" href={choice.url} target="_blank" rel="noopener noreferrer">{t.map}<ArrowUpRight size={17}/></a>
   </section>
  </div>}
 </>;
}
