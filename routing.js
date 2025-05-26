const express=require("express")
const app=express()
const port=3000
app.use(express.json())
let stud=[
    {id:1,name:"sat",roll:"80"},
        {id:2,name:"jan",roll:"81"}
]
//get
//app.get('/',(req,res)=>{
 //   res.send(stud)
//})

//get by id
// app.get('/stud/:id',(req,res)=>{
//     const id=parseInt(req.params.id)
//     if(st){
//         res.send(st)
//     }
//     else
//     {
//         res.status(404)
//     }
// })
async function check() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
     //console.log(data);
     app.get('/',(req,res)=>{
        res.send(data)
     })
     app.get('/data/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const st=data.find(s=>s.id==id)
    if(st){
        res.send(st)
    }
    else
    {
        res.status(404)
    }
})

}
check()
app.listen(port,()=>{console.log("http://localhost:3000")})