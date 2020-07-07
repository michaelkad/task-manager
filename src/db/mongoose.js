const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    userNewUrlParser: true,
    useCreateIndex: true,
})


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
