const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
        unique: true
    },

    estado: {
        type: String,
        enum: ['activo', 'inactivo'],
        default: 'Activo'
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now
    },

    slogan: String,

    descripcion: String
});

module.exports = mongoose.model('producerM', producerSchema);