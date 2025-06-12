import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany, belongsTo } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import SelectedAdvice from '#models/selectedAdvice'
import FestivalType from '#models/festivalType'
import { attachment } from '@jrmc/adonis-attachment'
import type { Attachment } from '@jrmc/adonis-attachment/types/attachment'


export enum UserRole {
  ADMIN = 'admin',
  FESTIVAL = 'festival',
}

export enum AreaType {
  INDOOR = 'indoor',
  OUTDOOR = 'outdoor',
}

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  public static table = 'users'

  @attachment({ folder: 'uploads/avatars', preComputeUrl: true })
  declare avatar: Attachment

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

  @column()
  declare website: string | null

  @column()
  declare address: string | null

  @column({ columnName: 'area_type' })
  declare areaType: AreaType | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime | null

  @hasMany(() => SelectedAdvice, {
    localKey: 'id',
    foreignKey: 'userId',
  })
  declare selectedAdvices: HasMany<typeof SelectedAdvice>

  @belongsTo(() => FestivalType, {
    foreignKey: 'festival_type_id',
  })
  declare festivalType: BelongsTo<typeof FestivalType>
}
