/* const ul=document.querySelector('ul')
ul.innerText
const form=document.querySelector('form')
form.textContent
 */
const li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
  li[i].innerText = "We are learning Dom";
}

for (let l of li) {
  // l.innerHTML = "We are learning <b>DOM<b>";
  l.innerText = "We are learning DOM";
}

function toggle() {
  let para=document.querySelector(".para3");
  if(para.style.dispaly !="none")//it is visible
  {para.style.dispaly="none";}
  else {para.style.display="block";}
  }

const para1=document.querySelector('.para1');
para1.addEventListener('mouseout', function hoverout(){console.log('mouseout')});

para1.addEventListener('mouseover', function hoverout(){console.log('mouseover')});