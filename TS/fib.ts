import { performance } from "perf_hooks";

function fib(num: number): number {
    if (!num)return 0;
    let prev: number = 0;
    let now: number = 1;
    for (let i = 1;i < num;++i) {
        let x = prev;
        prev = now;
        now += x;

    }
    return now;
}

console.log(fib(2));