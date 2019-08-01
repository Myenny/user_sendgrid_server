const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()


router.get('/', async(req, res) => {
    const users = await loadUsersCollection();
    res.send(await users.find({}).toArray())
})

router.post('/', async(req, res) => {
    const users = await loadUsersCollection();
    await users.insertOne({
        user: req.body.user,
        createdAt: new Date()
    })
    res.status(201).send()
})

router.delete('/:id', async(req, res) => {
    const users = await loadUsersCollection();
    await users.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    })
    res.status(200).send()
})

async function loadUsersCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://abc123:michael123@cluster0-yavih.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }
    )
    return client.db('vuexpress').collection('users')
}

module.exports = router;