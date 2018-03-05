/* global GWindow, GLabel, GOval, GRect, GLine */

function helloWorld() {
  return "Hello, World!";
}

const GWIDTH = 500;
const GHEIGHT = 200;

function graphicsHelloWorld() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let msg = GLabel(helloWorld(), 50, 100);
  msg.setFont("36px 'Papyrus'");
  gw.add(msg);
}

function blueRectangle() {
  let gw = GWindow(GWIDTH, GHEIGHT);

  let oval = GOval(250, 50, 200, 100);
  oval.setColor("red");
  oval.setFilled(true);
  gw.add(oval);

  let rect = GRect(150, 50, 200, 100);
  rect.setColor("cornflowerblue");
  rect.setFilled(true);
  gw.add(rect);

}

function drawDiagonals() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  gw.add(GLine(0, 0, GWIDTH, GHEIGHT));
  gw.add(GLine(GWIDTH, 0, 0, GHEIGHT));
}

function target() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let xc = GWIDTH / 2;
  // let yc = GHEIGHT / 2;
  gw.add(createFilledCircle(xc, 400, 300, "red"));
  let time = new Date();

  $('body').append('<p>' + time.toString() + '</p>');
  setTimeout(() => { location.reload(); }, 5000);
}

function createFilledCircle(x, y, r, color) {
  let circle = GOval(x - r, y - r, 2 * r, 2 * r);
  circle.setFilled(true);
  circle.setColor(color);
  return circle;
}
