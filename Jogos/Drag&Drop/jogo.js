const ITEMS = [

  //plastico
  {
    id: 'pet_bottle', label: 'Garrafa PET', type: 'plastic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="2" width="16" height="8" rx="3" fill="#90caf9"/>
      <rect x="18" y="10" width="24" height="4" rx="2" fill="#64b5f6"/>
      <path d="M14 18 Q10 30 10 50 Q10 70 20 74 H40 Q50 70 50 50 Q50 30 46 18 Z" fill="#bbdefb" stroke="#64b5f6" stroke-width="2"/>
      <rect x="14" y="28" width="32" height="3" rx="1" fill="rgba(255,255,255,0.55)"/>
      <rect x="14" y="36" width="32" height="2" rx="1" fill="rgba(255,255,255,0.35)"/>
      <ellipse cx="30" cy="22" rx="14" ry="5" fill="rgba(255,255,255,0.3)"/>
    </svg>`
  },
  {
    id: 'bottle_cap', label: 'Tampa', type: 'plastic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="22" ry="8" fill="#ef9a9a" stroke="#e53935" stroke-width="2"/>
      <rect x="8" y="26" width="44" height="18" rx="4" fill="#ef9a9a" stroke="#e53935" stroke-width="2"/>
      <ellipse cx="30" cy="26" rx="22" ry="8" fill="#ffcdd2" stroke="#e53935" stroke-width="2"/>
      <ellipse cx="30" cy="26" rx="16" ry="5" fill="rgba(255,255,255,0.4)"/>
      <rect x="12" y="28" width="4" height="14" rx="2" fill="rgba(229,57,53,0.4)"/>
      <rect x="20" y="28" width="4" height="14" rx="2" fill="rgba(229,57,53,0.4)"/>
      <rect x="28" y="28" width="4" height="14" rx="2" fill="rgba(229,57,53,0.4)"/>
      <rect x="36" y="28" width="4" height="14" rx="2" fill="rgba(229,57,53,0.4)"/>
      <rect x="44" y="28" width="4" height="14" rx="2" fill="rgba(229,57,53,0.4)"/>
    </svg>`
  },
  {
    id: 'plastic_bag', label: 'Sacola', type: 'plastic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16 Q22 8 30 8 Q38 8 38 16" stroke="#ce93d8" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M14 18 H46 L42 70 Q42 74 38 74 H22 Q18 74 18 70 Z" fill="#f3e5f5" stroke="#ce93d8" stroke-width="2"/>
      <path d="M18 32 Q30 40 42 32" stroke="#ba68c8" stroke-width="1.5" fill="none"/>
    </svg>`
  },
  {
    id: 'straw', label: 'Canudo', type: 'plastic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="4" width="12" height="72" rx="6" fill="#f48fb1" stroke="#f06292" stroke-width="1.5"/>
      <rect x="24" y="4" width="5" height="72" rx="3" fill="rgba(255,255,255,0.35)"/>
      <ellipse cx="30" cy="10" rx="6" ry="3" fill="rgba(255,255,255,0.4)"/>
    </svg>`
  },
  {
    id: 'shampoo', label: 'Shampoo', type: 'plastic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="2" width="10" height="14" rx="3" fill="#80cbc4"/>
      <path d="M38 8 L46 6 L44 12 L38 12 Z" fill="#4db6ac"/>
      <path d="M18 20 Q16 18 20 16 H40 Q44 18 42 20 L40 72 Q40 76 36 76 H24 Q20 76 20 72 Z" fill="#b2ebf2" stroke="#4dd0e1" stroke-width="2"/>
      <rect x="20" y="38" width="20" height="16" rx="3" fill="rgba(255,255,255,0.4)"/>
      <rect x="22" y="42" width="16" height="2" rx="1" fill="#4dd0e1"/>
      <rect x="22" y="47" width="12" height="2" rx="1" fill="#4dd0e1"/>
      <ellipse cx="30" cy="24" rx="10" ry="3" fill="rgba(255,255,255,0.3)"/>
    </svg>`
  },
  {
    id: 'plastic_fork', label: 'Garfo', type: 'plastic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="27" y="38" width="6" height="36" rx="3" fill="#ffe082"/>
      <rect x="20" y="6" width="4" height="28" rx="2" fill="#ffe082"/>
      <rect x="28" y="6" width="4" height="28" rx="2" fill="#ffe082"/>
      <rect x="36" y="6" width="4" height="28" rx="2" fill="#ffe082"/>
      <path d="M20 28 Q22 38 27 38 H33 Q38 38 40 28" fill="#ffe082" stroke="#ffd54f" stroke-width="1"/>
    </svg>`
  },
  {
    id: 'plastic_bottle2', label: 'Garrafa de Água', type: 'plastic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="2" width="12" height="6" rx="3" fill="#4fc3f7"/>
      <rect x="20" y="8" width="20" height="4" rx="2" fill="#29b6f6"/>
      <rect x="16" y="12" width="28" height="60" rx="10" fill="#e1f5fe" stroke="#29b6f6" stroke-width="2"/>
      <rect x="20" y="22" width="8" height="40" rx="4" fill="rgba(255,255,255,0.4)"/>
      <rect x="16" y="44" width="28" height="3" rx="1" fill="rgba(41,182,246,0.3)"/>
      <ellipse cx="30" cy="16" rx="12" ry="4" fill="rgba(255,255,255,0.3)"/>
    </svg>`
  },

  //vidro
  {
    id: 'glass_bottle', label: 'Garrafa', type: 'glass',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="2" width="10" height="10" rx="2" fill="#80cbc4"/>
      <rect x="23" y="12" width="14" height="5" rx="2" fill="#4db6ac"/>
      <path d="M18 22 Q12 34 12 52 Q12 72 22 75 H38 Q48 72 48 52 Q48 34 42 22 Z" fill="#b2dfdb" stroke="#4db6ac" stroke-width="2"/>
      <ellipse cx="30" cy="26" rx="10" ry="4" fill="rgba(255,255,255,0.3)"/>
      <rect x="16" y="44" width="28" height="3" rx="1" fill="rgba(255,255,255,0.4)"/>
    </svg>`
  },
  {
    id: 'glass_jar', label: 'Pote', type: 'glass',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="8" width="24" height="6" rx="3" fill="#546e7a"/>
      <rect x="14" y="14" width="32" height="4" rx="2" fill="#607d8b"/>
      <rect x="12" y="18" width="36" height="52" rx="6" fill="#cfd8dc" stroke="#90a4ae" stroke-width="2"/>
      <rect x="16" y="24" width="10" height="38" rx="3" fill="rgba(255,255,255,0.38)"/>
      <ellipse cx="30" cy="22" rx="16" ry="4" fill="rgba(255,255,255,0.25)"/>
    </svg>`
  },
  {
    id: 'wine_glass', label: 'Taça', type: 'glass',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 6 H44 L38 36 Q36 46 30 48 Q24 46 22 36 Z" fill="#e0f7fa" stroke="#80deea" stroke-width="2"/>
      <rect x="28" y="48" width="4" height="22" rx="2" fill="#80deea"/>
      <rect x="18" y="70" width="24" height="4" rx="2" fill="#80deea"/>
      <path d="M18 6 H44 L42 18 H18 Z" fill="rgba(255,255,255,0.3)"/>
    </svg>`
  },
  {
    id: 'perfume', label: 'Frasco', type: 'glass',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="26" y="4" width="8" height="12" rx="2" fill="#ce93d8"/>
      <rect x="22" y="14" width="16" height="4" rx="2" fill="#ab47bc"/>
      <rect x="14" y="18" width="32" height="50" rx="8" fill="#f3e5f5" stroke="#ce93d8" stroke-width="2"/>
      <rect x="18" y="24" width="8" height="36" rx="4" fill="rgba(255,255,255,0.4)"/>
      <rect x="14" y="52" width="32" height="3" rx="1" fill="rgba(206,147,216,0.5)"/>
    </svg>`
  },
  {
    id: 'glass_cup', label: 'Copo', type: 'glass',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 10 L16 68 Q16 72 20 72 H40 Q44 72 44 68 L46 10 Z" fill="#e0f7fa" stroke="#80deea" stroke-width="2"/>
      <path d="M14 10 H46 L44 24 H16 Z" fill="rgba(255,255,255,0.35)"/>
      <rect x="18" y="18" width="6" height="44" rx="3" fill="rgba(255,255,255,0.3)"/>
    </svg>`
  },
  {
    id: 'mirror', label: 'Espelho', type: 'glass',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="40" height="52" rx="6" fill="#b2ebf2" stroke="#4dd0e1" stroke-width="2"/>
      <rect x="14" y="12" width="32" height="44" rx="4" fill="#e0f7fa"/>
      <path d="M16 16 L26 14" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round"/>
      <rect x="24" y="60" width="12" height="14" rx="3" fill="#78909c"/>
      <rect x="18" y="72" width="24" height="4" rx="2" fill="#546e7a"/>
    </svg>`
  },
  {
    id: 'lightbulb', label: 'Lâmpada', type: 'glass',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 6 Q14 6 14 24 Q14 36 22 44 L22 56 H38 L38 44 Q46 36 46 24 Q46 6 30 6 Z" fill="#fff9c4" stroke="#f9a825" stroke-width="2"/>
      <rect x="22" y="56" width="16" height="4" rx="1" fill="#bdbdbd"/>
      <rect x="22" y="60" width="16" height="4" rx="1" fill="#9e9e9e"/>
      <rect x="24" y="64" width="12" height="6" rx="3" fill="#bdbdbd"/>
      <ellipse cx="24" cy="18" rx="5" ry="7" fill="rgba(255,255,255,0.5)"/>
    </svg>`
  },

  //papel
  {
    id: 'newspaper', label: 'Jornal', type: 'paper',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="44" height="64" rx="3" fill="#fff9c4" stroke="#f9a825" stroke-width="2"/>
      <rect x="12" y="14" width="36" height="6" rx="1" fill="#f57f17"/>
      <rect x="12" y="24" width="16" height="2" rx="1" fill="#f9a825"/>
      <rect x="12" y="28" width="20" height="2" rx="1" fill="#f9a825"/>
      <rect x="12" y="32" width="14" height="2" rx="1" fill="#f9a825"/>
      <rect x="32" y="24" width="16" height="16" rx="2" fill="#ffe082"/>
      <rect x="12" y="44" width="36" height="2" rx="1" fill="#f9a825"/>
      <rect x="12" y="48" width="30" height="2" rx="1" fill="#f9a825"/>
      <rect x="12" y="52" width="34" height="2" rx="1" fill="#f9a825"/>
    </svg>`
  },
  {
    id: 'cardboard', label: 'Caixa', type: 'paper',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="24" width="44" height="46" rx="3" fill="#d7ccc8" stroke="#a1887f" stroke-width="2"/>
      <path d="M8 24 L30 10 L52 24" fill="#bcaaa4" stroke="#a1887f" stroke-width="2"/>
      <line x1="30" y1="10" x2="30" y2="24" stroke="#a1887f" stroke-width="2"/>
      <path d="M8 24 L20 30 L20 10 L8 16 Z" fill="#b0bec5"/>
      <rect x="20" y="36" width="20" height="2" rx="1" fill="#a1887f"/>
      <rect x="16" y="42" width="28" height="2" rx="1" fill="#a1887f"/>
    </svg>`
  },
  {
    id: 'paper_sheet', label: 'Folha A4', type: 'paper',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="4" width="40" height="56" rx="2" fill="#fff" stroke="#aed581" stroke-width="2"/>
      <path d="M38 4 L50 16 L38 16 Z" fill="#c5e1a5"/>
      <rect x="16" y="22" width="28" height="2" rx="1" fill="#aed581"/>
      <rect x="16" y="28" width="22" height="2" rx="1" fill="#aed581"/>
      <rect x="16" y="34" width="28" height="2" rx="1" fill="#aed581"/>
      <rect x="16" y="40" width="18" height="2" rx="1" fill="#aed581"/>
      <path d="M14 64 Q30 74 46 64" stroke="#aed581" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'notebook', label: 'Caderno', type: 'paper',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="6" width="38" height="68" rx="3" fill="#e8f5e9" stroke="#66bb6a" stroke-width="2"/>
      <rect x="12" y="6" width="8" height="68" rx="3" fill="#66bb6a"/>
      <circle cx="16" cy="20" r="3" fill="#fff"/>
      <circle cx="16" cy="36" r="3" fill="#fff"/>
      <circle cx="16" cy="52" r="3" fill="#fff"/>
      <circle cx="16" cy="68" r="3" fill="#fff"/>
      <rect x="24" y="18" width="22" height="2" rx="1" fill="#a5d6a7"/>
      <rect x="24" y="26" width="18" height="2" rx="1" fill="#a5d6a7"/>
      <rect x="24" y="34" width="22" height="2" rx="1" fill="#a5d6a7"/>
    </svg>`
  },
  {
    id: 'envelope', label: 'Envelope', type: 'paper',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="18" width="48" height="36" rx="4" fill="#fff8e1" stroke="#ffb300" stroke-width="2"/>
      <path d="M6 18 L30 38 L54 18" stroke="#ffb300" stroke-width="2" fill="none"/>
      <path d="M6 54 L22 38" stroke="#ffb300" stroke-width="1.5" fill="none"/>
      <path d="M54 54 L38 38" stroke="#ffb300" stroke-width="1.5" fill="none"/>
      <rect x="18" y="60" width="24" height="3" rx="1" fill="#ffb300" opacity="0.5"/>
    </svg>`
  },
  {
    id: 'pizza_box', label: 'Embalagem', type: 'paper',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="20" width="48" height="36" rx="3" fill="#efebe9" stroke="#a1887f" stroke-width="2"/>
      <rect x="6" y="20" width="48" height="10" rx="3" fill="#d7ccc8"/>
      <rect x="6" y="20" width="48" height="3" rx="1" fill="#bcaaa4"/>
      <rect x="18" y="36" width="24" height="2" rx="1" fill="#a1887f"/>
      <rect x="22" y="42" width="16" height="2" rx="1" fill="#a1887f"/>
      <path d="M16 60 Q30 68 44 60" stroke="#a1887f" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'book', label: 'Livro', type: 'paper',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="6" width="40" height="68" rx="3" fill="#ffcdd2" stroke="#e57373" stroke-width="2"/>
      <rect x="10" y="6" width="10" height="68" rx="3" fill="#e57373"/>
      <rect x="24" y="18" width="22" height="2" rx="1" fill="#ef9a9a"/>
      <rect x="24" y="26" width="18" height="2" rx="1" fill="#ef9a9a"/>
      <rect x="24" y="34" width="22" height="2" rx="1" fill="#ef9a9a"/>
      <rect x="24" y="42" width="14" height="2" rx="1" fill="#ef9a9a"/>
      <rect x="24" y="50" width="20" height="2" rx="1" fill="#ef9a9a"/>
    </svg>`
  },

  //organico
  {
    id: 'apple', label: 'Maçã', type: 'organic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 10 Q30 4 34 6" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round"/>
      <ellipse cx="30" cy="14" rx="4" ry="5" fill="#4caf50"/>
      <path d="M10 32 Q10 16 30 16 Q50 16 50 32 Q52 56 40 68 Q35 74 30 74 Q25 74 20 68 Q8 56 10 32 Z" fill="#ef5350" stroke="#c62828" stroke-width="1.5"/>
      <path d="M14 26 Q18 20 26 20" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  {
    id: 'banana_peel', label: 'Casca de Banana', type: 'organic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 10 Q50 14 52 36 Q54 58 38 70" stroke="#f9a825" stroke-width="10" stroke-linecap="round" fill="none"/>
      <path d="M30 10 Q10 14 8 36 Q6 58 22 70" stroke="#fbc02d" stroke-width="10" stroke-linecap="round" fill="none"/>
      <path d="M30 10 Q30 14 30 24" stroke="#f57f17" stroke-width="6" stroke-linecap="round" fill="none"/>
      <circle cx="30" cy="8" r="4" fill="#795548"/>
    </svg>`
  },
  {
    id: 'lettuce', label: 'Alface', type: 'organic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 70 Q10 60 8 38 Q6 20 20 14 Q30 10 40 14 Q54 20 52 38 Q50 60 30 70 Z" fill="#a5d6a7" stroke="#4caf50" stroke-width="2"/>
      <path d="M30 70 Q16 52 18 34 Q20 18 30 14" stroke="#81c784" stroke-width="2" fill="none"/>
      <path d="M30 70 Q44 52 42 34 Q40 18 30 14" stroke="#81c784" stroke-width="2" fill="none"/>
      <path d="M12 42 Q22 36 30 40 Q38 36 48 42" stroke="#66bb6a" stroke-width="1.5" fill="none"/>
    </svg>`
  },
  {
    id: 'coffee_grounds', label: 'Borra de Café', type: 'organic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 28 L16 66 Q16 70 20 70 H40 Q44 70 44 66 L46 28 Z" fill="#d7ccc8" stroke="#a1887f" stroke-width="2"/>
      <ellipse cx="30" cy="28" rx="16" ry="5" fill="#bcaaa4" stroke="#a1887f" stroke-width="2"/>
      <ellipse cx="30" cy="28" rx="13" ry="3.5" fill="#4e342e"/>
      <path d="M22 46 Q30 50 38 46" stroke="#6d4c41" stroke-width="1.5" fill="none"/>
      <path d="M48 36 Q54 32 52 26 Q50 20 44 22" stroke="#a1887f" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'orange_peel', label: 'Casca de Laranja', type: 'organic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 12 Q48 12 50 32 Q52 54 30 68 Q8 54 10 32 Q12 12 30 12 Z" fill="#ff9800" stroke="#e65100" stroke-width="2"/>
      <path d="M30 12 Q30 40 30 68" stroke="#e65100" stroke-width="1.5" fill="none"/>
      <path d="M10 32 Q30 28 50 32" stroke="#e65100" stroke-width="1.5" fill="none"/>
      <path d="M12 48 Q30 44 48 48" stroke="#e65100" stroke-width="1.2" fill="none"/>
      <ellipse cx="30" cy="12" rx="6" ry="4" fill="#4caf50"/>
    </svg>`
  },
  {
    id: 'bread', label: 'Pão', type: 'organic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 36 Q10 18 30 16 Q50 18 50 36 L48 62 Q48 68 42 68 H18 Q12 68 12 62 Z" fill="#d7a063" stroke="#a1621a" stroke-width="2"/>
      <path d="M14 36 Q14 22 30 20 Q46 22 46 36" fill="#e8b87a" stroke="none"/>
      <path d="M18 48 Q30 52 42 48" stroke="#a1621a" stroke-width="1.5" fill="none"/>
      <ellipse cx="30" cy="22" rx="12" ry="5" fill="rgba(255,255,255,0.2)"/>
    </svg>`
  },
  {
    id: 'eggshell', label: 'Casca de Ovo', type: 'organic',
    svg: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 10 Q48 10 50 36 Q52 60 30 70 Q8 60 10 36 Q12 10 30 10 Z" fill="#fff9e6" stroke="#e0cfa0" stroke-width="2"/>
      <path d="M12 42 Q30 38 48 42" stroke="#e0cfa0" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <path d="M30 10 Q30 40 30 70" stroke="#e0cfa0" stroke-width="1" stroke-dasharray="3,4" fill="none"/>
      <path d="M18 20 Q24 18 28 22" stroke="rgba(224,207,160,0.7)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
];

const REFLECTIONS = [
  {
    min: 0, max: 2,
    icon: '😢',
    title: 'Pode Melhorar!',
    msg: 'Cada acerto conta. Com prática, você vai longe! A natureza precisa de você. 🌱'
  },
  {
    min: 3, max: 4,
    icon: '🌿',
    title: 'Bom Começo!',
    msg: 'Você está no caminho certo! Separar resíduos corretamente reduz o lixo nos aterros. Continue! ♻️'
  },
  {
    min: 5, max: 6,
    icon: '🌎',
    title: 'Muito Bem!',
    msg: 'Ótima performance! Lembre-se: cada item reciclado economiza energia e recursos naturais. 💚'
  },
  {
    min: 7, max: 8,
    icon: '🏆',
    title: 'Incrível!',
    msg: 'Você é um guardião do planeta! Com pessoas como você, um futuro sustentável é possível! 🌳'
  },
];

//estado d jogo
let lives         = 3;
let score         = 0;
let timeLeft      = 120;
let timerInterval = null;
let currentItem   = null;
let remainingItems = [];
let dragEl        = null;
let dragOffsetX   = 0;
let dragOffsetY   = 0;
//cenario
function buildScene() {
  buildStars();
  buildMountains();
  buildBuildings();
  buildRoadLines();
  buildTrees();
  buildLanterns();
  buildClouds();
}

//estrela
function buildStars() {
  //remoção de comecar se existir
  const old = document.getElementById('starsLayer');
  if (old) old.remove();

  const container = document.createElement('div');
  container.id = 'starsLayer';
  container.className = 'stars';

  for (let i = 0; i < 55; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.left   = Math.random() * 100 + '%';
    s.style.top    = Math.random() * 100 + '%';
    s.style.width  = (Math.random() * 2 + 1) + 'px';
    s.style.height = s.style.width;
    s.style.animationDuration  = (Math.random() * 3 + 1.5) + 's';
    s.style.animationDelay     = (Math.random() * 4) + 's';
    container.appendChild(s);
  }
  document.getElementById('scene').insertBefore(container, document.querySelector('.sky').nextSibling);
}

//montanha
function buildMountains() {
  const old = document.getElementById('mountainsLayer');
  if (old) old.remove();

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'mountainsLayer';
  svg.setAttribute('viewBox', '0 0 1200 200');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.style.cssText = `
    position:absolute;
    bottom:32%;
    left:0; right:0;
    width:100%; height:22%;
    pointer-events:none;
  `;

  // montanha traseira
  const far = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  far.setAttribute('points', '0,200 80,60 200,130 360,30 520,110 680,20 820,90 960,15 1100,80 1200,40 1200,200');
  far.setAttribute('fill', 'rgba(80,20,80,0.55)');
  far.style.filter = 'blur(1px)';

  //montanha meio
  const mid = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  mid.setAttribute('points', '0,200 0,140 150,80 300,150 480,50 640,130 800,40 950,110 1100,55 1200,90 1200,200');
  mid.setAttribute('fill', 'rgba(50,10,60,0.7)');

  //mont frontal
  const front = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  front.setAttribute('points', '0,200 0,180 200,120 400,180 600,100 800,170 1000,90 1200,150 1200,200');
  front.setAttribute('fill', 'rgba(25,5,35,0.85)');

  svg.appendChild(far);
  svg.appendChild(mid);
  svg.appendChild(front);
  document.getElementById('scene').appendChild(svg);
}

//predio japa
function buildBuildings() {
  const bldgs = document.getElementById('buildings');
  bldgs.innerHTML = '';

  //peleta dos predios
  const palettes = [
    ['#1e1040', '#2a1858'],
    ['#0e1a30', '#182840'],
    ['#301020', '#401828'],
    ['#102030', '#182840'],
    ['#1a0e30', '#261648'],
    ['#0a1822', '#102030'],
    ['#281028', '#381840'],
    ['#1c1034', '#261848'],
  ];

  const signs = ['東京', '京都', '大阪', 'えこ', '緑市', '未来', '花'];

  const configs = [
    { w: 52,  h: 130, style: 0, hasRoof: true,  hasAntenna: true  },
    { w: 70,  h: 100, style: 1, hasRoof: false, hasAntenna: true  },
    { w: 44,  h: 155, style: 2, hasRoof: true,  hasAntenna: false },
    { w: 88,  h: 95,  style: 3, hasRoof: false, hasAntenna: true  },
    { w: 60,  h: 140, style: 4, hasRoof: true,  hasAntenna: true  },
    { w: 48,  h: 110, style: 5, hasRoof: false, hasAntenna: false },
    { w: 75,  h: 125, style: 6, hasRoof: true,  hasAntenna: true  },
    { w: 56,  h: 90,  style: 7, hasRoof: false, hasAntenna: true  },
    { w: 64,  h: 145, style: 0, hasRoof: true,  hasAntenna: false },
    { w: 82,  h: 105, style: 1, hasRoof: false, hasAntenna: true  },
    { w: 50,  h: 120, style: 2, hasRoof: true,  hasAntenna: true  },
    { w: 72,  h: 88,  style: 3, hasRoof: false, hasAntenna: false },
    { w: 46,  h: 135, style: 4, hasRoof: true,  hasAntenna: true  },
    { w: 90,  h: 115, style: 5, hasRoof: false, hasAntenna: true  },
  ];

  configs.forEach((c, idx) => {
    const [col1, col2] = palettes[c.style];
    const b = document.createElement('div');
    b.className = 'building';
    b.style.cssText = `
      width:${c.w}px; height:${c.h}px;
      background: linear-gradient(175deg, ${col1} 0%, ${col2} 100%);
      border-left: 1px solid rgba(255,150,80,0.08);
      border-right: 1px solid rgba(0,0,0,0.3);
    `;

    //telhado
    if (c.hasRoof) {
      const r1 = document.createElement('div');
      r1.className = 'roof';
      r1.style.background = col1;
      const r2 = document.createElement('div');
      r2.className = 'roof2';
      r2.style.background = col1;
      b.appendChild(r2);
      b.appendChild(r1);
    }

    //antena
    if (c.hasAntenna) {
      const ant = document.createElement('div');
      ant.className = 'antenna';
      b.appendChild(ant);
    }

    //janela em linhas q nem d uma casa de desenho
    const rows = Math.floor((c.h - 20) / 18);
    const cols = Math.max(2, Math.floor(c.w / 20));
    for (let r = 0; r < rows; r++) {
      const row = document.createElement('div');
      row.className = 'win-row';
      for (let col = 0; col < cols; col++) {
        const w = document.createElement('div');
        const rnd = Math.random();
        w.className = 'win' + (rnd < 0.2 ? ' off' : rnd < 0.35 ? ' blue' : '');
        row.appendChild(w);
      }
      b.appendChild(row);
    }

    // luz
    if (Math.random() < 0.4 && c.h > 100) {
      const sign = document.createElement('div');
      sign.className = 'sign';
      sign.style.bottom = (20 + Math.random() * 40) + '%';
      sign.textContent = signs[Math.floor(Math.random() * signs.length)];
      b.appendChild(sign);
    }

    bldgs.appendChild(b);
  });
}

//linha rua
function buildRoadLines() {
  const rl = document.getElementById('roadLines');
  rl.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const line = document.createElement('div');
    line.className = 'road-line';
    line.style.animationDelay = `${i * 0.1}s`;
    line.style.left = `${i * 12}vw`;
    rl.appendChild(line);
  }
}

//cerejeira
function buildTrees() {
  //remover arvores podres
  document.querySelectorAll('.tree-js').forEach(t => t.remove());

  const positions = [3, 16, 30, 70, 84, 96];
  const sizes     = [1, 0.85, 1.1, 0.9, 1.05, 0.8];
  const scene     = document.getElementById('scene');

  positions.forEach((left, i) => {
    const tree = document.createElement('div');
    tree.className = 'tree tree-js';
    tree.style.left = left + '%';
    const sc = sizes[i];
    tree.style.transform = `scale(${sc})`;
    tree.style.transformOrigin = 'bottom center';

    const leaves = document.createElement('div');
    leaves.className = 'leaves';
    const trunk = document.createElement('div');
    trunk.className = 'trunk';

    tree.appendChild(leaves);
    tree.appendChild(trunk);
    scene.appendChild(tree);

    //folhas caindo
    for (let p = 0; p < 5; p++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.cssText = `
        left: ${left + (Math.random() * 6 - 3)}%;
        top: ${22 + Math.random() * 10}%;
        position: absolute;
        animation-duration: ${2.5 + Math.random() * 3}s;
        animation-delay: ${Math.random() * 4}s;
        z-index: 5;
      `;
      scene.appendChild(petal);
    }
  });
}

//lanterna
function buildLanterns() {
  document.querySelectorAll('.lantern-post').forEach(l => l.remove());

  const positions = [10, 42, 58, 90];
  const scene     = document.getElementById('scene');

  positions.forEach(left => {
    const post = document.createElement('div');
    post.className = 'lantern-post';
    post.style.left = left + '%';

    const lantern = document.createElement('div');
    lantern.className = 'lantern';
    const body = document.createElement('div');
    body.className = 'post-body';

    post.appendChild(lantern);
    post.appendChild(body);
    scene.appendChild(post);
  });
}

//nuvens
function buildClouds() {
  document.querySelectorAll('.cloud-js').forEach(c => c.remove());

  const scene = document.getElementById('scene');
  const cloudConfigs = [
    { w: 110, h: 26, top: 7,  dur: 18, delay: 0  },
    { w:  85, h: 20, top: 14, dur: 25, delay: 7  },
    { w: 130, h: 30, top: 4,  dur: 32, delay: 14 },
    { w:  70, h: 18, top: 19, dur: 22, delay: 3  },
  ];

  cloudConfigs.forEach(cfg => {
    const cloud = document.createElement('div');
    cloud.className = 'cloud cloud-js';
    cloud.style.cssText = `
      width:${cfg.w}px; height:${cfg.h}px;
      top:${cfg.top}%; left:-${cfg.w + 20}px;
      animation-duration:${cfg.dur}s;
      animation-delay:${cfg.delay}s;
    `;

    //bolha d nuvem
    [
      { w: cfg.w * 0.55, h: cfg.h * 1.7, t: -cfg.h * 0.8, l: cfg.w * 0.12 },
      { w: cfg.w * 0.42, h: cfg.h * 1.5, t: -cfg.h * 0.7, l: cfg.w * 0.48 },
    ].forEach(b => {
      const blob = document.createElement('div');
      blob.style.cssText = `
        position:absolute;
        width:${b.w}px; height:${b.h}px;
        background:rgba(255,185,130,0.5);
        border-radius:50%;
        top:${b.t}px; left:${b.l}px;
      `;
      cloud.appendChild(blob);
    });

    scene.appendChild(cloud);
  });
}
//controle do jogo
function startGame() {
  lives     = 3;
  score     = 0;
  timeLeft  = 120;

  showScreen('gameScreen');
  buildScene();
  updateUI();
  shuffleItems();
  spawnNextItem();
  startTimer();
}

function showScreen(id) {
  ['startScreen', 'gameScreen', 'gameOverScreen'].forEach(s => {
    document.getElementById(s).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function shuffleItems() {
  remainingItems = [...ITEMS].sort(() => Math.random() - 0.5);
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  if (dragEl) { dragEl.remove(); dragEl = null; }

  const ref =
    REFLECTIONS.find(r => score >= r.min && score <= r.max) ||
    REFLECTIONS[REFLECTIONS.length - 1];

  document.getElementById('goIcon').textContent       = ref.icon;
  document.getElementById('goTitle').textContent      = ref.title;
  document.getElementById('goScore').textContent      =
    `Você separou ${score} ${score === 1 ? 'item' : 'itens'} corretamente!`;
  document.getElementById('goReflection').innerHTML   = ref.msg;

  showScreen('gameOverScreen');
}
//config
function updateUI() {
  updateLivesDisplay();
  updateTimerDisplay();
  document.getElementById('scoreDisplay').textContent = `✅ ${score}`;
}

function updateLivesDisplay() {
  let html = '';
  for (let i = 0; i < 3; i++) {
    html += `<span class="heart${i >= lives ? ' lost' : ''}">❤️</span>`;
  }
  document.getElementById('livesDisplay').innerHTML = html;
}

function updateTimerDisplay() {
  const m  = Math.floor(timeLeft / 60);
  const s  = timeLeft % 60;
  const el = document.getElementById('timerDisplay');
  el.textContent = `⏱️ ${m}:${s.toString().padStart(2, '0')}`;
  el.classList.toggle('urgent', timeLeft <= 20);
}
//spawn do item
function spawnNextItem() {
  if (remainingItems.length === 0) shuffleItems();
  currentItem = remainingItems.pop();

  const zone = document.getElementById('spawnZone');
  zone.innerHTML = '';

  const el = document.createElement('div');
  el.className    = 'waste-item';
  el.dataset.type = currentItem.type;
  el.innerHTML    = currentItem.svg + `<div class="item-label">${currentItem.label}</div>`;

  zone.appendChild(el);
  dragEl = el;
  setupDrag(el);
}
//centro cursor drag
const HALF = 48;

function attachToCursor(cx, cy) {
  //cursor grudar
  document.body.appendChild(dragEl);
  dragEl.style.position  = 'fixed';
  dragEl.style.zIndex    = '999';
  dragEl.style.margin    = '0';
  dragEl.style.left      = (cx - HALF) + 'px';
  dragEl.style.top       = (cy - HALF) + 'px';
  dragEl.style.transform = 'rotate(3deg) scale(1.08)';
  dragEl.style.pointerEvents = 'none';
}

function moveWithCursor(cx, cy) {
  if (!dragEl) return;
  dragEl.style.left = (cx - HALF) + 'px';
  dragEl.style.top  = (cy - HALF) + 'px';

  document.querySelectorAll('.bin').forEach(bin => {
    const r    = bin.getBoundingClientRect();
    const over = cx > r.left && cx < r.right && cy > r.top && cy < r.bottom;
    bin.classList.toggle('over', over);
  });
}

function releaseItem(cx, cy) {
  if (!dragEl) return;
  document.querySelectorAll('.bin').forEach(b => b.classList.remove('over'));

  let dropped = false;
  document.querySelectorAll('.bin').forEach(bin => {
    const r = bin.getBoundingClientRect();
    if (cx > r.left && cx < r.right && cy > r.top && cy < r.bottom) {
      dropped = true;
      const correct = bin.dataset.type === dragEl.dataset.type;
      handleDrop(correct, cx, cy);
    }
  });

  if (!dropped) {
    //devolve centro o item
    dragEl.style.pointerEvents = 'all';
    dragEl.style.transform     = '';
    dragEl.style.left = (window.innerWidth  / 2 - HALF) + 'px';
    dragEl.style.top  = (window.innerHeight / 2 - HALF) + 'px';
    //restaura envento de pegar
    setupDrag(dragEl);
  }
}

function setupDrag(el) {
  el.style.pointerEvents = 'all';
  el.style.cursor        = 'grab';

  //mouse
  function onMouseDown(e) {
    e.preventDefault();
    attachToCursor(e.clientX, e.clientY);

    function onMouseMove(e) { moveWithCursor(e.clientX, e.clientY); }
    function onMouseUp(e)   {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup',   onMouseUp);
      releaseItem(e.clientX, e.clientY);
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup',   onMouseUp);
  }
  el.addEventListener('mousedown', onMouseDown);

  //toque
  function onTouchStart(e) {
    e.preventDefault();
    const t = e.touches[0];
    attachToCursor(t.clientX, t.clientY);
  }
  function onTouchMove(e) {
    e.preventDefault();
    const t = e.touches[0];
    moveWithCursor(t.clientX, t.clientY);
  }
  function onTouchEnd(e) {
    const t = e.changedTouches[0];
    releaseItem(t.clientX, t.clientY);
  }
  el.addEventListener('touchstart', onTouchStart, { passive: false });
  el.addEventListener('touchmove',  onTouchMove,  { passive: false });
  el.addEventListener('touchend',   onTouchEnd);
}
//resul
function handleDrop(correct, x, y) {
  if (dragEl) { dragEl.remove(); dragEl = null; }

  showFeedback(correct, x, y);

  if (correct) {
    score++;
    document.getElementById('scoreDisplay').textContent = `✅ ${score}`;
  } else {
    lives--;
    updateLivesDisplay();
    if (lives <= 0) {
      setTimeout(endGame, 700);
      return;
    }
  }
  setTimeout(spawnNextItem, 600);
}

function showFeedback(correct, x, y) {
  const el = document.createElement('div');
  el.className   = `feedback-pop ${correct ? 'correct' : 'wrong'}`;
  el.innerHTML   = correct
    ? '<span class="fb-icon">✅</span><span class="fb-text">Correto!</span>'
    : '<span class="fb-icon">❌</span><span class="fb-text">Errado!</span>';
  el.style.left  = (x - 80) + 'px';
  el.style.top   = (y - 60) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}