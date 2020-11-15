import circle from "../../Img/Circle.png";
import cross from "../../Img/cross.png";

class BoardText {
    constructor(x, y, w, h, gameContext) {
        this.gameContext = gameContext;
        this.circleImg = new Image();
        this.circleImg.src = circle;

        this.crossImg = new Image();
        this.crossImg.src = cross;

        this.boardTextData = {
            position: [x, y],
            width: w,
            height: h,
            isNext: false,
            consonant: "ㅂㄷ",          // text on board
            answer: "",
            isCorrectAnswer: false,
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

    setBoardData({ consonant, problem, answer }) {
        this.boardTextData["consonant"] = consonant;
        this.boardTextData["answer"] = problem[answer];
    }

    // Set board text
    setConsonant({ consonant }) {
        this.boardTextData["consonant"] = consonant;
    }

    update({ gameState, boardStageData, isCorrectAnswer }) {

        // set board data on init state
        if (gameState === 0) {
            this.setBoardData(boardStageData);
            // console.log(boardStageData);
            this.setBoardTextPositionX();
        }


        if (gameState === 2) {
            this.setConsonant({ consonant: "" });
            this.boardTextData["isCorrectAnswer"] = isCorrectAnswer;

        }

        if (gameState === 3) {
            this.setConsonant({ consonant: this.boardTextData["answer"] });
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
            let correctImg = this.boardTextData["isCorrectAnswer"] ? this.circleImg : this.crossImg;
            this.gameContext.drawImage(
                correctImg,
                420,
                135,
                130,
                130);
        }

    }
};

export default BoardText;