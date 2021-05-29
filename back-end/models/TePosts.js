const mongoose = require('mongoose');

const TePostsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required : true
    },
    pic:{
        type: String,
        required : true
    },
    status:{
        type: Boolean,
        required: true
    },
    date:{
        type: Date,
        required : true
    }
})

const TePosts = mongoose.model('TePostData',TePostsSchema);
module.exports = TePosts;