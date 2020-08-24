function encodeRailFenceCipher(str, key = 3) {
    const strlen = str.length;
    var arr = [];
    for (var i = 0;i < key;i++) {
        arr.push(new Array(strlen));
    }
    var isGoingDown = true;
    var row = 0;
    for (var i = 0;i < strlen;i++) {
        arr[row][i] = str[i];
        if (row == key - 1)isGoingDown = false;
        else if (row == 0)isGoingDown = true;
    
        if (isGoingDown)row++
        else row--;
    }
    return arr.map(val => val.join("")).join("");
}

function decodeRailFenceCipher(str, key = 3) {
    const strlen = str.length;
    var arr = [];
    for (var i = 0;i < key;i++) {
        arr.push(new Array(strlen));
    }
    var isGoingDown = true;
    var currentChar = 0;
    for (var i = 0;i < key;i++) {
        var row = 0;
        for (var j = 0;j < strlen;j++) {
            if (row == i) {
                arr[i][j] = str[currentChar];
                currentChar++;
            }
            if (row == key - 1)isGoingDown = false;
            else if (row == 0)isGoingDown = true;
        
            if (isGoingDown)row++
            else row--;
        }
    }
    var res = "";
    isGoingDown = true;
    var row = 0;
    for (var i = 0;i < str.length;i++) {
        res += arr[row][i];

        if (row == key - 1)isGoingDown = false;
        else if (row == 0)isGoingDown = true;
        
        if (isGoingDown)row++
        else row--;
    }
    return res;
}