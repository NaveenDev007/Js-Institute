//Statement & Expression
11
11+9584725 

/* const myName="naveen";
console.log(`my name is ${11+9584725}`); *///here inside template literals we can use only expressions.

true && false

if(11>10)
{const text= "11 is larger then 10"};
//-----------------------------------------------------------------

//Array

const friendOne  ="nandha";
const friendTwo  ="Bhasith";
const friendThree="hari";
const friendFour ="Raja";
const friendFive ="vasu";

const myFriends=
['nan', 'Bha','ha','Raj','va']//data structure array

/* console.log(myFriends);
console.log(myFriends.length);
console.log(myFriends[3]);
console.log(myFriends[myFriends.length-1]); *///last element of m array

myFriends[3]="bilal"
/* console.log(myFriends); */

myArr=['naveen', 5, myFriends];// string number array 
/* console.log(myArr) */

const myMarks = [90, 80, 95, 85, 70];
/* console.log(myMarks); */
//-----------------------------------------------------------------

//array method

const cars=['ford', 'audi', 'grand masthani', 'bugatti']


cars.push('ferrari')//push-add element to the end of my array
const newCars=cars.push('BMW')//returns the length of
/* console.log(cars); */
console.log(newCars);

cars.unshift('Tesla');//unshift-add element to the beginning of my array
console.log(cars)

cars.pop();//pop-delete element from the end of my aray
console.log(cars);

cars.shift();//pop-delete element from the beginning of my aray
console.log(cars);

cars.push("ferrari");
cars.push("ferrar");
cars.push("ferra");
console.log(cars);

cars.splice(4, 1);
console.log(cars);
cars.splice(3, 2);
console.log(cars);

const details = cars.includes('TATA');
console.log(details);

const popElement = cars.pop();
console.log(popElement)
console.log(cars)





