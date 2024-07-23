let name="kal@123"     //primitive (Stack)

let name1=name

name1="kulkarni@12"

console.log(name);
console.log(name1);

let user={             //non primitive (Heap)
    email:"user@123",
    upi:"upi@12"
}

let user2=user

user2.email="users@34"

console.log(user2);
console.log(user);