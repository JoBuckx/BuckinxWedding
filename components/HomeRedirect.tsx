'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
export default function HomeRedirect(){const router=useRouter();useEffect(()=>{const l=localStorage.getItem('buckinx-language');if(l==='nl'||l==='en'||l==='de')router.replace('/'+l)},[router]);return null;}
