const student=
{
fname: "Islam",
lname: "abdil",
nickName:"iska",
stuFullname()
{const {fname, lname, nickName}=this
return `my name is ${fname} ${lname} my nickname is ${nickName}`},
stuInfo()
{const info=this.stuFullname();
    console.log(`${info} my info`);}
};
student.stuInfo();