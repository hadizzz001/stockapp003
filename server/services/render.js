
const axios = require('axios');
 


exports.homeRoutes2 = (req,res) =>{
    const url1 = `${process.env.LOCALURL}/api/users`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    axios.all([
        axios.get(url1),
        axios.get(url2),
        axios.get(url3)
    ])
    .then(axios.spread((data1, data2, data3 ) => { 
        res.render("order",{users:data1.data , login: data2.data , mac: data3.data }) 
    }));   
} 


exports.searchRoutes2 = (req,res) =>{
    const url1 = `${process.env.LOCALURL}/api/users2`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    axios.all([
        axios.get(url1,{params:{name:req.query.name}}),
        axios.get(url2),
        axios.get(url3)
    ])
    .then(axios.spread((data1, data2, data3) => { 
        res.render("order1",{users:data1.data , login: data2.data , mac: data3.data }) 
    })); 
}





exports.add_user = (req,res) =>{ 
    const url1 = `${process.env.LOCALURL}/api/items`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    const url4 = `${process.env.LOCALURL}/api/userss`;
    axios.all([
        axios.get(url1),
        axios.get(url2),
        axios.get(url3),
        axios.get(url4)
    ])
    .then(axios.spread((data1, data2, data3, data4) => { 
        res.render("add_user",{items:data1.data , login: data2.data , mac: data3.data, users: data4.data }) 
    }));  
}
 


exports.update_user = (req,res)=> {  
    const url1 = `${process.env.LOCALURL}/api/users`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    axios.all([
        axios.get(url1,{params:{id:req.query.id}}),
        axios.get(url2),
        axios.get(url3)
    ])
    .then(axios.spread((data1, data2, data3) => { 
        res.render("update_user",{user:data1.data , login: data2.data , mac: data3.data }) 
    })); 
     
}

exports.update_user1 = (req,res)=> {
    const url1 = `${process.env.LOCALURL}/api/users`;
    const url2 = `${process.env.LOCALURL}/api/items`;
    const url3 = `${process.env.LOCALURL}/api/login`;
    const url4 = `${process.env.LOCALURL}/api/mac`;
    axios.all([
        axios.get(url1,{params:{id:req.query.id}}),
        axios.get(url2),
        axios.get(url3),
        axios.get(url4)
    ])
    .then(axios.spread((data1, data2 , data3 , data4) => { 
        res.render("update_user",{user:data1.data , items: data2.data, login: data3.data, mac: data4.data }) 
    })); 
     
}
 











exports.homeRoutes = (req,res) =>{
    const url1 = `${process.env.LOCALURL}/api/items`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    const url4 = `${process.env.LOCALURL}/api/total`;
    axios.all([
        axios.get(url1),
        axios.get(url2),
        axios.get(url3),
        axios.get(url4)
    ])
    .then(axios.spread((data1, data2, data3 , data4) => { 
        res.render("index", {items:data1.data , login: data2.data , mac: data3.data , total: data4.data }) 
    })); 
}

 
 

exports.add_item = (req,res)=> {
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    axios.all([ 
        axios.get(url2),
        axios.get(url3)
    ])
    .then(axios.spread((data2, data3) => { 
        res.render("add_item",{login: data2.data , mac: data3.data }) 
    })); 
}
 
 

exports.update_item = (req,res)=> {  
    const url1 = `${process.env.LOCALURL}/api/items`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    axios.all([
        axios.get(url1,{params:{id:req.query.id}}),
        axios.get(url2),
        axios.get(url3)
    ])
    .then(axios.spread((data1, data2, data3) => { 
        res.render("update_item",{item:data1.data , login: data2.data , mac: data3.data }) 
    })); 
     
}
 


exports.homeRoutes4 = (req,res) =>{
    const url1 = `${process.env.LOCALURL}/api/upload2`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    axios.all([
        axios.get(url1),
        axios.get(url2),
        axios.get(url3)
    ])
    .then(axios.spread((data1, data2, data3) => { 
        res.render("upload2",{firstName:data1.data , login: data2.data , mac: data3.data }) 
    })); 
}
 









exports.add_url = (req,res) =>{
    const url1 = `${process.env.LOCALURL}/api/login`;
    const url2 = `${process.env.LOCALURL}/api/mac`;
    const url3 = `${process.env.LOCALURL}/api/urls`;
    axios.all([
        axios.get(url1),
        axios.get(url2),
        axios.get(url3)
    ])
    .then(axios.spread((data1,data2,data3) => { 
        res.render("add_url",{login: data1.data , mac: data2.data, imgurl: data3.data }) 
    })); 
}


 
exports.add_url1 = (req,res)=> {
    res.render('add_url1');
}


exports.test = (req,res)=> {
    res.render('test');
}





exports.homeRoutes6 = (req,res) =>{ 
    const url1 = `${process.env.LOCALURL}/api/login`;
    const url2 = `${process.env.LOCALURL}/api/mac`;
    axios.all([
        axios.get(url1),
        axios.get(url2)
    ])
    .then(axios.spread((data1, data2) => { 
        res.render("auth",{login: data1.data , mac: data2.data }) 
    }));
}






exports.homeRoutes7 = (req,res) =>{
    const url1 = `${process.env.LOCALURL}/api/delivery`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    const url4 = `${process.env.LOCALURL}/api/names`;
    axios.all([
        axios.get(url1),
        axios.get(url2),
        axios.get(url3),
        axios.get(url4)
    ])
    .then(axios.spread((data1, data2, data3 , data4) => { 
        res.render("delivery",{delivery:data1.data , login: data2.data , mac: data3.data , names : data4.data }) 
    })); 
}


exports.update_delivery = (req,res)=> {  
    const url1 = `${process.env.LOCALURL}/api/delivery`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    axios.all([
        axios.get(url1,{params:{id:req.query.id}}),
        axios.get(url2),
        axios.get(url3)
    ])
    .then(axios.spread((data1, data2, data3) => { 
        res.render("update_delivery",{delivery:data1.data , login: data2.data , mac: data3.data }) 
    })); 
     
}










exports.searchRoutes = (req,res) =>{
    const url1 = `${process.env.LOCALURL}/api/items2`;
    const url2 = `${process.env.LOCALURL}/api/login`;
    const url3 = `${process.env.LOCALURL}/api/mac`;
    axios.all([
        axios.get(url1,{params:{name:req.query.name}}),
        axios.get(url2),
        axios.get(url3)
    ])
    .then(axios.spread((data1, data2, data3) => { 
        res.render("index1",{items:data1.data , login: data2.data , mac: data3.data }) 
    })); 
}

 
 