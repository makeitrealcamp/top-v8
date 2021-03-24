const { sum } = require('./index')

it('should add two numbers correctly', () => {
  const result = sum(1,2)

  expect(result).toBe(3) // assertion
  expect(sum(2,5)).toBe(7)
  expect(sum(1000000, 1000000)).toBe(2000000)
})
