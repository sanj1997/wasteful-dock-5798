const express = require('express')
const dbConnect = require('./config/dbConnect')
const cors=require("cors")
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => res.send('hello'))

app.listen(8080, async() => {
    await dbConnect()
    console.log('server started on port http://localhost:8080')
})