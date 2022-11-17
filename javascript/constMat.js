function rotation2d(ang, clockwise) {
    const data = [[],[]];
    data[0][0] = Math.cos(ang); data[0][1] = -Math.abs(Math.sin(ang));
    data[1][0] = Math.sin(ang); data[1][1] = Math.cos(ang);

    return data;
}

function cubeVertices() {
    let vertices = [
        new Matrix(4, 1, [[-1], [-1], [1], [1]]),
        new Matrix(4, 1, [[1], [-1], [1], [1]]),
        new Matrix(4, 1, [[1], [1], [1], [1]]),
        new Matrix(4, 1, [[-1], [1], [1], [1]]),

        new Matrix(4, 1, [[-1], [-1], [-1], [1]]),
        new Matrix(4, 1, [[1], [-1], [-1], [1]]),
        new Matrix(4, 1, [[1], [1], [-1], [1]]),
        new Matrix(4, 1, [[-1], [1], [-1], [1]])
    ];
    return vertices
}

function cubeEdgesTri() {
    let edges = [
        [0, 1, 2],
        [0, 2, 3],

        [4, 0, 3],
        [4, 3, 7],

        [5, 4, 7],
        [5, 7, 6],

        [1, 5, 6],
        [1, 6, 2],

        [4, 5, 1],
        [4, 1, 0],

        [3, 2, 6],
        [3, 6, 7]
    ];
    return edges;
}

function cubeEdgesRect() {
    let edges = [
        [0, 1, 2],
        [0, 3, 2],

        [0, 4, 7],
        [3, 7, 6],

        [2, 6, 5],
        [1, 5, 4]
    ];
    return edges;
}

function rotation3X(a) {
    let ang = toRadians(a);
    let rotationX = new Matrix(4,4);
    rotationX.data[0][0] = 1;
    rotationX.data[1][1] = Math.cos(ang); rotationX.data[1][2] = -Math.abs(Math.sin(ang));
    rotationX.data[2][1] = Math.sin(ang); rotationX.data[2][2] = Math.cos(ang);
    rotationX.data[3][3] = 1;
    return rotationX
}

function rotation3Y(a) {
    let ang = toRadians(a);
    let rotationY = new Matrix(4,4);
    rotationY.data[0][0] = Math.cos(ang); rotationY.data[0][2] = Math.sin(ang); 
    rotationY.data[1][1] = 1;
    rotationY.data[2][0] = -Math.abs(Math.sin(ang)); rotationY.data[2][2] = Math.cos(ang);
    rotationY.data[3][3] = 1;
    return rotationY
}

function rotation3Z(a) {
    let ang = toRadians(a);
    let rotationZ = new Matrix(4,4);
    rotationZ.data[0][0] = Math.cos(ang); rotationZ.data[0][1] = -Math.abs(Math.sin(ang));
    rotationZ.data[1][0] = Math.sin(ang); rotationZ.data[1][1] = Math.cos(ang);
    rotationZ.data[2][2] = 1;
    rotationZ.data[3][3] = 1;
    return rotationZ
}

function orthographicProjectionMatrix() {
    let ortProjMatrix = new Matrix(4,4);
    ortProjMatrix.data[0][0] = 1;
    ortProjMatrix.data[1][1] = 1;
    ortProjMatrix.data[3][3] = 1;
    return ortProjMatrix;
}

function perspectiveProjectionMatrix(d, r, m = undefined) {
    let perProjMatrix = m;
    if (m == undefined) {
        perProjMatrix = new Matrix(4,4);
    }
    perProjMatrix.data[0][0] = 1 / (d - r);
    perProjMatrix.data[1][1] = 1 / (d - r);
    perProjMatrix.data[3][3] = 1;
    return perProjMatrix;
}
