//string 
String.prototype.walk= function()
{return`wow ${this.toUpperCase()} can walk`}
 console.log('naveen'.walk())
 console.log('q'.walk())
 console.log('w'.walk())
 console.log('r'.walk())

 /* const arr=[4,5,6,7,0]
 console.log(arr.pop())
 console.log(arr) */

 const arr=[4,5,6,7,0]
 Array.prototype.pop= function()
 {return`sorry too busy can't pop right now`}
  console.log(arr.pop())

  Array.prototype.push= function()
 {return`not in a mood`}
  console.log(arr.push(15))
  console.log(arr)