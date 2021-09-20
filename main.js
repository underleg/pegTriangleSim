    

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ backgroundColor: 0x2900b9, width: xsize, height:ysize });
document.body.appendChild(app.view);



createPegBoard();
createPrizeCounters();


// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {

    delta = 1.6;

    elapsed += delta;

    if(frozen == false) {
        
        let destroyBalls = [];

        if(prizeSteam && elapsed > 30.0) {
            let idx = Math.floor(Math.random()*ballRecords.length);
            forcePrize(ballRecords[idx].prize - 1);
            elapsed -= 30.0;
        }

        for(i = 0; i < balls.length; ++i) {

            if(balls[i].y < 0.0)
            {
                balls[i].dy = 1;
            }

            let gravity = document.getElementById("gravity").value;
            balls[i].dy += gravity * delta;
            moveBall(balls[i], delta);
            // ball is at the end - record prize and recycle / destroy
            if(balls[i].y > pegYLine)
            {
                countPrize(balls[i]);
                if(balls[i].recordIdx >= 0) {
                    destroyBalls[destroyBalls.length] = i;
                } else {
                    recycleBall(balls[i]);
                }
            } else {
                // bounce off walls
                if(balls[i].x < wallXSize || balls[i].x > xsize - wallXSize) {
                    balls[i].dx *= -1;
                }

                // bounce off pegs
                for(let j = 0; j < pegs.length; ++j)
                {
                    if( isColliding(pegs[j].x, pegs[j].y, balls[i].x, balls[i].y)) {
                        revertBallMove(balls[i], delta);
                        incrementCounts(balls[i], pegs[j]);
                        bounceAway(balls[i], pegs[j], delta);
                    } 
                }
            }
        }

        while(destroyBalls.length > 0) {
            console.log(balls[destroyBalls[0]].sprite);
            app.stage.removeChild(balls[destroyBalls[0]].sprite);  
            balls.splice(destroyBalls[0], 1);     
            destroyBalls.splice(0,1);

        }
    }
});

