function huffmanEncode(freq, str) {
    if (!str.length || !freq.length)throw new ReferenceError("INCORRECT ARGUMENTS");

    
}

function frequencies(str) {
    if (typeof str !== "string")throw new ReferenceError("ARGUMENT 'str' NOT OF STRING TYPE")

    let res = [];
    
    // First, sort the array
    var sortedStrArr = sortByFrequency(str.split(""));

    var currentCount = sortedStrArr[0];
    for (var i = 0; i < sortedStrArr.length; i++) {
        const val = sortedStrArr[i];

        if (val !== sortedStrArr[i - 1]) {
            currentCount = val;
            res.push([val]);
        }

        res[res.length-1].push(val);
    }

    res = res.map(val => [val[0],val.length - 1]);

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

var str = `AAAAAAAAAABBBbcbCCCC`;

console.log(frequencies(str));