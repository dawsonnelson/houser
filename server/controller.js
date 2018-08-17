module.exports = {
    getHouses: (req, res, next) => {
        const db = req.app.get('db');

        db.get_houses()
            .then(resp => res.status(200).send(resp) )
            .catch( err => {
                res.status(500).send({errorMessage: "Something bad"});
            });
    
    },


    
}