const { model, Schema, models } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator(email) {
        return models.User.findOne({ email })
          .then(user => !user)
          .catch(() => false)
      },
      message: 'Email must be unique'
    }
  },
  password: {
    type: String,
    require: true,
  },
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;
