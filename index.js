word = "URSO";


window.onload = function(){
    if(window.innerWidth < window.innerHeight) this.alert("Vire a tela")
    // Pegando marcador
    var markerLetraU = document.getElementById('letraU');
    var markerLetraR = document.getElementById('letraR');
    var markerLetraS = document.getElementById('letraS');
    var markerLetraO = document.getElementById('letraO');
    
    
    // funcao executado quando o marcador é encontrado
    markerLetraU.addEventListener('markerFound', function() {
        positions.U = markerLetraU.object3D.position.x;
        // condicao se o marcador encontrado estiver na letra Correta;
        document.getElementById("U").style.display = "flex";
        if(check("U")){
            document.getElementById('U').style.color = "green";

        } else{
            document.getElementById('U').style.color = "red";
        }
        
    });
    // funcao caso o marcador seja perdido
    markerLetraU.addEventListener("markerLost", function() {
        delete positions.U
        document.getElementById("U").style.display = "none";
    });

    // repeticao
    
    markerLetraR.addEventListener('markerFound', function() {
        positions.R = markerLetraR.object3D.position.x;
        document.getElementById('R').style.display = "flex";
        if(check("R")){
            document.getElementById('R').style.color = "green";
            
        } else {
            document.getElementById('R').style.color = "red";
        }

    });
    markerLetraR.addEventListener("markerLost", function() {
        delete positions.R
        document.getElementById("R").style.display = "none";
    });
    
    // repeticao
    markerLetraS.addEventListener('markerFound', function() {
        positions.S = markerLetraS.object3D.position.x;
        document.getElementById('S').style.display = "flex";
        if(check("S")){
            document.getElementById('S').style.color = "green";            
        } else{
            document.getElementById('S').style.color = "red";
        }
    });
    markerLetraS.addEventListener("markerLost", function() {
        delete positions.S
        document.getElementById("S").style.display = "none";
    });

    // repeticao
    markerLetraO.addEventListener('markerFound', function() {
        positions.O = markerLetraO.object3D.position.x;
        document.getElementById('O').style.display = "flex";
        if(check("O")){
            document.getElementById('O').style.color = "green";
            document.getElementById("generico").style.display = "flex";
        } else{
            document.getElementById('O').style.color = "red";
        }
    });
    markerLetraO.addEventListener("markerLost", function() {
        delete positions.O
        document.getElementById("O").style.display = "none";
    });


    // botões da modal
    document.getElementsByClassName("fa-redo")[0].onclick = function(){window.location.reload()};
    document.getElementsByClassName("fa-times-circle")[0].onclick = function(){    
        document.getElementById("generico").style.display = "none";
    }
    
}