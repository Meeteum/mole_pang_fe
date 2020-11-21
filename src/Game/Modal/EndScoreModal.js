import React, { useState } from "react";
import styled from "styled-components";
import BaseModal from "./BaseModal";
import { BsX, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {useUserResultData, useSetGameScreenState} from "../GameContext";

//EndScore Modal Header Layout
const ModalHeader = styled.div`
    width: 535px;
    height: 45px;
    // border : 1px solid black;
    display:flex;
    justify-content: center;
    align-items: center;

`;

//EndScore Modal title in Header
const ModalTitle = styled.h1`

    width: 100px;
    height: 23px;

    margin-left: 0px;
    margin-right: 400px;

    font-family: Jua;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 31px;

    color: rgba(0, 0, 0, 0.7);

    text-align: center;
`;

//EndScore Modal Body Layout
const ModalBody = styled.div`
    width: 535px;
    height: 254px;
    // border : 1px solid red;

    display: flex;
    // flex-direction: column;
`;

const Line = styled.div`
    width: 250px;
    height: 0px;

    background :rgba(0, 0, 0, 0.6);
    border: 2px solid rgba(0, 0, 0, 0.6);
    border-radius : 3px;
`;

const ModalBodyLeft = styled.div`
    width: 278px;
    height: 251px;

    display: flex;
    flex-direction: column;
`;

const ModalBodyLeftTop = styled.div`
    width: 272px;
    height: 144px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ModalBodyLeftBottom = styled.div`
    width: 272px;
    height: 110px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

// 점수 글자 Text
const ScoreTxt = styled.p`
    width: 54px;
    height: 21px;

    margin-top : 0px;
    margin-bottom : 0px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    // border : 2px solid black;

    text-align: center;

    color: rgba(0, 0, 0, 0.45);
`;

// Score Text box
const Score = styled.div`
    width: 232px;
    height: 54px;

    font-family: Jua;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 81px;
    text-align: center;

    color: rgba(0, 0, 0, 0.7);
`;

// Replay or Ranking btn
const Btn = styled.button`
    width: 200px;
    height: 50px;

    border: 2px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 49px;
    /* identical to box height */

    text-align: center;

    color: rgba(0, 0, 0, 0.63);
`;

//EndScore Modal in Body Right Layout
const ModalBodyRight = styled.div`
    width: 260px;
    height: 254px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

// incorrect or correct word box
const WordBox = styled.div`
    width: 250px;
    height: 120px;

    display : flex;
    flex-direction : column;
    // justify-content: center;
    align-items:center;

    border: 2px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 5px;

    &:hover{
        ${BsChevronLeft}{
            opacity: 1;
        }

        ${BsChevronRight}{
            opacity: 1;
        }
    }
`;

const WordHeader = styled.div`
    width: 232px;
    height: 48px;
    display : flex;
`;

const WordTitle = styled.div`
    width: 180px;
    height: 48px;
    // margin-left: 5px;
    // border: 1px solid black;

    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 45px;
    /* identical to box height */

    text-align: left;

    color: rgba(0, 0, 0, 0.63);
`;

const PagingBtn = styled.div`
    opacity: 1;
    width: 48px;
    height: 48px;
    // border:1px solid black;
    font-size: 15px;
    font-weight: 800;
    line-height: 48px;
`;

const PagingNum = styled.div`
    opacity: 1;
    width: 13px;
    height: 48px;
    // border:1px solid black;
    font-size: 11px;
    font-weight: 700;
    line-height: 43px;
`;

const PagingSlash = styled.div`
    opacity: 1;
    width: 5px;
    height: 48px;
    // border:1px solid black;
    font-size: 11px;
    font-weight: 700;
    line-height: 42px;
`;

const WordList = styled.ul`
    // display:list-item;
    list-style:none;
    padding-left:0px;

    width: 237px;
    height: 36px;
    // border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    // justify-content:center;
`;

const WordTxt = styled.li`
    width: 47px;
    height: 16px;
    // border: 1px solid red;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10.5px;
    line-height: 13px;
    /* identical to box height */

    text-align: center;
    color: rgba(0, 0, 0, 0.63);
`;

let wordList =
{
    "incorrectWordList": [],
    "correctWordList": [],
};

// function EndScoreModal({ incorrectWordList, correctWordList }) {
function EndScoreModal() {

    const userResultData = useUserResultData();
    const setGameScreenState = useSetGameScreenState();

    let incorrectWordData = userResultData["USER_INCORRECT"];
    let incorrectWordList = [];

    let correctWordData = userResultData["USER_CORRECT"];
    let correctWordList = [];

    let score = userResultData["USER_SCORE"];




    
    const [indexIncorrectList, setIndexIncorrectList] = useState(0);
    const [indexCorrectList, setIndexCorrectList] = useState(0);
    const wordListSlice = ({wordData, wordList, maxPage}) => {
        for (let i = 0; i <= maxPage; i++) {
            wordList.push(wordData.slice(i * 10, (i + 1) * 10));
        }
        // return wordList;
    };



    let incorrectWordLength = incorrectWordData.length;
    let maxIncorrectWordPage = Math.floor(incorrectWordLength / 10);
    wordListSlice({wordData:incorrectWordData, wordList:incorrectWordList, maxPage:maxIncorrectWordPage});


    let correctWordLength = correctWordData.length;
    let maxCorrectWordPage = Math.floor(correctWordLength / 10);
    wordListSlice({wordData:correctWordData, wordList:correctWordList, maxPage:maxCorrectWordPage});



    const onPagingRight = (test) => {
        if (test === "incorrect") {
            if (indexIncorrectList !== maxIncorrectWordPage) {
                setIndexIncorrectList(indexIncorrectList + 1);
            }
        }
        else {
            if (indexCorrectList !== maxCorrectWordPage) {
                setIndexCorrectList(indexCorrectList + 1);
            }
        }
    };
    const onPagingLeft = (test) => {

        if (test === "incorrect") {
            if (indexIncorrectList !== 0) {
                setIndexIncorrectList(indexIncorrectList - 1);
            }
        }
        else {
            if (indexCorrectList !== 0) {
                setIndexCorrectList(indexCorrectList - 1);
            }
        }

    };

    const onWordList = ({isLen, wordList, indexList}) => {
        return isLen === 0 ? <WordTxt></WordTxt> : wordList[indexList].map((tmp) => <WordTxt>{tmp}</WordTxt>);
    }
    const onClose = () => {
        setGameScreenState(0);
    };

    const onReplay = () => {
        setGameScreenState(2);
    };

    return (
        <BaseModal>
            <ModalHeader>
                <ModalTitle>놀이 결과</ModalTitle>
                <BsX onClick={onClose} size="42" color="#C4C4C4" />
            </ModalHeader>
            <Line />
            <ModalBody>
                <ModalBodyLeft >
                    <ModalBodyLeftTop>
                        <ScoreTxt>점  수</ScoreTxt>
                        <Score>{score}</Score>
                    </ModalBodyLeftTop>
                    <ModalBodyLeftBottom>
                        <Btn onClick={onReplay}>다시 하기</Btn>
                        <Btn>순위 보기</Btn>
                    </ModalBodyLeftBottom>
                </ModalBodyLeft>
                <ModalBodyRight>
                    <WordBox>
                        <WordHeader>
                            <WordTitle >틀린 단어</WordTitle>
                            <PagingBtn onClick={() => onPagingLeft('incorrect')}><BsChevronLeft /></PagingBtn>
                            <PagingNum>{indexIncorrectList + 1}</PagingNum>
                            <PagingSlash>|</PagingSlash>
                            <PagingNum>{maxIncorrectWordPage + 1}</PagingNum>
                            <PagingBtn onClick={() => { onPagingRight('incorrect') }}><BsChevronRight /></PagingBtn>
                        </WordHeader>
                        <WordList>
                            {onWordList({isLen:incorrectWordLength, wordList:incorrectWordList, indexList:indexIncorrectList})}
                            {/* {incorrectWordList[indexIncorrectList].map((tmp) => <WordTxt>{tmp}</WordTxt>)} */}
                        </WordList>
                    </WordBox>
                    <WordBox>
                        <WordHeader>
                            <WordTitle >맞힌 단어</WordTitle>
                            <PagingBtn onClick={onPagingLeft}><BsChevronLeft /></PagingBtn>
                            <PagingNum>{indexCorrectList + 1}</PagingNum>
                            <PagingSlash>|</PagingSlash>
                            <PagingNum>{maxCorrectWordPage + 1}</PagingNum>
                            <PagingBtn onClick={onPagingRight}><BsChevronRight /></PagingBtn>
                        </WordHeader>
                        <WordList>{onWordList({isLen:correctWordLength, wordList:correctWordList, indexList:indexCorrectList})}</WordList>
                    </WordBox>
                </ModalBodyRight>
            </ModalBody>
        </BaseModal>
    );
}

export default EndScoreModal;