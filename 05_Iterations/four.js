const myObject={
    js:"javascript",
    py:"python",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {    //to print the keys of object we use forin loop
   console.log(key);
  
}
for (const key in myObject) {              
//    console.log(key,myObject[key]);            //to print keys and value of the object
    
}

const arr=["js","cpp","java","python"]
for (const key in arr) {                     
//   console.log(key);                        //This will give the indexs of elements as an output
}

const arr2=["js","cpp","java","python"]
for (const key in arr2) {                     
//   console.log(arr2[key]);                        //now This will give the array elements as an output
}


// const map=new Map()                 
// map.set("IN","India")
// map.set("USA","United States Of Amer")
// map.set("Rus","Russia")
// map.set("IN","India")

// for (const key in map) {
//     console.log(key);           //ye koi bhi output nahi dega .because maps are not iterable
// }