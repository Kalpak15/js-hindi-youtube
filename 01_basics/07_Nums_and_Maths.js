const score=400
const score1=new Number(100)    //Number object
console.log(score1)
console.log(score);

console.log(score1.toString())
console.log(score1.toString().length);
console.log(score1.toFixed(2));
console.log(score.toFixed(3));
console.log(score)
const othernumber=123.8966

console.log(othernumber.toPrecision(3));
console.log(othernumber.toPrecision(2));
console.log(othernumber.toPrecision(4));

const hundred=1000000

console.log(hundred.toLocaleString());     //american stndard way of representation
console.log(hundred.toLocaleString('en-IN'));  //indian stndard way of representation

console.log(Math)
console.log(Math.random())
console.log(Math.round(4.7))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.1))
console.log(Math.floor(4.9))
console.log(Math.abs(-8))
console.log(Math.max(9,2,33,4))
console.log(Math.min(9,2,33,4))
console.log(Math.sqrt(3))

console.log((Math.random()*10)+1)


min=10
max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)



