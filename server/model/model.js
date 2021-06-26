const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let movieSchema = new Schema({
    name: {
        type: String
    },
    language: {
        type: String
    },
    date : {
        type: Date
    }
}, {
        collection: 'movies'
    })

module.exports = mongoose.model('Movie', movieSchema)