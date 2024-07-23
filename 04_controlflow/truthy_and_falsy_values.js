const user="kalpak"

if(user){
    console.log("THis is user")
}
const user1=[]

if(user1){
    console.log("THis is user1")
}


//falsy values
//  false , 0 , -0 , BigInt , "" , null , undefined , NaN

//truty values
// "0" , 'false' , " " , [] , {} , function(){}


// if(user1.length===0){                          //to detect array is empty
//     console.log("Array is Empty");
// }

const emptyObj={}                              //to detect object is empty

if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}



//Nullish Coalescing Operator (??): null undefined inhi datatypes keliye bana hai ye operator

let val1;  
// val1= 5 ?? 10             //sabse pehli value assign hogi
// val1=null ?? 10           //yahape dusri value assign hogi        
// val1=undefined ?? 11         //yahapebhi dusri value assign hogi
// val1=null ?? undefined
// val1=undefined ?? null
val1=null ?? 10 ?? 20
console.log(val1)


//Ternary operator  ?

//condition ? true : false


const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("It Is less than 80") : console.log("It is greater than 80");