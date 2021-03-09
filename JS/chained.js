function chain(fns) {
    
}

const sum = (x, y) => x + y;
const double = x => sum(x,x);
const minus = (x, y) => x - y;
const addOne = x => x + 1;

console.log(double(sum(2, 3)));
