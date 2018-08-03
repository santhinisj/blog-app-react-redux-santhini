/* jshint esversion:6 */
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.resolve('build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(
    'mongodb://test:test123@ds117495.mlab.com:17495/blog-applcn',{ useNewUrlParser: true }
)

let blogSchema = new mongoose.Schema({
    id: String,
    title: String,
    message: String
})

let Blog = mongoose.model('Blog', blogSchema);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))

})

app.get('/blog', (req, res) => { ///api/blogs
    // console.log("hello");
    Blog.find({}, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.post("/new", (req, res) => { // POST /api/blogs
    console.log("Hitting adding new api.");
    // console.log(req.body.data);
    Blog(req.body.data).save((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

app.put("/blogs/:id", (req, res) => { // /api/blogs/:id
//    console.log(req.body.data);
   Blog.update({id:req.params.id},{$set:{title:req.body.data.newTitle,message:req.body.data.newMessage}},(err, data) => {
        if (err) throw err;
        res.json(data);
    });
});
app.get("/blogs/:id", (req, res) => {
    console.log("Inside get blogs/:id");
    console.log(req.params.id);
    Blog.find({ id: req.params.id },(err, data) => {
        console.log(data);
        if (err) throw err;
        res.json(data);
    });
});

app.delete("/blog/:id", (req, res) => {
    console.log(req.params.id);
    Blog.find({ id: req.params.id }).remove((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});


app.listen(3000);