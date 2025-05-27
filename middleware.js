//middleware is a function thatruns between client req and response
//used for: log req, authenticate users, parse req data, modify req-res,stop -continue req cycle
//structure- (req,res,next)=>{...}
//to continue to next middleware, next used

// --logger middleware--
//debugging,monitoring,auditing
// used to print the method in the console
// it logs info like: http method,req url,res status,time  taken to process req
const express=require('express')
const app=express()
app.use(express.json())
const logger=(req,res,next)=>{
    console.log(`${req.method},${req.url}`)
    next()
}
app.use(logger)

//--urlencoded middleware---
//urlencoded is a built-in middleware in express used to parse incoming request bodies with url-encoded data
//used to get data from frontend form to backend
//options: extended-true or extended-false
app.use(express.urlencoded({extended:true}))

 app.post('/submit',(req,res)=>{
   res.send(`${req.body.name}`)
})

//----static middleware---
//getting the data from the static form and stores in backend
//create a static file in the public folder and retrive its content in server.js 
//check the output url as localhost:3000/static/static.txt
app.use('/static',express.static('public'))

//-----------------third party middleware------------
//1)morgan      2)cors
//morgan is similar to the builtin logger middleware,difference is: it is a thirdparty
//cross origin(cors) used for avoiding the conflictswhen connecting the frontend and backend, localhost:3000 is ur backend,localhost:4173 is frontend, the browser sees this as a cross orginreq and it may block it unless cors is enabled  
const morgan=require('morgan')
const cors=require('cors')
app.use(morgan('dev'))
app.use(cors())

//-------custom middleware-------
function logger1(req,res,next){
    console.log(`[$new Date()]`)
}
function auth(req,res,next){
    const token=req.headers['authorization']
    if(token=='sat123'){
        next()
    }
    else{
        res.status(400)
    }
}app.use(logger)
app.get('/public',(req,res)=>{
    res.send('no auth')
})
app.get('/secure',auth,(req,res)=>{
    res.send('protected')
})
app.listen(3000)






