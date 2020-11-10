import React from 'react';
import styled from 'styled-components';

const GameLogin = styled.div`
    width : 100%;
    height : 111px;
`;

const GameTitle = styled.div`

    width: 590px;
    height: 70px;
    // left: 709px;
    // top: 111px;

    // font-family: Roboto;
    // font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;

    border : 1px solid black;

    color: #696969;

`;

function HeaderBox(){

    return (
    <>
        <GameLogin></GameLogin>
        <GameTitle>모두 모두 두더지 팡!</GameTitle>
    </>
    );
}


export default HeaderBox;

