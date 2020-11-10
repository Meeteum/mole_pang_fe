import React from 'react';
import styled, {css} from 'styled-components';
import {useCommentData, useCommentSettingState, useSetCommentSettingState} from './CommentContext'

const Whole = styled.div`
    display: flex;
    margin-top : 74px;
    margin-bottom : 0px;
`;

const LeftPagingBtn = styled.div`
    // width: 28.87px;
    width: 3%;
    height: 25px;

    border: 3px solid #C4C4C4;
    // margin-right: 275px;
    margin-right: 28.62%;
    // transform: rotate(-90deg);
`;

const PagingNumList = styled.div`

    display: flex;
    width: 331px;
    width: 34.48%;
    height: 35px;

    // margin-right: 275px;
    margin-right: 28.64%;


    border : 1px solid skyblue;
`;

const RightPagingBtn = styled.div`

    // width: 28.66px;
    width: 3%;
    height: 25px;

    border: 3px solid #C4C4C4;
    // transform: matrix(0, -1, -1, 0, 0, 0);
`;

const PagingNum = styled.span`

    // width: 36px;
    // height: 33px;

    // margin-right: 3px;
    margin-right: 0.31%;
    font-weight: normal;
    font-size: 1.5vw;
    line-height: 35px;

    color: #999999;

    border: 1px solid #C4C4C4;

    ${(props) => props.isSelect && css`
        font-weight: 600
    `}

    // transform: matrix(0, -1, -1, 0, 0, 0);
`;

function CommentPaging(){

    const commentData = useCommentData().length;
    const commentSettingState = useCommentSettingState();
    const setCommentSettingState = useSetCommentSettingState();

    const pagingNumArray = () => {
        let ret = [];
        for(let i = 1; i <= Math.ceil(commentData / 5); i++){
            ret.push(i)
        }
        return ret;
    };

    const onSetCurPagingNum = cmp => () => {
        
        setCommentSettingState({...commentSettingState, CUR_PAGING_NUM:cmp});
        console.log(commentSettingState["CUR_PAGING_NUM"]);
    };

    const onLeftPagingMove = () => {
        if(commentSettingState["CUR_PAGING_NUM"] !== 1){
            setCommentSettingState({...commentSettingState, CUR_PAGING_NUM:commentSettingState["CUR_PAGING_NUM"]-1});
        }
    };

    const onRightPagingMove = () => {
        if(commentSettingState["CUR_PAGING_NUM"] <= (commentData/5)){
            setCommentSettingState({...commentSettingState, CUR_PAGING_NUM:commentSettingState["CUR_PAGING_NUM"]+1});
        }
    };

    return(
    <Whole>
        <LeftPagingBtn onClick={onLeftPagingMove}>&lt;</LeftPagingBtn>
        
        <PagingNumList>{
            pagingNumArray().map((cmp) => <PagingNum isSelect={commentSettingState["CUR_PAGING_NUM"]===cmp} onClick={onSetCurPagingNum(cmp)}>{cmp}</PagingNum>)
        }
        </PagingNumList>
        <RightPagingBtn onClick={onRightPagingMove}>&gt;</RightPagingBtn>
    </Whole>
    )
}

export default CommentPaging;