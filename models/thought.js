const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String, 
        required: true, 
        maxlength: 280, 
    },
    createdAt: {
        type: Date, 
        default: Date.now,      
    },
    userName: {
        type: String,
        required: true,
    },

    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reactions',
      },

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
  });

  const Thought = model('thought', thoughtSchema);

  Thought.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      try {
        const insertedThoughts = await Thought
          .insertMany([
            { thoughtText: 'Space is very big.', userName: 'William Riker' },
            { thoughtText: 'Food. Treats. Belly Rubs.', userName: 'Boomer' },
            { thoughtText: 'Banana Splits are better without peanuts', userName: 'Banana Pants' },
          ]);
        console.log('Inserted thoughts:', insertedThoughts);
      } catch (insertedError) {
        console.log(insertError);
      }
    }
  });


module.exports = Thought;