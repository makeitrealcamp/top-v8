const { sum, multiply, person, map } = require('./index')

it('should add two numbers correctly', () => {
  const result = sum(1,2)

  expect(result).toBe(3) // assertion
  expect(sum(2,5)).toBe(7)
  expect(sum(1000000, 1000000)).toBe(2000000)
})

describe('Multiply', () => {
  it('should multiply two numbers correctly', () => {
    const num1 = Math.ceil(Math.random() * 10)
    const num2 = Math.ceil(Math.random() * 10)

    expect(multiply(3,4)).toBe(12)
    expect(multiply(num1, num2)).toBe(num1 * num2)
  })

  it('should multiply 5 and 6 correctly', () => {
    expect(multiply(5,6)).toBe(30)
  })
})

describe('Person', () => {
  it('should create a person with name maria and age 24', () => {
    const maria = person('Maria', 24)

    // matchers
    expect(maria).toMatchObject({ name: 'Maria', age: 24 })
    // expect(maria).toBe(maria)
    // expect(maria.name).toBe('Maria')
    // expect(maria.age).toBe(24)
    // expect('<div><p>hola mundo</p></div>').toMatchSnapshot()
  })

  it('should be able to greet', () => {
    const maria = person('Maria', 24)

    expect(maria.greet()).toMatch(/hola/i)
  })
})

describe('Map', () => {
  it('should call callback', () => {
    const handleClick = jest.fn()

    map(handleClick)

    expect(handleClick).toHaveBeenCalledWith(1)
  })
})
