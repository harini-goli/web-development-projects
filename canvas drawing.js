const palette = document.querySelector('input')
const canvas = document.querySelector('canvas');
const brush = canvas.getContext('2d');

brush.fillStyle = '#fff';
brush.fillRect(0, 0, 600, 400);

let draw = false;

function render() {

		function printCircle(event) {
			if (draw) {
				let x = event.pageX - canvas.offsetLeft;
				let y = event.pageY - canvas.offsetTop;
				let radius = 10;		
				brush.fillStyle = palette.value;
				brush.beginPath();
				brush.arc(x, y, radius, 0, 2 * 3.14);
				brush.fill();
			}
		}
	
    function enableDraw() {
        draw = true;
    }

    function disableDraw() {
        draw = false;
    }
		
		canvas.onmousemove = printCircle;
    canvas.onmousedown = enableDraw;
    canvas.onmouseup = disableDraw;
}

render();

