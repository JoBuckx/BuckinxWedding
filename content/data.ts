export const wedding = {
 dateISO: '2027-06-05T14:00:00+02:00',
 email: 'thebuckinx@gmail.com',
 ceremony: {time:'14:00', address:'Ursulinenweg 1, 6212 NC Maastricht, Netherlands', maps:'https://www.google.com/maps/search/?api=1&query=Ursulinenweg+1+Maastricht'},
 reception: {name:'Van Oys Maastricht Retreat',time:'17:00',address:'Kasteellaan 1, 6245 SB Eijsden, Netherlands',maps:'https://www.google.com/maps/search/?api=1&query=Kasteellaan+1+6245+SB+Eijsden'},
 stayDeadline:'30 November 2026', rsvpDeadline:'1 March 2027',
 hotels:[
 {name:'easyHotel Maastricht City Centre',area:'Maastricht',tier:'budget',address:'Het Bat 12'},
 {name:'B&B De Hofnar',area:'Maastricht',tier:'budget-mid',address:'Keizer Karelplein 13'},
 {name:'Bastion Hotel Maastricht Centrum',area:'Maastricht',tier:'budget-mid',address:'Boschstraat 27'},
 {name:'Kaboom Hotel',area:'Maastricht',tier:'mid',address:'Stationsplein 1, Wyck'},
 {name:'The Dutch',area:'Maastricht',tier:'mid',address:'Wilhelminasingel 60, Wyck'},
 {name:'Hotel Beaumont',area:'Maastricht',tier:'upper',address:'Lage Barakken 10, Wyck'},
 {name:'Hotel Le Bonheur',area:'Eijsden',tier:'small',address:'Wilhelminastraat 73'},
 {name:'Hotel Restaurant Hestia',area:'Eijsden',tier:'restaurant',address:'Diepstraat 7'},
 {name:'B&B Breusjterhofke',area:'Eijsden',tier:'bb',address:'Von Geusauplein 25'}
 ],
 sights:[
 {name:'Maas & Sint Servaasbrug',url:'https://maps.app.goo.gl/vNq3QC8TF6EiAL5V7'},
 {name:'Stokstraatkwartier & Jekerkwartier',url:'https://maps.app.goo.gl/HSLs1ubh1w8meEfa9'},
 {name:'Vrijthof',url:'https://maps.app.goo.gl/3e3NQ6qbyoNyzAWd7'},
 {name:'Boekhandel Dominicanen',url:'https://maps.app.goo.gl/8jdK4dL2qM4uw5fH7'},
 {name:'Helpoort & Stadspark',url:'https://maps.app.goo.gl/dqK5CWBqhaDZDqWDA'},
 {name:'Van Wijck café',url:'https://maps.app.goo.gl/GGoZfLa4TznZNQkZ9'}
 ]
};
export type Lang = 'nl'|'de'|'en';
export const langs:Lang[]=['nl','de','en'];
export const languageLabels:Record<Lang,string>={nl:'Nederlands',de:'Deutsch',en:'English'};
export const rsvpForms:Record<Lang,string|undefined>={nl:process.env.NEXT_PUBLIC_RSVP_FORM_NL,de:process.env.NEXT_PUBLIC_RSVP_FORM_DE,en:process.env.NEXT_PUBLIC_RSVP_FORM_EN};
