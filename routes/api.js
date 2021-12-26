const express = require("express");
const router = express.Router();
const Blog = require('../models/blog')

// get a list of blog from the db
router.get("/blog", (req, res, next) => {
  Blog.find({}).then((blog) => {
        res.send(blog);
  })
});
// add a new blog to the db
router.post("/blog", (req, res, next) => {
  Blog.create(req.body).then((blog) => {
    res.send(blog);
  }).catch(next);
  
});
// update a blog in the db
router.put("/blog/:id", (req, res, next) => {
    Blog.findByIdAndUpdate({_id: req.params.id}, req.body).then((blog) => {
        Blog.findOne({_id: req.params.id}).then((blog) => {
            res.send(blog);
        });
      

    })
});
//delete a blog from the db
router.delete("/blog/:id", (req, res, next) => {
    Blog.findByIdAndRemove({_id: req.params.id}).then((blog) => {
        res.send(blog);
    });
    
});
 

module.exports = router;
