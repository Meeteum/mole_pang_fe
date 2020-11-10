import React, {useRef, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import hole from "../Img/hole.png";
import mole from "../Img/mole.png";
import background from "../Img/background.png"
import hammer from "../Img/hammer.png"
import bumb from "../Img/bumb.png"


const gameSetting = {
    "GAME_W":960,
    "GAME_H":530,
    "GAME_C_W":20,
    "GAME_C_H":30,
    "FIRST_MOLE_X":233,
    "FIRST_MOLE_Y":30,
    "MOLE_INTERVAL_X":207,
    "MOLE_INTERVAL_Y":133,
};

const GameBackground = styled.div`
    width: 960px;
    height: 530px;
    background-image: url(${background});
    
    ${(props) => props.isClick ? css`cursor: url(${bumb}), auto` : css`cursor: url(${hammer}), auto`}
   
`;

const GameCanvas = styled.canvas.attrs({
    width: 960,
    height: 530})`
    // width: 960px;
    // height: 530px;

`;

let count = 0;

let curMouseXY = [0, 0];
let preMouseXY = [1, 1];


const gameRender = () => {

    const gameContext = gameCanvas.getContext('2d');

    if(count % 400 === 0){
        gameContext.clearRect(0, 0, gameSetting["GAME_W"], gameSetting["GAME_H"]);
        for(let i = 0; i < 9; i++)
        {
            moleArrayData[i]= {...moleArrayData[i], "isGame":Math.floor(Math.random() * 2)};
        }
    }


    // moleArrayData[0]= {...moleArrayData[0], "isGame":true};
    // moleArrayData[4]= {...moleArrayData[4], "isGame":true};
    // moleArrayData[7]= {...moleArrayData[7], "isGame":true};
    // console.log(moleArrayData);
    // console.log(moleArrayData);
    
    /*
    - 게임 시작
    - 라운드 시작
    - 답 받아오기
    - 두더지가 라운드에 나오는 지 정함
    - 각 두더지 예시 정함
    */


    if(count % 32 === 0){
        moleRender(gameContext);
        // hammerRender();
    }

    count += 1;

    return window.requestAnimationFrame(gameRender);

}

const moleRender = (gameContext) => {
    let moleImg = new Image();
    moleImg.src = mole;
    moleImg.onload = function() {
        for(let i = 0; i < 9; i ++){
            if(moleArrayData[i]["isGame"]){
                // console.log(moleArrayData[i]["position"]);
                gameContext.drawImage(moleImg, moleArrayData[i]["position"][0], moleArrayData[i]["position"][1], 78, 110);   
            }
        }
    }
}

const hammerRender = () => {
    let context = gameCanvas.getContext('2d');
    preMouseXY = curMouseXY;
    gameCanvas.addEventListener("mousemove", function(e) {
        // isMouseNoMove = false;
        // refCurrent.getContext('2d').clearRect(0, 0, gameSetting["GAME_W"], gameSetting["GAME_H"]);
        let hammerImg = new Image();
        hammerImg.src = hammer;
        hammerImg.onload = function() {
            curMouseXY = [e.layerX, e.layerY];
            context.drawImage(hammerImg, e.layerX, e.layerY, 150, 36);   
        }
        // console.log(hammerImg);
      });
    
}


// let moleData = {
//     id:1,
//     position:[0,0],
//     isAnswer:"false",
//     example:"기본",
//     isGame:false,  //해당 라운드 나오는 유무
// };

let moleArrayData = [];

// let randomNumY = Math.floor(Math.random() * 3) + 1;

let gameCanvas;
function GamePlay(){

    const [isMouseClick, setIsMouseClick] = useState(false);
    const [isGameInit, setIsGameInit] = useState(true);

    const onMouseClick = () => {
        setIsMouseClick(!isMouseClick);
    };

    // (233, 30)  (440, 30),  (647, 30)    - 207 / 133
    // (233, 163)
    // (233, 296)
    const setInitPole = () => {
        for(let i = 0; i < 9; i++){
            // moleArrayData.push({id: i, position: [(i%3+1)*gameSetting["GAME_W"]/4-gameSetting["GAME_C_W"], (parseInt(i/3)+1)*gameSetting["GAME_H"]/4-gameSetting["GAME_C_H"]], isAnswer:false, example:"", isGame:true});
            moleArrayData.push({id: i, position: [gameSetting["FIRST_MOLE_X"]+(i%3)*gameSetting["MOLE_INTERVAL_X"], gameSetting["FIRST_MOLE_Y"]+(parseInt(i/3))*gameSetting["MOLE_INTERVAL_Y"]], isAnswer:false, example:"", isGame:false});
            // moleArrayData.push({id: i, position: [233, 163], isAnswer:false, example:"", isGame:true});
        }

        //gameSetting["FIRST_MOLE_X"]
        //gameSetting["MOLE_INTERVAL_X"]
    };
    // console.log(moleArrayData);

    let gameCanvasRef = useRef();
     
    useEffect(() => {
        if(isGameInit)
        {
            setIsGameInit(false);
            setInitPole();
            console.log(moleArrayData);
        }
        let cmp = gameCanvasRef.current;
        gameCanvas = cmp;
        console.log(cmp);

        let t = window.requestAnimationFrame(gameRender);

        });

    return(
        <GameBackground onMouseDown={onMouseClick} onMouseUp={onMouseClick} isClick={isMouseClick}>
            <GameCanvas ref={gameCanvasRef} />
        </GameBackground>
    );

}

export default GamePlay;
