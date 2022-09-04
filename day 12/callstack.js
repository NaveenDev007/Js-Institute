
const multiply=(x,y)=>x*y;
const square=(x)=>
{
multiply(x,x)
}

const rightAngleTriangle=(a, b, c)=>
{
return square(a)+square(b)===square(c);
}
rightAngleTriangle(3, 4, 5);