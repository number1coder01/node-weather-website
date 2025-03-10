const weatherForm = document.querySelector('form');
const searchElement=document.querySelector('input');
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault() // form ka natural behaviour to reload the page upon submission  and reset all the value and we dont want that so we remove that 
    //prevent form from reloading the page 
     
    const location=searchElement.value
    messageOne.textContent='Loading Result...'
    messageTwo.textContent=''
    fetch('/weather?address='+ encodeURIComponent(location)).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent='ERROR...'
                messageTwo.textContent=data.error
            }
            else{
                messageOne.textContent='Fetched results for the location : ' + data.location   //manipulate the value of the para from js file 
                messageTwo.textContent='Forecast : '+ data.forecast.temperature + data.forecast.type +data.forecast.humidity + data.forecast.feelslike  + data.forecast.rain
            }
        })
    })
})


//error to be fixed : invalid values 