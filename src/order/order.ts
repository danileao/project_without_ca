import { randomUUID } from 'crypto'

export class Order {
  id: string
  document: string
  total: number
  createdAd: Date
  facilityId: string

  constructor(document: string, total: number, facilityId: string) {
    this.id = randomUUID()
    this.document = document
    this.total = total
    this.createdAd = new Date()
    this.facilityId = facilityId
  }
}
