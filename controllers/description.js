module.exports = (db) => {
    const getAllDescrip = (req, response) => {
        db.desc.getAllDesc((err, queryRes) => {
            if (err) {
                //render something went wrong
                response.send('something went wrong')
            } else {
                response.send(queryRes.rows)
            }
        })
    }
    const getSingleDescrip = (req, response) => {
        db.desc.getSingleDesc(req.params, (err, queryRes) => {
            if (err){
                response.send(err)
            } else {
                response.send(queryRes.rows)
            }
        })
    }
    return {
        getAllDescrip : getAllDescrip,
        getSingleDescrip : getSingleDescrip
    }
}