const dotenv = require('../lib/index')

describe('cube-dotenv', () => {
  test('dotenv works properly', () => {
    dotenv.config({ path: './test/.env'})
    expect(process.env.KEY1).toBe('String 1')
    expect(process.env.KEY2).toBe('String 2 Overrided')
    expect(process.env.KEY3).toBe('String 3')
    expect(process.env.EXPENDED1).toBe('String 1')
    expect(process.env.EXPENDED2).toBe('String 2 Overrided')
    expect(process.env.EXPENDED3).toBe('String 3')
  })
})
