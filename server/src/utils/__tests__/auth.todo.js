import {isPasswordAllowed, userToJSON} from '../auth'

// TODO: refactor
describe('isPasswordAllowed', () => {
  const allowedPasswords = ['skfl.123']
  const disallowedPasswords = ['ffffffffff', '111111111111', '']
  allowedPasswords.forEach((pwd) => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true)
    })
  })
  disallowedPasswords.forEach((pwd) => {
    it(`"${pwd}" should not be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(false)
    })
  })
})
test('isPasswordAllowed only allows some passwords', () => {
  expect.assertions(4)
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('ffffffffff')).toBe(false)
  expect(isPasswordAllowed('111111111111')).toBe(false)
  expect(isPasswordAllowed('skfl.123')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  const safeUser = {
    id: 'some-id',
    username: 'Sarah',
  }
  const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const jsonUser = userToJSON(user)
  console.log(jsonUser)
  expect(jsonUser).toEqual(safeUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
