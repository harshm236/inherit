//1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

/*let par = {
   __proto__:{ age:100 ,
    func: function() {
        console.log(this.age)
    }
}}
let chi = {
    age : 50,
}
chi.__proto__= par.__proto__
console.log(chi.func())*/

//2.Write code to explain prototype chaining

/*let a = [1,2,3]
a.__proto__.push= (x)=>{console.log(x+1)}*/

//3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays



/*let obj1 = [1,2,3,4]
Array.prototype.add = function() {
    let sum = 0
    for(let i of this)
    sum+=i

    return sum

}
console.log(obj1.add())*/

//4.Write a JavaScript function to retrieve all the names of object's own and inherited properties.

/*function key(m){
console.log(Object.keys(m))
}
let x = {a:5}
key(x)*/




