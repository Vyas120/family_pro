names=["Pradeep GV", "Sowmya GV","Vyas GV","Suhas GV"];

images=["dad.png","mom.jpg","kid.jpg","small kid.png"];

var i=0;

function nextslide(){
  document.getElementById("rte").innerHTML= names[i];
  document.getElementById("album").src=images[i];
  i++;
}
