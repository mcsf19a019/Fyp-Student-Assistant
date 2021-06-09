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
                                                                // Student Lost and Found
app.post('/insertLfPosts', (req, res) => {
    const dt = new Date();
    const LfPost = new LfPosts({
        title: req.body.title,
        content: req.body.body,
        pic:req.body.pic,
        date: dt
    }
    );
    LfPost.save()
    .then((result) => {
        res.send("Lost and Found Data record updated");
    })
    .catch((err) => {
        console.log(err);
    })
})

// Student Trading and Sharing
app.post('/insertTsPosts', (req, res) => {
    const dt = new Date();
    const TsPost = new TsPosts({
        title: req.body.title,
        content: req.body.body,
        pic:req.body.pic,
        date: dt
    }
    );
    TsPost.save()
    .then((result) => {
        res.send("Trading and Sharing Data record updated");
    })
    .catch((err) => {
        console.log(err);
    })
})

// Student Trading and Sharing
app.post('/insertTePosts', (req, res) => {
    const dt = new Date();
    const TePost = new TePosts({
        title: req.body.title,
        content: req.body.body,
        pic:req.body.pic,
        date: dt
    }
    );
    TePost.save()
    .then((result) => {
        res.send("Trips and Events Data record updated");
    })
    .catch((err) => {
        console.log(err);
    })
})
                                                                    //Admin Lost and found
        //getting all posts
 app.get('/getLfPosts', (req,res) =>{

  LfPosts.find({status:"false"}, (err,result) => {
  if(err)
    console.log(err);
                
      res.send(result);
     })
  })
    //getting approved posts
app.get('/getSLfPosts', (req,res) =>{
 LfPosts.find({status:"true"}, (err,result) => {
    if(err)
    console.log(err);
                      
    res.send(result);
   })
 })
  //updating status
  app.put("/updateLfposts", async (req, res) => {
    try {
        LfPosts.findById(req.body.id, (err,updatedStatus) => {
            updatedStatus.status = true;
            console.log(updatedStatus.status);
            updatedStatus.save();
            res.send("updateStatus");

        });
    } catch (err) {
        console.log(err);
    }
});
app.delete("/deleteLfposts/:id",async(req,res)=>{
    try {
        mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
        LfPosts.findByIdAndRemove(req.params.id).exec();
        res.send("Post deleted");
    } catch (err) {
        console.log(err);
    }
});
                                                        //Admin Trips and events                        
 app.get('/getTePosts', (req,res) =>{

    TePosts.find({}, (err,result) => {
    if(err)
      console.log(err);
                  
        res.send(result);
       })
    })
      //getting approved posts
  app.get('/getSTePosts', (req,res) =>{
   TePosts.find({status:"true"}, (err,result) => {
      if(err)
      console.log(err);
                        
      res.send(result);
     })
   })
    //updating status
    app.put("/updateTeposts", async (req, res) => {
      try {
          TePosts.findById(req.body.id, (err,updatedStatus) => {
              updatedStatus.status = true;
              updatedStatus.save();
              res.send("updateStatus");
  
          });
      } catch (err) {
          console.log(err);
      }
  });
  app.delete("/deleteTeposts/:id",async(req,res)=>{
      try {
          mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
          TePosts.findByIdAndRemove(req.params.id).exec();
          res.send("Post deleted");
      } catch (err) {
          console.log(err);
      }
  });

                                                                    //admin Trading and sharing

 app.get('/getTsPosts', (req,res) =>{

    TsPosts.find({}, (err,result) => {
    if(err)
      console.log(err);
                  
        res.send(result);
       })
    })
      //getting approved posts
  app.get('/getSTsPosts', (req,res) =>{
   TsPosts.find({status:"true"}, (err,result) => {
      if(err)
      console.log(err);
                        
      res.send(result);
     })
   })
    //updating status
    app.put("/updateTsposts", async (req, res) => {
      try {
          TsPosts.findById(req.body.id, (err,updatedStatus) => {
              updatedStatus.status = true;
              updatedStatus.save();
              res.send("updateStatus");
  
          });
      } catch (err) {
          console.log(err);
      }
  });
  app.delete("/deleteTsposts/:id",async(req,res)=>{
      try {
          mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
          TsPosts.findByIdAndRemove(req.params.id).exec();
          res.send("Post deleted");
      } catch (err) {
          console.log(err);
      }
  });
       
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

app.post("/register",async(req,res)=>
{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const confirmPass=req.body.confirmPass;
    const studentType=req.body.studentType;
    const user=new User ({email:email,name:name,password:password,confirmPassword:confirmPass,userType:studentType});
    try{
        await user.save();
    }catch(err)
    {
        console.log(err);
    }
});


// Sehar backend Code end//

// Ameena backend Code start//

//insert user by admin
app.post("/insertUserByAdmin",async(req,res)=>
{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const userType=req.body.userType;
    const user=new User ({email:email,name:name,password:password,userType:userType});
    try{
        await user.save();
    }catch(err)
    {
        console.log(err);
    }
});

//getting all users
app.get('/getUsers', (req,res) =>{

    User.find({}, (err,result) => {
        if(err)
        console.log(err);
        
        res.send(result);
    })
})

// getting specific user from db
app.get('/getUser/:id', (req,res) =>{
    User.findById(req.params.id, (err,result) =>{
        if(err)
        console.log(err);
        else
        res.send(result);
    })
})

 // delete User
 app.delete('/deleteUser/:id', (req, res) => {
    try {
        mongoose.set('useFindAndModify', false);  // to remove deprecation warnings
        User.findByIdAndRemove(req.params.id).exec();
        res.send("User deleted");
    } catch (err) {
        console.log(err);
    }
});

//Update User
app.put('/updateUser', (req, res) => {
    try {
        User.findById(req.body.id, (err,updatedUser) => {
            updatedUser.name = req.body.name;
            updatedUser.password = req.body.password;
            updatedUser.userType = req.body.userType;
            updatedUser.save();
        });
    } catch (err) {
        console.log(err);
    }
});

// Ameena backend Code end//

// Imran backend Code start//

// Imran backend Code end//