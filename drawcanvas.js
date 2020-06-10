
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var BB = canvas.getBoundingClientRect();
        var offsetX = BB.left;
        var offsetY = BB.top;

        var lastX, lastY;
        var isDown = false;

        canvas.onmousedown = handleMousedown;
        canvas.onmousemove = handleMousemove;
        canvas.onmouseup = handleMouseup;


        function handleMousedown(e) {
            e.preventDefault();
            e.stopPropagation();
            lastX = e.clientX - offsetX;
            lastY = e.clientY - offsetY;
            isDown = true;
        }

        function handleMouseup(e) {
            e.preventDefault();
            e.stopPropagation();
            isDown = false;
        }

        function handleMousemove(e) {
            e.preventDefault();
            e.stopPropagation();

            if (!isDown) {
                return;
            }

            var mouseX = e.clientX - offsetX;
            var mouseY = e.clientY - offsetY;

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();

            lastX = mouseX;
            lastY = mouseY;
        }

    