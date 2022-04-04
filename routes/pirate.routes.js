// Import Pirate Controller
const Pirate = require('../controllers/pirate.controller');
console.log(Pirate);


module.exports = (app) => {
    // Test Route
    app.get('/api/pirates/hello', (req, res) => {
        res.json({message: "hi"})
    })

    // CRUD Pirate Routes
    app.get('/api/pirates', Pirate.findAllPirates);
    app.get('/api/pirates/:id', Pirate.findOnePirate);
    app.put('/api/pirates/edit/:id', Pirate.updatePirate);
    app.post('/api/pirates/new', Pirate.createNewPirate);
    app.delete('/api/pirates/delete/:id', Pirate.deletePirate);
}