import React, {
    useReducer,
    createContext,
    useContext,
    useState,
  } from "react";


  
const initCommentValue = [
    {
        id:1,
        nickName:"susu",
        date:"1920.10.02 10:19",
        comment:"hahahahahahahahaha",
    },
    {
        id:2,
        nickName:"susu2",
        date:"2020.10.02 10:19",
        comment:"hahahahahahahahaha2",
    },
    {
        id:3,
        nickName:"susu",
        date:"1920.10.02 10:19",
        comment:"hahahahahahahahaha",
    },
    {
        id:4,
        nickName:"susu2",
        date:"2020.10.02 10:19",
        comment:"hahahahahahahahaha2",
    },
    {
        id:5,
        nickName:"susu",
        date:"1920.10.02 10:19",
        comment:"hahahahahahahahaha",
    },
    // {
    //     id:6,
    //     nickName:"susu2",
    //     date:"2020.10.02 10:19",
    //     comment:"hahahahahahahahaha2",
    // },
    // {
    //     id:7,
    //     nickName:"susu",
    //     date:"1920.10.02 10:19",
    //     comment:"hahahahahahahahaha",
    // },
    
];

const initCommentSettingState = {
    "NEXT_COMMENT_ID":6,
    "CUR_PAGING_NUM":1,

};

function CommentDataReducer(state, action){
    switch(action.type){
        case "COMMENT_ADD":
            // var _length = state.unshift(action.data);
            let _length = state.push(action.data);
            console.log("#################");
            console.log("FOLDER ADD : ");
            console.log(state);
            console.log("@@@@@@@@@@@@@@@@@");
            // return state.concat(action.data);
            return state;

        case "COMMENT_DELETE":

            
            return state.filter((data)=>(data.id !== action.id));;

        default:
            throw new Error(`Unhandled action type:${action.type}`);
    }

}

const CommentDataDispatchContext = createContext();
const CommentDataContext = createContext();
const CommentSettingStateContext = createContext();
const SetCommentSettingStateContext = createContext();

export function CommentProvider({children}){
    const [commentData, commentDispatch] = useReducer(CommentDataReducer, initCommentValue);
    const [commentSettingState, setCommentSettingState] = useState(initCommentSettingState);

    return(
        <CommentDataDispatchContext.Provider value={commentDispatch}>
            <CommentDataContext.Provider value={commentData}>
                <CommentSettingStateContext.Provider value={commentSettingState}>
                    <SetCommentSettingStateContext.Provider value={setCommentSettingState}>
                        {children}
                    </SetCommentSettingStateContext.Provider>
                </CommentSettingStateContext.Provider>
            </CommentDataContext.Provider>
        </CommentDataDispatchContext.Provider>
    );
}

export function useCommentSettingState(){
    const context = useContext(CommentSettingStateContext);
    return context;
}

export function useSetCommentSettingState(){
    const context = useContext(SetCommentSettingStateContext);
    return context;
}

export function useCommentDataDispatch(){
    const context = useContext(CommentDataDispatchContext);
    return context;
}

export function useCommentData(){
    const context = useContext(CommentDataContext);
    return context;
}
