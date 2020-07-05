const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(400).send(e)
    }
    // user.save().then(()=>{
    //
    //     res.status(201).send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    //
    // })
})
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (e) {
        res.status(400).send()
    }
})
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send()
    }
    // User.find({}).then((users) =>{
    //     console.log(users)
    //     res.status(200).send(users)
    // }).catch((e) =>{
    //     res.status(500).send()
    // })
})
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send()

    }

    // console.log(_id)
    // User.findById(_id).then((user)=> {
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     res.status(200).send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    //
    // })
})
router.patch('/users/:id', async (req, res) => {
    const _id = req.params.id
    const allowed = ['name', 'email', 'password', 'age']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update) => {
        return allowed.includes(update)
    })
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try {
        //const user =   await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        const user = await User.findById(_id)
        updates.forEach((update) => {
            user[update] = req.body[update]
        })
        await user.save()
        if (!user) {
            return res.status(404).send();
        }
        res.send(user)

    } catch (e) {
        res.status(400).send(e)
    }
})
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send()
        }
        console.log(user)
        res.send(user)
    } catch (e) {
        return res.status(400).send(e)
    }
})
module.exports = router
