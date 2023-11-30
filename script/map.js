import {ctx} from "./script.js";


const tileW = 40;
const tileH = 40;

const gridRows = 20;
const gridCols = 20;

var map = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,
    1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,
    1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,
    1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,
    1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,
    1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,
    1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ];


 export function drawMap() {
    for (let eachRow = 0; eachRow < gridRows; eachRow++) {
      for (let eachCol = 0; eachCol < gridCols; eachCol++) {
        let arrayIndex = eachRow * gridRows + eachCol;
        

        if(map[arrayIndex] === 1) {
          ctx.fillStyle = "black";
          ctx.fillRect(tileW * eachCol, tileH * eachRow, tileW, tileH)
        }
        /*else {
          ctx.fillStyle = "blue";
          ctx.fillRect(tileW * eachCol, tileH * eachRow, tileW, tileH);
        }*/
      }
    }
  }