function setup() 
{
    canvas = createCanvas(300, 240);
    canvas.position(580, 200);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S5xbpuDaJ/model.json',modelLoaded);
}

function modelLoaded()
{
console.log('Model Loaded!');
}

function draw()
{
image(video, 0, 0, 300, 300);
classifier.classify(video, gotResult);
}

function gotResult(error, results){
if (error) {
console.error(error);
} else {
console.log(results);
document.getElementById("result_object_family_member").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}