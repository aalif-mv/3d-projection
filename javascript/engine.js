const fps = 1000/30;
let then = 0;
let elapsed = 0;
let animation = null;
function mainLoop(now) {
    elapsed = now - then;
    let delta = elapsed;
    if (elapsed >= fps) {
        then = now;
        loop(delta);
    }
    animation = requestAnimationFrame(mainLoop);
}

function start() {
    animation = requestAnimationFrame(mainLoop);
}

function stop() {
    setTimeout(() => {cancelAnimationFrame(animation);},
    0)
}
