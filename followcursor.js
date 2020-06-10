 //This is the JS code for the circle to follow the cursor

 var moveDiv = document.getElementById('ball1');

window.onmousemove = function (e) {
      var x = e.clientX - 89;
      y = e.clientY - 89;
moveDiv.style.top = (y + 2) + 'px';
moveDiv.style.left = (x + 2) + 'px';
}

/*
function update() {
     context.beginPath();
     context.arc(e.clientX, e.clientY, 50, 0, 2 * Math.PI, true);
     context.fillStyle = "white";
     context.fill();
    
     requestAnimationFrame(update);
   }
update();
*/
/*
function line(){
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
    ctx.lineTo(e.clientX+20,e.clientY+20);
    ctx.strokeStyle = 30;
    ctx.lineWidth = 20;
    ctx.stroke();
    ctx.closePath();
}
*/