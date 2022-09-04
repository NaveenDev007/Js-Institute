//function
/* const myName="naveen";
console.log(`My name is ${myName}`);
console.log(`My name is ${myName}`);
console.log(`My name is ${myName}`);
console.log(`My name is ${myName}`);
console.log(`My name is ${myName}`);
console.log(`My name is ${myName}`);
console.log(`My name is ${myName}`); */
//DRY - Do not Repeat Yourself
//function - a piece of code that we can reuse

/* function namePrinting()

{console.log(`My name is Naveen`);}
 */
 /* function myFriend()
 {console.log(`I am good at drawing`);}

//Calling or invoking the function
myFriend();
myFriend();
myFriend();
myFriend();
myFriend(); */

function myStudents(girls, Boys)
{//line of code
    const students=`I have ${girls} female students and ${Boys} male students in my sestion`
//returning me the text //I have 50 female students and 60 male students in my sestion
return students; }

//called the function 3 times
const may26=myStudents(50,60);
console.log(may26);

const may25=myStudents(40,90);
console.log(may25);

const may24=myStudents(500,68);
console.log(may24);
//----------------------------------------------------------------

//function declaration

function claculateAge(birthYear, name)
{console.log(`${name} was born in ${birthYear}`);
return 2022-birthYear;}

const age=claculateAge(1998, 'naveen');
console.log(age);
//----------------------------------------------

//function expression

const agethree= calculateAgeExp(1589, 'hasd');
console.log(agethree);

const calculateAgeExp = function(birthYear, name)
{console.log(`${name} was born in ${birthYear}`);
return 2022-birthYear;}
//---------------------------------------------

//arrow function

//=>fat arrow

/* const val=() => {}; */
/* const calculateAgeAro = birthYear => 2022 - birthYear;
console.log(calculateAgeAro(1995));

console.log("---------------------");
 */
const beforeIRetire=(birthYear)=>
{
const myAge=2022-birthYear;
const retire=60-myAge;
return retire;
}
console.log(beforeIRetire(1993));



