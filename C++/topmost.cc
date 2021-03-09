#include <iostream>
#include <windows.h>
#include <string>
#include <vector>

using namespace std;

string charToString(char* arr, int size) { 
    int i;
    string res = ""; 
    for (i = 0; i < size; i++) { 
        res = res + arr[i]; 
    } 
    return res; 
} 

string GetWindowTitle(HWND window) {
    char wnd_title[256];
    GetWindowText(window, wnd_title, sizeof(wnd_title));
    
    return charToString(wnd_title, GetWindowTextLength(window) + 1);
}

BOOL CALLBACK EnumWindowsProc(HWND hWnd, LPARAM lParam) {
    // if (IsIconic(hWnd)) {
    //     return TRUE;
    // }

    int length = GetWindowTextLength(hWnd);
    if (length == 0 || !IsWindowVisible(hWnd))return TRUE;
    cout << GetWindowTitle(hWnd) << endl;
}

int main(void) {
    EnumWindows(EnumWindowsProc, NULL);
    return 0;
}