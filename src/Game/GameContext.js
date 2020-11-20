import React,{createContext, useContext, useState} from "react";
import styled from "styled-components";


const GameScreenStateContext = createContext();
const SetGameScreenStateContext = createContext();
const SetUserResultDataContext = createContext();
const UserResultDataContext = createContext();

const initUserResultData = {
    "USER_SCORE": 0,
    "USER_INCORRECT":[],
    "USER_CORRECT":[],
};

// GAME_MENU: 0 , GAME_DESCRIPTION: 1, GAME_START: 2, GAME_RANKING: 3
const initGameScreenState = 0;

export function GameProvider({children}){

    const [gameScreenState, setGameScreenState] = useState(initGameScreenState);
    const [userResultData, setUserResultData] = useState(initUserResultData);

    return(
        <GameScreenStateContext.Provider value={gameScreenState}>
            <SetGameScreenStateContext.Provider value={setGameScreenState}>
                <SetUserResultDataContext.Provider value={setUserResultData}>
                    <UserResultDataContext.Provider value={userResultData}>
                        {children}
                    </UserResultDataContext.Provider>
                </SetUserResultDataContext.Provider>
            </SetGameScreenStateContext.Provider>
        </GameScreenStateContext.Provider>
    );
}

export function useSetUserResultData(){
    const context = useContext(SetUserResultDataContext);
    return context;
}

export function useUserResultData(){
    const context = useContext(UserResultDataContext);
    return context;
}

export function useGameScreenState(){
    const context = useContext(GameScreenStateContext);
    return context;
}

export function useSetGameScreenState(){
    const context = useContext(SetGameScreenStateContext);
    return context;
}