import {sum} from "../Sum.js"

test('sum test', () => {
  const result=sum(10,10)
  expect(result).toBe(10)
})
