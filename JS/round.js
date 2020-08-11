function round(n , r) { // n = number, r = multiplication round
    var ceil = n*r;
    var acceptedNumbers = []; // Accepted numbers

    var high = 0; // High value
    var low = 0; // Low value

    let i; // Index for the for loops

    // Updates acceptedNumbers
    for (i = 0; i < (ceil / r); i++)acceptedNumbers.push(i*r);

    // Updates high and low
    for (i = 0;i < acceptedNumbers.length; i++){
        var num = acceptedNumbers[i]; // Variable for the acceptedNumbers array

        if (num == n)return n; // if "num" is the same as "n", return "n"

        // If "num" is higher than "n" - "r" AND num ISNT higher than "n", assign "low" as "num"
        if (num > n - r && !(num > n))low = num;

        // Else if "num" is lower than "n" + "r" AND "num" ISNT lower than "n", assign "high" as "num"
        else if (num < n + r && !(num < n))high = num;
    }

    // difference between the high and low values
    var diff = high - low;

    return parseInt(n.toString().charAt(n.toString().length + 1)) < diff / 2 ? low : high;
}