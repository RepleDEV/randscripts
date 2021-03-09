import * as robotjs from "robotjs";
import { performance } from "perf_hooks";

const t1 = performance.now();
const z = robotjs.getMousePos();
robotjs.moveMouse(z.x, z.y);
console.log(performance.now() - t1);