const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response) // prints out 'pong'
}

func()


const setButton = document.getElementById('btn')
const messageInput = document.getElementById('messageInput')
setButton.addEventListener('click', () => {
  const message = messageInput.value
  window.electronAPI.message(message)
})