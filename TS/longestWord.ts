const readline = (): string => "fun&!! time";

function LongestWord(str: string): string {
    const arr = str.split(" ");

    let longestWord = "";

    for (let word of arr) {
        // Remove punctuations
        word = word.split("").filter(val => !/[.|,|:|;|?|-|!|'|/|"|(|)|@|*|{|}|&]/.test(val)).join("");

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(LongestWord(readline()));