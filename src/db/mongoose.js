const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    userNewUrlParser: true,
    useCreateIndex: true,
} )


// const me = new User({name:"Micher     ", email:"2fg4@GMAil.com", password: "password"})
// me.save().then((res) =>{
//     console.log(res)
// }).catch((e) =>{
//     console.log('Error',e)
// })


// const task  = new Task({description: "Clean the bathroom", completed: false})
// task.save().then((res) =>{
//     console.log(res)
// }).catch((e) =>{
//     console.log(e)
// })
