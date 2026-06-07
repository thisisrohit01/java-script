/*
# Two types of data types
   Primitive & Non Primitive(Reference)

 *Primitive
    number,Bigint,string,boolean,Symbol,null,undefined

  *Non-Primitive(Reference)
    Array,Object,Functions

    Java script is a dynamically typed language as the type checking occurs while the code running instead of
     compiling time
     this gives flexibility of using variable but also slows down the program as type checking occurs
     on the go .
*/
let isLoggedin=false
const outsideTemp=null
let  temp;
// const name; =>const data types can not be left empty
const name=undefined


const id1=Symbol('123')
const id2=Symbol('123')

console.log(id1)
console.log(id2)
console.log(id1 == id2)
console.log(typeof id1)

//array
const heros=["shaktiman","hero","veer","bheem","raju"];
console.table(heros)

//object
let mySpecs={
    name:"Rohit",
    age:24,
    height:173,
}
console.table({mySpecs});

//function

const myFunction=function(){
    console.log("Hello World!")
}
myFunction();
