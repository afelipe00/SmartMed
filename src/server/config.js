module.exports = app =>{
    
    //settings
    app.set('PORT', process.env.PORT || 5002)

    return app;
}