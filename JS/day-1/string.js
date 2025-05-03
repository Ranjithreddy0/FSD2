let name="reddy";
console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

console.log(name[2]);

console.log(name.substring(0,4));

console.log(name.slice(2,4));

console.log(name.slice(3,0));

let firstname="ranjith";
let lastname="reddy";
console.log(firstname.concat(" " ,lastname));
console.log(firstname+" "+lastname);

let about="ranjith reddy is a good boy";
console.log(about.split(""));
console.log(about.split(" "));


let a="java:python:css:html";
console.log(a.split(":"));



let b="ranjith reddy";
console.log(b.substring(0,1).toUpperCase() +b.substring(1,b.length +1) )


let aa="     ranjith reddy       ";
console.log(aa.trim());


let bb="ranjith reddy";
console.log(bb.indexOf("h"));
console.log(bb.lastIndexOf("d"));
console.log(bb.includes("dd"));
console.log(bb.includes("yd"));
console.log(bb.charAt(4));