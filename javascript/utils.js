function toRadians(angle) {
    return angle * (Math.PI / 180);
}
function toDegrees(angle) {
    return angle * (180 / Math.PI);
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}