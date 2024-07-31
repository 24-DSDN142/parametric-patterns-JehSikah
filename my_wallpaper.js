//your parameter variables go here!
let palette = 1;

let rot_ducky = 0; //rotate ducky (0-360)
let x_ducky = 60; //move ducky on x axis
let y_ducky = 60; //move ducky on y axis
let scal_ducky = 1; //scale ducky

let rot_lily = 0; //rotate lilypad (0-360)
let x_lily = 160; //move lilypad on x axis
let y_lily = 160; //move lilypad on y axis
let scal_lily = 1; //scale lilypad


let dbod = 60; //ducky body size
let lilysize = 80; //lilypad size
let lilysplit = 100; //lilypad split location (0-360)


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

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //DEVELOP_GLYPH, GRID_WALLPAPER, GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN);
  //FIT_TO_SCREEN, NINE_LANDSCAPE, NINE_PORTRAIT, A4, A3 (for favourite wallpaper)
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;

  //Defining colours
  //Palette 1
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
  
  //Changing colour palette
  if (palette == 1) {
    dbod_main = yellow;
    dbod_shad = dark_yellow;
    beak_main = orange;
    beak_shad = dark_orange;
    water = blue;
    water_shad = dark_blue;
    lily_main = green;
    lily_shad = dark_green;
  }

}

function wallpaper_background() {
  background(water); //water colour
}

function fillIn(colour) {
  fill(colour);
  stroke(colour);
}

function ducky() {
  let dhead = 40;
  let eyew = 8;
  let eyeh = 3;

  fillIn(dbod_shad);
  ellipse(-22.5, 5, dbod / 3, 50); //left wing shadow
  ellipse(22.5, 5, dbod / 3, 50); //right wing shadow

  fillIn(dbod_main);
  ellipse(-22.5, 4, dbod / 3.5, 45); //left wing 
  ellipse(22.5, 4, dbod / 3.5, 45); //right wing

  fillIn(dbod_shad);
  triangle(-25, 17, 25, 17, 0, 40); //tail shadow
  ellipse(0, 0, dbod, dbod); //body shadow

  fillIn(dbod_main);
  triangle(-22, 17.5, 22, 17.5, 0, 36.5); //tail
  ellipse(0, -1, dbod - 3, dbod - 3); //body 

  fillIn(beak_shad);
  triangle(-16, -27, 16, -27, 0, -43); //beak shadow

  fillIn(beak_main);
  triangle(-15, -27, 15, -27, 0, -41); //beak

  fillIn(dbod_shad);
  ellipse(0, -15, dhead, dhead); //head shadow

  fillIn(dbod_main);
  ellipse(0, -16, dhead - 2, dhead - 2); //head

  fillIn(black);
  push();
  rotate(45);
  ellipse(-28, -10, eyeh, eyew);
  rotate(-90);
  ellipse(28, -10, eyeh, eyew);
  pop();
}

function shad(x, y, thing, scale) {

  let shad_dist = 7.5 * scale; //distance of shadows
  let shad_ang = 70; //angle of shadows

  //ew math
  var x_shad = x + shad_dist * cos(shad_ang);
  var y_shad = y + shad_dist * sin(shad_ang);

  push(); 
  fillIn(water_shad);

  if (thing == "duck") { //duck shadow if duck
    ellipse(x_shad, y_shad, dbod + dbod / 10, dbod + dbod / 3);
  } else if (thing == "lily") { //lilypad shadow if lilypad
    arc(x_shad, y_shad, lilysize, lilysize, lilysplit, lilysplit - 25);
  }

  pop();
}

function lilyp() {
  fillIn(lily_shad);
  arc(0, 0, lilysize, lilysize, lilysplit, lilysplit - 25); //lilypad shadow

  fillIn(lily_main);
  arc(0, 0, lilysize - 7, lilysize - 7, lilysplit + 7, lilysplit - 32); //lilypad
}

let ducky_num = 3;

function my_symbol() {

  
  for (i = 0; i < ducky_num; i += 1) {
    push();
    translate(x_ducky, y_ducky, 0);
    rotate(rot_ducky);
    scale(scal_ducky);
    shad(x_ducky, y_ducky, "duck", scal_ducky); //figure how to rotate on spot
    ducky();
    pop();
  }
  
  shad(x_lily, y_lily, "lily", scal_lily); //figure how to rotate on spot
  
  push();
  scale(scal_lily);
  translate(x_lily, y_lily, 0);
  rotate(rot_lily);
  lilyp();
  pop();
  
  rot_ducky += 45;
  rot_lily += 45;
  
}