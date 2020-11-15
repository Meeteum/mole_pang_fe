import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import background from "../Img/background.png"
import hammer from "../Img/hammer.png"
import bumb from "../Img/bumb.png"
import Mole from "./GameObject/Mole.js";
import BoardText from "./GameObject/BoardText.js";
import GameScreenHeader from "./GameScreenHeader.js";


// set cursor img
const GameBackground = styled.div`
    width: 960px;
    height: 600px;
    background-image: url(${background});
    
    ${(props) => props.isClick ? css`cursor: url(${bumb}), auto` : css`cursor: url(${hammer}), auto`}
   
`;

const GameCanvas = styled.canvas.attrs({
    width: 960,
    height: 600
})`
    // width: 960px;
    // height: 530px;

`;

const gameStageData = [
    {
        stage: 1,
        consonant: "ㄱㅁㅎ",
        problem: ["곰마하", "곤마히", "가만히"],
        answer: 2,
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
    {
        stage: 4,
        consonant: "ㄱㄹㄱ",
        problem: ["기러기", "곰돌이", "팽팽이", "흰둥이"],
        answer: 0,
    },
    {
        stage: 3,
        consonant: "ㅅㅅㅅ",
        problem: ["샤사샥", "솔방울", "숭실대", "뭘봐요"],
        answer: 0,
    },

];

// game setting value
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

let preCount = 0;   // Value for state Hold Time Calculation
let count = 0;      // game running time    (게임 클럭)
let stage = 0;      // game stage (stage == 문제)

// Val Game Frame   16 == 60fps,  32 == 30fps
let frame = 32;
// 0: 문제랑 두더지가 나옴
let gameState = 0;

let Moles = [];
let gBoardText = null;
let gameScreenHeader = null;

let gameCanvas;         // canvas id
let gameContext;        // canvas ref

// Any value is put in nine moles, and only a mole with a maximum value of three to four of them is selected and shown in the current round.
// 9개의 두더지에 임의 값을 넣고, 그 중 최대 값 3~ 4 개인 두더지만 뽑아서 현 스테이지에 보여준다. => 스테이지에 보여줄 두더지를 선정한다.
const setMoleIsGame = (numProblem) => {
    let randomValueList = [];        // Random value list of 1~9 mole for showing moles (보여질 두더지를 뽑기 위한 각 두더지의 랜덤값리스트) 
    let numMole = numProblem;        // Show Mole number (현 스테이지에 보여질 두더지 수)
    let isGameMoleList = [];         // show Mole id on current stage (현 스테이지에 보여질 두더지 id)

    let randomState = Math.floor(Math.random() * 2);
    // set randomValueList 0 ~ 999
    for (let i = 0; i < 9; i++) {
        randomValueList.push(Math.floor(Math.random() * 1000));
    }

    // select top 3~4 mole
    let preMax = 1000;
    for (let r = 0; r < numMole; r++) {
        let max = 0;
        for (let n = 0 + randomState; n < 9; n += 2) {
            if (max < randomValueList[n] && randomValueList[n] < preMax) {
                max = randomValueList[n];
                isGameMoleList[r] = n;
            }
        }
        preMax = max;
    }

    return isGameMoleList;
}



let isCorrectAnswer = false;
let isChangeScore = false;

const gameController = () => {

    if (count % 74 === 0) {
        gameScreenHeader.update(gameState);
        if (gameState === 2 && isChangeScore) {
            gameScreenHeader.setIsCorrectAnswer({ isCorrectAnswer: isCorrectAnswer })
            isChangeScore = false;
        }
    }

    // Create Update(calculate & function) Area
    if (count % frame === 0) {
        // Stage Start
        if (gameState === 0) {
            // gameScreenHeader.update(gameState);
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


            gBoardText.update({ gameState: gameState, boardStageData: gameStageData[stage] });
            gameState = 1;
        }

        // check if user correct answer in stage
        if (gameState === 1) {
            // gameScreenHeader.update(gameState);
            gameCanvas.addEventListener("click", function (e) {
                let numStageClear = [];
                Moles.forEach((element) => {
                    // numStageClear = element.update({ gameState: gameState, mousePos: { x: e.layerX, y: e.layerY } });
                    numStageClear.push(element.update({ gameState: gameState, mousePos: { x: e.layerX, y: e.layerY } }));
                })
                // correct answer
                if (numStageClear.includes(1)) {
                    gameState = 2;
                    isChangeScore = true;
                    preCount = count;
                    isCorrectAnswer = true;
                    console.log("Yes!!!");
                }
                // no correct answer
                else if (numStageClear.includes(2)) {
                    gameState = 2;
                    preCount = count;
                    isCorrectAnswer = false;
                    console.log("No!!!");
                }

            });
        }

        //  Show O , X in stage
        if (gameState === 2) {
            // gameScreenHeader.update(gameState);

            gBoardText.update({ gameState: gameState, isCorrectAnswer: isCorrectAnswer });

            if (preCount + 50 < count) {
                gameState = 3;
            }

        }

        // Show Answer on board , in stage
        if (gameState === 3) {
            // gameScreenHeader.update(gameState);

            gBoardText.update({ gameState: gameState });

            if (preCount + 150 < count) {
                Moles.forEach((element) => {
                    // numStageClear = element.update({ gameState: gameState, mousePos: { x: e.layerX, y: e.layerY } });
                    element.update({ gameState: gameState });
                })
                gameState = 0;
                stage += 1;
                console.log("Next Stage");
            }
        }

    }

    // Create Render Area
    if (count % frame === 0) {
        gameContext.clearRect(0, 0, gameSetting["GAME_W"], gameSetting["GAME_H"]);

        Moles.forEach((element) => {
            // element.setIsGame(true);
            element.render();
        });
        gBoardText.render({ gameState: gameState });
        gameScreenHeader.render();
    }

    count += 1;

    return window.requestAnimationFrame(gameController);

}

function GamePlay() {

    // Change the mouse img if mouse click on canvas (canvas 영역에서 마우스를 클릭하면 마우스의 해머 이미지가 변하게 하는 state)
    const [isMouseClick, setIsMouseClick] = useState(false);

    const onMouseClick = () => {
        setIsMouseClick(!isMouseClick);
    };

    // 
    const setInitMole = () => {

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

        gBoardText = new BoardText(385, 225, 100, 100, gameContext);
        gameScreenHeader = new GameScreenHeader(gameContext);
    };

    let gameCanvasRef = useRef();

    // just one
    useEffect(() => {

        let cmp = gameCanvasRef.current;
        gameCanvas = cmp;
        gameContext = gameCanvas.getContext('2d');

        setInitMole();

        let t = window.requestAnimationFrame(gameController);

    }, []);

    return (
        <GameBackground onMouseDown={onMouseClick} onMouseUp={onMouseClick} isClick={isMouseClick}>
            <GameCanvas ref={gameCanvasRef} />
        </GameBackground>
    );

}

export default GamePlay;
