export class Facility {
  name: string
  is_open: boolean
  id: string

  constructor(name: string, is_open: boolean, id: string) {
    this.name = name
    this.is_open = is_open
    this.id = id
  }
}
