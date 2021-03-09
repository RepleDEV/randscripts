#include <iostream>
#include <windows.h>

using namespace std;

int main(void) {
    int key = 0;

    INPUT inputs[2] = {0};

    inputs[0].type = INPUT_MOUSE;
    inputs[1].type = INPUT_MOUSE;
    if (key == 0) {
        inputs[0].mi.dwFlags = MOUSEEVENTF_LEFTDOWN;
        inputs[1].mi.dwFlags = MOUSEEVENTF_LEFTUP;
    } else if (key == 1) {
        inputs[0].mi.dwFlags = MOUSEEVENTF_MIDDLEDOWN;
        inputs[1].mi.dwFlags = MOUSEEVENTF_MIDDLEUP;
    } else if (key == 2) {
        inputs[0].mi.dwFlags = MOUSEEVENTF_RIGHTDOWN;
        inputs[1].mi.dwFlags = MOUSEEVENTF_RIGHTUP;
    }

    SendInput(2, inputs, sizeof(INPUT));
}