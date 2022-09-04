let a= prompt('enter the first side')
let b= prompt('enter the second side')
let c= prompt('enter the third side')
if (a+b<=c||b+c<=a||c+a<=b||a==""||b==""||c=="")
{console.log("Invalid")}
else if ((a>0 && b>0 && c>0)&&(a==b && b==c && c==a))
{console.log("Equilateral triangle")}
else if ((a>0 && b>0 && c>0)&&(a==b || b==c || c==a))
{console.log("Isosceles triangle")}
else {console.log("Scalene triangle")};
