// singleton
// constructor
// Object.create


// object literal

const mysym=Symbol("key1")    //symbol ko define kiya hai

const jsuser={
    name:"kalpak",
    age:18,
    location:"palghar",
    "email1":"kalpak@1.com",
    [mysym]:"mykey1",            // symbol ko as key dalneka tarika
    email:"kalpak@123.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","Saturday"]

}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["email1"]);
console.log(jsuser[mysym])  
console.log(typeof jsuser[mysym])  //symbol to access karneka tarika

jsuser.email="madhu@12"
// Object.freeze(jsuser)      //email ko change karne se pehle hi hamne freez kar diya jsuser ko ab email change nahi hoga.
jsuser.email="madhukulkarni@12"

console.log(jsuser)


jsuser.greeting=function(){
    console.log("Hello World!");
}


jsuser.greetingTwo=function(){                    //Adding function in jsuser object.defining function in jsuser
    console.log(`Hello World! ${this.name}`);
}

console.log(jsuser.greeting);    //function execute nahi hua hai.sirf function ka reference aya hai
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo);
console.log(jsuser.greetingTwo());



