import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'similar_advices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.uuid('advice_id').unsigned().notNullable()
      table.uuid('similar_advice_id').unsigned().notNullable()
      table.foreign('advice_id').references('id').inTable('advices').onDelete('CASCADE')
      table.foreign('similar_advice_id').references('id').inTable('advices').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
