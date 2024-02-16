
let express=require("express")

let app=express()

app.use(express.json())

app.get("/endpoint",(req,res)=>{
      res.send("successfully created server")
})

app.listen(3007,()=>console.log("the port is running"));
