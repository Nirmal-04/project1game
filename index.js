var box=document.querySelector(".div2");
var box1=document.querySelector(".div1");
var box2=document.querySelector(".div3");
var box3=document.querySelector(".div4");
var logo=document.querySelector(".logo img");
console.log(logo);
console.log(box);
box.addEventListener("click",()=>{
    logo.setAttribute("src","image/bg4.png");
});
box1.addEventListener("click",()=>{
    logo.setAttribute("src","image/bg3.png");
});
box2.addEventListener("click",()=>{
    logo.setAttribute("src","image/bg5.png");
});
box3.addEventListener("click",()=>{
    logo.setAttribute("src","image/bg6.png");
});