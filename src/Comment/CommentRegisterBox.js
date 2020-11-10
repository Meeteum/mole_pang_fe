import React, {useState} from "react";
import styled from "styled-components";
import {
    useCommentDataDispatch, 
    useCommentData, 
    useSetCommentSettingState,
    useCommentSettingState,
} from "./CommentContext";

const Whole = styled.div`

    // width: 960px;
    width: 100%;
    height: 264px;
    margin-top: 59px;
    // border: 1px solid black;
`;

const TopLayout = styled.div`
    display: flex;
    // width: 960px;
    width: 100%;
    height: 60px;
    // border: 1px solid black;
    margin-top: 0px;
    margin-bottom: 24px;
`;
const NicknameInputBox = styled.input`
    // width: 200px;
    width: 20.83%;
    height: 60px;
    margin-left: 0px;
    margin-right: 30px;

    border: 3px solid #C4C4C4;
    box-sizing: border-box;

    font-weight: normal;
    font-size: 1vw;
    line-height: 29px;

    color: rgba(153, 153, 153, 0.5);
`;
const PasswordInputBox = styled.input`
    // width: 200px;
    width: 20.83%;
    height: 60px;
    margin-left: 0px;
    margin-right: 329px;

    border: 3px solid #C4C4C4;
    box-sizing: border-box;

    font-weight: normal;
    font-size: 1vw;
    line-height: 29px;

    color: rgba(153, 153, 153, 0.5);
`;
const RegisterBtn = styled.button`
    // width: 200px;
    width: 20.83%;
    height: 60px;
    margin-left: 0px;

    border: 3px solid #C4C4C4;
    box-sizing: border-box;

    font-weight: normal;
    // font-size: 25px;
    font-size: 0.9vw;
    line-height: 29px;

    color: #999999;
`;

const CommentInputBox = styled.input`

    // width: 960px;
    width: 100%;
    height: 180px;
    margin-top: 0px;

    border: 5px solid #C4C4C4;
    box-sizing: border-box;

    font-weight: normal;
    font-size: 1vw;
    line-height: 29px;

    color: rgba(153, 153, 153, 0.5);
`;

function CommentRegisterBox(){
    const [nickName, setNickName] = useState("")
    const [comment, setComment] = useState("")

    const commentDataDispatch = useCommentDataDispatch();
    const commentData = useCommentData();

    const setCommentSettingState = useSetCommentSettingState();
    const commentSettingState = useCommentSettingState();

    


    const onRegister = () => {    

        let today = new Date();
        let month = today.getMonth() + 1;
        let dates = today.getFullYear() + "." + month + "." + today.getDate() + " " + today.getHours() + ":" + today.getMinutes();

        if(nickName === ""){
            alert("닉네임을 입력해주세요.")
            return;
        }

        if(comment === ""){
            alert("코멘트를 입력해주세요.")
            return;
        }
        let cmpId = commentSettingState["NEXT_COMMENT_ID"]; 
        commentDataDispatch({
            type: "COMMENT_ADD",
            data: { id: cmpId, nickName:nickName, date:dates, comment:comment}
        });
        console.log(commentData.length);
        setNickName("");
        setComment("");
        setCommentSettingState({"NEXT_COMMENT_ID":cmpId+1, "CUR_PAGING_NUM":Math.ceil(commentData.length/5)});

        // setCommentSettingState({...commentSettingState, "CUR_PAGING_NUM":cmpId+1});
    };

    const onCommentChange = (e) =>{
        setComment(e.target.value);
    };

    const onNickNameChange = (e) => {
        setNickName(e.target.value);
    };
    return (
    <Whole>
        <TopLayout>
            <NicknameInputBox name="content" placeholder="  닉네임" onChange={onNickNameChange} value={nickName}/>
            <PasswordInputBox placeholder="  비밀번호"/>
            <RegisterBtn onClick={onRegister}>등록하기</RegisterBtn>
        </TopLayout>
        <CommentInputBox name="txt" placeholder="  공략, 의견을 댓글로 나눠보세요" onChange={onCommentChange} value={comment}/>
    </Whole>
    );
}

export default CommentRegisterBox;