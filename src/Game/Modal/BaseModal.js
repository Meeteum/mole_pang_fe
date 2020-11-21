import React from "react";
import styled from "styled-components";

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
    height: 400px;

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
    border-radius : 5px;
`;

const CloseArea = styled.div`
    width: 35px;
    height: 35px;
    margin-left: 500px;
    margin-top: -20px;
    // margin-bottom: 0px;
    // border: 1px solid black;

    line-height: 26px;

`;

function BaseModal({ children }) {
    return (
        <Whole>

            <ModalScreen>
                <ModalLayout>
                    {children}
                </ModalLayout>
            </ModalScreen>

        </Whole>
    );
}


export default BaseModal;
export {CloseArea};