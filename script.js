let penSize= document.querySelector("#pen-size")
let penSelected = document.querySelector("#pen-pencil")
let resetCanvas = document.querySelector("#reset-canvas")
let penColor = document.querySelector("#pen-color")
let saveCanvas = document.querySelector("#save-canvas")



function setup(){
    let canvas= createCanvas(650,600)
    canvas.parent("canvas-wrapper")
    background(255)
}

function mouseDragged(){
    if(penSelected.checked==true){
        type="pencil"
    }
    else {
        type="brush"
    }

    let size = penSize.value
    let color = penColor.value
    fill(color)
    stroke(color)
    if(type=="pencil"){
        line (pmouseX, pmouseY, mouseX , mouseY) 
    }
    else{
        ellipse(mouseX, mouseY, size, size);
    }
}

resetCanvas.addEventListener("click",function(){
    background(255);
    
    })

    saveCanvas.addEventListener("click",function(){
        saveCanvas(canvas, "sketch", png);
    })