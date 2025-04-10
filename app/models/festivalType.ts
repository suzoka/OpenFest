import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class FestivalType extends BaseModel {
  public static table = 'festival_types'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare color: string

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime | null

  @hasMany(() => User)
  declare users: HasMany<typeof User>
}
