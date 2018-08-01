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

app.get('/blog', (req, res) => {
    console.log("hello");
    
    Blog.find({}, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

app.post("/new", (req, res) => {
    console.log("inside");
    console.log(req.body.data);
    
    
    Blog(req.body.data).save((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

app.put("/blogs/:id", (req, res) => {
    // let checkValue = Todo.aggregate({ $match: req.params.id }, {
    //     project: { check: 1 }
    // });
    // console.log(checkValue);
    let value = req.body.data == true ? true : false;
    Todo.update({ id: req.params.id }, { $set: { check: value } }, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

app.delete("/blogs/:id", (req, res) => {e
    Blog.find({ id: req.params.id }).remove((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});


app.listen(3000);