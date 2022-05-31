const MIN_LENGTH = 16
const MAX_LENGTH = 32
const SPECIAL_CHARACTERES = '!@#$%^&*)(+=._-'

export type Response = {
  result: boolean
  errors: string[]
}

export const passwordValidator = (password: string): Response => {
  let response: Response = {
    result: false,
    errors: []
  }
  
  if (password.length < MIN_LENGTH) {
    response.errors.push('Password is too short')
  }
  if (password.length > MAX_LENGTH) {
    response.errors.push('Password is too long')
  }
  if (!lowerCaseValidator(password)) {
    response.errors.push('Password must contain at least one lower case letter')
  }
  if (!upperCaseValidator(password)) {
    response.errors.push('Password must contain at least one upper case letter')
  }
  if (!specialCharactersValidator(password)) {
    response.errors.push('Password must contain at least two special characters')
  }
  if (!sequenceValidator(password)) {
    response.errors.push('Password must not contain sequence')
  }

  if (response.errors.length > 0) {
    return response
  }

  return {
    result: true,
    errors: ['']
  }
}

const lowerCaseValidator = (password: string): boolean => {
  let hasLowerCase = false
  password.split('').forEach((char) => {
    if (SPECIAL_CHARACTERES.includes(char)) {
      return true
    }
    if (char.toLowerCase() == char) {
      hasLowerCase = true
    }
  })
  return hasLowerCase
}

const upperCaseValidator = (password: string): boolean => {
  let hasUpperCase = false
  password.split('').forEach((char) => {
    if (SPECIAL_CHARACTERES.includes(char)) {
      return true
    }
    if (char.toUpperCase() === char) {
      hasUpperCase = true
    }
  })
  return hasUpperCase
}

const specialCharactersValidator = (password: string): boolean => {
  const specialCaracteres = password.split('').filter((char) => SPECIAL_CHARACTERES.includes(char))

  if (specialCaracteres.length < 2) {
    return false
  }

  return true
}

const sequenceValidator = (password: string): boolean => {
  for (let i = 0; i < password.length; i++) {
    if (+password[i + 1] === +password[i] + 1 && +password[i + 2] === +password[i] + 2) {
      return false
    }
  }

  for (let i = 0; i < password.length; i++) {
    if (
      String.fromCharCode(password.charCodeAt(i) + 1) === password[i + 1] &&
      String.fromCharCode(password.charCodeAt(i) + 2) === password[i + 2]
    ) {
      return false
    }
  }

  return true
}

console.log(sequenceValidator('@D0w4ab123di3fMatheusRib'))
