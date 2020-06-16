var positions = new Object();

var u = '<div id="U" class="padrao">U</div>';
var r = '<div id="R" class="padrao">R</div>';
var s = '<div id="S" class="padrao">S</div>';
var o = '<div id="O" class="padrao">O</div>';

function checkRight(markerFound){
    var right = false;
    for(x in positions){
        if(positions[x] > positions[markerFound]) right = x;
    }

    if(right == false) return right;

    for(x in positions){
        if((positions[x] > positions[markerFound]) && (positions[x] < positions[right])) right = x;
    }

    return right
}

function checkLeft(markerFound){
    var left = false;
    for(x in positions){
        if(positions[x] < positions[markerFound]) left = x;
    }

    if(left == false) return left;

    for(x in positions){
        if((positions[x] < positions[markerFound]) && (positions[x] > positions[left])) left = x;
    }

    return left
}

function check(markerFound){
    if((markerFound == word[0]) && (checkLeft(markerFound) == false)) return true;
    else if((markerFound == word[0]) && (checkLeft(markerFound) != false)) {
        document.querySelector("#qdr_plv").removeChild(document.getElementById(checkLeft(markerFound)));
        document.getElementById(markerFound).insertAdjacentHTML('beforebegin', error);
        return true;
    }
    for(x in word){
        if(word[x] == markerFound) var rightWord = word[x-1];
    }

    if(checkLeft(markerFound)== false) return false;
    else if (checkLeft(markerFound) == rightWord ) return true;
}

function add(markerFound, div){
    var error = '<div id="'+ markerFound +'" class="erro">X</div>'
    if(document.querySelector("#qdr_plv").childElementCount == 0) {
        document.querySelector("#qdr_plv").insertAdjacentHTML('afterbegin', div);
    }
    else if(checkLeft(markerFound) != false){ 
        if(check(markerFound)) document.getElementById(checkLeft(markerFound)).insertAdjacentHTML("afterend", div);
        else document.getElementById(checkLeft(markerFound)).insertAdjacentHTML("afterend", error);
    }
    else {
        if(check(markerFound)) document.getElementById(checkRight(markerFound)).insertAdjacentHTML('beforebegin', div);
        else document.getElementById(checkRight(markerFound)).insertAdjacentHTML('beforebegin', error);
    }

}