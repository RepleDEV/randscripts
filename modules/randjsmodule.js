const encoding = {
    decodeMorse(str){
        var morse = [
            ".-",
            "-...",
            "-.-.",
            "-..",
            ".",
            "..-.",
            "--.",
            "....",
            "..",
            ".---",
            "-.-",
            ".-..",
            "--",
            "-.",
            "---",
            ".--.",
            "--.-",
            ".-.",
            "...",
            "-",
            "..-",
            "...-",
            ".--",
            "-..-",
            "-.--",
            "--..",
            ".----",
            "..---",
            "...--",
            "....-",
            ".....",
            "-....",
            "--...",
            "---..",
            "----.",
            "-----",
        ];
        var translations = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        
        var res = "";
        var checkForSpace = 0;
        str.split(" ").forEach(element => {
            if (element.length == 0) {
                checkForSpace++;
                return;
            }
            if (checkForSpace == 2)res += " ";
            res += translations[morse.indexOf(element)];
            checkForSpace = 0;
        });
        return res;
    },
    encodeRailFenceCipher(str, key = 3) {
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
    },
    decodeRailFenceCipher(str, key = 3) {
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
}

const Sorts = {
    quickSort: function (arr) {
        if (typeof arr !== "object")throw new Error("ARGUMENT PASSED NOT OF OBJECT TYPE");
        if (arr.length <= 10)return Sorts.insertionSort(arr);

        // This is for getting the median value of the array
        var pivot = Math.round((Math.min(...arr) + Math.max(...arr)) / 2);

        arr.splice(arr.indexOf(pivot),1);

        var partitions = [[],[]];

        arr.forEach(element => {
            partitions[element <= pivot ? 0 : 1].push(element);
        });

        partitions.splice(1, 0, [pivot]);

        // RECURSION PROCESS
        return [].concat(...partitions.map(Sorts.quickSort));
    },
    insertionSort: function (arr) {
        if (typeof arr !== "object")throw "ARGUMENT PASSED NOT OF OBJECT TYPE";
        
        for (var i = 1; i < arr.length; i++) {
            const num = arr[i];
            
            if (num < arr[i-1]) {
                var x = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = x;
                i-=2;
            }
        }
        return arr;
    },
    bubbleSort: function (arr) {
        if (typeof arr !== "object")throw "ARGUMENT PASSED NOT OF OBJECT TYPE";

    },
    bogoSort: function (arr) {
        var sortedArr = this.quickSort(arr);

        while (arr != sortedArr) {
            arr = arr.shuffle();
            console.log(arr);
        }
        return arr;
    }
}

const arrays = {
    shuffle_arr(arr) {
        var res = [];
        var remaining_indexes = [...arr.keys()];
    
        while (remaining_indexes.length > 0) {
            var random_index = Math.floor(Math.random() * remaining_indexes.length);
    
            res.push(arr[remaining_indexes[random_index]]);
            remaining_indexes.splice(random_index, 1);
        }
        return res;
    }
}

const math = {
    multiply(a, b){
        a = a.toString(),b = b.toString();
        var lNum,sNum;
        
        var res = [];
        
        if(a.length > b.length){
          lNum = a.split("");sNum = b.split("");
        } else{
          lNum = b.split("");sNum = a.split("");
        }
        
        while(lNum[0] == "0"){
          lNum.shift();
        }
        while(sNum[0] == "0"){
          sNum.shift();
        }
        
        for(let i = 0;i <= sNum.length - 1;i++){
          res.push("");
        }
        
        var addStack = [];
        
        for(var i = sNum.length - 1;i >= 0;i--){
          var sNum_ld = parseInt(sNum[i]);
          
          for(var j = lNum.length - 1;j >= 0;j--){
            var lNum_ld = parseInt(lNum[j]);
            
            var newAdd = 0, addStackRes = 0;
            
            addStack.forEach(val => addStackRes += val);
            addStack = [];
            newAdd += lNum_ld * sNum_ld + addStackRes;
            var newAddStr = newAdd.toString();
            if (newAddStr.length > 1){
              if (j != 0 ){
                addStack.push(parseInt(newAddStr[0]));
                res[i] += newAddStr[1];
              } else {
                res[i] += newAddStr[1];
                res[i] += newAddStr[0];
              }
            } else {
              res[i] += newAddStr;
            }
          }
        }
        
        var reslen = res.length
        for (let i = 0;i < reslen;i++){
          res[i] = ((res[i].split("")).reverse()).join(""); // explanation: split, reverse, then join back. nice
          for(let j = 0;j < reslen - i - 1;j++){res[i] += "0";}
        }
        
        var result = res[0];
        
        for (let i = 1;i < reslen;i++){result = sumLargeNums(result,res[i]);}
        
        return result == '' || result == undefined ? '0' : result;
    }
}

const colors = {
    hexStringToRGB(hexString) {
        var r,g,b,rx = `${hexString[1]}${hexString[2]}`,gx = `${hexString[3]}${hexString[4]}`,bx = `${hexString[5]}${hexString[6]}`;  
        function calcVal(str){
          str = str.toLowerCase();
          var values = "0123456789abcdef";
          return 16 * values.indexOf(str[0]) + values.indexOf(str[1]);
        }
        return r = calcVal(rx),g = calcVal(gx),b = calcVal(bx),{r,g,b};
    },
    rgbToHEX(o,r,t){return o=(o=o>255?255:o)<0?0:o,r=(r=r>255?255:r)<0?0:r,t=(t=t>255?255:t)<0?0:t,x="0123456789ABCDEF",`${x[Math.floor(o/16)]+x[o-16*Math.floor(o/16)]}${x[Math.floor(r/16)]+x[r-16*Math.floor(r/16)]}${x[Math.floor(t/16)]+x[t-16*Math.floor(t/16)]}`}
}

exports.colors = colors;
exports.math = math;
exports.encoding = encoding;
exports.sorts = sorts;