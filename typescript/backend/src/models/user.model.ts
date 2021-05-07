import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
  name: string
  email: string
  password: string
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
}, {
  timestamps: true,
})

// userSchema.pre<IUser>('save', function())

const User = mongoose.model<IUser>('User', userSchema)

export default User
