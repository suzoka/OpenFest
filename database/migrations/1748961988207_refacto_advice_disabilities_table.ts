import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('advices', (table) => {
      table.dropColumn('disability_type')
      table.boolean('for_pmr').defaultTo(false)
      table.boolean('for_cimp').defaultTo(false)
      table.boolean('for_ds').defaultTo(false)
    })
    this.schema.raw('DROP TYPE IF EXISTS advice_disability_type')
  }
}
