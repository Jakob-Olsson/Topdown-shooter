import { drawMap } from "./map.js";
export let canvas = document.getElementById("canvas");
export let ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

let lastTime;

const player = {
    x: 475,
    y: 600,
    width: 50,
    height: 50,
    left: false,
    right: false,
    up: false,
    down: false,
    speed: 800,
    color: "red",
    update: function () {
        // Update logic for the player, if needed
    }
};

const keys = {};

const camera = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    scale: 1, //ändra för zoom
    follow: function (player) {
        this.x = player.x - this.width / (2 * this.scale);
        this.y = player.y - this.height / (2 * this.scale);

    },
}

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(
        (player.x - camera.x) * camera.scale,
        (player.y - camera.y) * camera.scale,
        player.width * camera.scale,
        player.height * camera.scale
    );
}

function drawBackground() {
    const checkerSize = 40;
    for (let x = 0; x < canvas.width; x += checkerSize) {
        for (let y = 0; y < canvas.height; y += checkerSize) {
            ctx.fillStyle = (x / checkerSize + y / checkerSize) % 2 === 0 ? "#eee" : "#ddd";
            ctx.fillRect(x, y, checkerSize, checkerSize);

        }
    }
}

function playerMovement(deltaTime) {
    if (player.left && player.x > 0) {
        player.x -= player.speed * deltaTime;
    }
    if (player.right && player.x + player.width < canvas.width) {
        player.x += player.speed * deltaTime;
    }
    if (player.up && player.y > 0) {
        player.y -= player.speed * deltaTime;
    }
    if (player.down && player.y + player.height < canvas.height) {
        player.y += player.speed * deltaTime;
    }
}

function gameLoop() {
    let now = Date.now();
    let deltaTime = (now - lastTime) / 1000;
    lastTime = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    drawBackground();
    drawMap();
    drawPlayer()

    playerMovement(deltaTime);
    camera.follow(player);


    requestAnimationFrame(gameLoop);
}

function initGame() {
    lastTime = Date.now();
    canvas.focus();
    requestAnimationFrame(gameLoop);




}

// Move listener
window.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft") {
        player.left = true;
    } else if (event.key == "ArrowUp") {
        player.up = true;
    } else if (event.key == "ArrowRight") {
        player.right = true;
    } else if (event.key == "ArrowDown") {
        player.down = true;
    }
});

// Stop listener
window.addEventListener("keyup", function (event) {
    console.log("Keyup:", event.key);
    if (event.key == "ArrowLeft") {
        player.left = false;
    } else if (event.key == "ArrowUp") {
        player.up = false;
    } else if (event.key == "ArrowRight") {
        player.right = false;
    } else if (event.key == "ArrowDown") {
        player.down = false;
    }
});

window.addEventListener("keydown", function (event) {
    if (event.key == "z") {
        camera.scale *= 1.2;
    } else if (event.key == "x") {
        camera.scale /= 1.2;
    }
});
initGame();