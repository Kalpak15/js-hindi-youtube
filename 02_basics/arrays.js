const myarr=[0,1,2,3,4]

const myarr1=["kalpak","lalit"]

const myarr2=new Array(0,11,12,31)

console.log(typeof myarr)
console.log(myarr2[1])

// myarr2.push(6)
// myarr2.push(7)
// myarr2.pop()

myarr2.unshift(2)   //unshift mai jo bhi number denge vo age lagega
myarr2.shift()     // shift main sabse pehla element delete jayega
console.log(myarr2);

console.log(myarr2.includes(9));
console.log(myarr2.indexOf(12))
console.log(myarr2.indexOf(9))


const newarr=myarr.join("+")
console.log(myarr)
console.log(newarr);
console.log(typeof newarr);


console.log(myarr);
// const newarr1=myarr.slice(1,3);
// console.log("A ",newarr1);

const newarr2=myarr.splice(1,3,4)
console.log(myarr)
console.log("B",newarr2)

// console.log(myarr)