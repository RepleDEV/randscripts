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
                "--- CONVERTER UNITS --"
            << "\n" <<
                "> METRIC"
            << "\n" <<
                "--milimeter | Integer"
            << "\n" <<
                "--centimeter | Integer"
            << "\n" <<
                "--meter | Integer"
            << "\n" <<
                "--kilometer | Integer"
            << "\n" <<
                ""
            << "\n" <<
            ;
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
        return;
    }

    return 0;
}