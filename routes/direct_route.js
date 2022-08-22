const express = require('express')
const router  = express.Router()
const router_api = require('./indirect_route.js')
const router_api_2 = require('./indirect_route_2.js')


router.get('/',(req,res)=>{
    console.log("hi inside  home")
    res.render('../templates/index')
})

router.get('/create',(req,res)=>{
    console.log("inside create form option - get ")
    res.render('../templates/create')
})

router.post('/create',(req,res)=>{
    console.log("inside create form option - post")
    if(req.method == "POST"){
        let body = ""
        // console.log(req.body.data)
        //  req.on('data',(data)=>{
        //     body = body + data
        //     console.log(body)
        // })
        console.log(req.body)

        // console.log(body)
        // console.log(req.body.data)
        console.log(req.body['fname'])
        console.log(req.body['lname'])
        console.log(req.body['email'])
        console.log(req.body['number'])
        console.log(req.body['password'])
        console.log(req.body['cpassword'])
        // res.status(200)
        // res.redirect('/')
        res.send("successfull form in nodejs...")
    }
    // res.render('../templates/create')
})
router.get('/search',(req,res)=>{
    console.log("inside search form option - get ")
    res.render('../templates/search')
})

router.post('/search',(req,res)=>{
    console.log("inside search form option")
    res.render('../templates/search')
})

router.get('/update',(req,res)=>{
    console.log("inside update form option - get ")
    res.render('../templates/update')
})

router.post('/update',(req,res)=>{
    console.log("inside update form option")
    res.render('../templates/update')
})

router.get('/delete',(req,res)=>{
    console.log("inside delete form option - get ")
    res.render('../templates/delete')
})

router.post('/delete',(req,res)=>{
    console.log("inside delete form option")
    res.render('../templates/delete')
})


router.use('/home',router_api_2)
router.use('/api',router_api)

module.exports = router