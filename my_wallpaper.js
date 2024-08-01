//your parameter variables go here!
let palette = 3;

//duck alter parameters
let rot_ducky = 0; //rotate ducky (0-360)
let x_ducky = 60; //move ducky on x axis
let y_ducky = 60; //move ducky on y axis
let scal_ducky = 1; //scale ducky

//duckyling alter parameters
let rot_duckle = rot_ducky - 20; //rotate duckle (0-360)
let x_duckle = x_ducky - 10; //move duckle on x axis
let y_duckle = y_ducky - 50; //move duckle on y axis
let scal_duckle = scal_ducky - 0.4; //scale duckle

//lilypad alter parameters
let rot_lily = 0; //rotate lilypad (0-360)
let x_lily = 160; //move lilypad on x axis
let y_lily = 160; //move lilypad on y axis
let scal_lily = 1; //scale lilypad

//variables used in multiple functions
var dbod = 60; //ducky body size
var lilysize = 80; //lilypad size
var lilysplit = 80; //lilypad split location (0-360)
var offset = 5; //shadow offset

//colour variables
let green;
let dark_green;
let black;
let yellow;
let dark_yellow;
let orange;
let dark_orange;
let blue;
let dark_blue;
let white;
let grey;

let n_green;
let n_dark_green;
let n_black;
let n_yellow;
let n_dark_yellow;
let n_orange;
let n_dark_orange;
let n_blue;
let n_dark_blue;
let n_white;
let n_grey;

let m_green;
let m_dark_green;
let m_black;
let m_yellow;
let m_dark_yellow;
let m_orange;
let m_dark_orange;
let m_blue;
let m_dark_blue;
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
  green = color(110, 230, 130);
  dark_green = color(100, 200, 130);
  black = color(80);
  yellow = color(255, 235, 120);
  dark_yellow = color(230, 210, 100);
  orange = color(255, 180, 100);
  dark_orange = color(235, 160, 85);
  blue = color(46, 227, 255);
  dark_blue = color(32, 165, 186);
  white = color(222, 250, 255);
  grey = color(190, 220, 222); 
  
  //Palette 2 - night
  n_green = color(45, 84, 99);
  n_dark_green = color(41, 73, 99);
  n_black = color(33, 29, 61);
  n_yellow = color(105, 88, 91);
  n_dark_yellow = color(94, 78, 75);
  n_orange = color(105, 67, 76);
  n_dark_orange = color(105, 57, 50);
  n_blue = color(19, 83, 194);
  n_dark_blue = color(14, 61, 141);
  n_white = color(92, 92, 194);
  n_grey = color(76, 82, 170);

  //Palette 3 - mexico
  m_green = color(110, 162, 19);
  m_dark_green = color(100, 132, 19);
  m_black = color(80, 12, 12);
  m_yellow = color(255, 167, 18);
  m_dark_yellow = color(240, 141, 14);
  m_orange = color(255, 112, 15);
  m_dark_orange = color(248, 92, 12);
  m_blue = color(46, 159, 95);
  m_dark_blue = color(32, 97, 28);
  m_white = color(222, 182, 95);
  m_grey = color(190, 153, 63);

  //Changing colour palette
  if (palette == 1) {
    eyes = black;
    dbod_main = yellow;
    dbod_shad = dark_yellow;
    beak_main = orange;
    beak_shad = dark_orange;
    water = blue;
    water_shad = dark_blue;
    lily_main = green;
    lily_shad = dark_green;
    dbab_main = white;
    dbab_shad = grey;
  } else if (palette == 2) {
    eyes = n_black;
    dbod_main = n_yellow;
    dbod_shad = n_dark_yellow;
    beak_main = n_orange;
    beak_shad = n_dark_orange;
    water = n_blue;
    water_shad = n_dark_blue;
    lily_main = n_green;
    lily_shad = n_dark_green;
    dbab_main = n_white;
    dbab_shad = n_grey;
  } else if (palette == 3) {
    eyes = m_black;
    dbod_main = m_yellow;
    dbod_shad = m_dark_yellow;
    beak_main = m_orange;
    beak_shad = m_dark_orange;
    water = m_blue;
    water_shad = m_dark_blue;
    lily_main = m_green;
    lily_shad = m_dark_green;
    dbab_main = m_white;
    dbab_shad = m_grey;
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
  let dhead = 40;
  let eyew = 8;
  let eyeh = 3;

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

function lilyp() {
  fillIn(lily_shad);
  arc(0, 0, lilysize, lilysize, lilysplit, lilysplit - 25); //lilypad shadow

  fillIn(lily_main);
  arc(0, 0, lilysize - 7, lilysize - 7, lilysplit + 7, lilysplit - 32); //lilypad
}

function randy(x, y, rot, scal) {
  x = random(10, 100);
  y = random(40, 150);
  rot += random(10, 40);
  scal = random(0.8, 2);
}

let ducky_num = 1; //set number of duckys
let duckle_num = 2; //set number of duckles
let lily_num = 3; //set number of lilypads

function my_symbol() {
  for (let i = 0; i < ducky_num; i++) {
    //ducky shadow translation
    push();
    translate(x_ducky + offset, y_ducky + offset, 0);
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

    randy(x_ducky, y_ducky, rot_ducky, scal_ducky);

    // x_ducky = random(10, 100);
    // y_ducky = random(40, 150);
    // rot_ducky += random(10, 40);
    // scal_ducky = random(0.8, 2);
  }

  for (let i = 0; i < duckle_num; i++) {
    //duckle shadow translation
    push();
    translate(x_duckle + offset, y_duckle + offset, 0);
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
  }

  for (let i = 0; i < lily_num; i++) {
    //lilypad shadow translation
    push();
    translate(x_lily + offset, y_lily + offset, 0);
    rotate(rot_lily);
    scale(scal_lily);
    shad("lily"); //figure how to rotate on spot
    pop();

    //lilypad translation
    push();
    scale(scal_lily);
    translate(x_lily, y_lily, 0);
    rotate(rot_lily);
    lilyp();
    pop();
  }
  
  rot_ducky += 45;
  if(rot_ducky == 360){
    rot_ducky = 0;
  } else if(rot_ducky > 360){
    rot_ducky -= 360;
  }
  rot_lily += 45;  
  text(rot_ducky, 50, 50);
}