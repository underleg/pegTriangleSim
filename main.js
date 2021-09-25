    

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ backgroundColor: 0xffffff, width: xsize, height:ysize });
document.body.appendChild(app.view);



function loadBackground() {
    let name = "bg.png";

    let s = PIXI.Sprite.from(name);
    app.stage.addChild(s);
}


loadBackground();



createPegBoard();
createPrizeCounters();


app.stage.scale.x = 0.8;
app.stage.scale.y = 0.8;


createAllBalls(1);
let slowmo = false;

createAllPrizeEmitters();



// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {

    delta = 1.6;

    let iterations = 2;
    if(slowmo) {
        iterations = 1;
    }

    for(let it = 0; it < iterations; ++ it) {
        
        elapsed += delta;

        if(frozen == false) {
            
            let destroyBalls = [];

            if(prizeSteam && elapsed > 30.0) {
                let idx = Math.floor(Math.random()*ballRecords.length);
                forcePrize(ballRecords[idx].prize - 1);
                elapsed -= 30.0;
            }

            updateAllPrizeEmitters(delta);

            for(i = 0; i < balls.length; ++i) {

                if(balls[i].y < 0.0)
                {
                    balls[i].dy = 1;
                }

                let gravity = document.getElementById("gravity").value;
                balls[i].dy += gravity * delta;
                moveBall(balls[i], delta);

                if(balls[i].emitter) {
                    
                    balls[i].emitter.updateOwnerPos(balls[i].x,balls[i].y);
                    balls[i].emitter.update(delta * 0.001);
                }
                
                if(balls[i].y > slowmoLine) {
                    slowmo = true;
                }
                
                // ball is at the end - record prize and recycle / destroy
                if(balls[i].y > pegYLine)
                {
                    countPrize(balls[i]);
                    if(balls[i].recordIdx >= 0) {
                        destroyBalls[destroyBalls.length] = i;
                    } else {
                        recycleBall(balls[i]);
                        slowmo = false;
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
                assert(destroyBalls[0] >= 0 && destroyBalls[0] < balls.length, "out of bounds");
                assert(balls[destroyBalls[0]].hasOwnProperty('sprite'), "sprite doesn't exist");
                
                app.stage.removeChild(balls[destroyBalls[0]].sprite);  
                balls.splice(destroyBalls[0], 1);     
                destroyBalls.splice(0,1);

            }
        }
    }
});

