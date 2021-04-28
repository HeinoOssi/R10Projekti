const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const apiroutes = require("./routes");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/api/', apiroutes);


app.listen(process.env.PORT || '3000'), () => {
    console.log('Express server listening on port ' + port);

}