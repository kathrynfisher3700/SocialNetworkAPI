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
            { userName: 'Banana Pants', email: 'bananasplit@gmail.com' },
            { userName: 'Jean-Luc Picard', email: 'enterprise@space.net' },
            { userName: 'JarJar Binks', email: 'dissapointing@gmail.com' },
            { userName: 'William Riker', email: 'number2@spacestuff.net' },
            { userName: 'Boomer', email: 'mycat@thecutest.com' },        
          ]);
        console.log('Inserted users:', insertedUsers);
      } catch (err) {
        console.log(err);
      }
    }
  });


module.exports = User;