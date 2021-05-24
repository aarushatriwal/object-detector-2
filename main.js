status = "";

function setup(){
    canvas = createCanvas(280, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Objects Detected";
    input = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}
 
function draw(){
    image(video, 0, 0, 280, 300);
}