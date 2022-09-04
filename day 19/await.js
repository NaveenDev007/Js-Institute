/* async function userInfo()
{const response = await axios.get("")
 console.log(response.data)}//this line only runs when the previous line is completed, basically when the 
 userInfo()
 */

 /* function userInfo()
 {return axios.get("")}
 userInfo().then((response)=>
 {console.log(response)})
 */

 //==================================================

 //error handeling
 async function userInfo()
{const response = await axios.get("https://daaz.com/buy/domains/Rees.in")
 console.log(response.data)}//this line only runs when the previous line is completed, basically when the 
 userInfo().catch ((error)=>{
console.log(error)
console.log("I am inside catch")
 })
 async function userInfo(){
 try
 {const response=await axios.get ("https://daaz.com/buy/domains/Rees.in")
console.log(response.data);}catch(error)
{console.log("inside catch getting error",error)}
}
 userInfo()