
let choices=document.querySelectorAll(".rps")
let start=document.getElementById("playgame");
let ucount=document.getElementById("userCount")
let ccount=document.getElementById("compCount")
let clr=document.getElementById("btn")
  let  uc=0;
   let cc=0;
   clr.addEventListener("click",function(){
    ucount.innerHTML=0;
    ccount.innerHTML=0;
   })
function comp(){
 const arr=['scissor','paper','rock']
let com=Math.floor(Math.random()*3)
console.log(com)
return arr[com];

}
function showwinner(userwin,uch,cch){
    if(userwin===true){
        start.innerHTML=`you win ${uch} over ${cch}`
        start.style.backgroundColor="#1e9e35fa"
    }
    else {
        start.innerHTML=` you lose  ${uch} over ${cch}`
        start.style.backgroundColor=" #dc1515f5"
    }
}
function playgame(uchoice){
    let userwin=true;
    let cchoice=comp();
    if(cchoice===uchoice){
    console.log("draw game")
    start.innerText("game draw")}
    else{
        if(uchoice ==="scissor" && cchoice==="paper" ||
         uchoice==="paper" && cchoice==="rock" || 
        uchoice==="rock" && cchoice=="scissor"){
            uc++;
            userwin=true;
            console.log("u win")}
            else{
                userwin=false;
            console.log("u loose")
            cc++;
            }
            showwinner(userwin,uchoice,cchoice)
   
    }
    ucount.innerText = `${uc}`;
            ccount.innerText = `${cc}`;

}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let uchoice=choice.getAttribute("id");
    playgame(uchoice)})
})