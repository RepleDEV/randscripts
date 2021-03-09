#include <iostream>
#include <cmath>

using std::cout;

int isPrime(int num) {
    const int LARGEST_NUM_TO_SEARCH = (int) floor(sqrt(num));
    for (int i = 0;i < 10;i++) {
        cout << 10 % i;
    }
    return 1;
}
int mod(int x, int y) {
    return x % y;
}
int main() {
    isPrime(12);
    return 0;
}