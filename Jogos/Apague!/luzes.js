var GRID_SIZE  = 25;
var TOTAL_TIME = 120;
var BASE_PTS   = 100;
var SPAWN_MS_FAST = 750;
var SPAWN_MS_SLOW = 900;

var state = {};

function initState() {
  state = {
    cells:       [],
    score:       0,
    lives:       3,
    timeLeft:    TOTAL_TIME,
    combo:       0,
    multiplier:  1,
    bestCombo:   1,
    totalOff:    0,
    totalErr:    0,
    totalClicks: 0,
    running:     false,
    timerInt:    null,
    spawnInt:    null,
    comboTO:     null
  };
  for (var i = 0; i < GRID_SIZE; i++) {
    state.cells.push(false);
  }
}

function showScreen(id) {
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove('active');
  }
  document.getElementById(id).classList.add('active');
}

function buildGrid() {
  var g = document.getElementById('grid');
  g.innerHTML = '';

  for (var i = 0; i < GRID_SIZE; i++) {
    var cell = document.createElement('div');
    cell.className = 'cell off';
    cell.id = 'c' + i;
    cell.innerHTML =
      '<div class="cell-torch">' +
        '<div class="ct-flame"></div>' +
        '<div class="ct-top"></div>' +
        '<div class="ct-body"></div>' +
      '</div>';

    (function(index, el) {
      el.addEventListener('click', function() {
        clickCell(index, el);
      });
    })(i, cell);

    g.appendChild(cell);
  }
}

function clickCell(i, el) {
  if (!state.running) return;
  state.totalClicks++;

  if (state.cells[i] === true) {
  
    state.cells[i] = false;
    el.classList.remove('on');
    el.classList.add('off');

    clearTimeout(state.comboTO);
    state.comboTO = setTimeout(resetCombo, 3000);

    state.combo++;
    var mult;
    if      (state.combo >= 10) mult = 4;
    else if (state.combo >=  6) mult = 3;
    else if (state.combo >=  3) mult = 2;
    else                        mult = 1;

    state.multiplier = mult;
    if (state.combo > state.bestCombo) state.bestCombo = state.combo;

    var pts = BASE_PTS * mult;
    state.score += pts;
    state.totalOff++;

    spawnPopup(el, '+' + pts, mult > 1 ? '#FDD87A' : '#7CFC00');
    addLog('Tocha apagada! +' + pts, 'good');
    if (mult > 1) addLog('COMBO x' + mult + '!', 'combo');

  } else {
    state.lives--;
    state.totalErr++;
    resetCombo();

    el.style.transform = 'translateX(-4px)';
    setTimeout(function() { el.style.transform = 'translateX(4px)'; }, 80);
    setTimeout(function() { el.style.transform = ''; }, 160);

    var hud = document.querySelector('.hud');
    hud.style.background = 'rgba(192,57,43,0.7)';
    setTimeout(function() { hud.style.background = ''; }, 350);

    spawnPopup(el, '-1 vida', '#FF6B6B');
    addLog('Erro! Tocha ja apagada. -1 vida', 'bad');

    updateLives();
    if (state.lives <= 0) {
      endGame();
      return;
    }
  }

  updateHUD();
}

function spawnLight() {
  if (!state.running) return;

  var offCells = [];
  for (var i = 0; i < state.cells.length; i++) {
    if (state.cells[i] === false) offCells.push(i);
  }
  if (offCells.length === 0) return;

  var idx = offCells[Math.floor(Math.random() * offCells.length)];
  state.cells[idx] = true;

  var el = document.getElementById('c' + idx);
  el.classList.remove('off');
  el.classList.add('on');

  updateHUD();
}

function resetCombo() {
  state.combo      = 0;
  state.multiplier = 1;
  updateHUD();
}

function updateHUD() {
  var m = Math.floor(state.timeLeft / 60);
  var s = state.timeLeft % 60;
  var timeEl = document.getElementById('hud-time');
  timeEl.textContent = m + ':' + (s < 10 ? '0' : '') + s;
  timeEl.className = state.timeLeft <= 20 ? 'hud-val urgent' : 'hud-val';

  document.getElementById('hud-score').textContent = state.score;
  document.getElementById('hud-combo').textContent = 'x' + state.multiplier;

  var xpPct = Math.min(100, (state.combo / 10) * 100);
  document.getElementById('xp-bar').style.width = xpPct + '%';
  document.getElementById('xp-label').textContent = 'COMBO ' + state.combo + '/10';

  document.getElementById('stat-off').textContent  = state.totalOff;
  document.getElementById('stat-err').textContent  = state.totalErr;
  document.getElementById('stat-best').textContent = 'x' + state.bestCombo;

  var onCount = 0;
  for (var i = 0; i < state.cells.length; i++) {
    if (state.cells[i]) onCount++;
  }
  document.getElementById('stat-on').textContent = onCount;

  var bar = document.getElementById('time-bar');
  bar.style.width = (state.timeLeft / TOTAL_TIME * 100) + '%';
  bar.className = state.timeLeft <= 20 ? 'low' : '';
}

function updateLives() {
  for (var i = 0; i < 3; i++) {
    var el = document.getElementById('life-' + i);
    el.className = i < state.lives ? 'life' : 'life gone';
  }
}

function addLog(msg, type) {
  if (!type) type = 'good';
  var log   = document.getElementById('log');
  var entry = document.createElement('div');
  entry.className = 'log-entry ' + type;
  var prefix = type === 'bad' ? 'X ' : type === 'combo' ? '* ' : '> ';
  entry.textContent = prefix + msg;
  log.insertBefore(entry, log.firstChild);
  while (log.children.length > 8) {
    log.removeChild(log.lastChild);
  }
}

function spawnPopup(el, text, color) {
  var rect = el.getBoundingClientRect();
  var pop  = document.createElement('div');
  pop.className   = 'score-pop';
  pop.textContent = text;
  pop.style.left  = (rect.left + rect.width / 2 - 20) + 'px';
  pop.style.top   = (rect.top  - 10) + 'px';
  pop.style.color = color;
  document.body.appendChild(pop);
  setTimeout(function() { pop.parentNode.removeChild(pop); }, 750);
}

function startGame() {
  initState();
  buildGrid();
  showScreen('game');
  updateLives();
  updateHUD();
  addLog('Jogo iniciado! Apague as tochas!', 'good');

  state.running = true;

  for (var i = 0; i < 5; i++) spawnLight();

  state.timerInt = setInterval(function() {
    state.timeLeft--;
    updateHUD();
    if (state.timeLeft <= 0) endGame();
  }, 1000);

  function runSpawn() {
    if (!state.running) return;
    var timeLeft = state.timeLeft;
    var count;
    if (timeLeft <= 30) {
      count = 3;
    } else if (timeLeft <= 60) {
      count = 2;
    } else {
      count = 1;
    }
    for (var j = 0; j < count; j++) spawnLight();
    var nextMs = timeLeft <= 30 ? SPAWN_MS_SLOW : SPAWN_MS_FAST;
    state.spawnInt = setTimeout(runSpawn, nextMs);
  }
  state.spawnInt = setTimeout(runSpawn, SPAWN_MS_FAST);
}

function endGame() {
  state.running = false;
  clearInterval(state.timerInt);
  clearTimeout(state.spawnInt);
  clearTimeout(state.comboTO);

  var won = state.lives > 0 && state.timeLeft <= 0;
  var acc = state.totalClicks > 0
    ? Math.round((state.totalOff / state.totalClicks) * 100)
    : 0;

  document.getElementById('over-mob').textContent     = won ? '🎉' : '💀';
  document.getElementById('over-verdict').textContent = won ? 'TEMPO ESGOTADO' : 'GAME OVER';
  document.getElementById('over-title').textContent   = won ? 'Missao cumprida!' : 'Voce foi derrotado!';
  document.getElementById('over-score').textContent   = state.score;
  document.getElementById('fin-off').textContent      = state.totalOff;
  document.getElementById('fin-err').textContent      = state.totalErr;
  document.getElementById('fin-combo').textContent    = 'x' + state.bestCombo;
  document.getElementById('fin-acc').textContent      = acc + '%';

  var msg;
  if      (state.score >= 5000) msg = 'Voce economizou energia para 1.000 lampadas!';
  else if (state.score >= 2000) msg = 'Equivale a 3 horas de TV economizadas!';
  else if (state.score >=  500) msg = 'Cada luz apagada conta!';
  else                          msg = 'Pequenos gestos fazem diferenca!';
  document.getElementById('energy-note').textContent = msg;

  setTimeout(function() { showScreen('over'); }, 500);
}

function restartGame() {
  showScreen('start');
}

function voltar() {
    window.history.back();
}

window.onload = function() {
  document.getElementById('btn-start').addEventListener('click', startGame);
  document.getElementById('btn-restart').addEventListener('click', restartGame);
  document.getElementById('btn-voltar').addEventListener('click', voltar);
};