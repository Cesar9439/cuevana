const mediaM = require('../models/mediaM');


exports.addmedia = async (req, res) => {
    const media = new mediaM(req.body);
    await media.save();

    res.status(200).json(media);
};

exports.getAllMedia = async (req, res) => {
    const getMedia = await mediaM.find();
   

    res.status(200).json(getMedia);

};

exports.upMedia = async (req, res) => {
    const Nombre = req.body.Nombre;
    const updatedDate =  req.body;

    const updatedMedia = await mediaM.findOneAndUpdate(
        {Nombre: Nombre}, 
        {$set: updatedDate},
        {new: true}
    );

    res.status(200).json(updatedMedia);
    
};

exports.delMedia = async (req, res) => {
    const Nombre = req.body.Nombre;
    const delMedia = await mediaM.findOneAndDelete(
        {Nombre: Nombre}
    );

    res.status(200).json(delMedia);
};
