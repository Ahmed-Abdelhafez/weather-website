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

document.querySelector('#weatherInMyLocation').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }
    navigator.geolocation.getCurrentPosition((position) => {
        const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        loc: position.coords.accuracy
        }
        massageone.textContent = 'loading...'
        massagetwo.textContent = ''
    fetch('/weather?lat=' + location.latitude + '&lon=' + location.longitude).then((response) => {
        response.json().then((data) => {
            if(data.error){
                massageone.textContent = data.error
            }else{
                massageone.textContent = data.forecast
            }
            
        })
    })
})
})

