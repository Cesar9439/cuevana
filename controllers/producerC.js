const producerM = require('../models/producerM');

exports.addProductora = async (req, res) => {
    const producer = new producerM(req.body);
    await producer.save();

    res.status(201).json(producer);
};

exports.getAllProducers = async (req, res) => {
    const productoras = await producerM.find();

    res.status(200).json(productoras);

};

exports.upProducers = async (req, res) => {
    const nameProductora = req.body.Nombre;
    const upProductora = req.body;

    const updateProducer = await producerM.findOneAndUpdate(
        {Nombre: nameProductora},
        {$set: updateProducer},
        {new: true}

    );

    res.status(200).json(upProductora);
};

exports.delProducers = async (req, res) => {
    const Name = req.body.Nombre;
    const deletedProducer = await producerM.findOneAndDelete(
        {Nombre: Name},
        {new: true}
    );
    res.status(200).json(deletedProducer);
};