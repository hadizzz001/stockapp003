const express = require('express');
const route = express.Router() 

const services = require('../services/render');
const controller = require('../controller/controller');
const controller2 = require('../controller/controller2'); 
const controller4 = require('../controller/controller4'); 
const controller5 = require('../controller/controller5');  
const controller6 = require('../controller/controller6');  
const controller7 = require('../controller/controller7');  






/**
 * @description Root Route
 * @method GET/
 */
route.get('/',services.homeRoutes)
 //API
route.get('/api/mac',controller6.mac);



/**
 * @description add item
 * @method GET/add_item
 */
 route.get('/add_item',services.add_item)


/**
 * @description update item
 * @method GET/update_item
 */
 route.get('/update_item',services.update_item)
 route.get('/index1',services.searchRoutes)

 //API
 route.post('/api/items',controller2.create);
 route.get('/api/items',controller2.find);
 route.get('/api/items/:id',controller2.find1);
 route.get('/api/items2',controller2.find2);   
 route.put('/api/items/:id',controller2.update); 
 route.delete('/api/items/:id',controller2.delete);
 







 /**
 * @description Root Route2
 * @method GET/
 */
route.get('/order',services.homeRoutes2)
route.get('/order1',services.searchRoutes2)

/**
 * @description add user
 * @method GET/add_user
 */
 route.get('/add_user',services.add_user)


/**
 * @description update user
 * @method GET/update_user
 */
 route.get('/update_user',services.update_user1)
 

 //API
 route.post('/api/users',controller.create); 
 route.get('/api/users',controller.find);
 route.get('/api/userss',controller.find2);
 route.get('/api/users2',controller.find4);
 route.get('/api/total',controller.find6);
 route.get('/api/oid/:oid',controller.find5);
 route.get('/api/userdata/:id',controller.find3); 
 route.put('/api/users/:id',controller.update); 
 route.delete('/api/users/:id',controller.delete);
 





 /**
 * @description Root Route4
 * @method GET/
 */
  route.get('/upload2',services.homeRoutes4) 

//  API
route.get('/api/upload2', controller4.find); 
 






/**
 * @description add url
 * @method GET/add_url
 */
 route.get('/add_url',services.add_url) 

 //API
 route.post('/api/urls',controller5.create);
 route.get('/api/urls',controller5.find);
 









/**
 * @description add url
 * @method GET/test
 */
route.get('/auth',services.homeRoutes6) 

//API 
route.get('/api/login',controller6.find);
route.get('/api/mac',controller6.mac);
route.put('/api/login/:id',controller6.update);
route.get('/api/login/:id',controller6.find1); 







/**
 * @description delivery
 * @method GET/delivery
 */
route.get('/delivery',services.homeRoutes7); 
route.get('/update_delivery',services.update_delivery)

//API 
route.get('/api/num',controller7.last);
route.get('/api/names',controller7.find2);
route.get('/api/delivery',controller7.find);
route.get('/api/selected/:name',controller7.find4); 
route.delete('/api/did/:oid',controller7.find5); 
route.post('/api/delivery',controller7.create); 
route.put('/api/delivery/:id',controller7.update); 
route.delete('/api/delivery/:id',controller7.delete);










 
 










 /**
 * @description Root test
 * @method GET/
 */
 route.get('/test',services.test) 

 

 

module.exports=route
















 

