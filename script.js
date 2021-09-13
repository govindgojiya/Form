let leftHand = document.getElementById('hand-left');
let rightHand = document.getElementById('hand-right');
let pwdbox = document.getElementById('password-input');
let emailbox = document.getElementById('email-input');
let eyeRight = document.getElementById('eye-right');
let eyeLeft = document.getElementById('eye-left');
let i = 0;

pwdbox.addEventListener('focusin', () => {
    leftHand.classList.toggle('show-left');
    leftHand.classList.toggle('show-left-anim');
    rightHand.classList.toggle('show-right');
    rightHand.classList.toggle('show-right-anim');
})


pwdbox.addEventListener('focusout', () => {
    leftHand.classList.toggle('show-left');
    leftHand.classList.toggle('show-left-anim');
    rightHand.classList.toggle('show-right');
    rightHand.classList.toggle('show-right-anim');
})

emailbox.addEventListener('keyup', (e) => {
    let len = emailbox.value.length;
    i = (len >= 37 ? 37 : len);
    i = i / 3 - 2;
    eyeLeft.style.transform = `translateX(${i}%)`;
    eyeRight.style.transform = `translateX(${i}%)`;
})