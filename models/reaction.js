const { Schema, Types } = require('mongoose');
const dateMaker = require('../utils/dateMaker');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId, 
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    userName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now,    
        get: timestamp => dateMaker(timestamp)     
    },
  },
    {
      toJSON: {
        getters: true
      },
      id: false
    },
  );


 
module.exports = reactionSchema;