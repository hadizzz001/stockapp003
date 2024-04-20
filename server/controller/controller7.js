var Deliverydb = require("../model/model7");

exports.create = (req, res)=>{
    if(!req.body){ 
        res.status(400).send({message: "Can not be empty!"});
        return;
    }
    
    const user = new Deliverydb({
        Dname: req.body.Dname,
        Did: req.body.Did,
        Damount: req.body.Damount
    })

    user
    .save(user)
    .then(data=>{
        res.send(data) 
    })
    .catch(err =>{ 
        res.status(500).send({
            message: err.message || "Some error"
        })
    })
}

exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        Deliverydb.findById(id)
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
    Deliverydb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error Occurred while retriving data"})
    })
}
}




 
exports.find2 = (req, res)=>{ 
    Deliverydb.find().distinct('Dname', function(error, user) {
    res.send(user); 
   }); 
}




exports.find3 = (req, res)=>{ 

    const id = req.params.id;
    Deliverydb.find({ dname: id}, function (err, docs) {
        res.send(docs);
    });  

 
}


exports.find4 = (req, res)=>{  
    const text = req.params.name;    
    Deliverydb.find({Dname: text}).then(data=>{ 
            res.send(data);   
    }) 
}



exports.find5 = (req, res)=>{  
    const text = req.params.oid;    
    Deliverydb.remove({Did: text}).then(data=>{ 
        res.send({
            message:"User was deleted successfully"
        })
    }) 
}



exports.last = (req, res)=>{  
    Deliverydb.find().sort({Did:-1}).then(data=>{ 
            res.send(data);
    }) 
}








exports.update = (req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }
    const id = req.params.id;
    Deliverydb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
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



exports.delete = (req, res)=>{
    const id = req.params.id;
    Deliverydb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot delete with id ${id} ,maybe id is wrong`})
        }
        else{
            res.send({
                message:"User was deleted successfully"
            })
        }

    })
    .catch(err=>{
        res.status(500).send({
            message:`Could not delete user with id ${id}`
        });
    });
}


 
 


