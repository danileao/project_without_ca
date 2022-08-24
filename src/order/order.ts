import { randomUUID } from 'crypto'

export class Order {
  id: string
  document: string
  total: number
  createdAd: Date
  isOutDelivery: boolean

  constructor(document: string, total: number) {
    this.id = randomUUID()
    this.document = document
    this.total = total
    this.createdAd = new Date()
    this.isOutDelivery = false
  }
}
