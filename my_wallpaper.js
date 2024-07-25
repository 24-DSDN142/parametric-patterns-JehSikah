//your parameter variables go here!
let smol = 25;

//colour variables
let greem;
let greemer;
let reb;
let wite;
let bleck;
let yell;
let yellow;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //DEVELOP_GLYPH, GRID_WALLPAPER, GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN);
  //FIT_TO_SCREEN, NINE_LANDSCAPE, NINE_PORTRAIT, A4, A3, 
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;

  angleMode(DEGREES);

  //Defining colours
  greem = color(20, 250, 20);
  greemer = color(20, 200, 20);
  reb = color(255, 0, 21);
  wite = color(255, 255, 255);
  bleck = color(0,0,0);
  yell = color(235, 235, 150);
  yellow = color(235, 235, 110);
}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  //background(150, 150, 225); //bluey purple thing
  background(170, 170, 225);
}

function fillIn(colour) {
  fill(colour);
  stroke(colour);
}

function kermi() {
  fillIn(greem);  
  rect(70, 170, 20, 30); //leg l
  rect(110, 170, 20, 30); //leg r
  rect(0, 120, 200, 20); //arm

  fillIn(greemer);
  ellipse(100, 153, 80, 90);//body shadow

  fillIn(greem);
  ellipse(100, 150, 80, 90); //body

  fillIn(greemer);
  ellipse(100, 113, 60, 40) //neck shadow

  triangle(70, 110, 90, 130, 80, 145); //tri l
  triangle(85, 120, 110, 130, 100, 150); //tri m
  triangle(100, 120, 130, 110, 120, 145); //tri r

  fillIn(greem);
  ellipse(100, 95, 70, 70); //head

  fillIn(greem);
  ellipse(70, 95, smol, smol); //cheek l
  ellipse(130, 95, smol, smol); //cheek r
  ellipse(85, 70, smol, smol); //eye l
  ellipse(115, 70, smol, smol); //eye r

  fillIn(reb);
  arc(100, 100, 50, 40, PI, 0); //smile

  fillIn(greem);
  triangle(70, 100, 130, 100, 100, 105); //up lip

  fillIn(wite);
  arc(85, 75, 20, 25, PI, 0); //eyeball l
  arc(115, 75, 20, 25, PI, 0); //eyeball r

  fillIn(bleck);
  ellipse(85, 72, 6, 6); //pupil l
  ellipse(115, 72, 6, 6); //pupil r
  line(77, 73, 94, 71); //eyestick l
  line(107, 71, 124, 73); //eyestick r
}

function ducky() {
  var dhead = 40;
  var dbod = 60;

  fillIn(yellow);
  triangle(30, 50, 60, 80, 30, 80);
  ellipse(60, 50, dbod, dbod);

  rotate(45);
  ellipse(55, 0, dbod/3, 50);
  ellipse(100, 0, dbod/3, 50);

  rotate(-45);
  fillIn(yell);
  ellipse(70, 40, dhead, dhead);

}


function my_symbol() {
  ducky();
}