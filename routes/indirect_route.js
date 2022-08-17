const express = require('express')
const router_api  = express.Router()

router_api.get('/',(req,res)=>{
    console.log("hi inside api home")
    res.send('hi inside api home')
})

router_api.get('/about',(req,res)=>{
    console.log("hi inside api about")
    res.send('hi inside api about')

})

router_api.get('/contact',(req,res)=>{
    console.log("hi inside api contact")
    res.send('hi inside api contact')

})

module.exports = router_api