#include <iostream>
#include <vector>
#include <string>
#include <cmath>

class Common {
    public:
        static std::string charToString(char* arr, int size) { 
            int i;
            std::string res = ""; 
            for (i = 0; i < size; i++) { 
                res = res + arr[i]; 
            } 
            return res; 
        } 
        template<typename T>
        static void printVector(const std::vector<T> arr) {
            for (int i = 0;i < arr.size();++i) {
                std::cout << arr[i] << std::endl;
            }
        }
};

class Solution {
    public:
        static int findDuplicate(std::vector<int> nums) {
            int tortoise = nums.at(0);
            int hare = nums.at(0);
            do {
                tortoise = nums.at(tortoise);
                hare = nums.at(nums.at(hare));
            } while (tortoise != hare);

            int ptr1 = nums.at(0);
            int ptr2 = tortoise;
            while(ptr1 != ptr2) {
                ptr1 = nums.at(ptr1);
                ptr2 = nums.at(ptr2);
            }

            return ptr1;
        }
        static int compress(std::vector<char>& chars) {
            std::vector<char> ch = {chars[0]};
            std::vector<char> res;

            for (int i = 1;i < chars.size();++i) {
                char current = chars[i];
                if (current == ch.back()) {
                    ch.push_back(current);
                } else {
                    res.push_back(ch[0]);
                    std::string length = std::to_string(ch.size());
                    for (int j = 0;j < length.length();++j) {
                        res.push_back(length.at(j));
                    }
                    ch = {current};
                }
            }

            chars = res;
            return chars.size();
        }
        static std::vector<std::string> split_strings(const std::string& s) {
            std::vector<std::string> res;

            for (int i = 0;i < s.length();++i) {
                const std::string l(1, s[i]);

                // IF IS ODD
                if (i % 2) {
                    res[floor(i/2)] += l;
                } else {
                    res.push_back(l);
                }
            }

            if (res.back().length() < 2) {
                res.back() += "_";
            }

            return res;
        }
        static std::vector<int> defuse_the_bomb(const std::vector<int>& code, const int k) {
            if (!k)return std::vector<int>(code.size(), 0);

            std::vector<int> res = code;

            return res;
        }
};

int main() {
    std::vector<int> result = Solution::defuse_the_bomb({1, 2, 3, 4}, 0);
    Common::printVector<int>(result);
    return 1; 
}
