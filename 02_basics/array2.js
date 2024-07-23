const heros1=["thor","ironman","spiderman"]
const heros2=["superman","flash","batman"]
// heros1.push(heros2)   //method to add heros2 in heros1 (heros2 array is add as an whole element)

// console.log(heros1);
// console.log(heros1[3][2]);

const newarr=heros1.concat(heros2)   //method to add heros2 in heros1 (heros2 arrys is not add as whole element it elemts add)
// console.log(newarr);


const newheros=[...heros1,...heros2]  //another method to add teo arrays   //... is ko spread operator kehte hai
// console.log(newheros);

const all_array=[1,2,3,[3,4,5],6,7,[1,2,[3,4,[8,9]]]]
console.log(all_array.flat(Infinity))


console.log(Array.isArray("kalpak"))
console.log(Array.from("kalpak"))   
console.log(Array.from({name:"kalpak"}));  //it will give an empty array .kyuki ye define nahi kar pa raha hai

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));