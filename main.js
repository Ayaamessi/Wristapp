nosex=0;
nosey=0;
difference=0;
rightWristx=0;
leftWristx=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex ="+ nosex + " nosey = " + nosey );
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference = floor (leftWristx-rightWristx);
        console.log("leftWristx ="+ leftWristx + " rightWristx = " + rightWristx );
        console.log("difference =" + difference);
    }
}
function draw (){
    background('#f50f0f');
    document.getElementById("square_side").innerHTML="width and height of a square will be " +difference+" px";
    fill('#fc0505');
    stroke('#fc0505');
    square(nosex,nosey,difference);
}