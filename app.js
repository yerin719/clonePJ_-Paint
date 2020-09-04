const canvas = document.querySelector("#JsCanvas")



let drowing = false;

function stopDrowing(){
    drowing = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x,y);
}

function onMouseDown(event){
    stopDrowing();
}

function onMouseUp(event){
    drowing =true;
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mousedown",onMouseUp);
    canvas.addEventListener("mousedout",stopDrowing);
}
