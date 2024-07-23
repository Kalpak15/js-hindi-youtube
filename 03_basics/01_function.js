function myname(){
    console.log("mouse");
}

myname()


function add(a,b){
    console.log(a+b);
}
// const result=add(4,6)
// console.log(result);

// function add(a,b){
//     return a+b
// }

const result=add(4,6)
console.log(typeof result);


function login(username="kalpak"){
       if (username===undefined){
             console.log("Please Enter the username.");
             return 
       }
    
           return `${username} just logged in into portel`
       
}

// console.log(login());

function cal(val1,val2,...num1){
    return num1
}
console.log(cal(100,200,300,400))




//if we want to pass object in function

const obj1={
    name:"kalpak",
    email:"k@11"

}

function fall(anyobject){
    console.log(`The username is ${anyobject.name} and the email is ${anyobject.email}`)
}

// fall(obj1)
fall({
    name:"harry",                 //we can also pass object in this way
    email:'harry@12'
})


//passing array in the function

const array=[1,34,56,23,6,8]
function returnarray(getarray){
    return getarray[2]
}

// console.log(returnarray(array))
console.log(returnarray([12,34,6,7,8]))