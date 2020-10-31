document.addEventListener('click', ({ target: t }) => {
  if (t.classList.contains('like-button__button')) {
    const index = [
      ...document.querySelectorAll('.like-button__button'),
    ].indexOf(t);
    const count = document.querySelectorAll('.like-button__like-count')[index];
    const like = document.querySelectorAll('.like-button__like')[index];
    t.parentNode.classList.toggle('like-button_active');
    like.textContent = ['favorite_border', 'favorite'][
      +t.parentNode.classList.contains('like-button_active')
    ];
    count.textContent -= [1, -1][
      +t.parentNode.classList.contains('like-button_active')
    ];
  }
});
