import React from "react"
import styled from "styled-components"
import GameScore from "./GameScore"
import GamePlay from "./GamePlay"

const Whole = styled.div`

    width: 960px;
    height: 600px;
    
    // width: 100%;
    // height: 100%;
    // border : 1px solid red;
`;

// const Head

function GameScreen() {

    return (
        <Whole>
            {/* <GameScore/> */}
            <GamePlay />
        </Whole>
    )
}


export default GameScreen;