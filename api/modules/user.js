const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true  },
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  lstLogTime: { type: String },
  regTime: { type: String },
  status: { type: Boolean },
});

module.exports = mongoose.model("User", userSchema);
