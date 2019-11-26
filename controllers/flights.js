let Flight = require('../models/flight');

let Ticket = require('../models/ticket');

module.exports = {
    index: indexFlight,
    new: newFlight,
    show,
    create,
    
};

function indexFlight(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
      });
    };
    
function show(req, res) {
  Flight.findById(req.params.id) 
    .populate('tickets').exec(function(err, flight) {
      Ticket.find(
        {_id: {$nin: flight.tickets}},
        function(err, tickets) {
          console.log(tickets);

        
    res.render('flights/show', {title: 'Flights Detail', flight,tickets})
        }
      )
    });
  };



function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flights'});
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new');
      console.log(flight);
      res.redirect(`/flights/${flight._id}`);
    });
  }