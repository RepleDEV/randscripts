const { performance } = require('perf_hooks');

/**
 * Shuffles an array. That's it lol
 */
Array.prototype.shuffle = function() {
    var res = [];
    var remaining_indexes = [...this.keys()];

    while (remaining_indexes.length > 0) {
        var random_index = Math.floor(Math.random() * remaining_indexes.length);

        res.push(this[remaining_indexes[random_index]]);
        remaining_indexes.splice(random_index, 1);
    }
    return res;
}

const Sorts = {
    quickSort: function (arr) {
        if (typeof arr !== "object")throw "ARGUMENT PASSED NOT OF OBJECT TYPE";

        var partition_pointer = Math.floor(arr.length / 2);
        var rounds = 0;

        var partitions = [];

        var partition = [[],[]];
            
        while (rounds < 1)

        partitions.push(...partition);
        return partitions;
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
    }
}

var arr = [...Array(100).keys()].shuffle();

console.log(Sorts.insertionSort(arr));
