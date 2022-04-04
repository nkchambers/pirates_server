// Execute CRUD functions from here >>> will be executed based on routes

// IMPORT MODEL >>> controller to use when performing CRUD functions
const Pirate = require('../models/pirate');



// ------------------------- CRUD Functions ------------------------ 
// >>> export functions with module.exports to send as object
// Keys will be name of function : Values will be function itself

module.exports = {
    
    // READ ALL PIRATES
    findAllPirates : (req, res) => {
        // same as db.pirates.find()
        Pirate.find()
        // IMPORTANT - what we return here is what we receive in React!
            .then(allPirates => res.json({ pirates: allPirates, 
            message: 'success' }))
            .catch(err => res.json({ error: err,  
            message: 'Something went wrong' }))
    },


    // READ ONE PIRATE
    findOnePirate : (req, res) => {
        console.log(req.params);
        Pirate.findById(req.params.id)      
            .then(pirate => res.json({ pirate, 
            message: 'success' }))
            .catch(err => res.json({ error: err,  
            message: 'Something went wrong'}))
    },


    // CREATE NEW PIRATE
    createNewPirate : (req, res) => {
        console.log(req.body);
        
        Pirate.create(req.body)
            .then(newPirate => res.json ({ newPirate, 
                message: 'success' }))
            .catch(err => {
                console.log('SERVER ERR -> Write to DB / CREATE');
                
                // Platform
                //res.status(400).json(err)
                
                // Convention 
                res.status(400).json({ error: err, 
                message: 'error res' })
            })
    },


    // UPDATE PIRATE
    updatePirate : (req, res) => {
        console.log(req.params);
        console.log(req.body);
        Pirate.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then( (updatedPirate) => { 
                res.json({ updatedPirate,
                message: 'success' })})
            .catch(err => res.json({ error: err,
                message: 'error res' }))
    },


    // DELETE PIRATE
    deletePirate : (req, res) => {
        Pirate.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({ error: err, 
            message: 'error res' }))
    }
}