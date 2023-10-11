import { Request, Response } from 'express'
import { UserService } from './service'

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body)
    res.status(200).json({
      message: 'success',
      result,
    })
  } catch (error) {
    res.status(400).json({
      message: 'failure',
    })
  }
}

export const UserController = {
  createUser,
}
