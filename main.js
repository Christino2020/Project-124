function setup(){
    canvas = createCanvas(550, 550)
    canvas.position(560, 160)
    video = createCapture(VIDEO)
    video.size(550, 500)
    posenet = ml5.posenet(video, modelLoaded)
    posenet.on('pose', gotPoses)
    }
    function modelLoaded(){
        console.log("Posenet is ready to tell you how to you use poses")
    }
    function draw(){
        background(black)
    }
    function preload(){
    
    }
    function gotPoses(){
    if(results.length > 0 ){
    console.log(results)
    }
    }