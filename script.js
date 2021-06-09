
// changing color on click event 
var button = document.querySelector('.btn');
var bodybg = document.querySelector('body');
//colors array 
var colors =['red','yellow','green','blue','pink','saddlebrown','slateblue','gray'] ;
button.addEventListener('click', changecolor);

//ini function 
function changecolor(){
    var random = Math.floor(Math.random()*colors.length);
    bodybg.style.backgroundColor = colors[random];
}


