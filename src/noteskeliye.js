// const path=require('path')
// const express=require('express')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

// const app=express()   

// //directory added using app.us  
// app.use(express.static(path.join(__dirname,'../public')))


// //redirect karega to when someone wants to access a resource at a specific url
// //sending back html or json or any other
// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'Andrew',
//     },{                //array of objects
//         name:'Sam',
//     }])
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About Page!</h1>')  //html rendering
// })

// app.get('/weather',(req,res)=>{
//     res.send({
//         location:'Delhi',  //json object
//         forecast:5
//     })
// })
// //jaise app.com hai 
// //toh app.com/help
// //app.com/about these are routes

// app.listen(3000,()=>{
//     console.log('Server is up on port 3000.')
// })

//2 

// const path=require('path')
// const express=require('express')
// const hbs=require('hbs')

// // console.log(__dirname)
// // console.log(path.join(__dirname,'../public'))

// const app=express()  

// //Define paths for Express configurations
// const publicDirectoryPath=path.join(__dirname,'../public')
// const viewsPath=path.join(__dirname,'../templates/views')
// const partialsPath=path.join(__dirname,'../templates/partials')

// //Setup handlebars engine and views location(Set engine and change directory path for views)
// app.set( 'view engine' , 'hbs')
// app.set('views',viewsPath)
// hbs.registerPartials(partialsPath)

// //Setup static directory to serve
// app.use(express.static(publicDirectoryPath))


// app.get('',(req,res)=>{
//     res.render('index',{
//         title:'indexpage',
//         name:'Kaartik Daddy'
//     })   //render one of our views(handlebar templates)
// })

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title:'About Page!',
//         name:'Kaartik the SUpreme Daddy'
//     })
// })

// app.get('/help',(req,res)=>{
//     res.render('help',{
//         helpMessage:'Help me Daddy please!'
//     })
// })
// app.get('/weather',(req,res)=>{
//     res.send({
//         location:'Delhi',  
//         forecast:5
//     })
// })

// app.listen(3000,()=>{
//     console.log('Server is up on port 3000.')
// })

