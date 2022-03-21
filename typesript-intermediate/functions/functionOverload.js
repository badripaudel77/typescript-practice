function shapeArea(length, breadth) {
    if (breadth) {
        return (length * breadth);
    }
    else {
        return (length * length);
    }
}
console.log("shapeArea(3) : " + shapeArea(3));
console.log("shapeArea(3, 4) : " + shapeArea(3, 4));
