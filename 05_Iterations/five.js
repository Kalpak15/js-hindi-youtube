const coding=["js","cpp","java","python"]


// coding==.forEach(function (val){   //forEach ke andar hum function likhte hai.vo callback function hota hai. isliye uska nam hum nahi likhte
//     console.log(val);            //aur val jo hai vo coding nam ke array se ek ek value nikal ke dega
// })


// coding.forEach( (val) => {          //forEach ke andar hum arrow function bhi likh sakte hai
//    console.log(val)
// })



// function PrintMe(item){
//     console.log(` The code of ${item}`);
// }
// coding.forEach(PrintMe)                    hum forEach loop ke andar aise bhi function pass kar sakte hai


// coding.forEach( (item,index,arr) =>{          // arrow function sirf item hi nahi aur bhi bahut kuch print kara sakta hai
//     console.log(item,index,arr);
// } )



const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"c-laguage",
        languageFileName:"c"
    }
]

myCoding.forEach((item)=>{               //aray ke andar jo objects ke form mai tha use humne fetch kiya using forEach loop
      console.log(item.languageName)
})