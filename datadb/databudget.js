const mongoose = require("mongoose");

const colorRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/i;

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return colorRegex.test(value);
            },
            message: "Color must be a valid hexadecimal",
        },
    },
}, { collection: 'databudget' });

module.exports = mongoose.model('databudget', budgetSchema);
s