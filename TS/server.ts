import * as net from "net";

const server = net.createServer();

server.once("listening", () => {
    console.log("Listening!");
});

server.on("connection", socket => {
    console.log("Connection!");

    socket.on("close", () => {
        console.log("Socket disconnect!");
    });

    socket.on("data", buf => {
        console.log("Data from socket! Data: %s", new TextDecoder().decode(new Uint8Array(buf)));
    });
});

server.listen(4011, "192.168.0.10");