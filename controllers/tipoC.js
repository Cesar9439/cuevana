const tipoM = require('../models/tipoM'); 
exports.createTipo = async (req, res) => {
    const tipo = new tipoM(req.body);
    await tipo.save();



    res.status(200).json(tipo);  
}

exports.getAllTipo  = async (req, res) => {
    const tipos = await tipoM.find();

    res.status(201).json(tipos);
}

exports.upData = async (req, res) => {
    const tipo = req.body.Nombre;
    const updateData = req.body;
    
    const updateTipo = await tipoM.findOneAndUpdate(
        {Nombre: tipo},
        {$set: updateData},
        
    )
    res.status(201).json(updateTipo);
}

exports.delData = async (req, res) => {
    const Nombre = req.body.Nombre;
    const deletedTipo = await tipoM.findOneAndDelete(
        {Nombre: Nombre }
    )
    res.status(201).json(deletedTipo);
};