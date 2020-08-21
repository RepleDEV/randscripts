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

function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}

var arr = [...Array(10).keys()].shuffle();

var t0 = performance.now();
console.log(Sorts.bogoSort(arr))
console.log(performance.now() - t0);