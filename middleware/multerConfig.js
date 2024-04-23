const multer = require('multer')


//diskstorage lea chai frontend bata aako file lai ka rakene varena folder dine garxa
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./storage')  // cb(err,success) success vaye toe succes vanne folder ma gayera basxa
    },
    filename : function(req,file,cb){
        cb(null,Date.now() + '-' +file.originalname)
    }
})


module.exports={
    multer,
    storage
}