import { Order } from './order'
import { OrderRepository } from './order.repository'

export class OrderService {
  async create(data: Order) {
    const orderRepositoryCreate = new OrderRepository()

    if (!data.document) {
      throw new Error('Document is required')
    }
    if (!data.total) {
      throw new Error('total is required')
    }

    await orderRepositoryCreate.create(data)
  }

  async findByDocument(document: string) {
    const orderRepository = new OrderRepository()
    const orders = await orderRepository.findByDocument(document)
    return orders
  }
}
