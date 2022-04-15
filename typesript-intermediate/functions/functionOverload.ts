export {}
// function overloading

function shapeArea(length: number): number;

function shapeArea(length: number, breadth: number): number;

function shapeArea(length: number, breadth?: number): number {
    if (breadth) {
        return (length * breadth);
    }
    else {
        return (length * length);
    }
}

console.log("shapeArea(3) : " + shapeArea(3));
console.log("shapeArea(3, 4) : " + shapeArea(3, 4));
