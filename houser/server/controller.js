module.exports = {
    getAllHouses: (req, res) => {
        req.app.get('db').getAllHouses()
        .then( houses => res.status(200).send(houses) )
        .catch(err=> {
            console.log(err)
        })
    },

    addHouse: (req, res) => {  
        const {name, address, city, state, zipcode} = req.body;
        req.app.get('db').addHouse([name, address, city, state, zipcode])
        .then( houses => res.status(200).send(houses) )
        .catch(err=> {
            console.log(err)
        })
    },

    deleteHouse: (req, res) => {
        const {id} = req.params;
        req.app.get('db').deleteHouse([id])
        .then( houses => res.status(200).send( houses ))
        .catch(err=> {
            console.log(err)
        })
    }
}