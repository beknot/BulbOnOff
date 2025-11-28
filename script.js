function glow(){
  var a=document.getElementById('img');
  if(a.src.match("off.jpg"))
  {
    a.src="images/on.jpg";
  }
  else{
    a.src="images/off.jpg";
  }
}

function light(l) {
  var pic;
  if (l==0)  {  
    pic = "images/off.jpg";
  } else {  
    pic = "images/on.jpg";  
  }
  document.getElementById("bulb").src = pic;
}