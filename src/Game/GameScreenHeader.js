class GameScreenHeader {
    constructor(gameContext) {
        this.gameContext = gameContext;
        this.boardTextData = {
            position: [0, 0],
            width: 960,
            height: 50,
            isNext: false,
        };
        this.time = 5;
        this.score = 0;
        this.gameState = 0
    }

    init() {
        this.time = 60;
        this.score = 0;
    }

    setIsCorrectAnswer({ isCorrectAnswer }) {
        if (isCorrectAnswer) {
            this.score += 10;
        }
    }

    getIsTimeOut() {
        if (this.time <= 0) {
            return true;
        }
        return false;
    }

    update(gameState) {
        this.gameState = gameState;

        // set board data on init state
        if (this.gameState === 0 || this.gameState === 1) {
            this.time -= 1;
        }

    }

    render() {
        // console.log(this.boardTextData["example"].length);

        this.gameContext.beginPath();
        this.gameContext.moveTo(-5, 50);
        this.gameContext.lineTo(960, 50);
        this.gameContext.stroke();

        this.gameContext.font = "30px Jua"; //폰트의 크기, 글꼴체 지정      
        this.gameContext.fillStyle = "rgba(0, 0, 0, 0.7)"; //색상지정

        this.gameContext.fillText(this.score, 360, 36);
        this.gameContext.fillText(this.time, 640, 36);

        this.gameContext.font = "20px Roboto"; //폰트의 크기, 글꼴체 지정      
        this.gameContext.fillText("점수 :", 280, 33);
        this.gameContext.fillText("제한 시간 :", 520, 33);

    }
};

export default GameScreenHeader;