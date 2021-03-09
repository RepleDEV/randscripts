#include <iostream>
#include <cmath>

class Solution {
    public:
        static int quadraticEquation(int a, int b, int c) {
            // Equation: ax^2 + bx + c = 0
            // x = ( -b + sqrt(b^2 - 4ac) ) / 2a
            return ( -b + std::sqrt(std::pow(b, 2) - (4 * a * c) ) ) / (a * 2);
        }
        static std::string longBurp(int num) {
            std::string res = "Bu";

            for (int i = 0;i < num;++i) {
                res += "r";
            }

            return res + "p";
        }
};

int main(void) {
    std::cout << Solution::quadraticEquation(2, -7, 3);
    return 1;
}