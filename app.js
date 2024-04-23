// can be connected to database and server side rendring use for machine learning or for ai
const express = require('express');
const { blogs ,todos} = require('./model/index');
const app = express()
const{multer,storage} = require('./middleware/multerConfig')
const upload = multer({storage : storage})  

require("./model/index")
app.set('view engine','ejs')

app.use(express.json())   // postman use garda used hunxa   
app.use(express.urlencoded({extended:true}))  // form bata aako kuralai bujauxa nodejs ma yesari halnuparxa

app.get('/',(req,res)=>{
    res.render('home.ejs')        // we can also qrite html inside of res.send as
})
app.get('/blog',(req,res)=>{
    res.render('blog.ejs',{data})
})
app.get('/blog/create',(req,res)=>{
    res.render('create.ejs')
})
app.get('/blog/edit',(req,res)=>{
    res.render('editblog.ejs')
})

app.get('/todo',(req,res)=>{
    res.render('todo.ejs')
})

// main function vanda agadi middleware raknuparxa 
// for multiple file we use array instead of single
app.post('/blog',upload.single('image'), async(req,res)=>{
    // console.log(req.body);
    // aba database ma client lea deko data pathinxa yeo bata  as follow
    const {title, subtitle,description} =req.body
    await blogs.create({
        title : title,
        subTitle : subtitle,
        description : description,
        imageUrl : req.file.filename
    })
    res.redirect('/')
})


app.post('/todo',async(req,res)=>{
    const {title,status,description}=req.body
    await todos.create({
        title : title,
        status : status,
        description : description
    })

    res.redirect('/')
})


app.listen(3000,()=>{
    console.log("This is nodejs project")
})