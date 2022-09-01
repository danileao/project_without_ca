import { EventEmitter } from 'node:events'
import http from 'http'
import { OrderService } from './order/order.services'

http
  .createServer(async (request, response) => {
    if (request.method === 'POST' && request.url === '/orders') {
      request.on('data', async (data) => {
        const orderService = new OrderService()
        const body = JSON.parse(data)

        try {
          await orderService.create(body)
          return response.end('Pedido enviado com sucesso')
        } catch (err: any) {
          response.statusCode = 400
          return response.end(err.message)
        }
      })
    }
    if (request.method === 'GET' && request.url?.startsWith('/orders')) {
      const urlSplit = request.url.split('/')

      const orderService = new OrderService()
      const orders = await orderService.findByDocument(urlSplit[2])
      return response.end(JSON.stringify(orders))
    }
  })
  .listen(3000)
