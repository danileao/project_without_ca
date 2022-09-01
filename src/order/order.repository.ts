import { clientPG } from '../utils/database'
import { Order } from './order'

export class OrderRepository {
  async create({ document, total, facilityId }: Order): Promise<void> {
    const { id, createdAd } = new Order(document, total, facilityId)

    await clientPG.query(
      'INSERT INTO ORDERS(ID, TOTAL, CREATED_AT, DOCUMENT, facility_id) VALUES ($1, $2, $3, $4, $5)',
      [id, total, createdAd, document, facilityId]
    )
  }

  async findByDocument(document: string) {
    try {
      const { rows } = await clientPG.query(
        'SELECT * FROM ORDERS WHERE document = $1 ',
        [document]
      )

      return rows
    } catch (err) {
      console.log(err)
    } finally {
    }
  }
}
