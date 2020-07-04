// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
    if (error){
        return console.log('Unable to connect tit database!')
    }
   const db = client.db(databaseName)
    db.collection('tasks').deleteOne({description:  "task 3"}).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((res) =>{
    //     console.log(res)
    // }).catch((err) =>{
    //     console.log(err)
    // })
   // db.collection('users').updateOne({_id: new ObjectID('5efed68bb795513048c61c8d')
   //
   //  }, {
   //      $inc: {
   //          age: 1
   //      }
   //
   //  })
   //     .then((res)=>{
   //      console.log(res)
   //  }).catch((err)=>{
   //      console.log(err)
   //  })
   //  db.collection('tasks').updateMany({completed: false},{
   //      $set:{
   //          completed: true
   //      }
   //  }).then((res)=>{
   //      console.log(res)
   //  }).catch((err)=>{
   //      console.log(err)
   //  })
    // db.collection('users').findOne({_id: new ObjectID('5efedce6c0a87d30e96faed7'), age: 20}, (error, user)=>{
    //     if (error){
    //       return   console.log('unable to fetch user')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({age: 20}).toArray((error, users) =>{
    //     if (error){
    //         console.log('Unable to fetch users')
    //     }
    //     console.log(users)
    // })
    // db.collection('tasks').find({completed: false}).toArray((error, users) =>{
    //     if (error){
    //         console.log('Unable to fetch users')
    //     }
    //     console.log(users)
    // })
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: "Beton",
    //     age: 20
    // }, (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //     name: "Pierre",
    //     age: 20
    // }, {
    //         name: "Lola",
    //         age: 27
    //     },
    //   ],   (error, result) =>{
    //         if(error){
    //             return console.log('Unable to insert user')
    //         }
    //         console.log(result.ops)
    //     }
    //     )
    // db.collection('tasks').insertMany([
    //         {
    //             description: "task 2",
    //             completed: true
    //         }, {
    //             description: "task 6",
    //             completed: false
    //         },
    //     {
    //         description: "task 3",
    //         completed: true
    //     },
    //     ],   (error, result) =>{
    //         if(error){
    //             return console.log('Unable to insert user')
    //         }
    //         console.log(result.ops)
    //     }
    // )
})
