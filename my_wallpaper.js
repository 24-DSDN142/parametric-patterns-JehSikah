//your parameter variables go here!
let palette = 1;
//1:day, 2:night, 3:mexico
let ducky_fit = 3;
//1:yellow, 2:white, 3:pink (only in palette 1, dlc available for $2.99)
let duckle_fit = 2;
//1:yellow, 2:white, 3:pink (only in palette 1, dlc available for $2.99)

let quad_rand = 0;

//duck alter parameters
let ducky_num = 1; //set number of duckys
let rot_ducky = 0; //rotate ducky (0-360)
let x_ducky = 60; //move ducky on x axis
let y_ducky = 60; //move ducky on y axis
let scal_ducky = 1; //scale ducky
let ducky_rand = false; //allow randomisation (true/false)


//duckle alter parameters
let duckle_num = 2; //set number of duckles
let rot_duckle = rot_ducky - 20; //rotate duckle (0-360)
let x_duckle = x_ducky - 10; //move duckle on x axis
let y_duckle = y_ducky + 80; //move duckle on y axis
let scal_duckle = scal_ducky - 0.4; //scale duckle
let duckle_rand = false; //allow randomisation (true/false)

//lilypad alter parameters
let lily_num = 3; //set number of lilypads
let rot_lily = 0; //rotate lilypad (0-360)
let x_lily = 160; //move lilypad on x axis
let y_lily = 160; //move lilypad on y axis
let scal_lily = 1; //scale lilypad
let lily_rand = false; //allow randomisation (true/false)

//variables used in multiple functions
var dbod = 60; //ducky body size
var lilysize = 80; //lilypad size
var lilysplit = 80; //lilypad split location (0-360)
var shad_off = 5; //shadow offset
var x_quad = 0; //quadrant x coord
var y_quad = 0; //quadrant y coord

var wave_diam = 23.5;
var wave_ang = 45;
var wave_weight = 5;

//colour variables
let blue;
let dark_blue;
let green;
let dark_green;
let black;
let orange;
let dark_orange;
let yellow;
let dark_yellow;
let white;
let grey;
let pink;
let dark_pink;

let n_blue;
let n_dark_blue;
let n_green;
let n_dark_green;
let n_black;
let n_orange;
let n_dark_orange;
let n_yellow;
let n_dark_yellow;
let n_white;
let n_grey;

let m_blue;
let m_dark_blue;
let m_green;
let m_dark_green;
let m_black;
let m_orange;
let m_dark_orange;
let m_yellow;
let m_dark_yellow;
let m_white;
let m_grey;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  //DEVELOP_GLYPH, GRID_WALLPAPER, GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN);
  //FIT_TO_SCREEN, NINE_LANDSCAPE, NINE_PORTRAIT, A4, A3 (for favourite wallpaper)
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;

  //Defining colours
  //Palette 1 - day
  blue = color(46, 227, 255);
  dark_blue = color(32, 165, 186, 80);
  green = color(110, 230, 130);
  dark_green = color(100, 200, 130);

  black = color(80);
  orange = color(255, 180, 100);
  dark_orange = color(235, 160, 85);
  yellow = color(255, 235, 120);
  dark_yellow = color(230, 210, 100);
  white = color(222, 250, 255);
  grey = color(190, 220, 222); 
  
  pink = color(255, 190, 255);
  dark_pink = color(220, 160, 225);

  //Palette 2 - night
  n_blue = color(19, 83, 194);
  n_dark_blue = color(14, 61, 141, 80);
  n_green = color(45, 84, 99);
  n_dark_green = color(41, 73, 99);
  
  n_black = color(33, 29, 61);
  n_orange = color(105, 67, 76);
  n_dark_orange = color(105, 57, 50);
  n_yellow = color(105, 88, 91);
  n_dark_yellow = color(94, 78, 75);
  n_white = color(92, 92, 194);
  n_grey = color(76, 82, 170);

  //Palette 3 - mexico
  m_blue = color(46, 159, 95);
  m_dark_blue = color(32, 97, 28, 80);
  m_green = color(110, 162, 19);
  m_dark_green = color(100, 132, 19);

  m_black = color(80, 12, 12);
  m_orange = color(255, 112, 15);
  m_dark_orange = color(248, 92, 12);
  m_yellow = color(255, 167, 18);
  m_dark_yellow = color(240, 141, 14);
  m_white = color(222, 182, 95);
  m_grey = color(190, 153, 63);

  //Changing colour palettes
  //Environment palettes
  if (palette == 1) {
    water = blue;
    water_shad = dark_blue;
    lily_main = green;
    lily_shad = dark_green;
  } else if (palette == 2) {
    water = n_blue;
    water_shad = n_dark_blue;
    lily_main = n_green;
    lily_shad = n_dark_green;
  } else if (palette == 3) {
    water = m_blue;
    water_shad = m_dark_blue;
    lily_main = m_green;
    lily_shad = m_dark_green;
  }

  //Ducky palettes
  if (palette == 1) {
    eyes = black;
    beak_main = orange;
    beak_shad = dark_orange;

    //ducky skins
    if (ducky_fit == 1) {
      dbod_main = yellow;
      dbod_shad = dark_yellow;
    } else if (ducky_fit == 2) {
      dbod_main = white;
      dbod_shad = grey;
    } else if (ducky_fit == 3) {
      dbod_main = pink;
      dbod_shad = dark_pink;
    }

    //duckle skins
    if (duckle_fit == 1) {
      dbab_main = yellow;
      dbab_shad = dark_yellow;
    } else if (duckle_fit == 2) {
      dbab_main = white;
      dbab_shad = grey;
    } else if (duckle_fit == 3) {
      dbab_main = pink;
      dbab_shad = dark_pink;
    }

  } else if (palette == 2) {
    eyes = n_black;
    beak_main = n_orange;
    beak_shad = n_dark_orange;

    //ducky skins
    if (ducky_fit == 1) {
      dbod_main = n_yellow;
      dbod_shad = n_dark_yellow;
    } else if (ducky_fit == 2) {
      dbod_main = n_white;
      dbod_shad = n_grey;
    }
    
    //duckle skins
    if (duckle_fit == 1) {
      dbab_main = n_yellow;
      dbab_shad = n_dark_yellow;
    } else if (duckle_fit == 2) {
      dbab_main = n_white;
      dbab_shad = n_grey;
    }
    
  } else if (palette == 3) {
    eyes = m_black;
    beak_main = m_orange;
    beak_shad = m_dark_orange;

    if (ducky_fit == 1) {
      dbod_main = m_yellow;
      dbod_shad = m_dark_yellow;
    } else if (ducky_fit == 2) {
      dbod_main = m_white;
      dbod_shad = m_grey;
    }

    //duckle skins
    if (duckle_fit == 1) {
      dbab_main = m_yellow;
      dbab_shad = m_dark_yellow;
    } else if (duckle_fit == 2) {
      dbab_main = m_white;
      dbab_shad = m_grey;
    }
  }

}

function wallpaper_background() {
  background(water); //water colour
}

function fillIn(colour) {
  fill(colour);
  stroke(colour);
}

function drawducky(body_main, body_shad) {
  var dhead = 40;
  var eyew = 8;
  var eyeh = 3;

  fillIn(body_shad);
  ellipse(-22.5, 5, dbod / 3, 50); //left wing shadow
  ellipse(22.5, 5, dbod / 3, 50); //right wing shadow

  fillIn(body_main);
  ellipse(-22.5, 4, dbod / 3.5, 45); //left wing 
  ellipse(22.5, 4, dbod / 3.5, 45); //right wing

  fillIn(body_shad);
  triangle(-25, 17, 25, 17, 0, 40); //tail shadow
  ellipse(0, 0, dbod, dbod); //body shadow

  fillIn(body_main);
  triangle(-22, 17.5, 22, 17.5, 0, 36.5); //tail
  ellipse(0, -1, dbod - 3, dbod - 3); //body 

  fillIn(beak_shad);
  triangle(-16, -27, 16, -27, 0, -43); //beak shadow

  fillIn(beak_main);
  triangle(-15, -27, 15, -27, 0, -41); //beak

  fillIn(body_shad);
  ellipse(0, -15, dhead, dhead); //head shadow

  fillIn(body_main);
  ellipse(0, -16, dhead - 2, dhead - 2); //head

  fillIn(eyes);
  push();
  rotate(45);
  ellipse(-28, -10, eyeh, eyew);
  rotate(-90);
  ellipse(28, -10, eyeh, eyew);
  pop();
}

function ducky() {
  drawducky(dbod_main, dbod_shad);
}

function duckle() {
  drawducky(dbab_main, dbab_shad);
}

function lilyp() {
  fillIn(lily_shad);
  arc(0, 0, lilysize, lilysize, lilysplit, lilysplit - 25); //lilypad shadow

  fillIn(lily_main);
  arc(0, 0, lilysize - 7, lilysize - 7, lilysplit + 7, lilysplit - 32); //lilypad
}

function shad(thing) {
  push(); 
  fillIn(water_shad);
  
  //draw shadow depending on object casting it
  if (thing == "duck") { //duck shadow if duck
    ellipse(0, 0, dbod + dbod / 10, dbod + dbod / 3);
  } else if (thing == "lily") { //lilypad shadow if lilypad
    arc(0, 0, lilysize, lilysize, lilysplit, lilysplit - 25);
  }

  pop();
}

function wave(x, y) {

  push();
  noFill();
  strokeWeight(wave_weight);
  stroke(water_shad);
  arc(x, y, wave_diam, wave_diam, wave_ang, wave_ang + 180);
  arc(x+wave_diam*sin(wave_ang), y+wave_diam*cos(wave_ang), wave_diam, wave_diam, wave_ang + 180, wave_ang);
  pop();
}


// function quadrants() {
// //   let quad_pick = int(random(0,4));
// //   text(quad_pick, 150, 150);

// //   if (quad_pick == 0) {
// //     x_quad = 50;
// //     y_quad = 50;
// //   } else if (quad_pick == 1) {
// //     x_quad = 150;
// //     y_quad = 50;
// //   } else if (quad_pick == 2) {
// //     x_quad = 50;
// //     y_quad = 150;
// //   } else if (quad_pick == 3) {
// //     x_quad = 150;
// //     y_quad = 150;
// //   }
// }

let ducky_lay = 1;
let lily_lay = 1;

function my_symbol() {

  //background waves section
  push();
  for (let i = 0; i < 2; i++) {
    for (let x_wave = wave_diam/2; x_wave <= 200; x_wave += 100 - wave_diam*2*sin(wave_ang)) { //repeat wave across x axis
      for (let y_wave = wave_diam/2; y_wave <= 200; y_wave += 100 - wave_diam*2*cos(wave_ang)) { //repeat wave across y axis
        wave(x_wave, y_wave);
      };
    }
    translate(wave_diam*2*sin(wave_ang), wave_diam*2*cos(wave_ang), 0);
  }
  pop();

  //lilypad section
  for (let i = 0; i < lily_num; i++) {

    //lilypad shadow translation
    push();
    translate(x_lily + shad_off, y_lily + shad_off, 0);
    rotate(rot_lily);
    scale(scal_lily);
    shad("lily");
    pop();

    //lilypad translation
    push();
    translate(x_lily, y_lily, 0);
    rotate(rot_lily);
    scale(scal_lily);
    lilyp();
    pop();

    if (lily_rand == true) {
      rot_lily += random(10, 100);
      scal_lily = random(0.4, 1);
      x_lily = random(0 + lilysize*scal_lily, 200 - lilysize*scal_lily);
      y_lily = random(0 + lilysize*scal_lily, 200 - lilysize*scal_lily);
    } else if (lily_rand == false) {
      x_lily = lilysize*i;
      y_lily = lilysize*i;
      rot_lily += 30;
      scal_lily -= i/50;
    }  
  }

  //duckle section
  for (let i = 0; i < duckle_num; i++) {

    //duckle shadow translation
    push();
    translate(x_duckle + shad_off, y_duckle + shad_off, 0);
    rotate(rot_duckle);
    scale(scal_duckle);
    shad("duck");
    pop();

    //duckle translation
    push();
    translate(x_duckle, y_duckle, 0);
    rotate(rot_duckle);
    scale(scal_duckle);
    duckle();
    pop();

    if (duckle_rand == true) {
      x_duckle = random(10, 150);
      y_duckle = random(40, 150);
      rot_duckle += random(10, 40);
      scal_duckle = random(0.3, 0.9);
    } else if (duckle_rand == false) {
      // rot_duckle += 30;
    }
  }

  //ducky section
  for (let i = 0; i < ducky_num; i++) {
    
    //ducky shadow translation
    push();
    translate(x_ducky + shad_off, y_ducky + shad_off, 0);
    rotate(rot_ducky);
    scale(scal_ducky);
    shad("duck");
    pop();

    //ducky translation
    push();
    translate(x_ducky, y_ducky, 0);
    rotate(rot_ducky);
    scale(scal_ducky);
    ducky();
    pop();
    
    if (ducky_rand == true) {
      x_ducky = random(10, 100);
      y_ducky = random(40, 150);
      rot_ducky += random(10, 40);
      scal_ducky = random(0.7, 1.1);
    } else if (ducky_rand == false) {
      if (ducky_lay == 1) {
        if (i == 1) {
          x_ducky = dbod; 
          //y_ducky
          //rot_ducky

        }
      }
    } 
  }

  rot_ducky += 45;
  rot_lily += 45;
  
}