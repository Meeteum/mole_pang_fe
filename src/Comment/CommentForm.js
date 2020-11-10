import React from 'react';
import styled from 'styled-components';
import {useCommentDataDispatch} from "./CommentContext"

const Whole = styled.div`
    display: flex;
    flex-direction: column;
    // width: 960px;
    width: 100%;
    height: 177px;

    margin-bottom : 0px;

    
`;

const TopLayout = styled.div`
    display : flex;

    // width: 960px;
    width: 100%;
    height: 66px;
    
    // margin: 0 auto;
    // justify-content: center;
    align-items: center;
`;

const NickNameTxt = styled.div`

    // width: 238px;
    width: 24.8%;
    height: 38px;
    font-weight: bold;
    // font-size: 32px;
    font-size: 1.5vw;
    line-height: 37px;

    margin-right : 45px;
    margin-left: 31px;

    color: #696969;

    // border : 1px solid black;
`;

const DateTxt = styled.div`
    // width: 200px;
    width: 30%;
    height: 29px;

    font-weight: normal;
    // font-size: 25px;
    font-size: 1.18vw;
    line-height: 29px;

    margin-right : 9%;
    margin-left: 0px;

    color: #999999;

    // border : 1px solid black;
`;



const EditBtn = styled.div`

    // width: 50px;
    width: 6%;
    height: 29px;

    font-weight: normal;
    // font-size: 25px;
    font-size: 1.18vw;
    line-height: 29px;

    color: #999999;

    // border : 1px solid black;
`;

const DeleteBtn = styled.div`
    // width: 50px;
    width: 6%;
    height: 29px;
    // margin-right : 19px;
    margin-right : 1.98%;
    margin-left: 0px;

    font-weight: normal;
    font-size: 1.18vw;
    line-height: 29px;

    

    color: #999999;

    // border : 1px solid black;
`;

const CommentToComentBtn = styled.div`
    // width: 109px;
    width: 12%;
    height: 29px;

    font-weight: normal;
    font-size: 1.18vw;
    line-height: 29px;

    color: #999999;

    // border : 1px solid black;
`;

const BottomLayout = styled.div`
    // width: 960px;
    width: 100%;
    height: 111px;
    // border : 1px solid black;
`;

const CommentBox = styled.div`
    width: 95%;
    height: 111px;

    margin-left : 30px;

    font-weight: normal;
    font-size: 25px;
    line-height: 29px;

    color: #999999;

    // border : 1px solid red;
`;

const CommentTxt = styled.div`
    width: 294px;
    height: 29px;

    font-weight: normal;
    font-size: 25px;
    line-height: 29px;

    color: #999999;

    // border : 1px solid black;
`;



function CommentForm({id, nickName, date, comment}){

    const commentId = id;
    const commentDataDispatch = useCommentDataDispatch();
    const onDeleteComment = () => {
        commentDataDispatch({type:"COMMENT_DELETE", id:id});
    };
    return (
    <Whole>
        <TopLayout>
            <NickNameTxt>{nickName}</NickNameTxt>
            <DateTxt>{date}</DateTxt>
            <EditBtn>수정</EditBtn>&nbsp;/&nbsp;
            <DeleteBtn onClick={onDeleteComment}>삭제</DeleteBtn>
            <CommentToComentBtn>댓글 쓰기</CommentToComentBtn>

        </TopLayout>
        <BottomLayout>
            <CommentBox>{comment}</CommentBox>
        </BottomLayout>
        
    </Whole>)
}

export default CommentForm;