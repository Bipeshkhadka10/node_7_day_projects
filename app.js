// can be connected to database and server side rendring use for machine learning or for ai
const express = require('express');
const app = express()


app.get('/',(req,res)=>{
    res.render('home.ejs')        // we can also qrite html inside of res.send as
})
app.get('/blog',(req,res)=>{
    const data={
        name:'bipesh',
        age:20,
        gender:'male'
    }
    res.render('blog.ejs',{data})
})
app.get('/blog/create',(req,res)=>{
    res.render('create.ejs')
})
app.get('/blog/edit',(req,res)=>{
    res.render('edit.ejs')
})

app.listen(3000,()=>{
    console.log("This is nodejs project")
})