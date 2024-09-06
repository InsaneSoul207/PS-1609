const mongoose = require('mongoose')
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'register.html'))
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'login.html'))
})

app.listen(3019, () => {
    console.log("server started")
})

mongoose.connect("mongodb://127.0.0.1:27017/register")
.then(() => {
    console.log('mongodb is connected');

})
.catch(() => {
    console.log('error');
})

const newSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    dob: String,
})
const collection = new mongoose.model('register', newSchema)

app.post('/post',async (req,res)=>{
    const {name,email,password,phone,dob} = req.body
    const user = new collection({
        name,
        email,
        password,
        phone,
        dob
    })
     await user.save()
     console.log(user)
     res.send("form is successfull submit")
})

app.post('/log',async (req,res)=>{
    const {email,password} = req.body
    const user = new collection({
        email,
        password,
    })
     await user.save()
     console.log(user)
     res.send("form is successfull submit")
})

