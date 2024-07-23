let mydate=new Date()

// console.log(mydate);
// console.log(  mydate.toDateString());
// console.log( typeof mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString())
// console.log(mydate.toTimeString());
// console.log(typeof mydate);

// let myCreatedDate=new Date(2023,0,23)
let myCreatedDate=new Date(2023,0,23,5,3)
// let myCreatedDate=new Date("2023-01-14")  //yy-mm-dd
// let myCreatedDate=new Date("01-14-2023")      //mm-dd-yy
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()    //this will give time in smilisecond from 1970 jan1 idnite

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());   //time in miliseconds

console.log(Math.floor(Date.now()/1000));   // to convert time into seconds


let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.getFullYear())



newDate.toLocaleString('default',{
    weekday:"long"
})