const express = require("express");
const cors = require('cors');
const rootRouter = require('./routes/index');
const PORT = 4000;
const app = express();
app.use(cors());
app.use('/api/v1', rootRouter);

app.




app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


