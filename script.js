
const email = document.getElementById('mail')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const errorstyle = document.querySelector("input");



form.addEventListener('submit', (e) => {
  let messages = []
 
  if (email.value === '' || email.value.length <= 6  || email.value.length >= 20) {
    messages.push('Please provide a valid email address')
    
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})


