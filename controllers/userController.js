const User = require("../models/user");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().select("-__v");
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("friends")
        .populate("thoughts");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      await Thought.deleteMany({
        _id: { $in: user.thoughts },
      });
      res.json({ message: "User and thoughts deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user with that ID!" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUserFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user with that ID!" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    console.log("is this working");
    try {
      const user = await User.findOne({ 
        _id: req.params.userId }
        ).delete({
        $pull: { friends: req.params.friendId } },
        {new: true});

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
    res.json(user)
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
