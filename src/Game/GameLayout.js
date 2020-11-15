import React from "react";
import styled from "styled-components";
import GameScreen from "./GameScreen";
import Modal from "./Modal";
import GameMenu from "./GameMenu";

import { useSetGameScreenState, useGameScreenState } from "./GameContext";

const Whole = styled.div`
    width: 960px;
    height: 600px;

    border: 1px solid black;

    // 추후, 게임 제작 시 삭제 요소
    text-align: center;
    line-height: 632px;

`;

// Contain Game Scrren in Layout
function GameLayout() {
    const gameScreenState = useGameScreenState();
    const setGameScreenState = useSetGameScreenState();

    let gameScreen = null;
    switch (gameScreenState) {
        case 1:
            gameScreen = <Modal />;
            break;
        case 2:
            gameScreen = <GameScreen />;
            break;
        case 3:
            gameScreen = <Modal />;
            break;
        default:
            // gameScreen = <GameMenu />;
            gameScreen = <GameScreen />;
            break;
    };

    return (
        <Whole>
            {gameScreen}
        </Whole>
    );
}

export default GameLayout;