const app = require("./app");
const path = require("path");

const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../config/dev.env") });

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const express = require('express')
// require('./db/mongoose')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

// const app = express()

// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// const bcrypt = require('bcryptjs')

// const jwt = require('jsonwebtoken')

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5ecf53654bf0e718085ad2fc')
//      await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

// app.use((req, res, next) => {
//      if (req.method === 'GET') {
//           res.send('GET request are disabled!')
//      } else {
//          next()
//      }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintenance please come later!')
// })

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abcd123' }, 'thisismynewcourse', { expiresIn: '0 seconds'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

//myFunction()

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word Document'))
//         }

//         cb(undefined, true)

//         // cb(new Error('file must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })
