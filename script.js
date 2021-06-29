'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let a = 0; a < btnsOpenModal.length; a++) {
  btnsOpenModal[a].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  let answer = modal.classList.contains('hidden');

  if (event.key === 'Escape' && !answer) {
    closeModal();
  }
});
