const express = require('express');
require('../src/db/conn');
const MensBiodata = require('../src/models/mens');
const router=require('./routers/rout');

const app = express();
const port = 3000;
app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`connection is live at port ${port}`)
});