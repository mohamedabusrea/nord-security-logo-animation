const appElement = document.querySelector('.app');

const buttonElement = document.querySelector('.button');

const frame = (end) => {
    const colors = ['#0091ff', '#ff2525'];

    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: {x: 0},
        colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: {x: 1},
        colors: colors
    });

    if (Date.now() < end) {
        requestAnimationFrame(() => frame(end));
    }
};

buttonElement.addEventListener('click', () => {
    const end = Date.now() + (2 * 1000);

    appElement.classList.add('app--animate');
    setTimeout(() => frame(end), 300);
})
