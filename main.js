var l1 = 100;
var l2 = 150;
var m1 = 1;
var m2 = 1;
var g = 0.667408;

var i = 1;

centerX = 300;
centerY = 300;

function setup(){
	createCanvas(600,600);

	theta1 = PI/2;
	theta2 = PI/4;
	theta1_p = 0;
	theta2_p = 0;
	theta1_dp = 0;
	theta2_dp = 0;

	centerX = 300;
	centerY = 300;

	noLoop();
}
function draw(){

	//crazy formula
	numPiece1 = -g*(2*m1 + m2)*sin(theta1);
	numPiece2 = m2*g*sin(theta1 - 2*theta2);
	numPiece3 = 2*sin(theta1 - theta2)*m2;
	numPiece4 = theta2_p*theta2_p*l2 + theta1_p*theta1_p*l1*cos(theta1 - theta2);
	denom1 = l1*(2*m1 + m2 - m2*cos(2*theta1 - 2*theta2));

	numPiece5 = 2*sin(theta1 - theta2);
	numPiece6 = theta1_p*theta1_p*l1*(m1 + m2);
	numPiece7 = g*(m1 + m2)*cos(theta1);
	numPiece8 = theta2_p*theta2_p*l2*m2*cos(theta1 - theta2);
	denom2 = l2*(2*m1 + m2 - m2*cos(2*theta1 - 2*theta2));

	theta1_dp = (numPiece1 - numPiece2 - numPiece3 * numPiece4) / denom1;
	theta2_dp = (numPiece5 * (numPiece6 + numPiece7 + numPiece8)) / denom2;

	// background(250);
	translate(centerX, centerY);
	// ellipse(0,0, 20, 20);

	// first line
	x1 = l1 * (sin(theta1));
	y1 = l1 * (cos(theta1));
	line(0, 0, x1, y1);
	ellipse(x1, y1, 20, 20);

	//second line
	x2 = x1 + l2 * (sin(theta2));
	y2 = y1 + l2 * (cos(theta2));
	line(x1, y1, x2, y2);
	ellipse(x2, y2, 20, 20);

	//center dot
	ellipse(0,0, 20, 20);

	theta1_p += theta1_dp;
	theta2_p += theta2_dp;
	theta1 += theta1_p;
	theta2 += theta2_p;

	
}


// function mousePressed(){
	
// }

function mouseReleased(){
	i++;

	if (i % 2 === 0){
		loop();
	} else {
		noLoop();
	}
}

