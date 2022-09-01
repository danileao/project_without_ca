import { FacilityService } from '../facility/facility.service'
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

    const facilityService = new FacilityService()
    const facility = await facilityService.findById(data.facilityId)

    if (!facility) {
      throw new Error('Facility does not exists!')
    }

    if (!facility.is_open) {
      throw new Error('Facility is closed!')
    }

    await orderRepositoryCreate.create(data)
  }

  async findByDocument(document: string) {
    const orderRepository = new OrderRepository()
    const orders = await orderRepository.findByDocument(document)
    return orders
  }
}
