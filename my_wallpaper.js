//your parameter variables go here!

let mover = 0; //rotate (degrees)
let movex = 0; //move on x
let movey = 0; //move on y
let moves = 1; //scale - default 1

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

}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  //background(150, 150, 225); //bluey purple thing
  background(46, 227, 255);
}

function fillIn(colour) {
  fill(colour);
  stroke(colour);
}

function kermi() {
  let smol = 25;

  fillIn(green);  
  rect(70, 170, 20, 30); //leg l
  rect(110, 170, 20, 30); //leg r
  rect(0, 120, 200, 20); //arm

  fillIn(dark_green);
  ellipse(100, 153, 80, 90);//body shadow

  fillIn(green);
  ellipse(100, 150, 80, 90); //body

  fillIn(dark_green);
  ellipse(100, 113, 60, 40) //neck shadow

  triangle(70, 110, 90, 130, 80, 145); //tri l
  triangle(85, 120, 110, 130, 100, 150); //tri m
  triangle(100, 120, 130, 110, 120, 145); //tri r

  fillIn(greem);
  ellipse(100, 95, 70, 70); //head

  ellipse(70, 95, smol, smol); //cheek l
  ellipse(130, 95, smol, smol); //cheek r
  ellipse(85, 70, smol, smol); //eye l
  ellipse(115, 70, smol, smol); //eye r

  fillIn(red);
  arc(100, 100, 50, 40, PI, 0); //smile

  fillIn(green);
  triangle(70, 100, 130, 100, 100, 105); //up lip

  fillIn(white);
  arc(85, 75, 20, 25, PI, 0); //eyeball l
  arc(115, 75, 20, 25, PI, 0); //eyeball r

  fillIn(black);
  ellipse(85, 72, 6, 6); //pupil l
  ellipse(115, 72, 6, 6); //pupil r
  line(77, 73, 94, 71); //eyestick l
  line(107, 71, 124, 73); //eyestick r
}

function ducky() {
  let dhead = 40;
  let dbod = 60;
  let eyew = 8;
  let eyeh = 3;

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

function lily() {
  let lilysize = 80; //param
  let lilysplit = 0; //param

  fillIn(dark_green);
  arc(130, 130, lilysize, lilysize, lilysplit, lilysplit-25);

  fillIn(green);
  arc(130, 130, lilysize-7, lilysize-7, lilysplit+7, lilysplit-32);
}

function my_symbol() {
  push();
  rotate(mover);
  translate(movex, movey, 0);
  scale(moves, moves, moves);
  ducky();
  lily()
  pop();
}