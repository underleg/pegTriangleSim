



// turn on/off continueous stream prizes with recorded paths
function forcePrizeStream() {
    prizeStream = !prizeStream;
}



function destroyPrizeParticles(ball) {
    if (ball.emitter) {
        ball.emitter.cleanup();
        ball.emitter.destroy();
    }
}




// singlepeg contructor
function addPeg(id, x,y) {
    // Create the sprite and add it to the stage
    let name = "peg.png"; 
    let sprite = PIXI.Sprite.from(name);
    app.stage.addChild(sprite);
    sprite.scale.x = pegScale;
    sprite.scale.y = pegScale;

    sprite.x = x - radius;
    sprite.y = y - radius;

    // Create the alternate sprite and add it to the stage
    name = "peg_pink.png";
    let sprite2 = PIXI.Sprite.from(name);
    app.stage.addChild(sprite2);
    sprite2.scale.x = pegScale;
    sprite2.scale.y = pegScale;

    sprite2.x = x - radius;
    sprite2.y = y - radius;
    sprite2.visible = false;
    

    let pegText = new PIXI.Text(0, fontStyle);
    pegText.x = radius/2;
    pegText.y = radius/2;
    //sprite.addChild(pegText);

    pegs[pegs.length] = { id: id, x: x, y: y, sprite: sprite, sprite2: sprite2, text: pegText, count:0};
}


// create whole peg board
function createPegBoard() {
    
    let x = xsize / 2 - pegXOffset;
    let y = 120 + 14 + 10;
    let step = 80; //67;
    let pegCount = 1;

    // row 1
    addPeg(pegCount, x,y);

    // rows 2+
    let startX = (xsize / 2) - pegXOffset - (step / 2);
        
    for(let i = 2; i <=5; ++i) {
        x = startX;
        y += step*cos30;
        for(let j = 0; j < i; ++j) {
            pegCount++;
            addPeg(pegCount, x,y);
            x += step;
        }
        startX -= step/2;
    }

    pegYLine = y + 75;
    slowmoLine = pegYLine - 120;

    resetPegs();

}

function resetPegs() {
    for (let i = 0; i < pegs.length; ++i) {
        pegs[i].sprite2.visible = false;
        pegs[i].sprite.visible = true;
    }
}


// update peg string to show where recorded ball will hit
function updatePegsToShowRecordedPath(idx) {

    resetPegs();

    if(idx >= 0 && idx < ballRecords.length) {

        // look at each peg
        for (let i = 0; i < pegs.length; ++i) {
            let lit = false;
            let s = "-";
            // if peg hit by the recorded ball?
            for(let j = 0; j < ballRecords[idx].bounceRecord.length; ++j) {
                if(ballRecords[idx].bounceRecord[j] == i+1) {
                    s = "X";
                    lit = true;
                    break;
                }
            }
            pegs[i].text.text = s;

            if (lit) {
                pegs[i].sprite2.visible = true;
                pegs[i].sprite.visible = false;
            }
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

    let x = (xsize / 2) - (60 * 2.5);

    for(let i = 0; i < 6; ++i) {

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
    emitters[0] = createPrizeEmitter1(app.stage);
    emitters[1] = createPrizeEmitter2(app.stage);
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
            e[j].updateOwnerPos(prizeX,475); 
            
            e[j].update(delta * 0.001);
        }
    }
}



// count which bucket the ball has fallen into based on x coord
let numPrizesAwarded = 0;
function countPrize(ball) {

    let idx = 0;

    if(ball.x < pegs[10].x) {
        idx = 0;
        prizeX = cupXCoords[0];
    } else if(ball.x < pegs[11].x) {
        idx = 1;
        prizeX = cupXCoords[1];
    }else if(ball.x < pegs[12].x) {
        idx = 2;
        prizeX = cupXCoords[2];
    }else if(ball.x < pegs[13].x) {
        idx = 3;
        prizeX = cupXCoords[3];
    }else if(ball.x < pegs[14].x) {
        idx = 4;
        prizeX = cupXCoords[4];
    } else {
        prizeX = cupXCoords[5];
        idx = 5;
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




