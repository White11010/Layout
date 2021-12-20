(function () {
    for (const eyeButton of document.querySelectorAll(".password-input__eye")) {
        eyeButton.addEventListener('click', function() {
            if (this.checked === true) {
                this.closest('.custom-input__container').querySelector('.password-input').setAttribute('type', 'text');
            } else {
                this.closest('.custom-input__container').querySelector('.password-input').setAttribute('type', 'password');
            }
        })
    }
})()

