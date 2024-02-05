const express = require("express");
const PORT = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');
const rootRouter = require('./routes/index');


const app = express();

app.use(cors());
app.use(express.json());




app.use('/api/v1', rootRouter);





app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


