/* 
    Solution for a kata from codewars.com

    Kata name: Fluent Calculator
    By: karudedios

    Link: https://www.codewars.com/kata/5578a806350dae5b05000021/train/javascript
*/

// Solution function

const FluentCalculator = new Proxy({ args: [] }, {
    get(target, prop, self) {
        // DEBUG
        console.log(self);

        // First, check if the property is a value or an operator
        let values = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "zero"];
        let operations = ["plus", "minus", "times", "dividedBy"];
        if (values.indexOf(prop) < 0 || operations.indexOf(prop) < 0)return undefined;

        // Update args and return self
        target.args.push(prop);
        return self;
    }
});

// Test cases

// TESTING
console.log(FluentCalculator.one);