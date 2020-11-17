import React from "react";
import styled from "styled-components";
import BaseModal from "./BaseModal";
import { BsX } from "react-icons/bs";

const ModalHeader = styled.div`
    width: 535px;
    height: 45px;
    // border : 1px solid black;
    display:flex;
    justify-content: center;
    align-items: center;

`;

const ModalTitle = styled.div`

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
    width: 272px;
    height: 254px;

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

const ScoreTxt = styled.div`
    width: 54px;
    height: 42px;

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

const Score = styled.div`
    width: 232px;
    height: 59px;

    font-family: Jua;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 81px;
    text-align: center;

    color: rgba(0, 0, 0, 0.7);
`;

const Btn = styled.div`
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

const ModalBodyRight = styled.div`
    width: 260px;
    height: 254px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Box = styled.div`
    width: 250px;
    height: 120px;

    border: 2px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 5px;
`;

function EndScoreModal() {

    const onClose = () => { };

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
                        <Score>600</Score>
                    </ModalBodyLeftTop>
                    <ModalBodyLeftBottom>
                        <Btn>다시 하기</Btn>
                        <Btn>순위 보기</Btn>
                    </ModalBodyLeftBottom>
                </ModalBodyLeft>
                <ModalBodyRight>
                    <Box></Box>
                    <Box></Box>
                </ModalBodyRight>
            </ModalBody>
        </BaseModal>
    );
}

export default EndScoreModal;