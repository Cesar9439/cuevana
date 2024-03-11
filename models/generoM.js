const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
    Nombre: {
        type: String,
    },

    Estado: {
        type: String,
        enum: ['activo', 'inactivo'],
        default: 'Activo'
    },

    fechaCreacion: {
        type: Date,
        default: Date.now

    },
    
    fechaUpdate: {
        type: Date,
        default: Date.now
    },

    descripcion: String
});

module.exports = mongoose.model('generoM', generoSchema);