word = "URSO";
turn = 0;

// funcao sumir marcardor 
function reset(index){
    document.getElementById(word[index]).style.display = "none";
    turn = index;
}

window.onload = function(){
    // Pegando marcador 
    var markerLetraU = document.getElementById('letraU');
    var markerLetraR = document.getElementById('letraR');
    var markerLetraS = document.getElementById('letraS');
    var markerLetraO = document.getElementById('letraO');
    
    
    // funcao executado quando o marcador é encontrado
    markerLetraU.addEventListener('markerFound', function() {
        console.log(markerLetraU.object3D.position)
        // condicao se o marcador encontrado estiver na letra Correta;
        document.getElementById("U").style.display = "flex";
        if(word[turn] == "U"){
            document.getElementById('U').style.color = "green";
            turn = turn + 1;
        } else{
            document.getElementById('U').style.color = "red";
        }
        
    });
    // funcao caso o marcador seja perdido
    markerLetraU.addEventListener("markerLost", function() {
        reset(0);
    });

    // repeticao
    
    markerLetraR.addEventListener('markerFound', function() {
        console.log(markerLetraR.object3D.position)
        document.getElementById('R').style.display = "flex";
        if(word[turn] == "R"){
            document.getElementById('R').style.color = "green";
            turn = turn + 1;
        } else {
            document.getElementById('R').style.color = "red";
        }

    });
    markerLetraR.addEventListener("markerLost", function() {
        reset(1);
    });
    
    // repeticao
    markerLetraS.addEventListener('markerFound', function() {
        console.log(markerLetraS.object3D.position)
        document.getElementById('S').style.display = "flex";
        if(word[turn] == "S"){
            document.getElementById('S').style.color = "green";
            turn = turn + 1;
        } else{
            document.getElementById('S').style.color = "red";
        }
    });
    markerLetraS.addEventListener("markerLost", function() {
        reset(2);
    });

    // repeticao
    markerLetraO.addEventListener('markerFound', function() {
        console.log(markerLetraO.object3D.position)
        document.getElementById('O').style.display = "flex";
        if(word[turn] == "O"){
            document.getElementById('O').style.color = "green";
            document.getElementById("generico").style.display = "flex";
        } else{
            document.getElementById('O').style.color = "red";
        }
    });
    markerLetraO.addEventListener("markerLost", function() {
        reset(3);
    });


    // botões da modal
    document.getElementsByClassName("fa-redo-alt")[0].onclick = function(){window.location.reload()}
    document.getElementsByClassName("fa-times-circle")[0].onclick = function(){    
        document.getElementById("generico").style.display = "none";
        document.getElementById("modal").style.display = "none";    
    }
    
}


