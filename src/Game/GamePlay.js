import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import background from "../Img/background.png"
import hammer from "../Img/hammer.png"
import bumb from "../Img/bumb.png"
import Mole from "./GameObject/Mole.js";
import BoardText from "./GameObject/BoardText.js";


const gameStageData = [
    {
        stage: 1,
        consonant: "ㄱㅁㅎ",
        problem: ["곰마하", "김미후", "곤마히", "가만히"],
        answer: 4,
    },
    {
        stage: 2,
        consonant: "ㄱㅂ",
        problem: ["기빈", "가방", "구번", "고본"],
        answer: 1,
    },

    {
        stage: 3,
        consonant: "ㄲ",
        problem: ["낄", "꼴", "꿀", "깡"],
        answer: 2,
    },

];

const gameSetting = {
    "GAME_W": 960,
    "GAME_H": 600,
    "GAME_C_W": 20,
    "GAME_C_H": 30,
    "FIRST_MOLE_X": 234,
    // "FIRST_MOLE_Y": 279,
    "FIRST_MOLE_Y": 288,
    "MOLE_INTERVAL_X": 207,
    "MOLE_INTERVAL_Y": 74,
};


// set cursor img
const GameBackground = styled.div`
    width: 960px;
    height: 600px;
    background-image: url(${background});
    
    // ${(props) => props.isClick ? css`cursor: url(${bumb}), auto` : css`cursor: url(${hammer}), auto`}
   
`;

const GameCanvas = styled.canvas.attrs({
    width: 960,
    height: 600
})`
    // width: 960px;
    // height: 530px;

`;

let preCount = 0;
let count = 0;
let stage = 0;

// Val Game Frame
let frame = 32
// 0: 문제랑 두더지가 나옴
let gameState = 0;


// 9개의 두더지에 임의 값을 넣고, 그 중 최대 값 3~ 4 개인 두더지만 뽑아서 현 라운드에 보여준다.
const setMoleIsGame = (numProblem) => {
    let randomValueList = [];        // Random value list of 1~9 mole (보여질 두더지를 뽑기 위한 각 두더지의 랜덤값리스트) 
    let numMole = numProblem;        // Show Mole number (현 라운드에 보여질 두더지 수)
    let isGameMoleList = [];         // show Mole id on current stage (현 라운드에 보여질 두더지 id)
    // set randomValueList
    for (let i = 0; i < 9; i++) {
        randomValueList.push(Math.floor(Math.random() * 1000));
    }

    // select top 3~4 mole
    let preMax = 1000;
    for (let r = 0; r < numMole; r++) {
        let max = 0;
        for (let n = 0; n < 9; n++) {
            if (max < randomValueList[n] && randomValueList[n] < preMax) {
                max = randomValueList[n];
                isGameMoleList[r] = n;
            }
        }
        preMax = max;
    }

    return isGameMoleList;
}


// {
//     stage: 1,
//     consonant: "ㄱㅁㅎ",
//     problem: ["곰마하", "김미후", "곤마히", "가만히"],
//     answer: 3,
// },

const gameRender = () => {

    if (count % frame === 0) {
        // Stage Start
        if (gameState === 0) {
            let curStageMoleList = setMoleIsGame(gameStageData[stage]["problem"].length);
            let k = 0;
            curStageMoleList.forEach((element) => {
                let isAnswer = 2;
                if (gameStageData[stage]["answer"] === k) {
                    isAnswer = 1;
                }
                let moleStageData = {
                    stage: gameStageData[stage]["stage"],
                    problem: gameStageData[stage]["problem"][k],
                    isAnswer: isAnswer,
                    isGame: true
                };

                Moles[element].update({ gameState: gameState, moleStageData: moleStageData });
                k++;
            });

            // for (let i = 0; i < 9; i++) {

            //     Moles[i].setIsgGame(curStageMoleList.includes(i));
            //     Moles[i].update(gameState);
            //     gameStageData()
            // }

            // Moles.forEach((element) => {
            //     element.update(gameState);
            // })

            gBoardText.update({ gameState: gameState, boardStageData: gameStageData[stage] });
            gameState = 1;
        }

        if (gameState === 1) {
            let numStageClear = [];
            gameCanvas.addEventListener("click", function (e) {
                Moles.forEach((element) => {
                    // numStageClear = element.update({ gameState: gameState, mousePos: { x: e.layerX, y: e.layerY } });
                    numStageClear.push(element.update({ gameState: gameState, mousePos: { x: e.layerX, y: e.layerY } }));
                })
                if (numStageClear.includes(2)) {
                    gameState = 2;
                    preCount = count;
                }
            });
        }

        if (gameState === 2) {

            gBoardText.update({ gameState: gameState });

            if (preCount + 100 < count) {
                Moles.forEach((element) => {
                    // numStageClear = element.update({ gameState: gameState, mousePos: { x: e.layerX, y: e.layerY } });
                    element.update({ gameState: gameState });
                })
                gameState = 0;
                stage += 1;
                console.log("Next Stage");
            }
        }



        // Moles[2].setIsGame(true);
    }


    if (count % frame === 0) {

        gameContext.clearRect(0, 0, gameSetting["GAME_W"], gameSetting["GAME_H"]);

        Moles.forEach((element) => {
            // element.setIsGame(true);
            element.render();
        });

        gBoardText.render({ gameState: gameState });

    }

    count += 1;

    return window.requestAnimationFrame(gameRender);

}

const boardRender = ({ x, y, width, height, color }) => {
    gameContext.strokeStyle = color;
    gameContext.rect(x - width / 2, y - height / 2, width, height);
    gameContext.stroke();
}

let moleArrayData = [];
let Moles = [];
let gBoardText = null;

let gameCanvas;
let gameContext;
let isSceneChange = true;

function GamePlay() {

    const [isMouseClick, setIsMouseClick] = useState(false);

    const onMouseClick = () => {
        setIsMouseClick(!isMouseClick);
    };

    const setInitMole = () => {
        // for (let i = 0; i < 9; i++) {
        //     // moleArrayData.push({id: i, position: [(i%3+1)*gameSetting["GAME_W"]/4-gameSetting["GAME_C_W"], (parseInt(i/3)+1)*gameSetting["GAME_H"]/4-gameSetting["GAME_C_H"]], isAnswer:false, example:"", isGame:true});
        //     moleArrayData.push({ id: i, position: [gameSetting["FIRST_MOLE_X"] + (i % 3) * gameSetting["MOLE_INTERVAL_X"], gameSetting["FIRST_MOLE_Y"] + (parseInt(i / 3)) * gameSetting["MOLE_INTERVAL_Y"]], isAnswer: false, example: "", isGame: false });
        // }

        // 207 , 74
        // (234,279) (442,279) (649,279)   - 207
        // (234,353) (442,353) (649,353)   - 207
        // (234,427) (442,427) (649,427)   - 207

        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++)
                Moles.push(new Mole(
                    gameSetting["FIRST_MOLE_X"] + gameSetting["MOLE_INTERVAL_X"] * x,
                    gameSetting["FIRST_MOLE_Y"] + gameSetting["MOLE_INTERVAL_Y"] * y,
                    78,
                    110,
                    x + 3 * y,
                    gameContext)
                );
        }
        // font-family: Jua;
        // font-style: normal;
        // font-weight: normal;
        // font-size: 80px;
        // line-height: 100px;
        // text-align: center;

        gBoardText = new BoardText(385, 225, 100, 100, gameContext);

    };

    let gameCanvasRef = useRef();

    useEffect(() => {

        let cmp = gameCanvasRef.current;
        gameCanvas = cmp;
        gameContext = gameCanvas.getContext('2d');

        setInitMole();

        let t = window.requestAnimationFrame(gameRender);

    }, []);

    return (
        <GameBackground onMouseDown={onMouseClick} onMouseUp={onMouseClick} isClick={isMouseClick}>
            <GameCanvas ref={gameCanvasRef} />
        </GameBackground>
    );

}

export default GamePlay;
