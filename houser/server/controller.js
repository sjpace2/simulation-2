module.exports = {
    getAllHouses: (req, res) => {
        req.app.get('db').getAllHouses()
        .then( houses => res.send(houses) )
        .catch(err=> {
            console.log(err)
        })
    }
}