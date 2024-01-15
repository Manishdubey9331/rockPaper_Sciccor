
let choices=document.querySelectorAll(".rps")
let start=document.getElementById("playgame");
let ucount=document.getElementById("userCount")
let ccount=document.getElementById("compCount")
let clr=document.getElementById("btn")
  let  uc=0;
   let cc=0;
   function clrs(){
    uc=0;
    cc=0;
    ucount.innerHTML=   `${uc}`;
    ccount.innerHTML=`${cc}`;
   }
   clr.addEventListener("click",clrs)
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
function draw(cchoice,uchoice){
    clrs()
    start.innerHTML=`game draw as ${uchoice} and ${cchoice} are same`
    start.style.backgroundColor="#cdde30";
}
function playgame(uchoice){
    let userwin=true;
    let cchoice=comp();
    if(cchoice===uchoice){
    console.log("draw game")
   draw(cchoice,uchoice)
        }
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
