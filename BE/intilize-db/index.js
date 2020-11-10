const mongoose = require('mongoose');
const Bus = require('../model/Bus')

mongoose.connect('mongodb+srv://Adarsh:adarsh@1998@cluster0-0yqt4.mongodb.net/booking-system?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


async function insertNewBus(busNumber, busType, totalSeats,from, to, dep, arr, fare) {
    const bus = new Bus({
        busNumber,
        busType,
        totalSeats,
        from,
        to,
        dep,
        arr,
        fare
    })
    const result = await bus.save()
    console.log(result)
}

insertNewBus('MP36 G1212 ', 'VOLVO Multi Axle', 30,'BHOPAL', 'INDORE', new Date(), new Date(), 680)

// // async function insertNewService(busNumber, from, to, dep, arr, fare) {
// //     const bus = await Bus.findOne({ busNumber })
// //     bus.service = {
// //         from,
// //         to,
// //         dep,
// //         arr,
// //         fare
// //     }
// //     const result = await bus.save()
// //     console.log(result)
// // }

// // insertNewService('KA12 G1313', 'BENGALORE', 'CHENNAI', new Date(), new Date(), 680)



// // async function searchServices(from, to, travelDate) {
// //     let result = await Bus.find({ 'service.from': from, 'service.to': to})
// //     console.log(result)
// // }

// //searchServices('BENGALORE','CHENNAI',new Date())