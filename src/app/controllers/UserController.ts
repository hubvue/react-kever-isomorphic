import { BaseController, Controller, Context, Next } from '@kever/core'
import { Get } from '@kever/router'
import { Inject } from '@kever/ioc'
import UserService from '../services/UserService'

@Controller('/api/user')
export default class IndexController extends BaseController {
  @Inject('user')
  private userService: UserService
  @Get('/getUser')
  async index(ctx: Context, next: Next) {
    const data = await this.userService.getUser()
    ctx.body = data
  }
}
