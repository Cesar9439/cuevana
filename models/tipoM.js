// Requerimos la libreria
const mongoose = require('mongoose');

// Definimos el esquema del modelo tipo
const tipoSchema = new mongoose.Schema({
    // Nombre del tipo
    Nombre: {
        type: String,
    },
    // Fecha de creación del tipo
    FechaCreacion: {
        type: Number,
        default: Number.now
    },
    // Fecha de ultima actualización del tipo
    FechaActualizacion: {
        type: Number,
        default: Number.now
    },
    Descripcion: String
});


// Exportamos el modelo

module.exports = mongoose.model('tipoM', tipoSchema);