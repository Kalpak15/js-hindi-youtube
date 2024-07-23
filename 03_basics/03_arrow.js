const user ={
    username:"kalpak",
    price:"999",

    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);               //here this keyword referes to current context
    }
}



user.welcomeMessage()
user.username="mohan"
user.welcomeMessage()
console.log(this);                   //ye this bahar hai isliye iskeliye current context empty hai 


function chai(){
    let username="kalpak"
    console.log(this.username);         //agar hum function mai this ka istemal karenge to undefined ayega.hum this ka istemal 
    console.log(this);         //agar hum function mai this ka istemal karenge to undefined ayega.hum this ka istemal 
}                                        //objects mai hi karte hai
                                //agar hum sirf this likhenge to kuch aur ayega

chai()




// const chai= () =>{                //thi is arrow function .function defination ek aur tarika
//     let username="veer"
//     console.log(this.username);      //agar hum yaha bhi this ka istemal karenge to undefined ayega
//     console.log(this);              //agar hum sirf this likhenge to empty ayega {}
// }
// chai()

const addTwo= (num1,num2) =>{      //this is known as explicitly returned  yahape humne curly braces ka istemal kiya hai toh return likhna hi padega
      return num1+num2
}

console.log(addTwo(3,4));



const addTwo1= (num1,num2) => (num1+num2)  //agar ek line ka hai toh hu aise bhi likh sakte hai yahape curly braces ki jarurat nahi .return ikhne ki bhi jarurat nahi
console.log(addTwo(3,4));


const addTwo2 = (num1,num2) =>({username:"kalpak"})    //aise hum object bhi de sakte hai
console.log(addTwo2(3,4))