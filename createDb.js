const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/config',(err,db)=>{
     if(err){
         console.log(' not  connected to mongodb')
     }
     db.createCollection('students2',function(err,collection){
         if (err){
            
             console.log('collection not created')
         }
        
           console.log('database connected as well as')
         console.log('collection created')
         db.close()
     

})
})