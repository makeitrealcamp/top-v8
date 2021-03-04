const { model, Schema, models } = require('mongoose');

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El campo nombre es requerido'],
    // minlength: [7, 'escriba un nombre más largo'],
    // maxlength: [3, 'escriba un nombre más corto'],
    enum: {
      values: ['maria', 'juan', 'ana'],
      message: 'nombre invalido'
    }
  },
  age: {
    type: Number,
    required: true,
    min: [18, 'Tienes que ser  mayor de edad'],
    max: [70, 'Intenta de nuevo más tarde'],
  },
  email: {
    type: String,
    match: [emailRegex, 'Email invalido'],
    validate: [
      {
        validator(email) {
          return models.User.findOne({ email })
            .then(user => {
              console.log(user)
              return !user
            })
            .catch(err => false)
        },
        message: 'email ya existe'
      }
    ]
  },
  working: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;

