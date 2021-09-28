



// Create the sprite and add it to the stage
function createAllBalls(numBalls) {
    let idx = balls.length;
    for(let i = 0; i < numBalls; ++i) {
        let ball =  createBall();
        balls[idx] = ball;
        idx++;
    }
}

// removes balls
function clearBalls() {
    for(let i = 0; i < balls.length; ++i) {
        app.stage.removeChild(balls[i].sprite);
    }
    balls = [];
    frozen = false;
}

// creates ball to follow recorded path. Also updates pegs to show ball hits
function forcePrize(id) {

    // create a list of all balls records with the correct prize
    let indexs = [];
    for(let i = 0; i < ballRecords.length; ++i) {
        if(ballRecords[i].prize == id+1) {
            indexs[indexs.length] = i;
        }
    }

    if(indexs.length > 0) {
        // pick a matching ball record at random
        let res = indexs[Math.floor(Math.random() * indexs.length)];
        balls[balls.length] = createBall(res);

        // update pegs to show where this ball will hit
        updatePegsToShowRecordedPath(res);
    }
}

// create a ball 
// if recordIdx is valid, will use recorded data to set ball path, otherwise random
let ballcount = 0;
function createBall(recordIdx = -1) {

    let recorded = false;
    if(recordIdx >= 0 && recordIdx < ballRecords.length) {
        recorded = true;
    }

    let name = "ball.png";

    if(recorded) {
        name = "ball.png";
    }
   
    let y = startY;
    let x = 0;
    if(recorded) {
        x = ballRecords[recordIdx].startX;
    } else {
        x += (xsize / 2) + randomStartXVariation() - (pegXOffset);
    }

    let emitter = null;
    if (doParticles) {
        emitter  = createBallEmitter(app.stage);
        emitter.emit = true;
        emitter.resetPositionTracking();
        emitter.updateOwnerPos(x, y);
    }
    ballcount++;
    let s = PIXI.Sprite.from(name);
    app.stage.addChild(s);
    s.scale.x = ballScale;
    s.scale.y = ballScale;

    let ballText = new PIXI.Text('0', fontStyle);
    ballText.x = radius/2;
    ballText.y = radius/2;
    //s.addChild(ballText);

    s.x = x - radius;
    s.y = y - radius;
    let rndms = [];
    if(recorded) {
        rndms = ballRecords[recordIdx].randomDirections;    
    } else {
        for(i = 0; i < randomsDirectionsPerBall; ++i) {
            if(Math.random() < 0.5) {
                rndms[i] = -1;
            } else 
            {
                rndms[i] = 1;
            }
        }
    }


    

    let res = { recordIdx: recordIdx,
                id: ballcount, 
                x:x, y:y, 
                startX:x,
                dx:0,dy:0,
                sprite: s, 
                name: name, 
                randomDirections: rndms, 
                randomIdx: 0,
                text: ballText,
                count: 0,
                lastPegHit: -1,
                bounceRecord: [],
                repeatBounceCount:0,
                emitter: emitter};
    return res;
}



// ball has hit the bottom of the triangle - reset it to the top
function recycleBall(ball) {
    ball.y = startY;
    ball.x = (xsize / 2) + randomStartXVariation() - (pegXOffset);
    ball.startX = ball.x;
    ball.dx = 0;
    ball.dy = 0;     
    ball.count = 0;
    ball.text.text = "0";
    ball.randomIdx = 0;
    ball.lastPegHit = -1;
    ball.bounceRecord = [];
    ball.repeatBounceCount = 0;

    resetPegs();

}


function moveBall(ball, timeDelta) {
    ball.x += ball.dx * timeDelta;
    ball.y += ball.dy * timeDelta;
    ball.sprite.x = ball.x - ball_radius;
    ball.sprite.y = ball.y - ball_radius;
}


function revertBallMove(ball, timeDelta) {
    ball.x -= ball.dx * timeDelta;
    ball.y -= ball.dy * timeDelta;
    ball.sprite.x = ball.x - ball_radius;
    ball.sprite.y = ball.y - ball_radius;
}


function bounceAway(ball, peg, timeDelta) {
    // get unit vector from peg to ball
    let pb = { x: (peg.x - ball.x), y: (peg.y - ball.y) }
    let mag = Math.sqrt(pb.x * pb.x + pb.y * pb.y);
    pb.x /= mag;
    pb.y /= mag;

    mag = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
    if (mag < 0.1) {
        ball.dx = -pb.x * mag * 2.1;
        ball.dy = -pb.y * mag * 2.1;
    }
    if (mag < 1) {
        ball.dx = -pb.x * mag * 1.1;
        ball.dy = -pb.y * mag * 1.1;
    }
    else {
        let x_dampener = document.getElementById("x_dampener").value;
        let y_dampener = document.getElementById("y_dampener").value;
        ball.dx = -pb.x * mag * x_dampener;
        ball.dy = -pb.y * mag * y_dampener;
    }

    let dxLim = document.getElementById("dxLim").value;

    // make sure there's x movement
    if (ball.dx > -dxLim && ball.dx < dxLim) {

        if (getRandomDirection(ball) == -1) {
            ball.dx = -dxLim;
        } else {
            ball.dx = dxLim;
        }
    }
}




