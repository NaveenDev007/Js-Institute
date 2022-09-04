const unit= 140;

function calculateBill(unit){
if(unit<=50)
{return unit*0.5;}
else if (unit>50 && unit<=100)
{return unit*0.7}
else if (unit>100 && unit<=200)
{return unit*1.2}
else if (unit>200 && unit<=250)
{return unit*1.5}
else if (unit>250) 
{x=unit*1.5
 y=unit*0.2
return x+y}
}
console.log(calculateBill(unit));


