import { User } from './model'
import { IUser } from './interface'
import config from '../../../config'
import { generatedUserId } from './utils'

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const id = await generatedUserId()
  payload.id = id

  //generate auto student password
  if (!payload.password) {
    payload.password = config.default_student_pass as string
  }

  const result = await User.create(payload)
  if (!result) {
    throw new Error('Failed to create user')
  }
  return result
}

export const UserService = {
  createUser,
}
