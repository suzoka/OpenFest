import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Advice from '#models/advice'

export default class SelectedAdvice extends BaseModel {
  public static table = 'selected_advices'

  @column({ isPrimary: true })
  declare id: string

  @column({ columnName: 'user_id' })
  declare userId: string

  @column({ columnName: 'advice_id' })
  declare adviceId: string

  @column({ columnName: 'is_checked' })
  declare isChecked: boolean

  @column.dateTime({ columnName: 'checked_at' })
  declare checkedAt: DateTime | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime | null

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Advice)
  declare advice: BelongsTo<typeof Advice>
}
