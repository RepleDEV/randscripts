#include <iostream>
#include <string.h>

class Commands {
    public:
        void help() {
            std::cout
            <<
                "--- GENERAL ---"
            << "\n" << 
                "-h, --help | Help Menu"
            << "\n" << 
                "--- LENGTH UNITS --"
            << "\n" <<
                "> METRIC"
            << "\n" <<
                "--millimeter <integer>"
            << "\n" <<
                "--centimeter <integer>"
            << "\n" <<
                "--meter <integer>"
            << "\n" <<
                "--kilometer <integer>"
            << "\n" <<
                ""
            << "\n";
        }
        int length(std::string a, std::string b, int val) {
            if (a == b)return -1;
            std::string units[4] = {"millimeter", "centimeter", "meter", "kilometer"};
            int aIndex;
            int bIndex;

            for (int i = 0;i < 4;i++) {
                std::string unit = units[i];
                if (unit == a)aIndex = i;
                else if (unit == b)bIndex = i;
            }
            if (aIndex < bIndex) {
                int diff = bIndex - aIndex;
                
            }
        }
};

int main(int argc, char* argv[]) {
    if (argc <= 1) {
        std::cout << "Arguments must be provided\nUse '-h' for more info.\n";
        return 0;
    } else if (argc >= 17) {
        std::cout << "EXCEEDED ARGUMENT AMOUNT OF 16\n\nBETTER LUCK NEXT TIME\n";
        return 0;
    }
    

    std::string args[16];

    for (int i = 0;i < argc - 1;i++) {
        args[i] = argv[i+1];
    }


    Commands cmd;
    if (args[0] == "-h" || args[0] == "--help") {
        cmd.help();
        return 0;
    } else if (args[0] == "--millimeter")
    {
        
    }
    

    return 0;
}