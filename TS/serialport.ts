import * as Serialport from "serialport";

const port = new Serialport("COM4", { baudRate: 9600 });

port.on("open", () => {
    console.log("OPENED");
});

const int = 1000;
const max = 5;

let i = 0;

function w() {
    i++;
    if (i >= max) {
        console.log("FINISHED");
        return;    
    }
    port.write("led_setcolor 0,0,255\n", (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("MSG Written W");
    });
    setTimeout(() => {
        b();
    }, int);
}

function b() {
    port.write("led_setcolor 255,0,0\n", (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("MSG Written B");
    });
    i++;
    setTimeout(() => {
        w();
    }, int);
}

console.log("STARTING IN 3SEC");
setTimeout(() => {
    w();
}, 3000);

port.on("error", (err) => {
    console.error(err);
});