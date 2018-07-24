const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
//========================================
// Poker Table Schema
//========================================

const TableSchema = new Schema({
    id:{
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required : true
    },
    seats: {
        type: Number,
        required : true
    },
    bb: {
        type: Number,
        required : true
    },
    sb: {
        type: Number,
        required : true
    },
    maxBuyIn: {
        type: Number,
        required : true
    },
    minBuyIn: {
        type: Number,
        required : true
    },
    privateTable: {
        type: Boolean,
        required : true
    },
    cardSuit: {
        type: String,
        required : true
    },
    cardBack: {
        type: String,
        required : true
    },
    backgroundColor: {
        type: String,
        required : true
    },
    backgroundImg: {
        type: String,
        required : true
    },
    feltColor: {
        type: String,
        required : true
    },
    feltImg: {
        type: String,
        required : true
    },
    chipColor: {
        type: String,
        required : true
    },
    type: {
        type: String,
        required : true
    },
   
},  
{
    timestamps:true
}
);


module.exports = mongoose.model('Room', TableSchema);