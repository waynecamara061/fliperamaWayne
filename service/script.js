const mario = document.querySelector(".img-mario");
const tubo = document.querySelector(".img-tubo");

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {
    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80 ) {
        tubo.style.animation = "none"
        tubo.style.left = `${tuboPosition}px`

        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`
        mario.src = "./img/gameover.gif"
        mario.style.width = "110px"
        mario.style.marginLeft = "35px"
        clearInterval(loop);
    }
}, 10);

document.addEventListener("keydown", jump);