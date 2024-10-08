// const toggleButton = document.querySelector('.toggle-menu')

// const menu = document.querySelector('.menu')

// toggleButton.addEventListener('click', () => {
//   menu.classList.toggle('show')
//   if (menu.classList.contains('show')) {
//     toggleButton.classList.remove('fa-arrow-circle-right')
//     toggleButton.classList.add('fa-arrow-circle-down')
//   } else {
//     toggleButton.classList.remove('fa-arrow-circle-down')
//     toggleButton.classList.add('fa-arrow-circle-right')
//   }
// })
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-menu')

  toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const menuType = this.getAttribute('data-menu')
      const menu = document.querySelector(`.${menuType}-menu`)

      menu.classList.toggle('show')
      if (menu.classList.contains('show')) {
        this.classList.remove('fa-arrow-circle-right')
        this.classList.add('fa-arrow-circle-down')
      } else {
        this.classList.remove('fa-arrow-circle-down')
        this.classList.add('fa-arrow-circle-right')
      }
    })
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const increaseButtons = document.querySelectorAll('.increase')
  const decreaseButtons = document.querySelectorAll('.decrease')

  // Función para aumentar la cantidad
  increaseButtons.forEach(button => {
    button.addEventListener('click', function () {
      const input = this.parentNode.querySelector('.quantity')
      const value = parseInt(input.value)
      input.value = value + 1
    })
  })

  // Función para disminuir la cantidad
  decreaseButtons.forEach(button => {
    button.addEventListener('click', function () {
      const input = this.parentNode.querySelector('.quantity')
      const value = parseInt(input.value)
      if (value > 0) {
        input.value = value - 1
      }
    })
  })
})
