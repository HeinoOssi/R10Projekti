const controller = require('../controllers/user-controller.js');

module.exports = function(app) {
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Post new data
    app.post('/api/newdata', controller.addNewData);
    // Get all data
    app.get('/api/getdata', controller.getAllData);
    // Get data by id
    app.get('/api/getdata/:id', controller.getDataById);
    // Get data by date
    //app.get('/api/getdata/:date', controller.getDataByDate);

}