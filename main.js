noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;
function preload(){}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 150);

    canvas = createCanvas(550, 480);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet model is loaded");
}
function draw(){
    background('#ffb59e');
    document.getElementById("square_sides").innerHTML = "Width and height of the square, circle and rectangle is = "+ difference +" px";
    fill('#75d3ff');
    stroke('#ff0000');
    square(leftwristX, rightwristX, difference);
    fill('#bf75ff');
    stroke('#00ff1e');
    circle(leftwristX, rightwristX, difference);
    fill('#ffef75');
    stroke('#000000');
    rect(leftwristX, rightwristX, 100, difference);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + " nose y ="+ noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("Left Wrist X =" + leftwristX + " Right Wrist x =" + rightwristX + " Difference = " + difference);
    }
}