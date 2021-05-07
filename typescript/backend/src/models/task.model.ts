import mongoose from 'mongoose'
import { IUser } from './user.model'

export interface ITask extends mongoose.Document {
  title: string
  description: string
  done: boolean
  user: IUser['_id']
}

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  done: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
})

export default mongoose.model<ITask>('Task', taskSchema)
