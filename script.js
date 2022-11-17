const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth - 40;
canvas.height = document.documentElement.clientHeight - 160;

window.addEventListener('resize', () => {
    canvas.width = document.documentElement.clientWidth - 40;
    canvas.height = document.documentElement.clientHeight - 160;
});

let wireWidth = 1;
let wireColor = '';
let pointRadius = 4;
let pointColor = '';

let wireFrame = 'rect';
let points = true;
let perspective = true;

const cube = new Cube();

let cameraDistance = 2;


// angles less than 180

cube.rotationX = rotation3X(3);
cube.rotationY = rotation3Y(5);
cube.rotationZ = rotation3Z(3);

setInterval(() => {
    cube.rotationX = rotation3X(random(0.3, 4));
    cube.rotationY = rotation3Y(random(0.3, 4));
    cube.rotationZ = rotation3Z(random(0.3, 4));
}, 1000)


let projectionMatrix = orthographicProjectionMatrix();


// pos.data[0][0] = 200;
// pos.data[1][0] = 50;

// rotation.data = rotation2d(toRadians(2));
let scale = 200;
loop = function(delta) {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let projMap = [];
    ctx.fillStyle = pointColor;
    ctx.lineWidth = 0;
    for (let i = 0; i < cube.vertices.length; i++) {
        ctx.beginPath();
        cube.vertices[i] = Matrix.multiply(cube.rotationX, cube.vertices[i]);
        cube.vertices[i] = Matrix.multiply(cube.rotationY, cube.vertices[i]);
        cube.vertices[i] = Matrix.multiply(cube.rotationZ, cube.vertices[i]);
        if (perspective) {
            projectionMatrix = perspectiveProjectionMatrix(cameraDistance, cube.vertices[i].data[2][0], projectionMatrix);
        }
        cube.normalize();
        let proj = Matrix.multiply(projectionMatrix, cube.vertices[i]);
        projMap.push(proj.data);
        if (points) {
            ctx.arc((proj.data[0][0])*scale + canvas.width/2, (proj.data[1][0])*scale + canvas.height/2, pointRadius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    if (wireFrame != null) {
        ctx.lineWidth = wireWidth;
        ctx.strokeStyle = wireColor;
        for (let i = 0; i < cube.edges.length; i++) {
            ctx.beginPath();
            ctx.moveTo((projMap[cube.edges[i][0]][0][0])*scale + canvas.width/2, (projMap[cube.edges[i][0]][1][0])*scale + canvas.height/2);
            ctx.lineTo((projMap[cube.edges[i][1]][0][0])*scale + canvas.width/2, (projMap[cube.edges[i][1]][1][0])*scale + canvas.height/2);
            ctx.lineTo((projMap[cube.edges[i][2]][0][0])*scale + canvas.width/2, (projMap[cube.edges[i][2]][1][0])*scale + canvas.height/2);
            ctx.stroke();
        }
    }
}

start();