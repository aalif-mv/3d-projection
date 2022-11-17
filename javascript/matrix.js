class Matrix {
    constructor(row = 2, column = 2, dat = undefined) {
        this.row = row;
        this.column = column;
        this.data = dat;
        if (this.data == undefined) {
            this.data = [];
            this.data.length = row;
            Object.defineProperty(this.data, 'length', {writable:false});
            for (let i = 0; i < this.data.length; i++) {
                const col = new Array(this.column); for (let i=0; i<this.column; ++i) col[i] = 0;;
                Object.defineProperty(col, 'length', {writable:false});
                this.data[i] = col;
            }
        }
    }
    addScaler(s) {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                this.data[r][c] += s;
            }
        }
    }
    minusScaler(s) {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                this.data[r][c] -= s;
            }
        }
    }
    multiplyScaler(s) {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                this.data[r][c] *= s;
            }
        }
    }
    divideScaler(s) {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                this.data[r][c] /= s;
            }
        }
    }
    add(m) {
        if (m.row === this.row && m.column === this.column) {
            for (let r = 0; r < this.row; r++) {
                for (let c = 0; c < this.column; c++) {
                    this.data[r][c] += m.data[r][c];
                }
            }
        } else {
            throw new Error('Can only add two matrices with same number of rows and columns');
        }
    }
    minus(m) {
        if (m.row === this.row && m.column === this.column) {
            for (let r = 0; r < this.row; r++) {
                for (let c = 0; c < this.column; c++) {
                    this.data[r][c] -= m.data[r][c];
                }
            }
        } else {
            throw new Error('Can only minus two matrices with same number of rows and columns');
        }
    }
    static multiply(m1, m2) {
        let mat = new Matrix(m1.row, m2.column);
        if (m1.column == m2.row) {
            for (let r = 0; r < mat.row; r++) {
                let row = m1.data[r];
                for (let c = 0; c < mat.column; c++) {
                    let product = 0;
                    for (let i = 0; i < m2.row; i++) {
                        product += (row[i] * m2.data[i][c]);
                    }
                    mat.data[r][c] = product;
                }
            }
            return mat;
        } else {
            throw new Error('Can only multiply if the number of columns in the first matrix MUST be the same as the number of rows in the second matrix. The answer, or resultant matrix, should have the same number of rows as the first matrix and the same number of columns as the second matrix.');
        }
    }
}