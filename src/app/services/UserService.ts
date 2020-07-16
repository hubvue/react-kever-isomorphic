import { Injectable } from '@kever/ioc'

@Injectable('user')
export default class UserService {
  async getUser() {
    return {
      name: '王大冲',
      age: 100,
    }
  }
}
