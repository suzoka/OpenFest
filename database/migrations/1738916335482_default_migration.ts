import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {

  async up() {
    this.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    this.schema.createTable('users', (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()')).notNullable()
      table.string('name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.enu('role', ['admin', 'festival'], {
        useNative: true,
        enumName: 'user_role',
        existingType: false,
      }).defaultTo('festival').notNullable()
      table.timestamp('start_date').nullable()
      table.timestamp('end_date').nullable()
      table.boolean('is_verified').defaultTo(false).notNullable()
      table.text('description').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

    this.schema.createTable('advices', (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()')).notNullable()
      table.string('title').notNullable()
      table.text('description').nullable()
      table.text('content').nullable()
      table.enu('disability_type', ['pmr', 'cimp', 'sensorial'], {
        useNative: true,
        enumName: 'advice_disability_type',
        existingType: false,
      }).notNullable()
      table.enu('category', ['booking', 'transport', 'reception', 'discovery', 'health', 'restauration', 'place', 'event', 'accomodation', 'backhome'], {
        useNative: true,
        enumName: 'advice_category',
        existingType: false,
      }).notNullable()
      table.boolean('is_published').defaultTo(false).notNullable()
      table.timestamp('published_at').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

    this.schema.createTable('tags', (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()')).notNullable()
      table.string('title').notNullable()
      table.string('color').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

    this.schema.createTable('advice_tag', (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()')).notNullable()
      table.uuid('advice_id').notNullable().references('id').inTable('advices').onDelete('CASCADE')
      table.uuid('tag_id').notNullable().references('id').inTable('tags').onDelete('CASCADE')

      table.primary(['advice_id', 'tag_id'])
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

    this.schema.createTable('selected_advices', (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()')).notNullable()
      table.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE')
      table.uuid('advice_id').notNullable().references('id').inTable('advices').onDelete('CASCADE')
      table.boolean('is_checked').defaultTo(false).notNullable()
      table.timestamp('checked_at').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.raw('DROP EXTENSION IF EXISTS "uuid-ossp"')

    this.schema.dropTable('users')
    this.schema.dropTable('advices')
    this.schema.dropTable('tags')
    this.schema.dropTable('advice_tag')
    this.schema.dropTable('selected_advices')

    this.schema.raw('DROP TYPE IF EXISTS user_role')
  }
}
