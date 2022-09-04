 var mstr = "Hello World";
mstr.trim();
console.log(mstr); 

//for loop

 for (let i=5; i>0; i--)
{console.log(i)} 
//-------------------------------------

//while loop
 let j=0;
while (j<10)
{ if(j==2) {j+=1;
continue;}
console.log(j); j+=1;} 

//-------------------------------------

//dowhile loop
let k=1;
do{console.log(k); k++;}
while(k<5);
//-------------------------------------

//break & continue

let k=15;
do{console.log(k); 
if (k==18)break;k++;
}
while(k<30);
//--------------------------------------- 

//arry
let text=['x', 'z', 'y']
for(let i=0; i<text.length; i++)
console.log(text[i]); 
//---------------------------------------
//for in & for of

//for of
const cars=['ford', 'audi', 'grand masthani', 'bugatti'];
for (let i of cars)
{
console.log(i);}

//for in
const myCar =
{
make:'Ford',
model:'mutang',
year:1859
}
for (let i in myCar){
console.log(myCar[i])
}
//---------------------------------------------------

//foreach
const text=['ford', 'audi', 'grand masthani', 'bugatti'];
text.forEach(function (index, element, array)
{console.log(index, element, array);})
