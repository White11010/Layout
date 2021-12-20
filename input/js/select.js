(function () {

 for (const dropdown of document.querySelectorAll(".select__wrapper")) {
    dropdown.addEventListener('click', function() {
      if (!dropdown.classList.contains('select--disabled')) {
        this.querySelector('.select').classList.toggle('select--open');
      }
    })
}

  for (const option of document.querySelectorAll(".select__option")) {
      option.addEventListener('click', function() {
          if (!this.classList.contains('select__option--selected')) {
            if (this.parentNode.querySelector('.select__option.select__option--selected')) {
              this.parentNode.querySelector('.select__option.select__option--selected').classList.remove('select__option--selected');
            }
              this.classList.add('select__option--selected');
              this.closest('.select').querySelector('.select__placeholder').textContent = this.textContent;
              this.closest('.select').querySelector('.select__placeholder').classList.add('select--changed');
              this.closest('.select').classList.add('select--changed');
          }
      })
  }

  window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('select--open');
        }
    }
  });

})()

