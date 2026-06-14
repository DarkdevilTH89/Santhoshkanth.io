const toggle=document.getElementById('theme-toggle');

toggle.addEventListener('click',()=>{

document.body.classList.toggle('dark-mode');

});

document.getElementById("language-switch")
.addEventListener("change", function(){

if(this.value==="th"){
alert("Thai version can be added later.");
}

});
