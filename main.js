function preload(){

}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO)
video.size(300,300)


poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("posenet is okkkkkkd")
}
function gotPoses(results){
  if(results.length > 0){
  console.log(results)
  
  }
  }
function draw(){

}

function takeSnapshot(){
    save('myFilterImage.png')
}
