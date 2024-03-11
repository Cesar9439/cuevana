const directorM = require('../models/directorM');


exports.addDirector = async (req, res) => {
    const director = new directorM(req.body);
    await director.save();
    
    res.status(201).json(director);
};


exports.getAllDirectors = async (req, res) => {
    const directors = await directorM.find();

    res.status(201).json(directors);
};

exports.upDirectors = async (req, res) => {
    const Nombre = req.body.Nombre;
    const updatedData = req.body;
    const updatedDirector = await directorM.findOneAndUpdate(
        {Nombre: Nombre},
        {$set: updatedData},
        {new: true}
    );
    res.status(201).json(updatedDirector);

};

exports.delDirector = async(req, res) => {
    const Nombre = req.body.Nombre;
    const deletedNombre = await directorM.findOneAndDelete(
       {Nombre: Nombre} 
    );
    res.status(201).json(deletedNombre);

};