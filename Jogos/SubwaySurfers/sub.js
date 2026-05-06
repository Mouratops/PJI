window.addEventListener('DOMContentLoaded', function () {

var canvas = document.getElementById('c');
var ctx    = canvas.getContext('2d');
var W = 400, H = 580;
canvas.width = W; canvas.height = H;

var GRASS_W = 74;
var ROAD_L  = GRASS_W;
var ROAD_R  = W - GRASS_W;
var ROAD_W  = ROAD_R - ROAD_L;
var LANE_W  = ROAD_W / 3;
var LANE_X  = [
  ROAD_L + LANE_W * 0.5,
  ROAD_L + LANE_W * 1.5,
  ROAD_L + LANE_W * 2.5,
];
var SKY_H   = 120;   //altura do fundo de cima

//urso
var BW = 28, BH = 36;   //tamanho gordo, enorme, gordao, gigantao, imenso
var S  = 22;            //escala
var BASE_BEAR_SPD = 3.8;

//tamanho dos objetos, acho q n precisa arrumar
var OBS = [
  {e:'🗑️',w:40,h:44},{e:'🛢️',w:38,h:42},{e:'📦',w:44,h:40},
  {e:'🚗', w:58,h:46},{e:'🛻',w:60,h:48},{e:'🚛',w:66,h:50},
  {e:'🛒', w:46,h:46},{e:'🔥',w:42,h:50},{e:'☣️',w:38,h:44},
  {e:'💀', w:36,h:46},{e:'🧱',w:52,h:38},{e:'⚠️',w:40,h:40},
  {e:'🏗️', w:56,h:50},{e:'⚙️',w:42,h:42},{e:'🔩',w:34,h:34},
  {e:'🪣', w:36,h:42},{e:'🪝',w:34,h:42},{e:'🔧',w:32,h:40},
  {e:'🐍', w:50,h:28},{e:'🦂',w:42,h:36},{e:'🐀',w:42,h:30},
  {e:'🌵', w:36,h:50},{e:'🍄',w:36,h:42},{e:'💩',w:38,h:38},
  {e:'⚡', w:36,h:46},{e:'🧪',w:34,h:44},{e:'💣',w:40,h:42},
  {e:'🪨', w:46,h:38},{e:'🌊',w:56,h:36},{e:'🔴',w:36,h:36},
];

//poder 
var POWERS = [
  {id:'speed', label:'TURBO!',  color:'#ffcc00', glow:'rgba(255,200,0,.7)',  icon:'⚡'},
  {id:'clear', label:'LIMPO!',  color:'#00eeff', glow:'rgba(0,220,255,.7)', icon:'✨'},
  {id:'slow',  label:'LENTO!',  color:'#cc44ff', glow:'rgba(180,40,255,.7)',icon:'🐌'},
];

//tudo
var elScore = document.getElementById('h-score');
var elDist  = document.getElementById('h-dist');
var elTimer = document.getElementById('h-timer');
var elSpd   = document.getElementById('h-spd');
var elPower = document.getElementById('h-power');
var pwCard  = document.getElementById('power-card');
var lfEls   = [0,1,2].map(function(i){return document.getElementById('lf'+i);});
var ppEls   = [0,1,2].map(function(i){return document.getElementById('p'+i);});
var ovStart = document.getElementById('ov-start');
var ovOver  = document.getElementById('ov-over');
var flashEl = document.getElementById('flash');
var toastEl = document.getElementById('toast');

document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-restart').addEventListener('click', startGame);
document.getElementById('btn-voltar').addEventListener('click', comeback);

//estado
var G = {}, keys = {}, animId = null, lastTS = 0, toastTID = null;
var BASE_SPEED = 3.0;

function resetG() {
  G = {
    running: false, frame: 0, elapsed: 0,
    dist: 0, score: 0, level: 1, maxLevel: 1,
    speed: BASE_SPEED,                    // vel.mapa
    bearSpd: BASE_BEAR_SPD,               // vel.urso
    lives: 3, hits: 0, inv: 0,
    bear: { x: LANE_X[1], y: H - 110 },
    idleFrames: 0,
    lastBearX: LANE_X[1], lastBearY: H - 110,
    obs: [], balls: [], parts: [], bgObjs: [],
    roadScroll: 0, grassScroll: 0,
    mtnOff: 0, cloudOff: 0, starOff: 0,
    spawnT: 0, spawnI: 65,
    ballT: 0,  ballI: 300,
    lastMin: 0,
    activePower: null, powerTimer: 0, powerLabel: '',
    slowActive: false, clearActive: false, speedBoost: false,
  };
  keys = {};
  initBg();
}

var BG_T = ['pine','pine','pine','pine','chalet','lamp','fence','flower','flower'];
function initBg() {
  G.bgObjs = [];
  for (var i = 0; i < 22; i++) addBgObj(-(i * 85));
}
function addBgObj(sy) {
  G.bgObjs.push({
    side: Math.random() < .5 ? 'L' : 'R',
    type: BG_T[Math.floor(Math.random() * BG_T.length)],
    y:    sy !== undefined ? sy : -(20 + Math.random() * 200),
    v:    Math.floor(Math.random() * 4),
    col:  ['#e74c3c','#f39c12','#e91e63','#9b59b6','#fff176'][Math.floor(Math.random()*5)],
  });
}

window.addEventListener('keydown', function(e) {
  keys[e.key.toLowerCase()] = true;
  if (['arrowleft','arrowright','arrowup','arrowdown'].indexOf(e.key.toLowerCase()) >= 0)
    e.preventDefault();
});
window.addEventListener('keyup', function(e) { keys[e.key.toLowerCase()] = false; });

function startGame() {
  resetG();
  ovStart.classList.remove('show');
  ovOver.classList.remove('show');
  pwCard.style.display = 'none';
  G.running = true;
  lastTS = performance.now();
  if (animId) cancelAnimationFrame(animId);
  animId = requestAnimationFrame(loop);
}

function comeback() {
  window.history.back();
}

function endGame() {
  G.running = false;
  if (animId) { cancelAnimationFrame(animId); animId = null; }
  document.getElementById('r-dist').textContent  = Math.floor(G.dist) + 'm';
  document.getElementById('r-time').textContent  = fmt(G.elapsed);
  document.getElementById('r-score').textContent = Math.floor(G.score);
  document.getElementById('r-spd').textContent   = G.maxLevel;
  ovOver.classList.add('show');
}
//loop
function loop(ts) {
  if (!G.running) return;
  var dt = ts - lastTS; if (dt > 60) dt = 60;
  lastTS = ts; G.elapsed += dt;
  update(); draw();
  animId = requestAnimationFrame(loop);
}
//opcao d up
function update() {
  G.frame++;

//velocidade do urso e do mapa quando aumenta o nivel
  var min = Math.floor(G.elapsed / 60000);
  if (min + 1 > G.level) {
    G.level = min + 1;
    if (G.level > G.maxLevel) G.maxLevel = G.level;
    var mapGain  = (G.level - 1) * 1.5;          // mapa
    G.speed      = BASE_SPEED + mapGain;
    G.bearSpd    = BASE_BEAR_SPD + mapGain / 3;   // urso
    G.spawnI     = Math.max(18, 65 - (G.level - 1) * 7);
    elSpd.textContent = G.level;
    showToast('NIVEL ' + G.level + '! Urso +' + (mapGain/3).toFixed(1) + ' de velocidade!', 'info');
  }

//tempo poder
  if (G.powerTimer > 0) {
    G.powerTimer--;
    elPower.textContent = G.powerLabel + ' ' + Math.ceil(G.powerTimer / 60) + 's';
    if (G.powerTimer === 0) deactivatePower();
  }

//velocidade mapa
  var mapSpd = G.speed;
  if (G.slowActive)  mapSpd = G.speed * 0.32;
  if (G.clearActive) mapSpd = G.speed;
//vel urso definitivo dos 2 
  var bearMov = G.speedBoost ? G.bearSpd * 2.2 : G.bearSpd;

  G.dist  += mapSpd * 0.055;
  G.score += mapSpd * 0.05;
  G.roadScroll = (G.roadScroll + mapSpd)        % 60;
  G.grassScroll= (G.grassScroll+ mapSpd * 0.6)  % H;
  G.mtnOff     = (G.mtnOff    + mapSpd * 0.15)  % (W * 1.5);
  G.cloudOff   = (G.cloudOff  + mapSpd * 0.10)  % (W * 2.5);

  var b = G.bear, mvx = 0, mvy = 0;
  if (keys['a']||keys['arrowleft'])  mvx = -bearMov;
  if (keys['d']||keys['arrowright']) mvx =  bearMov;
  if (keys['w']||keys['arrowup'])    mvy = -bearMov;
  if (keys['s']||keys['arrowdown'])  mvy =  bearMov;
  if (mvx && mvy) { mvx *= 0.707; mvy *= 0.707; }
  b.x = clamp(b.x + mvx, ROAD_L + BW/2, ROAD_R - BW/2);
  b.y = clamp(b.y + mvy, SKY_H  + BH/2, H - BH/2 - 5);

//para não ter burla 3s se não crau
  var moved = Math.abs(b.x - G.lastBearX) > 0.5 || Math.abs(b.y - G.lastBearY) > 0.5;
  if (moved) {
    G.idleFrames = 0;
  } else {
    G.idleFrames++;
    if (G.idleFrames === 180) {  //exatos 3s
      if (G.inv === 0) onHit(b.x, b.y);
      G.idleFrames = 0;
      showToast('FICOU PARADO! CORRA!', 'bad');
    }
  }
  G.lastBearX = b.x;
  G.lastBearY = b.y;

  if (G.inv > 0) G.inv--;


  G.bgObjs.forEach(function(o){ o.y += mapSpd * 0.55; });
  G.bgObjs = G.bgObjs.filter(function(o){ return o.y < H + 70; });
  while (G.bgObjs.length < 22) addBgObj();

  if (!G.clearActive) {
    G.spawnT++;
    if (G.spawnT >= G.spawnI) { G.spawnT = 0; spawnObs(); }
  }
  G.obs.forEach(function(o){ o.y += mapSpd; o.bob += 0.08; });
  G.obs = G.obs.filter(function(o){ return o.y < H + 60; });

  G.ballT++;
  if (G.ballT >= G.ballI) {
    G.ballT = 0;
    G.ballI = 280 + Math.floor(Math.random() * 180);
    spawnBall();
  }
  G.balls.forEach(function(o){ o.y += mapSpd * 0.72; o.glow += 0.09; });
  G.balls = G.balls.filter(function(o){ return o.y < H + 60; });

  G.parts.forEach(function(p){ p.x+=p.vx; p.y+=p.vy; p.vy+=0.18; p.life--; });
  G.parts = G.parts.filter(function(p){ return p.life > 0; });

  if (G.inv === 0) {
    for (var oi = G.obs.length - 1; oi >= 0; oi--) {
      var o = G.obs[oi];
      if (Math.abs(b.x-o.x) < BW/2+o.hw && Math.abs(b.y-o.y) < BH/2+o.hh) {
        G.obs.splice(oi, 1); onHit(b.x, b.y); break;
      }
    }
  }

  for (var bi = G.balls.length-1; bi >= 0; bi--) {
    var ball = G.balls[bi];
    if (Math.abs(b.x-ball.x) < BW/2+16 && Math.abs(b.y-ball.y) < BH/2+16) {
      G.balls.splice(bi, 1);
      activatePower(ball.pw);
      ballParts(ball.x, ball.y, ball.pw.glow);
      break;
    }
  }

  elScore.textContent = Math.floor(G.score);
  elDist.textContent  = Math.floor(G.dist) + 'm';
  elTimer.textContent = fmt(G.elapsed);
  lfEls.forEach(function(el,i){ el.classList.toggle('lost', i >= G.lives); });
  ppEls.forEach(function(el,i){ el.classList.toggle('on',   i <  G.hits);  });
}

function spawnObs() {
  var count = G.level >= 3 && Math.random() < .35 ? 2 : 1;
  var lanes = [0,1,2].sort(function(){ return Math.random()-.5; }).slice(0, count);
  lanes.forEach(function(lane, i) {
    var def = OBS[Math.floor(Math.random() * OBS.length)];
    G.obs.push({ x:LANE_X[lane], y:-50-i*35, e:def.e, hw:def.w/2, hh:def.h/2, ew:def.w, bob:Math.random()*Math.PI*2 });
  });
}

function spawnBall() {
  var pw = POWERS[Math.floor(Math.random() * POWERS.length)];
  G.balls.push({ x:LANE_X[Math.floor(Math.random()*3)], y:-30, pw:pw, glow:0 });
}

function activatePower(pw) {
  deactivatePower();
  G.activePower = pw.id; G.powerTimer = 600; G.powerLabel = pw.label;
  pwCard.style.display = 'block';
  elPower.textContent = pw.label + ' 10s';
  elPower.style.color = pw.color;
  if (pw.id === 'speed')  { G.speedBoost = true;  showToast('TURBO! Urso mais rapido por 10s!', 'power'); }
  if (pw.id === 'clear')  { G.clearActive = true; G.obs = []; showToast('LIMPO! Sem obstaculos por 10s!', 'power'); }
  if (pw.id === 'slow')   { G.slowActive = true;  showToast('LENTO! Obstaculos mais devagar!', 'power'); }
}
function deactivatePower() {
  G.speedBoost = false; G.clearActive = false; G.slowActive = false;
  G.activePower = null; G.powerTimer = 0; pwCard.style.display = 'none';
}

function onHit(bx, by) {
  G.inv = 90;
  for (var i = 0; i < 20; i++) {
    var a=Math.random()*Math.PI*2, s=2+Math.random()*6;
    G.parts.push({x:bx,y:by,vx:Math.cos(a)*s,vy:Math.sin(a)*s-2,
      color:['#ff6600','#ffcc00','#ff3300','#ccc'][Math.floor(Math.random()*4)],r:2+Math.random()*5,life:22+Math.floor(Math.random()*22)});
  }
  flashEl.style.opacity = '1';
  setTimeout(function(){ flashEl.style.opacity='0'; }, 120);
  G.hits++;
  if (G.hits >= 3) {
    G.hits = 0; G.lives--;
    if (G.lives <= 0) { G.running = false; setTimeout(endGame, 350); return; }
    showToast('VIDA PERDIDA! ' + G.lives + ' restam', 'bad');
  } else {
    showToast('BATEU! (' + G.hits + '/3)', 'bad');
  }
}
function ballParts(x, y, gc) {
  for (var i=0;i<28;i++){
    var a=Math.random()*Math.PI*2,s=2+Math.random()*7;
    G.parts.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-3,color:gc,r:2+Math.random()*5,life:28+Math.floor(Math.random()*28)});
  }
}
//paisagem suica paraguai
function draw() {
  ctx.clearRect(0,0,W,H);
  drawSky();
  drawStars();
  drawMountains();
  drawClouds();
  drawLake();
  drawGrass();
  drawBgObjs();
  drawRoad();
  if (G.clearActive) drawClearFx();
  drawObs();
  drawBalls();
  drawBear();
  drawParts();
  if (G.slowActive) drawSlowFx();
  drawBorders();
}

function drawSky() {
  var g = ctx.createLinearGradient(0,0,0,SKY_H + 30);
  g.addColorStop(0,   '#1a3a6e');
  g.addColorStop(0.35,'#2e6ab0');
  g.addColorStop(0.70,'#5a9ed4');
  g.addColorStop(1,   '#8dc8f0');
  ctx.fillStyle = g; ctx.fillRect(0,0,W,SKY_H+30);


  var sunX=W*.82, sunY=SKY_H*.18;

  var halo=ctx.createRadialGradient(sunX,sunY,8,sunX,sunY,SKY_H*.5);
  halo.addColorStop(0,'rgba(255,235,150,.18)');
  halo.addColorStop(1,'rgba(255,200,80,0)');
  ctx.fillStyle=halo; ctx.fillRect(0,0,W,SKY_H+10);

  ctx.fillStyle='#fff8d0';
  ctx.beginPath(); ctx.arc(sunX,sunY,10,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(255,245,200,.5)';
  ctx.beginPath(); ctx.arc(sunX,sunY,16,0,Math.PI*2); ctx.fill();
}

function drawStars() { /* dia claro — sem estrelas dá para deixar cpmentarios assim*/ }

function drawMountains() {
  var baseY = SKY_H + 28;

  drawMtnLayer(baseY, 0.05, '#ddeeff','#b8d4f0', '#f8faff', true, 1.8);

  drawMtnLayer(baseY, 0.11, '#7a9aaa','#4a6a7a', null,      false, 1.4);

  drawMtnLayer(baseY, 0.22, '#3a8030','#1e5018', null,      false, 1.0);
}

function drawMtnLayer(baseY, spd, c1, c2, snowC, snow, wMult) {
  var off = (G.mtnOff * spd) % (W * wMult);
  var pks = [
    {x:0.00,h:.32},{x:0.10,h:.44},{x:0.20,h:.30},{x:0.29,h:.50},
    {x:0.41,h:.36},{x:0.51,h:.47},{x:0.61,h:.31},{x:0.71,h:.52},
    {x:0.82,h:.38},{x:0.91,h:.44},{x:1.01,h:.29},{x:1.11,h:.46},
    {x:1.21,h:.33},{x:1.31,h:.50},{x:1.41,h:.30},
  ];
  for (var rep = -1; rep <= 1; rep++) {
    var ro = rep * W * wMult - off;
    ctx.beginPath(); ctx.moveTo(ro, baseY);
    for (var i = 0; i < pks.length; i++) {
      var px = ro + pks[i].x * W * wMult;
      var py = baseY - pks[i].h * baseY * 0.85;
      if (i === 0) { ctx.lineTo(px,py); }
      else {
        var prev=pks[i-1];
        var ppx=ro+prev.x*W*wMult, ppy=baseY-prev.h*baseY*.85;
        ctx.quadraticCurveTo(ppx,ppy,(ppx+px)/2,(ppy+py)/2);
        ctx.lineTo(px,py);
      }
    }
    ctx.lineTo(ro+W*wMult, baseY); ctx.closePath();
    var mg=ctx.createLinearGradient(0,0,0,baseY);
    mg.addColorStop(0,c1); mg.addColorStop(1,c2);
    ctx.fillStyle=mg; ctx.fill();

    if (snow && snowC) {
      pks.forEach(function(pk) {
        var spx=ro+pk.x*W*wMult, spy=baseY-pk.h*baseY*.85;
        ctx.fillStyle=snowC;
        ctx.beginPath();
        ctx.moveTo(spx,spy);
        ctx.lineTo(spx-15,spy+28); ctx.lineTo(spx+15,spy+28);
        ctx.closePath(); ctx.fill();

        ctx.fillStyle='rgba(180,210,240,.4)';
        ctx.beginPath();
        ctx.moveTo(spx,spy);
        ctx.lineTo(spx+15,spy+28); ctx.lineTo(spx+5,spy+28);
        ctx.closePath(); ctx.fill();
      });
    }
  }
}

function drawClouds() {
  var cls=[
    {fx:.05,fy:.14,fw:.22,fh:.09,sp:.5},
    {fx:.32,fy:.08,fw:.26,fh:.10,sp:.7},
    {fx:.60,fy:.16,fw:.20,fh:.08,sp:.4},
    {fx:.78,fy:.10,fw:.18,fh:.07,sp:.6},
  ];
  cls.forEach(function(c) {
    var ox=((c.fx*W*2.5)-G.cloudOff*c.sp)%(W*2.0)-W*.1;
    var cy=c.fy*SKY_H, cw=c.fw*W, ch=c.fh*SKY_H;

    ctx.globalAlpha=.10;
    ctx.fillStyle='#1a3a6e';
    ctx.beginPath(); ctx.ellipse(ox+3,cy+5,cw*.52,ch*.50,0,0,Math.PI*2); ctx.fill();

    ctx.globalAlpha=.92;
    ctx.fillStyle='#f4f8ff';
    ctx.beginPath(); ctx.ellipse(ox,       cy,        cw*.50,ch*.55,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(ox-cw*.22,cy+ch*.08, cw*.34,ch*.42,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(ox+cw*.22,cy+ch*.10, cw*.38,ch*.40,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(ox-cw*.05,cy-ch*.18, cw*.26,ch*.28,0,0,Math.PI*2); ctx.fill();

    ctx.globalAlpha=.55;
    ctx.fillStyle='#ffffff';
    ctx.beginPath(); ctx.ellipse(ox-cw*.06,cy-ch*.10,cw*.18,ch*.14,0,0,Math.PI*2); ctx.fill();
  });
  ctx.globalAlpha=1;
}

function drawLake() {

  var lakeY  = SKY_H + 22;
  var lakeH  = 14;
  var lg = ctx.createLinearGradient(0,lakeY,0,lakeY+lakeH);
  lg.addColorStop(0,'rgba(80,160,220,.55)');
  lg.addColorStop(1,'rgba(40,100,170,.15)');
  ctx.fillStyle = lg;
  ctx.fillRect(0, lakeY, W, lakeH);

  ctx.strokeStyle='rgba(180,230,255,.22)'; ctx.lineWidth=1;
  var waveOff=G.roadScroll*0.4;
  for (var wy=lakeY+3; wy<lakeY+lakeH-2; wy+=4) {
    ctx.beginPath();
    for (var wx=0; wx<W; wx+=8) {
      var wamp=1.2*Math.sin((wx+waveOff)*0.18);
      if (wx===0) ctx.moveTo(wx,wy+wamp);
      else        ctx.lineTo(wx,wy+wamp);
    }
    ctx.stroke();
  }
}


function drawGrass() {

  var gL=ctx.createLinearGradient(0,0,GRASS_W,0);
  gL.addColorStop(0,'#0c2a08'); gL.addColorStop(.6,'#1a5a12'); gL.addColorStop(1,'#24781a');
  ctx.fillStyle=gL; ctx.fillRect(0,SKY_H+36,GRASS_W,H);

  var gR=ctx.createLinearGradient(ROAD_R,0,W,0);
  gR.addColorStop(0,'#24781a'); gR.addColorStop(.4,'#1a5a12'); gR.addColorStop(1,'#0c2a08');
  ctx.fillStyle=gR; ctx.fillRect(ROAD_R,SKY_H+36,GRASS_W,H);


  ctx.fillStyle='rgba(0,0,0,.08)';
  var rowH=24;
  for (var ry=SKY_H+36+(G.grassScroll%rowH); ry<H; ry+=rowH) {
    ctx.fillRect(0,ry,GRASS_W,1);
    ctx.fillRect(ROAD_R,ry,GRASS_W,1);
  }


  var fCols=['#ff8888','#ffdd44','#88ccff','#ffaaee','#ffffff'];
  var seed=Math.floor(G.grassScroll/26);
  for (var fi=0;fi<10;fi++) {
    var sv=(fi*173+seed*53)%1000;
    var side=fi%2===0?4:ROAD_R+4;
    var fx2=side+(sv%(GRASS_W-18));
    var fy=(G.grassScroll+fi*62)%H;
    if(fy<SKY_H+42||fy>H-4) continue;
    ctx.globalAlpha=.65;
    ctx.fillStyle=fCols[fi%fCols.length];
    ctx.beginPath(); ctx.arc(fx2,fy,2.2,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='rgba(255,255,200,.9)';
    ctx.beginPath(); ctx.arc(fx2,fy,.9,0,Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha=1;
}

function drawBgObjs() {
  G.bgObjs.forEach(function(o) {
    if (o.y < SKY_H+36 || o.y > H+60) return;
    var t=clamp((o.y-SKY_H-36)/(H-SKY_H-36),0,1);
    var sc=0.20+t*.80;
    var bx=o.side==='L'?Math.max(10,GRASS_W*.52):Math.min(W-10,ROAD_R+GRASS_W*.48);
    ctx.save(); ctx.translate(bx,o.y); ctx.scale(sc,sc);
    if      (o.type==='pine')   drawPine(o.v);
    else if (o.type==='chalet') drawChalet();
    else if (o.type==='lamp')   drawLamp();
    else if (o.type==='fence')  drawFence();
    else                        drawFlower(o.col);
    ctx.restore();
  });
}


function drawPine(v) {

  ctx.fillStyle='#4a2e10';
  ctx.fillRect(-5,0,10,24);
  ctx.fillStyle='rgba(0,0,0,.2)';
  ctx.fillRect(-5,0,3,24);

  var layers=[{y:-14,r:16},{y:-27,r:20},{y:-40,r:16},{y:-53,r:12},{y:-65,r:8},{y:-76,r:5}];
  var cols=['#0a3008','#124010','#186018','#1e7020','#246824'];
  layers.forEach(function(l,i) {

    ctx.fillStyle='rgba(0,0,0,.2)';
    ctx.beginPath();
    ctx.moveTo(l.r*.3, l.y-l.r*.7);
    ctx.lineTo(l.r,    l.y+l.r*.6);
    ctx.lineTo(l.r*.3, l.y+l.r*.4);
    ctx.closePath(); ctx.fill();

    ctx.fillStyle=cols[Math.min(i,cols.length-1)];
    ctx.beginPath();
    ctx.moveTo(0,l.y-l.r*.85);
    ctx.lineTo(l.r,l.y+l.r*.6); ctx.lineTo(-l.r,l.y+l.r*.6);
    ctx.closePath(); ctx.fill();

    if (i>=3) {
      ctx.fillStyle='rgba(230,245,255,.78)';
      ctx.beginPath();
      ctx.moveTo(0,l.y-l.r*.85);
      ctx.lineTo(l.r*.55,l.y); ctx.lineTo(-l.r*.55,l.y);
      ctx.closePath(); ctx.fill();
    }

    ctx.strokeStyle='rgba(100,180,80,.3)'; ctx.lineWidth=1;
    ctx.beginPath();
    ctx.moveTo(0,l.y-l.r*.85);
    ctx.lineTo(-l.r,l.y+l.r*.6);
    ctx.stroke();
  });
}


function drawChalet() {

  ctx.fillStyle='#8a8070';
  ctx.fillRect(-26,-8,52,12);

  var wg=ctx.createLinearGradient(0,-38,0,4);
  wg.addColorStop(0,'#d4aa70'); wg.addColorStop(1,'#b88a50');
  ctx.fillStyle=wg; ctx.fillRect(-24,-36,48,40);

  ctx.strokeStyle='rgba(0,0,0,.15)'; ctx.lineWidth=1.5;
  for (var wy=-30;wy<4;wy+=8) {
    ctx.beginPath(); ctx.moveTo(-24,wy); ctx.lineTo(24,wy); ctx.stroke();
  }

  var rg=ctx.createLinearGradient(0,-64,0,-36);
  rg.addColorStop(0,'#6a1a0a'); rg.addColorStop(1,'#8a2a1a');
  ctx.fillStyle=rg;
  ctx.beginPath(); ctx.moveTo(0,-64); ctx.lineTo(32,-36); ctx.lineTo(-32,-36); ctx.closePath(); ctx.fill();

  ctx.fillStyle='rgba(0,0,0,.18)';
  ctx.beginPath(); ctx.moveTo(0,-64); ctx.lineTo(32,-36); ctx.lineTo(16,-36); ctx.closePath(); ctx.fill();

  ctx.fillStyle='#606060'; ctx.fillRect(11,-70,9,18);
  ctx.fillStyle='#484848'; ctx.fillRect(10,-72,11,4);

  for (var fs=0;fs<3;fs++) {
    var fop=0.1+0.08*Math.sin(G.frame*.06+fs*1.4);
    ctx.fillStyle='rgba(200,200,200,'+fop.toFixed(2)+')';
    ctx.beginPath(); ctx.arc(15-(fs*1.5),-74-fs*5,2+fs*1.5,0,Math.PI*2); ctx.fill();
  }

  [[-17,-28],[7,-28],[-17,-14],[7,-14]].forEach(function(pos) {

    ctx.fillStyle='#5a3a10'; ctx.fillRect(pos[0]-1,pos[1]-1,13,15);

    var wg2=ctx.createLinearGradient(pos[0],pos[1],pos[0]+11,pos[1]+13);
    wg2.addColorStop(0,'#fff8dc'); wg2.addColorStop(1,'#ffe080');
    ctx.fillStyle=wg2; ctx.fillRect(pos[0],pos[1],11,13);

    ctx.strokeStyle='rgba(90,50,10,.6)'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(pos[0]+5.5,pos[1]); ctx.lineTo(pos[0]+5.5,pos[1]+13); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pos[0],pos[1]+6.5); ctx.lineTo(pos[0]+11,pos[1]+6.5); ctx.stroke();

    ctx.fillStyle='rgba(255,255,255,.4)';
    ctx.fillRect(pos[0]+1,pos[1]+1,4,4);
  });

  var dg=ctx.createLinearGradient(-6,-14,-6,4);
  dg.addColorStop(0,'#7a4010'); dg.addColorStop(1,'#5a2a08');
  ctx.fillStyle=dg; ctx.fillRect(-6,-14,12,18);
  ctx.strokeStyle='#3a1a04'; ctx.lineWidth=1;
  ctx.strokeRect(-6,-14,12,18);
  ctx.fillStyle='#d4a020';
  ctx.beginPath(); ctx.arc(-1,-6,1.8,0,Math.PI*2); ctx.fill();

  ctx.strokeStyle='#8a6030'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.moveTo(-26,-8); ctx.lineTo(26,-8); ctx.stroke();
}


function drawLamp() {

  var pg=ctx.createLinearGradient(0,0,4,0);
  pg.addColorStop(0,'#909090'); pg.addColorStop(1,'#606060');
  ctx.fillStyle=pg; ctx.fillRect(-3,0,6,58);

  ctx.strokeStyle='#808080'; ctx.lineWidth=4; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(0,-56); ctx.quadraticCurveTo(8,-62,18,-56); ctx.stroke();

  ctx.fillStyle='#ccc'; ctx.fillRect(14,-62,8,8);
  ctx.fillStyle='#ffe080';
  ctx.beginPath(); ctx.arc(18,-58,4,0,Math.PI*2); ctx.fill();

  var gl=ctx.createRadialGradient(18,-58,0,18,-58,18);
  gl.addColorStop(0,'rgba(255,220,80,.35)'); gl.addColorStop(1,'rgba(255,220,80,0)');
  ctx.fillStyle=gl; ctx.beginPath(); ctx.arc(18,-58,18,0,Math.PI*2); ctx.fill();

  ctx.fillStyle='#505060'; ctx.fillRect(-5,0,10,7);
}


function drawFence() {
  ctx.strokeStyle='#b89060'; ctx.lineWidth=3; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(-34,-9); ctx.lineTo(34,-9); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-34,-19); ctx.lineTo(34,-19); ctx.stroke();
  for (var fx=-32;fx<=32;fx+=11) {
    ctx.beginPath(); ctx.moveTo(fx,0); ctx.lineTo(fx,-24); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(fx-2.5,-24); ctx.lineTo(fx,-30); ctx.lineTo(fx+2.5,-24); ctx.stroke();

    ctx.strokeStyle='rgba(0,0,0,.12)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(fx+2,-22); ctx.lineTo(fx+2,-5); ctx.stroke();
    ctx.strokeStyle='#b89060'; ctx.lineWidth=3;
  }
}

function drawFlower(col) {

  ctx.strokeStyle='#1a5a10'; ctx.lineWidth=2.5; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(-8,-15); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(8,-13); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-18); ctx.stroke();

  ctx.fillStyle='#1a6014';
  ctx.beginPath(); ctx.ellipse(-10,-10,7,4,-.5,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(10,-10,7,4,.5,0,Math.PI*2); ctx.fill();

  var fps=[[-8,-18],[0,-22],[8,-17],[-4,-13],[4,-12]];
  fps.forEach(function(p) {

    for (var pi=0;pi<5;pi++) {
      var pa=pi*(Math.PI*2/5);
      ctx.fillStyle=col;
      ctx.beginPath(); ctx.ellipse(p[0]+Math.cos(pa)*3.5,p[1]+Math.sin(pa)*3.5,2.5,1.8,pa,0,Math.PI*2); ctx.fill();
    }

    ctx.fillStyle='#ffe066';
    ctx.beginPath(); ctx.arc(p[0],p[1],2,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='rgba(0,0,0,.2)';
    ctx.beginPath(); ctx.arc(p[0],p[1],1,0,Math.PI*2); ctx.fill();
  });
}

function drawRoad() {

  var rg=ctx.createLinearGradient(ROAD_L,0,ROAD_R,0);
  rg.addColorStop(0,'#141210'); rg.addColorStop(.35,'#201e18');
  rg.addColorStop(.65,'#201e18'); rg.addColorStop(1,'#141210');
  ctx.fillStyle=rg; ctx.fillRect(ROAD_L,SKY_H+36,ROAD_W,H);


  ctx.strokeStyle='rgba(255,255,255,.018)'; ctx.lineWidth=1;
  var segH=55;
  for (var y=(G.roadScroll%segH)-segH+SKY_H+36; y<H; y+=segH) {
    ctx.beginPath(); ctx.moveTo(ROAD_L,y); ctx.lineTo(ROAD_R,y); ctx.stroke();
  }

  ctx.strokeStyle='rgba(220,220,230,.8)'; ctx.lineWidth=3;
  ctx.beginPath(); ctx.moveTo(ROAD_L,SKY_H+36); ctx.lineTo(ROAD_L,H); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ROAD_R,SKY_H+36); ctx.lineTo(ROAD_R,H); ctx.stroke();


  ctx.strokeStyle='rgba(255,220,50,.45)'; ctx.lineWidth=2;
  ctx.setLineDash([30,22]);
  ctx.lineDashOffset=-(G.roadScroll*2);
  for (var l=1;l<3;l++) {
    ctx.beginPath();
    ctx.moveTo(ROAD_L+LANE_W*l, SKY_H+36);
    ctx.lineTo(ROAD_L+LANE_W*l, H);
    ctx.stroke();
  }
  ctx.setLineDash([]);


  ctx.strokeStyle='rgba(100,180,255,.12)'; ctx.lineWidth=6;
  ctx.beginPath(); ctx.moveTo(ROAD_L,SKY_H+36); ctx.lineTo(ROAD_L,H); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ROAD_R,SKY_H+36); ctx.lineTo(ROAD_R,H); ctx.stroke();
}

function drawClearFx() {
  var p=0.04+0.03*Math.sin(G.frame*.12);
  ctx.fillStyle='rgba(0,240,100,'+p+')';
  ctx.fillRect(ROAD_L,SKY_H+36,ROAD_W,H);
}
function drawSlowFx() {
  ctx.fillStyle='rgba(120,0,200,.05)'; ctx.fillRect(0,0,W,H);
  var p=0.25+0.18*Math.sin(G.frame*.14);
  ctx.strokeStyle='rgba(180,60,255,'+p.toFixed(2)+')'; ctx.lineWidth=5;
  ctx.strokeRect(3,3,W-6,H-6);
}


function drawObs() {
  var danger=['🔥','☣️','💀','⚠️','💣','⚡'];
  G.obs.forEach(function(o) {
    if (o.y < SKY_H+30) return;

    ctx.fillStyle='rgba(0,0,0,.32)';
    ctx.beginPath(); ctx.ellipse(o.x,o.y+o.hh*.55,o.hw*.72,o.hh*.22,0,0,Math.PI*2); ctx.fill();

    if (danger.indexOf(o.e) >= 0) {
      var pulse=0.35+0.35*Math.sin(o.bob*1.3);
      var gr=ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.hw*1.1);
      gr.addColorStop(0,'rgba(255,60,0,'+(0.22*pulse)+')');
      gr.addColorStop(1,'rgba(255,60,0,0)');
      ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(o.x,o.y,o.hw*1.1,0,Math.PI*2); ctx.fill();
    }
    ctx.font=o.ew*.9+'px serif';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(o.e,o.x,o.y+Math.sin(o.bob)*3);
  });
}

function drawBalls() {
  G.balls.forEach(function(b) {
    if (b.y < SKY_H+30) return;
    var pw=b.pw, gAmt=0.5+0.5*Math.sin(b.glow), r=16;

    [3,2,1.5].forEach(function(mult,li) {
      var op=(0.35-li*.1)*gAmt;
      var gr=ctx.createRadialGradient(b.x,b.y,0,b.x,b.y,r*mult);
      gr.addColorStop(0,pw.glow.replace('.7',op.toFixed(2)));
      gr.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(b.x,b.y,r*mult,0,Math.PI*2); ctx.fill();
    });

    var bg=ctx.createRadialGradient(b.x-r*.32,b.y-r*.32,r*.05,b.x,b.y,r);
    bg.addColorStop(0,'#ffffff');
    bg.addColorStop(0.38,pw.color);
    bg.addColorStop(0.75,'rgba(0,0,0,.2)');
    bg.addColorStop(1,'rgba(0,0,0,.5)');
    ctx.fillStyle=bg; ctx.beginPath(); ctx.arc(b.x,b.y,r,0,Math.PI*2); ctx.fill();


    ctx.fillStyle='rgba(255,255,255,'+(0.65*gAmt)+')';
    ctx.beginPath(); ctx.ellipse(b.x-r*.28,b.y-r*.28,r*.38,r*.22,-.5,0,Math.PI*2); ctx.fill();


    ctx.fillStyle='rgba(255,255,255,'+(0.22*gAmt)+')';
    ctx.beginPath(); ctx.arc(b.x+r*.2,b.y+r*.15,r*.15,0,Math.PI*2); ctx.fill();


    for (var si=0;si<6;si++) {
      var sa=b.glow+si*(Math.PI*2/6);
      var sr=r+9+5*Math.sin(b.glow+si);
      ctx.fillStyle=pw.color;
      ctx.globalAlpha=0.55+0.35*Math.sin(b.glow+si);
      ctx.beginPath(); ctx.arc(b.x+Math.cos(sa)*sr,b.y+Math.sin(sa)*sr,2.5,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha=1;


    ctx.font='14px serif';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(pw.icon,b.x,b.y);
  });
}

function drawBear() {
  var b=G.bear;
  if (G.inv>0 && Math.floor(G.frame/5)%2===0) return;
  var x=b.x, y=b.y;

  ctx.save(); ctx.translate(x,y);

  if (G.speedBoost) {

    var streakLen = 28 + 12*Math.sin(G.frame*.18);
    for (var si=0; si<5; si++) {
      var sOff = (si-2)*S*.28;
      var sAlpha = (0.18 - si*.02) * (0.6+0.4*Math.sin(G.frame*.2+si));
      var sg2=ctx.createLinearGradient(sOff,S*.4,sOff,S*.4+streakLen);
      sg2.addColorStop(0,'rgba(255,220,50,'+sAlpha.toFixed(2)+')');
      sg2.addColorStop(1,'rgba(255,150,0,0)');
      ctx.fillStyle=sg2;
      ctx.fillRect(sOff-S*.04, S*.4, S*.08, streakLen);
    }

    var aura=G.frame*.15;
    var auraR=ctx.createRadialGradient(0,0,S*.3,0,0,S*1.4);
    auraR.addColorStop(0,'rgba(255,220,0,0)');
    auraR.addColorStop(0.6,'rgba(255,200,0,'+(0.10+0.06*Math.sin(aura))+')');
    auraR.addColorStop(1,'rgba(255,150,0,0)');
    ctx.fillStyle=auraR;
    ctx.beginPath(); ctx.ellipse(0,0,S*1.4,S*1.6,0,0,Math.PI*2); ctx.fill();
  }

  var shadow=ctx.createRadialGradient(S*.06,S*.88,0,S*.06,S*.88,S*.95);
  shadow.addColorStop(0,'rgba(0,0,0,.42)'); shadow.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=shadow;
  ctx.beginPath(); ctx.ellipse(S*.06,S*.88,S*.88,S*.28,0,0,Math.PI*2); ctx.fill();

  //Patas traseiras
  var legSw = Math.sin(G.frame*.30+Math.PI)*S*.17;
  //Pata esquerda
  var lgL=ctx.createRadialGradient(-S*.48,S*.80+legSw,0,-S*.48,S*.80+legSw,S*.30);
  lgL.addColorStop(0,'#7a5040'); lgL.addColorStop(1,'#4a2c18');
  ctx.fillStyle=lgL;
  ctx.beginPath(); ctx.ellipse(-S*.48,S*.80+legSw,S*.23,S*.28,.22,0,Math.PI*2); ctx.fill();
  //Patinha esq
  ctx.fillStyle='#2e180c';
  ctx.beginPath(); ctx.ellipse(-S*.50,S*1.03+legSw,S*.17,S*.10,.22,0,Math.PI*2); ctx.fill();
  //3 dedos esq
  [-S*.60,-S*.50,-S*.40].forEach(function(dx){
    ctx.beginPath(); ctx.ellipse(dx,S*1.09+legSw,S*.05,S*.035,0,0,Math.PI*2); ctx.fill();
  });

  //Pata direita
  var lgR=ctx.createRadialGradient(S*.48,S*.80-legSw,0,S*.48,S*.80-legSw,S*.30);
  lgR.addColorStop(0,'#7a5040'); lgR.addColorStop(1,'#4a2c18');
  ctx.fillStyle=lgR;
  ctx.beginPath(); ctx.ellipse(S*.48,S*.80-legSw,S*.23,S*.28,-.22,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#2e180c';
  ctx.beginPath(); ctx.ellipse(S*.50,S*1.03-legSw,S*.17,S*.10,-.22,0,Math.PI*2); ctx.fill();
  [S*.60,S*.50,S*.40].forEach(function(dx){
    ctx.beginPath(); ctx.ellipse(dx,S*1.09-legSw,S*.05,S*.035,0,0,Math.PI*2); ctx.fill();
  });

  //corpo
  var cg=ctx.createRadialGradient(-S*.14,-S*.20,S*.05,0,0,S*1.0);
  cg.addColorStop(0,'#c8a080');  
  cg.addColorStop(0.30,'#9a6a4a');
  cg.addColorStop(0.65,'#6e4230');
  cg.addColorStop(1,  '#3a1e0c');  
  ctx.fillStyle=cg;
  ctx.beginPath(); ctx.ellipse(0,S*.08,S*.74,S*.98,0,0,Math.PI*2); ctx.fill();

  var peloBrilho=ctx.createRadialGradient(-S*.08,-S*.10,S*.04,-S*.08,-S*.10,S*.46);
  peloBrilho.addColorStop(0,'rgba(220,170,110,.30)');
  peloBrilho.addColorStop(1,'rgba(220,170,110,0)');
  ctx.fillStyle=peloBrilho;
  ctx.beginPath(); ctx.ellipse(-S*.08,-S*.05,S*.38,S*.52,0,0,Math.PI*2); ctx.fill();

  ctx.strokeStyle='rgba(40,15,5,.35)'; ctx.lineWidth=1.5;
  ctx.beginPath(); ctx.ellipse(0,S*.08,S*.74,S*.98,0,0,Math.PI*2); ctx.stroke();


  var armSw=Math.sin(G.frame*.30)*S*.20;

  var armLG=ctx.createRadialGradient(-S*.65,S*.05+armSw,0,-S*.65,S*.05+armSw,S*.32);
  armLG.addColorStop(0,'#8a5e40'); armLG.addColorStop(1,'#4a2c18');
  ctx.fillStyle=armLG;
  ctx.beginPath(); ctx.ellipse(-S*.68,S*.10+armSw,S*.22,S*.30,-.40,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#2e180c';
  ctx.beginPath(); ctx.ellipse(-S*.92,S*.13+armSw,S*.16,S*.11,-.40,0,Math.PI*2); ctx.fill();
  //Garras esq
  [-S*.04,0,S*.04].forEach(function(dg){
    ctx.beginPath(); ctx.ellipse(-S*.94+dg,S*.20+armSw+dg*.8,S*.04,S*.028,-.40,0,Math.PI*2); ctx.fill();
  });

  //Braço direito
  var armRG=ctx.createRadialGradient(S*.65,S*.05-armSw,0,S*.65,S*.05-armSw,S*.32);
  armRG.addColorStop(0,'#8a5e40'); armRG.addColorStop(1,'#4a2c18');
  ctx.fillStyle=armRG;
  ctx.beginPath(); ctx.ellipse(S*.68,S*.10-armSw,S*.22,S*.30,.40,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#2e180c';
  ctx.beginPath(); ctx.ellipse(S*.92,S*.13-armSw,S*.16,S*.11,.40,0,Math.PI*2); ctx.fill();
  [-S*.04,0,S*.04].forEach(function(dg){
    ctx.beginPath(); ctx.ellipse(S*.94+dg,S*.20-armSw+dg*.8,S*.04,S*.028,.40,0,Math.PI*2); ctx.fill();
  });

  //mochila
  var mkG=ctx.createLinearGradient(-S*.28,S*.34,S*.28,S*.74);
  mkG.addColorStop(0,'#43a047'); mkG.addColorStop(0.5,'#2e7d32'); mkG.addColorStop(1,'#1b5220');
  ctx.fillStyle=mkG;
  //forma da mochila — retangulo arredondado
  ctx.beginPath();
  ctx.ellipse(0,S*.56,S*.30,S*.25,0,0,Math.PI*2); ctx.fill();
  //Costura
  ctx.strokeStyle='rgba(0,0,0,.18)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.ellipse(0,S*.56,S*.26,S*.21,0,0,Math.PI*2); ctx.stroke();
  //Reflexo mochila
  ctx.fillStyle='rgba(255,255,255,.18)';
  ctx.beginPath(); ctx.ellipse(-S*.08,S*.46,S*.12,S*.07,-.3,0,Math.PI*2); ctx.fill();
  //Icone reciclagem
  ctx.font=Math.floor(S*.30)+'px serif';
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText('♻️',0,S*.56);


  var hg=ctx.createRadialGradient(-S*.12,-S*.85,S*.04,0,-S*.75,S*.44);
  hg.addColorStop(0,'#d4a880');  
  hg.addColorStop(0.40,'#a07050');
  hg.addColorStop(0.75,'#7a4e34');
  hg.addColorStop(1,  '#4a2c1c'); 
  ctx.fillStyle=hg;
  ctx.beginPath(); ctx.ellipse(0,-S*.75,S*.44,S*.43,0,0,Math.PI*2); ctx.fill();

  ctx.strokeStyle='rgba(40,15,5,.3)'; ctx.lineWidth=1.5;
  ctx.beginPath(); ctx.ellipse(0,-S*.75,S*.44,S*.43,0,0,Math.PI*2); ctx.stroke();


  [[-S*.30,-S*1.02],[S*.30,-S*1.02]].forEach(function(e) {

    var eg=ctx.createRadialGradient(e[0]-S*.04,e[1]-S*.04,0,e[0],e[1],S*.21);
    eg.addColorStop(0,'#9a6848'); eg.addColorStop(0.6,'#7a4e34'); eg.addColorStop(1,'#4e2e1c');
    ctx.fillStyle=eg;
    ctx.beginPath(); ctx.arc(e[0],e[1],S*.20,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='rgba(40,15,5,.25)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.arc(e[0],e[1],S*.20,0,Math.PI*2); ctx.stroke();

    var ig=ctx.createRadialGradient(e[0],e[1],0,e[0],e[1],S*.12);
    ig.addColorStop(0,'#e09080'); ig.addColorStop(1,'#c06858');
    ctx.fillStyle=ig;
    ctx.beginPath(); ctx.arc(e[0],e[1],S*.11,0,Math.PI*2); ctx.fill();

    ctx.fillStyle='rgba(255,255,255,.22)';
    ctx.beginPath(); ctx.ellipse(e[0]-S*.05,e[1]-S*.05,S*.05,S*.04,-.5,0,Math.PI*2); ctx.fill();
  });

  var fg=ctx.createRadialGradient(-S*.06,-S*.62,S*.01,0,-S*.60,S*.22);
  fg.addColorStop(0,'#e0b890'); fg.addColorStop(0.6,'#c09060'); fg.addColorStop(1,'#9a6840');
  ctx.fillStyle=fg;
  ctx.beginPath(); ctx.ellipse(0,-S*.60,S*.20,S*.15,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(40,15,5,.2)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.ellipse(0,-S*.60,S*.20,S*.15,0,0,Math.PI*2); ctx.stroke();

  ctx.fillStyle='#1e0c06';
  ctx.beginPath(); ctx.ellipse(0,-S*.53,S*.09,S*.06,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.4)';
  ctx.beginPath(); ctx.ellipse(-S*.03,-S*.555,S*.03,S*.018,-.4,0,Math.PI*2); ctx.fill();

  ctx.strokeStyle='rgba(40,15,5,.5)'; ctx.lineWidth=1.2; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(-S*.06,-S*.48); ctx.quadraticCurveTo(0,-S*.44,S*.06,-S*.48); ctx.stroke();

  [[-S*.17,-S*.76],[S*.17,-S*.76]].forEach(function(e,ei) {
  
    ctx.fillStyle='#1a0c06';
    ctx.beginPath(); ctx.arc(e[0],e[1],S*.080,0,Math.PI*2); ctx.fill();

    ctx.fillStyle='#5a3820';
    ctx.beginPath(); ctx.arc(e[0],e[1],S*.058,0,Math.PI*2); ctx.fill();

    ctx.fillStyle='#0a0604';
    ctx.beginPath(); ctx.arc(e[0],e[1],S*.034,0,Math.PI*2); ctx.fill();

    ctx.fillStyle='rgba(255,255,255,.80)';
    ctx.beginPath(); ctx.ellipse(e[0]-S*.026,e[1]-S*.026,S*.026,S*.020,-.5,0,Math.PI*2); ctx.fill();

    ctx.fillStyle='rgba(255,255,255,.30)';
    ctx.beginPath(); ctx.arc(e[0]+S*.022,e[1]+S*.018,S*.014,0,Math.PI*2); ctx.fill();
  });


  if (G.idleFrames > 60) {
    var idleProgress = G.idleFrames / 180;  
    var idlePulse = 0.5 + 0.5 * Math.sin(G.frame * 0.25);
    var idleAlpha = (0.4 + 0.4 * idlePulse) * idleProgress;
    ctx.strokeStyle = 'rgba(255,' + Math.floor(100 - idleProgress*100) + ',0,' + idleAlpha.toFixed(2) + ')';
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(0, 0, S * 1.4 + idlePulse * 4, 0, Math.PI * 2); ctx.stroke();

    ctx.strokeStyle = 'rgba(255,50,0,' + (idleAlpha * 1.4).toFixed(2) + ')';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(0, 0, S * 1.55, -Math.PI/2, -Math.PI/2 + idleProgress * Math.PI * 2);
    ctx.stroke();
  }

  ctx.restore();
}


function drawParts() {
  G.parts.forEach(function(p) {
    ctx.globalAlpha=Math.max(0,p.life/44);
    ctx.fillStyle=p.color;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
  });
  ctx.globalAlpha=1;
}


function drawBorders() {

  var ls=ctx.createLinearGradient(0,0,GRASS_W*.6,0);
  ls.addColorStop(0,'rgba(0,0,0,.50)'); ls.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=ls; ctx.fillRect(0,SKY_H+36,GRASS_W*.6,H);
  var rs=ctx.createLinearGradient(W,0,ROAD_R+GRASS_W*.4,0);
  rs.addColorStop(0,'rgba(0,0,0,.50)'); rs.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=rs; ctx.fillRect(ROAD_R+GRASS_W*.4,SKY_H+36,GRASS_W*.6,H);


  var bg=ctx.createLinearGradient(0,H-40,0,H);
  bg.addColorStop(0,'rgba(0,0,0,0)'); bg.addColorStop(1,'rgba(0,0,0,.55)');
  ctx.fillStyle=bg; ctx.fillRect(0,H-40,W,40);


  ctx.fillStyle='rgba(180,220,255,.12)';
  ctx.fillRect(0,SKY_H+34,W,2);
}


function clamp(v,mn,mx){ return v<mn?mn:v>mx?mx:v; }
function fmt(ms){
  var s=Math.floor(ms/1000),m=Math.floor(s/60),ss=s%60;
  return m+':'+(ss<10?'0':'')+ss;
}
function showToast(msg,type){
  toastEl.textContent=msg; toastEl.className='show '+type;
  clearTimeout(toastTID);
  toastTID=setTimeout(function(){toastEl.className='';},2200);
}


resetG();
draw();

}); //Para de ler but