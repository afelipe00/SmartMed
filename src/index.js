const express =  require("express")
const bodyParser = require("body-parser")

//settings database
require('./database');

//settings server
const config = require('./server/config')
const app = config(express());

//middlewares
app.use(bodyParser.json())

//routes
const router = require('./routes/router.js')
app.use('/api', router)

//setting listen
app.listen(app.get('PORT'), () => console.log('sever listen on port ' + app.get('PORT')))