const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const multer = require('multer');  
const upload = require("./utils/multer");
const {cloudinary} = require("./utils/cloudinary"); 
var Logindb = require("./server/model/model6");
require('dotenv/config');

const connectDB = require('./server/database/connection')

const app = express();
const route1 = express.Router(); 

dotenv.config({path:'config.env'}) 

 

app.use(morgan('tiny'));


 



connectDB();

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.set("view engine","ejs") 

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use(express.static('uploads'));
  

app.use('/',require('./server/routes/router'))  
var Urldb = require("./server/model/model5");  

app.post('/upload2', upload.single('img') , async (req, res, next)=>{  
    const result = await cloudinary.uploader.upload(req.file.path);  
    const post_details = {
        title: req.body.title,
        image: result.public_id
    }  
    if(!req.body){
        res.status(400).send({message: "Can not be empty!"});
        return;
    }
    const user = new Urldb({
        imgurl: result.url
    })

    user
    .save(user)
    .then(data=>{ 
        res.redirect('/add_url') 

    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    }) 

});
  


 

var port = process.env.PORT || '3000'
app.listen(port, err => {
    if (err)
        throw err
    // console.log(`Server is running on ${process.env.LOCALURL}`)
    console.log(`Server is running on http://localhost:` + port)
})



 




 