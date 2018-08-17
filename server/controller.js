let houses = [];

module.exports = {
    getHouses: (req, res, next) => {
        const db = req.app.get('db');

        db.get_houses()
            .then(resp => res.status(200).send(resp) )
            .catch( err => {
                res.status(500).send({errorMessage: "Something bad"});
            });
    
    },


    createHouses: ( req, res, next) => {
        let db = req.app.get('db');
        let { name, age, color } = req.body;
        

        db.create_houses([ name, age, color ])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Something bad with create"});
             
            } );
    },

        deleteHouses: (req, res, next) => {
            const db = req.app.get('db');
            const { params } = req;
           
            db.delete_houses( [params.id])
            .then(resp => res.sendStatus(200) )
            .catch( err =>{
                res.status(500).send({errorMessage: "Something bad with delete"})
            } );
        }
}