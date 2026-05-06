// ===================================================================
//  GAME DATA
// ===================================================================

const CITIES = [
  {
    id: 0,
    name: "Tel Aviv",
    subtitle: "A Cidade Branca",
    unlockCost: 0,
    goal: 500000,
    bgColor: "#e8c87a",
    skyTop: "#2196c8",
    skyBot: "#87d4f0",
    hasBeach: true,
    buildings: [
      { id:"solar_panel",  name:"Painel Solar",     cost:150,   income:30,   baseInterval:5000,  maxIncome:100,    maxInterval:1000, desc:"Energia limpa do sol do Negev",     color:"#f5c518", shape:"solar" },
      { id:"garden",       name:"Jardim Urbano",   cost:400,   income:100,  baseInterval:15000, maxIncome:1000,   maxInterval:3000, desc:"Horta comunitaria sustentavel",     color:"#4caf50", shape:"garden" },
      { id:"wind_turbine", name:"Turbina de Vento",cost:12000, income:1500, baseInterval:30000, maxIncome:15000,  maxInterval:6000, desc:"Energia eolica costeira",            color:"#b0c8e0", shape:"wind" },
      { id:"eco_bus",      name:"Onibus Eletrico", cost:40000, income:4000, baseInterval:35000, maxIncome:40000,  maxInterval:7000, desc:"Transporte publico verde",           color:"#4caf50", shape:"bus" },
    ]
  },
  {
    id: 1,
    name: "Jerusalem",
    subtitle: "A Cidade Dourada",
    unlockCost: 500000,
    goal: 3000000,
    bgColor: "#c9b48a",
    skyTop: "#6a8cbf",
    skyBot: "#b8d4f0",
    scene: "jerusalem",
    buildings: [
      { id:"stone_house",   name:"Casa de Pedra",       cost:80000,   income:1000,  baseInterval:5000,  maxIncome:5000,   maxInterval:1000, desc:"Construcao com pedra calcaria local", color:"#d4c098", shape:"stone_house" },
      { id:"solar_roof",    name:"Telhado Solar",        cost:600000,  income:8000,  baseInterval:20000, maxIncome:40000,  maxInterval:4000, desc:"Integracao fotovoltaica urbana",      color:"#f5c518", shape:"solar_roof" },
      { id:"museum",        name:"Museu Verde",          cost:2000000, income:20000, baseInterval:25000, maxIncome:100000, maxInterval:5000, desc:"Patrimonio cultural sustentavel",     color:"#c9a060", shape:"museum" },
      { id:"smart_grid",    name:"Rede Inteligente",     cost:20000000,income:150000,baseInterval:35000, maxIncome:750000, maxInterval:7000, desc:"Distribuicao de energia AI",          color:"#f0c040", shape:"grid" },
    ]
  },
  {
    id: 2,
    name: "Haifa",
    subtitle: "A Cidade do Carmelo",
    unlockCost: 3000000,
    goal: 20000000,
    bgColor: "#a8c0b0",
    skyTop: "#3a7ab5",
    skyBot: "#90c8e8",
    scene: "haifa",
    buildings: [
      { id:"port_solar",     name:"Porto Solar",       cost:5000000,   income:500000,  baseInterval:5000,  maxIncome:2500000,  maxInterval:1000, desc:"Paineis solares flutuantes no porto", color:"#f5c518", shape:"port" },
      { id:"desalination",   name:"Dessalinizacao",    cost:50000000,  income:4000000, baseInterval:20000, maxIncome:20000000, maxInterval:4000, desc:"Agua potavel do Mediterraneo",        color:"#29b6f6", shape:"desal" },
      { id:"biogas",         name:"Planta de Biogas",  cost:500000000, income:30000000,baseInterval:30000, maxIncome:150000000,maxInterval:6000, desc:"Energia de residuos organicos",       color:"#8bc34a", shape:"biogas" },
      { id:"smart_port",     name:"Porto Inteligente", cost:1500000000,income:80000000,baseInterval:35000, maxIncome:400000000,maxInterval:7000, desc:"Logistica automatizada verde",        color:"#78909c", shape:"s_port" },
    ]
  },
  {
    id: 3,
    name: "Beersheba",
    subtitle: "A Capital do Negev",
    unlockCost: 20000000,
    goal: 150000000,
    bgColor: "#d4b87a",
    skyTop: "#c8905a",
    skyBot: "#f0d090",
    scene: "beersheba",
    buildings: [
      { id:"desert_solar",   name:"Fazenda Solar Deserto", cost:500000000000,   income:50000000000,  baseInterval:5000,  maxIncome:250000000000, maxInterval:1000, desc:"Maior solar farm de Israel",      color:"#f5c518", shape:"big_solar" },
      { id:"smart_city_hub", name:"Hub Smart City",        cost:5000000000000,  income:400000000000, baseInterval:20000, maxIncome:2000000000000,maxInterval:4000, desc:"Centro de dados sustentavel",      color:"#4fc3f7", shape:"hub" },
      { id:"hydrogen_plant", name:"Planta de Hidrogenio",  cost:50000000000000, income:3000000000000,baseInterval:30000, maxIncome:15000000000000,maxInterval:6000,desc:"Hidrogenio verde para exportacao", color:"#e0e0e0", shape:"h2" },
      { id:"mega_solar",     name:"Mega Solar Park",       cost:150000000000000,income:8000000000000,baseInterval:35000, maxIncome:40000000000000,maxInterval:7000,desc:"10GW de energia renovavel",        color:"#ffca28", shape:"mega" },
    ]
  },
  {
    id: 4,
    name: "Eilat",
    subtitle: "A Pérola do Mar Vermelho",
    unlockCost: 150000000,
    goal: 1000000000,
    bgColor: "#70b8d0",
    skyTop: "#1a4a80",
    skyBot: "#4090c0",
    scene: "eilat",
    buildings: [
      { id:"coral_farm",    name:"Fazenda de Coral",  cost:50000000000000000,   income:5000000000000000,  baseInterval:5000,  maxIncome:25000000000000000,  maxInterval:1000, desc:"Turismo subaquatico sustentavel", color:"#ff6b9d", shape:"coral" },
      { id:"wind_sea",      name:"Eolica Offshore",   cost:500000000000000000,  income:40000000000000000, baseInterval:20000, maxIncome:200000000000000000, maxInterval:4000, desc:"Turbinas de vento no mar",        color:"#b0d8f0", shape:"offshore" },
      { id:"tidal_power",   name:"Energia das Mares", cost:5000000000000000000, income:300000000000000000,baseInterval:30000, maxIncome:1500000000000000000,maxInterval:6000, desc:"Aproveitamento das mares",        color:"#29b6f6", shape:"tidal" },
      { id:"green_airport", name:"Aeroporto Verde",   cost:15000000000000000000,income:800000000000000000,baseInterval:35000, maxIncome:4000000000000000000,maxInterval:7000, desc:"Aviacao 100% sustentavel",        color:"#78909c", shape:"airport" },
    ]
  }
];

// ===================================================================
//  GAME STATE
// ===================================================================

let money = 225;
let totalIncome = 0;
let currentCity = 0;
let gameTime = 0;
// units[cityIndex][buildingId] = array of {incomeLevel, speedLevel} — one entry per purchased unit
let cityStates = CITIES.map(() => ({ units: {}, unlocked: false }));
cityStates[0].unlocked = true;
const MAX_LEVEL = 7; const MAX_UNITS = 4;
function incomeMultiplier(lvl) { return Math.pow(1.5, lvl - 1); }
function speedInterval(lvl)    { return Math.round(5000 * Math.pow(0.85, lvl - 1)); }
function upgradeCostFn(base, lvl){ return Math.round(base * Math.pow(2, lvl)); }
function getOverallSpeedInterval() {
  let best = 5000;
  CITIES.forEach((city, ci) => {
    const st = cityStates[ci];
    city.buildings.forEach(b => {
      const units = st.units[b.id] || [];
      units.forEach(u => {
        const iv = speedInterval(u.speedLevel);
        if (iv < best) best = iv;
      });
    });
  });
  return best;
}
let selectedUnit = null;
const expandedUnits = new Set();
// Building entrance animations: key = "cityIdx_buildId_unitIdx", value = {startY, targetY, startT}
const buildingAnims = {};
// Income level flash animations: key = "cityIdx_buildId_unitIdx", value = {lvl, startT}
const incomeAnims = {};

// ===================================================================
//  CANVAS DRAWING
// ===================================================================

const canvas = document.getElementById('city-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  drawCity();
}

window.addEventListener('resize', resizeCanvas);

function formatMoney(n) {
  if (n >= 1e9) return '$ ' + (n/1e9).toFixed(2) + 'B';
  if (n >= 1e6) return '$ ' + (n/1e6).toFixed(2) + 'M';
  if (n >= 1e3) return '$ ' + (n/1e3).toFixed(1) + 'K';
  return '$ ' + Math.floor(n);
}

// ===================================================================
//  DRAW CITY
// ===================================================================

function drawCity() {
  const W = canvas.width, H = canvas.height;
  const city = CITIES[currentCity];
  const state = cityStates[currentCity];
  const t = Date.now() / 1000;

  ctx.clearRect(0, 0, W, H);

  if (city.hasBeach)         drawTelAvivScene(W, H, t);
  else if (city.scene === 'jerusalem')  drawJerusalemScene(W, H, t);
  else if (city.scene === 'haifa')      drawHaifaScene(W, H, t);
  else if (city.scene === 'beersheba') drawBeershebaScene(W, H, t);
  else if (city.scene === 'eilat')     drawEilatScene(W, H, t);

  // BUILT ITEMS
  const buildings = city.buildings;
  let slotIndex = 0;
  buildings.forEach(b => {
    const units = state.units[b.id] || [];
    for (let i = 0; i < units.length; i++) {
      const slot = city.hasBeach ? getBeachSlot(slotIndex, W, H) : getSlot(slotIndex, W, H);
      let drawY = slot.y;

      // Rise animation (non-Tel Aviv)
      if (currentCity !== 0) {
        const key = currentCity + '_' + b.id + '_' + i;
        const anim = buildingAnims[key];
        if (anim) {
          const elapsed = (Date.now() - anim.startT) / 600; // 0.6s rise
          if (elapsed < 1) {
            const ease = 1 - Math.pow(1 - elapsed, 3);
            drawY = anim.startY + (anim.targetY - anim.startY) * ease;
          } else {
            drawY = anim.targetY;
            delete buildingAnims[key];
          }
        }
      }

      // Income flash animation
      const iKey = currentCity + '_' + b.id + '_' + i;
      const iAnim = incomeAnims[iKey];
      let flashAlpha = 0;
      if (iAnim) {
        const elapsed = (Date.now() - iAnim.startT) / 800;
        if (elapsed < 1) { flashAlpha = Math.sin(elapsed * Math.PI); }
        else { delete incomeAnims[iKey]; }
      }

      drawBuilding(b, slot.x, drawY, H, b.color, i, units[i].incomeLevel);

      // Income level flash glow overlay
      if (flashAlpha > 0) {
        ctx.save();
        ctx.translate(slot.x, drawY);
        ctx.globalAlpha = flashAlpha * 0.7;
        ctx.fillStyle = '#ffe040';
        ctx.beginPath();ctx.arc(0, -30, 45, 0, Math.PI*2);ctx.fill();
        // Level number
        ctx.globalAlpha = flashAlpha;
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px Cinzel, serif';
        ctx.textAlign = 'center';
        ctx.fillText('LV ' + units[i].incomeLevel, 0, -25);
        ctx.restore();
      }

      slotIndex++;
    }
  });
}

function drawTelAvivScene(W, H, t) {
  // 1) CÉU no topo
  const sky = ctx.createLinearGradient(0, 0, 0, H * 0.30);
  sky.addColorStop(0, '#2196c8');
  sky.addColorStop(1, '#87d4f0');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H * 0.30);

  // SUN
  drawSunSimple(W * 0.85, H * 0.08, 24);

  // 2) PRÉDIOS logo abaixo do céu
  const bldgGround = H * 0.30;
  const bldgs = [
    {x:0.0,  w:50, h:70,  c:'#dedad2'},
    {x:0.06, w:34, h:105, c:'#ccd8e8'},
    {x:0.11, w:42, h:80,  c:'#e0dcd0'},
    {x:0.16, w:28, h:125, c:'#d4e4f4'},
    {x:0.21, w:46, h:85,  c:'#ddd8cc'},
    {x:0.27, w:32, h:145, c:'#c8d8ea'},
    {x:0.32, w:38, h:95,  c:'#e4e0d4'},
    {x:0.37, w:24, h:155, c:'#d0e0ee'},
    {x:0.42, w:52, h:75,  c:'#e0dcd0'},
    {x:0.48, w:30, h:135, c:'#ccd4e4'},
    {x:0.53, w:44, h:90,  c:'#dedad2'},
    {x:0.58, w:26, h:165, c:'#d4e4f4'},
    {x:0.63, w:40, h:100, c:'#e0d8cc'},
    {x:0.68, w:34, h:140, c:'#c8d8e8'},
    {x:0.73, w:28, h:180, c:'#e4e0d8'},
    {x:0.78, w:48, h:110, c:'#ddd8c8'},
    {x:0.83, w:32, h:170, c:'#cce0f0'},
    {x:0.88, w:38, h:125, c:'#e0dcd4'},
    {x:0.93, w:22, h:195, c:'#d0e4f8'},
    {x:0.96, w:36, h:150, c:'#dedad0'},
  ];
  bldgs.forEach(b => {
    const bx = W * b.x;
    const by = bldgGround - b.h;
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(bx+3, by+3, b.w, b.h);
    ctx.fillStyle = b.c;
    ctx.fillRect(bx, by, b.w, b.h);
    ctx.fillStyle = 'rgba(100,160,210,0.4)';
    const wc = Math.floor(b.w/10), wr = Math.floor(b.h/14);
    for (let r=0;r<wr;r++) for (let c=0;c<wc;c++)
      ctx.fillRect(bx+3+c*10, by+5+r*14, 6, 8);
    ctx.fillStyle = shadeColor(b.c,-22);
    ctx.fillRect(bx+b.w, by+4, 5, b.h-4);

  });

  // Faixa verde entre prédios e areia
  ctx.fillStyle = '#4a8830';
  ctx.fillRect(0, bldgGround, W, 12);
  for (let tx = 20; tx < W; tx += 32) {
    ctx.fillStyle = '#3d7228';
    ctx.beginPath(); ctx.arc(tx, bldgGround, 8, Math.PI, 0); ctx.fill();
  }

  // 3) AREIA no meio
  const sandTop = H * 0.30;
  const sandBot = H * 0.78;
  const sand = ctx.createLinearGradient(0, sandTop, 0, sandBot);
  sand.addColorStop(0, '#e8d090');
  sand.addColorStop(1, '#c8a850');
  ctx.fillStyle = sand;
  ctx.fillRect(0, sandTop, W, sandBot - sandTop);

  // textura areia
  ctx.strokeStyle = 'rgba(180,140,50,0.18)';
  ctx.lineWidth = 1;
  for (let r=0;r<5;r++) {
    const sy = sandTop + 20 + r * (sandBot-sandTop-20)/5;
    ctx.beginPath(); ctx.moveTo(0,sy);
    ctx.bezierCurveTo(W*0.3,sy-2,W*0.7,sy+2,W,sy); ctx.stroke();
  }

  // 2 PALMEIRAS sobre a areia
  drawPalmTree(W*0.22, sandTop, H*0.20, t);
  drawPalmTree(W*0.72, sandTop, H*0.18, t);

  // 4) MAR em baixo (frente)
  const seaTop = H * 0.78;
  const sea = ctx.createLinearGradient(0, seaTop, 0, H);
  sea.addColorStop(0, '#22c4b8');
  sea.addColorStop(0.5, '#1ab0c8');
  sea.addColorStop(1, '#1290b0');
  ctx.fillStyle = sea;
  ctx.fillRect(0, seaTop, W, H - seaTop);

  // Ondas
  ctx.strokeStyle = 'rgba(255,255,255,0.30)';
  ctx.lineWidth = 2;
  for (let r=0;r<5;r++) {
    const wy = seaTop + 12 + r * (H-seaTop-12)/5 + Math.sin(t*1.2+r)*3;
    ctx.beginPath(); ctx.moveTo(0, wy);
    ctx.bezierCurveTo(W*0.25,wy-5, W*0.75,wy+5, W,wy);
    ctx.stroke();
  }
  // Reflexo do sol no mar
  ctx.fillStyle = 'rgba(255,255,180,0.12)';
  ctx.beginPath();
  ctx.ellipse(W*0.75, seaTop+30, 60, 15, 0, 0, Math.PI*2);
  ctx.fill();
}

function drawCloud(cx, cy, w, h) {
  ctx.fillStyle = 'rgba(255,255,255,0.88)';
  ctx.beginPath(); ctx.ellipse(cx,cy,w*0.5,h*0.5,0,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx-w*0.25,cy+h*0.1,w*0.3,h*0.4,0,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx+w*0.25,cy+h*0.1,w*0.28,h*0.38,0,0,Math.PI*2); ctx.fill();
}

function drawSunSimple(x, y, r) {
  const g = ctx.createRadialGradient(x,y,2,x,y,r*3);
  g.addColorStop(0,'rgba(255,230,80,0.6)'); g.addColorStop(1,'rgba(255,230,80,0)');
  ctx.fillStyle=g; ctx.fillRect(x-r*3,y-r*3,r*6,r*6);
  ctx.fillStyle='#ffe040'; ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
}

function drawPalmTree(x, y, h, t) {
  ctx.strokeStyle='#8b6520'; ctx.lineWidth=4;
  ctx.beginPath(); ctx.moveTo(x,y);
  ctx.bezierCurveTo(x+4,y-h*0.5,x-3,y-h*0.8,x+2,y-h); ctx.stroke();
  const angs=[-0.5,-0.2,0.1,0.4,0.8,1.3,1.8,2.3,2.8,-1.0,-1.5,-2.0,-2.5,-3.0];
  ctx.lineWidth=2;
  angs.forEach((a,i)=>{
    const sway=Math.sin(t*0.6+i*0.5)*0.06;
    const la=a+sway;
    ctx.strokeStyle=i%2===0?'#3a7a20':'#4a8a28';
    ctx.beginPath(); ctx.moveTo(x+2,y-h);
    ctx.bezierCurveTo(x+2+Math.cos(la)*h*0.25,y-h+Math.sin(la)*h*0.25,
      x+2+Math.cos(la)*h*0.5,y-h+Math.sin(la)*h*0.5,
      x+2+Math.cos(la)*h*0.6,y-h+Math.sin(la)*h*0.6); ctx.stroke();
  });
}

// Ground Y per city scene — buildings always placed on solid ground
function getGroundY(city, H) {
  if (city.hasBeach)              return H * 0.55; // Tel Aviv: sand
  if (city.scene === "jerusalem")  return H * 0.88; // bottom of screen
  if (city.scene === "haifa")      return H * 0.88; // bottom of screen
  if (city.scene === "beersheba")  return H * 0.56; // plaza/concrete
  if (city.scene === "eilat")      return H * 0.88; // bottom of screen
  return H * 0.52;
}

function getBeachSlot(index, W, H) {
  const city = CITIES[currentCity];
  const groundY = getGroundY(city, H);
  const cols = Math.max(1, Math.floor(W / 110));
  const col = index % cols;
  const row = Math.floor(index / cols);
  const x = 55 + col * 110;
  const y = groundY - row * 110;
  return { x, y };
}

function getSlot(index, W, H) {
  const city = CITIES[currentCity];
  const groundY = getGroundY(city, H);
  const cols = Math.max(1, Math.floor(W / 110));
  const col = index % cols;
  const row = Math.floor(index / cols);
  const x = 55 + col * 110;
  const rowOffset = (city.scene === 'jerusalem') ? 0 : 110;
  const y = groundY - row * rowOffset;
  return { x, y };
}

// ===================================================================
//  JERUSALEM SCENE - Stone walls, arches, cobblestones
// ===================================================================
function drawJerusalemScene(W, H, t) {
  // Sky - warm blue
  const sky = ctx.createLinearGradient(0,0,0,H*0.38);
  sky.addColorStop(0,'#7aA0c8'); sky.addColorStop(1,'#c8ddf0');
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H*0.38);
  drawSunSimple(W*0.8,H*0.1,24);

  // Background - old city walls and buildings (limestone beige)
  const wallY = H*0.38;
  // Sky backdrop of old city silhouette
  ctx.fillStyle='#c9b48a';
  ctx.fillRect(0, wallY, W, H*0.14);

  // Distant buildings / old city walls silhouette
  const wallH = [55,40,70,50,80,45,65,35,75,50,60,40,90,55,45,70,35,80,50,65];
  ctx.fillStyle='#b8a070';
  for(let i=0;i<wallH.length;i++){
    const bx=i*(W/wallH.length), bw=W/wallH.length+2;
    ctx.fillRect(bx, wallY-wallH[i%wallH.length], bw, wallH[i%wallH.length]);
  }
  // Minaret
  ctx.fillStyle='#c9b48a'; ctx.fillRect(W*0.35-5,wallY-110,10,80);
  ctx.fillStyle='#a89060'; ctx.beginPath();ctx.arc(W*0.35,wallY-110,7,Math.PI,0);ctx.fill();

  // Stone wall foreground - only 3 rows of blocks then sand
  const groundY = H*0.52;
  const sandY = groundY + 56; // sand starts after 3 block rows
  ctx.fillStyle='#d4c090';
  ctx.fillRect(0,groundY-20,W,76);

  // Draw stone block pattern (only top 3 rows)
  ctx.fillStyle='#c8b480';
  const blockH=18, blockW=60;
  for(let row=0;row<3;row++){
    for(let col=0;col<Math.ceil(W/blockW)+1;col++){
      const offset = row%2===0?0:blockW/2;
      const bx=col*blockW-offset, by=groundY+row*blockH;
      ctx.strokeStyle='#b8a060'; ctx.lineWidth=1;
      ctx.strokeRect(bx,by,blockW-1,blockH-1);
    }
  }

  // Sand/ground area below the wall
  const sandGrad = ctx.createLinearGradient(0,sandY,0,H);
  sandGrad.addColorStop(0,'#e8d090'); sandGrad.addColorStop(1,'#d4b870');
  ctx.fillStyle=sandGrad;
  ctx.fillRect(0,sandY,W,H-sandY);

  // Foreground stone wall sections
  ctx.fillStyle='#c8b070';
  ctx.fillRect(0,groundY-20,W,22);
  for(let wx=0;wx<W;wx+=55){
    ctx.fillStyle=wx%110===0?'#c0a860':'#caba78';
    ctx.fillRect(wx,groundY-20,54,20);
    ctx.strokeStyle='#b09850'; ctx.lineWidth=0.8;
    ctx.strokeRect(wx,groundY-20,54,20);
  }

  // Stone arch (iconic Jerusalem arch)
  const archX=W*0.5, archY=groundY-20;
  ctx.fillStyle='#bfaa70';
  ctx.fillRect(archX-55,archY-80,30,82); // left pillar
  ctx.fillRect(archX+25,archY-80,30,82); // right pillar
  ctx.beginPath();ctx.arc(archX,archY-80,55,Math.PI,0);
  ctx.fillStyle='#bfaa70';ctx.fill();
  ctx.fillStyle=ctx.createLinearGradient(0,0,0,H*0.38);
  // arch opening (sky color)
  ctx.fillStyle='rgba(180,210,240,0.6)';
  ctx.beginPath();ctx.arc(archX,archY-80,42,Math.PI,0);ctx.fill();
  ctx.fillRect(archX-42,archY-80,84,60);

  // Olive trees
  for(let tx of [W*0.15, W*0.82]){
    ctx.fillStyle='#8b6520'; ctx.fillRect(tx-3,groundY-50,6,32);
    ctx.fillStyle='#6b8c3a';
    ctx.beginPath();ctx.arc(tx,groundY-58,18,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#7da045';
    ctx.beginPath();ctx.arc(tx-8,groundY-52,12,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.arc(tx+8,groundY-54,11,0,Math.PI*2);ctx.fill();
  }
}

// ===================================================================
//  HAIFA SCENE - Bahá'í Gardens, terraced gardens, sea in distance
// ===================================================================
function drawHaifaScene(W, H, t) {
  // === BEAUTIFUL SKY - Mediterranean gradient with clouds ===
  const sky = ctx.createLinearGradient(0,0,0,H*0.45);
  sky.addColorStop(0,'#0d5fa8');
  sky.addColorStop(0.4,'#2880d0');
  sky.addColorStop(0.8,'#60b8f0');
  sky.addColorStop(1,'#a8daf8');
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H*0.45);

  // Sun with rays
  drawSunSimple(W*0.82, H*0.1, 28);

  // Soft wispy clouds
  const clouds = [{x:0.12,y:0.08,w:120,h:28},{x:0.35,y:0.05,w:160,h:22},{x:0.62,y:0.09,w:100,h:20},{x:0.82,y:0.06,w:130,h:25}];
  clouds.forEach(cl => {
    const cx=W*cl.x, cy=H*cl.y;
    ctx.fillStyle='rgba(255,255,255,0.82)';
    ctx.beginPath();ctx.ellipse(cx,cy,cl.w*0.5,cl.h*0.5,0,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.ellipse(cx-cl.w*0.22,cy+cl.h*0.15,cl.w*0.32,cl.h*0.42,0,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.ellipse(cx+cl.w*0.24,cy+cl.h*0.12,cl.w*0.28,cl.h*0.38,0,0,Math.PI*2);ctx.fill();
  });

  // Horizon sea strip
  const seaGrad=ctx.createLinearGradient(0,H*0.40,0,H*0.50);
  seaGrad.addColorStop(0,'#1a78c8'); seaGrad.addColorStop(1,'#0d5a9e');
  ctx.fillStyle=seaGrad; ctx.fillRect(0,H*0.40,W,H*0.10);
  // Sea shimmer
  ctx.strokeStyle='rgba(255,255,255,0.2)'; ctx.lineWidth=1;
  for(let r=0;r<3;r++){
    const sy=H*0.42+r*H*0.025+Math.sin(t*0.8+r)*2;
    ctx.beginPath();ctx.moveTo(0,sy);ctx.bezierCurveTo(W*0.3,sy-3,W*0.7,sy+3,W,sy);ctx.stroke();
  }

  // === BAHÁI SHRINE - iconic golden dome, elegant ===
  const shrX=W*0.5, shrBase=H*0.50;
  // Terraced garden steps leading up to shrine
  const terW=[W*0.9,W*0.75,W*0.6,W*0.46,W*0.34,W*0.24];
  const terColors=['#5aaa40','#4a9c34','#3e9030','#34842a','#2c7824','#246a20'];
  for(let t2=0;t2<6;t2++){
    const ty=shrBase-t2*H*0.045;
    const tw=terW[t2];
    // Terrace grass
    ctx.fillStyle=terColors[t2];
    ctx.fillRect(shrX-tw/2,ty,tw,H*0.048);
    // White path line
    ctx.fillStyle='rgba(255,255,255,0.6)';
    ctx.fillRect(shrX-8,ty,16,H*0.048);
    // Cypress trees on terraces
    for(let px of [shrX-tw/2+20,shrX+tw/2-20]){
      if(px>0&&px<W){
        ctx.fillStyle='#1a5c18';
        ctx.beginPath();ctx.moveTo(px,ty);ctx.lineTo(px-6,ty+H*0.045);ctx.lineTo(px+6,ty+H*0.045);ctx.closePath();ctx.fill();
      }
    }
  }
  // Shrine base building
  const shrineTop = shrBase - 6*H*0.045;
  ctx.fillStyle='#f0ead8';
  ctx.fillRect(shrX-30,shrineTop,60,28);
  // Columns
  ctx.fillStyle='#e0d8c0';
  for(let cx=-22;cx<=22;cx+=11){ ctx.fillRect(shrX+cx-3,shrineTop-10,5,38); }
  // Golden dome - radial gradient for 3D effect
  const dg=ctx.createRadialGradient(shrX-10,shrineTop-18,2,shrX,shrineTop-10,30);
  dg.addColorStop(0,'#fff0a0'); dg.addColorStop(0.4,'#f0c020'); dg.addColorStop(1,'#9a6800');
  ctx.fillStyle=dg;
  ctx.beginPath();ctx.arc(shrX,shrineTop,30,Math.PI,0);ctx.fill();
  ctx.fillStyle='#c8a010'; ctx.fillRect(shrX-30,shrineTop,60,6);
  // Dome lantern on top
  ctx.fillStyle='#e8b800'; ctx.fillRect(shrX-4,shrineTop-32,8,22);
  ctx.beginPath();ctx.arc(shrX,shrineTop-32,5,0,Math.PI*2);ctx.fill();

  // === GROUND - green garden promenade ===
  const groundY=H*0.52;
  const gg=ctx.createLinearGradient(0,groundY,0,H);
  gg.addColorStop(0,'#c8b888'); gg.addColorStop(0.3,'#b8a878'); gg.addColorStop(1,'#a89868');
  ctx.fillStyle=gg; ctx.fillRect(0,groundY,W,H-groundY);

  // Garden path - white stone
  ctx.fillStyle='#e0dcc8';
  ctx.fillRect(shrX-22,groundY,44,H-groundY);
  ctx.strokeStyle='rgba(180,170,140,0.5)'; ctx.lineWidth=1;
  for(let py=groundY+15;py<H;py+=25){ ctx.beginPath();ctx.moveTo(shrX-22,py);ctx.lineTo(shrX+22,py);ctx.stroke(); }

  // Flower beds along ground
  for(let fbx=20;fbx<W;fbx+=90){
    if(Math.abs(fbx-shrX)<60) continue;
    ctx.fillStyle='#2d7a22'; ctx.fillRect(fbx,groundY+4,60,18);
    const flowerColors=['#ff6b9d','#ff8c42','#ffe040','#c084fc','#60d4f0'];
    for(let fi=0;fi<5;fi++){
      ctx.fillStyle=flowerColors[fi%5];
      ctx.beginPath();ctx.arc(fbx+6+fi*10,groundY+10,4,0,Math.PI*2);ctx.fill();
    }
  }

  // Palm trees along ground
  for(let px=30;px<W;px+=120){
    if(Math.abs(px-shrX)<80) continue;
    ctx.fillStyle='#8b6520'; ctx.fillRect(px-2,groundY-40,4,42);
    for(let a=0;a<6;a++){
      const ang=a*Math.PI/3-Math.PI/2;
      ctx.strokeStyle='#3a7020'; ctx.lineWidth=2.5;
      ctx.beginPath();ctx.moveTo(px,groundY-40);
      ctx.lineTo(px+Math.cos(ang)*22,groundY-40+Math.sin(ang)*14);ctx.stroke();
    }
  }
}

// ===================================================================
//  BEERSHEBA SCENE - Desert, concrete tower, arid landscape
// ===================================================================
function drawBeershebaScene(W, H, t) {
  // Sky - warm desert blue fading to haze
  const sky=ctx.createLinearGradient(0,0,0,H*0.38);
  sky.addColorStop(0,'#5090c0'); sky.addColorStop(0.6,'#90b8d8'); sky.addColorStop(1,'#c8d8e8');
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H*0.38);
  drawSunSimple(W*0.78,H*0.1,30);

  // Heat haze / clouds
  ctx.fillStyle='rgba(255,255,255,0.35)';
  ctx.beginPath();ctx.ellipse(W*0.2,H*0.12,80,18,0,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.ellipse(W*0.6,H*0.08,60,14,0,0,Math.PI*2);ctx.fill();

  // Background buildings - Beersheba concrete modernist style
  const bldgY=H*0.38;
  // Wide low civic building
  ctx.fillStyle='#c8b890';
  ctx.fillRect(0,bldgY-60,W,62);
  // Vertical ribs (like the photo)
  ctx.fillStyle='#b8a880';
  for(let rx=8;rx<W;rx+=18){ ctx.fillRect(rx,bldgY-60,6,62); }
  // Windows / entrance
  ctx.fillStyle='#8a9aaa';
  ctx.fillRect(W*0.4,bldgY-50,W*0.2,35);
  ctx.fillStyle='rgba(255,255,255,0.2)';
  ctx.fillRect(W*0.41,bldgY-48,W*0.18,15);

  // Iconic tower (tall concrete tower from photo)
  const twrX=W*0.72;
  ctx.fillStyle='#c0aa80';
  ctx.fillRect(twrX-12,bldgY-220,24,222);
  // Tower top boxy section
  ctx.fillStyle='#b8a070';
  ctx.fillRect(twrX-22,bldgY-230,44,25);
  ctx.fillRect(twrX-18,bldgY-250,36,22);
  ctx.fillRect(twrX-14,bldgY-265,28,17);
  // Antenna
  ctx.fillStyle='#707070'; ctx.fillRect(twrX-1,bldgY-285,2,22);
  // Tower windows
  ctx.fillStyle='#7090a8';
  for(let wy=bldgY-210;wy<bldgY-30;wy+=28){ ctx.fillRect(twrX-8,wy,16,18); }

  // No flags

  // Palm trees flanking
  for(let px of [W*0.15, W*0.88]){
    ctx.fillStyle='#8b6520'; ctx.fillRect(px-3,bldgY-70,6,72);
    ctx.fillStyle='#5a8828';
    for(let a=0;a<6;a++){
      const ang=a*Math.PI/3-Math.PI/6;
      ctx.beginPath();ctx.moveTo(px,bldgY-68);
      ctx.lineTo(px+Math.cos(ang)*28,bldgY-68+Math.sin(ang)*18);ctx.lineWidth=2.5;ctx.strokeStyle='#4a7820';ctx.stroke();
    }
  }

  // Desert sand ground
  const groundY=H*0.52;
  const sandGrad=ctx.createLinearGradient(0,groundY,0,H);
  sandGrad.addColorStop(0,'#d4b870'); sandGrad.addColorStop(1,'#c0a050');
  ctx.fillStyle=sandGrad; ctx.fillRect(0,groundY,W,H-groundY);

  // Parking lot / plaza detail
  ctx.fillStyle='#b8b0a0';
  ctx.fillRect(0,groundY,W,H*0.06);
  // Road markings
  ctx.fillStyle='rgba(255,255,255,0.3)';
  for(let mx=60;mx<W;mx+=80){ ctx.fillRect(mx,groundY+H*0.02,30,4); }

  // Flower beds (like in photo)
  for(let fbx=30;fbx<W-30;fbx+=120){
    ctx.fillStyle='#7a9840'; ctx.fillRect(fbx,groundY+H*0.045,60,18);
    ctx.fillStyle='#e05050';
    for(let fx2=fbx+5;fx2<fbx+55;fx2+=12){ ctx.beginPath();ctx.arc(fx2,groundY+H*0.05,4,0,Math.PI*2);ctx.fill(); }
  }
}

// ===================================================================
//  EILAT SCENE - Red mountains, turquoise Red Sea, beach
// ===================================================================
function drawEilatScene(W, H, t) {
  // Sky - deep rich blue
  const sky=ctx.createLinearGradient(0,0,0,H*0.32);
  sky.addColorStop(0,'#1040a0'); sky.addColorStop(0.5,'#2060c0'); sky.addColorStop(1,'#60a0d8');
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H*0.32);

  // Wispy clouds
  ctx.fillStyle='rgba(255,255,255,0.45)';
  ctx.beginPath();ctx.ellipse(W*0.3,H*0.08,100,14,0.1,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.ellipse(W*0.7,H*0.06,70,10,-0.1,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.ellipse(W*0.15,H*0.12,50,9,0.05,0,Math.PI*2);ctx.fill();

  // Red/orange mountains (Edom mountains from photo)
  const mtColors=[['#c06030','#a84820'],['#b05828','#983d18'],['#c87040','#b05030']];
  const mountains=[
    {x:0,    w:W*0.35, h:H*0.28, c:mtColors[0]},
    {x:W*0.2,w:W*0.40, h:H*0.32, c:mtColors[1]},
    {x:W*0.5,w:W*0.35, h:H*0.25, c:mtColors[2]},
    {x:W*0.7,w:W*0.35, h:H*0.30, c:mtColors[0]},
  ];
  mountains.forEach(m => {
    const mg=ctx.createLinearGradient(m.x,H*0.32-m.h,m.x,H*0.32);
    mg.addColorStop(0,m.c[0]); mg.addColorStop(1,m.c[1]);
    ctx.fillStyle=mg;
    ctx.beginPath();
    ctx.moveTo(m.x,H*0.32);
    ctx.lineTo(m.x+m.w*0.3,H*0.32-m.h*0.7);
    ctx.lineTo(m.x+m.w*0.5,H*0.32-m.h);
    ctx.lineTo(m.x+m.w*0.7,H*0.32-m.h*0.75);
    ctx.lineTo(m.x+m.w,H*0.32);
    ctx.closePath();ctx.fill();
    // Rocky texture lines
    ctx.strokeStyle=m.c[1]; ctx.lineWidth=0.8;
    ctx.beginPath();ctx.moveTo(m.x+m.w*0.2,H*0.32);ctx.lineTo(m.x+m.w*0.45,H*0.32-m.h*0.6);ctx.stroke();
    ctx.beginPath();ctx.moveTo(m.x+m.w*0.8,H*0.32);ctx.lineTo(m.x+m.w*0.55,H*0.32-m.h*0.5);ctx.stroke();
  });

  // Beach strip at base of mountains
  ctx.fillStyle='#e8c870';
  ctx.fillRect(0,H*0.32,W,H*0.06);
  // Small buildings/resort on beach
  for(let bx=W*0.25;bx<W*0.75;bx+=35){
    ctx.fillStyle='#f0e8d8'; ctx.fillRect(bx,H*0.33,25,20);
    ctx.fillStyle='rgba(100,160,200,0.4)'; ctx.fillRect(bx+2,H*0.335,8,10);ctx.fillRect(bx+12,H*0.335,8,10);
  }
  // Palm trees on beach
  for(let px=W*0.15;px<W*0.85;px+=W*0.1){
    ctx.fillStyle='#7a5518'; ctx.fillRect(px-2,H*0.3,4,H*0.07);
    for(let a=0;a<5;a++){
      const ang=a*Math.PI*2/5-Math.PI/2;
      ctx.strokeStyle='#3a6820'; ctx.lineWidth=2;
      ctx.beginPath();ctx.moveTo(px,H*0.3);ctx.lineTo(px+Math.cos(ang)*22,H*0.3+Math.sin(ang)*12);ctx.stroke();
    }
  }

  // Turquoise Red Sea - filling lower portion (foreground)
  const seaTop=H*0.38;
  const seaGrad=ctx.createLinearGradient(0,seaTop,0,H);
  seaGrad.addColorStop(0,'#00bcd4'); seaGrad.addColorStop(0.3,'#0097a7');
  seaGrad.addColorStop(0.7,'#006064'); seaGrad.addColorStop(1,'#004d50');
  ctx.fillStyle=seaGrad; ctx.fillRect(0,seaTop,W,H-seaTop);

  // Coral/underwater texture visible through clear water
  ctx.fillStyle='rgba(0,150,100,0.15)';
  for(let cx=20;cx<W;cx+=45){
    ctx.beginPath();ctx.ellipse(cx,seaTop+40+Math.sin(cx)*15,18,8,0,0,Math.PI*2);ctx.fill();
  }
  ctx.fillStyle='rgba(0,120,80,0.1)';
  for(let cx=40;cx<W;cx+=60){
    ctx.beginPath();ctx.ellipse(cx,seaTop+80+Math.cos(cx)*12,25,10,0,0,Math.PI*2);ctx.fill();
  }

  // Wave highlights
  ctx.strokeStyle='rgba(255,255,255,0.35)'; ctx.lineWidth=1.5;
  for(let w2=0;w2<4;w2++){
    const wy=seaTop+20+w2*H*0.04+Math.sin(t*0.8+w2)*4;
    ctx.beginPath();ctx.moveTo(0,wy);
    ctx.bezierCurveTo(W*0.25,wy-6, W*0.75,wy+6, W,wy);ctx.stroke();
  }

  // Ground / dock area where buildings go
  const groundY=H*0.52;
  ctx.fillStyle='#e0c870';
  ctx.fillRect(0,groundY,W,H-groundY);
  // Sandy texture
  ctx.strokeStyle='rgba(180,140,50,0.2)'; ctx.lineWidth=1;
  for(let r=0;r<5;r++){
    const sy=groundY+10+r*H*0.06;
    ctx.beginPath();ctx.moveTo(0,sy);ctx.bezierCurveTo(W*0.3,sy-2,W*0.7,sy+2,W,sy);ctx.stroke();
  }
}

function drawSun(x, y, r, city) {
  const grad = ctx.createRadialGradient(x, y, 2, x, y, r * 2.5);
  grad.addColorStop(0, 'rgba(255,220,80,0.7)');
  grad.addColorStop(1, 'rgba(255,220,80,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(x - r*3, y - r*3, r*6, r*6);

  ctx.fillStyle = '#ffe060';
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2);
  ctx.fill();
}

function drawSkyline(W, H, city) {
  const ground = H * 0.52;
  ctx.fillStyle = 'rgba(0,0,0,0.08)';

  // Simple background buildings silhouette
  const heights = [60, 90, 50, 110, 70, 80, 45, 95, 65, 75, 55, 100];
  const widths =  [40, 35, 45, 30,  42, 38, 44, 32, 40, 36, 48, 28];
  const count = Math.floor(W / 55);
  for (let i = 0; i < count; i++) {
    const bx = i * 55 + 10;
    const bh = heights[i % heights.length];
    const bw = widths[i % widths.length];
    ctx.fillRect(bx, ground - bh, bw, bh);
  }
}

function drawBuilding(b, x, y, H, color, variant, incLvl) {
  const shape = b.shape;
  const lvl = incLvl || 1;
  ctx.save();
  ctx.translate(x, y);

  switch(shape) {
    case 'solar':      drawSolarPanel(color, lvl); break;
    case 'garden':     drawGarden(color, lvl); break;
    case 'tank':       drawTank(color, lvl); break;
    case 'bauhaus':    drawBauhaus(color, lvl); break;
    case 'wind':       drawWind(color, lvl); break;
    case 'bus':        drawBus(color, lvl); break;
    case 'stone_house':drawStoneHouse(color, lvl); break;
    case 'farm':       drawFarm(color, lvl); break;
    case 'solar_roof': drawSolarRoof(color, lvl); break;
    case 'museum':     drawMuseum(color, lvl); break;
    case 'recycle':    drawRecycle(color, lvl); break;
    case 'grid':       drawGrid(color, lvl); break;
    case 'port':       drawPort(color, lvl); break;
    case 'terrace':    drawTerrace(color, lvl); break;
    case 'desal':      drawDesal(color, lvl); break;
    case 'tram':       drawTram(color, lvl); break;
    case 'biogas':     drawBiogas(color, lvl); break;
    case 's_port':     drawSmartPort(color, lvl); break;
    case 'big_solar':  drawBigSolar(color, lvl); break;
    case 's_battery':  drawSandBattery(color, lvl); break;
    case 'hub':        drawHub(color, lvl); break;
    case 'v_farm':     drawVFarm(color); break;
    case 'h2':         drawH2(color); break;
    case 'mega':       drawMega(color); break;
    case 'coral':      drawCoral(color); break;
    case 'sea_solar':  drawSeaSolar(color); break;
    case 'offshore':   drawOffshore(color); break;
    case 'resort':     drawResort(color); break;
    case 'tidal':      drawTidal(color); break;
    case 'airport':    drawAirport(color); break;
    default:           drawGeneric(color); break;
  }

  ctx.restore();
}

// ---- BUILDING DRAW FUNCTIONS (each ~30-50px wide) ----

function drawSolarPanel(c, lvl) {
  lvl = lvl||1;
  const panels = lvl<=2?1:lvl<=4?2:lvl<=6?3:5;
  const frameC = lvl>=6?'#2a3a5a':lvl>=4?'#445566':lvl>=2?'#666':'#888';
  const panelC = lvl>=7?'#ffe040':lvl>=5?'#f8d820':lvl>=3?'#f5c518':c;
  const pw = 18, gap = 22;
  const startX = -(panels*gap)/2 + gap/2 - pw/2;
  for(let p=0;p<panels;p++){
    const px = startX + p*gap;
    ctx.fillStyle=frameC;
    ctx.fillRect(px-2,-24,pw+4,3);
    ctx.fillRect(px-2,-24,3,22);
    ctx.fillRect(px+pw-1,-24,3,22);
    ctx.fillRect(px-2,-4,pw+4,3);
    ctx.fillStyle=panelC;
    ctx.fillRect(px,-22,pw,16);
    ctx.strokeStyle='rgba(0,0,0,0.2)'; ctx.lineWidth=0.5;
    ctx.beginPath();ctx.moveTo(px+pw/2,-22);ctx.lineTo(px+pw/2,-6);ctx.stroke();
    ctx.beginPath();ctx.moveTo(px,-13);ctx.lineTo(px+pw,-13);ctx.stroke();
  }
  ctx.fillStyle=frameC; ctx.fillRect(-2,0,4,16);
  if(lvl>=5){
    ctx.fillStyle='rgba(255,220,0,0.12)';
    ctx.beginPath();ctx.ellipse(0,-13,panels*12,14,0,0,Math.PI*2);ctx.fill();
  }
  if(lvl>=7){
    ctx.strokeStyle='rgba(255,220,0,0.45)'; ctx.lineWidth=1.5;
    ctx.strokeRect(startX-5,-28,panels*gap+10,32);
  }
}

function drawGarden(c, lvl) {
  lvl = lvl||1;
  // Raised garden beds with plants, fence, compost, water barrel
  const bedC = '#5a3a1a';
  const soilC = '#7a5030';
  const leafC = lvl>=7?'#00e676':lvl>=5?'#26c642':lvl>=3?'#4caf50':c;
  const stemC = '#558b2f';

  // Wooden fence posts
  ctx.fillStyle = '#8d6e43';
  for(let fx of [-22, 22]){
    ctx.fillRect(fx-2, -50, 4, 54);
  }
  // Fence rails
  ctx.fillStyle = '#a0784a';
  ctx.fillRect(-22, -44, 44, 3);
  ctx.fillRect(-22, -32, 44, 3);

  // Raised bed box
  ctx.fillStyle = bedC;
  ctx.fillRect(-18, -30, 36, 18);
  ctx.fillStyle = soilC;
  ctx.fillRect(-16, -28, 32, 14);
  // Soil texture lines
  ctx.strokeStyle = shadeColor(soilC, -15);
  ctx.lineWidth = 0.7;
  for(let sx=-12;sx<=12;sx+=6){ ctx.beginPath();ctx.moveTo(sx,-27);ctx.lineTo(sx,-15);ctx.stroke(); }

  // Plants in bed - vary by level
  const nPlants = lvl>=6?6:lvl>=4?5:lvl>=2?4:3;
  for(let i=0;i<nPlants;i++){
    const px = -14 + i*(28/(nPlants-1||1));
    const ph = 8 + lvl*2;
    // Stem
    ctx.strokeStyle = stemC; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(px,-14); ctx.lineTo(px,-14-ph); ctx.stroke();
    // Leaves - different shapes by level
    if(lvl<=2){
      // Simple round leaves
      ctx.fillStyle = leafC;
      ctx.beginPath(); ctx.arc(px,-14-ph,5,0,Math.PI*2); ctx.fill();
    } else if(lvl<=4){
      // Bushy plant
      ctx.fillStyle = leafC;
      ctx.beginPath(); ctx.arc(px,-14-ph,6,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = shadeColor(leafC,15);
      ctx.beginPath(); ctx.arc(px-4,-14-ph+2,4,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(px+4,-14-ph+2,4,0,Math.PI*2); ctx.fill();
    } else if(lvl<=6){
      // Tomato/veggie plant with fruit
      ctx.fillStyle = leafC;
      ctx.beginPath(); ctx.arc(px,-14-ph,7,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = '#ff5252';
      ctx.beginPath(); ctx.arc(px-3,-14-ph+4,3,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(px+3,-14-ph+5,2.5,0,Math.PI*2); ctx.fill();
    } else {
      // Lush with flowers
      ctx.fillStyle = leafC;
      ctx.beginPath(); ctx.arc(px,-14-ph,8,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = shadeColor(leafC,20);
      ctx.beginPath(); ctx.arc(px-5,-14-ph+3,5,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(px+5,-14-ph+3,5,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = '#ffeb3b';
      ctx.beginPath(); ctx.arc(px,-14-ph-3,3,0,Math.PI*2); ctx.fill();
    }
  }

  // Water barrel (lvl 2+)
  if(lvl>=2){
    ctx.fillStyle = '#4a7a9b';
    ctx.fillRect(14,-26,8,14);
    ctx.beginPath(); ctx.ellipse(18,-26,4,2,0,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#2d5a7a'; ctx.lineWidth=1;
    ctx.strokeRect(14,-26,8,14);
  }

  // Compost bin (lvl 4+)
  if(lvl>=4){
    ctx.fillStyle = '#6d4c28';
    ctx.fillRect(-24,-26,8,14);
    ctx.fillStyle = '#3e2723';
    ctx.fillRect(-23,-25,6,12);
    ctx.fillStyle = '#8bc34a';
    ctx.fillRect(-23,-27,6,3);
  }

  // Solar drip irrigation (lvl 5+)
  if(lvl>=5){
    ctx.strokeStyle = 'rgba(41,182,246,0.6)'; ctx.lineWidth = 1.2;
    ctx.setLineDash([2,3]);
    ctx.beginPath(); ctx.moveTo(-18,-15); ctx.lineTo(18,-15); ctx.stroke();
    ctx.setLineDash([]);
    // Drip drops
    ctx.fillStyle = 'rgba(41,182,246,0.7)';
    for(let dx=-12;dx<=12;dx+=8){
      ctx.beginPath(); ctx.arc(dx,-12,1.5,0,Math.PI*2); ctx.fill();
    }
  }

  // Greenhouse frame (lvl 7)
  if(lvl>=7){
    ctx.strokeStyle = 'rgba(200,240,200,0.5)'; ctx.lineWidth = 1.5;
    ctx.strokeRect(-20,-52,40,24);
    ctx.fillStyle = 'rgba(200,255,200,0.08)';
    ctx.fillRect(-20,-52,40,24);
  }
}

function drawTank(c, lvl) {
  lvl = lvl||1;
  const r=12+lvl*1.5, h=22+lvl*2;
  const tankC=lvl>=6?'#4fc3f7':lvl>=4?'#29b6f6':lvl>=2?'#1da8e8':c;
  const nTanks=lvl>=7?3:lvl>=4?2:1;
  for(let t=0;t<nTanks;t++){
    const tx=(t-(nTanks-1)/2)*28;
    ctx.fillStyle=tankC;
    ctx.beginPath();ctx.ellipse(tx,-16,r,r*0.35,0,0,Math.PI*2);ctx.fill();
    ctx.fillRect(tx-r,-16,r*2,h);
    ctx.beginPath();ctx.ellipse(tx,-16+h,r,r*0.35,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.18)'; ctx.fillRect(tx-r*0.5,-14,r*0.35,h-2);
    ctx.fillStyle='#78909c'; ctx.fillRect(tx-2,-16+h,4,10);
  }
  if(lvl>=5){
    ctx.strokeStyle='rgba(41,182,246,0.5)'; ctx.lineWidth=1.5;
    for(let t=0;t<nTanks;t++){
      const tx=(t-(nTanks-1)/2)*28;
      ctx.beginPath();ctx.ellipse(tx,-4,r,r*0.3,0,0,Math.PI*2);ctx.stroke();
    }
  }
}

function drawBauhaus(c, lvl) {
  lvl = lvl||1;
  // Green Roof Building - sustainable urban building with living roof
  const floors = 2+lvl;
  const fH = 12, w = 28+lvl*2;
  const wallC = lvl>=6?'#e8f0e8':lvl>=4?'#dde8dd':'#d0e0d0';
  const winC  = lvl>=5?'#b3e5fc':'#87ceeb';
  const roofC = lvl>=6?'#2e7d32':lvl>=4?'#388e3c':lvl>=2?'#43a047':'#558b2f';

  // Building body
  for(let i=0;i<floors;i++){
    ctx.fillStyle = i%2===0 ? wallC : shadeColor(wallC,-8);
    ctx.fillRect(-w/2, -16-i*fH, w, fH-1);
    // Windows with green tint
    const wc = Math.floor((w-8)/10);
    for(let j=0;j<wc;j++){
      ctx.fillStyle = winC;
      ctx.fillRect(-w/2+4+j*10, -14-i*fH, 6, 7);
      // Window frame
      ctx.strokeStyle='rgba(100,150,100,0.4)'; ctx.lineWidth=0.5;
      ctx.strokeRect(-w/2+4+j*10,-14-i*fH,6,7);
    }
  }

  // Flat roof base
  const roofTop = -16 - floors*fH;
  ctx.fillStyle = '#546e7a';
  ctx.fillRect(-w/2-2, roofTop, w+4, 5);

  // Living green roof
  ctx.fillStyle = roofC;
  ctx.fillRect(-w/2, roofTop-8, w, 10);

  // Plants on roof - more with level
  const nRoofPlants = Math.min(2+lvl, 8);
  for(let i=0;i<nRoofPlants;i++){
    const px = -w/2+4 + i*(w-8)/(nRoofPlants-1||1);
    const ph = 6+lvl;
    ctx.fillStyle = lvl>=6?'#00c853':lvl>=4?'#4caf50':'#66bb6a';
    ctx.beginPath();ctx.arc(px, roofTop-8-ph/2, ph/2+2, 0, Math.PI*2);ctx.fill();
    ctx.fillStyle='#33691e'; ctx.fillRect(px-1,roofTop-6,2,6);
  }

  // Solar panels on roof (lvl 3+)
  if(lvl>=3){
    ctx.fillStyle='#f5c518';
    ctx.fillRect(-w/2+4, roofTop-14, w/3, 5);
    ctx.strokeStyle='rgba(0,0,0,0.2)'; ctx.lineWidth=0.5;
    ctx.beginPath();ctx.moveTo(-w/2+4+w/6,roofTop-14);ctx.lineTo(-w/2+4+w/6,roofTop-9);ctx.stroke();
  }

  // Vertical garden on side (lvl 5+)
  if(lvl>=5){
    ctx.fillStyle='rgba(76,175,80,0.5)';
    for(let vi=0;vi<floors;vi++){
      ctx.fillRect(w/2, -14-vi*fH, 5, fH-2);
    }
    ctx.fillStyle='#4caf50';
    for(let vi=0;vi<floors*2;vi++){
      ctx.beginPath();ctx.arc(w/2+2,-12-vi*(fH/2),3,0,Math.PI*2);ctx.fill();
    }
  }

  // Rainwater collector pipe (lvl 4+)
  if(lvl>=4){
    ctx.fillStyle='#4a7a9b'; ctx.fillRect(-w/2-4,-16-floors*fH,3,floors*fH+16);
    ctx.beginPath();ctx.ellipse(-w/2-2,-16,3,5,0,0,Math.PI*2);ctx.fill();
  }

  // Glow aura at max level
  if(lvl>=7){
    ctx.fillStyle='rgba(76,175,80,0.08)';
    ctx.beginPath();ctx.ellipse(0,roofTop-10,w/2+10,30,0,0,Math.PI*2);ctx.fill();
  }
}

function drawWind(c, lvl) {
  lvl = lvl||1;
  const tH=48+lvl*7, bL=20+lvl*4;
  const tC=lvl>=6?'#e0eef8':lvl>=4?'#d0dde8':'#ccc';
  ctx.fillStyle=tC;
  ctx.beginPath();ctx.moveTo(-3,10);ctx.lineTo(3,10);ctx.lineTo(1,-tH);ctx.lineTo(-1,-tH);ctx.closePath();ctx.fill();
  const spd=lvl>=6?300:lvl>=4?400:500;
  const t2=Date.now()/spd;
  ctx.save(); ctx.translate(0,-tH);
  const nBlades=lvl>=7?4:3;
  for(let b=0;b<nBlades;b++){
    ctx.save(); ctx.rotate(t2+b*(Math.PI*2/nBlades));
    ctx.fillStyle=lvl>=5?'#ddeeff':lvl>=3?'#cce0f0':c;
    ctx.beginPath();ctx.moveTo(-2,0);ctx.lineTo(2,0);ctx.lineTo(1,-bL);ctx.lineTo(-1,-bL);ctx.closePath();ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle=lvl>=5?'#78909c':'#999';
  ctx.beginPath();ctx.arc(0,0,3+lvl*0.4,0,Math.PI*2);ctx.fill();
  if(lvl>=5){ ctx.fillStyle='rgba(180,220,255,0.15)'; ctx.beginPath();ctx.arc(0,0,bL+6,0,Math.PI*2);ctx.fill(); }
  ctx.restore();
}

function drawBus(c, lvl) {
  lvl = lvl||1;
  const busC=lvl>=6?'#00c853':lvl>=4?'#2db848':lvl>=2?'#3daa50':c;
  const len=38+lvl*4;
  ctx.fillStyle=busC;
  ctx.beginPath();ctx.roundRect(-len/2,-16,len,20,3+lvl);ctx.fill();
  const winC=lvl>=5?'#e0f7ff':'#b3e5fc';
  const nWins=Math.floor((len-8)/9);
  for(let i=0;i<nWins;i++){ctx.fillStyle=winC;ctx.fillRect(-len/2+4+i*9,-13,7,7);}
  ctx.fillStyle='#222';
  ctx.beginPath();ctx.arc(-len/2+10,6,4+lvl*0.3,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(len/2-10,6,4+lvl*0.3,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.28)'; ctx.fillRect(-len/2,-5,len,3);
  if(lvl>=4){
    ctx.fillStyle='rgba(255,255,255,0.15)'; ctx.fillRect(-len/2,-16,len,7);
  }
  if(lvl>=6){
    ctx.strokeStyle='rgba(0,255,100,0.4)'; ctx.lineWidth=1.5;
    ctx.strokeRect(-len/2,-16,len,20);
  }
}

function drawStoneHouse(c, lvl) {
  lvl = lvl||1;
  const stoneC = lvl>=5?'#e0d4b0':lvl>=3?'#d4c890':c;
  const h = 30 + lvl*4;
  const w = 20 + lvl*2;
  // Wall
  ctx.fillStyle = stoneC;
  ctx.fillRect(-w,-h,w*2,h+10);
  // Stone blocks
  ctx.strokeStyle = shadeColor(stoneC,-20); ctx.lineWidth=0.8;
  const bh=9, bw=12;
  for(let row=0;row<Math.floor((h+10)/bh);row++)
    for(let col=0;col<Math.floor(w*2/bw)+1;col++)
      ctx.strokeRect(-w+col*bw+(row%2===0?0:bw/2),-h+row*bh,bw-1,bh-1);
  // Roof
  ctx.fillStyle=shadeColor(stoneC,-25);
  ctx.beginPath();ctx.moveTo(-w-4,-h);ctx.lineTo(0,-h-20-lvl*3);ctx.lineTo(w+4,-h);ctx.closePath();ctx.fill();
  // Door
  ctx.fillStyle='#6d4c28'; ctx.fillRect(-6,0,12,10+lvl);
  ctx.fillStyle='rgba(0,0,0,0.2)'; ctx.fillRect(-4,1,4,8+lvl);
  // Windows (lvl 3+)
  if(lvl>=3){
    ctx.fillStyle='#b3e5fc';
    ctx.fillRect(-w+4,-h+8,10,8); ctx.fillRect(w-14,-h+8,10,8);
    ctx.strokeStyle='#8d6520'; ctx.lineWidth=1;
    ctx.strokeRect(-w+4,-h+8,10,8); ctx.strokeRect(w-14,-h+8,10,8);
  }
  // Solar panels on roof (lvl 5+)
  if(lvl>=5){
    ctx.fillStyle='#f5c518';
    ctx.save();ctx.translate(0,-h-10-lvl*2);ctx.rotate(-0.5);
    ctx.fillRect(-10,-2,20,6);
    ctx.strokeStyle='rgba(0,0,0,0.3)';ctx.lineWidth=0.5;
    ctx.beginPath();ctx.moveTo(0,-2);ctx.lineTo(0,4);ctx.stroke();
    ctx.restore();
  }
  // Green vines/roof garden (lvl 7)
  if(lvl>=7){
    ctx.fillStyle='#4caf50';
    for(let vx=-w;vx<=w;vx+=8){
      ctx.beginPath();ctx.arc(vx,-h,4,0,Math.PI*2);ctx.fill();
    }
    ctx.strokeStyle='#388e3c';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(-w,-h);ctx.lineTo(w,-h);ctx.stroke();
  }
}

function drawFarm(c) {
  // Rows
  for(let r=0;r<3;r++){
    ctx.fillStyle = r%2===0?'#5d4037':'#795548';
    ctx.fillRect(-22,-4-r*8,44,6);
    // Olive trees
    for(let t=-16;t<=16;t+=8){
      ctx.fillStyle = c;
      ctx.beginPath();ctx.arc(t,-8-r*8,4,0,Math.PI*2);ctx.fill();
      ctx.fillStyle = shadeColor(c,15);
      ctx.beginPath();ctx.arc(t+2,-6-r*8,3,0,Math.PI*2);ctx.fill();
    }
  }
}

function drawSolarRoof(c, lvl) {
  lvl = lvl||1;
  const w=18+lvl*2, wallH=20+lvl*2;
  const wallC = lvl>=5?'#f0ead8':lvl>=3?'#e8dcc8':'#d4c098';
  // House body
  ctx.fillStyle=wallC; ctx.fillRect(-w,-wallH,w*2,wallH+8);
  // Windows
  if(lvl>=2){
    ctx.fillStyle=lvl>=5?'#b3e5fc':'#87ceeb';
    ctx.fillRect(-w+3,-wallH+4,8,8); ctx.fillRect(w-11,-wallH+4,8,8);
    if(lvl>=5){ ctx.fillRect(-5,-wallH+4,10,8); }
  }
  // Solar roof - more panels per level
  const panelRows = lvl>=5?3:lvl>=3?2:1;
  const roofH = 18+lvl*2;
  // Roof base
  ctx.fillStyle=shadeColor(wallC,-15);
  ctx.beginPath();ctx.moveTo(-w-4,-wallH);ctx.lineTo(0,-wallH-roofH);ctx.lineTo(w+4,-wallH);ctx.closePath();ctx.fill();
  // Solar panels on roof
  for(let row=0;row<panelRows;row++){
    const py=-wallH-6-row*(roofH/panelRows*0.7);
    const pw=(w-row*4)*0.7;
    ctx.fillStyle=lvl>=7?'#ffe040':lvl>=5?'#f8d020':c;
    ctx.save();
    ctx.translate(0,py);
    ctx.fillRect(-pw,-3,pw*2,6);
    ctx.strokeStyle='rgba(0,0,0,0.25)';ctx.lineWidth=0.5;
    for(let px=-pw+pw/3;px<pw;px+=pw/3){ ctx.beginPath();ctx.moveTo(px,-3);ctx.lineTo(px,3);ctx.stroke(); }
    ctx.beginPath();ctx.moveTo(-pw,0);ctx.lineTo(pw,0);ctx.stroke();
    ctx.restore();
  }
  // Battery storage unit (lvl 5+)
  if(lvl>=5){
    ctx.fillStyle='#546e7a'; ctx.fillRect(w+2,-8,8,12);
    ctx.fillStyle='#29b6f6'; ctx.fillRect(w+3,-7,6,8);
  }
  // Smart meter display (lvl 7)
  if(lvl>=7){
    ctx.fillStyle='#263238'; ctx.fillRect(-4,-wallH-2,8,6);
    ctx.fillStyle='#00e676'; ctx.fillRect(-3,-wallH-1,6,4);
  }
}

function drawMuseum(c, lvl) {
  lvl = lvl||1;
  // Museum Verde - green themed, gets more impressive each level
  const baseC = lvl>=5?'#c8ddc0':lvl>=3?'#b8d0a8':'#a8c498'; // greens not brown
  const accentC = lvl>=5?'#4caf50':lvl>=3?'#66bb6a':'#81c784';
  const w = 26+lvl*2, h = 36+lvl*3;

  // Main body
  ctx.fillStyle=baseC; ctx.fillRect(-w,-h,w*2,h+8);

  // Green panels / facade
  ctx.fillStyle=accentC;
  for(let px=-w+4;px<w-4;px+=10){ ctx.fillRect(px,-h+4,6,h-8); }

  // Windows - more per level
  const winRows = lvl>=5?3:lvl>=3?2:1;
  const winCols = lvl>=5?4:lvl>=3?3:2;
  ctx.fillStyle='#b3e5fc';
  for(let r=0;r<winRows;r++)
    for(let wc=0;wc<winCols;wc++){
      const wx=-w+6+wc*((w*2-12)/(winCols));
      const wy=-h+8+r*((h-16)/(winRows));
      ctx.fillRect(wx,wy,8,7);
      ctx.strokeStyle='rgba(0,0,0,0.2)';ctx.lineWidth=0.5;ctx.strokeRect(wx,wy,8,7);
    }

  // Columns
  ctx.fillStyle=shadeColor(baseC,-15);
  for(let i=-w+4;i<=w-4;i+=12){ ctx.fillRect(i-3,-h,5,h+6); }

  // Green roof pediment
  ctx.fillStyle=accentC;
  ctx.beginPath();ctx.moveTo(-w-3,-h);ctx.lineTo(0,-h-16-lvl*2);ctx.lineTo(w+3,-h);ctx.closePath();ctx.fill();

  // Living green roof (lvl 5+)
  if(lvl>=5){
    ctx.fillStyle='#388e3c';
    ctx.fillRect(-w,-h,w*2,6);
    for(let px=-w+4;px<=w-4;px+=8){
      ctx.beginPath();ctx.arc(px,-h,5,0,Math.PI*2);ctx.fill();
    }
  }

  // Solar panels (lvl 7)
  if(lvl>=7){
    ctx.fillStyle='#f5c518';
    ctx.fillRect(-w,-h-8,w*2,6);
    ctx.strokeStyle='rgba(0,0,0,0.2)';ctx.lineWidth=0.5;
    ctx.beginPath();ctx.moveTo(0,-h-8);ctx.lineTo(0,-h-2);ctx.stroke();
  }

  // Steps
  ctx.fillStyle=shadeColor(baseC,10);
  for(let s=0;s<3;s++){ctx.fillRect(-w+s*3,8-s*4,w*2-s*6,4);}
}

function drawRecycle(c) {
  // Tank
  ctx.fillStyle = '#546e7a';
  ctx.fillRect(-16,-30,32,36);
  // Arrows (recycle symbol simplified)
  ctx.strokeStyle = c;
  ctx.lineWidth = 3;
  ctx.beginPath();ctx.arc(0,-12,10,0,Math.PI*1.5);ctx.stroke();
  ctx.fillStyle = c;
  ctx.beginPath();ctx.moveTo(10,-18);ctx.lineTo(14,-12);ctx.lineTo(6,-12);ctx.closePath();ctx.fill();
  // Pipe
  ctx.fillStyle = '#78909c';
  ctx.fillRect(-2,6,4,14);
}

function drawGrid(c, lvl) {
  lvl = lvl||1;
  const towerH = 40+lvl*6;
  const glowC = lvl>=6?'#ffe040':lvl>=4?'#f5c518':c;
  // Tower
  ctx.fillStyle='#37474f'; ctx.fillRect(-4,0,8,-(towerH));
  // Cross beams - more per level
  ctx.fillStyle='#546e7a';
  const beams = 2+lvl;
  for(let i=0;i<beams;i++){
    const by=-towerH*(i+1)/(beams+1);
    const bw=10+i*2;
    ctx.fillRect(-bw,by,bw*2,3);
  }
  // Hub at top
  ctx.fillStyle=glowC;
  ctx.beginPath();ctx.arc(0,-towerH,5+lvl,0,Math.PI*2);ctx.fill();
  // Glow halo
  ctx.fillStyle=`rgba(255,200,0,${0.2+lvl*0.05})`;
  ctx.beginPath();ctx.arc(0,-towerH,14+lvl*2,0,Math.PI*2);ctx.fill();
  // Radiating lines - more per level
  const rays = 3+lvl;
  ctx.strokeStyle=`rgba(255,200,0,${0.3+lvl*0.08})`; ctx.lineWidth=1+lvl*0.2;
  for(let a=0;a<rays;a++){
    const ang=a*(Math.PI*2/rays);
    const len=20+lvl*5;
    ctx.beginPath();ctx.moveTo(0,-towerH);ctx.lineTo(Math.cos(ang)*len,Math.sin(ang)*len-towerH);ctx.stroke();
  }
  // Data nodes on beams (lvl 4+)
  if(lvl>=4){
    ctx.fillStyle=glowC;
    for(let i=0;i<beams;i++){
      const by=-towerH*(i+1)/(beams+1);
      const bw=10+i*2;
      ctx.beginPath();ctx.arc(-bw,by,3,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(bw,by,3,0,Math.PI*2);ctx.fill();
    }
  }
  // Base transformer box
  ctx.fillStyle='#263238'; ctx.fillRect(-10,0,20,8);
  ctx.fillStyle=glowC; ctx.fillRect(-8,1,4,6); ctx.fillRect(-1,1,4,6);
}

function drawPort(c, lvl) {
  lvl=lvl||1;
  const craneH=40+lvl*6;
  // Crane tower
  ctx.fillStyle='#546e7a'; ctx.fillRect(-5,0,10,-craneH);
  ctx.fillRect(-5,-craneH,40+lvl*4,6);
  // Solar panels on arm - more per level
  const panels=1+lvl;
  for(let p=0;p<panels;p++){
    ctx.fillStyle=lvl>=5?'#ffe040':c;
    ctx.fillRect(-2+p*14,-craneH+8,12,5);
    ctx.strokeStyle='rgba(0,0,0,0.2)';ctx.lineWidth=0.4;
    ctx.beginPath();ctx.moveTo(4+p*14,-craneH+8);ctx.lineTo(4+p*14,-craneH+13);ctx.stroke();
  }
  // Containers - color changes per level
  const conC=lvl>=6?'#4caf50':lvl>=4?'#26a69a':lvl>=2?'#5c6bc0':'#e57373';
  const conW=22+lvl*2, conH=14+lvl;
  ctx.fillStyle=conC; ctx.fillRect(-conW/2,-conH,conW,conH);
  ctx.fillStyle='rgba(255,255,255,0.15)';
  for(let sx=0;sx<3+lvl;sx++) ctx.fillRect(-conW/2+4+sx*(conW-8)/(2+lvl),1-conH,4,conH-2);
  // Stacked containers (lvl 4+)
  if(lvl>=4){
    ctx.fillStyle=shadeColor(conC,-20);
    ctx.fillRect(-conW/2+2,-conH*2+2,conW-4,conH-2);
  }
  // Floating platform glow (lvl 6+)
  if(lvl>=6){
    ctx.fillStyle='rgba(41,182,246,0.3)';
    ctx.beginPath();ctx.ellipse(0,4,conW/2+4,5,0,0,Math.PI*2);ctx.fill();
  }
}

function drawTerrace(c) {
  // Terraced building
  for(let t=0;t<4;t++){
    const w=40-t*8;
    ctx.fillStyle=shadeColor('#a8c0b0',-t*5);
    ctx.fillRect(-w/2,-10-t*16,w,14);
    // Plants on terrace
    ctx.fillStyle=c;
    for(let p=-w/2+4;p<w/2-4;p+=8){
      ctx.beginPath();ctx.arc(p,-10-t*16,3,0,Math.PI*2);ctx.fill();
    }
  }
}

function drawDesal(c, lvl) {
  lvl=lvl||1;
  const w=22+lvl*2, h=24+lvl*2;
  const bC=lvl>=5?'#546e7a':lvl>=3?'#607d8b':'#78909c';
  ctx.fillStyle=bC; ctx.fillRect(-w,-h,w*2,h+6);
  // Membrane tubes - more per level
  const tubes=2+lvl;
  for(let t=0;t<tubes;t++){
    const tx=-w+6+t*(w*2-12)/(tubes-1||1);
    ctx.fillStyle=c; ctx.fillRect(tx-3,-h,6,10);
    ctx.beginPath();ctx.arc(tx,-h,4+lvl*0.3,0,Math.PI*2);ctx.fill();
  }
  // Water flow - more vibrant per level
  const wC=lvl>=5?'rgba(41,182,246,0.8)':lvl>=3?'rgba(41,182,246,0.6)':'rgba(41,182,246,0.4)';
  ctx.fillStyle=wC; ctx.fillRect(-w+2,-8,w*2-4,5+lvl);
  // Output pipe
  ctx.fillStyle='#4dd0e1'; ctx.fillRect(-3,0,6,8);
  ctx.beginPath();ctx.ellipse(0,8,4,2,0,0,Math.PI*2);ctx.fill();
  // Energy display (lvl 4+)
  if(lvl>=4){
    ctx.fillStyle='#263238'; ctx.fillRect(-8,-h+2,16,8);
    ctx.fillStyle=lvl>=6?'#00e676':'#76ff03';
    const barW=Math.round(12*(lvl-3)/4);
    ctx.fillRect(-6,-h+3,barW,6);
  }
}

function drawTram(c) {
  // Rails
  ctx.fillStyle='#9e9e9e';
  ctx.fillRect(-26,2,52,3);
  ctx.fillRect(-26,7,52,3);
  // Tram body
  ctx.fillStyle=c;
  ctx.beginPath();ctx.roundRect(-24,-16,48,22,3);ctx.fill();
  // Windows
  ctx.fillStyle='#b3e5fc';
  for(let i=-18;i<=18;i+=9){ctx.fillRect(i-4,-12,7,7);}
  // Wheels
  ctx.fillStyle='#424242';
  for(let wx of [-16,-6,6,16]){
    ctx.beginPath();ctx.arc(wx,6,3,0,Math.PI*2);ctx.fill();
  }
}

function drawBiogas(c, lvl) {
  lvl=lvl||1;
  const r=16+lvl*1.5;
  const domeC=lvl>=5?'#a5d6a7':lvl>=3?'#6d9c6a':c;
  // Base
  ctx.fillStyle='#5d4037'; ctx.fillRect(-r,-4,r*2,10);
  // Dome - green tones as it gets cleaner
  ctx.fillStyle=domeC;
  ctx.beginPath();ctx.arc(0,-4,r,Math.PI,0);ctx.fill();
  // Shine
  ctx.fillStyle='rgba(255,255,255,0.15)';
  ctx.beginPath();ctx.arc(-r*0.3,-4-r*0.3,r*0.35,0,Math.PI*2);ctx.fill();
  // Flames - taller and cleaner per level
  const flameH=16+lvl*3;
  ctx.fillStyle=lvl>=5?'#64dd17':lvl>=3?'#aeea00':'#ff7043';
  ctx.beginPath();ctx.moveTo(-5,-4-r);ctx.quadraticCurveTo(0,-4-r-flameH,5,-4-r);ctx.quadraticCurveTo(3,-4-r+6,-5,-4-r);ctx.fill();
  ctx.fillStyle=lvl>=5?'#ccff90':lvl>=3?'#f4ff81':'#ffcc02';
  ctx.beginPath();ctx.moveTo(-3,-4-r);ctx.quadraticCurveTo(0,-4-r-flameH*0.7,3,-4-r);ctx.quadraticCurveTo(2,-4-r+5,-3,-4-r);ctx.fill();
  // Pipe
  ctx.fillStyle='#78909c'; ctx.fillRect(-2,6,4,10);
  // Additional tanks (lvl 5+)
  if(lvl>=5){
    ctx.fillStyle=shadeColor(domeC,-10);
    ctx.beginPath();ctx.arc(-r-8,-4,r*0.6,Math.PI,0);ctx.fill();
    ctx.fillRect(-r-8-r*0.6,-4,r*1.2,8);
  }
  // Efficiency meter (lvl 7)
  if(lvl>=7){
    ctx.fillStyle='#263238'; ctx.fillRect(-6,-4+3,12,7);
    ctx.fillStyle='#00e676'; ctx.fillRect(-5,-4+4,10,5);
  }
}

function drawSmartPort(c) {
  // Wide dock structure
  ctx.fillStyle='#455a64';
  ctx.fillRect(-30,-20,60,25);
  // Cranes x2
  ctx.fillStyle='#78909c';
  ctx.fillRect(-25,-50,5,35);ctx.fillRect(-25,-50,20,5);
  ctx.fillRect(15,-44,5,30);ctx.fillRect(15,-44,18,5);
  // Lights
  ctx.fillStyle=c;
  ctx.beginPath();ctx.arc(-15,-50,5,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(23,-44,5,0,Math.PI*2);ctx.fill();
}

function drawBigSolar(c, lvl) {
  lvl=lvl||1;
  const rows=2+lvl, cols=3+lvl;
  const panC=lvl>=6?'#ffe040':lvl>=4?'#f8d020':lvl>=2?'#f5c518':c;
  const pw=10, ph=8, gap=2;
  const totalW=(pw+gap)*cols-gap, totalH=(ph+gap)*rows-gap;
  for(let r=0;r<rows;r++)
    for(let col=0;col<cols;col++){
      ctx.fillStyle=r%2===0?panC:shadeColor(panC,-8);
      const px=-totalW/2+col*(pw+gap), py=-totalH-6+r*(ph+gap);
      ctx.fillRect(px,py,pw,ph);
      ctx.strokeStyle='rgba(0,0,0,0.2)';ctx.lineWidth=0.4;ctx.strokeRect(px,py,pw,ph);
      // Cell lines
      ctx.beginPath();ctx.moveTo(px+pw/2,py);ctx.lineTo(px+pw/2,py+ph);ctx.stroke();
      ctx.beginPath();ctx.moveTo(px,py+ph/2);ctx.lineTo(px+pw,py+ph/2);ctx.stroke();
    }
  // Frame
  ctx.strokeStyle=shadeColor(panC,-30);ctx.lineWidth=1.5;
  ctx.strokeRect(-totalW/2-2,-totalH-8,totalW+4,totalH+4);
  // Supports
  ctx.fillStyle='#9e9e9e';
  ctx.fillRect(-totalW/2,0,totalW,3);
  for(let s=0;s<3;s++) ctx.fillRect(-totalW/2+s*(totalW/2)-2,3,4,8);
  // Glow (lvl 6+)
  if(lvl>=6){
    ctx.fillStyle=`rgba(255,220,0,0.12)`;
    ctx.beginPath();ctx.ellipse(0,-totalH/2,totalW/2+8,totalH/2+8,0,0,Math.PI*2);ctx.fill();
  }
}

function drawSandBattery(c) {
  // Cylindrical battery
  ctx.fillStyle=c;
  ctx.beginPath();ctx.ellipse(0,-32,18,6,0,0,Math.PI*2);ctx.fill();
  ctx.fillRect(-18,-32,36,38);
  ctx.beginPath();ctx.ellipse(0,6,18,6,0,0,Math.PI*2);ctx.fill();
  // Level indicator
  ctx.fillStyle='rgba(255,150,0,0.5)';
  ctx.fillRect(-14,-20,28,24);
  // Label
  ctx.fillStyle='rgba(0,0,0,0.4)';
  ctx.fillRect(-10,-14,20,12);
  ctx.fillStyle='#fff';
  ctx.font='bold 8px Rajdhani';ctx.textAlign='center';
  ctx.fillText('kWh',-0,-5);
}

function drawHub(c, lvl) {
  lvl=lvl||1;
  const w=20+lvl*2, h=40+lvl*4;
  const wallC=lvl>=5?'#1a2f3a':lvl>=3?'#1e2f38':'#263238';
  const winC=lvl>=6?'rgba(0,230,118,0.7)':lvl>=4?'rgba(100,220,255,0.7)':'rgba(79,195,247,0.6)';
  // Building
  ctx.fillStyle=wallC; ctx.fillRect(-w,-h,w*2,h+4);
  // Glass windows grid
  const winR=Math.floor(h/10), winC2=Math.floor(w*2/10);
  for(let r=0;r<winR;r++)
    for(let wc=0;wc<winC2;wc++){
      ctx.fillStyle=winC;
      ctx.fillRect(-w+2+wc*10,-h+4+r*10,8,7);
    }
  // Roof details
  ctx.fillStyle=shadeColor(wallC,10);
  ctx.fillRect(-w,-h,w*2,4);
  // Antenna - taller per level
  const antH=12+lvl*3;
  ctx.fillStyle='#607d8b'; ctx.fillRect(-1,-h-antH,2,antH);
  // Hub glow on top
  ctx.fillStyle=lvl>=5?'#00e676':c;
  ctx.beginPath();ctx.arc(0,-h-antH,3+lvl*0.5,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=`rgba(79,195,247,${0.1+lvl*0.05})`;
  ctx.beginPath();ctx.arc(0,-h-antH,10+lvl*2,0,Math.PI*2);ctx.fill();
  // Side dishes (lvl 4+)
  if(lvl>=4){
    ctx.fillStyle='#90a4ae';
    ctx.beginPath();ctx.arc(w+6,-h*0.6,8,0.3,Math.PI*0.8);ctx.stroke();
    ctx.fillRect(w+2,-h*0.6-2,4,4);
  }
  // Facade LED strip (lvl 6+)
  if(lvl>=6){
    ctx.fillStyle=`rgba(0,230,118,0.5)`;
    ctx.fillRect(-w,-h,4,h+4);
    ctx.fillRect(w-4,-h,4,h+4);
  }
}

function drawVFarm(c) {
  // Tower
  ctx.fillStyle='#1b5e20';
  ctx.fillRect(-16,-60,32,64);
  // Layers
  for(let layer=0;layer<6;layer++){
    ctx.fillStyle=c;
    ctx.fillRect(-20,-54+layer*10,40,6);
    // Plant texture
    ctx.fillStyle=shadeColor(c,20);
    for(let p=-16;p<=16;p+=8){
      ctx.beginPath();ctx.arc(p,-51+layer*10,2,0,Math.PI*2);ctx.fill();
    }
  }
}

function drawH2(c) {
  // Sphere tank
  ctx.fillStyle='#e0e0e0';
  ctx.beginPath();ctx.arc(0,-20,22,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.4)';
  ctx.beginPath();ctx.arc(-6,-26,8,0,Math.PI*2);ctx.fill();
  // H2 label
  ctx.fillStyle='#1565c0';
  ctx.font='bold 14px Cinzel';ctx.textAlign='center';
  ctx.fillText('H2',0,-18);
  // Support legs
  ctx.fillStyle='#9e9e9e';
  ctx.fillRect(-20,2,6,18);ctx.fillRect(14,2,6,18);
  ctx.fillRect(-20,2,40,4);
}

function drawMega(c) {
  // Mega solar - large grid
  for(let row=0;row<5;row++){
    for(let col=0;col<6;col++){
      ctx.fillStyle=row%2===0?c:shadeColor(c,-8);
      ctx.fillRect(-30+col*10,-40+row*10,9,9);
      ctx.strokeStyle='rgba(0,0,0,0.25)';ctx.lineWidth=0.4;
      ctx.strokeRect(-30+col*10,-40+row*10,9,9);
    }
  }
  // Frame
  ctx.strokeStyle=shadeColor(c,-30);ctx.lineWidth=2;
  ctx.strokeRect(-30,-40,60,50);
}

function drawCoral(c, lvl) {
  lvl=lvl||1;
  const waterC=`rgba(0,188,212,${0.3+lvl*0.06})`;
  ctx.fillStyle=waterC; ctx.fillRect(-26,-8,52,14);
  const nCorals=2+lvl;
  const colors=[c,'#ff80ab','#ea80fc','#82b1ff','#69f0ae','#ffd740'];
  for(let i=0;i<nCorals;i++){
    const cx=-22+i*(44/(nCorals-1||1));
    const cr=4+lvl*0.8, ch=8+lvl*2;
    ctx.fillStyle=colors[i%colors.length];
    // Coral trunk
    ctx.fillRect(cx-2,-8-ch,3,ch);
    // Coral head - more complex per level
    ctx.beginPath();ctx.arc(cx,-8-ch,cr,0,Math.PI*2);ctx.fill();
    if(lvl>=3){
      ctx.beginPath();ctx.arc(cx-cr,-8-ch+cr*0.5,cr*0.6,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(cx+cr,-8-ch+cr*0.5,cr*0.6,0,Math.PI*2);ctx.fill();
    }
    if(lvl>=5){
      ctx.fillStyle=shadeColor(colors[i%colors.length],20);
      ctx.beginPath();ctx.arc(cx,-8-ch-cr*0.5,cr*0.4,0,Math.PI*2);ctx.fill();
    }
  }
  // Fish (lvl 4+)
  if(lvl>=4){
    ctx.fillStyle='#ffeb3b';
    ctx.beginPath();ctx.ellipse(-10,-4,5,3,0,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.moveTo(-15,-4);ctx.lineTo(-18,-1);ctx.lineTo(-18,-7);ctx.closePath();ctx.fill();
  }
}

function drawSeaSolar(c) {
  // Water base
  ctx.fillStyle='rgba(41,182,246,0.4)';
  ctx.beginPath();ctx.ellipse(0,2,26,8,0,0,Math.PI*2);ctx.fill();
  // Float
  ctx.fillStyle='#78909c';
  ctx.beginPath();ctx.ellipse(0,0,22,5,0,0,Math.PI*2);ctx.fill();
  // Panels
  ctx.fillStyle=c;
  ctx.fillRect(-20,-12,40,12);
  ctx.strokeStyle='rgba(0,0,0,0.3)';ctx.lineWidth=0.7;
  for(let i=-12;i<=12;i+=8){ctx.beginPath();ctx.moveTo(i,-12);ctx.lineTo(i,0);ctx.stroke();}
  ctx.beginPath();ctx.moveTo(-20,-6);ctx.lineTo(20,-6);ctx.stroke();
}

function drawOffshore(c, lvl) {
  lvl=lvl||1;
  ctx.fillStyle=`rgba(41,182,246,${0.3+lvl*0.05})`;
  ctx.fillRect(-28,-2,56,12);
  ctx.fillStyle='#455a64'; ctx.fillRect(-22,-4,44,6);
  const nTurbines=lvl>=5?3:lvl>=3?2:1;
  const spacing=26/(nTurbines>1?nTurbines-1:1);
  for(let ti=0;ti<nTurbines;ti++){
    const tx=-13+(ti*spacing);
    const tH=40+lvl*5;
    const bladeL=16+lvl*3;
    const tC=lvl>=6?'#e0f0ff':'#b0bec5';
    ctx.fillStyle=tC; ctx.fillRect(tx-2,-tH,4,tH);
    ctx.save();ctx.translate(tx,-tH);
    const t2=Date.now()/(600-lvl*40);
    const nBlades=lvl>=7?4:3;
    for(let bl=0;bl<nBlades;bl++){
      ctx.save();ctx.rotate(t2+bl*(Math.PI*2/nBlades));
      ctx.fillStyle=lvl>=5?'#e0f0ff':c;
      ctx.fillRect(-1.5,-bladeL,3,bladeL-2);ctx.restore();
    }
    ctx.fillStyle='#78909c';ctx.beginPath();ctx.arc(0,0,3+lvl*0.3,0,Math.PI*2);ctx.fill();
    if(lvl>=4){ctx.fillStyle=`rgba(100,200,255,0.2)`;ctx.beginPath();ctx.arc(0,0,bladeL+3,0,Math.PI*2);ctx.fill();}
    ctx.restore();
  }
}

function drawResort(c) {
  // Main building - luxury
  ctx.fillStyle=c;
  ctx.fillRect(-28,-38,56,42);
  // Balconies
  for(let floor=0;floor<3;floor++){
    ctx.fillStyle='rgba(255,255,255,0.15)';
    ctx.fillRect(-30,-10-floor*12,60,4);
    // Planters
    for(let p=-22;p<=22;p+=9){
      ctx.fillStyle='#4caf50';
      ctx.beginPath();ctx.arc(p,-12-floor*12,3,0,Math.PI*2);ctx.fill();
    }
  }
  // Roof pool
  ctx.fillStyle='#29b6f6';
  ctx.fillRect(-16,-40,32,5);
  // Palm
  ctx.fillStyle='#6d4c28';
  ctx.fillRect(22,-56,3,20);
  ctx.fillStyle='#388e3c';
  for(let a=0;a<5;a++){
    ctx.save();ctx.translate(23,-56);ctx.rotate(a*Math.PI*2/5);
    ctx.fillStyle='#4caf50';ctx.fillRect(0,0,2,14);ctx.restore();
  }
}

function drawTidal(c, lvl) {
  lvl=lvl||1;
  const nTurbines=lvl>=5?3:lvl>=3?2:1;
  ctx.fillStyle=`rgba(0,188,212,${0.25+lvl*0.07})`;
  ctx.fillRect(-30,-4,60,12);
  for(let ti=0;ti<nTurbines;ti++){
    const tx=(ti-(nTurbines-1)/2)*22;
    const tr=10+lvl*1.5;
    ctx.fillStyle=lvl>=5?'#37474f':'#546e7a';
    ctx.beginPath();ctx.ellipse(tx,-2,tr,tr*0.55,0,0,Math.PI*2);ctx.fill();
    const t2=Date.now()/(900-lvl*60);
    const nBlades=lvl>=6?6:lvl>=4?5:4;
    for(let bl=0;bl<nBlades;bl++){
      ctx.save();ctx.translate(tx,-2);ctx.rotate(t2+bl*(Math.PI*2/nBlades));
      ctx.fillStyle=lvl>=6?'#80deea':lvl>=4?'#4dd0e1':c;
      ctx.fillRect(-1.5,-tr-2,3,tr);ctx.restore();
    }
    // Hub
    ctx.fillStyle='#cfd8dc';ctx.beginPath();ctx.arc(tx,-2,3,0,Math.PI*2);ctx.fill();
  }
  // Legs
  ctx.fillStyle='#37474f';
  ctx.fillRect(-26,8,5,14);ctx.fillRect(21,8,5,14);ctx.fillRect(-26,20,52,4);
  // Energy cable glow (lvl 4+)
  if(lvl>=4){
    ctx.strokeStyle=`rgba(0,188,212,${0.5+lvl*0.08})`;ctx.lineWidth=2;
    ctx.beginPath();ctx.moveTo(0,8);ctx.lineTo(0,22);ctx.stroke();
  }
}

function drawAirport(c, lvl) {
  lvl=lvl||1;
  const w=32+lvl*3, h=22+lvl*2;
  const wallC=lvl>=5?'#e8f4e8':lvl>=3?'#dce8f0':c;
  ctx.fillStyle=wallC; ctx.fillRect(-w,-h,w*2,h+6);
  // Curved roof
  ctx.fillStyle=shadeColor(wallC,-12);
  ctx.beginPath();ctx.moveTo(-w-2,-h);ctx.quadraticCurveTo(0,-h-18-lvl*2,w+2,-h);ctx.lineTo(w+2,-h);ctx.closePath();ctx.fill();
  // Windows - more per level
  const nWins=3+lvl;
  for(let wi=0;wi<nWins;wi++){
    const wx=-w+5+wi*((w*2-10)/(nWins-1||1));
    ctx.fillStyle=lvl>=5?'#80deea':'#b3e5fc';
    ctx.fillRect(wx-4,-h+4,8,9);
    ctx.strokeStyle='rgba(0,0,0,0.15)';ctx.lineWidth=0.5;ctx.strokeRect(wx-4,-h+4,8,9);
  }
  // Solar panels on roof - more per level
  const nSolar=2+lvl;
  for(let si=0;si<nSolar;si++){
    const sx=-w+8+si*((w*2-16)/(nSolar-1||1));
    ctx.fillStyle=lvl>=7?'#ffe040':'#f5c518';
    ctx.fillRect(sx-4,-h-14,8,6);
    ctx.strokeStyle='rgba(0,0,0,0.2)';ctx.lineWidth=0.4;
    ctx.beginPath();ctx.moveTo(sx,-h-14);ctx.lineTo(sx,-h-8);ctx.stroke();
  }
  // Runway
  ctx.fillStyle='#37474f'; ctx.fillRect(-w-6,4,w*2+12,10);
  ctx.fillStyle='rgba(255,255,255,0.5)';
  for(let rx=-w;rx<=w;rx+=12){ ctx.fillRect(rx,6,7,3); }
  // Electric vehicle gate (lvl 4+)
  if(lvl>=4){
    ctx.fillStyle='#4caf50'; ctx.fillRect(-w-8,0,4,6); ctx.fillRect(w+4,0,4,6);
    ctx.fillStyle='rgba(76,175,80,0.3)'; ctx.fillRect(-w-4,0,w*2+8,4);
  }
  // Control tower (lvl 5+)
  if(lvl>=5){
    ctx.fillStyle='#455a64'; ctx.fillRect(w+2,-h-20,8,h+24);
    ctx.fillStyle='#80cbc4'; ctx.fillRect(w+1,-h-20,10,8);
  }
}

function drawGeneric(c) {
  ctx.fillStyle=c;
  ctx.fillRect(-15,-30,30,34);
  ctx.fillStyle=shadeColor(c,-20);
  ctx.beginPath();ctx.moveTo(-18,-30);ctx.lineTo(0,-46);ctx.lineTo(18,-30);ctx.closePath();ctx.fill();
}

function shadeColor(color, percent) {
  let R = parseInt(color.substring(1,3),16);
  let G = parseInt(color.substring(3,5),16);
  let B = parseInt(color.substring(5,7),16);
  R = Math.max(0,Math.min(255,R+percent));
  G = Math.max(0,Math.min(255,G+percent));
  B = Math.max(0,Math.min(255,B+percent));
  return '#'+[R,G,B].map(x=>x.toString(16).padStart(2,'0')).join('');
}

// ===================================================================
//  UI RENDERING
// ===================================================================

function renderTabs() {
  const tabContainer = document.getElementById('city-tabs');
  tabContainer.innerHTML = '';
  CITIES.forEach((city, i) => {
    const tab = document.createElement('div');
    const prevUnlocked = i === 0 || cityStates[i-1].unlocked;
    const canBuy = !cityStates[i].unlocked && prevUnlocked && money >= city.unlockCost;
    const locked = !cityStates[i].unlocked;
    tab.className = 'city-tab' + (i === currentCity ? ' active' : '') + (locked ? (canBuy ? ' buyable-tab' : ' locked-tab') : '');
    if (locked) {
      const label = canBuy
        ? city.name + ' <span style="font-size:0.7rem;color:#f5c518;">[Comprar: ' + formatMoney(city.unlockCost) + ']</span>'
        : city.name + ' <span class="lock-icon">[bloq: ' + formatMoney(city.unlockCost) + ']</span>';
      tab.innerHTML = label;
      if (canBuy) tab.onclick = () => buyCity(i);

    } else {
      tab.innerHTML = city.name;
      tab.onclick = () => selectCity(i);
    }
    tabContainer.appendChild(tab);
  });
}

function selectCity(i) {
  if (!cityStates[i].unlocked) return;
  currentCity = i;
  renderTabs();
  renderBuildingsList();
  updateLockedOverlay();
  drawCity();
}

function renderBuildingsList() {
  const city = CITIES[currentCity];
  const state = cityStates[currentCity];
  const list = document.getElementById('buildings-list');
  list.innerHTML = '';
  document.getElementById('panel-city-name').textContent = city.name + ' - ' + city.subtitle;

  city.buildings.forEach(b => {
    const units = state.units[b.id] || [];
    const atMax = units.length >= 3;
    const buyCost = getBuyCost(b, state);
    const canAfford = !atMax && money >= buyCost;

    // --- BUY CARD ---
    const buyCard = document.createElement('div');
    buyCard.className = 'build-card' + (canAfford ? '' : ' cannot-afford');
    buyCard.innerHTML =
      '<div class="build-name">' + b.name + (units.length > 0 ? ' <span style="color:var(--solar);font-size:0.75rem;">('+units.length+'/3)</span>' : '') + '</div>' +
      (atMax ? '<div class="build-cost" style="color:#c08040;">LIMITE MAXIMO (3/3)</div>' : '<div class="build-cost">Comprar: ' + formatMoney(buyCost) + '</div>') +
      '<div class="build-income">Renda: +' + formatMoney(b.income) + ' / ' + ((b.baseInterval||5000)/1000).toFixed(1) + 's</div>';
    if (canAfford) {
      buyCard.addEventListener('click', () => buildItem(b));
    }
    if (atMax) { buyCard.style.opacity = '0.6'; buyCard.style.cursor = 'default'; }
    list.appendChild(buyCard);

    // --- UNIT CARDS (one per purchased unit, collapsible) ---
    units.forEach((unit, idx) => {
      const iLvl = unit.incomeLevel;
      const sLvl = unit.speedLevel;
      const iCost = iLvl < MAX_LEVEL ? Math.round(b.cost * Math.pow(2, iLvl)) : 0;
      const sCost = sLvl < MAX_LEVEL ? Math.round(b.cost * Math.pow(2, sLvl)) : 0;
      const canUpI = iLvl < MAX_LEVEL && money >= iCost;
      const canUpS = sLvl < MAX_LEVEL && money >= sCost;
      const effIncome = getUnitIncome(b, unit);
      const ivSec = (getUnitInterval(b, unit)/1000).toFixed(1);
      const expandKey = currentCity + '_' + b.id + '_' + idx;
      const isOpen = expandedUnits.has(expandKey);

      const uCard = document.createElement('div');
      uCard.className = 'build-card unit-card';
      uCard.style.marginLeft = '12px';
      uCard.style.borderColor = isOpen ? 'rgba(212,168,90,0.6)' : 'rgba(212,168,90,0.2)';
      uCard.style.background = 'linear-gradient(135deg,#181205,#141008)';
      uCard.style.padding = '8px 12px';

      let pipsHtml = '<div class="level-bar" style="margin:4px 0 0;">';
      for(let p=1;p<=MAX_LEVEL;p++){
        const hasI=p<=iLvl, hasS=p<=sLvl;
        const cls=(hasI&&hasS)?'both':hasI?'income':hasS?'speed':'';
        pipsHtml += '<div class="level-pip '+cls+'"></div>';
      }
      pipsHtml += '</div>';

      const iBtnHtml = iLvl >= MAX_LEVEL
        ? '<button class="upgrade-btn income-btn max">Renda MAX</button>'
        : '<button class="upgrade-btn income-btn"'+(canUpI?'':' disabled')+'>Renda Lv'+(iLvl+1)+'<br>'+formatMoney(iCost)+'</button>';
      const sBtnHtml = sLvl >= MAX_LEVEL
        ? '<button class="upgrade-btn speed-btn max">Veloc MAX</button>'
        : '<button class="upgrade-btn speed-btn"'+(canUpS?'':' disabled')+'>Veloc Lv'+(sLvl+1)+'<br>'+formatMoney(sCost)+'</button>';
      let spentCalc = b.cost;
      for(let li=1;li<iLvl;li++) spentCalc += Math.round(b.cost * Math.pow(2, li));
      for(let li=1;li<sLvl;li++) spentCalc += Math.round(b.cost * Math.pow(2, li));
      const refundPreview = Math.floor(spentCalc/2);
      const delBtnHtml = '<button class="upgrade-btn delete-btn">Demolir<br>+'+formatMoney(refundPreview)+'</button>';

      uCard.innerHTML =
        '<div class="unit-card-header">' +
          '<div>' +
            '<span style="font-size:0.72rem;color:var(--sand-light);font-family:Cinzel,serif;">' + b.name + ' #' + (idx+1) + '</span>' +
            '<span style="font-size:0.68rem;color:var(--green);margin-left:6px;">+'+formatMoney(effIncome)+'/'+ivSec+'s</span>' +
          '</div>' +
          '<span class="unit-arrow'+(isOpen?' open':'')+'">&#9660;</span>' +
        '</div>' +
        '<div class="unit-card-body'+(isOpen?' open':'')+'">' +
          pipsHtml +
          '<div class="upgrade-row" style="margin-top:6px;">' + iBtnHtml + sBtnHtml + delBtnHtml + '</div>' +
        '</div>';

      const header = uCard.querySelector('.unit-card-header');
      header.addEventListener('click', () => {
        if (expandedUnits.has(expandKey)) expandedUnits.delete(expandKey);
        else expandedUnits.add(expandKey);
        renderBuildingsList();
      });

      const iBtnEl = uCard.querySelector('.income-btn:not(.max)');
      const sBtnEl = uCard.querySelector('.speed-btn:not(.max)');
      const dBtnEl = uCard.querySelector('.delete-btn');
      if (iBtnEl && !iBtnEl.disabled) iBtnEl.addEventListener('click', (e) => { e.stopPropagation(); upgradeIncome(b, idx); });
      if (sBtnEl && !sBtnEl.disabled) sBtnEl.addEventListener('click', (e) => { e.stopPropagation(); upgradeSpeed(b, idx); });
      if (dBtnEl) dBtnEl.addEventListener('click', (e) => { e.stopPropagation(); demolishUnit(b, idx); });

      list.appendChild(uCard);
    });
  });

  const cityIncome = getCityIncome(currentCity);

}

function getCityIncome(cityIndex) {
  // Returns income per collection tick (uses fastest interval across all units)
  const city = CITIES[cityIndex];
  const state = cityStates[cityIndex];
  const collectInterval = getOverallSpeedInterval();
  let income = 0;
  city.buildings.forEach(b => {
    const units = state.units[b.id] || [];
    units.forEach(u => {
      const unitInc = getUnitIncome(b, u);
      const unitInterval = getUnitInterval(b, u);
      // Scale: faster units earn proportionally more per global tick
      income += unitInc * (collectInterval / unitInterval);
    });
  });
  return Math.round(income);
}

function getTotalIncome() {
  let total = 0;
  CITIES.forEach((_, i) => { total += getCityIncome(i); });
  return total;
}

function upgradeIncome(b, unitIndex) {
  const state = cityStates[currentCity];
  const unit = (state.units[b.id] || [])[unitIndex];
  if (!unit || unit.incomeLevel >= MAX_LEVEL) return;
  const cost = upgradeCostFn(b.cost, unit.incomeLevel);
  if (money < cost) return;
  money -= cost;
  unit.incomeLevel++;
  // Flash animation
  const animKey = currentCity + '_' + b.id + '_' + unitIndex;
  incomeAnims[animKey] = { lvl: unit.incomeLevel, startT: Date.now() };
  showNotification(b.name + ' #' + (unitIndex+1) + ': Renda nivel ' + unit.incomeLevel + '!');
  updateDisplay(); renderBuildingsList(); checkUnlocks(); checkWin();
}
function upgradeSpeed(b, unitIndex) {
  const state = cityStates[currentCity];
  const unit = (state.units[b.id] || [])[unitIndex];
  if (!unit || unit.speedLevel >= MAX_LEVEL) return;
  const cost = upgradeCostFn(b.cost, unit.speedLevel);
  if (money < cost) return;
  money -= cost;
  unit.speedLevel++;
  showNotification(b.name + ' #' + (unitIndex+1) + ': Velocidade nivel ' + unit.speedLevel + '!');
  updateDisplay(); renderBuildingsList(); checkWin();
}
function getBuyCost(b, state) {
  return b.cost;
}

function getUnitIncome(b, unit) {
  const base = b.income;
  const maxI = b.maxIncome || base * 4;
  return Math.round(base + (maxI - base) * (unit.incomeLevel - 1) / 6);
}

function getUnitInterval(b, unit) {
  const base = b.baseInterval || 5000;
  const maxI = b.maxInterval  || 1000;
  return Math.round(base - (base - maxI) * (unit.speedLevel - 1) / 6);
}

function demolishUnit(b, unitIndex) {
  const state = cityStates[currentCity];
  const units = state.units[b.id] || [];
  if (unitIndex < 0 || unitIndex >= units.length) return;
  const unit = units[unitIndex];
  let spent = b.cost;
  for (let i = 1; i < unit.incomeLevel; i++) spent += upgradeCostFn(b.cost, i);
  for (let i = 1; i < unit.speedLevel; i++) spent += upgradeCostFn(b.cost, i);
  const refund = Math.floor(spent / 2);
  money += refund;
  state.units[b.id].splice(unitIndex, 1);
  showNotification(b.name + ' #' + (unitIndex+1) + ' demolido. Reembolso: ' + formatMoney(refund));
  updateDisplay();
  renderBuildingsList();
  drawCity();
}

function buildItem(b) {
  const state = cityStates[currentCity];
  if (!state.units[b.id]) state.units[b.id] = [];
  if (state.units[b.id].length >= 3) return;
  const cost = getBuyCost(b, state);
  if (money < cost) return;
  money -= cost;
  const newIdx = state.units[b.id].length;
  state.units[b.id].push({ incomeLevel: 1, speedLevel: 1 });
  // Rise animation - only for non-Tel Aviv cities
  if (currentCity !== 0) {
    const key = currentCity + '_' + b.id + '_' + newIdx;
    const slot = getSlot(slotIndex_counter(), canvas.width, canvas.height);
    buildingAnims[key] = { startY: canvas.height + 80, targetY: slot.y, startT: Date.now() };
  }
  updateDisplay();
  renderBuildingsList();
  drawCity();
  checkUnlocks();
}

function slotIndex_counter() {
  // Count total units placed before this one to get slot index
  const state = cityStates[currentCity];
  const city = CITIES[currentCity];
  let count = 0;
  for (const b of city.buildings) {
    count += (state.units[b.id] || []).length;
  }
  return count - 1;
}

function updateLockedOverlay() {
  const overlay = document.getElementById('locked-overlay');
  const city = CITIES[currentCity];
  const i = currentCity;
  if (!cityStates[i].unlocked) {
    overlay.style.display = 'flex';
    overlay.innerHTML = '';
    const prevUnlocked = i === 0 || cityStates[i-1].unlocked;
    const canBuy = prevUnlocked && money >= city.unlockCost;

    const card = document.createElement('div');
    card.className = 'build-card';
    card.style.width = '260px';
    card.style.cursor = canBuy ? 'pointer' : 'default';
    if (!canBuy) card.classList.add('cannot-afford');

    card.innerHTML =
      '<div class="build-name">' + city.name.toUpperCase() + '</div>' +
      '<div class="build-desc" style="margin-top:5px;">' + city.subtitle + '</div>' +
      (prevUnlocked
        ? '<div class="build-cost" style="margin-top:8px;">Comprar cidade: ' + formatMoney(city.unlockCost) + '</div>'
        : '<div class="build-cost" style="margin-top:8px;color:#5a4a30;">Desbloqueie a cidade anterior primeiro</div>');

    if (canBuy) {
      card.addEventListener('click', () => buyCity(i));
    }
    overlay.appendChild(card);
  } else {
    overlay.style.display = 'none';
    overlay.innerHTML = '';
  }
}

function updateDisplay() {
  const income = getTotalIncome();
  document.getElementById('money-display').textContent = formatMoney(money);
  const fastestMs = getOverallSpeedInterval();
  document.getElementById('income-display').textContent = 'Renda: +' + formatMoney(income) + ' / ' + (fastestMs/1000).toFixed(1) + 's';

  const totalBuilt = CITIES.reduce((sum, city, i) => sum + Object.values(cityStates[i].units).reduce((s,arr)=>s+arr.length,0), 0);
  document.getElementById('total-builds').textContent = totalBuilt;

  const mins = Math.floor(gameTime / 60);
  const secs = gameTime % 60;
  document.getElementById('time-display').textContent =
    String(mins).padStart(2,'0') + ':' + String(secs).padStart(2,'0');
}

function checkUnlocks() {
  // No auto-unlock — player must manually buy cities
  renderTabs(); // refresh tab affordability indicators
}

function buyCity(i) {
  if (i === 0) return;
  if (cityStates[i].unlocked) return;
  if (!cityStates[i-1].unlocked) return;
  const city = CITIES[i];
  if (money < city.unlockCost) return;
  money -= city.unlockCost;
  cityStates[i].unlocked = true;
  showNotification(city.name + ' desbloqueada!');
  updateDisplay();
  renderTabs();
  selectCity(i);
}

let notifTimeout;
function showNotification(msg) {
  const notif = document.getElementById('notif');
  notif.classList.remove('show');
  void notif.offsetWidth; // force reflow to restart transition
  notif.textContent = msg;
  notif.classList.add('show');
  clearTimeout(notifTimeout);
  notifTimeout = setTimeout(() => { notif.classList.remove('show'); }, 7000);
}

// ===================================================================
//  INCOME FLOATING TEXT
// ===================================================================

function spawnFloatingIncome(amount) {
  const cityArea = document.getElementById('city-area');
  const el = document.createElement('div');
  el.className = 'float-income';
  el.textContent = '+' + formatMoney(amount);
  el.style.left = (80 + Math.random() * (cityArea.offsetWidth - 160)) + 'px';
  el.style.top = (cityArea.offsetHeight * 0.3 + Math.random() * 100) + 'px';
  cityArea.appendChild(el);
  setTimeout(() => el.remove(), 1400);
}

// ===================================================================
//  GAME LOOP
// ===================================================================

let lastIncomeTime = Date.now();
let lastSecTime = Date.now();
let animFrame;

function gameLoop() {
  const now = Date.now();

  // Income based on speed level
  const currentInterval = getOverallSpeedInterval();
  if (now - lastIncomeTime >= currentInterval) {
    const income = getTotalIncome();
    if (income > 0) {
      money += income;
      spawnFloatingIncome(income);
      updateDisplay();
      renderBuildingsList();
      checkUnlocks();
    }
    lastIncomeTime = now;
  }

  // Game time tick
  if (now - lastSecTime >= 1000) {
    gameTime++;
    updateDisplay();
    lastSecTime = now;
  }

  // Redraw city (for wind turbine animation)
  drawCity();

  animFrame = requestAnimationFrame(gameLoop);
}

// ===================================================================
//  INIT
// ===================================================================

function checkWin() {
  // Check if all cities are unlocked and all buildings have 3 units all at MAX_LEVEL income and speed
  for (let ci = 0; ci < CITIES.length; ci++) {
    if (!cityStates[ci].unlocked) return;
    const city = CITIES[ci];
    const state = cityStates[ci];
    for (const b of city.buildings) {
      const units = state.units[b.id] || [];
      if (units.length < 3) return;
      for (const u of units) {
        if (u.incomeLevel < MAX_LEVEL || u.speedLevel < MAX_LEVEL) return;
      }
    }
  }
  // All done — show win screen
  showWin();
}

function showWin() {
  const screen = document.getElementById('win-screen');
  screen.classList.add('show');

  // Format time
  const mins = Math.floor(gameTime / 60);
  const secs = gameTime % 60;
  const timeStr = mins > 0
    ? mins + ' minuto' + (mins > 1 ? 's' : '') + ' e ' + secs + ' segundo' + (secs !== 1 ? 's' : '')
    : secs + ' segundo' + (secs !== 1 ? 's' : '');
  document.getElementById('win-time-display').textContent = 'Tempo: ' + timeStr;

  // City list
  const cityList = document.getElementById('win-cities-list');
  cityList.innerHTML = '';
  CITIES.forEach(city => {
    const d = document.createElement('div');
    d.className = 'win-city';
    d.textContent = city.name + ' ✓';
    cityList.appendChild(d);
  });
}

function comeback() {
  window.history.back();
}

document.getElementById('win-voltar').addEventListener('click', comeback);

function restartGame() {
  // Reset all state
  money = 150;
  gameTime = 0;
  currentCity = 0;
  cityStates.forEach((s, i) => { s.units = {}; s.unlocked = i === 0; });
  expandedUnits.clear();
  Object.keys(buildingAnims).forEach(k => delete buildingAnims[k]);
  Object.keys(incomeAnims).forEach(k => delete incomeAnims[k]);
  document.getElementById('win-screen').classList.remove('show');
  renderTabs();
  renderBuildingsList();
  updateDisplay();
  selectCity(0);
}

function init() {
  resizeCanvas();
  renderTabs();
  renderBuildingsList();
  updateDisplay();
  updateLockedOverlay();
  document.getElementById('win-restart').addEventListener('click', restartGame);
  gameLoop();
  // Renda passiva: +7 a cada 5 minutos
  setInterval(() => { money += 7; updateDisplay(); renderBuildingsList(); spawnFloatingIncome(7); }, 300000);
}

init();