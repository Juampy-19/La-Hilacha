document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burgerMenu')
  const navMenu = document.getElementById('navMenu')

  burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
  })
})
