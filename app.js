// const express = require('express');

// const app = express()
// require('./createDb')
// // require('./read')
// // require('./deleteCollection')
// // const Insert = require('./insertDocument')
// // const Update = require('./updateDocuments')
// app.get('/',(req,res)=>{
//     res.send('test')
// })
const express = require('express')
require('./createDb')
const app = express();
app.use('/',(req,res)=>{
    res.send('fvgbhnjmk,')
})





app.listen(9001)