import mongoose from "mongoose";

const userSchema = new Schema({
    nome: {
        type: String,
        required: true,
        min: 6,
        max:255
    },
    cognome: {
        type: String,
        required: true,
        min: 6,
        max:255
    },
    email: {
        type:String,
        required: true,
        min: 6,
        max:255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max:1024
    },
    date: {
        type: Date,
        default: Date.now
    }



});

const User = mongoose.model();