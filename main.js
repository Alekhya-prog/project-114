noseX = 0 ;
noseY = 0;

function preload () {
mushchatash = loadImage ('https://i.postimg.cc/3x3QzSGq/m.png');


}

function setup () {
canvas = createCanvas (300 , 300);
canvas.center ();
video = createCapture (VIDEO);
video.size (300 , 300);
video.hide  ();

poseNet = ml5.poseNet (video , model_loaded);
poseNet.on ('pose' , gotposes);

}

function model_loaded () {
console.log ("model is loaded");
}

function gotposes (results) {
if (results.length > 0 ) {
console.log (results );
 noseX = results[0].pose.nose.x -10;
 noseY = results[0].pose.nose.y +10;
}
}

function draw () {
    image (video , 0 , 0 , 300 , 300 );
    image (mushchatash , noseX , noseY , 25 , 25);
}

function snap () {
save ('my_picture.png');
 }
    