interface IPoint {
    x: number;
    y: number;  
}


export class Point implements IPoint {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    distance( b: IPoint) {
        return Math.hypot(this.x - b.x, this.y - b.y)
    }
}
