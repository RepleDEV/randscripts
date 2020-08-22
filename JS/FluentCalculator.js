/* 
    Solution for a kata from codewars.com

    Kata name: Fluent Calculator
    By: karudedios

    Link: https://www.codewars.com/kata/5578a806350dae5b05000021/train/javascript
*/

// Solution function

class FluentCalculator {
    constructor() {
        this.ops = [];
    }
    get one() {
        this.ops.push("one");
        return this.connector;
    }
    get plus() {
        this.ops.push("+");
        return this.connector;
    }
    get connector() {
        var values = ["one"];
        var operations = ["+"];
        
        if (this.ops.length == 1) {
            return values.indexOf(this.ops[0]) + 1;
        }
        console.log(this);
        return this;
    }
}

const fluentcalc = new FluentCalculator();

// Test cases

// TESTING
console.log(fluentcalc.one);