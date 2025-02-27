const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geoCode=require('./utils/geocode')
const forecast=require('./utils/forecast')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app=express()  

//Define paths for Express configurations
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location(Set engine and change directory path for views)
app.set( 'view engine' , 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather Finder',
        name:'Kaartik the Final Boss'
    })   //render one of our views(handlebar templates)
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Page!',
        name:'Kaartik the Final Boss'
    }) 
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpMessage:'Help me Daddy please!',
        title:'Help Me!',
        name:'Kaartik the Final Boss'
    })
})
app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error:'Please enter a address'
        })
    }
                                             //yeh nahi denge toh error aayega kyuki destructure karne ki try karega even though error ki value hai kuch (usko nahi pata na ki error ko value de di hai humne) 
    geoCode(req.query.address , (error, {longitude,latitude,location} = {} )=>{
        if(error) {
            return res.send({
                error:error
            })
        }
        forecast(longitude,latitude, (error, forecastdata) =>{
            if(error) {
            return res.send({
                error:error
            })
        }
            res.send({
                location:location,
                forecast:forecastdata
            })
        })
    })
})

//query string inside search bar mei after url just type ?key=value
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must enter a serach value'
        })
    }
    // console.log(req.query.search)
    res.send({
        products:{}
    })
})

app.get(('/help/*'),(req,res)=>{
    res.render('error',{
        errorName:'Help article not found'
    })
})
app.get('*',(req,res)=>{
    res.render('error',{
        errorName:'Page not found!'
    })
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})

