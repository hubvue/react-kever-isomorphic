import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Context, Next } from '@kever/core'
import { BasePlugin, registerPlugin, PluginType } from '@kever/ioc'
import 'isomorphic-fetch'
import * as fs from 'fs'
import { Provider } from 'react-redux'
import App from './web/App'
import routes from './web/routes/index'
import configurStore from './web/store'

type ReturnType<T> = T extends (arg: any) => infer U ? U : never

@registerPlugin('SSRPlugin', PluginType.global)
export default class SSRPlugin implements BasePlugin {
  private template: string
  private routes: typeof routes
  private store: ReturnType<typeof configurStore>
  constructor() {
    this.template = fs.readFileSync('./lib/assets/index.html', 'utf8')
    this.routes = routes
    // fs.unlinkSync('./lib/assets/index.html')
    this.store = configurStore()
  }
  async ready(ctx: Context, next: Next) {
    const checkRoute = this.checkRouteUrl(ctx.url)
    if (!checkRoute) {
      await next()
    } else {
      const markHTML = await this.getRenderToString(ctx.url)
      const store = JSON.stringify(this.store.getState())
      const injectScriptHTML = this.template.replace(
        '<!--inject-script-->',
        `
      <script> window.INITIAL_STORE=${store}</script>
      `
      )
      const renderHTML = injectScriptHTML.replace('<!--inject-ssr-->', markHTML)
      ctx.body = renderHTML
    }
  }
  checkRouteUrl(url: string): boolean {
    for (let route of this.routes) {
      if (matchPath(url, route)) {
        return true
      }
    }
    return false
  }
  async getStore() {
    let promises = []
    for (let route of this.routes) {
      if (route.component && route.component.initialAction) {
        const action = await route.component.initialAction()
        const diapatch = this.store.dispatch(action)
        promises.push(Promise.resolve(diapatch))
      }
    }
    return promises
  }
  async getRenderToString(url: string) {
    await Promise.all(await this.getStore())
    const context = {}
    console.log('store', this.store.getState())
    const markHTML = renderToString(
      <Provider store={this.store}>
        <StaticRouter location={url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    )
    return markHTML
  }
}
