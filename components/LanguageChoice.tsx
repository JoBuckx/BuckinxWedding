'use client';
import Link from 'next/link';
import {useEffect} from 'react';
import {langs,languageLabels,type Lang} from '@/content/data';
export function LanguageChoice({current}:{current?:Lang}){
 useEffect(()=>{if(current)localStorage.setItem('buckinx-language',current)},[current]);
 return <div className="language-choices" aria-label="Choose a language">{langs.map(l=><Link className={current===l?'lang-choice chosen':'lang-choice'} key={l} href={`/${l}`} lang={l} aria-current={current===l?'page':undefined}><strong>{l.toUpperCase()}</strong><span>{languageLabels[l]}</span></Link>)}</div>
}
