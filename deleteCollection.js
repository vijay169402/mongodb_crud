const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin',(err,db)=>{
    if(err) throw err;
    db.collection('students').drop(function(err,result){
        if(err) throw err;

        console.log('collection deleted')



    })
})
