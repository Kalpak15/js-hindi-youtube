const map=new Map()

map.set('IT',"kalpak")
map.set('COMP',"LALIT")
map.set('EXCS',"ARPIT")

for (const [key,val] of map) {
    // console.log(val)
}

const obj={
    name:"kalpak",
    branch:"IT",
    Course:"Comp"
}

for (const value in obj) {
//    console.log(value);
}

const myarr=["rohan","arpit","lalit","kalpak"]

for (const key in myarr) {
    //   console.log(myarr[key]);
}

for (const key in map) {
  console.log(key);
}