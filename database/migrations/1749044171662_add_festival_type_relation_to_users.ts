import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('users', (table) => {
      table.uuid('festival_type_id')
        .references('id')
        .inTable('festival_types')
        .onDelete('SET NULL')
    })
  }

  async down() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('festival_type_id')
    })
  }
}
