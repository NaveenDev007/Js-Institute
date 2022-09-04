/* function myname()
{return "naveen"} */

async function myName ()
{return"naveen"}

myName().then((data)=>
{console.log("the promis is reslove", data)})

//add 2 no's
/* async function addition(a,c)
{return new Promise 
    ((resolve, reject)=>
    {if(typeof a!== 'number'||typeof c!== "number")
{reject('a and c should be number')}
resolve(a+c)
})
}
addition(11,111)
.then((data)=>{
console.log("promise is resolved", data)})
.catch((error)=>{
    console.log("promis is reject", error)
}) */

async function addition(a,c)
{if(typeof a!== 'number'||typeof c!== "number")
{throw 'a and c should be number'}
return a+c;}

addition(11,'of')
.then((data)=>{
console.log("promise is resolve", data)})
.catch((error)=>{
    console.log("promis is reject", error)
})