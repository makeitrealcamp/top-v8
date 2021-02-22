// DOM - Document Object Model
// html
//   head
//   body
//     header
//     main
//       h2
//       article

// Seleccionar
document.getElementById('id')
document.getElementsByClassName('btn')
document.querySelector('.btn')
document.querySelectorAll('.btn')

// Obtener Atributos
el.innerHTML
el.style

// modificar algunos atributos
el.innerHTML = 'hola mundo'

// Eventos
el.addEventListener('change', function (event) {
  alert('hola mundo')
})
