'use strict';

const header = document.querySelector(`header`);

window.addEventListener(`scroll`, () => {
    if (scrollY === 0) {
        header.classList.remove(`_scrolled`);
    } else if (scrollY !== 0 && !header.classList.contains(`_scrolled`)) {
        header.classList.add(`_scrolled`);
    }
});