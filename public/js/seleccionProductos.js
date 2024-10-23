document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-menu')

  // Función para hacer el menú desplegable.
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
  // Función para que al cargar la vista, los botones se carguen bloqueados hasta activar el checkbox.
  document.querySelectorAll('.empanadaItem, .pizzaItem').forEach(item => {
    const increaseButton = item.querySelector('.increase')
    const decreaseButton = item.querySelector('.decrease')
    const quantityInput = item.querySelector('.quantity')

    increaseButton.disabled = true
    decreaseButton.disabled = true
    quantityInput.disabled = true
  })
})

document.querySelectorAll('.empanadaCheckbox, .pizzaCheckbox').forEach(checkbox => {
  // Función para que al marcar el checkbox active los botones - y +.
  checkbox.addEventListener('change', function () {
    const item = this.closest('.empanadaItem') || this.closest('.pizzaItem')
    const increaseButton = item.querySelector('.increase')
    const decreaseButton = item.querySelector('.decrease')
    const quantityInput = item.querySelector('.quantity')

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
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const increaseButtons = document.querySelectorAll('.increase')
  const decreaseButtons = document.querySelectorAll('.decrease')

  // Función para aumentar la cantidad.
  increaseButtons.forEach(button => {
    button.addEventListener('click', function () {
      const input = this.parentNode.querySelector('.quantity')
      const value = parseInt(input.value)
      input.value = value + 1
    })
  })

  // Función para disminuir la cantidad.
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

// Función para gestionar el pedido.
const productosSeleccionados = []

document.querySelectorAll('.menu input[type="number"]').forEach(input => {
  input.addEventListener('change', (e) => {
    const productoId = e.target.name.split('_')[1]
    const cantidad = parseInt(e.target.value)

    if (cantidad > 0) {
      productosSeleccionados.push({ productoId, cantidad })
    } else {
      const index = productosSeleccionados.findIndex(p => p.productoId === productoId)
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
