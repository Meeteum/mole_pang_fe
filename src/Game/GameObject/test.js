const SpriteDefs = {
    "character": [
        { x: 0, y: 0, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 40, y: 0, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 0, y: 40, w: 40, h: 39, origin: { x: 30, y: 20 } },
        { x: 40, y: 40, w: 40, h: 39, origin: { x: 30, y: 20 } },
        { x: 80, y: 40, w: 40, h: 39, origin: { x: 30, y: 20 } },
        { x: 0, y: 80, w: 40, h: 41, origin: { x: 30, y: 20 } },
        { x: 40, y: 80, w: 40, h: 41, origin: { x: 30, y: 20 } },
        { x: 80, y: 80, w: 40, h: 41, origin: { x: 30, y: 20 } },
        { x: 0, y: 122, w: 40, h: 41, origin: { x: 30, y: 20 } },
        { x: 40, y: 122, w: 40, h: 40, origin: { x: 30, y: 20 } },
        { x: 80, y: 122, w: 40, h: 40, origin: { x: 30, y: 20 } },
        { x: 0, y: 186, w: 40, h: 59, origin: { x: 20, y: 39 } },
        { x: 40, y: 186, w: 40, h: 59, origin: { x: 20, y: 39 } },
        { x: 80, y: 186, w: 40, h: 59, origin: { x: 20, y: 39 } },
        { x: 340, y: 0, w: 18, h: 12, origin: { x: 9, y: 6 } },
        { x: 200, y: 260, w: 50, h: 50, origin: { x: 25, y: 25 } },
        { x: 250, y: 260, w: 50, h: 50, origin: { x: 25, y: 25 } },
        { x: 300, y: 260, w: 50, h: 50, origin: { x: 25, y: 25 } },
        { x: 350, y: 260, w: 50, h: 50, origin: { x: 25, y: 25 } }
    ],
    "item": [
        { x: 160, y: 80, w: 50, h: 50, origin: { x: 25, y: 25 } },
        { x: 210, y: 80, w: 50, h: 50, origin: { x: 25, y: 25 } },
        { x: 300, y: 0, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 300, y: 40, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 300, y: 80, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 300, y: 120, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 300, y: 160, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 300, y: 200, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 160, y: 260, w: 40, h: 40, origin: { x: 20, y: 20 } }
    ],

    "effect": [
        { x: 160, y: 0, w: 30, h: 30, origin: { x: 15, y: 15 } },
        { x: 190, y: 0, w: 30, h: 30, origin: { x: 15, y: 15 } },
        { x: 220, y: 0, w: 30, h: 30, origin: { x: 15, y: 15 } },
        { x: 250, y: 0, w: 30, h: 30, origin: { x: 15, y: 15 } },
        { x: 160, y: 40, w: 30, h: 30, origin: { x: 0, y: 0 } },
        { x: 190, y: 40, w: 30, h: 30, origin: { x: 0, y: 0 } },
        { x: 220, y: 40, w: 30, h: 30, origin: { x: 0, y: 0 } },
        { x: 250, y: 40, w: 30, h: 30, origin: { x: 0, y: 0 } },
        { x: 0, y: 250, w: 30, h: 30, origin: { x: 15, y: 15 } },
        { x: 30, y: 250, w: 30, h: 30, origin: { x: 15, y: 15 } },
        { x: 60, y: 250, w: 30, h: 30, origin: { x: 15, y: 15 } },
        { x: 90, y: 250, w: 30, h: 30, origin: { x: 15, y: 15 } },
        { x: 0, y: 280, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 40, y: 280, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 80, y: 280, w: 40, h: 40, origin: { x: 20, y: 20 } },
        { x: 120, y: 280, w: 40, h: 40, origin: { x: 20, y: 20 } }
    ]
};
const AnimationDefs = {
    "character": {
        "spin": [{ frame: 0, duration: 0.05 }, { frame: 1, duration: 0.05 }],
        "forward": [{ frame: 2, duration: 0.08 }, { frame: 3, duration: 0.08 }, { frame: 4, duration: 0.08 }, { frame: 3, duration: 0.08 }],
        "nutral": [{ frame: 5, duration: 0.05 }, { frame: 6, duration: 0.05 }, { frame: 7, duration: 0.05 }, { frame: 6, duration: 0.05 }],
        "backward": [{ frame: 8, duration: 0.05 }, { frame: 9, duration: 0.05 }, { frame: 10, duration: 0.05 }, { frame: 9, duration: 0.05 }],
        "fall": [{ frame: 11, duration: 0.05 }, { frame: 12, duration: 0.05 }, { frame: 13, duration: 0.05 }, { frame: 12, duration: 0.05 }],
        "sword": [{ frame: 14, duration: 1 }],
        "magnet_field": [{ frame: 15, duration: 0.05 }, { frame: 16, duration: 0.05 }, { frame: 17, duration: 0.05 }, { frame: 18, duration: 0.05 }]
    },
    "item": {
        'potion': [{ frame: 0, duration: 1 }],
        'mana': [{ frame: 1, duration: 1 }],
        'coin': [{ frame: 2, duration: 0.1 }, { frame: 3, duration: 0.1 }, { frame: 4, duration: 0.1 }, { frame: 5, duration: 0.1 }, { frame: 6, duration: 0.1 }, { frame: 7, duration: 0.1 }],
        'magnet': [{ frame: 8, duration: 1 }]
    },
    "effect": {
        'jump': [{ frame: 0, duration: 0.05 }, { frame: 1, duration: 0.05 }, { frame: 2, duration: 0.05 }, { frame: 3, duration: 0.05 }],
        'clap': [{ frame: 4, duration: 0.05 }, { frame: 5, duration: 0.05 }, { frame: 6, duration: 0.05 }, { frame: 7, duration: 0.05 }],
        'coin': [{ frame: 8, duration: 0.05 }, { frame: 9, duration: 0.05 }, { frame: 10, duration: 0.05 }, { frame: 11, duration: 0.05 }],
        'mana': [{ frame: 12, duration: 0.05 }, { frame: 13, duration: 0.05 }, { frame: 14, duration: 0.05 }, { frame: 15, duration: 0.05 }]
    }
};
const tileSets = [
    [5, 5, 6, 7, 6, 5],
    [5, 10, 15, 15, 10, 8],
    [5, 10, 15, 15, 18, 20, 16, 8],
    [5, 8, 11, 14, 17, 20, 30, 20, 10],
    [5, 30, 32, 34, 36, 30, 20],
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 45, 40, 30, 20, 10],
    [5, 20, 40, 60, 70, 80, 80, 70, 60, 50, 40, 30, 20, 10],
    [5, 15, 20, 25, 30, 35, 50, 60, 70, 80, 90, 100, 100, 100, 90, 70, 50, 30, 10],
    [20, 30, 40, 50, 60, 80, 100, 120, 140, 160, 180, 200, 200, 201, 201, 202, 202, 200, 198, 197, 198, 200, 80, 60, 40, 20],
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 70, 90, 110, 130, 150, 170, 190, 210, 200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
];

Array.prototype.last = function () {
    return (this.length > 0) ? this[this.length - 1] : null;
}
Math.distanceToLine = function (pt, line) {
    // 점에서 선분까지의 거리를 구하자
    // line 은 [{x:x1,y:y1}, {x:x2, y:y2}]다.
    let lineLength = Math.distance(line[0], line[1]);
    if (lineLength == 0) return Math.distance(pt, line[0]); // 길이가 0인 선분과의 거리는 깔끔
    let prj =
        ((pt.x - line[0].x) * (line[1].x - line[0].x) + (pt.y - line[0].y) * (line[1].y - line[0].y)) / lineLength;
    // 그림의 pt2와 같은 경우면 P1과의 거리를
    if (prj < 0) return Math.distance(pt, line[0]);
    // P2와 더 가까울 때(수선이 없을 때)는 P2와의 거리를
    if (prj > lineLength) return Math.distance(pt, line[1]);
    // 그 외에는 노멀 벡터의 길이를 반환하면 된다
    return Math.abs(-(pt.x - line[0].x) * (line[1].y - line[0].y) + (pt.y - line[0].y) * (line[1].x - line[0].x)) / lineLength;
}

Math.distance = function (p1, p2) {
    // 두 점 간의 거리를 구하는 함수
    // 왜 아래처럼 되는지 궁금하면 피타고라스의 정리를 보도록 하자!
    return Math.abs(Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)));
}
Math.rad2deg = function (rad) {
    // 라디안 각도를 360분법 각도로 변환
    return rad * 180 / Math.PI;
}
Math.deg2rad = function (deg) {
    // 360분법 각도를 라디안으로 변환
    return deg / 180 * Math.PI;
}
Math.angle = function (p1, p2) {
    // 두 지점의 각도를 구하자
    let w = p2.x - p1.x;
    let h = p2.y - p1.y;
    return Math.atan2(-h, w) - Math.PI / 2;
}
Math.getPoint = function (pt, deg, len) {
    // 한 점에서 특정 각도로 특정 거리 떨어진 점의 좌표를 구한다
    return { x: pt.x + (len * Math.cos(deg)), y: pt.y + (len * Math.sin(deg)) };
}

Math.lineToPoint = function (pt, line) {
    return ((pt.y - line[0].y) * (line[1].x - line[0].x) - (pt.x - line[0].x) * (line[1].y - line[0].y));
}

Math.isCross = function (pt, line) {
    // line1, line2 는 [{x,y}, {x,y}] 형태의 배열
    // 우리의 게임에서는 반드시 [0]보다 [1]이 오른쪽에 있게 된다. 따라서 더 간단!
    if (pt.y > line[0].y != pt.y > line[1].y) {
        // y 좌표가 선에 걸쳐질때에만
        let atX = (line[1].x - line[0].x) * (line[1].y - line[0].y) / (line[1].y - line[0].y) + line[0].x;
        if (pt.x > atX) return true;
    }
    return false;
}

class Sprite {
    constructor(image, sx, sy, sw, sh, ox, oy) {
        this.img = image; // 원본 이미지
        this.sx = sx; // 이미지 내에서 스프라이트의 x 좌표
        this.sy = sy; // 이미지 내에서 스프라이트의 y 좌표
        this.sw = sw; // 스프라이트의 가로 크기
        this.sh = sh; // 스프라이트의 세로 크기
        this.ox = ox || 0; // 스프라이트의 중심점 x
        this.oy = oy || 0; // 스프라이트의 중심점 y
    }
    draw(ctx, x, y, opt) {
        // ctx : 캔버스 컨텍스트
        // x, y : 찍고자 하는 화면 좌표
        // opt : 기타 옵션들 (크기 조절, 회전 등)
        ctx.save();
        // 크기 조절에 별다른 값이 지정되어있지 않으면 크기를 조절하지 않는다.
        let scale = (opt && opt.scale) || 1;
        ctx.translate(x, y); //화면 기준점을 표시 좌표로 이동해서
        if (opt && opt.rotate) { ctx.rotate(-opt.rotate); } // 회전 각도가 있다면 회전해주고
        // 원본 이미지에서 스프라이트만큼 잘라내서
        // 크기 조절에 맞춰서 찍어준다.
        ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh,
            -this.ox * scale, -this.oy * scale, this.sw * scale, this.sh * scale);

        ctx.restore();
    }
}

class SpriteSheet {
    constructor(image, def) {
        // image는 스프라이트들이 들어있는 이미지
        // def 는 스프라이트의 정의가 모여있는 배열
        this.img = image;
        this.sprites = [];

        def.forEach((d) => {
            // 정의에 맞춰서 스프라이트를 생성하고
            let spr = new Sprite(this.img, d.x, d.y, d.w, d.h, d.origin.x, d.origin.y);
            this.sprites.push(spr); // 생성된 놈을 배열에 넣어둔다.
        });
    }

    get(idx) {
        return this.sprites[idx]; // 그냥 배열에서 해당 번호의 스프라이트를 반환하면 끝.
    }
}

class Animation {
    constructor(_sheet, defs, opt) {
        this.elapsed = 0; //경과 시간
        this.curFrame = 0;
        this.sprites = _sheet;
        this.frames = defs;
        this.done = false;
        this.duration = defs.reduce((p, v) => { return p + v.duration; }, 0); // 각 프레임의 시간의 합
        this.loop = (opt && opt.hasOwnProperty('loop')) ? opt.loop : true;
    }

    clone() {
        // 같은 애니메이션이 동시에 여러개 화면에 표시되어야 하는 경우에는
        // 애니메이션 객체를 복제해서 써야 한다.
        // 이를 위한 유틸 메소드
        return new Animation(this.sprites, this.frames);
    }

    reset() {
        // 애니메이션을 처음으로 되돌리는 메소드.
        // 언젠가는 쓸모가 있을것!
        this.elapsed = 0;
        this.curFrame = 0;
    }

    get current() {
        // 현재 화면에 표시되는 프레임의 스프라이트를 반환하는 함수.
        return this.sprites.get(this.curFrame);
    }

    update(timeDelta) {
        // 경과 시간에 따라 애니메이션을 업데이트한다.
        if (this.done) return;
        this.elapsed += timeDelta;
        if (!this.loop && this.elapsed > this.duration) {
            // 반복되지 않는 애니메이션인데 끝까지 재생된 경우
            // 재생을 멈추고 마지막 프레임으로 고정
            this.done = true;
            this.curFrame = this.frames.length - 1;
        } else {
            let idx = 0, sum = 0;
            while (true) {
                sum += this.frames[idx].duration; // 각 프레임의 경과시간을 더해서
                if (sum >= this.elapsed) break; // 현재 경과 시간보다 크거나 같으면 이 프레임으로 결정
                idx += 1; // 아니면 다음 프레임으로..
                idx %= this.frames.length; // 다음 프레임이 없으면 처음으로 돌아가자
            }
            this.curFrame = idx;
        }
    }

    draw(ctx, x, y, opt) {
        // 스프라이트를 그리는 거랑 동일한 형태인 이유는 바로
        this.sprites.get(this.frames[this.curFrame].frame).draw(ctx, x, y, opt);
        // 스프라이트를 그리는거니까 그렇다! 헤헿
    }
}

class Game {
    // 생성자
    constructor(_canv) {
        this.canvas = _canv;
        this.ctx = this.canvas.getContext('2d'); // 2d 컨텍스트를 저장한다
        this.scenes = []; // 장면들을 관리하는 스택

        // 시간 관리용 멤버 변수들
        this.now = 0;
        this.last = 0;
        this.elapsed = 0;
        this.timeDelta = 0;

        //키보드 입력용 변수
        this.key = null;
        // this가 뭘 가리키는건지 애매해지지 않도록 바인드해서 넘겨주는 센스
        document.addEventListener("keydown", this.keyHandler.bind(this), false);
    }

    keyHandler(e) {
        if (!e.repeat) this.key = e.keyCode;
        if (e.keyCode === 32) {
            e.preventDefault();
            return false;
        }
    }

    // 게임 루프용 메소드
    // 이 메소드가 매 프레임(1/60초)마다 실행된다.
    update() {
        this.last = this.now;
        this.now = performance.now(); // 현재 시간
        this.timeDelta = (this.now - this.last) / 1000; // 지난 프레임과의 경과시간을 초 단위로 환산
        this.elapsed += this.timeDelta; // 게임이 시작된 후 경과된 전체 시간

        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); // 화면을 매 프레임 지워준다.


        if (this.scenes.length > 0) {
            // 처리해야 할 장면이 있을 경우에만
            this.scenes.last().update(this.timeDelta, this.key); // 활성화된 장면을 갱신
            this.scenes.last().render(this.ctx); // 활성화된 장면을 그려줌
        }

        this.key = null;
        requestAnimationFrame(this.update.bind(this)); // 1/60초 후에 다시 실행
    }

    // 장면을 새로 전환할 때는 스택에 새로운 장면을 넣어주면 된다
    push(_scene) {
        if (this.scenes.length > 0) {
            // 혹시 실행되고 있는 장면이 있을 경우 해당 장면에 정지 신호를 보내주고
            this.scenes.last().pause();
        }
        _scene.init(); // 새로 추가될 장면의 초기화 코드를 호출해준 뒤
        this.scenes.push(_scene); // 스택에 새 장면을 넣어준다.
    }

    // 장면의 실행이 끝나고 이전 장면으로 돌아갈 때는 스택에서 마지막 장면을 뽑아주면 된다.
    pop() {
        if (this.scenes.length === 0) return null; // 뽑을 장면이 없으면 암 것도 안하면 된다.
        var sc = this.scenes.pop();
        sc.destroy(); // 각 장면이 끝날때 처리해줄 내용이 있을 수 있으니 호출해주자.
        if (this.scenes.length > 0) {
            // 아직 장면 스택에 장면이 남아있다면 마지막 장면이 다시 활성화되어야 한다.
            // 활성화 신호를 보내주자.
            this.scenes.last().resume();
        }
        // 그리고 어디다 쓰고 싶을 수도 있으니까 뽑아낸 장면을 반환한다.
        return sc;
    }
}

class Scene {
    constructor() {
        this.children = []; // 자식 객체들을 보관할 컨테이너
        this.elapsed = 0; // 이 게임 장면에서 경과한 시간
    }

    init() {
        // 일반적으로는 할 일이 없으니 냅두자
    }

    update(timeDelta) {
        // 매 프레임 상태 업데이트를 처리하는 메소드
        this.elapsed += timeDelta;
        this.children.forEach((child) => { child.update(timeDelta); }); // 자녀 객체들의 업데이트를 호출
    }

    render(ctx) {
        // 화면에 장면을 그리는 메소드. ctx 는 캔버스의 2d 컨텍스트 객체가 된다.
        // 공통으로 하는 일은 그냥 단순히 전체 자식객체를 그려주는 정도면 된다.
        this.children.forEach((child) => { child.render(ctx); });
    }

    pause() {
        // 여기도 비워둠
    }

    resume() {
        // 마찬가지로 비워둠
    }
}

class GameScene extends Scene {
    constructor() {
        super();
        this.cameraX = 100;

        this.character = new Character();
        this.background = new Background();
        this.terrain = new Terrain();
        this.itemManager = new ItemManager();
        this.effectManager = new EffectManager();
        this.soundManager = new SoundManager();
        this.scoreManager = new ScoreManager();
        this.ui = new UI(this.scoreManager, this.character);

        this.children.push(this.background);
        this.children.push(this.terrain);
        this.children.push(this.itemManager);
        this.children.push(this.character);
        this.children.push(this.effectManager);
        this.children.push(this.ui);

        this.children.forEach((ch) => { ch.parent = this; });

        this.character.effect = this.effect.bind(this);
        this.character.sound = this.soundManager.play.bind(this.soundManager);

        this.state = 0;
    }

    effect(type, x, y) {
        this.effectManager.create(type, x, y);
    }

    init() {
        this.background.init();
        this.character.init();
        this.terrain.init();
        this.itemManager.init();
        this.effectManager.init();
        this.cameraX = 100;
        this.scoreManager.reset();
        this.soundManager.bgmStart();
        this.state = 0;

    }

    update(timeDelta, key) {
        if (this.state == 0) {

            this.elapsed += timeDelta;
            this.children.forEach((ch) => {
                ch.update(timeDelta, this.character);
            });

            this.cameraX = Math.max(this.cameraX, this.character.x);
            this.scoreManager.score = Math.max(0, ((this.cameraX - 100) / 10) | 0);

            this.itemManager.checkCollision(this.character);
            if (key === 32) {
                var tx = Math.cos(Math.PI / 4) * this.character.y + this.character.x;
                this.character.setPivot({ x: tx, y: 0 });
            }
            if (this.character.y > 540 || this.terrain.isHit(this.character)) {
                this.terrain.fillStyle = "red";
                this.state = 1;
            } else {
                this.terrain.fillStyle = "black";
            }
        } else {
            if (key === 32) {
                this.init();
            }
        }
    }

    render(ctx) {
        ctx.save();
        ctx.translate(-this.cameraX + 200, 0);
        super.render(ctx);
        ctx.restore();

    }
}
class GameObject {
    constructr() {
        this.parent = null;
    }
    init() { }
    update(timeDelta) { }
    render(ctx) { }
}
class Character extends GameObject {
    constructor() {
        // 생성자에서는 캐릭터에 사용될 이미지를 만들고 애니메이션들을 생성해야 한다.
        // 이 내용은 아래의 '캐릭터 애니메이션' 부분에서 다룰테니 기둘!
        super();
        this.img = new Image();
        this.img.src = "http://web.lazygyu.net/test/whip/images/eclipse_sprites.png"; //각자 자신의 이미지 주소를 넣자
        this.spriteSheet = new SpriteSheet(this.img, SpriteDefs.character); //캐릭트 스프라이트 시트
        this.animations = {}; //애니메이션들을 모아둘 컨테이너
        //애니메이션 정의에 맞춰서 컨테이너에 애니메이션을 생성해서 넣는다.
        for (let i in AnimationDefs.character) {
            if (!AnimationDefs.character.hasOwnProperty(i)) continue;
            this.animations[i] = new Animation(this.spriteSheet, AnimationDefs.character[i]);
        }
        this.radius = 20;
        this.money = 0;
        this.mp = 10;
        this.magnet = 0;
        this.rotation = 0;
    }

    init() {
        // 여기서는 각종 변수를 초기화해야 한다.
        // 일단 현재 위치를 나타내는 변수를 만들어봤다.
        this.x = 50;
        this.y = 50;
        this.gravity = 9; //일단 대충 10으로 해보자.
        this.pivot = null; //이건 줄이 걸린 좌표를 나타내는 변수다. null 이면 안 걸린거
        this.position = null; //이건 줄에 대한 캐릭터의 상대 좌표
        this.force = { x: 0, y: 0 };
        this.pLen = 0; //이건 줄의 길이
        this.angle = 0; //현재 진자운동의 각도
        this.accel = 0;  // 현재 각가속도
        this.money = 0;
        this.mp = 10;
        this.magnet = 0;
        this.rotation = 0;
    }

    gotItem(item) {
        switch (item) {
            case "jump":
                this.pivot = null;
                this.force.y -= 8;
                this.force.x += 10;
                this.mp = Math.min(10, this.mp + 1);
                this.effect("jump", this.x, this.y);
                this.sound("highjump");
                break;
            case "mana":
                this.mp = Math.min(10, this.mp + 3);
                this.effect("mana", this.x, this.y);
                this.sound("potion");
                break;
            case "magnet":
                this.magnet = 3;
                break;
            case "coin":
                this.money += 100;
                this.effect("coin", this.x, this.y);
                this.sound("coin");
                break;
        }
    }

    setPivot(point) {
        if (this.pivot === null && this.mp > 0) {
            this.mp--;
            this.pivot = point;
            this.pLen = Math.distance(this, this.pivot);
            this.position = { x: this.x - this.pivot.x, y: this.y - this.pivot.y };
            this.angle = Math.angle({ x: this.x, y: this.y }, this.pivot);
            this.accel = (-1.3 * (this.force.x + this.force.y) / this.pLen) * Math.sin(this.angle);
            this.effect("clap", point.x, point.y);
            this.sound("whip");
            this.update(0);
        } else if (this.pivot !== null) {
            this.pivot = null;
            this.pLen = 0;
            this.position = null;
            this.angle = 0;
            this.accel = 0;
            this.effect("jump", this.x, this.y);
            this.sound("jump");
            this.update(0);
        }
    }

    update(timeDelta) {
        // 캐릭터의 각종 상태를 변경하는 부분.
        if (this.pivot === null) {
            // 줄이 걸려있지 않을때
            this.currentAnimation = (this.mp == 0) ? "fall" : "spin"; //현재 애니메이션은 spin 으로
            this.force.y += this.gravity * timeDelta;
            this.force.x *= 0.99;
            this.x += this.force.x;
            this.y += this.force.y;
            this.rotation += -360 * timeDelta;
        } else {
            // 줄이 걸려있을 때
            // 중력은 작용하고 있지만 각가속도 계산에 들어가므로 force.y 에 별도로 더해줄 필요가 없다.
            let ang = this.angle;
            let ang_vel = (-1 * this.gravity / this.pLen) * Math.sin(ang); //각가속도
            // 현재 각가속도에 경과시간을 곱해서 전체 각가속도에 합산
            this.accel += ang_vel * timeDelta;
            // 계속 같은 높이로 흔들릴 수는 없으니 시간이 흐를수록 가속도를 줄여준다.
            // 현실로 치자면 줄의 마찰력이나 공기저항에 대한 시뮬레이션이라고 볼 수 있겟지?
            this.accel *= 0.999;

            // 그럼 이제 다음번 각속도 계산을 위해 현재 각도를 바꿔주고
            ang += this.accel;
            if (Math.abs(Math.rad2deg(ang)) >= 90) {
                this.setPivot(null);
            } else {
                this.angle = ang;


                // 각 성분으로 분해해서 force에 할당하자
                this.force.x = this.pLen * this.accel * Math.cos(ang);
                this.force.y = -this.pLen * this.accel * Math.sin(ang);

                this.position.x += this.force.x;
                this.position.y += this.force.y;
                this.x = this.position.x + this.pivot.x;
                this.y = this.position.y + this.pivot.y;
            }
            if (this.force.x < -3) {
                this.currentAnimation = "backward";
            } else if (this.force.x > 3) {
                this.currentAnimation = "forward";
            } else {
                this.currentAnimation = "nutral";
            }
        }
        this.magnet = Math.max(0, this.magnet - timeDelta);
        this.animations['magnet_field'].update(timeDelta);
        this.animations[this.currentAnimation].update(timeDelta);
    }

    render(ctx) {
        // 여기서 그려주면 된다.
        // 일단은 현재 위치에 반지름 20픽셀 짜리 빨간 원을 그리는 코드를 넣어보자.
        ctx.save();
        if (this.pivot !== null) {
            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.moveTo(this.pivot.x, this.pivot.y);
            ctx.lineTo(this.pivot.x + this.position.x, this.pivot.y + this.position.y);
            ctx.stroke();
        }
        ctx.restore();
        if (this.magnet > 0) {
            this.animations['magnet_field'].draw(ctx, this.x, this.y, {});
        }
        if (this.y < -20) {
            ctx.save();
            ctx.translate(this.x, 0);
            ctx.fillStyle = "rgba(170,0,0,0.8)";
            ctx.fillRect(-35, 10, 70, 30);
            ctx.fillRect(-30, 5, 60, 40);
            ctx.fillRect(-2, 0, 5, 5);
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.font = "bold 16px sans-serif";
            ctx.fillText(Math.abs((this.y / 10) | 0) + "m", 0, 30);
            ctx.restore();
        } else {
            this.animations[this.currentAnimation].draw(ctx, this.x, this.y, { rotate: (this.currentAnimation == 'spin') ? this.rotation : 0 });
        }
    }
}

class Background extends GameObject {
    constructor() {
        super();
        let imageUrls = ["http://web.lazygyu.net/test/whip/images/background.png", "http://web.lazygyu.net/test/whip/images/star1.png", "http://web.lazygyu.net/test/whip/images/star2.png", "http://web.lazygyu.net/test/whip/images/mountains.png"];
        this.images = [];
        this.images = imageUrls.map((v) => { let img = new Image(); img.src = v; return img; });
    }

    render(ctx) {
        let x = this.parent.cameraX - 200;
        ctx.save();
        ctx.translate(x, 0);
        let star1 = -(x / 8) % 540;
        let star2 = -(x / 4) % 540;
        let mountainX = -(x / 2) % 540;
        let mountainY = 540 - this.images[3].height;
        ctx.drawImage(this.images[0], 0, 0); // 하늘은 움직이지 않으니까 일단 걍 그려주자.
        // 별1 그리기
        ctx.drawImage(this.images[1], star1, 0);
        ctx.drawImage(this.images[1], star1 + 540, 0);
        // 별2 그리기
        ctx.drawImage(this.images[2], star2, 0);
        ctx.drawImage(this.images[2], star2 + 540, 0);

        // 산 그리기
        ctx.drawImage(this.images[3], mountainX, mountainY);
        ctx.drawImage(this.images[3], mountainX + 540, mountainY);

        ctx.restore();
    }
}

class Terrain extends GameObject {
    constructor() {
        super();
        this.points = []; //현재 지형 좌표를 보관할 배열
        this.tileWidth = 540 / 50;
        this.maxX = 0;
        this.fillStyle = "black";
    }

    init() {
        this.points = [];
        this.maxX = 0;
    }

    addTile() {
        while (this.points.length <= 55) {
            let src = tileSets[Math.floor(Math.random() * tileSets.length) | 0];
            src.forEach((y) => {
                this.maxX += this.tileWidth;
                this.points.push({ x: this.maxX, y: 540 - y });
            });
        }
    }

    isHit(character) {
        // 지형을 이루는 각 선분과의 충돌을 체크하자
        let firstPoint = { x: this.points[0].x, y: 540 };
        let lastPoint = firstPoint;
        let hit = false;
        this.points.forEach((pt) => {
            if (Math.distanceToLine(character, [lastPoint, pt]) < character.radius) {
                hit = true;
                return false;
            }
            lastPoint = pt;
        });
        if (hit) return true;
        // 혹시 캐릭터가 지형 내부에 있는지도 체크하자
        lastPoint = firstPoint;
        let count = 0, cur = 1;
        while (lastPoint.x < character.x) {
            if (Math.isCross(character, [lastPoint, this.points[cur]])) count++;
            lastPoint = this.points[cur];
            cur++;
        }
        if (count > 0) console.log(count);
        if (count % 2 == 0) return false;
        return true;
    }

    update(timeDelta) {
        super.update(timeDelta);
        let lastX = this.parent.cameraX - 200;
        this.points = this.points.filter((pt) => { return pt.x + this.tileWidth > lastX; });
        if (this.points.length < 55) this.addTile();
    }

    render(ctx) {
        super.render(ctx);
        // 아래는 현재 지형 배열을 그려주는 코드.. 내용은 별 거 없다.
        if (this.points.length == 0) return;
        ctx.save();
        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        this.points.forEach((pt) => {
            ctx.lineTo(pt.x, pt.y);
        });
        ctx.lineTo(this.points.last().x, 540);
        ctx.lineTo(this.points[0].x, 540);
        ctx.fill();
        ctx.restore();
    }
}

class ItemManager extends GameObject {
    constructor() {
        super();
        this.items = [];
        this.minX = 0;
        this.img = new Image();
        this.img.src = "http://web.lazygyu.net/test/whip/images/eclipse_sprites.png";
        this.spriteSheet = new SpriteSheet(this.img, SpriteDefs.item);
        this.lastItemX = 0;
        this.itemTypes = ["potion", "mana", "magnet"];
        this.coinY = 260;
    }

    init() {
        super.init();
        this.items = [];
        this.minX = 0;
        this.lastItemX = 0;
        this.coinY = 260;
    }

    getRandomItemType() {
        let t = (Math.random() * 10) | 0;
        if (t < 1) return "magnet";
        if (t < 6) return "mana";
        return "potion";
    }

    checkCollision(char) {
        // 캐릭터와 충돌을 판정
        this.items.forEach((i) => {
            i.isHit(char);
        });
    }

    update(timeDelta, char) {
        let inMagnet = char.magnet > 0;
        this.minX = this.parent.cameraX - 200;
        this.items.forEach((i) => {
            i.update(timeDelta, inMagnet);
            if (inMagnet) {
                // 자석처리
                i.originY = i.y;
                i.ty = 0;
                let ang = Math.atan2(char.y - i.y, char.x - i.x);
                let pt = Math.getPoint(i, ang, 540 * timeDelta);
                i.x = pt.x;
                i.originY = pt.y;
            }
            // 화면 밖으로 나간 아이템은 제거 대상으로..
            if (i.x < this.minX - 50) i.destroy = true;
        });
        // 제거 대상인 아이템들을 실제로 제거
        this.items = this.items.filter((i) => { return !i.destroy; });
        // 필요한 경우 아이템을 추가
        if (this.lastItemX - this.minX <= 540 + 380) {
            this.lastItemX += 80;
            this.coinY += Math.floor(Math.random() * 40) - 20;
            // 화면 밖으로 벗어나지 않게
            if (this.coinY < 20) this.coinY = 20;
            if (this.coinY > 520) this.coinY = 520;
            this.createItem("coin", this.lastItemX, this.coinY);
            if (this.lastItemX % 400 === 0) {
                let sy = Math.floor(Math.random() * 420) + 40;
                this.createItem(this.getRandomItemType(), this.lastItemX, sy);
            }
        }
    }

    render(ctx) {
        let maxX = this.minX + 540;
        this.items.forEach((i) => {
            i.render(ctx, maxX);
        });
    }

    createItem(type, x, y) {
        let item = null;
        switch (type) {
            case "potion":
                item = new Potion(x, y, new Animation(this.spriteSheet, AnimationDefs.item.potion));
                break;
            case "mana":
                item = new Mana(x, y, new Animation(this.spriteSheet, AnimationDefs.item.mana));
                break;
            case "coin":
                item = new Coin(x, y, new Animation(this.spriteSheet, AnimationDefs.item.coin));
                break;
            case "magnet":
                item = new Magnet(x, y, new Animation(this.spriteSheet, AnimationDefs.item.magnet));
                break;
        }
        if (item) this.items.push(item);
    }


}

class Item extends GameObject {
    constructor(x, y, anim) {
        super();
        this.x = x;
        this.originY = y; // 원래의 y 좌표
        this.ty = 0; // 원래의 y 좌표에서 위아래로 이동한 상대적인 값
        this.radius = 20; // 충돌 범위
        this.elapsed = 0;
        this.destroy = false;
        this.anim = anim;
    }

    get y() {
        return this.originY + this.ty; // 충돌체크에 편하도록 y 를 그냥 이렇게 얻어갈 수 있도록 하자.
    }


    update(timeDelta, magnet) {
        super.update(timeDelta);
        this.elapsed += timeDelta * 2;
        if (magnet) { this.ty = 0; this.elapsed = 0; }
        else this.ty = (Math.sin(this.elapsed) * 80) - 40; // -40 ~ 40 까지 오락가락하도록...
        this.anim.update(timeDelta);
    }

    isHit(char) {
        if (Math.distance(char, this) <= (char.radius + this.radius)) {
            char.gotItem(this.action());
        }
    }

    render(ctx, maxX) {
        if (this.x > maxX + this.radius * 2) {
            // 아직 화면에 나오기 전이다. 높이를 표시해주자.
            ctx.save();
            ctx.fillStyle = "rgba(255,255,255,0.7)";
            ctx.fillRect(maxX - 40, this.y - 20, 30, 40);
            ctx.fillRect(maxX - 45, this.y - 15, 40, 30);
            ctx.fillRect(maxX - 5, this.y - 2, 5, 5);
            this.anim.draw(ctx, maxX - 25, this.y, { scale: 0.5 });
            ctx.restore();
        } else {
            this.anim.draw(ctx, this.x, this.y, {}); // 애니메이션 그려주기
        }
    }

    action() {
        // 아이템의 효과를 나타내는 부분. 각 아이템 종류별로 서로 다른 처리가 필요하다.
        // 그치만 아이템이 사라진다는 건 공통적이지!
        this.destroy = true;
    }
}

class Potion extends Item {
    action() {
        super.action();
        return "jump";
    }
}

class Mana extends Item {
    action() {
        super.action();
        return "mana";
    }
}

class Magnet extends Item {
    action() {
        super.action();
        return "magnet";
    }
}

class Coin extends Item {
    action() {
        super.action();
        return "coin";
    }

    render(ctx) {
        this.anim.draw(ctx, this.x, this.y, {});
    }

    update(timeDelta, magnet) {
        this.elapsed += timeDelta * 2;
        if (magnet) { this.ty = 0; this.elapsed = 0; }
        else this.ty = (Math.sin(this.elapsed) * 20) - 10; // 동전은 예외적으로 위아래 움직임이 작다.
        this.anim.update(timeDelta);
    }
}

class EffectManager extends GameObject {
    constructor() {
        super();
        this.effects = [];
        this.img = new Image();
        this.img.src = "http://web.lazygyu.net/test/whip/images/eclipse_sprites.png";
        this.spriteSheet = new SpriteSheet(this.img, SpriteDefs.effect);
    }

    update(timeDelta) {
        super.update(timeDelta);
        this.effects = this.effects.filter((e) => {
            e.update(timeDelta);
            return !e.done;
        });
    }

    render(ctx) {
        super.render(ctx);
        this.effects.forEach((e) => {
            e.render(ctx);
        });
    }

    create(type, x, y) {
        let anim = new Animation(this.spriteSheet, AnimationDefs.effect[type], { loop: false });
        let ef = new Effect(anim, x, y);
        ef.init();
        this.effects.push(ef);
    }
}

class Effect extends GameObject {
    constructor(anim, x, y) {
        super();
        this.animation = anim;
        this.x = x;
        this.y = y;
    }

    get done() {
        return this.animation.done;
    }

    update(timeDelta) {
        this.animation.update(timeDelta);
    }

    render(ctx) {
        this.animation.draw(ctx, this.x, this.y);
    }
}

class SoundManager {
    constructor() {
        this.sounds = {};
        this.enable = true;
        this.soundFiles = ['whip', 'jump', 'highjump', 'coin', 'gameover', 'potion', 'bgm'];
        this.soundFiles.forEach((v) => {
            this.sounds[v] = document.createElement("audio");
            this.sounds[v].src = "http://web.lazygyu.net/test/whip/sounds/" + v + ".mp3";
        });
        this.sounds.bgm.volume = 0.1;
        this.sounds.bgm.addEventListener("ended", (v) => {
            this.sounds.bgm.currentTime = 0;
            this.sounds.bgm.play();
        });
    }

    init() {
        this.bgm.play();
    }

    stop(name) {
        this.sounds[name].pause();
        this.sounds[name].currentTime = 0;
    }

    bgmStart() {
        this.stop('bgm');
        //this.sounds.bgm.play();
    }

    bgmStop() {
        this.sounds.bgm.pause();
    }

    play(name) {
        if (this.sounds[name]) {
            this.stop(name);
            this.sounds[name].play();
        }
    }

    toggle() {
        this.enable = !this.enable;
        this.soundFiles.forEach((v) => {
            this.sounds[v].volume = this.enable ? ((i == 'bgm') ? 0.3 : 1) : 0;
        });
    }

    distructor() {
        this.soundFiles.forEach((v) => {
            this.soundFiles[v].pause();
            this.soundFiles[v] = null;
        });
    }
}

class ScoreManager {
    constructor() {
        this.highscore = localStorage.getItem("highscore") || 0;
        this.gotCoin = 0;
        this.usedCoin = 0;
        this._score = 0;
    }

    reset() {
        this._score = 0;
        this.gotCoin = 0;
        this.usedCoin = 0;
    }

    save() {
        if (this.highscore > 0) {
            localStorage.setItem("highscore", this.highscore);
        }
    }

    set score(v) {
        this._score = v;
        if (this._score > this.highscore) this.highscore = this._score;
    }

    get score() {
        return this._score;
    }
}

class UI extends GameObject {
    constructor(scoremanager, character) {
        super();
        this.scoreManager = scoremanager;
        this.character = character;

        this.img = new Image();
        this.img.src = "http://web.lazygyu.net/test/whip/images/eclipse_sprites.png";

        this.coin = new Sprite(this.img, 300, 0, 40, 40, 0, 0);
    }

    render(ctx) {
        ctx.save();
        ctx.translate(this.parent.cameraX - 200, 0);
        // 현재 점수 표시
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.strokeWidth = 2;
        ctx.font = "bold 40px verdana";
        ctx.fillText(this.scoreManager.score + "m", 0, 540 - 35);
        ctx.strokeText(this.scoreManager.score + "m", 0, 540 - 35);

        // 현재 코인 잔액 표시
        ctx.font = "bold 30px verdana";
        ctx.fillStyle = "#ffb82f";
        ctx.fillText(this.character.money, 35, 540 - 75);
        ctx.strokeText(this.character.money, 35, 540 - 75);
        this.coin.draw(ctx, 5, 440, { scale: 0.625 });

        // 최고기록 표시
        ctx.font = "16px verdana";
        ctx.strokeText("HIGHSCORE " + this.scoreManager.highscore + "m", 0, 540 - 17);
        ctx.fillText("HIGHSCORE " + this.scoreManager.highscore + "m", 0, 540 - 17);


        // mp 잔량 표시
        let mp = this.character.mp / 10 * 60; // 이미지 세로 크기인 60에 대한 비율로 나타내기 위해서...
        if (mp > 0) {
            ctx.drawImage(this.img, 75, 395 - mp, 60, mp, 540 - 65, 540 - 5 - mp, 60, mp);
        }
        ctx.drawImage(this.img, 0, 330, 70, 70, 540 - 70, 540 - 70, 70, 70);

        ctx.restore();

    }
}


var game = new Game(document.getElementById('canv'));
game.push(new GameScene());
game.update();