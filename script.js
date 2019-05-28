 function slideshow(){
  var x =document.getElementById('check-class');
  if (x.style.display === "none") {
    x.style.display="block";
  }else{
    x.style.display="none";
  } 
}

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}