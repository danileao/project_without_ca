import http from 'http'
import { Order } from './order/order'
import { OrderService } from './order/order.services'

http
  .createServer(async (request, response) => {
    if (request.method === 'POST' && request.url === '/orders') {
      request
        .on('data', async (data) => {
          const orderService = new OrderService()
          const body = JSON.parse(data)

          await orderService.create(body)
        })
        .on('end', () => {
          return response.end('Pedido criado com sucesso!')
        })
    }
    console.log(request.url)
    if (request.method === 'GET' && request.url?.startsWith('/orders')) {
      const urlSplit = request.url.split('/')
      console.log(urlSplit)

      const orderService = new OrderService()
      const orders = await orderService.findByDocument(urlSplit[2])
      return response.end(JSON.stringify(orders))
    }
  })
  .listen(3000)
