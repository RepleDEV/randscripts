import * as mousemgr from "@repledev/rinku_mousemgr";

(function main() {
    let int;
    let i = 0;
    int = setInterval(() => {
        const x = Math.floor(Math.random() * 1366);
        const y = Math.floor(Math.random() * 768);
        mousemgr.moveMouse(x, y);

        if (i == 100){
            clearInterval(int);
        }

        i++
    }, 0);
})()