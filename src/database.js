const mongoose = require('mongoose')

mongoose.set('useFindAndModify',false);
mongoose.connect('mongodb+srv://Felipe:Felipe2020@cluster0.kskru.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB is conected'))
.catch(err => console.log(err));
