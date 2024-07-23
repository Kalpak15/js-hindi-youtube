
// var c=10

if (true){
    let a=20
    const b=30
    var c=40
    console.log("inner scope is",b);

}
// console.log(a);   //a and b are scope variable hence andar jo lika hai vo bahar available nahi hai
// console.log(b);
console.log(c);     //var outside mai bhi accessable hia kuyki vo scopre variable nahi hai 


//first example
function one(){                //outside function cannot use inside function variable
    const username="kalpak"   
    function two(){            //inside function can use outside function variable
      const website="youtube"
      console.log(username)
        }

    // console.log(website)
    two()


}
one()



//second example
if(true){
    const username="kalpak"
    if(username==="kalpak"){
        const website=" youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)



//third exmple

//if we call function firstly then define it in this,it will not give error

console.log(add(5))
function add(num){
    return num+1
}

//if we call the function first and then define ,in the function expression it will give an error //isiko Hoisting kehte hai

addTwo(4)
const addTwo=function (num){    //declaring function as an expression
    return num+2
}
