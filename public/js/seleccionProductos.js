document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-menu')
  const empanadaPizzaItems = document.querySelectorAll('.empanadaItem, .pizzaItem')
  // const empanadaPizzaCheckboxes = document.querySelectorAll('.empanadaCheckbox, .pizzaCheckbox')
  const increaseButtons = document.querySelectorAll('.increase')
  const decreaseButtons = document.querySelectorAll('.decrease')
  const quantityInputs = document.querySelectorAll('.menu input[type="number"]')

  // Menú desplegable.
  toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const menuType = this.dataset.menu
      const menu = document.querySelector(`.${menuType}-menu`)
      menu.classList.toggle('show')
      this.classList.toggle('fa-arrow-circle-right', !menu.classList.contains('show'))
      this.classList.toggle('fa-arrow-circle-down', menu.classList.contains('show'))
    })
  })

  // Inicialización de botones y checkboxes.
  empanadaPizzaItems.forEach(item => {
    const increaseButton = item.querySelector('.increase')
    const decreaseButton = item.querySelector('.decrease')
    const quantityInput = item.querySelector('.quantity')
    const checkbox = item.querySelector('.empanadaCheckbox, .pizzaCheckbox')

    if (checkbox) {
      increaseButton?.setAttribute('disabled', true)
      decreaseButton?.setAttribute('disabled', true)
      quantityInput?.setAttribute('disabled', true)
    }
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        increaseButton?.removeAttribute('disabled')
        decreaseButton?.removeAttribute('disabled')
        quantityInput?.removeAttribute('disabled')
        quantityInput.value = this.checked ? quantityInput.value || 1 : 0
      } else {
        increaseButton?.setAttribute('disabled', true)
        decreaseButton?.setAttribute('disabled', true)
        quantityInput?.setAttribute('disabled', true)
        quantityInput.value = 0
      }
    })
  })

  // Aumento la cantidad.
  increaseButtons.forEach(button => {
    button.addEventListener('click', function () {
      const input = this.parentNode.querySelector('.quantity')
      input.value = parseInt(input.value) + 1
      input.dispatchEvent(new Event('change'))
    })
  })

  // Disminuyo la cantidad.
  decreaseButtons.forEach(button => {
    button.addEventListener('click', function () {
      const input = this.parentNode.querySelector('.quantity')
      const value = parseInt(input.value)
      input.value = Math.max(0, value - 1)
      input.dispatchEvent(new Event('change'))
    })
  })

  // Gentiono el pedido.
  const productosSeleccionados = []

  quantityInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const itemNameParts = e.target.name.split('_')
      const sabor = itemNameParts[1]
      const tamaño = itemNameParts[2]
      const precio = itemNameParts[3]
      const tipo = e.target.name.startWith('empanada') ? 'empanada' : 'pizza'
      const cantidad = parseInt(e.target.value)

      if (cantidad > 0) {
        const productoExistente = productosSeleccionados.find(p => p.sabor === sabor && p.tamaño === tamaño && p.precio === precio && p.tipo === tipo)
        if (productoExistente) {
          productoExistente.cantidad = cantidad
        } else {
          productosSeleccionados.push({ sabor, tamaño, precio, tipo, cantidad })
        }
      } else {
        const index = productosSeleccionados.findIndex(p => p.sabor === sabor && p.tamaño === tamaño && p.precio === precio && p.tipo === tipo)
        if (index > -1) {
          productosSeleccionados.splice(index, 1)
        }
      }
      actualizarCarrito()
    })
  })

  function actualizarCarrito () {
    console.log(productosSeleccionados)
  }
})
