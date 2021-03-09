import * as dgram from "dgram";
import * as decompress from "decompress";

const client = dgram.createSocket("udp4");

client.on("message", (message, remote) => {
    console.log(message.toString().split("\x00"));
    client.close();
});

// id2.froidgaming.net:10001
const packet = Buffer.from(["0xff", "0xff", "0xff", "0xff", "0x54", "0x53", "0x6f", "0x75", "0x72", "0x63", "0x65", "0x20", "0x45", "0x6e", "0x67", "0x69", "0x6e", "0x65", "0x20", "0x51", "0x75", "0x65", "0x72", "0x79", "0x00"]);
client.send(packet, 27015, "sg2.froidgaming.net", (err, bytes) => {
    if (err)throw err;
    console.log(bytes);
});