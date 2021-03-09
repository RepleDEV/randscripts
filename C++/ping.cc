#include <iostream>
#include <vector>
#include <future>

#include "exec.h"

using namespace std;

vector<string> str_split(string str, string separator) {
    vector<string> result;

    size_t last = 0;
    size_t next = 0;

    while ((next = str.find(separator, last)) != string::npos) {
        result.push_back(str.substr(last, next-last));
        last = next + 1;
    }

    result.push_back(str.substr(last));

    return result;
}

int ping(string host) {
    vector<string> spl = str_split(exec(("ping -n 1 " + host).c_str()), " ");
    string time = spl[11];
    return stoi(time.substr(5, time.size() - 1));
}

int main() {
    auto p = std::async(ping, "google.com");
    cout << "Pinging!" << endl;

    int res = p.get();

    cout << res;

    return 0;
}