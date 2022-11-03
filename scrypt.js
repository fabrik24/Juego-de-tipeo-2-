var listado_palabras = ["CAR", "YELLOW", "BLUE", "HTML", "FURTHER", "ADDRES", "ACTUALLY",
 "REASON", "REMAIN", "ESTABLISH", "DESCRIBE", "DISCOVER", "DIFFICULT", "DURING",
"MEMORY", "METHOD", "MIND", "MOTHER", "NECESSARI", "RESPONSABILITY", "SHOULDER", "SOMETIMES", "SATATEMENT", "WINDOWS" ];

var acertadas = 0;
var timer, indice;
var tiempo = 60;

function comenzarjuego(){
    document.getElementById("inicio").style.display = "none"; 
    document.getElementById("juego").style.display = "block";
    document.getElementById("final").style.displa = "none";
    
    
    document.getElementById("palabra_ingresada").focus();
 
    cargarpalabra();

    timer = setInterval("restartiempo()",1000);
}
 

function cargarpalabra(){
    indice = Math.round(math.random() * (listado_palabras.length-1));
    document.getElementById("palabra").innerHTML = listado_palabras[indice];
     
    listado_palabras.splice(indice,1);
}


function comparar(){

    var palabra_mostrada = document.getElementById("palabra").innerHTML;
    var palabra_tecleada = document.getElementById("palabra_ingresada").value;
    palabra_tecleada = palabra_tecleada.toUppercase();
    
    if(palabra_mostrada==palabra_tecleada){
        acertadas++; 
        document.getElementById("palabra_ingresada").value="";
        agregarnodo(palabra_tecleada);
        cargarpalabra();


    }
}

function agregarnodo(palabra){
    var span = document.createElement("span");
    span.innerHTML = palabra;
    document.getElementById("registro").appendChild(span);


}

function restartiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo==0){

        clearInterval(timer);
        document.getElementById("juego").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("cantidad_final").innerHTML = acertadas;
        
    }
}