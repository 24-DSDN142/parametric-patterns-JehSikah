//your parameter variables go here!



//colour variables
let green;
let dark_green;
let red;
let white;
let black;
let yellow;
let dark_yellow;
let orange;
let dark_orange;
let dark_blue;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  //DEVELOP_GLYPH, GRID_WALLPAPER, GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN);
  //FIT_TO_SCREEN, NINE_LANDSCAPE, NINE_PORTRAIT, A4, A3, 
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;

  //Defining colours
  green = color(110, 250, 130);
  dark_green = color(100, 200, 130);
  red = color(255, 0, 21);
  white = color(250);
  black = color(80);
  yellow = color(255, 235, 120);
  dark_yellow = color(230, 210, 100);
  orange = color(255, 180, 100);
  dark_orange = color(235, 160, 85);
  dark_blue = color(32, 165, 186);
}

function wallpaper_background() {
  background(46, 227, 255); //light blue
}

function fillIn(colour) {
  fill(colour);
  stroke(colour);
}

let dhead = 40;
let dbod = 60;
let eyew = 8;
let eyeh = 3;
function ducky() {
  rotate(45); //wings on angle - 45 degree
  fillIn(dark_yellow);  
  ellipse(55.5, 0, dbod/3, 50); //left wing shadow
  ellipse(100, 0, dbod/3, 50); //right wing shadow

  fillIn(yellow);
  ellipse(55.5, 0, dbod/3.5, 45); //left wing light
  ellipse(100, 0, dbod/3.5, 45); //right wing light

  rotate(-45); //reset angle - 0 degree
  fillIn(dark_yellow);
  triangle(30, 50, 60, 80, 30, 80); //tail shadow
  ellipse(60, 50, dbod, dbod); //bod shadow

  fillIn(yellow);
  ellipse(61, 49, dbod-3, dbod-3); //bod light
  triangle(32.5, 53, 60, 77.5, 33, 77); //tail light

  fillIn(dark_orange);
  triangle(70, 20, 90, 40, 90, 20); //beak shadow

  fillIn(orange);
  triangle(70, 20, 90, 40, 89, 21); //beak light

  fillIn(dark_yellow);
  ellipse(70, 40, dhead, dhead); //head shadow

  fillIn(yellow);
  ellipse(71, 39, dhead-2, dhead-2); //head light

  rotate(-15); //-15 degree
  fillIn(black);
  ellipse(57, 40, eyew, eyeh); //eye l

  rotate(30); //15 degree
  ellipse(95, 20, eyeh, eyew); //eye r

  rotate(-15); //reset angle - 0 degree
}

let lilylocx = 130; //lilypad x coord
let lilylocy = 130; //lilypad y coord
let lilysize = 80; //param //lilypad size
let lilysplit = 120; //param //lilypad split location (degrees)
function lily() {

  fillIn(dark_blue);
  arc(lilylocx, lilylocy+5, lilysize, lilysize, lilysplit, lilysplit-25); //water shadow

  fillIn(dark_green);
  arc(lilylocx, lilylocy, lilysize, lilysize, lilysplit, lilysplit-25); //lilypad shadow

  fillIn(green);
  arc(lilylocx, lilylocy, lilysize-7, lilysize-7, lilysplit+7, lilysplit-32); //lilypad light
}

function duckyshad() {
  rotate(45);
  fillIn(dark_blue);
  ellipse(80, 1, dbod+10, dbod+20); //water shadow
  rotate(-45);
}


let duckynum = 1; //number of ducks
let duckyrot = 80; //rotate duck (degrees)
let duckyx = 0; //move duck on x
let duckyy = 0; //move duck on y
let duckys = 1; //scale duck - default 1

let lilynum = 2; //number of lilypads
let lilyrot = 120; //rotate lilypad
let lilyx = 0; //move lilypad on x
let lilyy = 0; //move lilypad on y
let lilys = 0.7; //scale lilypad - default 1

function my_symbol() {
  for (let i = 0; i < duckynum; i += 1) {
    push();
    rotate(duckyrot);
    translate(duckyx, duckyy, 0);
    scale(duckys);
    duckyshad();
    ducky();
    pop();
  }
  
  lily();
  for (let i = 0; i < lilynum; i += 1) {
    push();
    rotate(lilyrot);
    translate(lilyx, lilyy, 0);
    scale(lilys);
    lily();
    pop();
  }
  
}