const request=require('request')

const forecast = (latitude,longitude,callback) => {
    const url='https://api.weatherstack.com/current?access_key=65872628873146a8e145a45691dca675&query='+longitude+','+latitude+'&units=m'
    request({url , json:true } , (error,{body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined);
        }
        else if(body.error){ 
            callback('Unable to find location. Try again !', undefined);
        } 
        else{
            callback(undefined,{
                type: body.current.weather_descriptions[0]+' is the current weather type.',
                temperature:'It is '+body.current.temperature+' degrees out there.',
                humidity:'There is ' +body.current.humidity + '% humidity.',
                feelslike:'But it feels like '+ body.current.feelslike + ' degrees in here.',
                rain:'There is '+body.current.precip+'% chance of rain.'
            })
        }   
    })
}

module.exports=forecast