const express =  require("express")
const app = express()
const bodyParser = require("body-parser")


const PORT =  process.env.PORT || 5002;


app.use(bodyParser.json())

const router = require('./router.js')
app.use('/api', router)
app.listen(PORT, () => console.log('sever listen on port' + PORT))