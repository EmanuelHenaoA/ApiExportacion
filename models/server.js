const express = require('express')
const dbConnect = require('../database/config')
require('../database/config')
const { getExportation, putExportation, deleteExportation, postExportation } = require('../controllers/exportationController')


class Server{

    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathExportation = '/api/export'
        this.route()
    }

    async dbConnection(){ //Call connect to database
        await dbConnect()
    }

route(){
    this.app.use(express.json())
    this.app.get(this.pathExportation, getExportation)
    this.app.put(this.pathExportation, putExportation)
    this.app.delete(this.pathExportation+'/:id', deleteExportation)
    this.app.post(this.pathExportation, postExportation)

}

    listen(){
        this.app.listen(process.env.PORT, () =>{
            console.log('Server is running')
        })
    }
}

module.exports = Server//Export the class Server