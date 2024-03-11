const mongoose = require('mongoose'); 

const mediaSchema = new mongoose.Schema({
    Tittle: {
        type: String,
    },

    Sinopsis: {
        type: String,
    },

    Link: {
        type: String,
    },

    ImageFront: {
        type: String,
    },

    premierYear: {
        type: Number,
    },

    genderMajor: {
        type: String,
        ref: 'Genre',
    },

    directorMajor: {
        type: String,
        ref: 'Director',
    },

    producer: {
        type: String,
        ref: 'Productora',
    },

    Type: {
        type: String,
        ref: 'Tipo',
    },

    createIn: {
        type: Date,
        default: Date.now
    },

    updateIn: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('mediaM', mediaSchema);