const mongoose = require('mongoose');
const {database} = require('../keys');

mongoose.set('useFindAndModify',false);
mongoose.connect(database.URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// eslint-disable-next-line no-unused-vars
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));
