import React,{createContext, useContext, useState} from "react";
import styled from "styled-components";


const GameScreenStateContext = createContext();
const SetGameScreenStateContext = createContext();

// GAME_MENU: 0 , GAME_DESCRIPTION: 1, GAME_START: 2, GAME_RANKING: 3
const initGameScreenState = 0;

export function GameProvider({children}){

    const [gameScreenState, setGameScreenState] = useState(initGameScreenState);

    return(
        <GameScreenStateContext.Provider value={gameScreenState}>
            <SetGameScreenStateContext.Provider value={setGameScreenState}>
                {children}
            </SetGameScreenStateContext.Provider>
        </GameScreenStateContext.Provider>
    );
}

export function useGameScreenState(){
    const context = useContext(GameScreenStateContext);
    return context;
}

export function useSetGameScreenState(){
    const context = useContext(SetGameScreenStateContext);
    return context;
}