import { clientPG } from '../utils/database'
import { Order } from './order'

export class OrderRepository {
  async create({ document, total }: Order): Promise<void> {
    const { id, createdAd, isOutDelivery } = new Order(document, total)

    await clientPG.query(
      'INSERT INTO ORDERS(ID, TOTAL, CREATED_AT, IS_OUT_DELIVERY, DOCUMENT) VALUES ($1, $2, $3, $4, $5)',
      [id, total, createdAd, isOutDelivery, document]
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
