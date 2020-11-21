import React from "react";
import styled from "styled-components";
import GameScreen from "./GameScreen";
import DescriptionModal from "./Modal/DescriptionModal";
import GameMenu from "./GameMenu";
import BaseModal from "./Modal/BaseModal";
import EndScoreModal from "./Modal/EndScoreModal";

import { useSetGameScreenState, useGameScreenState } from "./GameContext";
import NickEnrollModal from "./Modal/NickEnrollModal";

const Whole = styled.div`
    width: 960px;
    height: 600px;

    border: 1px solid black;

    // 추후, 게임 제작 시 삭제 요소
    text-align: center;
    line-height: 632px;

`;

// Contain Game Screen in Layout
function GameLayout() {
    const gameScreenState = useGameScreenState();
    const setGameScreenState = useSetGameScreenState();

    let gameScreen = null;
    switch (gameScreenState) {
        case 1:
            gameScreen = <DescriptionModal />;
            break;
        case 2:
            gameScreen = <GameScreen />;
            break;
        case 3:
            gameScreen = <DescriptionModal />;
            break;
        case 4:
            gameScreen = <EndScoreModal/>;
            break;
        case 5:
            gameScreen = <NickEnrollModal/>;
        default:
            // gameScreen = <BaseModal />;
            // gameScreen = <DescriptionModal />;
            gameScreen = <NickEnrollModal/>;
            // gameScreen = <EndScoreModal />;
            // gameScreen = <GameMenu />;
            // gameScreen = <GameScreen />;
            break;
    };

    return (
        <Whole>
            {gameScreen}
        </Whole>
    );
}

export default GameLayout;