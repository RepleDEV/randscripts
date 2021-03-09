#include <iostream>

#define ll long long

ll fib(int num) {
    if (!num)return 0;
    ll prev = 0;
    ll now = 1;
    for (int i = 1;i < num;++i) {
        int x = prev;
        prev = now;
        now = x + now;
    }
    return now;
}

int main(void) {
    for (int i = 0;i < 100;++i) {
        std::cout << fib(i) << std::endl;
    }
    return 0;
}