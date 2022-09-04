const myName = window.prompt('Hi user pls enter your name');
console.log(`welcome ${myName}`);

const n=parseInt(promt('enter the number'));
if(n>0)
{console.log("positive")}
else if(n<0)
{console.log("positive")}
else
{console.log("zero")}
//---------------------------------------------

//WAP to check if a num is even or odd
const num = parseInt(prompt("enter the number"))
if (num%2===0)
{console.log("Even")}
else
{console.log("Odd")}
//----------------------------------------------

//8 5 11
//WAP to get the largest number among three nos.
const m1=parseInt(prompt("enter the first number"))
const m2=parseInt(prompt("enter the first number"))
const m3=parseInt(prompt("enter the first number"))
if (m1>m2 && m1>m3)
{l=m1;}
else if(m2>m1 && m2>m3)
{l=m2;}
else{l=m3;}

 console.log(l);
 //---------------------------------------------------

 //Math,max(n1,n2,n3)
 //WAP to print the area of the triangle 

 const base = parseInt(prompt("enter the base"))
 const height = parseInt(prompt("enter the height"))
 const area =(base+height)/2;
 console.log(area);

 const s1 = parseInt(prompt("enter the side"));
 const s2 = parseInt(prompt("enter the side"));
 const s3 = parseInt(prompt("enter the side"));

 const s=(s1+s2+s3)/2;
  
 const area1=math.sqrt(s*(s-s1)*(s-s2)*(s-s3))
 console.log(`area is ${area1}`)
//-----------------------------------------------------

 //WAP to convert C to F or F to c

const C=promt("enter a censius temperature. ")
const F=((C*1.8)+(32))
const F=promt("enter a censius temperature. ")
const C=((F-32)/(1.8))

console.log(C)