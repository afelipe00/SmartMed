const mongoose = require('mongoose');
const {database} = require('./keys');

mongoose.set('useFindAndModify',false);
mongoose.connect(database.URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));
