//array
/* const myMobile=['realme', '9 prime', '16px', '50px', 25000, '8gb', ['green', 'blue', 'black']];
console.log(myMobile);
 */
//object
//key:value
const mobileObj = 
{brandname:'realme',
modelname:'9 pro plus', 
frontcamera:'16px', 
backcamera:'50px', 
cost:25000, 
ram:'8gb', 
colorvariants:['green', 'black', 'blue']};
console.log(mobileObj)
//-------------------------------------------------------

//dot Notation
console.log(mobileObj.frontcamera);
console.log(mobileObj.backcamera);
console.log(mobileObj.brandname);
//-------------------------------------------------------

//bracket notation
/* console.log(mobileObj['frontcamera']);

const val='front'
console.log(mobileObj[val+'camera']);// I can put expression inside the brackets
const specs = prompt("what specificatios do u wanna know? ")
if(mobileObj[specs]) 
{console.log(mobileObj[specs])}
else
{console.log("enter correct specs name")} */

/* mobileObj.displaysize='6 inch';//dot notation
mobileObj['memory']='24 GB';//bracket notation
console.log(mobileObj);
 */
const naga=
{name:'naga',
state:'tamilnadu',
district:'coimbatore',
pinno:'641004',
byear:1998,
wearGlass:true,
frienda:['x', 'y','z'],
calculateAge:function (byear)
{return 2022-byear}
}
console.log(naga);
//function expression
/* const calculateAge=function (byear)
{return 2022-byear} */
console.log(naga.calculateAge(2008));
console.log(naga['calculateAge'](2008));
//---------------------------------------------

//leap year function
function leap(y){
if ((y%4===0 && y%100!=0) || (y% 400==0))
{console.log('leap year');}
else
{console.log('not a leap year')}
}

console.log(leap(2000));
console.log(leap(2004));
console.log(leap(2007));
console.log(leap(2003));