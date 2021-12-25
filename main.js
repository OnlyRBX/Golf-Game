var canvas = new fabric.Canvas('myCanvas');
Points = 0
var imageinsert = "";
var imageinsertmain = ";"
var imageinsertmain2 = ";"
player_x = Math.floor(Math.random()*630)
player_y = Math.floor(Math.random()*1020)
goal_x = Math.floor(Math.random()*630)
goal_y = Math.floor(Math.random()*1020)
increase = 5

function new_image()
{
    fabric.Image.fromURL('Grass1.jpg', function(Img){
        imageinsert = Img;

        imageinsert.scaleToWidth(1000);
        imageinsert.scaleToHeight(800);
        imageinsert.set({
            top:0,
            left:0
        })
        canvas.add(imageinsert);
    })
    fabric.Image.fromURL('Hole.png', function(Img){
        imageinsertmain2 = Img;

        imageinsertmain2.scaleToWidth(75);
        imageinsertmain2.scaleToHeight(75);
        imageinsertmain2.set({
            top: goal_y,
            left: goal_x,
        })
        canvas.add(imageinsertmain2);
    })
    fabric.Image.fromURL('Ball.png', function(Img){
        imageinsertmain = Img;

        imageinsertmain.scaleToWidth(75);
        imageinsertmain.scaleToHeight(75);
        imageinsertmain.set({
            top: player_y,
            left: player_x,
        })
        canvas.add(imageinsertmain);
    })
}

function player_update()
{
    fabric.Image.fromURL('Ball.png', function(Img){
        imageinsertmain = Img;

        imageinsertmain.scaleToWidth(75);
        imageinsertmain.scaleToHeight(75);
        imageinsertmain.set({
            top: player_y,
            left: player_x,
        })
        canvas.add(imageinsertmain);
    })
}

new_image()

window.addEventListener("keydown", keyisdown);

function keyisdown(e)
{
    KeyCode = e.keyCode
    console.log("The Keydown's Code is "+ KeyCode)
    if (KeyCode == '38') {
        UP()
        console.log("Player Go Up")
    }
    if (KeyCode == '40') {
        DOWN()
        console.log("Player Go Down")
    }
    if (KeyCode == '37') {
        LEFT()
        console.log("Player Go Left")
    }
    if (KeyCode == '39') {
        RIGHT()
        console.log("Player Go Right")
    }
}

function UP()
{
    if (player_y>0) {
        player_y = player_y - increase;
        canvas.remove(imageinsertmain)
        player_update()
        Check()
    }
}

function DOWN()
{
    if (player_y<700) {
        player_y = player_y + increase;
        canvas.remove(imageinsertmain)
        player_update()
        Check()
    }
}

function RIGHT()
{
    if (player_x<1050) {
        player_x = player_x + increase;
        canvas.remove(imageinsertmain)
        player_update()
        Check()
    }
}

function LEFT()
{
    if (player_x>0) {
        player_x = player_x - increase;
        canvas.remove(imageinsertmain)
        player_update()
        Check()
    }
}

function Refresh()
{
    window.location = "index.html"
}

function Check()
{
    if (player_x <= (goal_x+10) && player_x >= (goal_x-10) && player_y <= (goal_y+10) && player_y >= (goal_y-10)) {
        console.log("SCORE")
        Points = Points + 1
        player_x = Math.floor(Math.random()*630)
        player_y = Math.floor(Math.random()*1020)
        goal_x = Math.floor(Math.random()*630)
        goal_y = Math.floor(Math.random()*1020)
        canvas.remove(imageinsertmain)
        canvas.remove(imageinsertmain2)
        canvas.remove(imageinsert)
        new_image()
        document.getElementById("Text2").innerHTML = "Score: "+Points
        localStorage.setItem("Score", Points)
    }
}

document.onload
{
    if (localStorage.getItem("Score") == null ) {
        Points = 0
        document.getElementById("Text2").innerHTML = "Score: "+Points 
    } else {
        Points = localStorage.getItem("Score")
        document.getElementById("Text2").innerHTML = "Score: "+Points 
    }
}