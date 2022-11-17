class Cube {
    constructor(pos) {
        this.vertices = cubeVertices();
        this.edges = cubeEdgesRect();
        this.scale = 10;

        this.rotationX = 0;
        this.rotationY = 0;

    }
    normalize() {
        for (let i = 0; i < this.vertices.length; i++) {
            let mag = Math.sqrt((this.vertices[i].data[0][0] ** 2)+(this.vertices[i].data[1][0] ** 2)+(this.vertices[i].data[2][0] ** 2))
            this.vertices[i].data[0][0] /= mag;
            this.vertices[i].data[1][0] /= mag;
            this.vertices[i].data[2][0] /= mag;
        }
    }
}