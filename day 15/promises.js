/* const navWillGetIphone=new Promise 
((reslove, reject)=>
{setTimeout(()=>
    {
    const num=Math.random();
 console.log(num)
 if(num>0.9){reslove();}
 else{reject();}
}, 5000)
 
})

//if oue promis is resolved then u go inside"then" 
navWillGetphone.then
(()=>{
    console.log("nav got a Iphone")
})

//if oue promis is rejected then u go inside"catch" 
navWillGetphone.catch
(()=>{
    console.log("nav will get the Iphone later")
}) */
//---------------------------------------------------

const partyForAll=()=>{
return new Promise 
((reslove, reject)=>
{setTimeout(()=>
    {
    const num=Math.random();
 console.log(num)
 if(num>0.9){reslove({positive:'got it'});}
 else{reject({status:"sad"});}
}, 1000)
 
});
}

/* partyForAll().then(()=>{
 console.log("nav get a Iphone")   
})
.catch((res)=>{
    console.log(res.status);
    console.log("nav will get the Iphone later")
}) */

visitWeb().then((response)=>{
    console.log("found the page")
    console.log(response.positive)
   })
   
   .catch((res)=>{
       console.log(res.status);
       console.log("could not found the page")
   })
