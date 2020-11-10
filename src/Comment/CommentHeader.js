import React from "react";
import styled from "styled-components";
import {useCommentData, useCommentSettingState} from "./CommentContext"

const Whole = styled.div`
    //960  1606px
    // width: 960px;
    width: 100%;
    height: 92px;
    // height: 5.72%;

    // border : 1px solid blue;

    display: flex;
    // margin: 0 auto;
    // justify-content: center;
    align-items: center;
`;

const CommentTxt = styled.div`

    width: 9.6%;            // 92 / 960 px
    height: 53px;
    // height: 57.6%;          // 53 / 92 px

    // margin-right: 30px;          // 30px
    margin-right: 3.125%;
    margin-left : 0px;

    font-weight: bold;
    font-size: 2vw;
    // font-size: 2.6rem;    //45
    // font-size: 45px;
    line-height: 53px;

    color: #696969;
    // border: 1px solid black;
`;
const CommentCount = styled.div`

    margin-left : 0%;
    margin-right : 58.8%;
    width: 7%;     // 75 / 960
    height: 29px;
    // height: 31.52%;     // 29 / 92
    

    font-weight: normal;
    // font-size: 25px;
    font-size: 1vw;
    line-height: 29px;

    color: #999999;

    // border: 1px solid black;
`;
const ShareBtn = styled.button`

    width: 20.83%;       // 200 / 960
    height: 62px;
    // height: 67.39%;       // 62/ 92
    margin-left : 0px;

    border: 3px solid #C4C4C4;
    box-sizing: border-box;

    font-weight: 500;
    // font-size: 25px;
    font-size: 1vw;
    line-height: 29px;

    color: #999999;
`;


function CommentHeader(){
    const commentData = useCommentData();
    const commentSettingState = useCommentSettingState();

    return (
        <Whole>
            <CommentTxt>댓글</CommentTxt>
    <CommentCount>( {commentData.length} )</CommentCount>
            <ShareBtn>공유하기</ShareBtn>
        </Whole>
    );
}

export default CommentHeader;