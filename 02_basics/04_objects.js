// const tinderuser=new Object()
const tinderuser={}

tinderuser.name="lalit"
tinderuser.id=12
tinderuser.isloggedIn=false

console.log(tinderuser)


const regularuser={
       email:"jjack@12",
       fullname:{
            username:{
                 firstname:"kalpak",
                 lastname:"kulkarni"
            }
       }
}
console.log(regularuser);

// console.log(regularuser.fullname.username);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3=Object.assign({},obj1,obj2,obj4)   first argument is of target where the different sources we put
const obj3={...obj1,...obj2,...obj4}         //90% hum ye syntax use karenge
console.log(obj3);


console.log(tinderuser)

console.log(Object.keys(tinderuser))     //both return array . ye sab detabaase se values jab ayegi tab hum 
console.log(Object.values(tinderuser))   //   ispe loop lagake isses value fetch kar sakte hai
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty("isloggedIn"))
                                 
const user=[
    {

    },
    {

    },
    {
        
    }
]


const course={
     name:"kalpak",
     cousename:"it",
     courseteacher:"harry"
}

// console.log(course.courseteacher)

// This is know as object Destruction
const {courseteacher}=course
console.log(courseteacher);
