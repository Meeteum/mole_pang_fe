
const initGameSetValue={

    "GAME_W": 960,
    "GAME_H": 600,
    "FIRST_MOLE_X": 234,            // 첫번째 두더지 X 좌표
    // "FIRST_MOLE_Y": 279,         // 첫번째 두더지 Y 좌표
    "FIRST_MOLE_Y": 288,
    "MOLE_INTERVAL_X": 207,         // 두더지 간의 가로 간격
    "MOLE_INTERVAL_Y": 74,          // 두더지 간의 세로 간격
    "MOLE_IMG_WIDTH": 78,               // 두더지 Img width
    "MOLE_IMG_HEIGHT": 110,               // 두더지 Img HEIGHT
    "GAME_RUNNING_COUNT": 0,
    "GAME_STAGE": 0,
    "GAME_FRAME": 32,
    "IS_CORRECT_ANSWER" : false,            // check if user correct problem (유저가 문제를 맞았는지 여부 확인 변수)
    "IS_CHANGE_SCORE" : false,             // check if score increase after user correct problem (유저가 정답 여부에 따라 점수 변화를 체크를 확인 변수)
    "IS_GAME_END" : false,                  // check if game is end (시간이 다되어서 게임이 끝나는지 확인)
    "INCORRECT_WORD" : [],
    "CORRECT_WORD" : [],
    "CUR_STAGE_ANSWER" :"",
    "BOARD_X": 385,
    "BOARD_Y": 225,
    "BOARD_WIDTH": 100,
    "BOARD_WHEIGHT": 100,
    "GAME_SCREEN_HEADER_X": 0,
    "GAME_SCREEN_HEADER_Y": 0,
    "GAME_SCREEN_HEADER_WIDTH": 960,
    "GAME_SCREEN_HEADER_HEIGHT": 50,
    "GAME_TIME": 15,
    "GAME_SCORE": 0,
};


export {initGameSetValue};