'use strict';

const form = document.querySelector(`.form-members`);
const afterSendingMessage = document.querySelector(`.form-members__message`);
const emailInput = document.querySelector(`.form-members__email-input`);
const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener(`submit`, () => {
    if (reg.test(emailInput.value) === true) {
        afterSendingMessage.classList.add(`visible`);
        emailInput.value = ``;
    } else {
        alert(`Incorrect Email!`)
    }
});