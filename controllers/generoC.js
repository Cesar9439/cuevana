const generoM = require('../models/generoM');
exports.newGenero = async (req, res) => {
    const genero = new generoM(req.body);
    await tipoM.save();

    res.status(201).json(genero);
};

exports.getAllGeneros = async (req, res) => {
    const genero = await generoM.find();

    res.status(200).json(genero);
};

exports.upDataG = async (req, res) => {
    const genero = req.body.Nombre;
    const updatedData = req.body;

    const updateGenero = await generoM.findOneAndUpdate(
        {Nombre: genero},
        {$set: updatedData},
        {new: true}
    );
    
    res.status(200).json(updateGenero);
};

exports.delDataG = async (req, res) => {
    const genero = req.body.Nombre;
    const deletedGenero = await generoM.findOneAndDelete(
        {Nombre: genero}
    );

    res.status(200).json(deletedGenero);
};