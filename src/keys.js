module.exports = {
    database: {
        URI: 'mongodb+srv://Felipe:Felipe2020@cluster0.kskru.mongodb.net/db1?retryWrites=true&w=majority'
    },
    twitter: {
        Psssecret: '',
        idsecret: ''
    },
    TOKEN_SECRET: {
        code: process.env.TOKEN_SECRET ||  "SmartmedSecret"
    } 
}