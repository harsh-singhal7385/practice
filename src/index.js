const express = require('express')
const app = express()
const PORT = 5000
const SERVER = "localhost"
// const mongoose_db = require('mongoose')
const path = require('path')
const router = require('../routes/direct_route.js')
const bodyParser = require('body-parser')
// app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use('/',router)

app.set('view engine','ejs')
app.set("views",path.join(__dirname,'..','templates'))


app.use("/static",express.static(path.join(__dirname,'..','public')))

// mongoose_db.connect('mongodb://localhost:27017/temp',{ 
//     useNewUrlParser : true,
//     useUnifiedTopology : true
//     }).then((res)=>{
//         console.log("connection successful")
//         // createDocument()
//         // readDocument()
//         // updateDocument()
//         // deleteDocument()
//     }).catch((err)=>{
//         console.log(err)
//     })

// if(mongoose_db.connection){
//     console.log("success")
// }else{
//     console.log("failure")
// }
   
const obj =
    {
        user_name : "ccc",
        user_age : 50,
        user_location : "US",
        user_date :  Date.now()
    }
// const schemaDemo = new mongoose.Schema({
//         name : String,
//         age : Number,
//         location : String,
//         date : Date

//     })

// const Demo = mongoose.model('Demo',schemaDemo)

const createDocument = () =>{
   

    console.log("inside create document ")
    const obj1 = {
        name : "broww",
        age : 37,
        location : "us",
        date : Date.now() 
    }

    Demo.create(obj1)

    const obj2 = {
        name : "come",
        age : 30,
        location : "india",
        date : Date.now() 
    }

    const document = new Demo(obj2)
    document.save()


}

const updateDocument = async () =>{
    // await Demo.update({name:"bruuh"},{$set:{name:"kfc",age:72,date: Date.now()}})
    console.log(await Demo.updateOne({name:"mcdonalds"},{$set:{name:"kfc",age:32,date: Date.now()}}))
    await Demo.updateMany({age:{$lt:40}},{$set:{age:45,date: Date.now()}})
}

const readDocument = async () =>{
    console.log("inside read / find / query document ")

    console.log(await Demo.find().select({name:1}),'\n')
    console.log(await Demo.find({name:"abc"}),'\n')
    console.log(await Demo.find({name:"haha"}),'\n')
    console.log(await Demo.find({age:{$lt:40}}),'\n')
    console.log(await Demo.find({age:{$gt:20}}),'\n')
    console.log(await Demo.find({location : /US/i}),'\n')

} 

const deleteDocument = async () =>{
    console.log(await Demo.deleteMany({location : "us"}))
}

app.listen(PORT,SERVER,(req,res)=>{
    console.log(`server running at port no : ${PORT}`)
}) 

 