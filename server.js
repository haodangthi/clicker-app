const express=require('express')
const app = express()
const path=require('path')
app.use(express.static(__dirname+'/dist/angular-lessons'))

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/angular-lessons/index.html'))
})
app.listen(process.env.PORT||8080)
console.log('listening')