import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import background from "../Img/background.png"
import hammer from "../Img/hammer.png"
import bumb from "../Img/bumb.png"
import Mole from "./GameObject/Mole.js";
import BoardText from "./GameObject/BoardText.js";
import GameScreenHeader from "./GameScreenHeader.js";
import { useSetGameScreenState, useGameScreenState, useSetUserResultData, useUserResultData } from "./GameContext";
import {initGameSetValue as gameSetValue} from "./GameSetting.js";

// const gameSetValue = initGameSetValue;

// set cursor img
const GameBackground = styled.div`
    width: 960px;
    height: 600px;
    background-image: url(${background});
    
    ${(props) => props.isClick ? css`cursor: url(${bumb}), auto` : css`cursor: url(${hammer}), auto`}
   
`;

const GameCanvas = styled.canvas.attrs({
    width: gameSetValue.GAME_W,
    height: gameSetValue.GAME_H
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


function GamePlay() {

    // Change the mouse img if mouse click on canvas (canvas 영역에서 마우스를 클릭하면 마우스의 해머 이미지가 변하게 하는 state)
    const [isMouseClick, setIsMouseClick] = useState(false);

    const onMouseClick = () => {
        setIsMouseClick(!isMouseClick);
    };

    const setGameScreenState = useSetGameScreenState();
    const gameScreenState = useGameScreenState();
    const setUserResultData = useSetUserResultData();
    const userResultData = useUserResultData();

    let preCount = 0;   // Value for state Hold Time Calculation
    let preEndCount = 0;
    let count = 0;      // game running time    (게임 클럭)
    let stage = 0;      // game stage (stage == 문제)

    // Val Game Frame   16 == 60fps,  32 == 30fps
    let frame = 32;
    // 0: 문제랑 두더지가 나옴
    let gameState = 0;

    let Moles = [];
    let gBoardText = null;
    let gameScreenHeader = null;

    let gameCanvasRef = useRef();
    let gameCanvas;         // canvas id
    let gameContext;        // canvas ref

    let isCorrectAnswer = false;            // check if user correct problem (유저가 문제를 맞았는지 여부 확인 변수)
    let isChangeScore = false;              // check if score increase after user correct problem (유저가 정답 여부에 따라 점수 변화를 체크를 확인 변수)
    let isGameEnd = false;                  // check if game is end (시간이 다되어서 게임이 끝나는지 확인)
    let incorrectWord = [];
    let correctWord = [];
    let curStageAnswer = "";

    // 
    const setInitMole = () => {

        // 207 , 74
        // (234,279) (442,279) (649,279)   - 207
        // (234,353) (442,353) (649,353)   - 207
        // (234,427) (442,427) (649,427)   - 207

        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++)

                Moles.push(new Mole(
                    gameSetValue.FIRST_MOLE_X + gameSetValue.MOLE_INTERVAL_X * x,
                    gameSetValue.FIRST_MOLE_Y + gameSetValue.MOLE_INTERVAL_Y * y,
                    gameSetValue.MOLE_IMG_WIDTH,
                    gameSetValue.MOLE_IMG_HEIGHT,
                    x + 3 * y,
                    gameContext)
                );
        }

        gBoardText = new BoardText(gameSetValue.BOARD_X, gameSetValue.BOARD_Y,
            gameSetValue.BOARD_WIDTH, gameSetValue.BOARD_HEIGHT, gameContext);
        gameScreenHeader = new GameScreenHeader(gameContext);
    };


    const gameController = () => {

        // Ingame Header(Score and Time) Render (인게임 헤더에 점수 와 시간 랜더)
        if (count % 74 === 0 && gameState !== 4) {
            gameScreenHeader.update(gameState);

            // 시간 over 되었을 경우
            if (gameScreenHeader.getIsTimeOut()) {
                gameState = 4;
                preEndCount = count;
            }

            // 맞았을 경우 점수 증가
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
                curStageAnswer = gameStageData[stage]["problem"][gameStageData[stage]["answer"]];
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
    
                    // Moles[element].update({ gameState: gameState, moleStageData: moleStageData });
                    Moles[element].update({ gameState: gameState });
                    Moles[element].setStage(moleStageData)
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
                        correctWord.push(curStageAnswer);
                        console.log("Yes!!!");
                    }
                    // no correct answer
                    else if (numStageClear.includes(2)) {
                        gameState = 2;
                        preCount = count;
                        isCorrectAnswer = false;
                        incorrectWord.push(curStageAnswer);
                        console.log("No!!!");
                    }
    
                });
            }
    
            //  Show O , X in stage
            if (gameState === 2) {
                // gameScreenHeader.update(gameState);
    
                gBoardText.update({ gameState: gameState, isCorrectAnswer: isCorrectAnswer });
    
                if (preCount + 40 < count) {
                    gameState = 3;
                }
    
            }
    
            // Show Answer on board , in stage
            if (gameState === 3) {
                // gameScreenHeader.update(gameState);
    
                gBoardText.update({ gameState: gameState });
    
                if (preCount + 80 < count) {
                    Moles.forEach((element) => {
                        // numStageClear = element.update({ gameState: gameState, mousePos: { x: e.layerX, y: e.layerY } });
                        element.update({ gameState: gameState });
                    })
                    gameState = 0;
                    stage += 1;
                    console.log("Next Stage");

                }
            }

            if (gameState === 4) {

                gBoardText.update({ gameState: gameState });
                // console.log("end");
                if (preEndCount + 150 < count && !isGameEnd) {
    
                    setUserResultData({ "USER_SCORE": gameScreenHeader.getScore(), "USER_INCORRECT": incorrectWord, "USER_CORRECT": correctWord});

                    setGameScreenState(4);
                    // init 추가하기
                    // console.log(gameScreenState);
                    isGameEnd = true;
                }
            }
    
        }
    
        // Create Render Area
        if (count % frame === 0) {
            gameContext.clearRect(0, 0, gameSetValue.GAME_W, gameSetValue.GAME_H);
    
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

    // just one
    useEffect(() => {

        gameCanvas = gameCanvasRef.current;
        gameContext = gameCanvas.getContext('2d');

        setInitMole();

        let t = window.requestAnimationFrame(gameController);

        // }

    }, []);

    return (
        <GameBackground onMouseDown={onMouseClick} onMouseUp={onMouseClick} isClick={isMouseClick}>
            <GameCanvas ref={gameCanvasRef} />
        </GameBackground>
    );

}

export default GamePlay;
