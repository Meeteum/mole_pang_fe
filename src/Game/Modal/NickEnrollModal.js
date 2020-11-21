import React, {useState} from "react";
import styled, {css} from "styled-components";
import BaseModal, {CloseArea} from "./BaseModal";
import { BsX } from "react-icons/bs";
import {useSetGameScreenState} from "../GameContext";

const Whole = styled.div`
    width: 537px;
    height: 304px;
    // border : 1px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
`;

// const CloseArea = styled.div`
//     width: 35px;
//     height: 35px;
//     margin-left: 450px;
//     margin-bottom: 35px;
//     margin-top: 15px;
//     // border: 1px solid black;

//     line-height: 26px;

// `;

const DescriptionTxt = styled.p`
    width: 415px;
    height: 38px;

    // border: 1px solid black;
    margin-bottom: 45px;
    margin-top: 35px;

    font-family: Jua;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 31px;

    color: rgba(0, 0, 0, 0.7);
`;

const NickEnrollInput = styled.input`
    width: 400px;
    height: 40px;
    // border: none;
`

const NickInputLine = styled.div`
    width: 400px;
    height: 0px;
    // margin-bottom: 1px;

    // border: 10px solid black;
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 7px;
`;

const AlertTxt = styled.p`
    width: 400px;
    height: 18px;

    margin-top: 5px;
    margin-bottom: 22px;

    ${(props) => props.set && css`opacity: 1`} 
    opacity: 0;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 18px;
    /* identical to box height */

    text-align: left;

    color: rgba(255, 46, 0, 0.8);
`;

const EnrollBtn = styled.button`
    width: 200px;
    height: 50px;

    border: 2px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    
    text-align: center;
    
    color: rgba(0, 0, 0, 0.63);
`;

function NickEnrollModal(){
    const setGameScreenState = useSetGameScreenState();
    const [value, setValue] = useState("");
    const [isOverInput, setIsOverInput] = useState(false);

    const onClose = () => {
        setGameScreenState(0);
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onEnroll = (e) => {
        // form 형식으로 넘기는 거 구현하기
        // console.log(e.target);
        if(value.length > 7){
            console.log("x");
            setIsOverInput(true);

        }
        else{
            setIsOverInput(false);
            setGameScreenState(6);
            console.log("o");
        }
        console.log(isOverInput);
        setValue("");
        // setGameScreenState(6);

    };

    return(
    <BaseModal>
        <Whole>
            <CloseArea>
                <BsX onClick={onClose} size="42" color="#C4C4C4" /> 
            </CloseArea>
            <DescriptionTxt>
                '별명을 등록해야 내 순위를 볼 수 있어요'
            </DescriptionTxt>
            {/* <form action="/my-handling-form-page" method="post"> */}
                <NickEnrollInput type="text" name="nick" autoFocus onChange={onChange} value={value}/>
                <NickInputLine />
                <AlertTxt set={isOverInput}>* 별명은 7글자 이내로 입력해주세요.</AlertTxt>
                <EnrollBtn onClick={onEnroll} >
                    등록 하기
                </EnrollBtn>
            {/* </form> */}
        </Whole>
    </BaseModal>
    );

}


export default NickEnrollModal;
export {CloseArea};