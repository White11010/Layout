const inputPassword = document.querySelector(".password-input")
const eyeButton = document.querySelector(".password-input__eye")

eyeButton.addEventListener('change', (e) => {
    if (eyeButton.checked === true) {
        inputPassword.setAttribute('type', 'text');
    } else {
         inputPassword.setAttribute('type', 'password');
    }
})