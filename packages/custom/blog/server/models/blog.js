'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Goal Schema
 */
var BlogSchema = new Schema({
    title:  String,

    author: String,

    description: String,

    comments: [{comment : String, name: String, email: String , date: Date }],

    created_at: { type: Date, default: Date.now },

    updated_at: { type: Date, default: Date.now },

    hidden: Boolean,

    meta: {
      votes: Number,
      favs:  Number
    }
});

/**
 * Statics
 */


mongoose.model('Blog', BlogSchema);