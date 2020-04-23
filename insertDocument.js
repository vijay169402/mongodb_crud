const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin',(err,db)=>{
    const  docs1 =  {
            name:'vijay',
            roll: 1694,
            DOB: "10/06/1995"
        }
    if(err) throw err;
    db.collection('students3').insertOne(docs1,function(err,result){

        if(err)  throw err;
        console.log('data',result)

       
    })
})
