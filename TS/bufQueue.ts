import * as zlib from "zlib";

import { performance } from "perf_hooks";

const text = "ASDLKJFLAKSDJHFL.KAJSDFL;KJAS;LDKFJ;LAKSDJF;LAKJSDF;LKJALSKDJGFHOIAWUHEF";

(function main() {
    zlib.deflate(text, (e, res) => {
        console.log(Buffer.from(text, "utf-8").length);
        console.log(res.length);
        zlib.inflate(res, (_e, _res) => {
            console.log(new TextDecoder().decode(new Uint8Array(_res)));
        });
    });
})()