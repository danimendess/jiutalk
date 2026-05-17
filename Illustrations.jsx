// JiuTalk Illustrations — one SVG per lesson
// Each returns an inline SVG, no external files needed
 
export function IllustrationSaudacoes() {
  return (
    <svg width="100%" viewBox="0 0 360 220" role="img" style={{borderRadius:16,display:"block"}}>
      <title>Criança chegando na academia</title>
      <rect width="360" height="220" fill="#f8f9ff"/>
      <rect width="360" height="140" fill="#ffffff"/>
      <rect y="132" width="360" height="88" fill="#1a6fc4"/>
      <line x1="0" y1="132" x2="360" y2="132" stroke="#1558a0" strokeWidth="3"/>
      <line x1="0" y1="162" x2="360" y2="162" stroke="#1558a0" strokeWidth="1" strokeDasharray="16,8" opacity="0.4"/>
      <line x1="0" y1="192" x2="360" y2="192" stroke="#1558a0" strokeWidth="1" strokeDasharray="16,8" opacity="0.4"/>
      <line x1="60" y1="132" x2="60" y2="220" stroke="#1558a0" strokeWidth="1" strokeDasharray="16,8" opacity="0.4"/>
      <line x1="140" y1="132" x2="140" y2="220" stroke="#1558a0" strokeWidth="1" strokeDasharray="16,8" opacity="0.4"/>
      <line x1="220" y1="132" x2="220" y2="220" stroke="#1558a0" strokeWidth="1" strokeDasharray="16,8" opacity="0.4"/>
      <line x1="300" y1="132" x2="300" y2="220" stroke="#1558a0" strokeWidth="1" strokeDasharray="16,8" opacity="0.4"/>
      {/* Shadow */}
      <ellipse cx="180" cy="138" rx="36" ry="8" fill="#1558a0" opacity="0.3"/>
      {/* Legs */}
      <rect x="163" y="100" width="14" height="40" rx="7" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"/>
      <rect x="183" y="100" width="14" height="40" rx="7" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"/>
      <ellipse cx="170" cy="138" rx="11" ry="7" fill="#222"/>
      <ellipse cx="190" cy="138" rx="11" ry="7" fill="#222"/>
      {/* Gi */}
      <rect x="152" y="58" width="56" height="52" rx="14" fill="#ffffff" stroke="#e8e8e8" strokeWidth="2"/>
      <path d="M180 62 L165 82 L180 87 L195 82 Z" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="1"/>
      {/* White belt */}
      <rect x="150" y="90" width="60" height="8" rx="4" fill="#f0f0f0" stroke="#ccc" strokeWidth="1.5"/>
      {/* Left arm waving */}
      <path d="M152 68 Q128 54 120 36" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <ellipse cx="117" cy="32" rx="12" ry="11" fill="#FFCBA4"/>
      <line x1="110" y1="24" x2="107" y2="16" stroke="#FFCBA4" strokeWidth="6" strokeLinecap="round"/>
      <line x1="117" y1="22" x2="116" y2="13" stroke="#FFCBA4" strokeWidth="6" strokeLinecap="round"/>
      <line x1="124" y1="24" x2="124" y2="15" stroke="#FFCBA4" strokeWidth="6" strokeLinecap="round"/>
      {/* Right arm */}
      <path d="M208 70 Q222 85 220 100" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" fill="none"/>
      {/* Neck */}
      <rect x="172" y="42" width="16" height="20" rx="8" fill="#FFCBA4"/>
      {/* Head */}
      <ellipse cx="180" cy="30" rx="28" ry="30" fill="#FFCBA4"/>
      {/* Hair */}
      <path d="M154 22 Q156 4 180 2 Q204 4 206 22 Q196 10 180 8 Q164 10 154 22Z" fill="#2c1810"/>
      <ellipse cx="156" cy="25" rx="8" ry="13" fill="#2c1810"/>
      <ellipse cx="204" cy="25" rx="8" ry="13" fill="#2c1810"/>
      {/* Eyes */}
      <ellipse cx="171" cy="28" rx="7" ry="8" fill="white"/>
      <ellipse cx="189" cy="28" rx="7" ry="8" fill="white"/>
      <ellipse cx="173" cy="30" rx="4" ry="5" fill="#2c1810"/>
      <ellipse cx="191" cy="30" rx="4" ry="5" fill="#2c1810"/>
      <ellipse cx="175" cy="28" rx="1.5" ry="1.5" fill="white"/>
      <ellipse cx="193" cy="28" rx="1.5" ry="1.5" fill="white"/>
      {/* Brows */}
      <path d="M165 20 Q171 16 177 20" stroke="#2c1810" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M183 20 Q189 16 195 20" stroke="#2c1810" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M170 40 Q180 50 190 40" stroke="#2c1810" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M172 42 Q180 48 188 42 Q180 47 172 42Z" fill="white"/>
      {/* Cheeks */}
      <ellipse cx="162" cy="36" rx="8" ry="5" fill="#ff9999" opacity="0.4"/>
      <ellipse cx="198" cy="36" rx="8" ry="5" fill="#ff9999" opacity="0.4"/>
      {/* Speech bubble */}
      <rect x="210" y="8" width="90" height="44" rx="12" fill="#ff8c00"/>
      <path d="M218 48 L206 60 L230 48Z" fill="#ff8c00"/>
      <text x="255" y="26" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="16" fontWeight="900" fill="white">OSS!</text>
      <text x="255" y="42" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="11" fill="white" opacity="0.9">Hello! / Olá!</text>
    </svg>
  );
}
 
export function IllustrationCoresKimono() {
  return (
    <svg width="100%" viewBox="0 0 360 220" role="img" style={{borderRadius:16,display:"block"}}>
      <title>Cores do kimono</title>
      <rect width="360" height="220" fill="#f8f9ff"/>
      <rect width="360" height="130" fill="#fff"/>
      <rect y="120" width="360" height="100" fill="#1a6fc4"/>
      <line x1="0" y1="120" x2="360" y2="120" stroke="#1558a0" strokeWidth="3"/>
      {/* Rod */}
      <rect x="20" y="28" width="320" height="6" rx="3" fill="#8B6914"/>
      {/* WHITE GI */}
      <line x1="80" y1="34" x2="80" y2="50" stroke="#888" strokeWidth="2"/>
      <path d="M44 50 L116 50 L116 118 Q80 128 44 118Z" fill="#f5f5f5" stroke="#ddd" strokeWidth="2"/>
      <path d="M80 50 L62 78 L80 85 L98 78Z" fill="#e8e8e8" stroke="#ccc" strokeWidth="1"/>
      <path d="M44 50 Q22 62 16 85" stroke="#f5f5f5" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <path d="M116 50 Q138 62 144 85" stroke="#f5f5f5" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <rect x="42" y="94" width="76" height="8" rx="4" fill="#eee" stroke="#ccc" strokeWidth="1.5"/>
      <text x="80" y="136" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="10" fontWeight="900" fill="white">WHITE</text>
      <text x="80" y="149" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="white" opacity="0.8">Branco</text>
      {/* BLUE GI */}
      <line x1="180" y1="34" x2="180" y2="50" stroke="#888" strokeWidth="2"/>
      <path d="M144 50 L216 50 L216 118 Q180 128 144 118Z" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2"/>
      <path d="M180 50 L162 78 L180 85 L198 78Z" fill="#1d4ed8" stroke="#1e40af" strokeWidth="1"/>
      <path d="M144 50 Q122 62 116 85" stroke="#2563eb" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <path d="M216 50 Q238 62 244 85" stroke="#2563eb" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <rect x="142" y="94" width="76" height="8" rx="4" fill="#3b82f6" stroke="#2563eb" strokeWidth="1.5"/>
      <text x="180" y="136" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="10" fontWeight="900" fill="white">BLUE</text>
      <text x="180" y="149" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="white" opacity="0.8">Azul</text>
      {/* BLACK GI */}
      <line x1="280" y1="34" x2="280" y2="50" stroke="#888" strokeWidth="2"/>
      <path d="M244 50 L316 50 L316 118 Q280 128 244 118Z" fill="#1a1a1a" stroke="#000" strokeWidth="2"/>
      <path d="M280 50 L262 78 L280 85 L298 78Z" fill="#111" stroke="#000" strokeWidth="1"/>
      <path d="M244 50 Q222 62 216 85" stroke="#1a1a1a" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <path d="M316 50 Q338 62 344 85" stroke="#1a1a1a" strokeWidth="18" strokeLinecap="round" fill="none"/>
      <rect x="242" y="94" width="76" height="8" rx="4" fill="#111" stroke="#000" strokeWidth="1.5"/>
      <rect x="242" y="94" width="18" height="8" rx="2" fill="#cc0000"/>
      <text x="280" y="136" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="10" fontWeight="900" fill="white">BLACK</text>
      <text x="280" y="149" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="white" opacity="0.8">Preto</text>
      {/* Color dots bottom */}
      {[["#f5f5f5","#ccc",42],["#9ca3af","#888",82],["#fbbf24","#f59e0b",122],["#f97316","#ea580c",162],["#16a34a","#15803d",202],["#2563eb","#1d4ed8",242],["#7c3aed","#6d28d9",282],["#111","#000",322]].map(([fill,stroke,cx],i)=>(
        <circle key={i} cx={cx} cy={185} r="14" fill={fill} stroke={stroke} strokeWidth="1.5"/>
      ))}
      <text x="42" y="207" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white">White</text>
      <text x="82" y="207" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white">Grey</text>
      <text x="122" y="207" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white">Yellow</text>
      <text x="162" y="207" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white">Orange</text>
      <text x="202" y="207" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white">Green</text>
      <text x="242" y="207" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white">Blue</text>
      <text x="282" y="207" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white">Purple</text>
      <text x="322" y="207" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white">Black</text>
    </svg>
  );
}
 
export function IllustrationCorpo() {
  return (
    <svg width="100%" viewBox="0 0 360 280" role="img" style={{borderRadius:16,display:"block"}}>
      <title>Partes do corpo</title>
      <rect width="360" height="280" fill="#f0f7ff"/>
      {/* Kid */}
      <ellipse cx="180" cy="268" rx="32" ry="7" fill="#c0d8f0" opacity="0.5"/>
      <rect x="163" y="218" width="13" height="52" rx="6" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"/>
      <rect x="184" y="218" width="13" height="52" rx="6" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"/>
      <ellipse cx="169" cy="268" rx="11" ry="7" fill="#222"/>
      <ellipse cx="190" cy="268" rx="11" ry="7" fill="#222"/>
      <rect x="152" y="112" width="56" height="116" rx="16" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2"/>
      <path d="M180 116 L164 142 L180 148 L196 142 Z" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="1"/>
      <rect x="150" y="192" width="60" height="9" rx="4" fill="#eee" stroke="#ccc" strokeWidth="1.5"/>
      <path d="M152 122 Q128 132 122 156" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <ellipse cx="119" cy="160" rx="11" ry="10" fill="#FFCBA4"/>
      <path d="M208 122 Q232 132 238 156" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <ellipse cx="241" cy="160" rx="11" ry="10" fill="#FFCBA4"/>
      <rect x="171" y="92" width="18" height="24" rx="9" fill="#FFCBA4"/>
      <ellipse cx="180" cy="72" rx="32" ry="34" fill="#FFCBA4"/>
      <path d="M150 62 Q152 38 180 36 Q208 38 210 62 Q200 48 180 46 Q160 48 150 62Z" fill="#2c1810"/>
      <ellipse cx="152" cy="66" rx="7" ry="12" fill="#2c1810"/>
      <ellipse cx="208" cy="66" rx="7" ry="12" fill="#2c1810"/>
      <ellipse cx="170" cy="70" rx="7" ry="8" fill="white"/>
      <ellipse cx="190" cy="70" rx="7" ry="8" fill="white"/>
      <ellipse cx="172" cy="72" rx="4" ry="5" fill="#2c1810"/>
      <ellipse cx="192" cy="72" rx="4" ry="5" fill="#2c1810"/>
      <ellipse cx="174" cy="70" rx="1.5" ry="1.5" fill="white"/>
      <ellipse cx="194" cy="70" rx="1.5" ry="1.5" fill="white"/>
      <path d="M170 84 Q180 92 190 84" stroke="#2c1810" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M172 86 Q180 91 188 86 Q180 90 172 86Z" fill="white"/>
      <ellipse cx="162" cy="80" rx="7" ry="5" fill="#ff9999" opacity="0.4"/>
      <ellipse cx="198" cy="80" rx="7" ry="5" fill="#ff9999" opacity="0.4"/>
      {/* Labels right */}
      {[
        ["Head / Cabeça","#ff8c00",220,48,360,52],
        ["Neck / Pescoço","#22c55e",220,98,360,102],
        ["Shoulder / Ombro","#3b82f6",220,128,360,122],
        ["Hand / Mão","#9333ea",260,162,360,160],
        ["Belly / Barriga","#f97316",220,175,360,172],
        ["Knee / Joelho","#ec4899",220,232,360,228],
        ["Foot / Pé","#0891b2",220,265,355,265],
      ].map(([label,color,lx,ly,tx,ty],i)=>(
        <g key={i}>
          <line x1={lx} y1={ly} x2={tx} y2={ty} stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx={lx} cy={ly} r="3" fill={color}/>
          <rect x={lx+5} y={ly-10} width={label.length*5.5} height="20" rx="6" fill={color}/>
          <text x={lx+7+label.length*2.75} y={ly+4} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">{label}</text>
        </g>
      ))}
      {/* Label left */}
      <line x1="140" y1="140" x2="100" y2="138" stroke="#ff8c00" strokeWidth="1.5"/>
      <circle cx="140" cy="140" r="3" fill="#ff8c00"/>
      <rect x="28" y="128" width="70" height="20" rx="6" fill="#ff8c00"/>
      <text x="63" y="142" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">Arm / Braço</text>
      <line x1="140" y1="230" x2="100" y2="232" stroke="#f97316" strokeWidth="1.5"/>
      <circle cx="140" cy="230" r="3" fill="#f97316"/>
      <rect x="22" y="221" width="76" height="20" rx="6" fill="#f97316"/>
      <text x="60" y="235" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">Leg / Perna</text>
    </svg>
  );
}
 
export function IllustrationAnimais() {
  return (
    <svg width="100%" viewBox="0 0 360 220" role="img" style={{borderRadius:16,display:"block"}}>
      <title>Animais do tatame</title>
      <rect width="360" height="220" fill="#e8f5e9"/>
      <rect width="360" height="30" fill="#0a1628"/>
      <text x="180" y="21" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="13" fontWeight="900" fill="#ff8c00">Mat Animals / Animais do Tatame</text>
      {/* Grid */}
      <line x1="120" y1="30" x2="120" y2="220" stroke="#a5d6a7" strokeWidth="1" strokeDasharray="10,6"/>
      <line x1="240" y1="30" x2="240" y2="220" stroke="#a5d6a7" strokeWidth="1" strokeDasharray="10,6"/>
      <line x1="0" y1="127" x2="360" y2="127" stroke="#a5d6a7" strokeWidth="1" strokeDasharray="10,6"/>
      {/* FROG */}
      <text x="60" y="100" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="46">🐸</text>
      <rect x="20" y="112" width="80" height="28" rx="8" fill="#22c55e"/>
      <text x="60" y="124" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="10" fontWeight="900" fill="white">Frog / Sapo</text>
      <text x="60" y="135" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="white" opacity="0.9">Jump! Pule!</text>
      {/* BEAR */}
      <text x="180" y="100" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="46">🐻</text>
      <rect x="140" y="112" width="80" height="28" rx="8" fill="#92400e"/>
      <text x="180" y="124" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="10" fontWeight="900" fill="white">Bear / Urso</text>
      <text x="180" y="135" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="white" opacity="0.9">All fours! No chão!</text>
      {/* SHRIMP */}
      <text x="300" y="100" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="46">🦐</text>
      <rect x="260" y="112" width="80" height="28" rx="8" fill="#f97316"/>
      <text x="300" y="124" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="10" fontWeight="900" fill="white">Shrimp / Camarão</text>
      <text x="300" y="135" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="white" opacity="0.9">Sideways! De lado!</text>
      {/* ALLIGATOR */}
      <text x="60" y="185" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="46">🐊</text>
      <rect x="14" y="200" width="92" height="16" rx="6" fill="#16a34a"/>
      <text x="60" y="212" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">Alligator / Jacaré — Crawl!</text>
      {/* CRAB */}
      <text x="180" y="185" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="46">🦀</text>
      <rect x="134" y="200" width="92" height="16" rx="6" fill="#dc2626"/>
      <text x="180" y="212" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">Crab / Caranguejo — Belly up!</text>
      {/* MONKEY */}
      <text x="300" y="185" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="46">🐒</text>
      <rect x="254" y="200" width="92" height="16" rx="6" fill="#7c3aed"/>
      <text x="300" y="212" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">Monkey / Macaco — Jump!</text>
    </svg>
  );
}
 
export function IllustrationFaixas() {
  const belts = [
    {color:"#f5f5f5", stroke:"#ddd", label:"White", sub:"Branca", textColor:"#555"},
    {color:"#9ca3af", stroke:"#888", label:"Grey", sub:"Cinza", textColor:"white"},
    {color:"#fbbf24", stroke:"#f59e0b", label:"Yellow", sub:"Amarela", textColor:"#78350f"},
    {color:"#f97316", stroke:"#ea580c", label:"Orange", sub:"Laranja", textColor:"white"},
    {color:"#22c55e", stroke:"#16a34a", label:"Green", sub:"Verde", textColor:"white"},
    {color:"#2563eb", stroke:"#1d4ed8", label:"Blue", sub:"Azul", textColor:"white"},
    {color:"#7c3aed", stroke:"#6d28d9", label:"Purple", sub:"Roxa", textColor:"white"},
    {color:"#78350f", stroke:"#92400e", label:"Brown", sub:"Marrom", textColor:"white"},
    {color:"#111", stroke:"#000", label:"Black", sub:"Preta", textColor:"#fbbf24"},
  ];
  const w = 360, bw = 34, gap = 5, startX = 10;
  return (
    <svg width="100%" viewBox="0 0 360 200" role="img" style={{borderRadius:16,display:"block"}}>
      <title>As faixas do Jiu-Jitsu</title>
      <rect width="360" height="200" fill="#0a1628"/>
      <rect x="80" y="8" width="200" height="32" rx="10" fill="#ff8c00"/>
      <text x="180" y="22" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="white">The Belts / As Faixas</text>
      <text x="180" y="34" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="white" opacity="0.9">Brazilian Jiu-Jitsu</text>
      {/* Rod */}
      <rect x="8" y="48" width="344" height="6" rx="3" fill="#8B6914"/>
      {belts.map((b, i) => {
        const cx = startX + i * (bw + gap) + bw/2;
        const isBlack = b.label === "Black";
        return (
          <g key={i}>
            <line x1={cx} y1={54} x2={cx} y2={66} stroke="#888" strokeWidth="2"/>
            <rect x={cx-bw/2} y={66} width={bw} height={12} rx="5" fill={b.color} stroke={b.stroke} strokeWidth="1.5"/>
            {isBlack && <rect x={cx-bw/2} y={66} width={10} height={12} rx="3" fill="#cc0000"/>}
            <ellipse cx={cx} cy={78} rx={bw/2-2} ry="5" fill={b.color} stroke={b.stroke} strokeWidth="1"/>
            <rect x={cx-7} y={83} width={14} height={55} rx="4" fill={b.color} stroke={b.stroke} strokeWidth="1.5"/>
            <rect x={cx+4} y={83} width={14} height={55} rx="4" fill={b.color} stroke={b.stroke} strokeWidth="1.5"/>
            <rect x={cx-bw/2} y={148} width={bw} height={34} rx="7" fill={isBlack ? "#111" : b.color} stroke={isBlack ? "#fbbf24" : b.stroke} strokeWidth={isBlack ? 2 : 1}/>
            <text x={cx} y={162} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="7.5" fontWeight="900" fill={b.textColor}>{b.label}</text>
            <text x={cx} y={173} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill={b.textColor} opacity="0.9">{b.sub}</text>
            <text x={cx} y={182} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="6.5" fill={b.textColor} opacity="0.7">{i < 5 ? "Kids" : i === 8 ? "Master" : "Adult"}</text>
          </g>
        );
      })}
      <path d="M10 195 L350 195" stroke="#ff8c00" strokeWidth="1.5" strokeDasharray="6,3" fill="none"/>
      <polygon points="350,195 342,191 342,199" fill="#ff8c00"/>
    </svg>
  );
}
 
export function IllustrationDojo() {
  return (
    <svg width="100%" viewBox="0 0 360 220" role="img" style={{borderRadius:16,display:"block"}}>
      <title>Partes do dojo</title>
      <rect width="360" height="220" fill="#f5f0e8" stroke="#8B6914" strokeWidth="3"/>
      <rect width="360" height="28" fill="#0a1628"/>
      <text x="180" y="19" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="#ff8c00">Parts of the Dojo / Partes da Academia</text>
      {/* Mat center */}
      <rect x="88" y="36" width="184" height="108" rx="5" fill="#1a6fc4" stroke="#1558a0" strokeWidth="2"/>
      <line x1="88" y1="66" x2="272" y2="66" stroke="#1558a0" strokeWidth="1" strokeDasharray="10,5" opacity="0.4"/>
      <line x1="88" y1="96" x2="272" y2="96" stroke="#1558a0" strokeWidth="1" strokeDasharray="10,5" opacity="0.4"/>
      <line x1="88" y1="126" x2="272" y2="126" stroke="#1558a0" strokeWidth="1" strokeDasharray="10,5" opacity="0.4"/>
      <line x1="134" y1="36" x2="134" y2="144" stroke="#1558a0" strokeWidth="1" strokeDasharray="10,5" opacity="0.4"/>
      <line x1="180" y1="36" x2="180" y2="144" stroke="#1558a0" strokeWidth="1" strokeDasharray="10,5" opacity="0.4"/>
      <line x1="226" y1="36" x2="226" y2="144" stroke="#1558a0" strokeWidth="1" strokeDasharray="10,5" opacity="0.4"/>
      <text x="180" y="94" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="13" fontWeight="900" fill="white" opacity="0.5">TATAME</text>
      <text x="180" y="110" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="10" fill="white" opacity="0.4">The Mat</text>
      {/* Changing room */}
      <rect x="4" y="36" width="80" height="108" rx="5" fill="#e8d5c4" stroke="#8B6914" strokeWidth="1.5"/>
      <text x="44" y="85" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="#78350f" fontWeight="700">Changing</text>
      <text x="44" y="97" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="#78350f" fontWeight="700">Room</text>
      <text x="44" y="109" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#92400e">Vestiário</text>
      {/* Reception */}
      <rect x="276" y="36" width="80" height="108" rx="5" fill="#d1fae5" stroke="#16a34a" strokeWidth="1.5"/>
      <text x="316" y="85" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="#065f46" fontWeight="700">Reception</text>
      <text x="316" y="97" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#065f46">Recepção</text>
      {/* Bottom areas */}
      <rect x="4" y="152" width="80" height="62" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
      <text x="44" y="178" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="18">💧</text>
      <text x="44" y="196" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#1e40af" fontWeight="700">Water / Bebedouro</text>
      <rect x="88" y="152" width="184" height="62" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="180" y="172" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="#78350f" fontWeight="700">Warm-up Area / Aquecimento</text>
      <text x="140" y="196" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="20">🏃</text>
      <text x="180" y="196" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="20">🤸</text>
      <text x="220" y="196" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="20">⚡</text>
      <rect x="276" y="152" width="80" height="62" rx="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
      <text x="316" y="175" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="#9d174d" fontWeight="700">Photo Wall</text>
      <text x="316" y="187" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#9d174d">Parede de Fotos</text>
      <text x="316" y="205" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="14">🖼️</text>
    </svg>
  );
}
 
export function IllustrationComidas() {
  const foods = [
    {emoji:"🫐", name:"Açaí", sub:"Amazon berry", color:"#7c3aed", x:40},
    {emoji:"🧀", name:"Pão de Queijo", sub:"Cheese bread", color:"#f59e0b", x:120},
    {emoji:"🍫", name:"Brigadeiro", sub:"Choc. truffle", color:"#78350f", x:200},
    {emoji:"🍗", name:"Coxinha", sub:"Chicken fritter", color:"#dc2626", x:280},
  ];
  return (
    <svg width="100%" viewBox="0 0 360 220" role="img" style={{borderRadius:16,display:"block"}}>
      <title>Comidas brasileiras</title>
      <rect width="360" height="220" fill="#fff8f0"/>
      <rect width="360" height="28" fill="#0a1628"/>
      <text x="180" y="19" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="#ff8c00">Brazilian Foods / Comidas Brasileiras 🇧🇷</text>
      {/* Table */}
      <rect x="10" y="178" width="340" height="18" rx="6" fill="#c8956c"/>
      <rect x="10" y="190" width="340" height="8" rx="4" fill="#92400e"/>
      <rect x="30" y="196" width="14" height="22" rx="4" fill="#78350f"/>
      <rect x="316" y="196" width="14" height="22" rx="4" fill="#78350f"/>
      {/* Row 1 */}
      {foods.map((f,i)=>(
        <g key={i}>
          <rect x={f.x-30} y={34} width={60} height={112} rx="12" fill="white" stroke={f.color} strokeWidth="2"/>
          <rect x={f.x-28} y={38} width={56} height={28} rx="8" fill={f.color}/>
          <text x={f.x} y={50} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">{f.name}</text>
          <text x={f.x} y={62} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="white" opacity="0.9">{f.sub}</text>
          <text x={f.x} y={108} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="40">{f.emoji}</text>
        </g>
      ))}
      {/* Row 2 */}
      {[
        {emoji:"🫘", name:"Feijoada", sub:"Bean stew", color:"#1a1a2e", x:60},
        {emoji:"🥞", name:"Tapioca", sub:"Cassava pancake", color:"#6b7280", x:150},
        {emoji:"🍘", name:"Acarajé", sub:"Bean cake", color:"#ea580c", x:240},
        {emoji:"🌽", name:"Pamonha", sub:"Corn cake", color:"#16a34a", x:320},
      ].map((f,i)=>(
        <g key={i}>
          <text x={f.x} y={170} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="28">{f.emoji}</text>
          <text x={f.x} y={192} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="7.5" fontWeight="900" fill="#333">{f.name}</text>
        </g>
      ))}
    </svg>
  );
}
 
export function IllustrationPosicoes() {
  return (
    <svg width="100%" viewBox="0 0 360 220" role="img" style={{borderRadius:16,display:"block"}}>
      <title>Posições básicas</title>
      <rect width="360" height="220" fill="#f0f4ff"/>
      <rect width="360" height="28" fill="#0a1628"/>
      <text x="180" y="19" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="#ff8c00">Basic Positions / Posições Básicas</text>
      {/* 4 position cards */}
      {[
        {label:"Closed Guard", sub:"Guarda Fechada", emoji:"🛡️", color:"#2563eb", x:46, y:40},
        {label:"The Mount", sub:"A Montada", emoji:"🏔️", color:"#dc2626", x:136, y:40},
        {label:"Side Control", sub:"Cem Kilos", emoji:"↔️", color:"#16a34a", x:226, y:40},
        {label:"Back Control", sub:"As Costas", emoji:"🔙", color:"#7c3aed", x:316, y:40},
      ].map((p,i)=>(
        <g key={i}>
          <rect x={p.x-38} y={p.y} width={76} height={80} rx="12" fill="white" stroke={p.color} strokeWidth="2.5"/>
          <rect x={p.x-38} y={p.y} width={76} height={28} rx="12" fill={p.color}/>
          <rect x={p.x-38} y={p.y+14} width={76} height={14} fill={p.color}/>
          <text x={p.x} y={p.y+13} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="8.5" fontWeight="900" fill="white">{p.label}</text>
          <text x={p.x} y={p.y+24} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7.5" fill="white" opacity="0.9">{p.sub}</text>
          <text x={p.x} y={p.y+62} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="32">{p.emoji}</text>
        </g>
      ))}
      {/* Techniques list */}
      <rect x="10" y="132" width="340" height="80" rx="12" fill="white" stroke="#ff8c00" strokeWidth="2"/>
      <text x="180" y="148" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="11" fontWeight="900" fill="#ff8c00">Key Techniques / Técnicas Principais</text>
      {[
        ["🦁 Mata-Leão","Rear Naked Choke",30,165],
        ["🔺 Triângulo","Triangle Choke",30,180],
        ["💪 Armlock","Arm Bar",30,195],
        ["🌊 Raspagem","Sweep",200,165],
        ["➡️ Passagem","Guard Pass",200,180],
        ["🔄 Kimura","Kimura",200,195],
      ].map(([pt,en,x,y],i)=>(
        <g key={i}>
          <text x={x} y={y} fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="700" fill="#333">{pt}</text>
          <text x={x} y={y+1} fontFamily="Arial,sans-serif" fontSize="8" fill="#666">{"  — "+en}</text>
        </g>
      ))}
    </svg>
  );
}
 
export function IllustrationSentimentos() {
  const feelings = [
    {emoji:"😄", label:"Happy", sub:"Feliz", color:"#fbbf24"},
    {emoji:"😤", label:"Proud", sub:"Orgulhoso", color:"#ff8c00"},
    {emoji:"😎", label:"Confident", sub:"Confiante", color:"#7c3aed"},
    {emoji:"🔥", label:"Motivated", sub:"Motivado", color:"#22c55e"},
    {emoji:"😮‍💨", label:"Tired", sub:"Cansado", color:"#6b7280"},
    {emoji:"😬", label:"Nervous", sub:"Nervoso", color:"#3b82f6"},
    {emoji:"😤", label:"Frustrated", sub:"Frustrado", color:"#f97316"},
    {emoji:"😞", label:"Disappointed", sub:"Desapontado", color:"#dc2626"},
    {emoji:"😨", label:"Scared", sub:"Com medo", color:"#0891b2"},
  ];
  return (
    <svg width="100%" viewBox="0 0 360 220" role="img" style={{borderRadius:16,display:"block"}}>
      <title>Vocabulário de sentimentos</title>
      <rect width="360" height="220" fill="#fdf4ff"/>
      <rect width="360" height="28" fill="#0a1628"/>
      <text x="180" y="19" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="12" fontWeight="900" fill="#ff8c00">Feelings / Sentimentos</text>
      {feelings.map((f,i)=>{
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 114 + 47;
        const y = 40 + row * 60;
        return (
          <g key={i}>
            <rect x={x-47} y={y} width={94} height={54} rx="10" fill="white" stroke={f.color} strokeWidth="2"/>
            <rect x={x-47} y={y} width={94} height={22} rx="10" fill={f.color}/>
            <rect x={x-47} y={y+11} width={94} height={11} fill={f.color}/>
            <text x={x} y={y+14} textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="9" fontWeight="900" fill="white">{f.label}</text>
            <text x={x} y={y+23} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="white" opacity="0.9">{f.sub}</text>
            <text x={x} y={y+47} textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="24">{f.emoji}</text>
          </g>
        );
      })}
    </svg>
  );
}
 
// Map lesson IDs to their illustrations
export const LESSON_ILLUSTRATIONS = {
  "v1l1": IllustrationSaudacoes,
  "v1l2": IllustrationCoresKimono,
  "v1l3": IllustrationCorpo,
  "v1l4": IllustrationAnimais,
  "v1l5": null,
  "v2l2": IllustrationFaixas,
  "v2l3": IllustrationDojo,
  "v2l4": IllustrationComidas,
  "v3l1": IllustrationPosicoes,
  "v3l5": IllustrationSentimentos,
};
