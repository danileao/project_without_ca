import { randomUUID } from 'crypto'

export class Order {
  id: string
  document: string
  total: number
  createdAt: Date
  facilityId: string

  constructor(document: string, total: number, facilityId: string) {
    this.id = randomUUID()
    this.document = document
    this.total = total
    this.createdAt = new Date()
    this.facilityId = facilityId
  }
}
