const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 80
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 80
    },
    image: {
        type: String,
        validate: {
            validator: function(value) {
                return /^https?:\/\/.+/.test(value);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Product", productSchema);