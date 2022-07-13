//1 


function multiplyNumbers(x, y) {
    console.log(x * y)
};
multiplyNumbers(7, 8);

//2

const multiplyFunction = function multiplyNumbers(x, y) {
    console.log(x * y)
};
multiplyNumbers(9, 3);

//3

const multiplyArrowFunction = (x, y) => {
    console.log(x * y)
};
multiplyArrowFunction (7, 5);

//4

function remainderNumbers (a, b) {
    console.log(a % b)
};
remainderNumbers(98, 3);

const remainderFunction = function remainderNumbers (a, b) {
    console.log(a % b)
};
remainderNumbers(77, 4);

const remainderArrowFunction = (a, b) => {
    console.log(a % b)
};
remainderNumbers(68, 5);