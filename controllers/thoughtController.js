const { Thought, User } = require('../models/thought');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      
      const userInfo = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: newThought._id } },
        { new: true }
        );
        if (!userInfo) {
          return res.status(404).json({ message: 'No User is attached to this Thought.' });
        }

        res.json(newThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res){
    try {
        const thought = await Thought.findOneAndDelete({_id:req.params.thoughtId});

    if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
        }

        const userInfo = User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        );
        if (!userInfo)
        return res.status(404).json({ message: 'Deleted, but no User is attached to this Thought.' });
    } catch (err) {
        res.status(500).json(err);
      }
  },
  async updateThought(req, res){
    try{
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true},
            {new: true}
        );

        if(!thought) {
          return res.status(404).json({ message: 'No thought with that ID' });
        }
    res.json(thought)
    } catch (err) {
    res.status(500).json(err);
  }
},
async addReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID!' });
    }

    res.json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},
// remove reaction from a thought
async removeReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID!' });
    }

    res.json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},
};
