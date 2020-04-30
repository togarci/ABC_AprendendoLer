var positions = new Object();


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
        document.getElementById(checkLeft(markerFound)).style.color = "red";
        return true;
    }
    for(x in word){
        if(word[x] == markerFound) var rightWord = word[x-1];
    }

    if(checkLeft(markerFound)== false) return false;
    else if (checkLeft(markerFound) == rightWord ) return true;
}