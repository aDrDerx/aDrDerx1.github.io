var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var mas = [];
var count = 0;
var stop = 0;
var population = 0;
var stop = 0;
var level = 0;
ctx.fillStyle = 'red';

canvas.onclick = function (event) {
  var x = event.offsetX;
  var y = event.offsetY;
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  mas[y][x] = 1;
  drawField();
};
function goLife() {
  var n = 30,
    m = 30;
  for (var i = 0; i < m; i++) {
    mas[i] = [];
    for (var j = 0; j < n; j++) {
      mas[i][j] = [0];
    }
  }

}
goLife();
function stopLife() {
  stop = 1;
}

function clearField() {
  ctx.clearRect(0, 0, 300, 300);
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      mas[i][j] = [0];
    }
  }
  count = 0;
  document.getElementById('count').innerHTML = count;
  stop = 0;
  population = 0;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML = 'Ты очистил поле!';
}

function drawField() {
  ctx.clearRect(0, 0, 300, 300);

  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
    
  count_population();
  document.getElementById('popul').innerHTML = population;
}
function startLife() {
  var mas2 = [];
  for (var i = 0; i < 30; i++) {
    mas2[i] = [];

    for (var j = 0; j < 30; j++) {
      var neighbors = 0;
      if (mas[fpm(i) - 1][j] == 1) neighbors++;
      if (mas[i][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpp(i) + 1][j] == 1) neighbors++;
      if (mas[i][fpm(j) - 1] == 1) neighbors++;
      if (mas[fpm(i) - 1][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpp(i) + 1][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpp(i) + 1][fpm(j) - 1] == 1) neighbors++;
      if (mas[fpm(i) - 1][fpm(j) - 1] == 1) neighbors++;

      if (mas[i][j] == 1 && neighbors < 2) mas2[i][j] = 0;
      if (mas[i][j] == 1 && neighbors > 3) mas2[i][j] = 0;
      if ((mas[i][j] == 1 && neighbors == 2) || neighbors == 3) mas2[i][j] = 1;
      if (mas[i][j] == 0 && neighbors == 3) mas2[i][j] = 1;
    }
  }
  mas = mas2;
  drawField();
  count++;

  if (level == 1) {
    check1level();
  }

  if (level == 2) {
    check2level();
  }

  if (level == 3) {
    check3level();
  }

  if (level == 4) {
    check4level();
  }

  if (level == 5) {
    check5level();
  }
  if (level == 6){
    check6level
  }

  document.getElementById('count').innerHTML = count;
  document.getElementById('popul').innerHTML = population;
  if (stop == 0) timer = setTimeout(startLife, 700);
}
function fpm(i) {
  if (i == 0) return 30;
  else return i;
}
function fpp(i) {
  if (i == 29) return -1;
  else return i;
}

function level1() {
  clearField();
  mas[14][4] = 1;
  mas[16][4] = 1;
  level = 1;
  population = 2;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 3 к 12 поколению';
  drawField();
}

function level2() {
  clearField();
  mas[26][3] = 1;
  mas[27][4] = 1;
  level = 2;
  population = 2;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 4 к 12 поколению';
  drawField();
}

function level3() {
  clearField();
  mas[14][14] = 1;
  mas[16][14] = 1;
  mas[15][13] = 1;
  mas[15][15] = 1;
  level = 3;
  population = 8;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 12 к 12 поколению';
  drawField();
}

function level4() {
  clearField();
  mas[5][14] = 1;
  mas[6][14] = 1;
  mas[6][16] = 1;
  mas[8][17] = 1;
  mas[8][18] = 1;
  mas[10][17] = 1;
  mas[11][15] = 1;
  mas[12][15] = 1;
  mas[11][13] = 1;
  mas[9][12] = 1;
  mas[9][11] = 1;
  level = 4;
  population = 11;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 12 к 12 поколению';
  drawField();
}

function level5() {
  clearField();
  mas[15][0] = 1;
  mas[15][1] = 1;
  mas[15][5] = 1;
  mas[15][6] = 1;
  mas[15][10] = 1;
  mas[15][11] = 1;
  mas[15][15] = 1;
  mas[15][16] = 1;
  mas[15][20] = 1;
  mas[15][21] = 1;
  mas[15][25] = 1;
  mas[15][26] = 1;
  mas[18][1] = 1;
  mas[18][5] = 1;
  mas[18][6] = 1;
  mas[18][10] = 1;
  mas[18][11] = 1;
  mas[18][15] = 1;
  mas[18][16] = 1;
  mas[18][20] = 1;
  mas[18][21] = 1;
  mas[18][25] = 1;
  mas[18][26] = 1;
  mas[16][2] = 1;
  mas[16][3] = 1;
  mas[17][2] = 1;
  mas[17][3] = 1;
  mas[17][7] = 1;
  mas[16][7] = 1;
  mas[17][8] = 1;
  mas[16][8] = 1;
  mas[17][12] = 1;
  mas[16][12] = 1;
  mas[17][13] = 1;
  mas[16][13] = 1;
  mas[17][17] = 1;
  mas[16][17] = 1;
  mas[17][18] = 1;
  mas[16][18] = 1;
  mas[17][22] = 1;
  mas[16][22] = 1;
  mas[17][23] = 1;
  mas[16][23] = 1;
  mas[17][27] = 1;
  mas[16][27] = 1;
  mas[17][28] = 1;
  mas[16][28] = 1;
  mas[11][28] = 1;
  mas[11][29] = 1;
  mas[11][27] = 1;
  mas[11][26] = 1;
  mas[11][25] = 1;
  mas[11][24] = 1;
  mas[11][23] = 1;
  mas[11][22] = 1;
  mas[11][21] = 1;
  mas[11][20] = 1;
  mas[11][19] = 1;
  mas[11][18] = 1;
  mas[11][17] = 1;
  mas[11][16] = 1;
  mas[11][15] = 1;
  mas[11][14] = 1;
  mas[11][13] = 1;
  mas[11][12] = 1;
  mas[11][11] = 1;
  mas[11][10] = 1;
  mas[11][9] = 1;
  mas[11][8] = 1;
  mas[11][7] = 1;
  mas[11][6] = 1;
  mas[11][5] = 1;
  mas[11][4] = 1;
  mas[11][3] = 1;
  mas[11][2] = 1;
  mas[11][1] = 1;
  mas[11][0] = 1;
  mas[22][0] = 1;
  mas[22][1] = 1;
  mas[22][2] = 1;
  mas[22][3] = 1;
  mas[22][4] = 1;
  mas[22][5] = 1;
  mas[22][6] = 1;
  mas[22][7] = 1;
  mas[22][8] = 1;
  mas[22][9] = 1;
  mas[22][10] = 1;
  mas[22][11] = 1;
  mas[22][12] = 1;
  mas[22][13] = 1;
  mas[22][14] = 1;
  mas[22][15] = 1;
  mas[22][16] = 1;
  mas[22][17] = 1;
  mas[22][18] = 1;
  mas[22][19] = 1;
  mas[22][20] = 1;
  mas[22][21] = 1;
  mas[22][22] = 1;
  mas[22][23] = 1;
  mas[22][24] = 1;
  mas[22][25] = 1;
  mas[22][26] = 1;
  mas[22][27] = 1;
  mas[22][28] = 1;
  mas[22][29] = 1;
  level = 5;
  population = 106;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 312 к 13 поколению';
  drawField();
}


function count_population() {
  population=0;
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        population++;
      }
    }
  }
  console.log(population);
}

function check1level() {
  count_population();
  if (count == 12 && population == 3) {
    stopLife();
    document.getElementById('info').innerHTML = 'Молодец, ты прошёл!';
  } else if (count > 12 && population != 3) {
    stopLife();
    document.getElementById('info').innerHTML = 'Ты проиграл, попробуй ещё раз!';
  }
}

function check2level() {
  count_population();
  if (count == 12 && population == 4) {
    stopLife();
    document.getElementById('info').innerHTML = 'Молодец, ты прошёл!';
  } else if (count > 12 && population != 4) {
    stopLife();
    document.getElementById('info').innerHTML = 'Ты проиграл, попробуй ещё раз!';
  }
}

function check3level() {
  count_population();
  if (count == 12 && population == 12) {
    stopLife();
    document.getElementById('info').innerHTML = 'Молодец, ты прошёл!';
  } else if (count > 12 && population != 12) {
    stopLife();
    document.getElementById('info').innerHTML = 'Ты проиграл, попробуй ещё раз!';
  }
}

function check4level() {
  count_population();
  if (count == 12 && population == 12) {
    stopLife();
    document.getElementById('info').innerHTML = 'Молодец, ты прошёл!';
  } else if (count > 12 && population != 12) {
    stopLife();
    document.getElementById('info').innerHTML = 'Ты проиграл, попробуй ещё раз!';
  }
}

function check5level() {
  count_population();
  if (count == 13 && population == 312) {
    stopLife();
    document.getElementById('info').innerHTML = 'Молодец, ты прошёл!';
  } else if (count > 13 && population != 312) {
    stopLife();
    document.getElementById('info').innerHTML = 'Ты проиграл, попробуй ещё раз!';
  }
}


document.getElementById('start').onclick = startLife;
document.getElementById('level1').onclick = level1;
document.getElementById('clear').onclick = clear;
document.getElementById('stop').onclick = stopLife;
document.getElementById('level2').onclick = level2;
document.getElementById('level3').onclick = level3;
document.getElementById('level4').onclick = level4;
document.getElementById('level5').onclick = level5;