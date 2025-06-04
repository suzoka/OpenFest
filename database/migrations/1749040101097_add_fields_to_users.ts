import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('users', (table) => {
      table.string('website').nullable()
      table.string('address').nullable()
      table.enu('area_type', ['indoor', 'outdoor'], {
        useNative: true,
        enumName: 'advice_area_type',
        existingType: false,
      }).nullable()
    })
  }

  async down() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('website')
      table.dropColumn('address')
      table.dropColumn('area_type')
    })

    this.schema.raw('DROP TYPE IF EXISTS advice_area_type')
  }
}
