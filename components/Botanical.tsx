export function Botanical({small=false}:{small?:boolean}) {
 return <svg className={small?'botanical botanical-small':'botanical'} viewBox="0 0 320 145" fill="none" role="img" aria-label="Botanical decorative illustration">
  <path d="M26 133C93 105 151 59 182 11M294 137C235 113 207 65 179 16" stroke="#6c896f" strokeWidth="2" strokeLinecap="round"/>
  {Array.from({length:8},(_,i)=>{const x=42+i*18,y=126-i*13;return <g key={i}><ellipse cx={x-8} cy={y-12} rx="18" ry="8" transform={`rotate(-35 ${x-8} ${y-12})`} fill={i%2?'#98ad99':'#77947e'}/><ellipse cx={x+15} cy={y+2} rx="19" ry="8" transform={`rotate(43 ${x+15} ${y+2})`} fill={i%2?'#829f88':'#b5c3aa'}/></g>})}
  {Array.from({length:7},(_,i)=>{const x=273-i*14,y=128-i*16;return <g key={i}><ellipse cx={x+9} cy={y-15} rx="17" ry="7" transform={`rotate(38 ${x+9} ${y-15})`} fill={i%2?'#aebfa9':'#819c86'}/><ellipse cx={x-14} cy={y+1} rx="18" ry="8" transform={`rotate(-46 ${x-14} ${y+1})`} fill={i%2?'#78997c':'#9daf97'}/></g>})}
  </svg>
}
