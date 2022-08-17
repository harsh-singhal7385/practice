const express = require('express')
const router_api_2  = express.Router()

router_api_2.get('/',(req,res)=>{
    console.log("hi inside HOME home")
    res.send('hi inside HOME home')
})

router_api_2.get('/about',(req,res)=>{
    console.log("hi inside HOME about")
    res.send('hi inside HOME about')

})

router_api_2.get('/contact',(req,res)=>{
    console.log("hi inside HOME contact")
    res.send('hi inside HOME contact')

})

module.exports = router_api_2