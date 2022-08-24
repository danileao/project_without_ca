import { Client } from 'pg'

const clientPG = new Client({
  user: 'admin',
  host: 'localhost',
  database: 'modulo_clean_arch',
  password: 'admin',
  port: 5432,
})

clientPG.connect()

export { clientPG }
