



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

// turn on/off continueous stream prizes with recorded paths
function forcePrizeStream() {
    prizeSteam = !prizeSteam;
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
        x += (xsize / 2) + randomStartXVariation();
    }

    let emitter = createBallEmitter(app.stage);
    emitter.emit = true;
    emitter.resetPositionTracking();
    emitter.updateOwnerPos(x,y);


    
    ballcount++;
    let s = PIXI.Sprite.from(name);
    app.stage.addChild(s);
    s.scale.x = ballScale;
    s.scale.y = ballScale;

    let ballText = new PIXI.Text('0', fontStyle);
    ballText.x = radius/2;
    ballText.y = radius/2;
    s.addChild(ballText);

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
    ball.x = (xsize / 2) + randomStartXVariation();
    ball.startX = ball.x;
    ball.dx = 0;
    ball.dy = 0;     
    ball.count = 0;
    ball.text.text = "0";
    ball.randomIdx = 0;
    ball.lastPegHit = -1;
    ball.bounceRecord = [];
    ball.repeatBounceCount = 0;

}

// singlepeg contructor
function addPeg(id, x,y) {
    // Create the sprite and add it to the stage
    let name = "peg.png";
    let sprite = PIXI.Sprite.from(name);
    app.stage.addChild(sprite);
    sprite.scale.x = pegScale;
    sprite.scale.y = pegScale;

    sprite.x = x - radius*1.7;
    sprite.y = y - radius - 5 ;

    let pegText = new PIXI.Text(0, fontStyle);
    pegText.x = radius/2;
    pegText.y = radius/2;
    //sprite.addChild(pegText);

    pegs[pegs.length] = {id:id, x:x,y:y,sprite:sprite, text: pegText, count:0};
}


// create whole peg board
function createPegBoard() {
    
    let x = xsize / 2;
    let y = 120;
    let step = 67;
    let pegCount = 1;

    // row 1
    addPeg(pegCount, x,y);

    // rows 2+
    let startX = (xsize / 2) - (step / 2);
        
    for(let i = 2; i <=6; ++i) {
        x = startX;
        y += step*cos30;
        for(let j = 0; j < i; ++j) {
            pegCount++;
            addPeg(pegCount, x,y);
            x += step;
        }
        startX -= step/2;
    }

    pegYLine = y + 70;
    slowmoLine = pegYLine - 100;

}


// update peg string to show where recorded ball will hit
function updatePegsToShowRecordedPath(idx) {
    
    if(idx >= 0 && idx < ballRecords.length) {

        // look at each peg
        for(let i = 0; i < pegs.length; ++i) {
            let s = "-";
            // if peg hit by the recorded ball?
            for(let j = 0; j < ballRecords[idx].bounceRecord.length; ++j) {
                if(ballRecords[idx].bounceRecord[j] == i+1) {
                    s = "X";
                    break;
                }
            }
            pegs[i].text.text = s;
        }
    }
}



// create ball counters at bottom of screen - one for each prize bucket
function createPrizeCounters() {

    const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        align: "center",
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff'], 
    });

    let x = (xsize / 2) - (60 * 3);

    for(let i = 0; i < 7; ++i) {

        let cntrText = new PIXI.Text(0, style);
        cntrText.x = x;
        cntrText.y = 100 * 9 + 50;
        app.stage.addChild(cntrText);

        prizeCounts[prizeCounts.length] = { id: (i+1), text: cntrText, count: 0 };

        x += 60;
    }
}


function createPrizeParticles(x,y) {
    let emitters = [];
    emitters[0] = createPrizeEmitter2(app.stage);
    emitters[1] = createPrizeEmitter1(app.stage);
    emitters[2] = createPrizeEmitter3(app.stage);

    for(let i = 0; i > emitters.length; ++i) {
        
        emitters[i].emit = false;
        emitters[i].resetPositionTracking();
        emitters[i].updateOwnerPos(x,y);
    }
    return emitters;
}


function createAllPrizeEmitters() {
    prizeEmitters[0] = createPrizeParticles(400,800);
    togglePrizeEmitters(false);
}

function togglePrizeEmitters(tf) {
    
    for(let i = 0; i < prizeEmitters.length; ++i) {
        let e = prizeEmitters[i];
        for(let j = 0; j < e.length; ++j) {
            e[j].emit = tf;
        }
    }
}


function updateAllPrizeEmitters(delta) {
    
    for(let i = 0; i < prizeEmitters.length; ++i) {
        let e = prizeEmitters[i];

        for(let j = 0; j < e.length; ++j) {
        
            e[j].resetPositionTracking();
            e[j].updateOwnerPos(prizeX,460); 
            
            e[j].update(delta * 0.001);
        }
    }
}



// count which bucket the ball has fallen into based on x coord
let numPrizesAwarded = 0;
function countPrize(ball) {
    togglePrizeEmitters(true);
    let idx = 0;
    if(ball.x < pegs[15].x) {
        idx = 0;
        prizeX = 50;
    } else if(ball.x < pegs[16].x) {
        idx = 1;
        prizeX =131; 
    }else if(ball.x < pegs[17].x) {
        idx = 2;
        prizeX = 205;
    }else if(ball.x < pegs[18].x) {
        idx = 3;
        prizeX = 270;
    }else if(ball.x < pegs[19].x) {
        idx = 4;
        prizeX = 336;
    }else if(ball.x < pegs[20].x) {
        prizeX = 410;
        idx = 5;
    }else {
        prizeX = 490;
        idx = 6;
    }

    prizeCounts[idx].count++;
    prizeCounts[idx].text.text = prizeCounts[idx].count;

    numPrizesAwarded++;

    let lim = frozenLimit;
    let inputVal = document.getElementById("ballLimit").value;
    if(inputVal > 0) {
        lim = inputVal;
    }

    if(numPrizesAwarded >= lim) {
        frozen = true;
    }

    // record good ball drops (plenty of peg hits, not too many stalls)
    if(record.length < 1000 && ball.bounceRecord.length >= 3 && ball.repeatBounceCount <= 6) 
    {     
       //console.log("ball.repeatBounceCount = " +ball.repeatBounceCount)
        record[record.length] = 
        { 
            prize: (idx + 1),
            numPegs: ball.bounceRecord.length,
            startX: ball.startX,
            randomDirections: ball.randomDirections,
            bounceRecord: ball.bounceRecord
        };
    }
}



function isColliding(x1,y1,x2,y2) {
    let d2 = (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
    if(d2 < diameter*diameter)
        return true;
    return false;
}

// returns a number -3 and 3 representing start position variation in x coord
function randomStartXVariation() {

    let res = 500 + Math.floor(Math.random() * 501); // 500 - 1000 (inclusive)
    
    if(Math.random() < 0.5) {
         res *= -1;
    }
    
    // either -1000 to -500 or 500 to 1000

    res *= 2;

    res /= 1000;

    // either -2.0 to -1.0 or 1.0 to 2.0

    return res;
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

function incrementCounts(ball, peg) {
    if(peg.id != ball.lastPegHit) { // don't count double bounces
        ball.lastPegHit = peg.id;
        ball.count++;
        ball.text.text = ball.count.toString(); 

        peg.count++;
        peg.text.text = peg.count.toString();

        
        ball.bounceRecord[ball.bounceRecord.length] = peg.id;
        
       
    } else {
        ball.repeatBounceCount++;
    }
}

function getRandomDirection(ball) {
    if(ball.randomDirections.length > ball.randomIdx) {
        let res = ball.randomDirections[ball.randomIdx];
        ball.randomIdx = (ball.randomIdx % randomsDirectionsPerBall);
        return res;
    }
    else return -1;
}



function bounceAway(ball, peg, timeDelta) {
    // get unit vector from peg to ball
    let pb = { x: (peg.x - ball.x), y: (peg.y - ball.y)}
    let mag = Math.sqrt(pb.x*pb.x + pb.y*pb.y);
    pb.x /= mag;
    pb.y /= mag;

    mag = Math.sqrt(ball.dx*ball.dx + ball.dy*ball.dy);
    if(mag < 0.1) {
        ball.dx = -pb.x * mag * 2.1;
        ball.dy = -pb.y * mag * 2.1;
    }
    if(mag < 1) {
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
    if(ball.dx > -dxLim && ball.dx < dxLim) {
        
        if (getRandomDirection(ball) == -1) {
            ball.dx = -dxLim;
        } else {
            ball.dx = dxLim;
        }
    }

}

function writeRecord() {


    // record settings in comments
    let s = "\n////////////////////////////////////////////////////////////";
    s += "\n// gravity = " + document.getElementById("gravity").value ;
    s += "\n// x_dampener = " + document.getElementById("x_dampener").value;
    s += "\n// y_dampener = " + document.getElementById("y_dampener").value;
    s += "\n// dxLim = " + document.getElementById("dxLim").value;
    s += "\n////////////////////////////////////////////////////////////"


    // count prize types and record in comments
    let counts = [0,0,0,0,0,0,0];
    let sum = 0;
    for(let i = 0; i < record.length; ++i) {
        counts[record[i].prize - 1]++;
        sum++;
    }

    let a = "\n\n//Counts: ";
    for(i = 0; i < 7; ++i) {
        a += "(" + i + ")" + counts[i] + " ";
    }
    a += " = " + sum;

    s += a;
    
    // output array
    s += "\n\nlet ballRecords = [";
    
    for(let i = 0; i < record.length; ++i) {

        s += "\n// [" + i + "]"; 
        s += "\n{  prize:" + record[i].prize;
        s += ",\n   numPegs:" + record[i].numPegs;
        s += ",\n   startX:" + record[i].startX;
        s += ",\n   bounceRecord: [";
        for(let j = 0; j < record[i].bounceRecord.length - 1; ++j) {
            s += record[i].bounceRecord[j] + ", ";
        }
        s += record[i].bounceRecord[record[i].bounceRecord.length - 1] + "]";
        
        
        
        s += ",\n   randomDirections: [";
        
        for(j = 0; j < record[i].randomDirections.length - 1; ++j) {
            s += record[i].randomDirections[j] + ", ";
        }
        s += record[i].randomDirections[record[i].randomDirections.length - 1] + "]";
        
        // todo bounceRecord
        if(i == record.length - 1) {
            s += "\n}";
        } else { 
            s += "\n},";
        }
    }
    s += "\n];";

    console.log(s);

    alert(a);
 
}




