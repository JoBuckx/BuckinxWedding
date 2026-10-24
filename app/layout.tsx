import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Isabelle & Joris | 5 June 2027',
  description: 'Wedding guest information for Isabelle and Joris — Maastricht, 5 June 2027.',
  robots: { index: false, follow: false }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
