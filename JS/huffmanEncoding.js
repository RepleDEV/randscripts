function huffmanEncode(freq, str) {
    if (!str.length || !freq.length)throw new ReferenceError("INCORRECT ARGUMENTS");

    var uniqueFrequencyList = [...new Set(freq.map(val => val[1]))].sort((a, b) => a-b);

    var sortedFreq = [];

    for (const frequency of uniqueFrequencyList) {
        for(var j = 0;j < freq.length;j++) {
            var x = freq[j];
            if (x[1] == frequency) {
                sortedFreq.push(x);
            }
        }
    }

    var tree = [];

    var frq = sortedFreq.filter(val => val[1] == 1);
    for (let i = 0; i < frq.length; i+=2) {
        var oddAIndex = sortedFreq.length - frq.length - 1;
        if (i == frq.length - 1) {
            tree.push([frq[i], sortedFreq[oddAIndex]]);
            sortedFreq.splice(oddAIndex,1);
        } else {
            tree.push([frq[i], frq[i+1]]);
        }
    }

    frq = sortedFreq.filter(val => val[1] == 2);
    for (let i = 0; i < frq.length; i+=2) {
        var oddAIndex = sortedFreq.length - frq.length - 1;
        if (i == frq.length - 1) {
            tree.push([frq[i], sortedFreq[oddAIndex]]);
            sortedFreq.splice(oddAIndex,1);
        } else {
            tree.push([frq[i], frq[i+1]]);
        }
    }
    
    return tree;
}

function frequencies(str) {
    if (typeof str !== "string")throw new ReferenceError("ARGUMENT 'str' NOT OF STRING TYPE")

    let res = [];
    
    // First, sort the array
    var sortedStrArr = str.split("").sort().join("");

    // And split them by character type
    var currentCount = sortedStrArr[0];
    for (var i = 0; i < sortedStrArr.length; i++) {
        const val = sortedStrArr[i];

        if (val !== sortedStrArr[i - 1]) {
            currentCount = val;
            res.push([val]);
        }

        res[res.length-1].push(val);
    }

    // Then turn them into frequencies
    res = res.map(val => [val[0],val.length - 1]);

    // Finally, return the array
    return res;
}

function sortByFrequency(array) {
    counter = Object.create(null);
    array.forEach((word) =>{
        counter[word] = (counter[word] || 0) + 1;
    });

    
    array.sort((x, y) => {
        return counter[y] - counter[x];
    });

    return array;
}

var str = "this is an example of a huffman tree";
var test = huffmanEncode(frequencies(str),str);

console.log(test);