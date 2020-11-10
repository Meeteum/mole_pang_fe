import React from "react";
import styled from "styled-components";
import GameCommentBox from "./Comment/GameCommentBox";
import HeaderBox from "./Header/HeaderBox";
import GameLayout from "./Game/GameLayout";
import {GameProvider} from "./Game/GameContext";


// 1. 전체적인 기본 퍼블리싱         - 1 주일
// 2. Login 기능 구현               - 1 주일
// - Login btn 클릭시 로긴 box 뜸
// - 
// 3. Game 기능 구현
// > 초기화면 구현
// > 게임 설명 창 구현
// > 인게임 화면
// > 랭킹 화면
// > 랭킹 스크롤 기능
// > 난이도 구현
// > 초기 두더지 애니메이션 박스 구현
// > 인게임 초기화면 구현
// > 두더지 나오는 것 구현
// > 컬라이더 구현
// > 충돌 시 애니메이션 구현
// > 충돌 후, 점수 증가 및 시간 구현
// > 게임 오버시, 점수 창 구현
// 4. Game Comment Layout 구현
// - 공유하기 버튼 구현                 - 0.5 주일
// > 공유 팝업창 구현                   - 0.5 주일
// - 코멘트 입력시 => 다이얼로그에 코멘트 등록 기능 구현    - 1 주일
// - 로그인 했을 경우, 코멘트 수정 삭제 기능               - 1 주일
// > 비번 입력 박스, 팝업 수정 만들기
// - 다이얼로그 코멘트 갯수 표시
// - 비회원 코멘트 입력시, 랜덤 닉 또는 등록 닉 지정
// 5.Putter 기능구현
// - 누누 티스토리로 이동 버튼

const WholeLayout = styled.div`
    // position: relative;
    // width: 1920px;
    height: 2944px;
    background: #FFFFFF;

    font-family: Roboto;
    font-style: normal;
    font-size: 10px;
    // border : 1 solid black;

    margin: 0 auto;
    // justify-content: center;
    align-items: center;

    display: flex;
    flex-direction: column;
    
`;

// Contain Game Title and Login UI in Layout
const HeaderLayout = styled.div`
    // position: absolute;
    // width: 1920px;
    height: 229px;
    border : 1px solid black;
    // background-color: yellow;

    display : flex;
    flex-direction: column;
    // margin: 0 auto;
    // justify-content: center;
    align-items: center;

    

`;


// Contain AD in Layout
const KaKaoADFitLayout = styled.div`
    // position: absolute;
    width : 50%;
    // width: 955.5px;
    height: 90px;
    margin-top : 53.5px;

    border: 1px solid black;
    // background-color: blue;

    text-align: center;
    line-height: 90px;
`;

// Contain Game Comment(comment dialog(nick, date, comment), share btn, comment input box, register btn, num series) in Layout
const GameCommentLayout = styled.div`
    display: flex;   

    width : 50%;
    // height : 54.5%;
    height : 1606px;

    margin-top: 3%;
    // margin-top: 88px;

    // text-align: center;

    // border : 1px solid blue;
    // background-color: skyblue;
    
`;

// Contain Google AD in Layout
const GoogleADFitLayout = styled.div`
    // width: 1920px;
    width: 100%;
    height: 100px;

    border : 1px solid blue;
    
    text-align: center;
    line-height: 100px;

    margin-bottom: 40px;
`;

// nunu company logo and, if click
const PutterLayout = styled.div`
    // width: 1920px;
    width: 100%;
    height: 200px;

    border : 1px solid blue;

    font-weight: bold;
    font-size: 45px;
    line-height: 200px;
    text-align: center;

    color: #696969;
    background: #C4C4C4;
`;



function Template(){

    return (
        <WholeLayout>
            <HeaderLayout><HeaderBox/></HeaderLayout>
            <GameProvider>
                <GameLayout/>
            </GameProvider>
            <KaKaoADFitLayout>KaKaoADFitLayout</KaKaoADFitLayout>
            <GameCommentLayout><GameCommentBox/></GameCommentLayout>
            <GoogleADFitLayout>GoogleAd</GoogleADFitLayout>
            <PutterLayout>nunu company</PutterLayout>

        </WholeLayout>
        
    );
}

export default Template;