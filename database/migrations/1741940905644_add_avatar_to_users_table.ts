import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {

  async up() {
    this.schema.alterTable("users", (table) => {
      table.json("avatar").nullable()
    })
  }

  async down() {
  }
}
