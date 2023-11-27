const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

User.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      try {
        const insertedUsers = await User
          .insertMany([
            { username: 'Banana Pants', email: 'bananasplit@gmail.com' },
            { username: 'Jean-Luc Picard', email: 'enterprise@space.net' },
            { username: 'JarJar Binks', email: 'dissapointing@gmail.com' },
            { username: 'William Riker', email: 'number2@spacestuff.net' },
            { username: 'Boomer', email: 'mycat@thecutest.com' },        
          ]);
        console.log('Inserted users:', insertedUsers);
      } catch (insertedError) {
        console.log(insertError);
      }
    }
  });


module.exports = User;