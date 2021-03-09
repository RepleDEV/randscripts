process.on("SIGINT", () => {
    console.log("SIGINT!");
    process.exit();
});

setInterval(() => {
    console.log("tick");
}, 1000);