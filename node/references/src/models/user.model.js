const { model, Schema, models } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      async validator(email) {
        const user = await models.User.findOne({ email })
        return !user

        // return models.User.findOne({ email })
        //   .then(user => !user)
        //   .catch(() => false)
      },
      message: 'Email must be unique'
    }
  },
  password: {
    type: String,
    require: true,
  },
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;
