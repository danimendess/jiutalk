import { useState } from "react";
 
// ─── ILUSTRAÇÕES INLINE ───────────────────────────────────────────────────────
const IllustrationSaudacoes = () => (
  <svg width="100%" viewBox="0 0 360 180" role="img" style={{borderRadius:14,display:"block"}}>
    <rect width="360" height="180" fill="#f8f9ff"/>
    <rect width="360" height="108" fill="#fff"/>
    <rect y="100" width="360" height="80" fill="#1a6fc4"/>
    <line x1="0" y1="100" x2="360" y2="100" stroke="#1558a0" strokeWidth="3"/>
    <line x1="0" y1="130" x2="360" y2="130" stroke="#1558a0" strokeWidth="1" strokeDasharray="14,7" opacity="0.4"/>
    <line x1="0" y1="158" x2="360" y2="158" stroke="#1558a0" strokeWidth="1" strokeDasharray="14,7" opacity="0.4"/>
    <line x1="72" y1="100" x2="72" y2="180" stroke="#1558a0" strokeWidth="1" strokeDasharray="14,7" opacity="0.4"/>
    <line x1="180" y1="100" x2="180" y2="180" stroke="#1558a0" strokeWidth="1" strokeDasharray="14,7" opacity="0.4"/>
    <line x1="288" y1="100" x2="288" y2="180" stroke="#1558a0" strokeWidth="1" strokeDasharray="14,7" opacity="0.4"/>
    <ellipse cx="180" cy="106" rx="30" ry="6" fill="#1558a0" opacity="0.3"/>
    <rect x="166" y="70" width="12" height="38" rx="6" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"/>
    <rect x="182" y="70" width="12" height="38" rx="6" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"/>
    <ellipse cx="172" cy="106" rx="10" ry="6" fill="#222"/>
    <ellipse cx="188" cy="106" rx="10" ry="6" fill="#222"/>
    <rect x="154" y="36" width="52" height="42" rx="13" fill="#fff" stroke="#e8e8e8" strokeWidth="2"/>
    <path d="M180 40 L167 58 L180 63 L193 58 Z" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="1"/>
    <rect x="152" y="66" width="56" height="7" rx="3" fill="#f0f0f0" stroke="#ccc" strokeWidth="1.5"/>
    <path d="M154 46 Q132 34 124 18" stroke="#fff" strokeWidth="13" strokeLinecap="round" fill="none"/>
    <ellipse cx="121" cy="14" rx="11" ry="10" fill="#FFCBA4"/>
    <line x1="114" y1="6" x2="111" y2="0" stroke="#FFCBA4" strokeWidth="5" strokeLinecap="round"/>
    <line x1="121" y1="4" x2="120" y2="0" stroke="#FFCBA4" strokeWidth="5" strokeLinecap="round"/>
    <line x1="128" y1="6" x2="129" y2="0" stroke="#FFCBA4" strokeWidth="5" strokeLinecap="round"/>
    <path d="M206 44 Q220 58 218 72" stroke="#fff" strokeWidth="13" strokeLinecap="round" fill="none"/>
    <rect x="171" y="20" width="18" height="18" rx="8" fill="#FFCBA4"/>
    <ellipse cx="180" cy="14" rx="26" ry="28" fill="#FFCBA4"/>
    <path d="M156 7 Q158 0" stroke="none"/>
    <path d="M155 8 Q157 -2 180 -4 Q203 -2 205 8 Q196 0 180 0 Q164 0 155 8Z" fill="#2c1810"/>
    <ellipse cx="157" cy="11" rx="7" ry="11" fill="#2c1810"/>
    <ellipse cx="203" cy="11" rx="7" ry="11" fill="#2c1810"/>
    <ellipse cx="171" cy="12" rx="6" ry="7" fill="white"/>
    <ellipse cx="189" cy="12" rx="6" ry="7" fill="white"/>
    <ellipse cx="173" cy="14" rx="3.5" ry="4" fill="#2c1810"/>
    <ellipse cx="191" cy="14" rx="3.5" ry="4" fill="#2c1810"/>
    <ellipse cx="175" cy="12" rx="1.5" ry="1.5" fill="white"/>
    <ellipse cx="193" cy="12" rx="1.5" ry="1.5" fill="white"/>
    <path d="M169 24 Q180 32 191 24" stroke="#2c1810" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M171 26 Q180 31 189 26 Q180 30 171 26Z" fill="white"/>
    <ellipse cx="161" cy="20" rx="7" ry="5" fill="#ff9999" opacity="0.4"/>
    <ellipse cx="199" cy="20" rx="7" ry="5" fill="#ff9999" opacity="0.4"/>
    <rect x="210" y="4" width="86" height="40" rx="11" fill="#ff8c00"/>
    <path d="M218 42 L207 54 L228 42Z" fill="#ff8c00"/>
    <text x="253" y="20" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="15" fontWeight="900" fill="white">OSS!</text>
    <text x="253" y="36" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="11" fill="white" opacity="0.9">Hello! / Olá!</text>
  </svg>
);
 
const IllustrationAnimais = () => (
  <svg width="100%" viewBox="0 0 360 160" role="img" style={{borderRadius:14,display:"block"}}>
    <rect width="360" height="160" fill="#e8f5e9"/>
    <rect width="360" height="26" fill="#0a1628"/>
    <text x="180" y="18" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="#ff8c00">Mat Animals / Animais do Tatame</text>
    <line x1="120" y1="26" x2="120" y2="160" stroke="#a5d6a7" strokeWidth="1" strokeDasharray="10,6"/>
    <line x1="240" y1="26" x2="240" y2="160" stroke="#a5d6a7" strokeWidth="1" strokeDasharray="10,6"/>
    <line x1="0" y1="96" x2="360" y2="96" stroke="#a5d6a7" strokeWidth="1" strokeDasharray="10,6"/>
    <text x="60" y="82" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="38">🐸</text>
    <rect x="18" y="88" width="84" height="24" rx="8" fill="#22c55e"/>
    <text x="60" y="100" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">Frog / Sapo — Jump!</text>
    <text x="180" y="82" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="38">🐻</text>
    <rect x="138" y="88" width="84" height="24" rx="8" fill="#92400e"/>
    <text x="180" y="100" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">Bear / Urso — All fours!</text>
    <text x="300" y="82" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="38">🦐</text>
    <rect x="258" y="88" width="84" height="24" rx="8" fill="#f97316"/>
    <text x="300" y="100" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">Shrimp / Camarão</text>
    <text x="60" y="140" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="38">🐊</text>
    <rect x="18" y="148" width="84" height="12" rx="5" fill="#16a34a"/>
    <text x="60" y="158" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="8" fontWeight="900" fill="white">Alligator / Jacaré</text>
    <text x="180" y="140" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="38">🦀</text>
    <rect x="138" y="148" width="84" height="12" rx="5" fill="#dc2626"/>
    <text x="180" y="158" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="8" fontWeight="900" fill="white">Crab / Caranguejo</text>
    <text x="300" y="140" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="38">🐒</text>
    <rect x="258" y="148" width="84" height="12" rx="5" fill="#7c3aed"/>
    <text x="300" y="158" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="8" fontWeight="900" fill="white">Monkey / Macaco</text>
  </svg>
);
 
const IllustrationCorpo = () => (
  <svg width="100%" viewBox="0 0 360 200" role="img" style={{borderRadius:14,display:"block"}}>
    <rect width="360" height="200" fill="#f0f7ff"/>
    <rect width="360" height="26" fill="#0a1628"/>
    <text x="180" y="18" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="#ff8c00">Body Parts / Partes do Corpo</text>
    <ellipse cx="180" cy="194" rx="28" ry="6" fill="#c0d8f0" opacity="0.5"/>
    <rect x="165" y="154" width="11" height="42" rx="5" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"/>
    <rect x="184" y="154" width="11" height="42" rx="5" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"/>
    <ellipse cx="170" cy="194" rx="10" ry="6" fill="#222"/>
    <ellipse cx="189" cy="194" rx="10" ry="6" fill="#222"/>
    <rect x="154" y="80" width="52" height="82" rx="14" fill="#fff" stroke="#e0e0e0" strokeWidth="2"/>
    <path d="M180 84 L166 106 L180 111 L194 106 Z" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="1"/>
    <rect x="152" y="138" width="56" height="8" rx="4" fill="#eee" stroke="#ccc" strokeWidth="1.5"/>
    <path d="M154 90 Q132 100 126 120" stroke="#fff" strokeWidth="13" strokeLinecap="round" fill="none"/>
    <ellipse cx="123" cy="123" rx="10" ry="9" fill="#FFCBA4"/>
    <path d="M206 90 Q228 100 234 120" stroke="#fff" strokeWidth="13" strokeLinecap="round" fill="none"/>
    <ellipse cx="237" cy="123" rx="10" ry="9" fill="#FFCBA4"/>
    <rect x="172" y="60" width="16" height="22" rx="8" fill="#FFCBA4"/>
    <ellipse cx="180" cy="48" rx="28" ry="30" fill="#FFCBA4"/>
    <path d="M154 40 Q156 20 180 18 Q204 20 206 40 Q198 28 180 26 Q162 28 154 40Z" fill="#2c1810"/>
    <ellipse cx="156" cy="44" rx="6" ry="11" fill="#2c1810"/>
    <ellipse cx="204" cy="44" rx="6" ry="11" fill="#2c1810"/>
    <ellipse cx="171" cy="46" rx="6" ry="7" fill="white"/>
    <ellipse cx="189" cy="46" rx="6" ry="7" fill="white"/>
    <ellipse cx="173" cy="48" rx="3.5" ry="4" fill="#2c1810"/>
    <ellipse cx="191" cy="48" rx="3.5" ry="4" fill="#2c1810"/>
    <path d="M170 59 Q180 67 190 59" stroke="#2c1810" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M172 61 Q180 66 188 61 Q180 65 172 61Z" fill="white"/>
    <ellipse cx="163" cy="55" rx="6" ry="4" fill="#ff9999" opacity="0.4"/>
    <ellipse cx="197" cy="55" rx="6" ry="4" fill="#ff9999" opacity="0.4"/>
    {[
      ["Head/Cabeça","#ff8c00",214,36,322,32],
      ["Neck/Pescoço","#22c55e",214,68,322,64],
      ["Shoulder/Ombro","#3b82f6",214,90,322,86],
      ["Hand/Mão","#9333ea",248,124,322,120],
      ["Belly/Barriga","#f97316",214,110,322,106],
      ["Knee/Joelho","#ec4899",214,160,322,156],
      ["Foot/Pé","#0891b2",214,190,322,186],
    ].map(([label,color,lx,ly,tx,ty],i)=>(
      <g key={i}>
        <line x1={lx} y1={ly} x2={tx} y2={ty} stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx={lx} cy={ly} r="3" fill={color}/>
        <rect x={tx+2} y={ty-9} width={label.length*5.2} height="18" rx="5" fill={color}/>
        <text x={tx+4+label.length*2.6} y={ty+4} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="8.5" fontWeight="900" fill="white">{label}</text>
      </g>
    ))}
    <line x1="146" y1="100" x2="72" y2="98" stroke="#ff8c00" strokeWidth="1.5"/>
    <circle cx="146" cy="100" r="3" fill="#ff8c00"/>
    <rect x="8" y="90" width="62" height="18" rx="5" fill="#ff8c00"/>
    <text x="39" y="103" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="8.5" fontWeight="900" fill="white">Arm/Braço</text>
    <line x1="146" y1="166" x2="72" y2="168" stroke="#f97316" strokeWidth="1.5"/>
    <circle cx="146" cy="166" r="3" fill="#f97316"/>
    <rect x="6" y="158" width="64" height="18" rx="5" fill="#f97316"/>
    <text x="38" y="171" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="8.5" fontWeight="900" fill="white">Leg/Perna</text>
  </svg>
);
 
const IllustrationCoresKimono = () => (
  <svg width="100%" viewBox="0 0 360 160" role="img" style={{borderRadius:14,display:"block"}}>
    <rect width="360" height="160" fill="#f8f9ff"/>
    <rect width="360" height="110" fill="#fff"/>
    <rect y="108" width="360" height="52" fill="#1a6fc4"/>
    <line x1="0" y1="108" x2="360" y2="108" stroke="#1558a0" strokeWidth="3"/>
    <rect x="16" y="18" width="328" height="6" rx="3" fill="#8B6914"/>
    {[
      [80,"#f5f5f5","#ddd","WHITE","Branco","#555"],
      [180,"#2563eb","#1d4ed8","BLUE","Azul","white"],
      [280,"#1a1a1a","#000","BLACK","Preto","white"],
    ].map(([cx,fill,stroke,label,sub,tc],i)=>(
      <g key={i}>
        <line x1={cx} y1={24} x2={cx} y2={36} stroke="#888" strokeWidth="2"/>
        <path d={`M${cx-46} 36 L${cx+46} 36 L${cx+46} 100 Q${cx} 110 ${cx-46} 100 Z`} fill={fill} stroke={stroke} strokeWidth="2"/>
        <path d={`M${cx} 40 L${cx-18} 62 L${cx} 68 L${cx+18} 62 Z`} fill={i===0?"#e8e8e8":i===1?"#1d4ed8":"#111"} stroke={i===0?"#ccc":i===1?"#1e40af":"#000"} strokeWidth="1"/>
        <path d={`M${cx-46} 36 Q${cx-70} 48 ${cx-76} 72`} stroke={fill} strokeWidth="18" strokeLinecap="round" fill="none"/>
        <path d={`M${cx+46} 36 Q${cx+70} 48 ${cx+76} 72`} stroke={fill} strokeWidth="18" strokeLinecap="round" fill="none"/>
        <rect x={cx-44} y={80} width={88} height="8" rx="4" fill={i===2?"#cc0000":fill} stroke={stroke} strokeWidth="1.5"/>
        {i===2 && <rect x={cx-44} y={80} width={20} height="8" rx="2" fill="#cc0000"/>}
        <text x={cx} y={124} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="11" fontWeight="900" fill="white">{label}</text>
        <text x={cx} y={138} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="10" fill="white" opacity="0.85">{sub}</text>
      </g>
    ))}
    {[["#f5f5f5","#ccc",20],["#9ca3af","#888",56],["#fbbf24","#f59e0b",92],["#f97316","#ea580c",128],["#22c55e","#16a34a",164],["#2563eb","#1d4ed8",200],["#7c3aed","#6d28d9",236],["#78350f","#92400e",272],["#111","#000",308]].map(([f,s,cx],i)=>(
      <circle key={i} cx={cx} cy={150} r="10" fill={f} stroke={s} strokeWidth="1.5"/>
    ))}
  </svg>
);
 
const IllustrationFaixas = () => {
  const belts = [
    {color:"#f5f5f5",stroke:"#ddd",label:"White",sub:"Branca",tc:"#555"},
    {color:"#9ca3af",stroke:"#888",label:"Grey",sub:"Cinza",tc:"white"},
    {color:"#fbbf24",stroke:"#f59e0b",label:"Yellow",sub:"Amarela",tc:"#78350f"},
    {color:"#f97316",stroke:"#ea580c",label:"Orange",sub:"Laranja",tc:"white"},
    {color:"#22c55e",stroke:"#16a34a",label:"Green",sub:"Verde",tc:"white"},
    {color:"#2563eb",stroke:"#1d4ed8",label:"Blue",sub:"Azul",tc:"white"},
    {color:"#7c3aed",stroke:"#6d28d9",label:"Purple",sub:"Roxa",tc:"white"},
    {color:"#78350f",stroke:"#92400e",label:"Brown",sub:"Marrom",tc:"white"},
    {color:"#111",stroke:"#000",label:"Black",sub:"Preta",tc:"#fbbf24"},
  ];
  return (
    <svg width="100%" viewBox="0 0 360 180" role="img" style={{borderRadius:14,display:"block"}}>
      <rect width="360" height="180" fill="#0a1628"/>
      <rect x="90" y="6" width="180" height="30" rx="10" fill="#ff8c00"/>
      <text x="180" y="18" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="11" fontWeight="900" fill="white">The Belts / As Faixas</text>
      <text x="180" y="30" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="white" opacity="0.9">Brazilian Jiu-Jitsu — 9 belts!</text>
      <rect x="6" y="42" width="348" height="5" rx="2.5" fill="#8B6914"/>
      {belts.map((b,i)=>{
        const bw=34, gap=4, cx=6+i*(bw+gap)+bw/2;
        return (
          <g key={i}>
            <line x1={cx} y1={47} x2={cx} y2={58} stroke="#888" strokeWidth="2"/>
            <rect x={cx-bw/2} y={58} width={bw} height={10} rx="4" fill={b.color} stroke={b.stroke} strokeWidth="1.5"/>
            {b.label==="Black" && <rect x={cx-bw/2} y={58} width={9} height={10} rx="3" fill="#cc0000"/>}
            <rect x={cx-6} y={68} width={12} height={50} rx="3" fill={b.color} stroke={b.stroke} strokeWidth="1.5"/>
            <rect x={cx+3} y={68} width={12} height={50} rx="3" fill={b.color} stroke={b.stroke} strokeWidth="1.5"/>
            <rect x={cx-bw/2} y={128} width={bw} height={36} rx="7" fill={b.label==="Black"?"#111":b.color} stroke={b.label==="Black"?"#fbbf24":b.stroke} strokeWidth={b.label==="Black"?2:1}/>
            <text x={cx} y={141} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="7" fontWeight="900" fill={b.tc}>{b.label}</text>
            <text x={cx} y={152} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="6.5" fill={b.tc} opacity="0.9">{b.sub}</text>
            <text x={cx} y={161} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="6" fill={b.tc} opacity="0.7">{i<5?"Kids":i===8?"Master!":"Adult"}</text>
          </g>
        );
      })}
      <path d="M8 172 L352 172" stroke="#ff8c00" strokeWidth="1.5" strokeDasharray="6,3" fill="none"/>
      <polygon points="352,172 344,168 344,176" fill="#ff8c00"/>
      <text x="180" y="177" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="#ff8c00" fontWeight="700">Your journey / Sua jornada →</text>
    </svg>
  );
};
 
const IllustrationDojo = () => (
  <svg width="100%" viewBox="0 0 360 180" role="img" style={{borderRadius:14,display:"block"}}>
    <rect width="360" height="180" fill="#f5f0e8" stroke="#8B6914" strokeWidth="3"/>
    <rect width="360" height="24" fill="#0a1628"/>
    <text x="180" y="16" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="11" fontWeight="900" fill="#ff8c00">Parts of the Dojo / Partes da Academia</text>
    <rect x="82" y="30" width="196" height="90" rx="5" fill="#1a6fc4" stroke="#1558a0" strokeWidth="2"/>
    <line x1="82" y1="58" x2="278" y2="58" stroke="#1558a0" strokeWidth="1" strokeDasharray="8,4" opacity="0.4"/>
    <line x1="82" y1="88" x2="278" y2="88" stroke="#1558a0" strokeWidth="1" strokeDasharray="8,4" opacity="0.4"/>
    <line x1="140" y1="30" x2="140" y2="120" stroke="#1558a0" strokeWidth="1" strokeDasharray="8,4" opacity="0.4"/>
    <line x1="180" y1="30" x2="180" y2="120" stroke="#1558a0" strokeWidth="1" strokeDasharray="8,4" opacity="0.4"/>
    <line x1="220" y1="30" x2="220" y2="120" stroke="#1558a0" strokeWidth="1" strokeDasharray="8,4" opacity="0.4"/>
    <text x="180" y="72" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="white" opacity="0.5">TATAME</text>
    <text x="180" y="86" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="white" opacity="0.4">The Mat</text>
    <rect x="4" y="30" width="74" height="90" rx="5" fill="#e8d5c4" stroke="#8B6914" strokeWidth="1.5"/>
    <text x="41" y="70" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#78350f" fontWeight="700">Changing</text>
    <text x="41" y="82" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#78350f" fontWeight="700">Room</text>
    <text x="41" y="94" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#92400e">Vestiário</text>
    <rect x="282" y="30" width="74" height="90" rx="5" fill="#d1fae5" stroke="#16a34a" strokeWidth="1.5"/>
    <text x="319" y="70" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#065f46" fontWeight="700">Reception</text>
    <text x="319" y="82" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#065f46">Recepção</text>
    <rect x="4" y="126" width="74" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
    <text x="41" y="147" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="16">💧</text>
    <text x="41" y="164" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="#1e40af" fontWeight="700">Water/Bebedouro</text>
    <rect x="82" y="126" width="196" height="50" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
    <text x="180" y="142" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#78350f" fontWeight="700">Warm-up Area / Aquecimento</text>
    <text x="140" y="163" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="18">🏃</text>
    <text x="180" y="163" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="18">🤸</text>
    <text x="220" y="163" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="18">⚡</text>
    <rect x="282" y="126" width="74" height="50" rx="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
    <text x="319" y="147" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#9d174d" fontWeight="700">Photo Wall</text>
    <text x="319" y="159" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#9d174d">Parede Fotos</text>
    <text x="319" y="170" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="13">🖼️</text>
  </svg>
);
 
const IllustrationComidas = () => (
  <svg width="100%" viewBox="0 0 360 140" role="img" style={{borderRadius:14,display:"block"}}>
    <rect width="360" height="140" fill="#fff8f0"/>
    <rect width="360" height="24" fill="#0a1628"/>
    <text x="180" y="16" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="11" fontWeight="900" fill="#ff8c00">Brazilian Foods / Comidas Brasileiras 🇧🇷</text>
    {[
      {emoji:"🫐",name:"Açaí",sub:"Amazon berry",color:"#7c3aed",x:38},
      {emoji:"🧀",name:"Pão de Queijo",sub:"Cheese bread",color:"#f59e0b",x:106},
      {emoji:"🍫",name:"Brigadeiro",sub:"Choc. truffle",color:"#78350f",x:174},
      {emoji:"🍗",name:"Coxinha",sub:"Chicken fritter",color:"#dc2626",x:242},
      {emoji:"🫘",name:"Feijoada",sub:"Bean stew",color:"#1a1a2e",x:310},
    ].map((f,i)=>(
      <g key={i}>
        <rect x={f.x-32} y={28} width={64} height={88} rx="10" fill="white" stroke={f.color} strokeWidth="2"/>
        <rect x={f.x-32} y={28} width={64} height={24} rx="10" fill={f.color}/>
        <rect x={f.x-32} y={40} width={64} height={12} fill={f.color}/>
        <text x={f.x} y={37} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="7.5" fontWeight="900" fill="white">{f.name}</text>
        <text x={f.x} y={48} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white" opacity="0.9">{f.sub}</text>
        <text x={f.x} y={96} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="34">{f.emoji}</text>
      </g>
    ))}
    <rect x="4" y="122" width="352" height="16" rx="6" fill="#009c3b"/>
    <text x="180" y="134" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="#fedd00">🇧🇷 Eat like a Brazilian! / Coma como um brasileiro!</text>
  </svg>
);
 
const IllustrationPosicoes = () => (
  <svg width="100%" viewBox="0 0 360 160" role="img" style={{borderRadius:14,display:"block"}}>
    <rect width="360" height="160" fill="#f0f4ff"/>
    <rect width="360" height="24" fill="#0a1628"/>
    <text x="180" y="16" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="11" fontWeight="900" fill="#ff8c00">Basic Positions / Posições Básicas</text>
    {[
      {label:"Closed Guard",sub:"Guarda Fechada",emoji:"🛡️",color:"#2563eb",x:46},
      {label:"The Mount",sub:"A Montada",emoji:"🏔️",color:"#dc2626",x:136},
      {label:"Side Control",sub:"Cem Kilos",emoji:"↔️",color:"#16a34a",x:226},
      {label:"Back Control",sub:"As Costas",emoji:"🔙",color:"#7c3aed",x:316},
    ].map((p,i)=>(
      <g key={i}>
        <rect x={p.x-40} y={28} width={80} height={124} rx="12" fill="white" stroke={p.color} strokeWidth="2.5"/>
        <rect x={p.x-40} y={28} width={80} height={28} rx="12" fill={p.color}/>
        <rect x={p.x-40} y={42} width={80} height={14} fill={p.color}/>
        <text x={p.x} y={40} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="8" fontWeight="900" fill="white">{p.label}</text>
        <text x={p.x} y={52} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7.5" fill="white" opacity="0.9">{p.sub}</text>
        <text x={p.x} y={108} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="42">{p.emoji}</text>
        <text x={p.x} y={142} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill={p.color} fontWeight="700">🥋 BJJ</text>
      </g>
    ))}
  </svg>
);
 
const IllustrationSentimentos = () => {
  const feelings = [
    {emoji:"😄",label:"Happy",sub:"Feliz",color:"#fbbf24"},
    {emoji:"😤",label:"Proud",sub:"Orgulhoso",color:"#ff8c00"},
    {emoji:"😎",label:"Confident",sub:"Confiante",color:"#7c3aed"},
    {emoji:"🔥",label:"Motivated",sub:"Motivado",color:"#22c55e"},
    {emoji:"😮‍💨",label:"Tired",sub:"Cansado",color:"#6b7280"},
    {emoji:"😬",label:"Nervous",sub:"Nervoso",color:"#3b82f6"},
    {emoji:"😤",label:"Frustrated",sub:"Frustrado",color:"#f97316"},
    {emoji:"😞",label:"Disappointed",sub:"Desapontado",color:"#dc2626"},
    {emoji:"😨",label:"Scared",sub:"Com medo",color:"#0891b2"},
  ];
  return (
    <svg width="100%" viewBox="0 0 360 190" role="img" style={{borderRadius:14,display:"block"}}>
      <rect width="360" height="190" fill="#fdf4ff"/>
      <rect width="360" height="24" fill="#0a1628"/>
      <text x="180" y="16" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="#ff8c00">Feelings / Sentimentos</text>
      {feelings.map((f,i)=>{
        const col=i%3, row=Math.floor(i/3);
        const x=18+col*116+48, y=30+row*54;
        return (
          <g key={i}>
            <rect x={x-48} y={y} width={96} height={50} rx="10" fill="white" stroke={f.color} strokeWidth="2"/>
            <rect x={x-48} y={y} width={96} height={20} rx="10" fill={f.color}/>
            <rect x={x-48} y={y+10} width={96} height={10} fill={f.color}/>
            <text x={x} y={y+13} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">{f.label}</text>
            <text x={x} y={y+22} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="white" opacity="0.9">{f.sub}</text>
            <text x={x} y={y+44} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="22">{f.emoji}</text>
          </g>
        );
      })}
    </svg>
  );
};
 
const LESSON_ILLUSTRATIONS = {
  "v1l1": IllustrationSaudacoes,
  "v1l2": IllustrationCoresKimono,
  "v1l3": IllustrationCorpo,
  "v1l4": IllustrationAnimais,
  "v2l2": IllustrationFaixas,
  "v2l3": IllustrationDojo,
  "v2l4": IllustrationComidas,
  "v3l1": IllustrationPosicoes,
  "v3l5": IllustrationSentimentos,
};
 
const C = {
  navy: "#0d1f3c",
  navyMid: "#1a3a6e",
  navyLight: "#1e4080",
  orange: "#ff8c00",
  orangeLight: "#ffb347",
  orangeDark: "#e65c00",
  white: "#ffffff",
  muted: "rgba(255,255,255,0.55)",
  faint: "rgba(255,255,255,0.08)",
  border: "rgba(255,255,255,0.1)",
  green: "#22c55e",
  greenDark: "#16a34a",
};
 
const VOLUMES = [
  {
    id: 1, freeAccess: true,
    ageLabel: "5–7 anos", ageLabelEn: "5–7 years",
    belt: "Faixa Branca", beltEn: "White Belt", beltColor: "#e8e8e8",
    tagline: "Primeiros Passos no Tatame", taglineEn: "First Steps on the Mat",
    lessons: [
      {
        id: "v1l1", icon: "👋", title: "Olá, tudo bem?", titleEn: "Hello, how are you?",
        story: {
          title: "João e Maria no Primeiro Dia", titleEn: "João and Maria on the First Day",
          lines: [
            { speaker: "NARRADOR", pt: "Esta é a história de João e Maria no primeiro dia de Jiu-Jitsu.", en: "This is the story of João and Maria on their first day of Jiu-Jitsu." },
            { speaker: "JOÃO", pt: "Olá! Eu me chamo João. Eu tenho seis anos.", en: "Hello! My name is João. I am six years old." },
            { speaker: "MARIA", pt: "Olá! Eu me chamo Maria. Eu tenho sete anos.", en: "Hello! My name is Maria. I am seven years old." },
            { speaker: "PROFESSOR", pt: "Bom dia, crianças! Bem-vindos à academia de Jiu-Jitsu!", en: "Good morning, children! Welcome to the Jiu-Jitsu academy!" },
            { speaker: "PROFESSOR", pt: "Este é o tatame. O tatame é azul e macio.", en: "This is the mat. The mat is blue and soft." },
            { speaker: "PROFESSOR", pt: "No Jiu-Jitsu, nós dizemos 'Oss' para cumprimentar.", en: "In Jiu-Jitsu, we say 'Oss' to greet each other." },
            { speaker: "TODOS", pt: "Oss!", en: "Oss!" },
          ],
        },
        flashcards: [
          { pt: "Olá!", en: "Hello!", icon: "👋" },
          { pt: "Bom dia!", en: "Good morning!", icon: "🌅" },
          { pt: "Boa tarde!", en: "Good afternoon!", icon: "☀️" },
          { pt: "Boa noite!", en: "Good evening!", icon: "🌙" },
          { pt: "Tudo bem?", en: "How are you?", icon: "😊" },
          { pt: "Tchau! Até amanhã!", en: "Bye! See you tomorrow!", icon: "👋" },
          { pt: "Oss!", en: "Oss! (respect)", icon: "🥋" },
          { pt: "Obrigado / Obrigada", en: "Thank you", icon: "🙏" },
        ],
      },
      {
        id: "v1l2", icon: "🎨", title: "Cores do Kimono", titleEn: "Kimono Colors",
        story: {
          title: "Meu Primeiro Kimono", titleEn: "My First Kimono",
          lines: [
            { speaker: "PEDRO", pt: "Olá! Eu me chamo Pedro. Hoje eu ganhei o meu primeiro kimono!", en: "Hello! My name is Pedro. Today I got my first kimono!" },
            { speaker: "PEDRO", pt: "O kimono é branco. A faixa é branca também.", en: "The kimono is white. The belt is also white." },
            { speaker: "PEDRO", pt: "No tatame, todos usam kimono. O tatame é azul e macio.", en: "On the mat, everyone wears a kimono. The mat is blue and soft." },
            { speaker: "PROFESSOR", pt: "Sentem no tatame! Todos dizem: Oss!", en: "Sit on the mat! Everyone say: Oss!" },
          ],
        },
        flashcards: [
          { pt: "Branco", en: "White", icon: "⬜" },
          { pt: "Azul", en: "Blue", icon: "🟦" },
          { pt: "Preto", en: "Black", icon: "⬛" },
          { pt: "Amarelo", en: "Yellow", icon: "🟨" },
          { pt: "Verde", en: "Green", icon: "🟩" },
          { pt: "Vermelho", en: "Red", icon: "🟥" },
          { pt: "Laranja", en: "Orange", icon: "🟧" },
          { pt: "Roxo / Roxa", en: "Purple", icon: "🟪" },
        ],
      },
      {
        id: "v1l3", icon: "🧍", title: "Partes do Corpo", titleEn: "Body Parts", story: null,
        flashcards: [
          { pt: "Cabeça", en: "Head", icon: "🗣️" },
          { pt: "Pescoço", en: "Neck", icon: "🦒" },
          { pt: "Ombro", en: "Shoulder", icon: "💪" },
          { pt: "Braço", en: "Arm", icon: "💪" },
          { pt: "Cotovelo", en: "Elbow", icon: "🦾" },
          { pt: "Pulso", en: "Wrist", icon: "⌚" },
          { pt: "Mão", en: "Hand", icon: "✋" },
          { pt: "Dedos", en: "Fingers", icon: "🤚" },
          { pt: "Costas", en: "Back", icon: "🔙" },
          { pt: "Barriga", en: "Belly", icon: "🫄" },
          { pt: "Perna", en: "Leg", icon: "🦵" },
          { pt: "Joelho", en: "Knee", icon: "🦿" },
          { pt: "Pé", en: "Foot", icon: "🦶" },
        ],
      },
      {
        id: "v1l4", icon: "🐸", title: "Animais do Tatame", titleEn: "Mat Animals", story: null,
        flashcards: [
          { pt: "O Sapo — pule!", en: "The Frog — jump!", icon: "🐸" },
          { pt: "O Urso — ande no chão!", en: "The Bear — walk on all fours!", icon: "🐻" },
          { pt: "O Camarão — mova-se de lado!", en: "The Shrimp — move sideways!", icon: "🦐" },
          { pt: "O Jacaré — rasteje!", en: "The Alligator — crawl!", icon: "🐊" },
          { pt: "O Caranguejo — barriga para cima!", en: "The Crab — belly up!", icon: "🦀" },
          { pt: "O Macaco — pule e balance!", en: "The Monkey — jump and swing!", icon: "🐒" },
        ],
      },
      {
        id: "v1l5", icon: "🔢", title: "Brincando com Números", titleEn: "Playing with Numbers", story: null,
        flashcards: [
          { pt: "Um", en: "One", icon: "1️⃣" },
          { pt: "Dois", en: "Two", icon: "2️⃣" },
          { pt: "Três", en: "Three", icon: "3️⃣" },
          { pt: "Quatro", en: "Four", icon: "4️⃣" },
          { pt: "Cinco", en: "Five", icon: "5️⃣" },
          { pt: "Seis", en: "Six", icon: "6️⃣" },
          { pt: "Sete", en: "Seven", icon: "7️⃣" },
          { pt: "Oito", en: "Eight", icon: "8️⃣" },
          { pt: "Nove", en: "Nine", icon: "9️⃣" },
          { pt: "Dez", en: "Ten", icon: "🔟" },
        ],
      },
    ],
  },
  {
    id: 2, freeAccess: false,
    ageLabel: "8–10 anos", ageLabelEn: "8–10 years",
    belt: "Faixa Cinza", beltEn: "Grey Belt", beltColor: "#9ca3af",
    tagline: "Meu Dia no Tatame", taglineEn: "My Day on the Mat",
    lessons: [
      {
        id: "v2l1", icon: "🙋", title: "Quem sou eu?", titleEn: "Who am I?", story: null,
        flashcards: [
          { pt: "Meu nome é…", en: "My name is…", icon: "🏷️" },
          { pt: "Eu tenho X anos.", en: "I am X years old.", icon: "🎂" },
          { pt: "Eu sou de…", en: "I am from…", icon: "🌍" },
          { pt: "Eu treino Jiu-Jitsu há… anos.", en: "I have trained Jiu-Jitsu for… years.", icon: "📅" },
          { pt: "Eu sou faixa branca.", en: "I am a white belt.", icon: "⬜" },
          { pt: "Minha academia é…", en: "My academy is…", icon: "🏫" },
          { pt: "Prazer em conhecer!", en: "Nice to meet you!", icon: "🤝" },
        ],
      },
      {
        id: "v2l2", icon: "🎽", title: "As Faixas do Jiu-Jitsu", titleEn: "The Belts of Jiu-Jitsu", story: null,
        flashcards: [
          { pt: "Faixa Branca — iniciante", en: "White Belt — beginner", icon: "⬜" },
          { pt: "Faixa Cinza — crianças", en: "Grey Belt — kids", icon: "🩶" },
          { pt: "Faixa Amarela — crianças", en: "Yellow Belt — kids", icon: "🟨" },
          { pt: "Faixa Laranja — crianças", en: "Orange Belt — kids", icon: "🟧" },
          { pt: "Faixa Verde — crianças", en: "Green Belt — kids", icon: "🟩" },
          { pt: "Faixa Azul — adultos", en: "Blue Belt — adults", icon: "🟦" },
          { pt: "Faixa Roxa — adultos", en: "Purple Belt — adults", icon: "🟪" },
          { pt: "Faixa Marrom — adultos", en: "Brown Belt — adults", icon: "🟫" },
          { pt: "Faixa Preta — mestre", en: "Black Belt — master", icon: "⬛" },
        ],
      },
      {
        id: "v2l3", icon: "🏠", title: "Partes do Dojo", titleEn: "Parts of the Dojo", story: null,
        flashcards: [
          { pt: "O tatame", en: "The mat", icon: "🟦" },
          { pt: "A academia / o dojo", en: "The academy / dojo", icon: "🏫" },
          { pt: "O vestiário", en: "The changing room", icon: "👕" },
          { pt: "A área de aquecimento", en: "The warm-up area", icon: "🔥" },
          { pt: "A recepção", en: "The reception", icon: "🪑" },
          { pt: "O bebedouro", en: "The water fountain", icon: "💧" },
          { pt: "A parede de fotos", en: "The photo wall", icon: "🖼️" },
        ],
      },
      {
        id: "v2l4", icon: "🍽️", title: "Comidas Brasileiras", titleEn: "Brazilian Foods", story: null,
        flashcards: [
          { pt: "Açaí", en: "Açaí (Amazon berry bowl)", icon: "🫐" },
          { pt: "Pão de queijo", en: "Cheese bread", icon: "🧀" },
          { pt: "Brigadeiro", en: "Chocolate truffle sweet", icon: "🍫" },
          { pt: "Feijoada", en: "Black bean and pork stew", icon: "🫘" },
          { pt: "Coxinha", en: "Chicken dough fritter", icon: "🍗" },
          { pt: "Tapioca", en: "Cassava pancake", icon: "🥞" },
          { pt: "Acarajé", en: "Fried bean cake (Bahia)", icon: "🍘" },
          { pt: "Pamonha", en: "Corn cake (festas juninas)", icon: "🌽" },
        ],
      },
      {
        id: "v2l5", icon: "💬", title: "Frases em Aula", titleEn: "Phrases in Class", story: null,
        flashcards: [
          { pt: "Vamos começar!", en: "Let's start!", icon: "🚀" },
          { pt: "Boa! / Muito bem!", en: "Good! / Very well!", icon: "👍" },
          { pt: "Isso! Correto!", en: "That's it! Correct!", icon: "✅" },
          { pt: "Mais uma vez!", en: "One more time!", icon: "🔁" },
          { pt: "Devagar!", en: "Slowly!", icon: "🐢" },
          { pt: "Parou!", en: "Stop!", icon: "🛑" },
          { pt: "Troca!", en: "Switch (partners)!", icon: "🔄" },
          { pt: "Formem duplas!", en: "Get into pairs!", icon: "👫" },
        ],
      },
    ],
  },
  {
    id: 3, freeAccess: false,
    ageLabel: "11–13 anos", ageLabelEn: "11–13 years",
    belt: "Faixa Amarela", beltEn: "Yellow Belt", beltColor: "#fbbf24",
    tagline: "Técnicas e Conversação", taglineEn: "Techniques and Conversation",
    lessons: [
      {
        id: "v3l1", icon: "🥋", title: "Posições Básicas", titleEn: "Basic Positions",
        story: {
          title: "Um Dia de Treino", titleEn: "A Training Day",
          lines: [
            { speaker: "LUCAS", pt: "Oi, Pedro! Vamos treinar a passagem de guarda que aprendemos semana passada.", en: "Hi, Pedro! Let's practice the guard pass we learned last week." },
            { speaker: "PEDRO", pt: "Boa ideia! Eu preciso praticar mais essa técnica.", en: "Good idea! I need to practice that technique more." },
            { speaker: "PROFESSOR", pt: "Bom dia, turma! Hoje vamos revisar a passagem de guarda e aprender o triângulo.", en: "Good morning, class! Today we'll review the guard pass and learn the triangle." },
            { speaker: "PROFESSOR", pt: "Formem duplas para treinar. Depois trocamos!", en: "Get into pairs to practice. Then we switch!" },
            { speaker: "LUCAS", pt: "Pedro, se doer, bata três vezes no tatame.", en: "Pedro, if it hurts, tap three times on the mat." },
            { speaker: "TODOS", pt: "Obrigado, professor! Oss!", en: "Thank you, teacher! Oss!" },
          ],
        },
        flashcards: [
          { pt: "A Guarda Fechada", en: "Closed Guard", icon: "🛡️" },
          { pt: "A Meia-Guarda", en: "Half Guard", icon: "⚔️" },
          { pt: "A Guarda Aranha", en: "Spider Guard", icon: "🕷️" },
          { pt: "A Guarda de Ganchos", en: "Butterfly Guard", icon: "🦋" },
          { pt: "A Montada", en: "The Mount", icon: "🏔️" },
          { pt: "Cem Kilos / Lateral", en: "Side Control", icon: "↔️" },
          { pt: "As Costas", en: "Back Control", icon: "🔙" },
          { pt: "O Norte-Sul", en: "North-South", icon: "↕️" },
        ],
      },
      {
        id: "v3l2", icon: "⚡", title: "Técnicas de Finalização", titleEn: "Submission Techniques", story: null,
        flashcards: [
          { pt: "O Mata-Leão (RNC)", en: "Rear Naked Choke", icon: "🦁" },
          { pt: "O Triângulo", en: "Triangle Choke", icon: "🔺" },
          { pt: "A Guilhotina", en: "Guillotine Choke", icon: "⚔️" },
          { pt: "O Armlock / Chave de Braço", en: "Arm Bar", icon: "💪" },
          { pt: "A Kimura", en: "Kimura", icon: "🔄" },
          { pt: "A Americana", en: "Americana", icon: "🔃" },
          { pt: "A Omoplata", en: "Omoplata", icon: "🔁" },
          { pt: "O Estrangulamento Cruzado", en: "Cross Choke", icon: "✝️" },
          { pt: "A Raspagem", en: "Sweep", icon: "🌊" },
          { pt: "A Passagem de Guarda", en: "Guard Pass", icon: "➡️" },
        ],
      },
      {
        id: "v3l3", icon: "🗣️", title: "Expressões do Tatame", titleEn: "Mat Expressions", story: null,
        flashcards: [
          { pt: "Vamo bora!", en: "Let's go!", icon: "🚀" },
          { pt: "Vamos rolar?", en: "Wanna spar?", icon: "🤼" },
          { pt: "Boa! / Que técnica!", en: "Good one! / What a technique!", icon: "🔥" },
          { pt: "Passa, passa!", en: "Pass the guard!", icon: "➡️" },
          { pt: "Aperta!", en: "Squeeze it tight!", icon: "💥" },
          { pt: "Pegar no pesado", en: "Training hard / going hard", icon: "🏋️" },
          { pt: "Bata no tatame!", en: "Tap out! (hit the mat)", icon: "✋" },
          { pt: "Oss! (sim / entendido)", en: "Oss! (yes / understood)", icon: "🙏" },
        ],
      },
      {
        id: "v3l4", icon: "🧠", title: "Diálogo com o Sensei", titleEn: "Dialogue with the Sensei",
        story: {
          title: "Conversa com o Professor", titleEn: "Conversation with the Teacher",
          lines: [
            { speaker: "ALUNO", pt: "Bom dia, Sensei! Posso fazer uma pergunta sobre a técnica de ontem?", en: "Good morning, Sensei! May I ask a question about yesterday's technique?" },
            { speaker: "SENSEI", pt: "Claro, pode perguntar.", en: "Of course, go ahead." },
            { speaker: "ALUNO", pt: "Quando faço o armlock, tenho dificuldade em controlar o braço. O que estou fazendo errado?", en: "When I do the armlock, I have trouble controlling the arm. What am I doing wrong?" },
            { speaker: "SENSEI", pt: "Você precisa segurar o pulso com mais firmeza e usar seus quadris para criar ângulo.", en: "You need to grip the wrist more firmly and use your hips to create an angle." },
            { speaker: "ALUNO", pt: "Obrigado pela ajuda, Sensei. Vou praticar mais.", en: "Thank you for the help, Sensei. I'll practice more." },
            { speaker: "SENSEI", pt: "Boa! Lembre-se: a prática leva à perfeição. Continue treinando com dedicação!", en: "Good! Remember: practice makes perfect. Keep training with dedication!" },
            { speaker: "ALUNO", pt: "Sim, Sensei! Oss!", en: "Yes, Sensei! Oss!" },
          ],
        },
        flashcards: [
          { pt: "Posso fazer uma pergunta?", en: "May I ask a question?", icon: "🙋" },
          { pt: "Não entendi bem.", en: "I didn't quite understand.", icon: "🤔" },
          { pt: "Pode repetir, por favor?", en: "Can you repeat that, please?", icon: "🔁" },
          { pt: "Estou com dificuldade em…", en: "I'm having trouble with…", icon: "😅" },
          { pt: "Sim, Sensei!", en: "Yes, Sensei!", icon: "✅" },
          { pt: "Obrigado, Sensei!", en: "Thank you, Sensei!", icon: "🙏" },
          { pt: "Estou pronto!", en: "I'm ready!", icon: "💪" },
        ],
      },
      {
        id: "v3l5", icon: "😊", title: "Vocabulário de Sentimentos", titleEn: "Feelings Vocabulary", story: null,
        flashcards: [
          { pt: "Feliz / Animado(a)", en: "Happy / Excited", icon: "😄" },
          { pt: "Orgulhoso(a)", en: "Proud", icon: "😤" },
          { pt: "Confiante", en: "Confident", icon: "😎" },
          { pt: "Motivado(a)", en: "Motivated", icon: "🔥" },
          { pt: "Cansado(a)", en: "Tired / Gassed", icon: "😮‍💨" },
          { pt: "Nervoso(a)", en: "Nervous", icon: "😬" },
          { pt: "Frustrado(a)", en: "Frustrated", icon: "😤" },
          { pt: "Com medo", en: "Afraid / Scared", icon: "😨" },
          { pt: "Desapontado(a)", en: "Disappointed", icon: "😞" },
        ],
      },
    ],
  },
  {
    id: 4, freeAccess: false,
    ageLabel: "14–16 anos", ageLabelEn: "14–16 years",
    belt: "Faixa Verde", beltEn: "Green Belt", beltColor: "#22c55e",
    tagline: "Conversação Avançada", taglineEn: "Advanced Conversation",
    lessons: [
      {
        id: "v4l1", icon: "🏆", title: "Diálogos no Campeonato", titleEn: "Dialogues at the Championship",
        story: {
          title: "Campeonato Brasileiro Juvenil", titleEn: "Brazilian Youth Championship",
          lines: [
            { speaker: "RAFAEL", pt: "E aí, Marcos! Em qual categoria você vai competir hoje?", en: "Hey Marcos! What category are you competing in today?" },
            { speaker: "MARCOS", pt: "Estou na categoria juvenil, faixa azul, até 65kg. É meu primeiro campeonato nacional.", en: "I'm in the youth category, blue belt, up to 65kg. It's my first national championship." },
            { speaker: "RAFAEL", pt: "Relaxa, cara. Lembra do que o professor sempre diz: 'Treine duro, compita leve.'", en: "Relax, man. Remember what the coach always says: 'Train hard, compete easy.'" },
            { speaker: "OFICIAL", pt: "Marcos Silva Santos — suba na balança. 64,5kg. Aprovado! Boa sorte!", en: "Marcos Silva Santos — step on the scale. 64.5kg. Approved! Good luck!" },
            { speaker: "MARCOS", pt: "Ganhei por finalização! Triângulo no segundo round!", en: "I won by submission! Triangle choke in the second round!" },
            { speaker: "RAFAEL", pt: "Caramba, parabéns! Sabia que você ia arrasar!", en: "Wow, congratulations! I knew you'd crush it!" },
            { speaker: "MARCOS", pt: "Valeu, amigo! Oss!", en: "Thanks, buddy! Oss!" },
          ],
        },
        flashcards: [
          { pt: "A categoria / divisão", en: "Category / division", icon: "📋" },
          { pt: "A pesagem", en: "Weigh-in", icon: "⚖️" },
          { pt: "O round / a luta", en: "The round / the match", icon: "⏱️" },
          { pt: "Aprovado(a)!", en: "Approved / passed!", icon: "✅" },
          { pt: "Treine duro, compita leve.", en: "Train hard, compete easy.", icon: "💡" },
          { pt: "Você vai arrasar!", en: "You're going to crush it!", icon: "🔥" },
          { pt: "Parabéns!", en: "Congratulations!", icon: "🎉" },
          { pt: "Valeu! / Obrigado!", en: "Thanks!", icon: "🙌" },
        ],
      },
      {
        id: "v4l2", icon: "📚", title: "Vocabulário Técnico Avançado", titleEn: "Advanced Technical Vocabulary", story: null,
        flashcards: [
          { pt: "O Berimbolo", en: "Berimbolo (inversion technique)", icon: "🌀" },
          { pt: "A Guarda De La Riva", en: "De La Riva Guard", icon: "🛡️" },
          { pt: "A Guarda X", en: "X-Guard", icon: "✖️" },
          { pt: "A Chave de Calcanhar", en: "Heel Hook", icon: "🦵" },
          { pt: "A Chave de Panturrilha", en: "Calf Slicer", icon: "🦿" },
          { pt: "O Estrangulamento Relógio", en: "Clock Choke", icon: "🕐" },
          { pt: "A Gravata Peruana", en: "Peruvian Necktie", icon: "👔" },
          { pt: "A Postura", en: "Posture", icon: "🧍" },
          { pt: "A Alavanca", en: "Leverage", icon: "⚙️" },
        ],
      },
      {
        id: "v4l3", icon: "🎯", title: "Descrever Movimentos", titleEn: "Describing Movements", story: null,
        flashcards: [
          { pt: "Girar o quadril", en: "Rotate the hips", icon: "🔄" },
          { pt: "Deslizar a mão", en: "Slide the hand", icon: "👋" },
          { pt: "Puxar a lapela", en: "Pull the lapel", icon: "⬅️" },
          { pt: "Empurrar o joelho", en: "Push the knee", icon: "➡️" },
          { pt: "Elevar o quadril", en: "Raise the hips", icon: "⬆️" },
          { pt: "Controlar o pulso", en: "Control the wrist", icon: "🤝" },
          { pt: "Rapidamente", en: "Quickly", icon: "⚡" },
          { pt: "Com firmeza", en: "Firmly", icon: "💪" },
          { pt: "Suavemente", en: "Smoothly / Gently", icon: "🌊" },
        ],
      },
      {
        id: "v4l4", icon: "🇧🇷", title: "Cultura Brasileira no Tatame", titleEn: "Brazilian Culture on the Mat",
        story: {
          title: "A Filosofia do Jiu-Jitsu Brasileiro", titleEn: "The Philosophy of Brazilian Jiu-Jitsu",
          lines: [
            { speaker: "TEXTO", pt: "O Jiu-Jitsu Brasileiro não é apenas um esporte — é uma filosofia de vida.", en: "Brazilian Jiu-Jitsu is not just a sport — it's a philosophy of life." },
            { speaker: "TEXTO", pt: "'Mínimo esforço, máximo resultado' — a técnica supera a força bruta.", en: "'Minimum effort, maximum result' — technique overcomes brute strength." },
            { speaker: "TEXTO", pt: "No tatame, não importa sua origem ou status. Todos merecem respeito.", en: "On the mat, your origin or status doesn't matter. Everyone deserves respect." },
            { speaker: "TEXTO", pt: "Como dizem os mestres: 'Você não perde; ou você ganha, ou você aprende.'", en: "As the masters say: 'You don't lose; you either win or you learn.'" },
            { speaker: "TEXTO", pt: "O Jiu-Jitsu é um presente do Brasil para o mundo. Oss!", en: "Jiu-Jitsu is Brazil's gift to the world. Oss!" },
          ],
        },
        flashcards: [
          { pt: "A Ginga (movimento fluido)", en: "The Ginga (fluid movement)", icon: "🎵" },
          { pt: "Jeitinho brasileiro", en: "The Brazilian way (creative solutions)", icon: "🇧🇷" },
          { pt: "A camaradagem", en: "Camaraderie", icon: "🤝" },
          { pt: "A família do Jiu", en: "The Jiu-Jitsu family", icon: "👨‍👩‍👧‍👦" },
          { pt: "Festas Juninas", en: "June Festivals", icon: "🎉" },
          { pt: "O Carnaval", en: "Carnival", icon: "🎭" },
          { pt: "Você ganha ou aprende.", en: "You win or you learn.", icon: "💡" },
        ],
      },
      {
        id: "v4l5", icon: "🎤", title: "Apresentação Formal e Informal", titleEn: "Formal and Informal Introduction", story: null,
        flashcards: [
          { pt: "Formal: Bom dia, meu nome é [nome completo].", en: "Formal: Good morning, my name is [full name].", icon: "👔" },
          { pt: "Informal: Oi, eu sou o/a [primeiro nome]!", en: "Informal: Hey, I'm [first name]!", icon: "😄" },
          { pt: "É um prazer conhecê-lo(a).", en: "It's a pleasure to meet you.", icon: "🤝" },
          { pt: "Beleza? Tudo bem?", en: "All good? How's it going?", icon: "😎" },
          { pt: "Sou praticante há [tempo].", en: "I've been training for [time].", icon: "📅" },
          { pt: "Gostaria de expressar minha admiração.", en: "I'd like to express my admiration.", icon: "🌟" },
          { pt: "O senhor / A senhora", en: "Sir / Ma'am (formal address)", icon: "🎩" },
        ],
      },
    ],
  },
];
 
const QUIZ_QUESTIONS = [
  { pt: "Bom dia!", en: "Good morning!", options: ["Good morning!", "Good night!", "Good afternoon!", "Hello!"], answer: 0 },
  { pt: "Tatame", en: "Mat", options: ["Belt", "Mat", "Kimono", "Teacher"], answer: 1 },
  { pt: "Mata-Leão", en: "Rear Naked Choke", options: ["Triangle Choke", "Arm Bar", "Rear Naked Choke", "Guillotine"], answer: 2 },
  { pt: "Raspagem", en: "Sweep", options: ["Throw", "Sweep", "Pass", "Escape"], answer: 1 },
  { pt: "Oss!", en: "Yes / Respect!", options: ["Stop!", "Go!", "Yes / Respect!", "Help!"], answer: 2 },
  { pt: "Obrigado!", en: "Thank you!", options: ["Please!", "Thank you!", "Sorry!", "Excuse me!"], answer: 1 },
  { pt: "A Montada", en: "The Mount", options: ["The Guard", "The Mount", "Side Control", "Back Control"], answer: 1 },
  { pt: "Faixa Preta", en: "Black Belt", options: ["White Belt", "Blue Belt", "Brown Belt", "Black Belt"], answer: 3 },
];
 
function FlashCard({ card, lang }) {
  const [flipped, setFlipped] = useState(false);
  const front = lang === "pt" ? card.pt : card.en;
  const back = lang === "pt" ? card.en : card.pt;
  return (
    <div onClick={() => setFlipped(!flipped)} style={{ perspective: 1000, cursor: "pointer", userSelect: "none", width: "100%" }}>
      <div style={{ position: "relative", width: "100%", paddingBottom: "75%", transformStyle: "preserve-3d", transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        {[false, true].map(isBack => (
          <div key={isBack ? "b" : "f"} style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: isBack ? "rotateY(180deg)" : "none", background: isBack ? `linear-gradient(135deg, ${C.orange}, ${C.orangeDark})` : `linear-gradient(135deg, ${C.navyMid}, #0d1f3c)`, borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, border: isBack ? "none" : `2px solid rgba(255,140,0,0.25)`, boxShadow: "0 8px 32px rgba(0,0,0,0.5)", padding: "24px 20px" }}>
            <span style={{ fontSize: 56, lineHeight: 1 }}>{card.icon}</span>
            <span style={{ color: "#fff", fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 26, textAlign: "center" }}>{isBack ? back : front}</span>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "'Nunito',sans-serif" }}>{isBack ? (lang === "pt" ? "toque para voltar" : "tap to go back") : (lang === "pt" ? "toque para ver tradução" : "tap to see translation")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
 
function StoryView({ story, lang, onClose }) {
  const [line, setLine] = useState(0);
  const lines = story.lines;
  const isLast = line === lines.length - 1;
  const current = lines[line];
  const speakerColor = (current.speaker === "NARRADOR" || current.speaker === "TEXTO") ? C.muted : C.orange;
  return (
    <div style={{ minHeight: "100vh", background: "#0a1628", display: "flex", flexDirection: "column" }}>
      <div style={{ background: `linear-gradient(135deg, ${C.navyMid}, #0d1f3c)`, padding: "20px 20px 24px", borderBottom: `2px solid rgba(255,140,0,0.3)` }}>
        <button onClick={onClose} style={{ background: "none", border: "none", color: C.orange, cursor: "pointer", fontSize: 14, fontFamily: "'Nunito',sans-serif", fontWeight: 700, padding: "0 0 12px", display: "flex", alignItems: "center", gap: 6 }}>
          ← {lang === "pt" ? "Voltar" : "Back"}
        </button>
        <div style={{ color: C.muted, fontSize: 11, fontFamily: "'Nunito',sans-serif", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>📖 {lang === "pt" ? "História" : "Story"}</div>
        <h2 style={{ margin: 0, color: "#fff", fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 18 }}>{lang === "pt" ? story.title : story.titleEn}</h2>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "32px 24px" }}>
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 32 }}>
          {lines.map((_, i) => <div key={i} style={{ width: i === line ? 20 : 8, height: 8, borderRadius: 4, background: i === line ? C.orange : i < line ? "rgba(255,140,0,0.4)" : C.faint, transition: "all 0.3s" }} />)}
        </div>
        <div style={{ background: C.faint, border: `1px solid rgba(255,140,0,0.2)`, borderRadius: 20, padding: "28px 24px", marginBottom: 32, minHeight: 140, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {current.speaker !== "TEXTO" && <div style={{ color: speakerColor, fontSize: 12, fontFamily: "'Nunito',sans-serif", fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>{current.speaker}</div>}
          <p style={{ color: "#fff", fontSize: 18, fontFamily: "'Nunito',sans-serif", fontWeight: 700, lineHeight: 1.5, margin: "0 0 12px" }}>{lang === "pt" ? current.pt : current.en}</p>
          <p style={{ color: C.muted, fontSize: 14, fontFamily: "'Nunito',sans-serif", margin: 0, lineHeight: 1.4, fontStyle: "italic" }}>{lang === "pt" ? current.en : current.pt}</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => setLine(Math.max(0, line - 1))} disabled={line === 0} style={{ flex: 1, padding: "14px", background: line === 0 ? C.faint : "rgba(255,255,255,0.1)", border: "none", borderRadius: 14, color: line === 0 ? "rgba(255,255,255,0.2)" : "#fff", cursor: line === 0 ? "default" : "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 16 }}>←</button>
          <button onClick={() => isLast ? onClose() : setLine(line + 1)} style={{ flex: 2, padding: "14px", background: isLast ? `linear-gradient(135deg, ${C.green}, ${C.greenDark})` : `linear-gradient(135deg, ${C.orange}, ${C.orangeDark})`, border: "none", borderRadius: 14, color: "#fff", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 16, boxShadow: `0 4px 16px ${isLast ? "rgba(34,197,94,0.3)" : "rgba(255,140,0,0.3)"}` }}>
            {isLast ? (lang === "pt" ? "✅ Concluir" : "✅ Done") : (lang === "pt" ? "Próximo →" : "Next →")}
          </button>
        </div>
      </div>
    </div>
  );
}
 
function QuizView({ lang, onClose }) {
  const [q, setQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const current = QUIZ_QUESTIONS[q];
 
  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === current.answer) setScore(s => s + 1);
    setTimeout(() => {
      if (q < QUIZ_QUESTIONS.length - 1) { setQ(q + 1); setSelected(null); }
      else setFinished(true);
    }, 900);
  };
 
  if (finished) return (
    <div style={{ minHeight: "100vh", background: "#0a1628", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, fontFamily: "'Nunito',sans-serif" }}>
      <div style={{ fontSize: 72, marginBottom: 16 }}>{score >= 6 ? "🏆" : score >= 4 ? "🥈" : "🥋"}</div>
      <h2 style={{ color: "#fff", fontWeight: 900, fontSize: 28, margin: "0 0 8px", textAlign: "center" }}>{score >= 6 ? (lang === "pt" ? "Excelente!" : "Excellent!") : lang === "pt" ? "Bom trabalho!" : "Good work!"}</h2>
      <p style={{ color: C.orange, fontSize: 20, fontWeight: 700, margin: "0 0 32px" }}>{score} / {QUIZ_QUESTIONS.length}</p>
      <button onClick={onClose} style={{ padding: "16px 40px", background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDark})`, border: "none", borderRadius: 14, color: "#fff", fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 16, cursor: "pointer" }}>
        {lang === "pt" ? "← Voltar" : "← Back"}
      </button>
    </div>
  );
 
  return (
    <div style={{ minHeight: "100vh", background: "#0a1628", fontFamily: "'Nunito',sans-serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${C.navyMid}, #0d1f3c)`, padding: "20px 20px 24px", borderBottom: `2px solid rgba(255,140,0,0.3)` }}>
        <button onClick={onClose} style={{ background: "none", border: "none", color: C.orange, cursor: "pointer", fontSize: 14, fontWeight: 700, padding: "0 0 12px", display: "flex", alignItems: "center", gap: 6 }}>← {lang === "pt" ? "Sair" : "Exit"}</button>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: C.muted, fontSize: 13 }}>{q + 1} / {QUIZ_QUESTIONS.length}</span>
          <span style={{ color: C.orange, fontWeight: 700 }}>{score} ✓</span>
        </div>
        <div style={{ height: 4, background: C.faint, borderRadius: 4, marginTop: 10, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${((q + 1) / QUIZ_QUESTIONS.length) * 100}%`, background: C.orange, borderRadius: 4, transition: "width 0.3s" }} />
        </div>
      </div>
      <div style={{ padding: "32px 20px" }}>
        <div style={{ background: C.faint, border: `1px solid rgba(255,140,0,0.2)`, borderRadius: 20, padding: "28px 20px", marginBottom: 28, textAlign: "center" }}>
          <div style={{ color: C.muted, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>{lang === "pt" ? "O que significa em inglês?" : "What does this mean in Portuguese?"}</div>
          <div style={{ color: "#fff", fontSize: 30, fontWeight: 900 }}>{lang === "pt" ? current.pt : current.en}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {current.options.map((opt, i) => {
            const isCorrect = i === current.answer;
            const isSelected = i === selected;
            let bg = C.faint, border = C.border;
            if (selected !== null) {
              if (isCorrect) { bg = "rgba(34,197,94,0.2)"; border = "rgba(34,197,94,0.6)"; }
              else if (isSelected) { bg = "rgba(239,68,68,0.2)"; border = "rgba(239,68,68,0.6)"; }
            }
            return (
              <button key={i} onClick={() => handleAnswer(i)} style={{ padding: "16px 20px", background: bg, border: `2px solid ${border}`, borderRadius: 14, color: "#fff", cursor: selected === null ? "pointer" : "default", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 16, textAlign: "left", transition: "all 0.2s" }}>
                {selected !== null && isCorrect && "✅ "}{selected !== null && isSelected && !isCorrect && "❌ "}{opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
 
function LessonView({ lesson, lang, onBack, onComplete }) {
  const [tab, setTab] = useState(lesson.story ? "story" : "flashcards");
  const [cardIdx, setCardIdx] = useState(0);
 
  if (tab === "story" && lesson.story) {
    return <StoryView story={lesson.story} lang={lang} onClose={() => setTab("flashcards")} />;
  }
 
  const cards = lesson.flashcards;
  const isLast = cardIdx === cards.length - 1;
 
  return (
    <div style={{ minHeight: "100vh", background: "#0a1628", fontFamily: "'Nunito',sans-serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${C.navyMid}, #0d1f3c)`, padding: "20px 20px 0", borderBottom: `2px solid rgba(255,140,0,0.3)` }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: C.orange, cursor: "pointer", fontSize: 14, fontWeight: 700, padding: "0 0 12px", display: "flex", alignItems: "center", gap: 6 }}>← {lang === "pt" ? "Voltar" : "Back"}</button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 20 }}>
          <span style={{ fontSize: 32 }}>{lesson.icon}</span>
          <div>
            <h2 style={{ margin: 0, color: "#fff", fontWeight: 900, fontSize: 19 }}>{lang === "pt" ? lesson.title : lesson.titleEn}</h2>
            <div style={{ color: C.muted, fontSize: 12, marginTop: 3 }}>{cards.length} flashcards</div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {lesson.story && <button onClick={() => setTab("story")} style={{ flex: 1, padding: "12px 0", background: tab === "story" ? C.orange : "transparent", border: "none", color: tab === "story" ? "#fff" : C.muted, cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, borderRadius: "8px 8px 0 0" }}>📖 {lang === "pt" ? "História" : "Story"}</button>}
          <button onClick={() => setTab("flashcards")} style={{ flex: 1, padding: "12px 0", background: tab === "flashcards" ? C.orange : "transparent", border: "none", color: tab === "flashcards" ? "#fff" : C.muted, cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, borderRadius: "8px 8px 0 0" }}>🃏 Flashcards</button>
        </div>
      </div>
      <div style={{ padding: 20 }}>
        {/* Illustration */}
        {(() => { const Illus = LESSON_ILLUSTRATIONS[lesson.id]; return Illus ? <div style={{ marginBottom: 16, borderRadius: 16, overflow: "hidden" }}><Illus /></div> : null; })()}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ color: C.muted, fontSize: 15 }}>{cardIdx + 1} / {cards.length}</span>
          <span style={{ color: C.orange, fontSize: 15, fontWeight: 700 }}>{Math.round(((cardIdx + 1) / cards.length) * 100)}%</span>
        </div>
        <div style={{ height: 6, background: C.faint, borderRadius: 4, marginBottom: 24, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${((cardIdx + 1) / cards.length) * 100}%`, background: C.orange, borderRadius: 4, transition: "width 0.3s" }} />
        </div>
        <FlashCard key={cardIdx} card={cards[cardIdx]} lang={lang} />
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button onClick={() => setCardIdx(Math.max(0, cardIdx - 1))} disabled={cardIdx === 0} style={{ flex: 1, padding: "16px", background: cardIdx === 0 ? C.faint : "rgba(255,255,255,0.1)", border: "none", borderRadius: 14, color: cardIdx === 0 ? "rgba(255,255,255,0.2)" : "#fff", cursor: cardIdx === 0 ? "default" : "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 18 }}>←</button>
          {!isLast
            ? <button onClick={() => setCardIdx(cardIdx + 1)} style={{ flex: 2, padding: "16px", background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDark})`, border: "none", borderRadius: 14, color: "#fff", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 18, boxShadow: "0 4px 16px rgba(255,140,0,0.3)" }}>{lang === "pt" ? "Próximo →" : "Next →"}</button>
            : <button onClick={() => { onComplete(); onBack(); }} style={{ flex: 2, padding: "16px", background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, border: "none", borderRadius: 14, color: "#fff", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 18, boxShadow: "0 4px 16px rgba(34,197,94,0.3)" }}>{lang === "pt" ? "✅ Concluir!" : "✅ Complete!"}</button>
          }
        </div>
        <h3 style={{ color: C.orange, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, margin: "28px 0 12px" }}>{lang === "pt" ? "Todas as palavras" : "All words"}</h3>
        {cards.map((c, i) => (
          <div key={i} onClick={() => setCardIdx(i)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: i === cardIdx ? "rgba(255,140,0,0.12)" : C.faint, border: `1px solid ${i === cardIdx ? "rgba(255,140,0,0.3)" : C.border}`, borderRadius: 12, padding: "14px 16px", marginBottom: 10, cursor: "pointer" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 24 }}>{c.icon}</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>{c.pt}</span>
            </span>
            <span style={{ color: C.orange, fontSize: 15, fontWeight: 600 }}>{c.en}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
 
function VolumeView({ volume, lang, completed, onComplete, onBack, onQuiz }) {
  const [activeLesson, setActiveLesson] = useState(null);
  if (activeLesson !== null) {
    return <LessonView lesson={volume.lessons[activeLesson]} lang={lang} onBack={() => setActiveLesson(null)} onComplete={() => onComplete(volume.id, activeLesson)} />;
  }
  const done = volume.lessons.filter((_, i) => completed.has(`${volume.id}-${i}`)).length;
  const pct = Math.round((done / volume.lessons.length) * 100);
  return (
    <div style={{ minHeight: "100vh", background: "#0a1628", fontFamily: "'Nunito',sans-serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${C.navyMid}, #0d1f3c)`, padding: "20px 20px 24px", borderBottom: `2px solid rgba(255,140,0,0.3)` }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: C.orange, cursor: "pointer", fontSize: 14, fontWeight: 700, padding: "0 0 16px", display: "flex", alignItems: "center", gap: 6 }}>← {lang === "pt" ? "Volumes" : "Volumes"}</button>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <div style={{ width: 52, height: 14, background: volume.beltColor, borderRadius: 4, border: "2px solid rgba(0,0,0,0.2)", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Volume {volume.id} · {lang === "pt" ? volume.belt : volume.beltEn}</div>
            <div style={{ fontSize: 21, fontWeight: 900, color: "#fff" }}>{lang === "pt" ? volume.tagline : volume.taglineEn}</div>
            <div style={{ fontSize: 13, color: C.muted }}>{lang === "pt" ? volume.ageLabel : volume.ageLabelEn}</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12, color: C.muted }}>
          <span>{lang === "pt" ? `${done} de ${volume.lessons.length} lições` : `${done} of ${volume.lessons.length} lessons`}</span>
          <span style={{ color: C.orange, fontWeight: 700 }}>{pct}%</span>
        </div>
        <div style={{ height: 6, background: C.faint, borderRadius: 4, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${C.orange}, ${C.orangeLight})`, borderRadius: 4, transition: "width 0.5s" }} />
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {volume.lessons.map((lesson, idx) => {
            const isDone = completed.has(`${volume.id}-${idx}`);
            return (
              <button key={lesson.id} onClick={() => setActiveLesson(idx)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px", background: isDone ? "rgba(34,197,94,0.07)" : C.faint, border: `1px solid ${isDone ? "rgba(34,197,94,0.25)" : C.border}`, borderRadius: 16, cursor: "pointer", textAlign: "left", width: "100%" }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{lesson.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, fontFamily: "'Nunito',sans-serif" }}>{lang === "pt" ? lesson.title : lesson.titleEn}</div>
                  <div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>{lesson.story ? (lang === "pt" ? "📖 história + " : "📖 story + ") : ""}{lesson.flashcards.length} flashcards</div>
                </div>
                <span style={{ fontSize: 18, color: isDone ? C.green : C.muted, flexShrink: 0 }}>{isDone ? "✅" : "→"}</span>
              </button>
            );
          })}
        </div>
        <button onClick={onQuiz} style={{ width: "100%", marginTop: 20, padding: "16px", background: `linear-gradient(135deg, ${C.navyLight}, ${C.navyMid})`, border: `1px solid rgba(255,140,0,0.3)`, borderRadius: 16, color: "#fff", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          🧠 {lang === "pt" ? "Testar conhecimento (Quiz)" : "Test your knowledge (Quiz)"}
        </button>
      </div>
    </div>
  );
}
 
export default function JiuTalkApp() {
  const [lang, setLang] = useState("pt");
  const [screen, setScreen] = useState("home");
  const [activeVolumeIdx, setActiveVolumeIdx] = useState(null);
  const [completed, setCompleted] = useState(new Set());
  const [showPaywall, setShowPaywall] = useState(false);
 
  const handleVolumeSelect = (idx) => {
    if (!VOLUMES[idx].freeAccess) { setShowPaywall(true); return; }
    setActiveVolumeIdx(idx);
    setScreen("volume");
  };
 
  const handleComplete = (volId, lessonIdx) => {
    setCompleted(prev => new Set([...prev, `${volId}-${lessonIdx}`]));
  };
 
  const totalLessons = VOLUMES.reduce((s, v) => s + v.lessons.length, 0);
  const totalDone = completed.size;
 
  if (screen === "quiz") return <QuizView lang={lang} onClose={() => setScreen("home")} />;
  if (screen === "volume" && activeVolumeIdx !== null) {
    return <VolumeView volume={VOLUMES[activeVolumeIdx]} lang={lang} completed={completed} onComplete={handleComplete} onBack={() => setScreen("home")} onQuiz={() => setScreen("quiz")} />;
  }
 
  return (
    <div style={{ minHeight: "100vh", background: "#0a1628", fontFamily: "'Nunito',sans-serif" }}>
      {showPaywall && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 100, display: "flex", alignItems: "flex-end" }} onClick={() => setShowPaywall(false)}>
          <div style={{ background: C.navyMid, borderRadius: "24px 24px 0 0", padding: "28px 24px 40px", width: "100%", border: `2px solid rgba(255,140,0,0.3)` }} onClick={e => e.stopPropagation()}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>🔓</div>
              <h3 style={{ color: "#fff", fontWeight: 900, fontSize: 22, margin: "0 0 8px" }}>{lang === "pt" ? "Conteúdo Premium" : "Premium Content"}</h3>
              <p style={{ color: C.muted, fontSize: 14, margin: 0, lineHeight: 1.5 }}>{lang === "pt" ? "Os volumes 2, 3 e 4 fazem parte do plano premium." : "Volumes 2, 3 and 4 are part of the premium plan."}</p>
            </div>
            <div style={{ background: C.faint, borderRadius: 16, padding: "16px 20px", marginBottom: 16, border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>{lang === "pt" ? "Plano Mensal" : "Monthly Plan"}</div>
                  <div style={{ color: C.muted, fontSize: 13 }}>{lang === "pt" ? "Acesso completo" : "Full access"}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: C.orange, fontWeight: 900, fontSize: 22 }}>R$19<span style={{ fontSize: 13 }}>/mês</span></div>
                  <div style={{ color: C.muted, fontSize: 12 }}>$5/mo</div>
                </div>
              </div>
            </div>
            <a href="https://hotmart.com/product/jiutalk-pro" target="_blank" rel="noreferrer" style={{ display: "block", width: "100%", padding: "16px", background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDark})`, border: "none", borderRadius: 14, color: "#fff", fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 16, cursor: "pointer", boxShadow: "0 4px 20px rgba(255,140,0,0.4)", textAlign: "center", textDecoration: "none" }}>
              {lang === "pt" ? "🚀 Assinar agora — Hotmart" : "🚀 Subscribe now — Hotmart"}
            </a>
            <button onClick={() => setShowPaywall(false)} style={{ width: "100%", marginTop: 12, padding: "14px", background: "transparent", border: "none", color: C.muted, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              {lang === "pt" ? "Continuar com o plano gratuito" : "Continue with the free plan"}
            </button>
          </div>
        </div>
      )}
 
      <div style={{ background: `linear-gradient(160deg, #0d1f3c 0%, ${C.navyMid} 60%, #0d1f3c 100%)`, padding: "32px 20px 28px", borderBottom: `2px solid rgba(255,140,0,0.35)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -50, right: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,140,0,0.06)" }} />
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 24 }}>
          <div style={{ display: "flex", background: C.faint, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.border}` }}>
            {["pt", "en"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ padding: "8px 16px", background: lang === l ? C.orange : "transparent", border: "none", color: lang === l ? "#fff" : C.muted, cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, transition: "all 0.2s" }}>
                {l === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <img src="/logo.png" alt="JiuTalk" style={{ width: 58, height: 58, borderRadius: 16, objectFit: "cover", boxShadow: "0 4px 20px rgba(255,140,0,0.45)", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", letterSpacing: -1, lineHeight: 1 }}>JiuTalk</div>
            <div style={{ fontSize: 12, color: C.orange, fontWeight: 800, letterSpacing: 0.5, marginTop: 4, fontStyle: "italic" }}>The language of Jiu-Jitsu.</div>
          </div>
        </div>
        <p style={{ color: C.muted, fontSize: 14, margin: "0 0 20px", lineHeight: 1.6 }}>
          {lang === "pt" ? "Aprenda português através do esporte que você já ama. Para crianças de 5 a 16 anos. 🇧🇷🥋" : "Learn Portuguese through the sport you already love. For kids aged 5 to 16. 🇧🇷🥋"}
        </p>
        {totalDone > 0 && (
          <div style={{ background: C.faint, borderRadius: 12, padding: "12px 16px", border: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12, color: C.muted }}>
              <span>{lang === "pt" ? "Progresso geral" : "Overall progress"}</span>
              <span style={{ color: C.orange, fontWeight: 700 }}>{totalDone}/{totalLessons}</span>
            </div>
            <div style={{ height: 6, background: C.faint, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${Math.round((totalDone / totalLessons) * 100)}%`, background: `linear-gradient(90deg, ${C.orange}, ${C.orangeLight})`, borderRadius: 4, transition: "width 0.5s" }} />
            </div>
          </div>
        )}
      </div>
 
      <div style={{ padding: 20 }}>
        <h3 style={{ color: C.orange, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, margin: "0 0 16px" }}>
          {lang === "pt" ? "Escolha seu nível" : "Choose your level"}
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {VOLUMES.map((vol, idx) => {
            const done = vol.lessons.filter((_, i) => completed.has(`${vol.id}-${i}`)).length;
            const pct = Math.round((done / vol.lessons.length) * 100);
            return (
              <button key={vol.id} onClick={() => handleVolumeSelect(idx)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 16px", background: C.faint, border: `1px solid ${vol.freeAccess ? "rgba(255,140,0,0.2)" : C.border}`, borderRadius: 18, cursor: "pointer", textAlign: "left", width: "100%", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: vol.beltColor, borderRadius: "18px 0 0 18px" }} />
                <div style={{ width: 50, height: 14, background: vol.beltColor, borderRadius: 4, border: "2px solid rgba(0,0,0,0.15)", flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: 15, fontFamily: "'Nunito',sans-serif" }}>{lang === "pt" ? vol.tagline : vol.taglineEn}</span>
                    {vol.freeAccess
                      ? <span style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.4)", borderRadius: 6, padding: "1px 7px", fontSize: 10, color: C.green, fontWeight: 700 }}>FREE</span>
                      : <span style={{ background: "rgba(255,140,0,0.12)", border: `1px solid rgba(255,140,0,0.3)`, borderRadius: 6, padding: "1px 7px", fontSize: 10, color: C.orange, fontWeight: 700 }}>🔒 PRO</span>
                    }
                  </div>
                  <div style={{ color: C.muted, fontSize: 12, marginBottom: 8 }}>{lang === "pt" ? `${vol.ageLabel} · ${vol.belt}` : `${vol.ageLabelEn} · ${vol.beltEn}`} · {vol.lessons.length} {lang === "pt" ? "lições" : "lessons"}</div>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: pct === 100 ? C.green : vol.beltColor, borderRadius: 4, transition: "width 0.5s" }} />
                  </div>
                  {done > 0 && <div style={{ color: C.muted, fontSize: 11, marginTop: 4 }}>{done}/{vol.lessons.length} {lang === "pt" ? "concluídas" : "completed"}</div>}
                </div>
                <span style={{ color: vol.freeAccess ? C.orange : C.muted, fontSize: 18, flexShrink: 0 }}>→</span>
              </button>
            );
          })}
        </div>
        <button onClick={() => setScreen("quiz")} style={{ width: "100%", marginTop: 20, padding: "16px", background: `linear-gradient(135deg, #1e3a6e, #0f2340)`, border: `1px solid rgba(255,140,0,0.25)`, borderRadius: 16, color: "#fff", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          🧠 {lang === "pt" ? "Quiz Rápido — Teste seu vocabulário!" : "Quick Quiz — Test your vocabulary!"}
        </button>
        <div style={{ textAlign: "center", padding: "32px 0 16px", color: "rgba(255,255,255,0.18)", fontSize: 11 }}>JiuTalk® by Daniela Mendes</div>
      </div>
    </div>
  );
}
 
