//promises chaining
//this is a page request function
//it will take 1 second to reslove or reject the promise
const pageRequest=(url)=>
{return new Promise((resolve , reject)=>
 {setTimeout(()=>{
     const pages={
'/users':[{id:1, username:'naveen'},
          {id:2, username:'babb'}],
 '/users/1':{id:'1', 
             username:'asha',
             city:'tittagudi',
             bestblogid:111},
 '/home':"this my homepage!",
 '/about':"this my about page"   
}
const data = pages[url];
if(data){resolve({status:100, data})}
else{reject({status:404})}
 },1000);
  })
}
pageRequest('/users')
.then((res)=>
{console.log('data of users',res.data)
 console.log('status',res.status)
 console.log('request success')})
 .catch((res)=>
 {console.log('status',res.status)
  console.log('request failure')})