function startGame(gameType) {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    if (gameType === "game1") {
        // لعبة بسيطة باستخدام Canvas
        game1(ctx, canvas);
    } else if (gameType === "game2") {
        // يمكنك إضافة لعبة أخرى هنا
        game2(ctx, canvas);
    }
}

function game1(ctx, canvas) {
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    const ballRadius = 10;
    const paddleHeight = 10;
    const paddleWidth = 75;
    let paddleX = (canvas.width - paddleWidth) / 2;

    // رسم الكرة
    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    // رسم المضرب
    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    // تحريك الكرة
    function moveBall() {
        x += dx;
        y += dy;

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy < ballRadius) {
            dy = -dy;
        } else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            } else {
                // نهاية اللعبة
                alert("Game Over!");
                document.location.reload();
            }
        }

        drawBall();
        drawPaddle();
    }

    // تحديث اللوحة
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        moveBall();
    }

    setInterval(draw, 10);
}