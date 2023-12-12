const num=[1,2,3,4,5];
const square =(x)=>x*x;
const sum =(accumulator,current)=>accumulator +current;
const squaredNumbers = num.map(square);
const res = squaredNumbers.reduce(sum,0);
console.log(res);