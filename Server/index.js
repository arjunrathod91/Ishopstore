const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const FeatureModel = require("./models/Products")
const MenModel = require("./models/Men")
const WomenModel = require("./models/Women")
const ChildrenModel = require("./models/Children")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Products")

// app.post('/login',(req,res)=>{
//     const {email,password} = req.body;
//     UserModel.findOne({email: email})
//     .then(user =>{
//         if(user){
//             if(user.password === password){
//                 res.json('success')

//             }else {
//                 res.json('the password is incorrect')
//             }
//         }else{
//             res.json('No record existed ')
//         }
//     })
// })

// app.post('/register',(req,res)=>{
//     UserModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))

// })

// app.post('/projects',(req,res)=>{
//     ProjectModel.create(req.body)
//     .then(newProject => res.json(newProject))
//     .catch(err => res.json(err))

// })

app.get('/featured',(req,res)=>{
    FeatureModel.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))

})

app.get('/women',(req,res)=>{
    WomenModel.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))

})

app.get('/men',(req,res)=>{
    MenModel.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))

})

app.get('/children',(req,res)=>{
    ChildrenModel.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))

})


// app.get('/getData', (req, res) => {
//     ProjectModel.find()
//     .then(details => res.json(details))
//     .catch(err => res.json(err))
    
//   });

app.listen(3004,()=>{
    console.log('server is running')
})