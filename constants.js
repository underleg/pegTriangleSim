
const xsize = 541;
const ysize = 1001;

const cupXCoords = [54, 148, 230, 309, 389, 486];

const frozenLimit = 100;

const radius = 16
const ball_radius = 9;
const collision_radius = 20;
const ballScale = (radius + 2.0)/ 16.0;
const pegScale = (radius + 0.0)/ 20.0;
const diameter = 14 + 6;
const cos30 = 0.86602540378;

const startY = -10;

const ballGap = 1;

const wallXSize = 2;

const  randomsDirectionsPerBall = 10;

const fontStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    align: "center",
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#000000'], 
});
