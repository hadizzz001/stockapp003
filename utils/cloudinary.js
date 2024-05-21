const cloudinary = require('cloudinary').v2;



cloudinary.config({ 
    cloud_name: 'daywecbjm' , 
    api_key: '892845439384993' , 
    api_secret: 'gYgIogX5qK88gn9CLCpj-_yN8oI'
  });



module.exports = {cloudinary};