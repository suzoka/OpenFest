import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('advices', (table) => {
      table.string('slug').unique().notNullable()
    })
  }

  async down() {
  }
}
