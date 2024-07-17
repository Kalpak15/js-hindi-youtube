const name="kalpak"
const repo=40
console.log(`The name is ${name} and the Total Repos are ${repo}`);

const gameName=new String("kalpa-kk")
console.log(gameName);

console.log(gameName[0])-
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("p"))

const games=gameName.slice(2,5)
console.log(games);

const anotherString=gameName.slice(-7,4)
console.log(anotherString);

const newString="  kalpak   "
console.log(newString);
console.log(newString.trim())

console.log(gameName.replace("p","l"));

console.log(gameName.includes("kalp"))

console.log(gameName.split("-"));
console.log(gameName.split("-",1));




