let Ticket = require('../models/ticket');

let Flight = require('../models/flight')


module.exports = {
    new: newTicket,
    create,
    
};




function create(req, res) {
    console.log('entro al create ticket');
    // Ticket.create(req.body, function(err, ticket){
        let newTicket = {
            flight: req.params.id,
            seat: req.body.seat,
            price: req.body.price
        }
        Ticket.create(newTicket, function(err, ticket){
        if (err) res.send(err);
        console.log(req.body)
            res.redirect(`/flights/${req.params.id}`);

        });
}




function newTicket(req, res) {
    res.render('tickets/new', {flightId: req.params.id, title: `Add a Ticket to Flight #${req.params.id}`})
}