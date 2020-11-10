const express = require('express');
const router = express.Router();
const BusModel = require('../model/Bus')

router
    .get('/reserved-seats', async (req, res, next) => {
        let busNumber = 'MP36 G1212'
        let result = await BusModel
                     .findOne({ busNumber })
                     .select('reservation')
        res.json({result})             
    })
    .post('/reserve', async (req, res, next) => {
        const seats = req.body
        const result = await BusModel.updateOne({ busNumber: 'MP36 G1212' }, {
            $push: { 'reservation.seats': seats }
        })
        res.json({ message: 'reserved', result })
    });

module.exports = router;