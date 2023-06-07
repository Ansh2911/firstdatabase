const bodyparser=require('body-parser')
const mongoose = require("mongoose");
const express = require('express');
const app = express();
app.use(bodyparser.json())

const createAuthorController = require("./controllers/createAuthorController")
const {checkUser} = require("./controllers/authorSignin")
const {updateUser} = require("./controllers/update")

mongoose.connect("mongodb+srv://anshul:anshul%40sharma@cluster0.bmyyokm.mongodb.net/books", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




app.use("/create_user",createAuthorController.createAuthor)
app.use("/check_user", checkUser)
app.put("/update_user/:email", updateUser)

app.listen(3000,()=>{
    console.log("Server running");
})