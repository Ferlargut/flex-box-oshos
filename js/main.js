var span = document.getElementsByClassName("x");
var button = document.getElementsByClassName("button");
var imagenes = document.getElementsByClassName("image");
var arregloImg = Array.from(imagenes);
var arregloSpan = Array.from(span);
var arregloButton = Array.from(button);
document.getElementById("parrafo1").style.visibility="visible";
document.getElementById("parrafo2").style.visibility="visible";

arregloSpan.forEach(function (element){
    element.addEventListener("click",borrar);
    function borrar(){
        this.parentNode.style.display = "none";
    }
});


    arregloButton[0].addEventListener("click",ocultarHistoria);
    function ocultarHistoria(){
        if(document.getElementById("parrafo1").style.visibility=="visible"){ 
            document.getElementById("parrafo1").style.visibility="hidden";                
        }else {
            document.getElementById("parrafo1").style.visibility="visible";
        }
    }
       arregloButton[1].addEventListener("click",ocultarExtincion);
    function ocultarExtincion(){
        if(document.getElementById("parrafo2").style.visibility=="visible"){ 
            document.getElementById("parrafo2").style.visibility="hidden";                
        }else {
            document.getElementById("parrafo2").style.visibility="visible";
        }
        
    }
    
    arregloButton[2].addEventListener("click",mostrar);


    function mostrar(){
        
         arregloImg.forEach(function (element){
            element.parentNode.style.display="flex";  
});
    }

     
    
    