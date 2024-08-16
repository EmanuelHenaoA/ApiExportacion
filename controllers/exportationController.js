const Exportation = require ('../models/exportation')

//Metodo GET
const getExportation = async(req, res) =>{
    const exportations = await Exportation.find()
    res.json(exportations)
}


const putExportation = async (req, res) =>{
    const {nameProduct, price, weight} = req.body
    let msg= 'Exportation updated'
    try{
        await Exportation.findOneAndUpdate({nameProduct:nameProduct}, {price: price, weight: weight})
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteExportation = async(req, res) =>{
    let msg = 'Exportation deleted'
    id = req.params.id
    try{
        await Exportation.findByIdAndDelete({_id: id})
    } catch (error){
        msg = 'Problems with delete'
    }
    res.json({msg:msg})
}

//Metodo POST
const postExportation = async(req, res) =>{
    let msg = 'Exportation inserted'
    const body = req.body
    try{
        const exportation = new Exportation(body)
        await exportation.save() //Insert in database
    } 
    catch(error){
        msg = error
    }
    res.json({msg:msg})
}

module.exports = {
    getExportation,
    putExportation,
    deleteExportation,
    postExportation
}
