let frog = document.querySelector('#picG');
let number = document.querySelector('.number');
let text = document.querySelector('.text');
let id;
let cur = 0;
let x = -400;
let dx = 3;
let direction = 1;

function step() {
    if (direction === 1) {
        switch (true) {
            case x <= -230: {
                dx += 0.03;
                break;
            }
            case x > -1: {
                dx = 0;
                x = 0;
                direction = -1;
                setTimeout('dx=-12', 5000);
                break;
            }
            case x > -230 && x <= -70: {
                dx -= 0.05;
                break;
            }
            case x > -70: {
                dx = 0.5;
                break;
            }
        }
    }
    if (direction === -1) {
        if (x < -399) {
            dx = 0;
            x = -400;
            setTimeout('dx=3; direction = 1;', 5000);
        }
    }
    x += dx;
    frog.style.left = x + 'px';

    if (number.style.opacity < 1) {
        cur += 0.005;
        number.setAttribute("style", "opacity:" + cur);
    } else if (!text.style.opacity) {
        text.setAttribute("style", "opacity: 1");
    }
    id = requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout('id = requestAnimationFrame(step);', 3000);
}, false);