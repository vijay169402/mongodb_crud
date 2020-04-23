const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin',(err,db)=>{
    const myQuery = {roll:1678}
    const newQuery = {  $set:{
        name:'vijay ',
        roll: 1694

     } }
    if(err) throw err;
    db.collection('students3').updateOne(myQuery,newQuery,function(err,result){
        if(err) {
            console.log('error in update')
        };
        
        console.log('collection updated')



    })
})
