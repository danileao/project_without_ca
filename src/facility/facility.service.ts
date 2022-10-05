import { clientPG } from '../utils/database'
import { Facility } from './facility'

export class FacilityService {
  async findById(id: string) {
    try {
      const { rows } = await clientPG.query(
        'SELECT id FROM FACILITY WHERE id = $1 ',
        [id]
      )
      if (rows.length > 0) {
        return rows[0] as Facility
      }

      return null
    } catch (err) {
      console.log(err)
    } finally {
    }
  }
}
