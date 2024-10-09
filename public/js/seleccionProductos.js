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

  document.querySelectorAll('.empanadaItem').forEach(item => {
    const increaseButton = item.querySelector('.increase')
    const decreaseButton = item.querySelector('.decrease')
    const quantityInput = item.querySelector('.quantity')

    increaseButton.disabled = true
    decreaseButton.disabled = true
    quantityInput.disabled = true
  })
})

document.querySelectorAll('.empanadaCheckbox').forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    const empanadaItem = this.closest('.empanadaItem')
    const empanadaSelector = empanadaItem.querySelector('.empanadaSelector')

    if (empanadaSelector) {
      const increaseButton = document.querySelector('.increase')
      const decreaseButton = document.querySelector('.decrease')
      const quantityInput = empanadaSelector.querySelector('.quantity')
      console.log('Increase button: ', increaseButton)
      console.log('Decrease button: ', decreaseButton)
      console.log('Quatity input: ', quantityInput)

      if (this.checked) {
        increaseButton.disabled = false
        decreaseButton.disabled = false
        quantityInput.disabled = false
      } else {
        increaseButton.disabled = true
        decreaseButton.disabled = true
        quantityInput.disabled = true
        quantityInput.value = 0
      }
    }
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
