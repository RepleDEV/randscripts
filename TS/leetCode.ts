import { performance } from "perf_hooks";

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * Leet code problem solutions
 */
class Solution {
    /**
     * Gets longest common string prefix of an array.
     * 
     * == Problem Info ==  
     * Title: Longest Common Prefix  
     * #: 14  
     * Difficulty: Easy  
     * 
     * Finished (MM/DD/YY): 10/12/2020  
     * 
     * URL: https://leetcode.com/problems/longest-common-prefix/
     * 
     * @param arr String array input
     */
    static longestCommonPrefix(arr: string[]): string {
        // Checks if array is empty
        if (!arr.length)return "";

        let currentLongestPrefix = "";

        // Gets largest word of the array
        const maxLength = Math.max(...arr.map(val => val.length));

        // While true loop
        while (!0) {
            // Current loop cycle's prefix
            let cp = "";

            if (currentLongestPrefix.length == maxLength)return currentLongestPrefix;
            
            // Loop over the array
            for (let i = 0;i < arr.length;i++) {
                const currentStr = arr[i];
                const currentPrefix = currentStr[currentLongestPrefix.length];

                // Checks if there's only 1 element
                if (arr.length == 1) return currentStr;
                
                // Init
                if (cp == "") {
                    cp = currentPrefix;
                    continue;
                }

                // Checks if the current word's prefix isn't the same as the current cycle's prefix
                if (cp != currentPrefix)return currentLongestPrefix;
            }
            
            // Add the current cycle's prefix to the current longest prefix
            currentLongestPrefix += cp;
        }

        return currentLongestPrefix;
    }
    static validParentheses(str: string): boolean {
        const isOpening = (p: string): boolean => /[([{]/.test(p);
        const isClosingOf = (sp: string, ep: string): boolean => {
            switch (sp) {
                case "(": return ep == ")";
                case "[": return ep == "]";
                case "{": return ep == "}";
            }
            return !1;
        }

        let currentParentheses = "";
        for (let i = 0; i < str.length; i++) {
            const p = str[i];
            if (isOpening(p)) {
                currentParentheses += p;
            } else {
                if (isClosingOf(currentParentheses[currentParentheses.length - 1], p)) {
                    currentParentheses = currentParentheses.slice(0, -1);
                } else {
                    return false;
                }
            }
        }

        return currentParentheses.length == 0;
    }
    static findDuplicate(nums: number[]): number {
        let tortoise = nums[0];
        let hare = nums[0];
        do {
            tortoise = nums[tortoise];
            hare = nums[nums[hare]];
        } while (hare != tortoise);
        
        let ptr1 = nums[0];
        let ptr2 = tortoise;

        console.log(ptr1, ptr2);

        while (ptr1 != ptr2) {
            ptr1 = nums[ptr1];
            ptr2 = nums[ptr2];
        }

        return ptr1;
    }
    // WIP
    static basicCalculator(str: string): number {
        // Remove unnecessary spaces
        str = str.split("").filter(s => s != " ").join("");

        let nums: number[] = [],
        ops: string[] = [];

        let c = "";
        
        str.split("").forEach(s => {
            const f = /[+|-|*|\/]/.test(s);
            if (f) {
                nums.push(parseInt(c));
                c = "";
                ops.push(s);
            } else {
                c += s;
            }
        });
        nums.push(parseInt(c));

        let res = nums.shift();

        for (let i = 0;i < ops.length;i++) {
            const op = ops[i];
            const num = nums[i];

            switch (op) {
                case "+":
                    res += num;
                    break;
                case "-":
                    res -= num;
                    break;
                case "*":
                    res *= num;
                    break;
                case "/":
                    res /= num;
                    break;
            }
        }

        return res;
    }
    static isPowerOfThree(n: number): boolean {
        return (parseFloat((Math.log(n) / Math.log(3)).toFixed(10)) % 1 == 0);
    };
    static fizzBuzz(n: number): string[] {
        return [...Array(n).keys()].map(e => (e + 1).toString()).map(e => {
            let x = parseInt(e);
            if (x % 3 == 0 && x % 5 == 0) {
                return "FizzBuzz";
            } else if (x % 3 == 0) {
                return "Fizz";
            } else if (x % 5 == 0) {
                return "Buzz";
            } else {
                return e;
            }
        });
    }
    static subtractProductAndSum(n: number): number {
        let x = n.toString().split("").map((e) => parseInt(e));
        return x.reduce((a, b) => a * b) - x.reduce((a, b) => a + b);
    }
    static validPalindrome(str: string): boolean {
        str = str.split("").filter((e) => {
            return /[abcdefghijklmnopqrstuvwxyz1234567890]/i.test(e);
        }).map(e => e.toLowerCase()).join("");
        return str == str.split("").reverse().join("");
    }
    static isPerfectSquare(num: number): boolean { return num**(1/2) % 1 == 0}
    static numberToWords(num: number): string {
        num = Math.floor(num);

        let res: string[] = [];

        const numStr = num.toString();
        const numLen = numStr.length;

        if (numLen > 12) {
            return "";
        }

        if (numLen == 1) {
            switch (num) {
                case 0:
                    res.push("Zero");
                    break;
                case 1:
                    res.push("One");
                    break;
                case 2:
                    res.push("Two");
                    break;
                case 3:
                    res.push("Three");
                    break;
                case 4:
                    res.push("Four");
                    break;
                case 5:
                    res.push("Five");
                    break;
                case 6:
                    res.push("Six");
                    break;
                case 7:
                    res.push("Seven");
                    break;
                case 8:
                    res.push("Eight");
                    break;
                case 9:
                    res.push("Nine");
                default:
                    break;
            }
        } else if (numLen == 2) {
            const firstDigit = +numStr[0];
            const secondDigit = +numStr[1];
            switch (firstDigit) {
                case 1:
                    switch (secondDigit) {
                        case 0:
                            res.push("Ten");
                            break;
                        case 1:
                            res.push("Eleven");
                            break;
                        case 2:
                            res.push("Twelve");
                            break;
                        case 3:
                            res.push("Thirteen");
                            break;
                        case 4:
                            res.push("Fourteen");
                            break;
                        case 5:
                            res.push("Fifteen");
                            break;
                        case 6:
                            res.push("Sixteen");
                            break;
                        case 7:
                            res.push("Seventeen");
                            break;
                        case 8:
                            res.push("Eighteen");
                            break;
                        case 9:
                            res.push("Nineteen");
                    }
                    break;
                case 2:
                    res.push("Twenty");
                    break;
                case 3:
                    res.push("Thirty");
                    break;
                case 4:
                    res.push("Forty");
                    break;
                case 5:
                    res.push("Fifty");
                    break;
                case 6:
                    res.push("Sixty");
                    break;
                case 7:
                    res.push("Seventy");
                    break;
                case 8:
                    res.push("Eighty");
                    break;
                case 9:
                    res.push("Ninety");
            }

            if (firstDigit > 1 && secondDigit > 0) {
                res.push(this.numberToWords(secondDigit));
            }
        } else if (numLen == 3) {
            const firstDigit = +numStr[0];

            res.push(this.numberToWords(firstDigit));
            res.push("Hundred");
            if (numStr[1] != "0" || numStr[2] != "0") {
                res.push(this.numberToWords(+(numStr[1] + numStr[2])));
            }
        } else {
            let sections: string[] = [""];
            for (let i = numLen - 1;i >= 0;i--) {
                if (sections[0].length < 3) {
                    sections[0] = numStr[i] + sections[0];
                } else {
                    sections.unshift(numStr[i]);
                }
            }

            let prods: string[] = [];

            if (sections.length >= 2) {
                prods.unshift("Thousand");
            }
            if (sections.length >= 3) {
                prods.unshift("Million");
            }
            if (sections.length >= 4) {
                prods.unshift("Billion");
            }

            sections.forEach((section, i) => {
                const sectionNum = +section;
                if (sectionNum != 0) {
                    res.push(this.numberToWords(sectionNum), prods[i]);
                }
            });
        }
        return res.filter(Boolean).join(" ");
    }
    static reverseWords(str: string): string {
        return str.split(" ").map(s => s.split("").reverse().join("")).join(" ");
    }
    static runningSum(nums: number[]): number[] {
        return nums.map((v, i, a) => i == 0 ? v : [...a].splice(0, i + 1).reduce((a, b) => a + b));
    }
    static defangIPaddr(address: string): string {
        return address.replace(/\./g, "[.]");
    }
    static numIndeticalPairs(nums: number[]): number {
        let pairs: Array<[number, number]> = [];

        for (let i = 0;i < nums.length;i++) {
            for (let j = 0;j < nums.length;j++) {
                if (nums[i] == nums[j] && i < j) {
                    pairs.push([i, j]);
                }
            }
        }

        return pairs.length;
    }
    static numJewelsInStones(J: string, S: string): number {
        let res = 0;
        
        const jSplit = J.split("");

        S.split("").forEach((v) => {
            if (jSplit.includes(v)) {
                res++;
            }
        });

        return res;
    }
    static numberOfSteps(num: number): number {
        let res = 0;

        while (num > 0) {
            // If even
            if (num % 2 == 0) {
                num /= 2;
            } else {
                num -= 1;    
            }

            res++;
        }

        return res;
    }
    static restoreString(s: string, indices: number[]): string {
        let res = "";

        [...indices].sort((a, b) => a - b).forEach(n => {
            res += s[indices.indexOf(n)];
        });

        return res;
    }
    static smallerNumbersThanCurrent(nums: number[]): number[] {
        return nums.map(x => {
            return nums.filter(y => x > y).length;
        });
    }
    static decompressRLElist(nums: number[]): number[] {
        let res: number[] = [];

        for (let i = 0;i < nums.length;i += 2) {
            let [freq, val] = [nums[i], nums[i + 1]];
            
            // Same as: (freq--) > 0
            while (freq --> 0) {
                res.push(val);
            }
        }

        return res;
    }
    static sumOddLengthSubarrays(arr: number[]): number {
        if (arr.length == 1)return arr[0];

        let res: number[] = [];

        for (let i = 1;i <= arr.length;i += 2) {
            for (let j = 0;j + i - 1 < arr.length;j++) {
                res.push(...[...arr].splice(j, i));
            }
        }

        return res.reduce((a, b) => a + b);
    }
    static findNumbers(nums: number[]): number {
        return nums.filter(v => !(v.toString().length % 2)).length;
    }
    static flipAndReverseImage(m: number[][]): number[][] {
        return m.map(x => x.reverse().map(y => y == 0 ? 1 : 0));
    }
    static freqAlphabets(s: string): string {
        let res = "";

        for (let i = 0;i < s.length;i++) {
            
        }
        
        return "";
    }
    static maxProduct(nums: number[]): number {
        let maxNum = 0;

        for (let i = 0;i < nums.length;++i) {
            for (let j = 0;j < nums.length;++j) {
                let r = (nums[i] - 1) * (nums[j] - 1);
                if (r > maxNum) {
                    console.log(nums[i], nums[j]);
                    maxNum = r;
                }
            }
        }

        return maxNum;
    }
    static sumZero(n: number): number[] {
        if (n == 1)return [0];

        let res =  [...Array(n - 1).keys()];

        return [...res, -res.reduce((a, b) => a + b)];
    }
    static countNegatives(grid: number[][]): number {
        return [].concat(...grid).filter(v => v < 0).length;
    }
    static selfDividingNumbers(left: number, right: number): number[] {
        function isSelfDividing(n: number): boolean {
            let x = n.toString();
            for (let i = 0;i < x.length;i++) {
                if (!(+x % +x[i]))return !(1);
            }

            return !(0);
        }

        let res: number[] = [];

        right++;
        while (right --> left) {
            if (isSelfDividing(right)) {
                res.unshift(right);
            }
        }

        return res;
    }
    static sortArrayByParity(nums: number[]): number[] {
        let odds = [];
        let evens = [];

        for (let i = 0;i < nums.length;++i) {
            let num = nums[i];
            (!(num % 2) ? evens : odds).push(num)
        }

        return [...evens, ...odds];
    }
    static sortedSquares(arr: number[]): number[] {
        return arr.map(v => v ** 2).sort((a, b) => a - b);
    }
    static peakIndexInMountainArray(arr: number[]): number {
        return arr.indexOf(Math.max(...arr));
    }
    static uniqueOccurences(arr: number[]): boolean {
        arr = arr.sort((a, b) => a - b);

        let occurences: number[] = [0];

        let current = arr[0];

        for (let i = 0;i < arr.length;++i) {
            let num = arr[i];

            if (num != current) {
                occurences.push(1);
            } else {
                occurences[occurences.length - 1]++;
            }
        }

        console.log(occurences, arr);

        return new Set(occurences).size == occurences.length;
    }
    static defuse_the_bomb(code: number[], k: number): number[] {
        if (!k)return new Array(code.length).fill(0);

        function generateWrapper(array: any[], i: number) {
            return array[Math.abs(i % array.length)];
        }

        let res = code;

        for (let i = 0;i < code.length;i++) {
            let r = 0;
            for (let j = 0;j < Math.abs(k);j++) {
                
            }
            res[i] = r;
        }

        return res;
    }
    static canMakeArithmeticProgression(arr: number[]): boolean {
        let res = arr.sort((a, b) => a - b);
        let diff = res[1] - res[0];
        for (let i = 1;i < res.length - 1;i++) {
            let xdiff = arr[i + 1] - arr[i];
            if (xdiff != diff)return !1;
        }

        return !0;
    }
    static removeDuplicates(S: string) {
        let res = S.split("");
        let hasDuplicate = true;
        while (hasDuplicate) {
            for (let i = 0;i < res.length - 1;++i) {
                if (res[i] == res[i + 1]) {
                    res.splice(i, 2);
                    i = -1;
                }
            }
            hasDuplicate = false;
        }
        return res.join("");
    }
    static reverseString(s: string[]): void {
        function swap(str: string[], i: number, j: number) {
            let temp = str[i];
            str[i] = str[j];
            str[j] = temp;
        }
        let i = 0, j = s.length - 1;
        while (i < j) {
            swap(s, i, j);
            ++i;
            --j;
        }
    }
    static sortByFrequency(nums: number[]): number[] {
        let x = [...nums].sort((a, b) => a - b);

        let freq = {};

        x.forEach(v => freq[v] = 0);
        x.forEach(v => ++freq[v] == 1)

        return x.sort((a, b) => freq[a] - freq[b]);
    }
}

(function main() {
    console.log(Solution.sortByFrequency([2,3,1,3,2]))
})();