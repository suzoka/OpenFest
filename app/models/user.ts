import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasManyThrough, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { HasManyThrough, HasOne } from '@adonisjs/lucid/types/relations'
import Advice from '#models/advice'
import SelectedAdvice from '#models/selectedAdvice'
import FestivalType from '#models/festivalType'


export enum UserRole {
  ADMIN = 'admin',
  FESTIVAL = 'festival',
}

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  public static table = 'users'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare role: UserRole

  @column.dateTime({ columnName: 'start_date' })
  declare startDate: DateTime | null

  @column.dateTime({ columnName: 'end_date' })
  declare endDate: DateTime | null

  @column({ columnName: 'is_verified' })
  declare isVerified: boolean

  @column()
  declare description: string | null

  @column()
  declare festival_type_id: string | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime | null

  @hasManyThrough([() => Advice, () => SelectedAdvice])
  declare advices: HasManyThrough<typeof Advice>

  @hasOne(() => FestivalType)
  declare festivalType: HasOne<typeof FestivalType>
}
