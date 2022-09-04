//Fibonacci Series / Sequence

/* const num=parseInt (prompt('enter thr no of terms'))
let n1=0
let n2=1
let n3;

for (let i=1; i<=num; i++)
{
console.log(n1)
    n3=n1+n2;//1+1+2
 n1=n2;// assigning the value of n2, to the n1 variable
 n2=n3; 
} */
//---------------------------------------------------------

//selecting nodes
/* const grand=Array.from(document.getElementsByClassName("grandpa")); */
/* const par=Array.from(document.getElementsByClassName("parent")); */
/* const par1=parent[0] */
/* const grand=document.getElementById("grandpaid"); */

//grangpa
/* const grand=document.querySelectorAll(".grandpa");
 grand.forEach(color); 
function color(val)
{val.style.backgroundColor="green";}
color(grandpa); */

//parent
/* const par=document.querySelectorAll(".parent");
par.forEach(color);
function color(val)
{val.style.backgroundColor="yellow";}
color(parent); */

//child
/* const grand =document.querySelector(".grandpa");
const par=Array.from(grand.children);
const par1=parent[0];
const chil1=parent1.child;
 */
/* color(parent1)
//par.forEach(color);
function color(val)
{val.style.backgroundColor="yellow";} */
//=============================================

// select the child of parent

/* const grand =document.querySelector(".grandpa");
const chil =grand.querySelector(".child");
//chil.forEach(color);
color(chil)
function color(val)
{val.style.backgroundColor="yellow";} */
//-----------------------------------------------

//select the parent of chlid

/* const chil4 =document.querySelector("#child4");
const par4 =chil4.parentElement;
///chil.forEach(color);
color(par4);
function color(val)
{val.style.backgroundColor="yellow";} */
//================================================

//select the grandpa of chlid
//queryselectoe move 
/* const chil4 =document.querySelector("#child4");
const par4 =chil4.parentElement;
const grand =par4.parentElement;
//chil.forEach(color);
color(grand);
function color(val)
{val.style.backgroundColor="yellow";}  */
//-------------------------------------------------

//closest
/* const chil4 =document.querySelector("#child4");
const grand =chil4.closest("#grandpaid");
//chil.forEach(color);
color(grand);
function color(val)
{val.style.backgroundColor="yellow";}  */
//-------------------------------------------------

//select the sibilings
const par1=document.querySelector("#parent1");
const par2=par1.nextElementSibling;
//color(par2);
color(par2.previousElementSibling);
function color(val)
{val.style.backgroundColor="pink";}