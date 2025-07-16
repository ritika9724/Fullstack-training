// let arr=[1,2,3,4,5,6,7,8,"Ritika",true,undefine];
// let arr=[1,2,3,4,5,6,7,8,];


// for(i=0;i<arr.length;i++){
//     console.log(arr[i]*2)
// }

// let out = arr.map((ele,index)=>{
// console.log(index,ele)
// return ele**2
// }).filter((ele,index)=>{
//     return ele%2==0
// }).map((ele,index)=>{
//     return ele*0.5
// })
//  console.log(out)

// let forEachout = arr.forEach((ele,index)=>{
// console.log(ele,index)
// });

// let filterout = arr.filter((ele,index)=>{
 // return typeof(ele)=="string";
// return index%2==1;
//  });
//  console.log(filterout)


// let reduceout=arr.reduce((acc,current)=>{
// return acc+current
// },10);
// console.log(reduceout)



//  let arr=[1,2,3,4,5,"Riya"];

// let out=arr.map((index)=>{
//     return index *2
// })
// console.log(out)

// let filterout =arr.filter((index)=>{
   
//      return typeof(index)=="string";
// })
// console.log(filterout)

// let forEachout=arr.forEach((index)=>{
//  console.log(index)
// })

// let reduceout=arr.reduce((acc,current)=>{
//     return(acc+current)
// })
// console.log(reduceout)



// let out=arr.map((index,ele)=>{
//     return ele**2
// }).filter((index,ele)=>{
//     return ele%2==0
// }).map((index,ele)=>{
//     return ele/2
// })
// console.log(out)







let form= document.getElementById("form");

form.addEventListener("submit",(event)=> {
    event.preventDefault();
    // console.log ("RBIENT")
   
 
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
// console.log (typeof(pasword))
let confirmPassword = document.getElementById("confirmPassword").value;
// let psw=password.tostring()

if(password.length<6)
    return  alert('Password must be 6 character')
if(pasword!==confirmPassword){
    return alert("password do not match")
}
let obj={
    username , email , password , confirmPassword
}
// console.log(obj)


let userData=document.getElementById("userData");
userData.style.width="30%"
userData.style.margin="auto"
userData.style.padding="10px"
userData.style.border="1px`solid lightgreen"
userData.style.borderRadius="8px"
userData.style.textAlign="center"
userData.style.marginTop="10px"

let h2=document.createElement("h2");
h2.innerText=obj.username;


let p1=document.createElement("p");
p1.innerText=obj.email;

let p2=document.createElement("p");
p1.innerText=obj.password;

let p3=document.createElement("p");
p1.innerText=obj.confirmPassword;

userData.append(h2 , p1 , p2, p3)



})
  

