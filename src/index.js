const express =  require("express")


//settings database
require('./server/database');

//settings server
const config = require('./server/config')
const app = config(express());

//setting listen server
app.listen(app.get('PORT'), () => console.log('sever listen on port ' + app.get('PORT')))