const userBtn = document.querySelector('.userBtn')
const page = document.querySelector('.area')

const sayHello = () => {
  console.log('im in');
  alert('hi')
}

const addElement = () => {
  console.log('in');
  const newButton = document.createElement('div')
  page.appendChild(newButton)
}

userBtn.addEventListener('click', addElement)
