var Logindb = require("../model/model6");
var macaddress = require('macaddress'); 
 
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        Logindb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Not find this id= ${id}`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:`error retreiving data with id = ${id}`})
        })
    }else{ 
    Logindb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error Occurred while retriving data"})
    })
}
}

exports.update = (req, res)=>{
 
    const id = "63f2585545933bb8d5c0b8f9";
    Logindb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(404).send({message:`Can not update user with ${id}, maybe user not found`})

        }
        else{
            res.send(data)
        }
    })
.catch(err=>{
    res.status(500).send({message:"Error update user"})
})
}

 


exports.mac = (req, res)=>{
    macaddress.one(function (err, mac) {
        res.send(mac);
      });
    
}
 





exports.find1 = (req, res)=>{ 
    if(req.params.id){
        const id = req.params.id;
        Logindb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Not find this id= ${id}`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:`error retreiving data with id = ${id}`})
        })
    }else{ 
    Logindb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error Occurred while retriving data"})
    })
}
}


