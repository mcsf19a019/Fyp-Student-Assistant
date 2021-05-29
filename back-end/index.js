const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Clearance = require('./models/Clearance');
const LfPosts = require('./models/LfPosts');
const TsPosts = require('./models/TsPosts');
const TePosts = require('./models/TePosts');
const Notices = require('./models/Notices');
const cors = require('cors');
const app = express();


app.use(express.json()); //converting all data into json which recieves from frontend
app.use(cors());

const dbString = 'mongodb+srv://shoaib:Desperados1@cluster019.s7jlw.mongodb.net/Student-Assistant?retryWrites=true&w=majority';
mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("db is connected");
        app.listen(3001);

    })
    .catch((err) => console.log(err));

// Maham backend Code start//

// Maham backend Code end//

// Shoaib backend Code start//
    // inserting notice in db
app.post('/insertNotice', (req, res) => {
    const dt = new Date();
    const notice = new Notices({
        title: req.body.title,
        content: req.body.body,
        date: dt
    }
    );
    notice.save()
    .then((result) => {
        res.send("Notice Data record updated");
    })
    .catch((err) => {
        console.log(err);
    })
})
  // getting all notices
app.get('/getNotices', (req,res) =>{

    Notices.find({}, (err,result) => {
        if(err)
        console.log(err);
        
        res.send(result);
    })
})
   // getting unique notice from db
app.get('/getNotice/:id', (req,res) =>{
    Notices.findById(req.params.id, (err,result) =>{
        if(err)
        console.log(err);
        else
        res.send(result);
    })
})
   // delete Notice
   app.delete('/deleteNotice/:id', (req, res) => {
    try {
        mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
        Notices.findByIdAndRemove(req.params.id).exec();
        res.send("Notice deleted");
    } catch (err) {
        console.log(err);
    }
});

  // updating Notics
  app.put('/updateNotice', (req, res) => {
    try {
        Notices.findById(req.body.id, (err,updatedNotice) => {
            updatedNotice.title = req.body.title;
            updatedNotice.content = req.body.body;
            updatedNotice.save();
        });
    } catch (err) {
        console.log(err);
    }
});

// Shoaib backend Code end//

// Sehar backend Code start//

// Sehar backend Code end//

// Ameena backend Code start//

// Ameena backend Code end//

// Imran backend Code start//

// Imran backend Code end//