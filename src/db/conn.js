const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/demo",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection was successful');
}).catch((e)=>{
    console.log('no connection');
})