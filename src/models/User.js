const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    chat_id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, default: null },
    username: { type: String, default: null },
    region: { type: String, default: null },
    city: { type: String, default: null },
    active: { type: Boolean, default: false },
    is_admin: { type: Boolean, default: false },
    remind_time: {
        type: Number,
        enum: [ 0, 5, 10, 15, 20 ],
        default: 0
    }
}, { versionKey: false, timestamps: true })

const User = model('user', userSchema)

module.exports = User