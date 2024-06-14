const { Schema, model } = require("mongoose");

const formSchema = new Schema(
    {
        nombre: {
            type: String,
            required: [true, 'El nombre es obligatorio.'],

        },
        apellido: {
            type: String,
            required: [true, 'El apellido es obligatorio.'],

        },

        coreo: {
            type: String,
            required: [true, 'El correo es obligatorio.'],
        },

        telefono: {
            type: Number,
            required: [true, 'El correo es obligatorio.'],
        },
    },
    {
        timestamps: true
    }
);

const Form = model("Form", formSchema)

module.exports = Form