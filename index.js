const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8000;

app.get('/',(req,res)=>res.send('hello nodejs'));

app.listen(port,()=>console.log(`Example app listening at http://localhot:${port}`));
