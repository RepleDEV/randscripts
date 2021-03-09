import * as dgram from "dgram";

const server = dgram.createSocket("udp4");

server.on("listening", () => {
    console.log("Listening");
});

server.bind(4010);
