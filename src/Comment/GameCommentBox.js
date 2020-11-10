import React from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import CommentHeader from "./CommentHeader";
import CommentRegisterBox from "./CommentRegisterBox";
import CommentPaging from "./CommentPaging";
import {CommentProvider} from "./CommentContext";

const Whole = styled.div`
    width : 100%;
    height : 100%;
    display: flex;
    flex-direction: column;
    // border : 1px solid black;

`;


function GameCommentBox(){

    return (
    <CommentProvider>
        <Whole>
            <CommentHeader/>
            <CommentList/>
            <CommentRegisterBox/>
            <CommentPaging/>
        </Whole>
    </CommentProvider>
    );
}

export default GameCommentBox;