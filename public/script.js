const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const imgMusic = document.querySelector('.music');
const imgReload = document.querySelector('.reload');
const score = document.querySelector('.spanScore');
const game = document.querySelector('.game');
const inciar = document.querySelector('.button');
const divIniciar = document.querySelector('.inicial');
const lines = document.querySelector('.lines');
const grid = document.querySelector('.grid');
const h1 = document.querySelector('.h1');
const h2 = document.querySelector('.h2');

let marioLive = true;
let musicOn = true;

game.style.display = 'none';

const jump = () => {
    if (marioLive) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

const music = new Audio('../asset/marioMusic.mp3');
music.loop = true;

const musicDead = new Audio('../asset/marioDead.mp3');

imgMusic.src = "../asset/soundOff.svg";

function musica() {
    if (musicOn) {
        music.play();
        imgMusic.src = "../asset/soundOn.svg";
    } else {
        music.pause();
        imgMusic.src = "../asset/soundOff.svg";
    }
    musicOn = !musicOn;
}

let start = false

let blackPhase = false;

const loopStart = setInterval(() => {
    h2.addEventListener('click', () => {
        lines.style.display = 'none';
        grid.style.display = 'none';
        h1.style.display = 'none';
        h2.style.display = 'none';

        game.style.display = 'block';
        start = true;
        music.play()
        imgMusic.src = "../asset/soundOn.svg";
    });
}, 100);


const loop = setInterval(() => {
    if (start) {
        const pipePosition = pipe.offsetLeft;
        const marioBottom = +window.getComputedStyle(mario).bottom.replace('px', '');

        cron = setInterval(() => { }, 10);
        score.textContent = parseInt(cron / 10)


        if (cron / 10 >= 30 && blackPhase == false) {
            mario.src = "../asset/marioDin.gif";
            blackPhase = true;
        }

        let widthScreen = window.innerWidth;
        if (widthScreen >= 600) {
            if (pipePosition <= 120 && pipePosition >= 0 && marioBottom < 80) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                // mario.style.animation = 'none';
                mario.style.bottom = `${marioBottom}px`;

                mario.src = '../asset/game-over.png';
                mario.style.width = '75px';
                mario.style.marginLeft = '50px';

                mario.classList.remove('jump');
                marioLive = false;

                music.pause()

                musicDead.play();
                setTimeout(function () {
                    mario.classList.remove('jump');
                    mario.animate([
                        // keyframes
                        { bottom: `${marioBottom}px` },
                        { bottom: '200px' },
                        { bottom: '-100px' },
                        { bottom: '-500px' },
                    ], {
                        // timing options
                        duration: 1000,
                        easing: 'ease-in-out'
                    });

                    mario.style.bottom = `-500px`;
                }, 1000);

                imgReload.src = "../asset/reload.svg";
                clearInterval(loop);
                start = false
            }
        } else {
            if (pipePosition <= 120 && pipePosition >= 0 && marioBottom < 40) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                // mario.style.animation = 'none';
                mario.style.bottom = `${marioBottom}px`;

                mario.src = '../asset/game-over.png';
                mario.style.width = '75px';
                mario.style.marginLeft = '50px';

                mario.classList.remove('jump');
                marioLive = false;

                music.pause()

                musicDead.play();
                setTimeout(function () {
                    mario.classList.remove('jump');
                    mario.animate([
                        // keyframes
                        { bottom: `${marioBottom}px` },
                        { bottom: '200px' },
                        { bottom: '-100px' },
                        { bottom: '-500px' },
                    ], {
                        // timing options
                        duration: 1000,
                        easing: 'ease-in-out'
                    });

                    mario.style.bottom = `-500px`;
                }, 1000);
                imgReload.src = "../asset/reload.svg";
                clearInterval(loop);
                start = false
            }
        }
    }
}, 10);


document.addEventListener('keydown', (e) => {
    if (e.keyCode === 32) {
        jump();
    }
});

let counter = 0;
document.addEventListener('touchstart', () => {
    if (counter == 0) {
        counter++;
    } else jump()
});

imgReload.addEventListener('click', () => {
    location.reload();
})