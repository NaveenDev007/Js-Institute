//color picker
const colors=['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

const h1=document.querySelector('h1')
const container=document.querySelector('.container');


const changeColor=function()
{
console.log(this);    
h1.style.color=this.style.backgroundColor;
};
  
for (let color of colors)
{
const colorbox=document.createElement('div');
colorbox.style.backgroundColor= color;
colorbox.classList.add("box")
container.appendChild(colorbox);
colorbox.addEventListener("click", changeColor);
}
