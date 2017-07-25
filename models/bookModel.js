var mongoose = require ('mongoose')
const schema = mongoose.Schema();

const bookModel = new schema({
   title: {
       type: String
   },
    author: {type: String},
    genre: {type: String },
    read: {type: Boolean, default:false}

});

module.exports = mongoose.model('Book', bookModel)