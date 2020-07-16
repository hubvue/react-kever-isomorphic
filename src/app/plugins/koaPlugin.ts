import { BasePlugin, registerPlugin, PluginType } from '@kever/ioc'
import { Context, Next } from '@kever/core'
import { Middleware } from 'koa'
import * as koaStatic from 'koa-static'

@registerPlugin('koaMiddleware', PluginType.global)
export default class KoaMiddleware implements BasePlugin {
  private middlewareList = new Set<Middleware>()
  constructor() {
    // add middleware
    this.middlewareList.add(koaStatic('./lib/assets'))
  }
  async ready(ctx: Context, next: Next) {
    const promiseMiddleList: Promise<any>[] = []
    this.middlewareList.forEach((middleware) =>
      promiseMiddleList.push(middleware(ctx, next))
    )
    await Promise.all(promiseMiddleList)
  }
}
