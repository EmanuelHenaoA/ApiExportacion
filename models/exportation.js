const {model, Schema} = require('mongoose')

const ExportationSchema = new Schema ({
    nameProduct: {
        type: String,//Tipo de dato
        unique: true,//Unico
        required:[true, 'The name is required'],//Requerido
        minlength:[3, 'Min 3 characters']
    },
    price: {
        type: Number,
        required:[true, 'The price is required'],
        minlength:[3, 'Min 3 characters']
    },
    weight: {
        type: String,
        required:[true, 'The weight is required'],

    },
}
)

module.exports = model('Exportation', ExportationSchema, 'exportation') //  Crea la coleccion si no existe y exporta