img = "";
status = "";
objects = [];
me1 = "";
bye = "";
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function preload() 
{
img = loadImage('dog_cat.jpg');    
}

function draw() {
    image(img, 0, 0, 640, 420);

    if (status != "") 
    {
     for (i = 0; i < objects.length; i++)
     {
        document.getElementById("status").innerHTML = "Status : All Objects Detected";

        fill("green");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("green");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
     }
    }
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) 
{
    if (error) {
        console.log(error);
    }    
    console.log(results);
    objects = results;
}