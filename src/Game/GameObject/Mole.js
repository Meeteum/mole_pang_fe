import mole from "../../Img/mole.png";
import speechBubble from "../../Img/exampleMark.png";
import deadMole from "../../Img/deadMole.png";

class Mole {
    constructor(x, y, w, h, id, gameContext) {
        this.moleImg = new Image();
        this.moleImg.src = mole;

        this.speechBubbleImg = new Image();
        this.speechBubbleImg.src = speechBubble;

        this.deadMoleImg = new Image();
        this.deadMoleImg.src = deadMole;

        this.gameContext = gameContext;
        this.moleData = {
            id: id,
            position: [x, y],
            width: w,
            height: h,
            // 0 : no is Game  1 : answer, 2 : no answer
            isAnswer: 0,
            problem: "안단단",
            isGame: false,
            isClicked: false,
        };

        this.mousePos = { x: 0, y: 0 };

        this.speechBubbleData = {
            imgDistance: [-10, -50],
            txtDistance: [25, -25],
        };
        // console.log(gameContext);
    }

    init() {
        this.moleData = { ...this.moleData, isAnswer: 0, problem: "", isGame: false, isClicked: false };
    }

    // let gameStageData = {
    //     stage: gameStageData[0]["stage"],
    //     problem: gameStageData[0]["problem"][k],
    //     answer: gameStageData[0]["answer"]
    // };

    setStage({ problem, isAnswer, isGame }) {
        // this.moleData["problem"] = moleStageData["problem"];
        // this.moleData["answer"] = moleStageData["answer"];
        // this.moleData["isGame"] = moleStageData["isGame"];
        this.moleData["problem"] = problem;
        this.moleData["isAnswer"] = isAnswer;
        this.moleData["isGame"] = isGame;
        console.log(isAnswer);
    }


    setSpeechBubbleTxtPositionX() {
        if (this.moleData["problem"].length === 1) {
            this.speechBubbleData["txtDistance"][0] = 32;
        }
        else if (this.moleData["problem"].length === 2) {
            this.speechBubbleData["txtDistance"][0] = 24;
        }
        else {
            this.speechBubbleData["txtDistance"][0] = 16;
        }
    }

    update({ gameState, moleStageData, mousePos }) {
        if (gameState == 0) {
            // this.setRandomIsGame();
            this.setStage(moleStageData);
            this.setSpeechBubbleTxtPositionX();
        }

        if (gameState == 1 && this.moleData["isGame"]) {

            // if (mousePos !== undefined) {
            //     this.mousePos["x"] = mousePos["x"];
            //     this.mousePos["y"] = mousePos["y"];
            //     console.log("Test");
            // }
            if (this.moleData["position"][0] < mousePos["x"] &&
                this.moleData["position"][1] < mousePos["y"] &&
                this.moleData["position"][0] + this.moleData["width"] > mousePos["x"] &&
                this.moleData["position"][1] + this.moleData["height"] > mousePos["y"]
            ) {
                this.moleData["isClicked"] = true;

                console.log("-------------------------------------------")
                console.log(this.moleData["problem"] + " hit!");
                console.log("1. MOUSE : " + JSON.stringify(mousePos));
                console.log("2. IMG_F : " + JSON.stringify(this.moleData["position"]));
                console.log("3. IMG_E_X : " + JSON.stringify(this.moleData["position"][0] + this.moleData["width"]));
                console.log("4. IMG_E_Y : " + JSON.stringify(this.moleData["position"][1] + this.moleData["height"]));
                console.log("-------------------------------------------")

            }
            else {
                // 78 110
                console.log("-------------------------------------------")
                console.log("No hit!");
                console.log("1. MOUSE : " + JSON.stringify(mousePos));
                console.log("2. IMG_F : " + JSON.stringify(this.moleData["position"]));
                console.log("3. IMG_E_X : " + JSON.stringify(this.moleData["position"][0] + this.moleData["width"]));
                console.log("4. IMG_E_Y : " + JSON.stringify(this.moleData["position"][1] + this.moleData["height"]));
                console.log("-------------------------------------------")
            }

            if (this.moleData["isClicked"]) {
                console.log(this.moleData["isAnswer"]);
                return this.moleData["isAnswer"];
            }

        }

        if (gameState === 3) {
            this.init();
        }

        // console.log(mousePos);

        // this.moleData["position"][0] += 1;
    }

    render() {
        if (this.moleData["isGame"]) {
            // Render mole Img

            if (this.moleData["isClicked"]) {
                this.gameContext.clearRect(this.moleData["position"][0], this.moleData["position"][1], this.moleData["width"], this.moleData["height"]);
                this.gameContext.drawImage(
                    // this.moleData["isClicked"] ? this.deadMoleImg : this.moleImg,
                    this.deadMoleImg,
                    this.moleData["position"][0] - 25,
                    this.moleData["position"][1] - 25,
                    this.moleData["width"] + 55,
                    this.moleData["height"] + 25);
            }
            else {

                this.gameContext.drawImage(
                    // this.moleData["isClicked"] ? this.deadMoleImg : this.moleImg,
                    this.moleImg,
                    this.moleData["position"][0],
                    this.moleData["position"][1],
                    this.moleData["width"],
                    this.moleData["height"]);
            }

            // Render speech bubble Img
            this.gameContext.drawImage(
                this.speechBubbleImg,
                this.moleData["position"][0] + this.speechBubbleData["imgDistance"][0],
                this.moleData["position"][1] + this.speechBubbleData["imgDistance"][1],
                100,
                50);

            // Render speech buble text
            this.gameContext.font = "20px Jua";
            this.gameContext.fillStyle = "rgba(0, 0, 0, 1)";
            this.gameContext.fillText(
                this.moleData["problem"],
                this.moleData["position"][0] + this.speechBubbleData["txtDistance"][0],
                this.moleData["position"][1] + this.speechBubbleData["txtDistance"][1]
            );

        }

    }
};

export default Mole;