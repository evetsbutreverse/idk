const express = require('express')
const app = express()

app.use(express.json()) 

app.get('/',(req,res) => {
    res.sendStatus(200)
})

app.get('/public/whitelist',(req,res) => {
    res.json({  success: true,
        data: {
          valid: true,
          hash: ""
        }})
})

app.listen(8080, ()=>{
    console.log("Started")
})