let reds = [14, 28, 42, 8, 16, 24];
let lGreens = [8, 16, 24, 9, 18, 27, 11, 22, 33];
let dGreens = [8, 16, 24, 13, 26, 39, 7, 14, 21];

for (let i = 0;i < lGreens.length;i++) {
    for (let j = 0;j < dGreens.length;j++) {
        for (let k = 0;k < reds.length;k++) {
            let lGreen = lGreens[i];
            let dGreen = dGreens[j];
            let red = reds[k];
            if (lGreen + dGreen + red == 78) {
                console.log(lGreen, dGreen, red, i, j, k);
                process.exit();
            }
        }
    }
}
