function addTwo (a, b) { return a+b }

const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);
// x=10 y=3 (display 13)

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) 
// a=30 b=1 (display 31)

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5) // a=5
add5(12) // b=12
// a+b=17

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // return 16
// g(a)=add5(10)=10+5=15
// f(g(a))=add1(15)=15+1=16 

