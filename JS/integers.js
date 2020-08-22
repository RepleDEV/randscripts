function nextSmaller(num) {
    num = num.toString();
    if (num.length <= 1)return -1;

    var firstDigit = num[0];

    var i, res = "", numReplaceIndex = 0;
    for (i = 0; i < num.length; i++) {
        const currentNum = parseInt(num[i]);
        const numNext = parseInt(num[i+1]);

        if (numNext > 0 && numNext < currentNum) {
            let x = num[i+1];
            num[i+1] = currentNum.toString();
            num[i] = x;
            console.log(num[i], i);
        }

        numReplaceIndex = i;
    }
    return num;
};

console.log(nextSmaller(1232))