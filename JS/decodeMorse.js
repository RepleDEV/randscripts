(function decodeMorse(str){
    var morse = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--..",
        ".----",
        "..---",
        "...--",
        "....-",
        ".....",
        "-....",
        "--...",
        "---..",
        "----.",
        "-----",
    ];
    var translations = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    
    var res = "";
    var checkForSpace = 0;
    str.split(" ").forEach(element => {
        if (element.length == 0) {
            checkForSpace++;
            return;
        }
        if (checkForSpace == 2)res += " ";
        res += translations[morse.indexOf(element)];
        checkForSpace = 0;
    });
    return res;
})(".... . -.--   .--- ..- -.. .");