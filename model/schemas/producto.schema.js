const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
    grupo:{
        type: "String",
        required: true
    },
    marca:{
        type: "String",
        required: true
    },
    precio:{
        type: "Number",
        required: true,
        min: 5000,
        max: 100000
    },
    fechaDeVencimiento:{
        type: "Date",
        required: true
    },
    tipo:{
        type: "String",
        required: true
    },
    lote:{
        type: "String",
        required: true
    }
});

module.exports = productoSchema;