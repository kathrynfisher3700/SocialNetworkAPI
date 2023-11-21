const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId, 
        default: ObjectId, 
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
    },
  });


  const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;