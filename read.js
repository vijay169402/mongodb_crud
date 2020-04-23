const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/config',(err,db)=>{
    const docs1 = {
         name:'vijay',
         roll:1694,
         dob:'10/10/1996'
    }
    const docs2 ={$set:{
         name:'vijay',
         roll:169402,
         dob:'10/10/1997'
    }}
     if(err){console.Console.log('error')}
     db.collection('students1').findOne({},function(err,result){
          if (err){console.log('error is there') }
          else{
               if(result===null){
                    db.collection('students1').insertOne(docs1,function(err,res){
                         if (err){console.log('error is there 2') }
                         console.log('collection created')
                    })
               }
               db.collection('students1').updateOne(docs1,docs2,function(err,result){
                    if (err){console.log('error is there in updating') }
                    console.log('collection updated')

               })
               // console.log('collection not created')
          }
     })
})



