//your code here
const blockId=document.querySelector("#block_id");
const colorId=document.querySelector("#colour_id");
const change=document.querySelector("#change_button");
const reset=document.querySelector("#reset_button");
const allele=document.querySelectorAll(".grid-item");
console.log(colorId.value);
const resetfun=()=>{
    allele.forEach((item)=>{item.style.backgroundColor="transparent";})
}
const chang=()=>{
resetfun();
const b=document.getElementById(blockId.value);
b.style.backgroundColor=colorId.value;
blockId.value="";
colorId.value="";
}
change.addEventListener("click", chang);
reset.addEventListener("click", resetfun);





