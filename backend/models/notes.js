const mongoose=require('mongoose');

const notesschema=new Schema ({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true,
    },
    tag:{
        type: String,
        default: general
    },
    date:{
        type: Date,
        default: Date.now
    },
}) 

module.exports= mongoose.model('user',notesschema);