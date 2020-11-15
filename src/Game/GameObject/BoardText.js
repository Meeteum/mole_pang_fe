import circle from "../../Img/Circle.png";

class BoardText {
    constructor(x, y, w, h, gameContext) {
        this.gameContext = gameContext;
        this.circleImg = new Image();
        this.circleImg.src = circle;

        this.boardTextData = {
            position: [x, y],
            width: w,
            height: h,
            isNext: false,
            consonant: "ㅂㄷ",
        };
    }

    init() {
    }

    setBoardTextPositionX() {
        if (this.boardTextData["consonant"].length == 1) {
            this.boardTextData["position"][0] = 455;
        }
        else if (this.boardTextData["consonant"].length == 2) {
            this.boardTextData["position"][0] = 420;
        }
        else {
            this.boardTextData["position"][0] = 385;
        }
    }

    // {
    //     stage: 1,
    //     consonant: "ㄱㅁㅎ",
    //     problem: ["곰마하", "김미후", "곤마히", "가만히"],
    //     answer: 3,
    // },

    setBoardData({ consonant }) {
        this.boardTextData["consonant"] = consonant;
    }

    update({ gameState, boardStageData }) {
        if (gameState === 0) {
            this.setBoardData(boardStageData);
            // console.log(boardStageData);
            this.setBoardTextPositionX();
        }

        if (gameState === 2) {
            this.setBoardData({ consonant: "" });
        }

    }

    render({ gameState }) {
        // console.log(this.boardTextData["example"].length);

        if (gameState !== 2) {
            this.gameContext.font = "80px Jua"; //폰트의 크기, 글꼴체 지정      
            this.gameContext.fillStyle = "rgba(0, 0, 0, 0.7)"; //색상지정
            this.gameContext.fillText(
                this.boardTextData["consonant"],
                this.boardTextData["position"][0],
                this.boardTextData["position"][1]
            );
        }
        else {
            this.gameContext.drawImage(
                this.circleImg,
                420,
                135,
                130,
                130);
        }

    }
};

export default BoardText;