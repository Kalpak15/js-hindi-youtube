// for of 

const arr=[1,2,3,2]

for (const val of arr) {            
    // console.log(val);
}




const greetings="Hello World!"
for (const greet of greetings) {
    if(greet==" "){
        continue
    }
    console.log(greet); 
}

const map=new Map()                 //map ko hum forof se iterate kar sakte hai
map.set("IN","India")
map.set("USA","United States Of Amer")
map.set("Rus","Russia")
map.set("IN","India")
console.log(map);


// map.forEach(val => {
//     console.log(val)
// });

// for (const val of map) {          hum map ko agar aise loop lagayenge toh vo array dega
//     console.log(val)
// }

for (const [key,value] of map) {          //map ke key aur value dono print karne ke liye hame aisa karna padega
    console.log(key+"-"+value);
}

const myobject={
    game1:"Valorent",
    game2:"NFS"
}

// for (const [key,value] of myobject) {
//     console.log(key,value);
// }

for (const [key,value] of myobject) {           //objects are not iterable by forof loop
    console.log(key,value);
}


