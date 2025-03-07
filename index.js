const link = document.querySelectorAll('.navigation__link');
 

link.forEach(link => {
  link.addEventListener('click', (event) => {
     const checkbox = document.querySelector('.navigation__checkbox');
    checkbox.checked = false;
  });
})



