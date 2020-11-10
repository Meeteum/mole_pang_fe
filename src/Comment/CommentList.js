import React from "react";
import styled from "styled-components";
import CommentForm from "./CommentForm";
import {useCommentData, useCommentSettingState} from "./CommentContext";

const Whole = styled.div`
    width: 100%;
    // width: 960px;
    height: 913px;

    border-bottom : 1px solid black;
    border-top : 1px solid black;
`;

const Line = styled.div`
    width: 99.5%;
    // width: 960px;
    height: 0px;

    border: 3px solid rgba(153, 153, 153, 0.3);
`;




function CommentList(){
    const commentData = useCommentData();
    const commentSettingState = useCommentSettingState();
    const curPagingNum = commentSettingState["CUR_PAGING_NUM"];
    console.log(curPagingNum);
    let cmp = [];
    for(let i = (curPagingNum - 1) * 5; i < 5 * curPagingNum; i++){
        if(i < commentData.length)
        {
            cmp.push(commentData[i]);
        }
        else{
            break;
        }
    }
    return (
    <Whole>
        {
        cmp.map(
            (tmp) => 
            (

                <>
                    <CommentForm id={tmp.id} nickName={tmp.nickName} date={tmp.date} comment={tmp.comment}/>
                    <Line/>
                </>
            )
        )}
        
    </Whole>
    );
}

export default CommentList;