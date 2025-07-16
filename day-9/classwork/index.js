// promise

// let a="anmol";

// console.log(a);

// setTimeout(()=>{
//     console.log("Delay of 2ms")
// },2000)

// console.log("console between 1ms and 2mns")

// setTimeout(()=>{
//     console.log("Delay of 1ms")
// },1000)


// setTimeout(()=>{
//     for(let i=1; i<5; i++){
//         console.log(i)
//     }
// })


const myPromise=async()=>{
//    const response = await fetch("https://fakestoreapi.in/api/products");
const response = await fetch("https://fakestoreapi.com/products");
    const res=await response.json()
    const data=res;
    showData(data)
// onsole.log(res.products)
}
myPromise()


async function showData(data){

    // console.log(data)

    data.forEach((ele,index)=>{
       // console.log(ele)
       const parent=document.getElementById("parent");
       const h2=document.createElement("h2");
       h2.innerText=ele.title;

       const image=document.createElement("img");
       image.src=ele.image;
       image.style.width="200px";
       image.style.height="200px";

       const p1=document.createElement("p");
       p1.innertext=ele.category;

          const p2=document.createElement("p");
       p2.innertext=ele.price;

          const p3=document.createElement("p");
       p3.innertext=`count:${ele.rating.count} rating; ${ele.rating.rate}`;

       const btn=document.createElement("button");
       btn.innerText="Add to cart";
       btn.style.padding="10px";
       btn.addEventListener("click",()=>{
         addToCart(ele)

       })
       function addToCart(ele){
         // console.log("add to cart")
         // console.log(ele)
         let cartArray= JSON.parse(localStorage.getItem("cartData"))||[];
         cartArray.push(ele)
         localStorage.setItem("cartdata",JSON.stringify(cartArray))
       }
       function cartpage(){
         window.location="cart.html"
       }
       

      //  function getDataFormStorage(){
      //    // let data=localStorage.getitem("cartData")
      //     let data=JSON.parse(localStorage.getitem("cartData"));
      //     console.log(data)
      //  }
      // getDataFormStorage()


          const p4=document.createElement("p");
       p4.innertext=ele.description;

       const productDiv=document.createElement("div");
     
       productDiv.style.border="3px solid red"; 
       productDiv.style.marginTop="6px";
       productDiv.style.marginLeft="4px";
       productDiv.style.marginRight="4px";
       productDiv.style.marginBottom="6px";
productDiv.style.textAlign="center";
      productDiv.append(h2, image, p1, p2, p3, p4);

      parent.append(productDiv)
    })
}
// const myPromise=async()=>{
//     const response = await fetch("https://fakestoreapi.com/products");

//     const res=await response.json()
// console.log(res)
// }
// myPromise()