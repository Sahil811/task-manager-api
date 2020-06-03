// CRUD creat read update delete

//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5ec23a94671ea62754103b94")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 25 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 25 }).count((error, count) => {
    //     console.log(count)
    // })

    //   db.collection('users').updateOne({
    //        _id: new ObjectID("5ec23a94671ea62754103b94")
    //    }, {
    //        $inc: {
    //            age: 1
    //        }
    //    }).then((result) => {
    //        console.log(result)
    //    }).catch((error) => {
    //        console.log(error)
    //    })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 28
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})