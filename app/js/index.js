const API ='https://ron-swanson-quotes.herokuapp.com/v2/quotes';

fetch(API)
.then(function (response) {
    return response.json()
  })
  .then(function (data) {
    document.querySelector('.quote').innerText = data[0]
  })

  //end of dynamic data //

  const el = document.querySelector('article h2')

  const basilChefs = ['mama', 'papa', 'baby']
  const basilTexture = ['greasy', 'frozen', 'spicy']
  
  function random(array) {
    const max = array.length
    const randomIndex = Math.floor(Math.random() * max)
    return array[randomIndex]
  }
  
  var recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`
  
  el.innerHTML = recipeName
  
//end of recipe name //

var modalOuter = document.querySelector('.modal-outer')
var modalInner = document.querySelector('.modal')

var betaContent = `
<h3>Oooops!</h3>
<p>Wow! Nothing works!<p>
`
var buttonContent = `
<h2>Coming Soon</h2>
<p>This feature coming soon.<p>
<a class="closer" href="#0">✖︎</a>
`

function showPopover(event) {
  if (event.target.matches('.beta')) {
    modalInner.innerHTML = betaContent
    modalOuter.classList.add('open')
  } else if (event.target.closest('nav ul')) {
    modalInner.innerHTML = buttonContent
    modalOuter.classList.add('open')
  } else if (event.target.matches('.closer, .modal-outer')) {
    modalOuter.classList.remove('open')
  } else return
  event.preventDefault()
}

document.addEventListener('click', showPopover)


// var modalOuter = document.querySelector('.modal-outer')
// var modalInner = document.querySelector('.modal')

// var betaContent = `
// <h3>Oooops!</h3>
// <p>Wow! Nothing works!<p>
// `

// function showPopover(event) {
//   if (event.target.matches('.beta')) {
//     modalInner.innerHTML = betaContent
//     modalOuter.classList.add('open')
//   } else if (event.target.matches('.closer, .modal-outer')) {
//     modalOuter.classList.remove('open')
//   } else return
//   event.preventDefault()
// }

// document.addEventListener('click', showPopover)


// var modal = document.querySelector('.modal')
// var modalOuter = document.querySelector('.modal-outer')

// function showPopover(event) {
//   if (event.target.matches('.beta')) {
//     modalOuter.classList.add('open')
//   } else if (event.target.matches('.closer, .modal-outer')) {
//     modalOuter.classList.remove('open')
//   } else return
//   event.preventDefault()
// }

// document.addEventListener('click', showPopover)

// var modal = document.querySelector('.modal')
// var betaButton = document.querySelector('.beta');

// function showPopover(event) {
//   console.log(event.target)
//   if (!event.target.matches('.beta, .closer')) return
//   modal.classList.toggle('open')
//   event.preventDefault()
// }

// betaButton.addEventListener('click', showPopover);

// document.addEventListener('click', showPopover)

// var modal = document.querySelector('.modal')
// var modalOuter = document.querySelector('.modal-outer')

// function showPopover(event) {
//   if (!event.target.matches('.beta, .closer')) return
//   modalOuter.classList.toggle('open')
//   event.preventDefault()
// }

// document.addEventListener('click', showPopover)
