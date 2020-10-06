const locationform = document.querySelector('form')
const search = document.querySelector('input')
const massageone = document.querySelector('#massage-1')
const massagetwo = document.querySelector('#massage-2')

locationform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location= search.value
    massageone.textContent = 'loading...'
    massagetwo.textContent = ''
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            massageone.textContent = data.error
        }else{
            massageone.textContent = data.forecast
            massagetwo.textContent = data.location
        }
        
    })
})
})