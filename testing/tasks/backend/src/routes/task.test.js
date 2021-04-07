const req = require('supertest')
const jwt = require('jsonwebtoken')
const app = require('../app')
const { connect, disconnect, cleanup } = require('../db')
const User = require('../models/user.model')
const Task = require('../models/task.model')

describe('task', () => {
  let user;
  let token;

  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()
    const data = { email: 'ana@test.com', password: '12345' }
    // const { body } = await req(app).post('/users/signup').send(user)

    user = await User.create(data)
    token = jwt.sign(
      { id: user._id },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 24 * 365 }
    );
  })

  afterAll(async () => {
    await disconnect()
  })

  it(
    'should create task if data is valid and user is authenticated',
    async () => {
      const task = { name: 'task 1' }
      const res = await req(app)
        .post('/tasks/')
        .send(task)
        .set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.name).toBe(task.name)
      expect(res.body.done).toBeFalsy()
      expect(res.body.user).toBe(user._id.toString())
    }
  )

  it(
    'should not create task if name is not defined',
    async () => {
      const task = {}
      const res = await req(app)
        .post('/tasks/')
        .send(task)
        .set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(400)
      expect(res.body.message).toMatch(/name is required/i)
    }
  )

  it(
    'should not create task if user is not authenticated',
    async () => {
      const task = { name: 'task 1' }
      const res = await req(app)
        .post('/tasks/')
        .send(task)

      expect(res.statusCode).toBe(401)
      expect(res.body.message).toMatch(/your session has expired/i)
    }
  )

  it(
    'should not create task if token is empty',
    async () => {
      const task = { name: 'task 1' }
      const res = await req(app)
        .post('/tasks/')
        .send(task)
        .set('Authorization', 'Bearer ')

      expect(res.statusCode).toBe(401)
      expect(res.body.message).toMatch(/your session has expired/i)
    }
  )

  it(
    'should not create task if token is invalid',
    async () => {
      const task = { name: 'task 1' }
      const res = await req(app)
        .post('/tasks/')
        .send(task)
        .set('Authorization', 'Bearer 324123.edrsd.324134')

      expect(res.statusCode).toBe(401)
      expect(res.body.message).toMatch(/invalid token/i)
    }
  )

  it(
    'should show task if owner is authenticated',
    async () => {
      const data = { name: 'task 1' }
      const task = await Task.create({ ...data, user: user._id })

      const res = await req(app)
        .get(`/tasks/${task._id}`)
        .set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.name).toBe(data.name)
      expect(res.body.done).toBeFalsy()
      expect(res.body.user).toBe(user._id.toString())
    }
  )

  it(
    'should not show task if user is not the owner',
    async () => {
      const data = { name: 'task 1' }
      const task = await Task.create({ ...data, user: user._id })

      const data2 = { email: 'juan@test.com', password: '12345' }
      const user2 = await User.create(data2)
      const token2 = jwt.sign(
        { id: user2._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 * 365 }
      );

      const res = await req(app)
        .get(`/tasks/${task._id}`)
        .set('Authorization', `Bearer ${token2}`)

      expect(res.statusCode).toBe(400)
      expect(res.body.message).toMatch(/you are not allowed/i)
    }
  )

  it(
    'should update task if owner is authenticated',
    async () => {
      const data = { name: 'task 1' }
      const task = await Task.create({ ...data, user: user._id })

      const res = await req(app)
        .put(`/tasks/${task._id}`)
        .set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.done).toBeTruthy()
    }
  )

  it(
    'should not update task if user is not the owner',
    async () => {
      const data = { name: 'task 1' }
      const task = await Task.create({ ...data, user: user._id })

      const data2 = { email: 'juan@test.com', password: '12345' }

      const user2 = await User.create(data2)
      const token2 = jwt.sign(
        { id: user2._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 * 365 }
      );

      const res = await req(app)
        .put(`/tasks/${task._id}`)
        .set('Authorization', `Bearer ${token2}`)

      expect(res.statusCode).toBe(400)
      expect(res.body.message).toMatch(/you are not allowed/i)
    }
  )

  it(
    'should delete task if owner is authenticated',
    async () => {
      const data = { name: 'task 1' }
      const task = await Task.create({ ...data, user: user._id })

      const res = await req(app)
        .delete(`/tasks/${task._id}`)
        .set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.message).toMatch(/task deleted/i)
    }
  )

  it(
    'should not delete task if user is not the owner',
    async () => {
      const data = { name: 'task 1' }
      const task = await Task.create({ ...data, user: user._id })

      const data2 = { email: 'juan@test.com', password: '12345' }
      const user2 = await User.create(data2)
      const token2 = jwt.sign(
        { id: user2._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 * 365 }
      );

      const res = await req(app)
        .delete(`/tasks/${task._id}`)
        .set('Authorization', `Bearer ${token2}`)

      expect(res.statusCode).toBe(400)
      expect(res.body.message).toMatch(/you are not allowed/i)
    }
  )
})
