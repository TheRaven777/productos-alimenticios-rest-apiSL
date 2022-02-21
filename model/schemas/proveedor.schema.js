const mongoose = require("mongoose");
const proveedorSchema = new mongoose.Schema({
    nombre:{
        type: "String",
        required: true
    },
    direccion:{
        type: "String",
        required: true
    },
    telefono:{
        type: "Number",
        required: true
    }
})
module.exports = proveedorSchema;