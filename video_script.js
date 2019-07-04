let mobilenet;
let video;


function modelReady() {
    console.log('Model is readyyyy!!');
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        
        mobilenet.predict(gotResults);
    }
}


function setup() {
    createCanvas(940, 650);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
    background(0);
    image(video, 0, 0,940, 650);
    
}