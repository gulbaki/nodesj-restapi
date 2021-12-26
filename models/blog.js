const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create blog Schema & mode
const BlogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required']
    },
    text: {
        type: String,
        required: [true, 'Text field is required']
    },
    author: {
        type: String,
        required: [true, 'Author field is required']
    },
    createdAt: {
        type : Date, 
        default: Date.now
    }

});

const Blog = mongoose.model('blog', BlogSchema);

module.exports = Blog;