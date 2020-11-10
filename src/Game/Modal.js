import React, { useState } from "react";
import styled from "styled-components"
import { BsX, BsChevronLeft, BsChevronRight, BsSlash } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";

// import { FaBeer } from 'react-icons/fa';


const Whole = styled.div`

    width: 960px;
    height: 595px;


    background: #777676;
    // border : 1px solid black;

    display:flex;
    flex-direction : column;

    justify-content: center;
    align-items: center;
    // background: blue;

`;

const ModalScreen = styled.div`
    width: 600px;
    height: 370px;

    border : 1px solid black;
    margin : auto;

    background: #FFFEFE;
    border-radius: 10px;

    display:flex;

    justify-content: center;
    align-items: center;
`;

const ModalLayout = styled.div`

    width: 537px;

    height: 306px;

    // border : 1px solid black;
`;

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
    margin-right: 420px;

    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
`;

const ModalBody = styled.div`
    width: 535px;
    height: 258px;
    // border : 1px solid blue;

    display: flex;
    // flex-direction: column;
`;

const ModalImg = styled.div`
    width: 229px;
    height: 255px;

    border : 2px solid rgba(0, 0, 0, 0.5);
    background: skyblue;

    line-height: 255px;

`;

const ModalBodyLeft = styled.div`
    width: 305px;
    height: 257px;
    display:flex;
    flex-direction:column;
    // border: 1px solid black;

    
`;

const ModalTxt = styled.pre`
    width: 302px;
    height: 237px;
    // border: 1px solid red;
    display:block;
    // background: red;
    margin:0px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 18px;
    text-align: left;

    // overflow:hidden;
    // resize:none;

    color: rgba(0, 0, 0, 0.63);
`;

const ModalPaging = styled.div`
    width: 305px;
    height: 20px;

    display:flex;
    justify-content: flex-end;
    align-items: center;

    // border: 1px solid black;
    
`;

const PagingMargin = styled.div`

    width: 5px;
    height: 5px;
`;

function Modal() {
    const [curPageNum, setCurPageNum] = useState(1);
    const totalPageNum = 2;


    const gameDescription = [
        '모두모두 농장 밭에 두더지들이 나타났어요!\n두더지들이 모두모두 농장 밭에 농작물들을 훔쳐가고있답니다.\n우리 친구들이 농작물들을 두더지로부터 지켜줄 수 있나요?',
        '한글 초성 한 단어를 틀릴 경우 - 5점을 잃게 됩니다.\n한글 초성 두 단어를 틀릴 경우 - 15점을 잃게 됩니다.\n한글 초성 세 단어를 틀릴 경우 - 20점을 잃게 됩니다.\n한글 초성 네 단어를 틀릴 경우 - 50점을 잃게 됩니다'
    ];

    const onClose = () => { };
    const onPagingLeft = () => {
        if (curPageNum !== 1) {
            setCurPageNum(curPageNum - 1);
        }
    };
    const onPagingRight = () => {
        if (curPageNum !== totalPageNum) {
            setCurPageNum(curPageNum + 1);
        }
    };

    return (
        <Whole>

            <ModalScreen>
                <ModalLayout>
                    <ModalHeader>
                        <ModalTitle>놀이설명</ModalTitle>
                        <BsX onClick={onClose} size="42" color="#C4C4C4" />
                    </ModalHeader>
                    <ModalBody>
                        <ModalBodyLeft>
                            <ModalTxt>{gameDescription[curPageNum - 1]}</ModalTxt>
                            <ModalPaging>
                                <BsChevronLeft onClick={onPagingLeft} />
                                <PagingMargin />
                                {curPageNum}
                                <IoMdMore />
                                {totalPageNum}
                                <PagingMargin />
                                <BsChevronRight onClick={onPagingRight} />
                                <PagingMargin />
                            </ModalPaging>
                        </ModalBodyLeft>

                        <ModalImg>x</ModalImg>
                    </ModalBody>
                </ModalLayout>
            </ModalScreen>

        </Whole>
    );
}


export default Modal;