let addtask=document.getElementById("btn")
let form=document.getElementById("popup")
let submit=document.getElementById("btn1");
let val=document.getElementById("myInputField").value;


addtask.addEventListener("click", function() {
    console.log("add eventlistener clicked")
    form.style.display="grid";
    form.style.justifyContent="center";


 })

btn1.addEventListener("click", (event)=>{
      event.preventDefault();
    let val=document.getElementById("myInputField").value;
    // console.log(val);
    let desc=document.getElementById("title2").value;
    // console.log(desc);
   
    let arr=[];
    arr.push(val);
    console.log(arr); 
    let description=[];
    description.push(desc);
    console.log(description);
    let content=document.getElementById("content");
    content.innerHTML=val;
  
  })
 const openPopup = () => {
  popup.style.display = "block";
  popupbg.style.display = "block";
 };
 
 const closePopup = () => {
  popup.style.display = "none";
  popupbg.style.display = "none";
 };