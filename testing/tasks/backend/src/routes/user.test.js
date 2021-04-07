const req = require('supertest')
const { connect, disconnect, cleanup } = require('../db')
const User = require('../models/user.model')
const app = require('../app')

describe('user', () => {
  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()
  })

  afterAll(async () => {
    await disconnect()
  })

  it('should create user correctly', async () => {
    const user = { email: 'maria@test.com', password: '12345' }
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
    expect(res.body.token).toMatch(/^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$/)
  })

  it('should not create user if there is no email', async () => {
    const user = { password: '12345' }
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email is required/i)
  })

  it('should not create user if email is invalid', async () => {
    const user = { email: 'maria', password: '12345' }
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email is not valid/i)
  })

  it('should not create user if email already exists', async () => {
    const user = { email: 'maria@test.com', password: '12345' }

    // await User.create(user)
    await req(app).post('/users/signup').send(user)
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email already exists/i)
  })

  it('should login user correctly', async () => {
    const user = { email: 'maria@test.com', password: '12345' }

    await User.create(user)
    const res = await req(app).post('/users/signin').send(user)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
    expect(res.body.token).toMatch(/^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$/)
  })

  it('should not login user if email does not exists', async () => {
    const user = { email: 'maria@test.com', password: '12345' }

    const res = await req(app).post('/users/signin').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/invalid email or password/i)
  })

  it('should not login user if password does not match', async () => {
    const user = { email: 'maria@test.com', password: '12345' }

    await User.create(user)
    const res = await req(app).post('/users/signin').send(
      { ...user, password: 'invalid' }
    )

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/invalid email or password/i)
  })
})
