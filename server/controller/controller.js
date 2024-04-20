var Userdb = require("../model/model");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Can not be empty!" });
        return;
    }
    const user = new Userdb({
        oid: req.body.oid,
        clientName: req.body.clientName,
        item: req.body.item,
        itm_id: req.body.itm_id,
        clientPhone: req.body.clientPhone,
        clientAddress: req.body.clientAddress,
        qty: req.body.qty,
        price: req.body.price,
        total: req.body.total,
        odate: req.body.odate
    })

    user
        .save(user)
        .then(data => {
            res.send(data)
            // res.redirect('/order')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error"
            })
        })
}

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `Not find this id= ${id}` })
                }
                else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: `error retreiving data with id = ${id}` })
            })
    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving data" })
            })
    }
}





exports.find2 = (req, res) => {
    Userdb.find().distinct('clientPhone', function (error, user) {
        res.send(user);

    });
}




exports.find3 = (req, res) => {

    const id = req.params.id;
    Userdb.find({ clientPhone: id }, function (err, docs) {
        res.send(docs);
    });


}








exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Can not update user with ${id}, maybe user not found` })

            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user" })
        })
}



exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete with id ${id} ,maybe id is wrong` })
            }
            else {
                res.send({
                    message: "User was deleted successfully"
                })
            }

        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete user with id ${id}`
            });
        });
}





exports.find4 = (req, res) => {
    const text = req.query.name;
    Userdb.find({ clientPhone: new RegExp('.*' + text) }).then(data => {
        res.send(data);
    })
}




exports.find5 = (req, res) => {
    const text = req.params.oid;
    Userdb.find({ oid: text }).count()
        .then(data => {
            res.send('' + data)
            // console.log(''+data);
            // console.log((data).toString());
            // res.status(200).send((data).toString());

        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete user with err ${err}`
            });
        });
}





exports.find6 = (req, res) => {
    Userdb.aggregate([{ $group: { _id: null, sum_val: { $sum: "$total" } } }]).then(data => {
        res.send('' + parseFloat(data[0].sum_val).toFixed(2));
    })
        .catch(err => {
            res.send('' + parseFloat(0).toFixed(2));
        });
}

