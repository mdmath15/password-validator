import { passwordValidator, Response } from '.'

describe('PasswordValidator', () => {
  let sut: Response

  beforeEach(() => {
    sut = {
      result: false,
      errors: ['']
    }
  })

  test('Should throws if password is less than 16 characters', () => {
    const error = 'Password is too short'
    sut = passwordValidator('any_Password!')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if password is more than 32 characters', () => {
    const error = 'Password is too long'
    sut = passwordValidator('any_Password!withmorethan32charactersEqjjewqs')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password does not have a lowercase character', () => {
    const error = 'Password must contain at least one lower case letter'
    sut = passwordValidator('ANY_UPPERCASE_CHARACTERS')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password does not have a uppercase character', () => {
    const error = 'Password must contain at least one upper case letter'
    sut = passwordValidator('any_lowercase_characters')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password does not have two special characters', () => {
    const error = 'Password must contain at least two special characters'
    sut = passwordValidator('anypasswordVALUE')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password have a sequence of numbers', () => {
    const error = 'Password must not contain sequence'
    sut = passwordValidator('any_password!VALUE1234567')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password have a sequence of letters', () => {
    const error = 'Password must not contain sequence'
    sut = passwordValidator('abc_password!VALUE1234567')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should have more than one error if the password does not pass in more cases ', () => {
    sut = passwordValidator('ANYPASSWORD')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors.length).not.toBe(0 | 1)
  })

  test('Should return success if password is correct', () => {
    sut = passwordValidator('!password@CORRECT1512')
    const { result, errors } = sut
    expect(result).toEqual(true)
    expect(errors).toEqual([''])
  })
})
