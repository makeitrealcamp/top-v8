const ws = new WebSocket('wss://mir-chat.herokuapp.com/')

const form = document.querySelector('.form')
const container = document.querySelector('.container')

ws.onopen = e => {
  container.innerHTML = ''

  form.addEventListener('submit', e => {
    e.preventDefault()

    const { message, sender } = e.target.elements

    ws.send(JSON.stringify({
      message: message.value,
      sender: sender.value,
    }))
  })
}

ws.onmessage = e => {
  const { message, sender } = JSON.parse(e.data)

  container.innerHTML += `
    <div class="message">
      <p>${message}</p>
      <p>By: ${sender}</p>
    </div>
  `
}

ws.onerror = e => {
  container.innerHTML = '<p>Something went wrong</p>'
}

ws.onclose = e => {
  container.innerHTML = '<p>Connection closed</p>'
}

// setTimeout(() => {
//   ws.close()
// }, 1500)
