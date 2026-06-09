const name="rohit"
const repoCount=3
console.log(name+ repoCount+ "value")//
console.log(`Hello my name is ${name} and my rep count is ${repoCount}`)
const gameName= new String('rohit-hc')
console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(5))
console.log(gameName.indexOf('i'))

//console.log(gameName)

const newSring=gameName.substring(0,4)
// start se start hota hai aur end se 1 pehle khatam ho jata hai

console.log(newSring)

const anotherString=gameName.slice(-7,4)
console.log(anotherString)

newString1="       Rohit  kumar       "
console.log(newString1)
console.log(newString1.trim())

const url="http://rohit.com/rohit%20kumar"
    console.log(url.replace('%20','-'))

console.log(url)

console.log(url.includes('rohit'))

console.log(url.split('/'))