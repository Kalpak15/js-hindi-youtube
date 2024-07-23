//for 

for(i=1;i<=10;i++){
    // console.log(i)
}

array=[2,3,4,5,2]
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best Number");
    }

    // console.log(element)
    
}
// console.log(element);


for (let i = 1; i <=10 ; i++) {
    //   console.log(`Outer loop value ${i}`);
    for (let j = 1; j <=10; j++) {
    //   console.log(`inner loop is ${j}`)
        //  console.log(`${i} * ${j}=${i*j}`)
    }
    
}

// break keyword (it is used to going out of loop )
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 Detected")
        break;
    }
    
    console.log(` ${element} `);
    
}

//continue   (it is used to skip )
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){                    //here we give condition on 5 .so the continue will skip the 5
        console.log("5 Detected")
        continue;
    }
    
    console.log(` ${element} `);
    
}
