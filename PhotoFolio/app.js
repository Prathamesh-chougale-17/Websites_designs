const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection

// // Handle MongoDB connection error
// db.on('error', () => {
//     console.log('mongodb error!')
// }
// )

// // Handle MongoDB connection success
// db.once('open', () => {
//     console.log('mongodb connected!')
// }
// )

// Set template engine
const handlebars = require('express3-handlebars').create()
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')


app.use("/static", express.static("static"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set routes
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/contact', (req, res) => {
    res.render('contact')
});
app.get('/services', (req, res) => {
    res.render('services')
});
app.get('/about', (req, res) => {
    res.render('about')
});

// Start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on localhost:${port}`)
});




